"""
Build PDF report: ServeDubai Semrush SEO Audit Fixes + MarblePro Competition Analysis
"""
import os
from datetime import datetime

try:
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.units import mm
    from reportlab.lib.colors import HexColor
    from reportlab.platypus import (
        SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
        HRFlowable, KeepTogether
    )
    from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
    from reportlab.lib.enums import TA_LEFT, TA_CENTER
except ImportError:
    print("ERROR: reportlab not installed. Run: pip install reportlab")
    raise SystemExit(1)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
OUT = os.path.join(REPO_ROOT, "ServeDubai-SEO-Audit-Report-July2026.pdf")

GOLD = HexColor("#C9A84C")
DARK = HexColor("#151515")
GRAY = HexColor("#888888")
WHITE = HexColor("#FFFFFF")
GREEN = HexColor("#27AE60")
RED = HexColor("#E74C3C")
LIGHT_BG = HexColor("#F8F6F0")

def build():
    doc = SimpleDocTemplate(
        OUT, pagesize=A4,
        leftMargin=20*mm, rightMargin=20*mm,
        topMargin=20*mm, bottomMargin=20*mm,
    )
    styles = getSampleStyleSheet()

    title_style = ParagraphStyle("Title1", parent=styles["Title"], fontSize=22, textColor=DARK, spaceAfter=4*mm, fontName="Helvetica-Bold")
    subtitle_style = ParagraphStyle("Sub1", parent=styles["Normal"], fontSize=11, textColor=GRAY, spaceAfter=8*mm)
    h1 = ParagraphStyle("H1", parent=styles["Heading1"], fontSize=16, textColor=DARK, spaceBefore=8*mm, spaceAfter=4*mm, fontName="Helvetica-Bold")
    h2 = ParagraphStyle("H2", parent=styles["Heading2"], fontSize=13, textColor=GOLD, spaceBefore=6*mm, spaceAfter=3*mm, fontName="Helvetica-Bold")
    h3 = ParagraphStyle("H3", parent=styles["Heading3"], fontSize=11, textColor=DARK, spaceBefore=4*mm, spaceAfter=2*mm, fontName="Helvetica-Bold")
    body = ParagraphStyle("Body1", parent=styles["Normal"], fontSize=10, textColor=DARK, spaceAfter=2*mm, leading=14)
    bullet = ParagraphStyle("Bullet1", parent=body, leftIndent=12*mm, bulletIndent=6*mm, spaceAfter=1.5*mm)
    small = ParagraphStyle("Small1", parent=body, fontSize=8.5, textColor=GRAY)
    check = ParagraphStyle("Check", parent=bullet, textColor=GREEN)
    metric_label = ParagraphStyle("MetricLabel", parent=body, fontSize=9, textColor=GRAY, alignment=TA_CENTER)
    metric_val = ParagraphStyle("MetricVal", parent=body, fontSize=18, textColor=DARK, alignment=TA_CENTER, fontName="Helvetica-Bold")

    story = []

    # ── Cover ──
    story.append(Spacer(1, 15*mm))
    story.append(Paragraph("ServeDubai.ae — SEO Audit Report", title_style))
    story.append(Paragraph("Semrush Technical Fixes + MarblePro Competition Analysis", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1, color=GOLD))
    story.append(Spacer(1, 6*mm))

    cover_data = [
        ["Website", "servedubai.ae (servedubai.com)"],
        ["Business", "Madinat Alhaya Building Cleaning Services"],
        ["Report Date", datetime.now().strftime("%d %B %Y")],
        ["Audit Source", "Semrush Site Audit — May 7, 2026"],
        ["Branch", "001-service-hub-website"],
        ["Commits", "66b8e5d, 060d221, 97a937d, 372634e + pending"],
    ]
    t = Table(cover_data, colWidths=[45*mm, 120*mm])
    t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 10),
        ("TEXTCOLOR", (0, 0), (0, -1), GOLD),
        ("TEXTCOLOR", (1, 0), (1, -1), DARK),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3*mm),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(t)

    # ── Audit Score ──
    story.append(Spacer(1, 10*mm))
    story.append(Paragraph("Semrush Audit Snapshot", h1))

    score_data = [
        [Paragraph("BEFORE", metric_label), Paragraph("TARGET", metric_label), Paragraph("STATUS", metric_label)],
        [Paragraph("87%", metric_val), Paragraph("95%+", metric_val), Paragraph("In Progress", metric_val)],
        [Paragraph("Health Score", small), Paragraph("Goal", small), Paragraph("Re-crawl Needed", small)],
    ]
    st = Table(score_data, colWidths=[55*mm, 55*mm, 55*mm])
    st.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2*mm),
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_BG),
        ("BOX", (0, 0), (-1, -1), 0.5, GOLD),
    ]))
    story.append(st)

    # ── Section 1: Fixes Done ──
    story.append(Paragraph("1. Semrush Audit Fixes — Completed", h1))

    # 1.1 Inline styles
    story.append(Paragraph("1.1 Inline Style to CSS Migration", h2))
    story.append(Paragraph("Semrush flagged low text/HTML ratio (0.03) — inline styles were inflating HTML size relative to text content.", body))
    fixes_1 = [
        "<bullet>&bull;</bullet> 763 inline styles reduced to 70 (91% reduction) across 11 files",
        "<bullet>&bull;</bullet> Created organized CSS classes with page-specific prefixes: bi-*, ar-*, he-*, bp-*, ws-*, ct-*, sp-*, sa-*",
        "<bullet>&bull;</bullet> Remaining 70 are truly dynamic values (animation zIndex, conditional styles)",
        "<bullet>&bull;</bullet> Commit: 66b8e5d",
    ]
    for f in fixes_1:
        story.append(Paragraph(f, bullet))

    # 1.2 Hero XMP Metadata
    story.append(Paragraph("1.2 Hero Image XMP Metadata", h2))
    story.append(Paragraph("All 5 hero carousel images now have embedded XMP metadata for Google Image Search indexing.", body))
    img_data = [
        ["Image", "Title", "Tags"],
        ["cleaning-services-UAE.webp", "Cleaning Services UAE", "cleaning services UAE, professional cleaning, Dubai..."],
        ["marble-polishing-dubai.webp", "Marble Polishing Dubai", "marble polishing Dubai, floor polishing, restoration..."],
        ["professional-cleaning-services-UAE.webp", "Professional Cleaning UAE", "professional cleaning, villa cleaning UAE, office..."],
        ["sofa-carpet-cleaning.webp", "Sofa Carpet Cleaning", "sofa carpet cleaning, upholstery cleaning, steam..."],
        ["villa-apartment-cleaning.webp", "Villa Apartment Cleaning", "villa apartment cleaning, residential cleaning..."],
    ]
    it = Table(img_data, colWidths=[55*mm, 45*mm, 65*mm])
    it.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("BACKGROUND", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#DDDDDD")),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2*mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2*mm),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(it)
    story.append(Paragraph("Script: scripts/add-hero-metadata.py | Backups: public/images/hero/backup/", small))

    # 1.3 H1 Tag Fix
    story.append(Paragraph("1.3 H1 Always Present in DOM", h2))
    story.append(Paragraph("Hero carousel had a critical SEO bug: the H1 tag was conditionally rendered only on slide 0. When auto-advance moved to slide 1+, H1 was completely removed from the DOM — Google crawlers would miss it.", body))
    h1_fixes = [
        "<bullet>&bull;</bullet> H1 (slide 0 title) now always stays in DOM with sr-only styling when not visible",
        "<bullet>&bull;</bullet> Slides 1-4 use H2 tags — proper heading hierarchy maintained",
        "<bullet>&bull;</bullet> Verified: only ONE H1 exists on homepage at all times",
        "<bullet>&bull;</bullet> Commit: 060d221",
    ]
    for f in h1_fixes:
        story.append(Paragraph(f, bullet))

    # 1.4 Content Expansion
    story.append(Paragraph("1.4 Service Page Content Expansion", h2))
    story.append(Paragraph("6 service pages had thin content (missing contentSections). Added 800-1200 words each to improve text/HTML ratio from 0.03 toward 0.15+ target.", body))
    content_data = [
        ["Service Page", "Sections Added", "Word Count"],
        ["Carpet Cleaning", "14 sections", "1,100+"],
        ["Dining Chair Cleaning", "9 sections", "900+"],
        ["Apartment Cleaning", "10 sections", "1,050+"],
        ["Office Cleaning", "10 sections", "1,000+"],
        ["Restaurant Kitchen Cleaning", "9 sections", "950+"],
        ["Marble Polishing", "11 sections", "1,170+"],
    ]
    ct = Table(content_data, colWidths=[55*mm, 45*mm, 40*mm])
    ct.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("BACKGROUND", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#DDDDDD")),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2*mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2*mm),
    ]))
    story.append(ct)
    story.append(Paragraph("All 11 services now have rich contentSections | Commit: 97a937d", small))

    # 1.5 AggregateRating
    story.append(Paragraph("1.5 AggregateRating Schema — Real GBP Data", h2))
    story.append(Paragraph("Schema was using placeholder data. Updated to match actual Google Business Profile.", body))
    rating_data = [
        ["Field", "Before (Fake)", "After (Real GBP)"],
        ["ratingValue", "4.5", "4.3"],
        ["reviewCount", "12", "76"],
        ["Individual Reviews", "None", "3 real GBP reviews added"],
    ]
    rt = Table(rating_data, colWidths=[45*mm, 50*mm, 60*mm])
    rt.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("BACKGROUND", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#DDDDDD")),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2*mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2*mm),
    ]))
    story.append(rt)
    story.append(Paragraph("Real reviewers: Mohammed Muqtadir, Hamza Muhammad Sheth, Ammatullah HM | Commit: 372634e", small))

    # 1.6 Fake Reviews Removed
    story.append(Paragraph("1.6 Fake Reviews Removed — Real GBP Reviews Added", h2))
    story.append(Paragraph("GoogleReviews.tsx component had 4 fabricated customer reviews. Replaced with 3 real reviews from Google Business Profile.", body))
    fake_data = [
        ["Removed (Fake)", "Added (Real GBP)"],
        ["Fatima M. — villa cleaning", "Mohammed Muqtadir — car interior cleaning"],
        ["Rashid A. — sofa/carpet", "Hamza Muhammad Sheth — general cleaning"],
        ["Sarah K. — move-out cleaning", "Ammatullah HM — sofa & car seats"],
        ["Omar H. — office cleaning", "(Removed — only 3 real reviews shown)"],
    ]
    ft = Table(fake_data, colWidths=[82*mm, 82*mm])
    ft.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("BACKGROUND", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("BACKGROUND", (0, 1), (0, -1), HexColor("#FFEEEE")),
        ("BACKGROUND", (1, 1), (1, -1), HexColor("#EEFFEE")),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#DDDDDD")),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2*mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2*mm),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(ft)
    story.append(Paragraph("Rating display: 4.5 stars -> 4.3 stars (honest) | Stars: 5/5 -> 4/5 | Pending commit", small))

    # 1.7 Other Items Verified
    story.append(Paragraph("1.7 Other Audit Items — Already Resolved", h2))
    verified = [
        "<bullet>&bull;</bullet> Duplicate Title Tags: All 97 pages verified unique — no duplicates found (was already fixed in prior commits)",
        "<bullet>&bull;</bullet> llms.txt: Already exists at /public/llms.txt with complete business info, services, coverage areas",
        "<bullet>&bull;</bullet> WhatsApp Number: Confirmed correct (+971 55 127 5545) — no change needed",
        "<bullet>&bull;</bullet> Structured Data (schemas): LocalBusiness, Service, BreadcrumbList, FAQPage all present and valid",
    ]
    for v in verified:
        story.append(Paragraph(v, bullet))

    # ── Section 2: MarblePro Competition ──
    story.append(Paragraph("2. MarblePro.ae vs ServeDubai.ae — Competition Analysis", h1))
    story.append(Paragraph("MarblePro.ae (same owner) is ranking and getting business while ServeDubai.ae is not. Key differences identified:", body))

    story.append(Paragraph("2.1 What MarblePro Does Right", h2))
    mp_wins = [
        "<bullet>&bull;</bullet> 100% real photography — zero stock images (17 real job photos + 7 videos from actual projects)",
        "<bullet>&bull;</bullet> Real before/after gallery with actual client work (30 before/after pairs across 15 service sliders)",
        "<bullet>&bull;</bullet> Blog content hub: 8 buyer-question articles (cost guides, how-to guides, comparison articles)",
        "<bullet>&bull;</bullet> All 5 SEO phases completed: Service pages, Image SEO, Schema+AEO, Content hub, Local SEO",
        "<bullet>&bull;</bullet> Honest Google rating shown (4.3 stars from 6 reviews — never inflated)",
        "<bullet>&bull;</bullet> Video gallery as sales tool — autoplay process videos on scroll, showcase results",
        "<bullet>&bull;</bullet> Strong internal linking: every service/location page cross-links properly",
        "<bullet>&bull;</bullet> AI visibility optimized: llms.txt, AI crawler allows in robots.txt",
    ]
    for w in mp_wins:
        story.append(Paragraph(w, bullet))

    story.append(Paragraph("2.2 What ServeDubai Is Missing", h2))
    sd_gaps = [
        "<bullet>&bull;</bullet> Stock images everywhere — no real project photos (MarblePro has 100% real)",
        "<bullet>&bull;</bullet> GBP optimization incomplete — category is just 'Upholstery cleaning service' (should be 'House cleaning service')",
        "<bullet>&bull;</bullet> GBP Services section empty — MarblePro has all services listed with prices",
        "<bullet>&bull;</bullet> GBP Posts not being done — MarblePro has active owner posts",
        "<bullet>&bull;</bullet> Review count gap — 76 reviews but many are old, need fresh reviews weekly",
        "<bullet>&bull;</bullet> No Google Posts strategy — weekly updates drive engagement",
    ]
    for g in sd_gaps:
        story.append(Paragraph(g, bullet))

    story.append(Paragraph("2.3 What We Already Fixed (Matching MarblePro)", h2))
    fixed = [
        "<bullet>&bull;</bullet> Email contact system: Resend email notifications for lead forms (matching MarblePro pattern)",
        "<bullet>&bull;</bullet> Real GBP reviews on website (replaced fake reviews with actual GBP data)",
        "<bullet>&bull;</bullet> AggregateRating schema with honest real data",
        "<bullet>&bull;</bullet> Content expansion: all service pages now 800-1200 words (matching MarblePro's depth)",
        "<bullet>&bull;</bullet> Hero SEO: 5 slides with XMP metadata, proper H1/H2 hierarchy",
        "<bullet>&bull;</bullet> Inline styles removed for better text/HTML ratio",
        "<bullet>&bull;</bullet> Structured data: LocalBusiness, Service, FAQ, Breadcrumb schemas all valid",
    ]
    for f in fixed:
        story.append(Paragraph(f, bullet))

    # ── Section 3: Remaining ──
    story.append(Paragraph("3. Remaining Action Items (Manual / Client-Side)", h1))

    story.append(Paragraph("3.1 Real Photos (HIGH PRIORITY)", h2))
    story.append(Paragraph("Replace stock images with real project photos. This is the #1 difference between MarblePro (ranking) and ServeDubai (not ranking). Take before/after photos of every job.", body))

    story.append(Paragraph("3.2 GBP Optimization (HIGH PRIORITY)", h2))
    gbp_items = [
        "<bullet>&bull;</bullet> Update business description (clean, keyword-rich)",
        "<bullet>&bull;</bullet> Change primary category: House cleaning service (add secondary: Carpet, Office, Upholstery)",
        "<bullet>&bull;</bullet> Fill Services section with all services + price ranges",
        "<bullet>&bull;</bullet> Upload photos/videos weekly (2-3 per week minimum)",
        "<bullet>&bull;</bullet> Post Google Updates weekly (offers, before/after, tips)",
        "<bullet>&bull;</bullet> Fill Q&A section (ask and answer your own common questions)",
        "<bullet>&bull;</bullet> Update service areas to cover all Emirates",
        "<bullet>&bull;</bullet> Ask every satisfied customer for a Google review",
    ]
    for g in gbp_items:
        story.append(Paragraph(g, bullet))

    story.append(Paragraph("3.3 Grow Reviews (MEDIUM PRIORITY)", h2))
    story.append(Paragraph("76 reviews is decent but many are old. Target: 5 new 5-star reviews per month. Send review link after every completed job via WhatsApp.", body))

    story.append(Paragraph("3.4 Semrush Re-crawl (LOW PRIORITY)", h2))
    story.append(Paragraph("Run 'Rerun campaign' in Semrush to see updated Health Score after all fixes deploy. Expected improvement: 87% -> 92%+ after re-crawl.", body))

    # ── Commits Summary ──
    story.append(Paragraph("4. Git Commits — This Session", h1))
    commits = [
        ["66b8e5d", "Inline styles to CSS migration (91% reduction) + hero XMP metadata", "PUSHED"],
        ["060d221", "H1 always present in DOM for SEO crawlers", "PUSHED"],
        ["97a937d", "Content expansion for 6 thin service pages (+327 lines)", "PUSHED"],
        ["372634e", "AggregateRating with real GBP data (4.3 stars, 76 reviews)", "PUSHED"],
        ["pending", "Fake reviews removed, real GBP reviews added", "STAGED"],
    ]
    commits_table = [["Commit", "Description", "Status"]] + commits
    cmt = Table(commits_table, colWidths=[25*mm, 105*mm, 25*mm])
    cmt.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("BACKGROUND", (0, 0), (-1, 0), DARK),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#DDDDDD")),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2*mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2*mm),
        ("FONTNAME", (0, 1), (0, -1), "Courier"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(cmt)

    # ── Footer ──
    story.append(Spacer(1, 10*mm))
    story.append(HRFlowable(width="100%", thickness=0.5, color=GOLD))
    story.append(Spacer(1, 3*mm))
    story.append(Paragraph(
        f"Generated {datetime.now().strftime('%d %B %Y, %I:%M %p')} | servedubai.ae | Madinat Alhaya Building Cleaning Services",
        small
    ))

    doc.build(story)
    print(f"\nPDF report generated: {OUT}")

if __name__ == "__main__":
    build()
