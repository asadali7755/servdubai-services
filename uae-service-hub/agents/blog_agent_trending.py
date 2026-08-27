"""
Blog Agent 2 — "Trending Content" agent.

Researches what content/topics related to a service category we offer are
getting the most attention/discussion right now in the UAE (the general
industry topic, never the "Al Haya" brand itself), picks the single best
angle, and turns it into an original trend-spotlight blog post published
under Al Haya's own name on servedubai.com.
"""

from datetime import datetime

from blog_common import (
    NO_EXTERNAL_MENTIONS_RULE,
    call_gemini,
    call_perplexity,
    pick_next_topic,
    save_generated_post,
)

PERPLEXITY_SYSTEM_PROMPT = """You are a trend researcher studying the \
{service} industry in the UAE. Search the web and find what content, tips, \
techniques, or angles about {service} (the general service topic, not any \
specific company) are getting the most attention and discussion right now. \
Return a concise 200-250 word summary covering: (1) the single most \
trending topic/angle right now, (2) why it matters to UAE residents \
(climate, seasonality, lifestyle, property type), and (3) any practical \
technique or tip tied to it. Do not mention specific website names, \
usernames, or platforms in your summary — just the substance."""


def build_gemini_prompt(service: dict, research: str) -> str:
    return f"""You are the content writer for Al Haya Cleaning Services, a \
professional cleaning company in the UAE. Using the research below about \
what's trending right now around "{service['name']}", write an ORIGINAL \
trend-spotlight blog post for our own website (servedubai.com) — in our \
own voice, as our own expertise.

Research (background only — do not cite it, do not name any source):
{research}

{NO_EXTERNAL_MENTIONS_RULE}

Return ONLY valid JSON (no markdown, no extra text) matching exactly this \
shape:
{{
  "slug": "short-kebab-case-slug-for-this-post",
  "title": "SEO <title> tag, max 60 chars",
  "h1": "Page heading, can be same as title or slightly expanded",
  "description": "Meta description, 140-160 chars, includes {service['name']}",
  "excerpt": "1-2 sentence teaser for the blog index card",
  "intro": ["1-2 paragraphs introducing the trend and why UAE readers should care now"],
  "sections": [
    {{"heading": "The trend explained", "body": ["1-2 paragraphs"], "bullets": ["optional bullet points"]}},
    {{"heading": "A practical technique or how-to related to it", "body": ["1-2 paragraphs"], "bullets": ["optional steps or tips"]}},
    {{"heading": "Why it matters in the UAE specifically", "body": ["1-2 paragraphs"]}}
  ],
  "faqs": [
    {{"question": "A natural follow-up question about this trend", "answer": "A clear, useful answer"}},
    {{"question": "Another relevant question", "answer": "A clear, useful answer"}}
  ],
  "relatedServices": ["{service['slug']}"]
}}

Rules:
- Write in English, for a UAE/Dubai audience.
- 700-1000 words total across intro + sections + faqs.
- Lean on the "sections" as the main body — this is a trend/insight piece, \
not a pure FAQ page.
- Return ONLY the JSON object."""


def _estimate_read_mins(post: dict) -> int:
    text_parts = list(post.get("intro", []))
    for section in post.get("sections", []):
        text_parts.extend(section.get("body", []))
        text_parts.extend(section.get("bullets", []))
    for faq in post.get("faqs", []):
        text_parts.append(faq.get("question", ""))
        text_parts.append(faq.get("answer", ""))
    word_count = sum(len(t.split()) for t in text_parts)
    return max(3, round(word_count / 200))


def generate() -> bool:
    service = pick_next_topic()
    print(f"\n📈 [Agent 2 — Trending Content] Topic: {service['name']}")

    query = f"most trending content, tips and discussions about {service['name']} in UAE/Dubai right now"
    system_prompt = PERPLEXITY_SYSTEM_PROMPT.format(service=service["name"])

    print("   Researching trending content...")
    research = call_perplexity(query, system_prompt)

    print("   Generating blog post...")
    post = call_gemini(build_gemini_prompt(service, research))

    if not post or "title" not in post:
        print("   ❌ No post generated.")
        return False

    # Deterministic fields we don't trust the model to get right.
    post["image"] = service["image"]
    post["datePublished"] = datetime.now().strftime("%Y-%m-%d")
    post["relatedServices"] = list(
        {service["slug"], *post.get("relatedServices", [])}
    )
    post["readMins"] = _estimate_read_mins(post)
    post.setdefault("slug", f"{service['slug']}-trending-guide")

    return save_generated_post(post)


if __name__ == "__main__":
    import sys

    sys.exit(0 if generate() else 1)
