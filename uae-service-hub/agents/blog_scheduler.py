"""
Daily blog scheduler — the single entry point the GitHub Actions workflow runs.

Alternates between the two blog agents by day so the combined output is
exactly ONE new blog post per day:
  - Odd day-of-year  -> Agent 1 ("Top Questions")
  - Even day-of-year -> Agent 2 ("Trending Content")
"""

from datetime import datetime

import blog_agent_qa
import blog_agent_trending


def main() -> bool:
    day_of_year = datetime.now().timetuple().tm_yday
    agent_name = "Top Questions (Agent 1)" if day_of_year % 2 == 1 else "Trending Content (Agent 2)"

    print(f"\n{'='*60}")
    print("Al Haya Daily Blog Scheduler")
    print(f"Date: {datetime.now().strftime('%Y-%m-%d')}  (day {day_of_year} of year)")
    print(f"Running: {agent_name}")
    print(f"{'='*60}")

    if day_of_year % 2 == 1:
        success = blog_agent_qa.generate()
    else:
        success = blog_agent_trending.generate()

    print(f"\n{'='*60}")
    print(f"Result: {'✅ post generated' if success else '❌ no post generated'}")
    print(f"{'='*60}\n")
    return success


if __name__ == "__main__":
    import sys

    sys.exit(0 if main() else 1)
