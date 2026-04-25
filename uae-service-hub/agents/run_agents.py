"""
Al Haya Cleaning Services - Daily Content Agent System
======================================================
Roz subah 8 AM pe automatically chalata hai:
1. Research Agent  -> Tavily se trending cleaning topics dhundta hai
2. Content Agent   -> Gemini se SEO-optimized content likhta hai
3. Publisher Agent -> Website ke liye JSON file update karta hai
"""

import os
import json
import asyncio
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
# Local PC pe .env.local se, GitHub Actions pe environment secrets se
env_path = Path(__file__).parent.parent / ".env.local"
load_dotenv(env_path, override=False)  # override=False: GitHub secrets ko priority milti hai

from tavily import TavilyClient
from google import genai
from google.genai import types

# ─── API Keys ─────────────────────────────────────────────
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# ─── Output path (Next.js public folder) ──────────────────
OUTPUT_PATH = Path(__file__).parent.parent / "public" / "daily-content.json"

# ─── Tavily Client ─────────────────────────────────────────
tavily_client = TavilyClient(api_key=TAVILY_API_KEY)

# ─── Gemini Setup (explicitly use GEMINI_API_KEY) ──────────
import os as _os
_os.environ.pop("GOOGLE_API_KEY", None)   # avoid conflict warning
gemini_client = genai.Client(api_key=GEMINI_API_KEY)

# ─── Cleaning Topics (aapki services) ─────────────────────
CLEANING_TOPICS = [
    "professional sofa cleaning Dubai 2025",
    "carpet cleaning tips UAE",
    "marble polishing restoration Dubai",
    "villa deep cleaning services UAE",
    "AC duct cleaning Dubai",
    "move out cleaning service UAE",
    "eco friendly cleaning products Dubai",
    "office cleaning services Abu Dhabi",
]

# ══════════════════════════════════════════════════════════
# TOOL 1: Web Research Tool (Tavily)
# ══════════════════════════════════════════════════════════
def research_cleaning_trends(query: str) -> str:
    """Tavily se cleaning trends research karta hai"""
    try:
        result = tavily_client.search(
            query=query,
            search_depth="advanced",
            max_results=5,
            include_answer=True,
        )
        
        findings = []
        if result.get("answer"):
            findings.append(f"Summary: {result['answer']}")
        
        for r in result.get("results", [])[:3]:
            findings.append(f"- {r.get('title', '')}: {r.get('content', '')[:200]}")
        
        return "\n".join(findings)
    except Exception as e:
        return f"Research error: {str(e)}"


# ══════════════════════════════════════════════════════════
# TOOL 2: Content Generation Tool (Gemini)
# ══════════════════════════════════════════════════════════
def generate_seo_content(research_data: str) -> str:
    """Gemini se SEO-optimized website content generate karta hai"""
    prompt = f"""
You are an SEO content expert for Al Haya Cleaning Services, a professional cleaning company in UAE (Dubai, Sharjah, Abu Dhabi, etc.).

Based on this research data:
{research_data}

Generate a SINGLE compelling content card for the website with this EXACT JSON format:
{{
  "title": "Catchy SEO title (max 60 chars)",
  "subtitle": "Engaging subtitle (max 100 chars)",
  "description": "2-3 sentences of valuable, SEO-optimized content about cleaning services in UAE. Include keywords naturally.",
  "tip": "One practical tip for UAE residents",
  "badge": "One of: TRENDING | NEW | PRO TIP | MUST READ | TOP PICK",
  "category": "One of: Sofa Cleaning | Carpet Cleaning | Marble Polishing | Villa Cleaning | AC Duct Cleaning | Office Cleaning | Move Out Cleaning",
  "keywords": ["keyword1", "keyword2", "keyword3"]
}}

Rules:
- Write in English
- Focus on UAE/Dubai market
- Make it helpful and informative
- Natural keyword placement for SEO
- Return ONLY valid JSON, no extra text
"""
    
    import time
    models_to_try = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"]

    for model_name in models_to_try:
        try:
            response = gemini_client.models.generate_content(
                model=model_name,
                contents=prompt,
            )
            text = response.text.strip()
            # Clean markdown code blocks if present
            if text.startswith("```"):
                parts = text.split("```")
                text = parts[1] if len(parts) > 1 else text
                if text.startswith("json"):
                    text = text[4:]
            return text.strip()
        except Exception as e:
            err = str(e)
            print(f"   ❌ {model_name} error: {err[:200]}")
            if "429" in err or "RESOURCE_EXHAUSTED" in err:
                print(f"   ⏳ Rate limit on {model_name}, waiting 15s before retry...")
                time.sleep(15)
                continue
            # Try next model on any error
            continue

    return '{"error": "All Gemini models failed."}'


# ══════════════════════════════════════════════════════════
# MAIN AGENT PIPELINE
# ══════════════════════════════════════════════════════════
async def run_content_pipeline():
    """Main pipeline: Research → Generate → Publish"""
    
    print(f"\n{'='*60}")
    print(f"Al Haya Daily Content Agent")
    print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*60}\n")
    
    # ── Step 1: Research Agent ─────────────────────────────
    print("📡 Step 1: Researching trending topics...")
    
    import random
    selected_topics = random.sample(CLEANING_TOPICS, 3)
    
    all_research = []
    for topic in selected_topics:
        print(f"   Searching: {topic}")
        result = research_cleaning_trends(topic)
        all_research.append(f"TOPIC: {topic}\n{result}")
    
    combined_research = "\n\n---\n\n".join(all_research)
    print("   ✅ Research complete!\n")
    
    # ── Step 2: Content Agent (Gemini) ────────────────────
    print("✍️  Step 2: Generating SEO content with Gemini...")
    
    import time as _time
    content_cards = []
    for i, research in enumerate(all_research):
        print(f"   Generating card {i+1}/3...")
        content_json = generate_seo_content(research)
        try:
            card = json.loads(content_json)
            # Skip error cards — don't save broken data to website
            if "error" in card and len(card) <= 2:
                print(f"   ⚠️  Card {i+1} has error, skipping...")
                continue
            card["id"] = i + 1
            content_cards.append(card)
        except json.JSONDecodeError:
            print(f"   ⚠️  JSON parse error for card {i+1}, skipping...")
            continue
        # Wait between Gemini calls to avoid rate limiting
        if i < len(all_research) - 1:
            print(f"   ⏳ Waiting 20s before next call...")
            _time.sleep(20)
    
    print(f"   ✅ Generated {len(content_cards)} content cards!\n")

    # ── Fallback: agar koi card nahi bana toh purana content rakho ──
    if len(content_cards) == 0:
        print("   ❌ No valid cards generated. Keeping existing content.")
        print(f"\n{'='*60}")
        print("⚠️  Run again after some time (Gemini rate limit)")
        print(f"{'='*60}\n")
        return None

    # ── Step 3: Publisher Agent ───────────────────────────
    print("📤 Step 3: Publishing to website...")
    
    # Load existing content (for archive)
    existing_data = {}
    if OUTPUT_PATH.exists():
        try:
            with open(OUTPUT_PATH, "r", encoding="utf-8") as f:
                existing_data = json.load(f)
        except:
            pass
    
    # Build new content package
    output = {
        "lastUpdated": datetime.now().isoformat(),
        "date": datetime.now().strftime("%Y-%m-%d"),
        "cards": content_cards,
        "totalCards": len(content_cards),
        "previousDate": existing_data.get("date", ""),
        "version": (existing_data.get("version", 0) + 1),
    }
    
    # Save to public folder
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"   ✅ Content saved to: {OUTPUT_PATH}")
    print(f"\n{'='*60}")
    print(f"✅ DONE! {len(content_cards)} cards published for {output['date']}")
    print(f"Next run: Tomorrow at 8:00 AM")
    print(f"{'='*60}\n")
    
    return output


# ══════════════════════════════════════════════════════════
# ENTRY POINT
# ══════════════════════════════════════════════════════════
if __name__ == "__main__":
    result = asyncio.run(run_content_pipeline())
    if result:
        print(f"✅ Success: {result['totalCards']} cards saved for {result['date']}")
        import sys
        sys.exit(0)
    else:
        print("⚠️  No cards generated. Exiting.")
        import sys
        sys.exit(1)
