"""
Al Haya Cleaning Services - Daily Content Agent System v2
=========================================================
Generates fresh AI content for:
  - Home page        → public/daily-content.json
  - 11 service pages → public/service-content/{slug}.json

APIs:
  - Perplexity  (web research)
  - Google Gemini (content writing)
"""

import os
import json
import time
import random
from datetime import datetime
from pathlib import Path
import requests
from dotenv import load_dotenv
from google import genai

# ── Load env vars ────────────────────────────────────────────
env_path = Path(__file__).parent.parent / ".env.local"
load_dotenv(env_path, override=False)

PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
GEMINI_API_KEY     = os.getenv("GEMINI_API_KEY")

# ── Output paths ────────────────────────────────────────────
PUBLIC_DIR          = Path(__file__).parent.parent / "public"
HOME_CONTENT_PATH   = PUBLIC_DIR / "daily-content.json"
SERVICE_CONTENT_DIR = PUBLIC_DIR / "service-content"

# ── Gemini setup ─────────────────────────────────────────────
import os as _os
_os.environ.pop("GOOGLE_API_KEY", None)
gemini_client = genai.Client(api_key=GEMINI_API_KEY)
GEMINI_MODELS = ["gemini-2.0-flash", "gemini-2.0-flash-lite"]

# ── All 11 services ──────────────────────────────────────────
SERVICES = [
    {
        "slug":   "sofa-cleaning",
        "name":   "Sofa Deep Cleaning & Shampooing",
        "image":  "/images/services/sofa-cleaning.webp",
        "topics": [
            "professional sofa cleaning Dubai 2025 new trends",
            "sofa shampooing tips UAE humidity and dust",
        ],
    },
    {
        "slug":   "carpet-cleaning",
        "name":   "Carpet Cleaning & Shampooing",
        "image":  "/images/services/carpet-cleaning.jpg",
        "topics": [
            "carpet steam cleaning Dubai 2025 best methods",
            "Persian rug cleaning UAE professional tips",
        ],
    },
    {
        "slug":   "mattress-cleaning",
        "name":   "Mattress Deep Cleaning",
        "image":  "/images/services/mattress-cleaning.webp",
        "topics": [
            "mattress cleaning health benefits Dubai 2025",
            "dust mite removal mattress UAE humidity",
        ],
    },
    {
        "slug":   "curtain-cleaning",
        "name":   "Curtain Cleaning",
        "image":  "/images/services/curtain-cleaning.jpg",
        "topics": [
            "curtain cleaning professional service Dubai 2025",
            "blackout curtain cleaning tips UAE dust",
        ],
    },
    {
        "slug":   "car-interior-detailing",
        "name":   "Car Interior Detailing",
        "image":  "/images/services/car-interior-detailing.jpg",
        "topics": [
            "car interior detailing Dubai 2025 professional",
            "car deep cleaning tips UAE summer heat",
        ],
    },
    {
        "slug":   "dining-chair-cleaning",
        "name":   "Dining Chair Cleaning",
        "image":  "/images/services/dining-chair-cleaning.jpg",
        "topics": [
            "dining chair upholstery cleaning Dubai 2025",
            "fabric chair stain removal UAE professional tips",
        ],
    },
    {
        "slug":   "villa-deep-cleaning",
        "name":   "Villa Deep Cleaning",
        "image":  "/images/services/villa-deep-cleaning.webp",
        "topics": [
            "villa deep cleaning service Dubai 2025",
            "move-in move-out villa cleaning UAE checklist",
        ],
    },
    {
        "slug":   "apartment-cleaning",
        "name":   "Apartment Cleaning",
        "image":  "/images/services/apartment-cleaning.webp",
        "topics": [
            "apartment deep cleaning Dubai 2025 professional",
            "studio apartment cleaning tips UAE tenants",
        ],
    },
    {
        "slug":   "office-cleaning",
        "name":   "Office Cleaning",
        "image":  "/images/services/office-cleaning.jpg",
        "topics": [
            "office commercial cleaning Dubai 2025 trends",
            "workspace sanitization productivity UAE tips",
        ],
    },
    {
        "slug":   "restaurant-kitchen-cleaning",
        "name":   "Restaurant Kitchen Cleaning",
        "image":  "/images/services/restaurant-kitchen-cleaning.jpg",
        "topics": [
            "restaurant kitchen deep cleaning Dubai 2025",
            "commercial kitchen hygiene standards UAE health",
        ],
    },
    {
        "slug":   "marble-polishing",
        "name":   "Marble Polishing",
        "image":  "/images/services/marble-polishing.webp",
        "topics": [
            "marble floor polishing restoration Dubai 2025",
            "marble cleaning maintenance tips UAE homes",
        ],
    },
]

HOME_TOPICS = [
    "professional cleaning services Dubai 2025 latest trends",
    "eco-friendly cleaning products UAE homes 2025",
    "cleaning hacks UAE expats villa apartment",
    "best cleaning service reviews Dubai 2025",
    "seasonal deep cleaning checklist UAE summer",
    "move out cleaning tips UAE tenants deposit",
]


# ══════════════════════════════════════════════════════════
# STEP 1 — PERPLEXITY RESEARCH
# ══════════════════════════════════════════════════════════
def research_with_perplexity(query: str) -> str:
    """Perplexity se real-time web research"""
    if not PERPLEXITY_API_KEY:
        return f"No Perplexity key. Query was: {query}"

    headers = {
        "Authorization": f"Bearer {PERPLEXITY_API_KEY}",
        "Content-Type":  "application/json",
    }
    payload = {
        "model": "llama-3.1-sonar-small-128k-online",
        "messages": [
            {
                "role":    "system",
                "content": (
                    "You are a research assistant specializing in cleaning services in UAE. "
                    "Search the web and return a concise 150-word summary of the latest "
                    "trends, tips, and insights about the given topic. Focus on Dubai and UAE market."
                ),
            },
            {"role": "user", "content": query},
        ],
        "max_tokens": 400,
        "temperature": 0.2,
    }

    try:
        r = requests.post(
            "https://api.perplexity.ai/chat/completions",
            json=payload,
            headers=headers,
            timeout=30,
        )
        r.raise_for_status()
        return r.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"   ⚠️  Perplexity error: {e}")
        return f"Research unavailable. Topic: {query}"


# ══════════════════════════════════════════════════════════
# STEP 2 — GEMINI CONTENT GENERATION
# ══════════════════════════════════════════════════════════
def generate_content_card(research: str, service_name: str, card_number: int) -> dict:
    """Gemini se ek SEO content card generate karta hai"""

    prompt = f"""You are an SEO content expert for Al Haya Cleaning Services, UAE.

Service: {service_name}
Research data:
{research}

Generate content card #{card_number} with this EXACT JSON format:
{{
  "title": "Catchy SEO title about {service_name} (max 60 chars)",
  "subtitle": "Engaging subtitle (max 100 chars)",
  "description": "2-3 sentences of SEO-optimized content about {service_name} in UAE. Include keywords naturally.",
  "tip": "One practical tip for UAE residents about {service_name}",
  "badge": "One of: TRENDING | NEW | PRO TIP | MUST READ | TOP PICK",
  "category": "{service_name}",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}}

Rules:
- Write in English
- Focus on UAE/Dubai market
- Make it helpful and informative
- Return ONLY valid JSON, no extra text, no markdown
"""

    for model_name in GEMINI_MODELS:
        try:
            response = gemini_client.models.generate_content(
                model=model_name,
                contents=prompt,
            )
            text = response.text.strip()

            # Remove markdown code blocks if present
            if text.startswith("```"):
                parts = text.split("```")
                text = parts[1] if len(parts) > 1 else text
                if text.startswith("json"):
                    text = text[4:]
            text = text.strip()

            card = json.loads(text)
            return card

        except json.JSONDecodeError as e:
            print(f"   ⚠️  JSON parse error from {model_name}: {e}")
            continue
        except Exception as e:
            err = str(e)
            print(f"   ❌ {model_name} error: {err[:150]}")
            if "429" in err or "RESOURCE_EXHAUSTED" in err:
                print(f"   ⏳ Rate limit, waiting 30s...")
                time.sleep(30)
                continue
            continue

    return {}


# ══════════════════════════════════════════════════════════
# GENERATE HOME PAGE CONTENT
# ══════════════════════════════════════════════════════════
def generate_home_content() -> dict:
    print("\n📰 Generating HOME PAGE content (3 cards)...")

    selected_topics = random.sample(HOME_TOPICS, 3)
    cards = []

    for i, topic in enumerate(selected_topics):
        print(f"   [{i+1}/3] Researching: {topic[:50]}...")
        research = research_with_perplexity(topic)

        print(f"   [{i+1}/3] Generating card...")
        card = generate_content_card(research, "Cleaning Services UAE", i + 1)

        if card and "title" in card:
            card["id"] = i + 1
            cards.append(card)
            print(f"   ✅ Card {i+1} done: {card.get('title', '')[:40]}")
        else:
            print(f"   ⚠️  Card {i+1} failed, skipping")

        if i < len(selected_topics) - 1:
            time.sleep(5)

    # Load existing to preserve if no new cards
    existing = {}
    if HOME_CONTENT_PATH.exists():
        try:
            with open(HOME_CONTENT_PATH, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            pass

    if not cards:
        print("   ❌ No home cards generated, keeping existing content")
        return existing

    output = {
        "lastUpdated":  datetime.now().isoformat(),
        "date":         datetime.now().strftime("%Y-%m-%d"),
        "cards":        cards,
        "totalCards":   len(cards),
        "previousDate": existing.get("date", ""),
        "version":      existing.get("version", 0) + 1,
    }

    HOME_CONTENT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(HOME_CONTENT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"   ✅ Home content saved ({len(cards)} cards, version {output['version']})")
    return output


# ══════════════════════════════════════════════════════════
# GENERATE SERVICE PAGE CONTENT
# ══════════════════════════════════════════════════════════
def generate_service_content(service: dict) -> dict:
    slug  = service["slug"]
    name  = service["name"]
    image = service["image"]

    print(f"\n🔧 Generating content for: {name}")

    # Research both topics, combine
    topic = random.choice(service["topics"])
    print(f"   Researching: {topic[:50]}...")
    research = research_with_perplexity(topic)

    # Generate 2 cards
    cards = []
    for i in range(2):
        print(f"   Generating card {i+1}/2...")
        card = generate_content_card(research, name, i + 1)

        if card and "title" in card:
            card["id"]    = i + 1
            card["image"] = image
            cards.append(card)
            print(f"   ✅ Card {i+1}: {card.get('title', '')[:40]}")
        else:
            print(f"   ⚠️  Card {i+1} failed")

        if i == 0:
            time.sleep(5)

    # Load existing
    output_path = SERVICE_CONTENT_DIR / f"{slug}.json"
    existing = {}
    if output_path.exists():
        try:
            with open(output_path, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            pass

    if not cards:
        print(f"   ❌ No cards generated for {slug}, keeping existing")
        return existing

    output = {
        "slug":         slug,
        "serviceName":  name,
        "serviceImage": image,
        "lastUpdated":  datetime.now().isoformat(),
        "date":         datetime.now().strftime("%Y-%m-%d"),
        "cards":        cards,
        "totalCards":   len(cards),
        "previousDate": existing.get("date", ""),
        "version":      existing.get("version", 0) + 1,
    }

    SERVICE_CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"   ✅ Saved {slug}.json ({len(cards)} cards)")
    return output


# ══════════════════════════════════════════════════════════
# MAIN
# ══════════════════════════════════════════════════════════
def main():
    print(f"\n{'='*60}")
    print(f"Al Haya Daily Content Agent v2")
    print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Generating: 1 home page + {len(SERVICES)} service pages")
    print(f"{'='*60}")

    results = {"home": False, "services": []}

    # ── Home page ────────────────────────────────────────────
    home = generate_home_content()
    if home and home.get("cards"):
        results["home"] = True

    # ── All 11 service pages ─────────────────────────────────
    for i, service in enumerate(SERVICES):
        result = generate_service_content(service)
        if result and result.get("cards"):
            results["services"].append(service["slug"])
        # Small pause between services
        if i < len(SERVICES) - 1:
            time.sleep(3)

    # ── Summary ──────────────────────────────────────────────
    print(f"\n{'='*60}")
    print(f"✅ DONE!")
    print(f"   Home page:     {'✅' if results['home'] else '❌'}")
    print(f"   Services done: {len(results['services'])}/{len(SERVICES)}")
    if results["services"]:
        for s in results["services"]:
            print(f"   ✅ {s}")
    print(f"   Date: {datetime.now().strftime('%Y-%m-%d')}")
    print(f"{'='*60}\n")

    total_done = (1 if results["home"] else 0) + len(results["services"])
    return total_done > 0


if __name__ == "__main__":
    import sys
    success = main()
    sys.exit(0 if success else 1)
