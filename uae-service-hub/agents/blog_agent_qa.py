"""
Blog Agent 1 — "Top Questions" agent.

Researches what real questions UAE/Dubai people are asking RIGHT NOW about a
service category we offer (e.g. sofa cleaning, carpet cleaning, villa deep
cleaning — the general industry topic, never the "Al Haya" brand itself),
and what the best answers currently look like out there. Turns the most
unique/powerful question+answer into an original blog post published under
Al Haya's own name on servedubai.com.
"""

from datetime import datetime

from blog_common import (
    NO_EXTERNAL_MENTIONS_RULE,
    call_gemini,
    call_perplexity,
    pick_next_topic,
    save_generated_post,
)

PERPLEXITY_SYSTEM_PROMPT = """You are a research assistant studying the {service} \
industry in the UAE. Search the web and find the real questions people are \
asking right now about {service} (not about any specific company — the \
general service topic), and the best, most helpful answers currently being \
given anywhere online. Return a concise 200-250 word summary covering: \
(1) the 2-3 most common/valuable questions, (2) the strongest answer to \
each, and (3) any useful UAE-specific detail (climate, dust, humidity, \
tenancy rules, pricing norms) that came up. Do not mention specific website \
names, usernames, or platforms in your summary — just the substance."""


def build_gemini_prompt(service: dict, research: str) -> str:
    return f"""You are the content writer for Al Haya Cleaning Services, a \
professional cleaning company in the UAE. Using the research below about \
"{service['name']}", write an ORIGINAL, FAQ-forward blog post for our own \
website (servedubai.com) answering the real questions UAE customers are \
asking about {service['name'].lower()} — in our own voice, as our own \
expertise.

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
  "intro": ["1-2 paragraphs introducing the topic and why UAE readers care"],
  "sections": [
    {{"heading": "A relevant section heading", "body": ["1-2 paragraphs"], "bullets": ["optional bullet points"]}},
    {{"heading": "Another section heading", "body": ["1-2 paragraphs"]}}
  ],
  "faqs": [
    {{"question": "The top real question people ask", "answer": "The best, most helpful answer, 2-4 sentences"}},
    {{"question": "A second common question", "answer": "A clear, useful answer"}},
    {{"question": "A third common question", "answer": "A clear, useful answer"}}
  ],
  "relatedServices": ["{service['slug']}"]
}}

Rules:
- Write in English, for a UAE/Dubai audience.
- 700-1000 words total across intro + sections + faqs.
- Make the FAQs the strongest part — they should read like the single best \
answer to what people are really asking.
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
    print(f"\n📰 [Agent 1 — Top Questions] Topic: {service['name']}")

    query = f"most common questions and best answers about {service['name']} in UAE/Dubai today"
    system_prompt = PERPLEXITY_SYSTEM_PROMPT.format(service=service["name"])

    print("   Researching top questions & answers...")
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
    post.setdefault("slug", f"{service['slug']}-questions-answered")

    return save_generated_post(post)


if __name__ == "__main__":
    import sys

    sys.exit(0 if generate() else 1)
