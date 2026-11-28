/**
 * Date each page's content last really changed, by path. The sitemap uses it as
 * that page's <lastmod>, so Google sees which pages changed and recrawls them.
 *
 * The page routine (docs/automation/page-routine.md) adds or updates one line
 * here every time it changes a page. Pages not listed keep the sitemap's
 * default date. Use the date the change went live, as 'YYYY-MM-DD'.
 */
export const PAGE_UPDATES: Record<string, string> = {
  '/dubai/umm-suqeim/floor-cleaning': '2026-11-28',
}
