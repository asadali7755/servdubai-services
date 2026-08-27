"""
Shared helpers for the daily blog agents (blog_agent_qa.py, blog_agent_trending.py).

Both agents research a *service category* (never the "Al Haya" brand itself)
via Perplexity, then ask Gemini to write an original BlogPost-shaped JSON
object for lib/data/blog.ts, in Al Haya's own voice, with zero mentions of
any other website / brand / forum / social platform.
"""

import json
import os
import re
import time
from datetime import datetime, timedelta
from pathlib import Path

import requests
from dotenv import load_dotenv
from google import genai

from services_data import SERVICES

# ── Load env vars ────────────────────────────────────────────
env_path = Path(__file__).parent.parent / ".env.local"
load_dotenv(env_path, override=False)

PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

os.environ.pop("GOOGLE_API_KEY", None)
gemini_client = genai.Client(api_key=GEMINI_API_KEY)
GEMINI_MODELS = ["gemini-2.5-flash", "gemini-2.5-flash-lite"]

# ── Paths ─────────────────────────────────────────────────────
REPO_ROOT = Path(__file__).parent.parent
LIB_DATA_DIR = REPO_ROOT / "lib" / "data"
BLOG_TS_PATH = LIB_DATA_DIR / "blog.ts"
GENERATED_POSTS_PATH = LIB_DATA_DIR / "generated-blog-posts.json"
TOPIC_HISTORY_PATH = Path(__file__).parent / "blog_topic_history.json"

TOPIC_COOLDOWN_DAYS = 7  # don't repeat the same service topic within this window

# ── Safety net: never let these slip into published content ──
BANNED_MENTION_PATTERNS = [
    r"\breddit\b", r"\binstagram\b", r"\bfacebook\b", r"\btiktok\b",
    r"\btwitter\b", r"\bx\.com\b", r"\byoutube\b", r"\bquora\b",
    r"\btrustpilot\b", r"\byelp\b", r"\bgoogle reviews?\b",
    r"\baccording to [a-z0-9 ]+\.(com|ae|net|org)\b",
    r"https?://\S+",
]

NO_EXTERNAL_MENTIONS_RULE = """
STRICT RULE — this content is for Al Haya Cleaning Services' own website only:
- Never name, cite, or reference any other website, business, competitor, forum,
  review platform, or social media platform (e.g. Reddit, Instagram, Facebook,
  TikTok, YouTube, Google reviews, Trustpilot, or any other company name).
- Never write phrases like "according to [source]", "as seen on...", or
  "many people online say...". Use the research only as background knowledge —
  present every insight as Al Haya's own original expertise and experience.
- Do not include any URLs or links to external sites.
- Write entirely in Al Haya Cleaning Services' own voice, for its own UAE audience.
"""


def contains_banned_mention(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(p, lowered) for p in BANNED_MENTION_PATTERNS)


def slugify(text: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return re.sub(r"-{2,}", "-", slug)


# ══════════════════════════════════════════════════════════
# PERPLEXITY RESEARCH (generic — system prompt supplied by caller)
# ══════════════════════════════════════════════════════════
def call_perplexity(query: str, system_prompt: str) -> str:
    if not PERPLEXITY_API_KEY:
        return f"No Perplexity key. Query was: {query}"

    headers = {
        "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": "sonar",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": query},
        ],
        "max_tokens": 700,
        "temperature": 0.2,
    }

    try:
        r = requests.post(
            "https://api.perplexity.ai/chat/completions",
            json=payload,
            headers=headers,
            timeout=45,
        )
        r.raise_for_status()
        return r.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"   ⚠️  Perplexity error: {e}")
        return f"Research unavailable. Topic: {query}"


# ══════════════════════════════════════════════════════════
# GEMINI GENERATION (generic — full prompt supplied by caller)
# ══════════════════════════════════════════════════════════
def call_gemini(prompt: str) -> dict:
    for model_name in GEMINI_MODELS:
        try:
            response = gemini_client.models.generate_content(
                model=model_name,
                contents=prompt,
            )
            text = response.text.strip()

            if text.startswith("```"):
                parts = text.split("```")
                text = parts[1] if len(parts) > 1 else text
                if text.startswith("json"):
                    text = text[4:]
            text = text.strip()

            return json.loads(text)

        except json.JSONDecodeError as e:
            print(f"   ⚠️  JSON parse error from {model_name}: {e}")
            continue
        except Exception as e:
            err = str(e)
            print(f"   ❌ {model_name} error: {err[:150]}")
            if "429" in err or "RESOURCE_EXHAUSTED" in err:
                print("   ⏳ Rate limit, waiting 30s...")
                time.sleep(30)
                continue
            continue

    return {}


# ══════════════════════════════════════════════════════════
# TOPIC ROTATION
# ══════════════════════════════════════════════════════════
def _load_topic_history() -> dict:
    if TOPIC_HISTORY_PATH.exists():
        try:
            with open(TOPIC_HISTORY_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}


def _save_topic_history(history: dict) -> None:
    with open(TOPIC_HISTORY_PATH, "w", encoding="utf-8") as f:
        json.dump(history, f, ensure_ascii=False, indent=2)


def pick_next_topic() -> dict:
    """Rotate through SERVICES, skipping any blogged about within TOPIC_COOLDOWN_DAYS."""
    history = _load_topic_history()
    now = datetime.now()
    cutoff = now - timedelta(days=TOPIC_COOLDOWN_DAYS)

    eligible = []
    for service in SERVICES:
        last_used = history.get(service["slug"])
        if last_used:
            try:
                last_used_dt = datetime.fromisoformat(last_used)
                if last_used_dt > cutoff:
                    continue
            except ValueError:
                pass
        eligible.append(service)

    # If every topic is on cooldown, just pick the least-recently-used one.
    if not eligible:
        eligible = sorted(
            SERVICES,
            key=lambda s: history.get(s["slug"], "1970-01-01"),
        )

    chosen = eligible[0]
    history[chosen["slug"]] = now.isoformat()
    _save_topic_history(history)
    return chosen


# ══════════════════════════════════════════════════════════
# SLUG / DUPLICATE TRACKING
# ══════════════════════════════════════════════════════════
def existing_slugs() -> set:
    slugs = set()

    if BLOG_TS_PATH.exists():
        content = BLOG_TS_PATH.read_text(encoding="utf-8")
        slugs.update(re.findall(r"slug:\s*'([^']+)'", content))
        slugs.update(re.findall(r'slug:\s*"([^"]+)"', content))

    if GENERATED_POSTS_PATH.exists():
        try:
            with open(GENERATED_POSTS_PATH, "r", encoding="utf-8") as f:
                posts = json.load(f)
            slugs.update(p["slug"] for p in posts if "slug" in p)
        except Exception:
            pass

    return slugs


def unique_slug(base_slug: str) -> str:
    slugs = existing_slugs()
    if base_slug not in slugs:
        return base_slug
    today_suffix = datetime.now().strftime("%Y-%m-%d")
    candidate = f"{base_slug}-{today_suffix}"
    counter = 2
    while candidate in slugs:
        candidate = f"{base_slug}-{today_suffix}-{counter}"
        counter += 1
    return candidate


# ══════════════════════════════════════════════════════════
# SAVE GENERATED POST
# ══════════════════════════════════════════════════════════
REQUIRED_FIELDS = [
    "slug", "title", "h1", "description", "excerpt", "image",
    "datePublished", "readMins", "intro", "sections", "faqs", "relatedServices",
]


def validate_post(post: dict) -> list:
    missing = [f for f in REQUIRED_FIELDS if f not in post or post[f] in (None, "", [])]
    return missing


def save_generated_post(post: dict) -> bool:
    missing = validate_post(post)
    if missing:
        print(f"   ❌ Generated post missing required fields: {missing}")
        return False

    flat_text = json.dumps(post, ensure_ascii=False)
    if contains_banned_mention(flat_text):
        print("   ❌ Generated post contains a banned external mention, discarding.")
        return False

    post["slug"] = unique_slug(slugify(post["slug"]))

    existing = []
    if GENERATED_POSTS_PATH.exists():
        try:
            with open(GENERATED_POSTS_PATH, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            existing = []

    existing.append(post)

    GENERATED_POSTS_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(GENERATED_POSTS_PATH, "w", encoding="utf-8") as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

    print(f"   ✅ Saved generated post: {post['slug']}")
    return True
