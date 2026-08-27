"""
Build iPhone-compatible PDF report using fpdf2 (simpler, better compatibility)
"""
import os
from datetime import datetime

try:
    from fpdf import FPDF
except ImportError:
    os.system("pip install fpdf2")
    from fpdf import FPDF

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
OUT = os.path.join(REPO_ROOT, "ServeDubai-SEO-Audit-Report-July2026.pdf")


class Report(FPDF):
    def header(self):
        self.set_font("Helvetica", "B", 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 5, "ServeDubai.ae - SEO Audit Report | July 2026", align="C")
        self.ln(8)

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(150, 150, 150)
        self.cell(0, 10, f"Page {self.page_no()}/{{nb}}", align="C")

    def gold_line(self):
        self.set_draw_color(201, 168, 76)
        self.set_line_width(0.5)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(4)

    def section_title(self, text):
        self.set_font("Helvetica", "B", 15)
        self.set_text_color(21, 21, 21)
        self.ln(6)
        self.cell(0, 8, text)
        self.ln(10)
        self.gold_line()

    def sub_title(self, text):
        self.set_font("Helvetica", "B", 12)
        self.set_text_color(201, 168, 76)
        self.ln(4)
        self.cell(0, 7, text)
        self.ln(9)

    def body_text(self, text):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5.5, text)
        self.ln(2)

    def bullet(self, text):
        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(40, 40, 40)
        x = self.get_x()
        self.cell(8, 5, "-", ln=0)
        self.multi_cell(0, 5.5, text)
        self.ln(1)

    def check_bullet(self, text):
        self.set_font("Helvetica", "", 9.5)
        self.set_text_color(39, 174, 96)
        self.cell(8, 5, "[OK]", ln=0)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5.5, text)
        self.ln(1)

    def small_text(self, text):
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(150, 150, 150)
        self.multi_cell(0, 4.5, text)
        self.ln(2)

    def table_row(self, cols, widths, bold=False, header=False):
        if header:
            self.set_font("Helvetica", "B", 9)
            self.set_fill_color(201, 168, 76)
            self.set_text_color(255, 255, 255)
        elif bold:
            self.set_font("Helvetica", "B", 9)
            self.set_text_color(40, 40, 40)
            self.set_fill_color(248, 246, 240)
        else:
            self.set_font("Helvetica", "", 9)
            self.set_text_color(40, 40, 40)
            self.set_fill_color(255, 255, 255)

        for i, (col, w) in enumerate(zip(cols, widths)):
            self.cell(w, 7, col, border=1, fill=True)
        self.ln()


def build():
    pdf = Report()
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=20)

    # ── Page 1: Cover ──
    pdf.add_page()
    pdf.ln(20)
    pdf.set_font("Helvetica", "B", 26)
    pdf.set_text_color(21, 21, 21)
    pdf.cell(0, 12, "ServeDubai.ae", ln=True)
    pdf.set_font("Helvetica", "", 14)
    pdf.set_text_color(201, 168, 76)
    pdf.cell(0, 8, "SEO Audit Report & Competition Analysis", ln=True)
    pdf.ln(4)
    pdf.gold_line()
    pdf.ln(6)

    info = [
        ("Website:", "servedubai.ae (servedubai.com)"),
        ("Business:", "Madinat Alhaya Building Cleaning Services"),
        ("Report Date:", datetime.now().strftime("%d %B %Y")),
        ("Audit Source:", "Semrush Site Audit - May 7, 2026"),
        ("Branch:", "001-service-hub-website"),
        ("GBP Rating:", "4.3 stars (76 reviews)"),
        ("Phone:", "+971 55 127 5545"),
    ]
    for label, val in info:
        pdf.set_font("Helvetica", "B", 10)
        pdf.set_text_color(201, 168, 76)
        pdf.cell(35, 7, label)
        pdf.set_font("Helvetica", "", 10)
        pdf.set_text_color(40, 40, 40)
        pdf.cell(0, 7, val, ln=True)

    pdf.ln(10)
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(21, 21, 21)
    pdf.cell(0, 7, "Semrush Audit Before vs Target:", ln=True)
    pdf.ln(2)

    pdf.table_row(["Metric", "Before", "Target", "Status"], [50, 35, 35, 50], header=True)
    pdf.table_row(["Health Score", "87%", "95%+", "Re-crawl needed"], [50, 35, 35, 50])
    pdf.table_row(["Errors", "49", "0", "Fixed (code-side)"], [50, 35, 35, 50])
    pdf.table_row(["Warnings", "291", "<50", "Partially fixed"], [50, 35, 35, 50])
    pdf.table_row(["Text/HTML Ratio", "0.03", "0.15+", "Fixed (CSS + content)"], [50, 35, 35, 50])

    # ── Section 1: Fixes ──
    pdf.add_page()
    pdf.section_title("1. Semrush Audit Fixes - Completed")

    pdf.sub_title("1.1 Inline Style to CSS Migration")
    pdf.body_text("Semrush flagged low text/HTML ratio (0.03). Inline styles were inflating HTML size relative to text content.")
    pdf.bullet("763 inline styles reduced to 70 (91% reduction) across 11 files")
    pdf.bullet("Created organized CSS classes with page-specific prefixes: bi-*, ar-*, he-*, bp-*, ws-*, ct-*, sp-*, sa-*")
    pdf.bullet("Remaining 70 inline styles are truly dynamic values (animation zIndex, conditional styles)")
    pdf.small_text("Commit: 66b8e5d")

    pdf.sub_title("1.2 Hero Image XMP Metadata")
    pdf.body_text("All 5 hero carousel images now have embedded XMP metadata (title, description, tags, rating) for Google Image Search indexing.")
    pdf.table_row(["Image File", "SEO Title", "Format"], [65, 65, 40], header=True)
    pdf.table_row(["cleaning-services-UAE", "Cleaning Services UAE", "WebP+XMP"], [65, 65, 40])
    pdf.table_row(["marble-polishing-dubai", "Marble Polishing Dubai", "WebP+XMP"], [65, 65, 40])
    pdf.table_row(["professional-cleaning-UAE", "Professional Cleaning UAE", "WebP+XMP"], [65, 65, 40])
    pdf.table_row(["sofa-carpet-cleaning", "Sofa Carpet Cleaning", "WebP+XMP"], [65, 65, 40])
    pdf.table_row(["villa-apartment-cleaning", "Villa Apartment Cleaning", "WebP+XMP"], [65, 65, 40])
    pdf.small_text("Script: scripts/add-hero-metadata.py | Backups: public/images/hero/backup/")

    pdf.sub_title("1.3 H1 Always Present in DOM")
    pdf.body_text("Hero carousel had a critical SEO bug: H1 tag was conditionally rendered only on slide 0. When auto-advance moved to slide 1+, H1 was completely removed from DOM. Google crawlers would miss it.")
    pdf.bullet("H1 (slide 0 title) now always stays in DOM with sr-only styling when not visible")
    pdf.bullet("Slides 1-4 use H2 tags - proper heading hierarchy maintained")
    pdf.bullet("Verified: only ONE H1 exists on homepage at all times")
    pdf.small_text("Commit: 060d221")

    pdf.sub_title("1.4 Service Page Content Expansion")
    pdf.body_text("6 service pages had thin content (missing contentSections). Added 800-1200 words each with proper H2/H3 heading structure.")
    pdf.table_row(["Service Page", "Sections", "Words"], [70, 50, 50], header=True)
    pdf.table_row(["Carpet Cleaning", "14 sections", "1,100+"], [70, 50, 50])
    pdf.table_row(["Dining Chair Cleaning", "9 sections", "900+"], [70, 50, 50])
    pdf.table_row(["Apartment Cleaning", "10 sections", "1,050+"], [70, 50, 50])
    pdf.table_row(["Office Cleaning", "10 sections", "1,000+"], [70, 50, 50])
    pdf.table_row(["Restaurant Kitchen Cleaning", "9 sections", "950+"], [70, 50, 50])
    pdf.table_row(["Marble Polishing", "11 sections", "1,170+"], [70, 50, 50])
    pdf.small_text("All 11 services now have 800+ word content | Commit: 97a937d")

    # ── Page 3 ──
    pdf.add_page()
    pdf.sub_title("1.5 AggregateRating Schema - Real GBP Data")
    pdf.body_text("Schema was using fake/placeholder data. Updated to match actual Google Business Profile listing.")
    pdf.table_row(["Field", "Before (Fake)", "After (Real GBP)"], [50, 55, 65], header=True)
    pdf.table_row(["ratingValue", "4.5", "4.3"], [50, 55, 65])
    pdf.table_row(["reviewCount", "12", "76"], [50, 55, 65])
    pdf.table_row(["Individual Reviews", "None", "3 real GBP reviews"], [50, 55, 65])
    pdf.ln(2)
    pdf.body_text("Real reviewers added to schema: Mohammed Muqtadir, Hamza Muhammad Sheth, Ammatullah HM")
    pdf.small_text("Commit: 372634e")

    pdf.sub_title("1.6 Fake Reviews Removed")
    pdf.body_text("GoogleReviews.tsx component had 4 fabricated customer reviews displayed on the homepage. Replaced with 3 real reviews from Google Business Profile.")
    pdf.table_row(["Removed (Fake)", "Added (Real GBP)"], [85, 85], header=True)
    pdf.table_row(["Fatima M. - villa cleaning", "Mohammed Muqtadir - car interior"], [85, 85])
    pdf.table_row(["Rashid A. - sofa/carpet", "Hamza M. Sheth - cleaning work"], [85, 85])
    pdf.table_row(["Sarah K. - move-out cleaning", "Ammatullah HM - sofa & car seats"], [85, 85])
    pdf.table_row(["Omar H. - office cleaning", "(Removed - only 3 real shown)"], [85, 85])
    pdf.ln(2)
    pdf.body_text("Rating display corrected: 4.5 stars (fake) -> 4.3 stars (real GBP). Star display: 5/5 -> 4/5.")

    pdf.sub_title("1.7 Other Items - Already Resolved")
    pdf.check_bullet("Duplicate Title Tags: All 97 pages verified unique - no duplicates")
    pdf.check_bullet("llms.txt: Already exists with complete business info")
    pdf.check_bullet("WhatsApp Number: Confirmed correct (+971 55 127 5545)")
    pdf.check_bullet("Structured Data: LocalBusiness, Service, FAQ, Breadcrumb schemas valid")

    # ── Section 2: MarblePro Competition ──
    pdf.add_page()
    pdf.section_title("2. MarblePro.ae vs ServeDubai.ae")
    pdf.body_text("MarblePro.ae (same owner) is ranking and getting business while ServeDubai.ae is not. Key differences identified from direct comparison:")

    pdf.sub_title("2.1 What MarblePro Does Right")
    pdf.bullet("100% real photography - zero stock images (17 real job photos + 7 videos)")
    pdf.bullet("Real before/after gallery (30 before/after pairs across 15 service sliders)")
    pdf.bullet("Blog content hub: 8 buyer-question articles (cost guides, how-to, comparisons)")
    pdf.bullet("All 5 SEO phases completed on-site: Pages, Images, Schema, Content, Local")
    pdf.bullet("Honest Google rating (4.3 stars, 6 reviews - never inflated)")
    pdf.bullet("Video gallery as sales tool - autoplay process videos on scroll")
    pdf.bullet("Strong internal linking between all service and location pages")
    pdf.bullet("AI visibility: llms.txt + AI crawler allows in robots.txt")

    pdf.sub_title("2.2 What ServeDubai Is Still Missing")
    pdf.bullet("Stock images everywhere - no real project photos (this is the #1 gap)")
    pdf.bullet("GBP category wrong: just 'Upholstery cleaning service' instead of 'House cleaning service'")
    pdf.bullet("GBP Services section empty - no services listed with prices")
    pdf.bullet("No Google Posts strategy - MarblePro has active owner posts")
    pdf.bullet("Need fresh reviews - 76 total but many are old")
    pdf.bullet("No weekly GBP photo/video uploads")

    pdf.sub_title("2.3 What We Already Fixed (Matching MarblePro)")
    pdf.check_bullet("Email contact system (Resend notifications, matching MarblePro pattern)")
    pdf.check_bullet("Real GBP reviews on website (replaced all fake reviews)")
    pdf.check_bullet("AggregateRating schema with honest real data")
    pdf.check_bullet("Content depth: all service pages now 800-1200 words")
    pdf.check_bullet("Hero SEO: 5 slides with XMP metadata, proper H1/H2")
    pdf.check_bullet("CSS optimized for better text/HTML ratio")
    pdf.check_bullet("All structured data schemas valid")

    # ── Section 3: Remaining ──
    pdf.add_page()
    pdf.section_title("3. Remaining Actions (Manual)")

    pdf.sub_title("3.1 Real Photos - HIGH PRIORITY")
    pdf.body_text("This is the #1 difference between MarblePro (ranking) and ServeDubai (not). Replace stock images with real project photos. Take before/after photos of EVERY job going forward.")
    pdf.bullet("Take before/after photos for: sofa, carpet, villa, marble, office, car")
    pdf.bullet("Upload to website gallery + GBP weekly")
    pdf.bullet("Use phone camera - real is better than perfect stock")

    pdf.sub_title("3.2 GBP Optimization - HIGH PRIORITY")
    pdf.bullet("Update business description (clean, keyword-rich)")
    pdf.bullet("Change primary category to: House cleaning service")
    pdf.bullet("Add secondary: Carpet cleaning, Office cleaning, Upholstery cleaning")
    pdf.bullet("Fill Services section with all services + AED price ranges")
    pdf.bullet("Upload 2-3 photos/videos every week")
    pdf.bullet("Post Google Updates weekly (offers, before/after results)")
    pdf.bullet("Fill Q&A section with common customer questions")
    pdf.bullet("Update service areas to cover all 7 Emirates")

    pdf.sub_title("3.3 Grow Reviews - MEDIUM PRIORITY")
    pdf.body_text("Target: 5 new 5-star reviews per month. Send review link via WhatsApp after every completed job. Current: 76 reviews, 4.3 stars.")

    pdf.sub_title("3.4 Semrush Re-crawl - LOW PRIORITY")
    pdf.body_text("Run 'Rerun campaign' in Semrush dashboard after Vercel deployment. Expected: 87% -> 92%+ health score.")

    # ── Section 4: Commits ──
    pdf.section_title("4. Git Commits This Session")
    pdf.table_row(["Commit", "Description", "Status"], [25, 115, 30], header=True)
    pdf.table_row(["66b8e5d", "Inline styles to CSS (91% reduction) + hero XMP metadata", "Pushed"], [25, 115, 30])
    pdf.table_row(["060d221", "H1 always present in DOM for SEO crawlers", "Pushed"], [25, 115, 30])
    pdf.table_row(["97a937d", "Content expansion for 6 thin service pages (+327 lines)", "Pushed"], [25, 115, 30])
    pdf.table_row(["372634e", "AggregateRating with real GBP data (4.3/76)", "Pushed"], [25, 115, 30])
    pdf.table_row(["pending", "Fake reviews removed, real GBP reviews added", "Ready"], [25, 115, 30])

    pdf.ln(10)
    pdf.gold_line()
    pdf.small_text(f"Generated {datetime.now().strftime('%d %B %Y, %I:%M %p')} | servedubai.ae | Madinat Alhaya Building Cleaning Services")

    pdf.output(OUT)
    print(f"\nPDF report generated: {OUT}")


if __name__ == "__main__":
    build()
