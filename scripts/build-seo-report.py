# -*- coding: utf-8 -*-
"""Generate a client-facing SEO audit summary PDF for ServeDubai.com (Al Haya Cleaning Services)."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether,
)

# ---- Brand palette ----
GOLD   = colors.HexColor("#b8923a")
GOLD_L = colors.HexColor("#f3ecda")
NAVY   = colors.HexColor("#0e1635")
INK    = colors.HexColor("#1f2430")
GREY   = colors.HexColor("#5b6270")
LINE   = colors.HexColor("#e3e6ec")
RED    = colors.HexColor("#c0392b")
AMBER  = colors.HexColor("#c77d11")
GREEN  = colors.HexColor("#1f8a4c")

OUT = r"E:\sheryar bhai projects\servdubai-website\ServeDubai-SEO-Report.pdf"

styles = getSampleStyleSheet()

def S(name, **kw):
    base = kw.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

st_title   = S("t",  fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=NAVY)
st_sub     = S("s",  fontName="Helvetica",      fontSize=10.5, leading=15, textColor=GREY)
st_h2      = S("h2", fontName="Helvetica-Bold", fontSize=13.5, leading=17, textColor=NAVY, spaceBefore=6, spaceAfter=4)
st_kicker  = S("k",  fontName="Helvetica-Bold", fontSize=8,  leading=10, textColor=GOLD, spaceAfter=2)
st_body    = S("b",  fontName="Helvetica",      fontSize=10, leading=15, textColor=INK)
st_bodyc   = S("bc", parent=st_body, alignment=TA_CENTER)
st_li      = S("li", fontName="Helvetica",      fontSize=9.5, leading=14, textColor=INK, leftIndent=10, spaceAfter=2)
st_cell    = S("c",  fontName="Helvetica",      fontSize=9, leading=12.5, textColor=INK)
st_cellb   = S("cb", parent=st_cell, fontName="Helvetica-Bold")
st_cellw   = S("cw", parent=st_cell, textColor=colors.white)
st_white_b = S("wb", fontName="Helvetica-Bold", fontSize=9, leading=12.5, textColor=colors.white)
st_phaseh  = S("ph", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=colors.white)
st_phasen  = S("pn", fontName="Helvetica",      fontSize=8.5, leading=11, textColor=GOLD_L)
st_foot    = S("f",  fontName="Helvetica",      fontSize=7.5, leading=10, textColor=GREY, alignment=TA_CENTER)


def bullet(text, color=GOLD):
    return Paragraph(f'<font color="#{color.hexval()[2:]}">&#9679;</font>&nbsp;&nbsp;{text}', st_li)


def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    # top gold band
    canvas.setFillColor(NAVY)
    canvas.rect(0, h - 16*mm, w, 16*mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, h - 16*mm, w, 1.6*mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 11)
    canvas.drawString(18*mm, h - 10.5*mm, "AL HAYA CLEANING SERVICES")
    canvas.setFillColor(GOLD_L)
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w - 18*mm, h - 10.5*mm, "servedubai.com  ·  SEO Audit Report")
    # footer
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(18*mm, 13*mm, w - 18*mm, 13*mm)
    canvas.setFillColor(GREY)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18*mm, 9*mm, "Prepared for the client  ·  Confidential")
    canvas.drawCentredString(w/2, 9*mm, "SEO Audit & Action Plan — June 2026")
    canvas.drawRightString(w - 18*mm, 9*mm, f"Page {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(
    OUT, pagesize=A4,
    leftMargin=18*mm, rightMargin=18*mm, topMargin=22*mm, bottomMargin=16*mm,
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=header_footer)])

E = []  # story

# ---------- Title block ----------
E.append(Spacer(1, 4))
E.append(Paragraph("SEO AUDIT  &amp;  ACTION PLAN", st_kicker))
E.append(Paragraph("Why servedubai.com isn’t ranking yet — and our plan to fix it", st_title))
E.append(Spacer(1, 4))
E.append(Paragraph(
    "This is a summary of our technical review of the website. The good news first: there is "
    "<b>no Google penalty</b>, and the website’s content and structure are genuinely strong. "
    "The ranking problem is a small number of fixable technical issues left over from the old "
    "hacked WordPress site and its migration. Below is what we found and the work we’ll do.",
    st_sub))
E.append(Spacer(1, 8))
E.append(HRFlowable(width="100%", thickness=1, color=GOLD))
E.append(Spacer(1, 10))

# ---------- Snapshot stats ----------
def stat(big, small, col=NAVY):
    return [Paragraph(f'<font color="#{col.hexval()[2:]}"><b>{big}</b></font>', st_bodyc),
            Paragraph(small, S("ss", parent=st_sub, alignment=TA_CENTER, fontSize=8.2, leading=10))]

snap = Table([
    [stat("No Penalty", "Google Manual Actions: clean")[0], stat("~4 Lakh", "spam URLs from old hack")[0], stat("Strong", "on-page content &amp; structure")[0], stat("3 Fixes", "blocking technical issues")[0]],
    [stat("No Penalty", "Google Manual Actions: clean")[1], stat("~4 Lakh", "spam URLs from old hack")[1], stat("Strong", "on-page content &amp; structure")[1], stat("3 Fixes", "blocking technical issues")[1]],
], colWidths=[doc.width/4]*4)
snap.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), GOLD_L),
    ("BOX", (0,0), (-1,-1), 0.5, LINE),
    ("INNERGRID", (0,0), (-1,-1), 0.5, colors.white),
    ("TOPPADDING", (0,0), (-1,0), 10),
    ("BOTTOMPADDING", (0,1), (-1,1), 10),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("FONTSIZE", (0,0), (-1,0), 12),
]))
E.append(snap)
E.append(Spacer(1, 14))

# ---------- Section: Why not ranking ----------
E.append(Paragraph("WHY THE WEBSITE ISN’T RANKING", st_kicker))
E.append(Paragraph("The root cause in plain words", st_h2))
E.append(bullet("The old website was <b>hacked</b>, which created ~4 lakh fake spam pages that Google still remembers."))
E.append(bullet("When we moved to the new website, those spam pages were <b>blocked the wrong way</b> — so Google can’t remove them, and they keep wasting Google’s attention on junk instead of your real pages."))
E.append(bullet("The old page links were <b>not redirected</b> to the new ones, so years of ranking history were lost."))
E.append(bullet("<b>Good news:</b> the actual website content, local area pages, and setup are solid. No rewriting needed — we mainly fix the plumbing and then grow."))
E.append(Spacer(1, 12))

# ---------- Section: Issues found ----------
E.append(Paragraph("ISSUES WE FOUND", st_kicker))
E.append(Paragraph("Technical audit findings", st_h2))

def sev(label, col):
    return Paragraph(f'<font color="white"><b>{label}</b></font>', st_cellw)

issue_rows = [
    [Paragraph("<b>Issue</b>", st_white_b), Paragraph("<b>What it means</b>", st_white_b), Paragraph("<b>Priority</b>", st_white_b)],
    [Paragraph("Spam pages can’t be removed", st_cellb),
     Paragraph("Old hack URLs are blocked in a way that stops Google from de-listing them — they linger and waste crawl budget.", st_cell),
     sev("CRITICAL", RED)],
    [Paragraph("Old links not redirected", st_cellb),
     Paragraph("Previous WordPress URLs return “page not found,” so old ranking strength isn’t passed to the new pages.", st_cell),
     sev("CRITICAL", RED)],
    [Paragraph("Spam-blocking code flaw", st_cellb),
     Paragraph("The rule that removes spam pages is built in a way that can fail intermittently and needs correcting.", st_cell),
     sev("CRITICAL", RED)],
    [Paragraph("Business listings mismatch", st_cellb),
     Paragraph("Old Google/Facebook listings show a different phone number than the website — confuses local ranking.", st_cell),
     sev("HIGH", AMBER)],
    [Paragraph("Schema &amp; details to polish", st_cellb),
     Paragraph("Business address and structured data can be tightened for richer Google results.", st_cell),
     sev("MEDIUM", AMBER)],
    [Paragraph("No service-area landing pages", st_cellb),
     Paragraph("Missing “service + specific area” pages — the easiest, highest-intent traffic to capture.", st_cell),
     sev("GROWTH", GREEN)],
]
tbl = Table(issue_rows, colWidths=[44*mm, doc.width-44*mm-26*mm, 26*mm])
tbl.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), NAVY),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, GOLD_L]),
    ("BACKGROUND", (2,1), (2,3), RED),
    ("BACKGROUND", (2,4), (2,4), AMBER),
    ("BACKGROUND", (2,5), (2,5), AMBER),
    ("BACKGROUND", (2,6), (2,6), GREEN),
    ("ALIGN", (2,0), (2,-1), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("GRID", (0,0), (-1,-1), 0.5, LINE),
    ("BOX", (0,0), (-1,-1), 0.7, NAVY),
    ("TOPPADDING", (0,0), (-1,-1), 6),
    ("BOTTOMPADDING", (0,0), (-1,-1), 6),
    ("LEFTPADDING", (0,0), (-1,-1), 7),
    ("RIGHTPADDING", (0,0), (-1,-1), 7),
]))
E.append(tbl)
E.append(Spacer(1, 14))

# ---------- Section: Action plan phases ----------
E.append(Paragraph("OUR ACTION PLAN", st_kicker))
E.append(Paragraph("What we’ll do, in phases", st_h2))
E.append(Paragraph("We tackle the blocking technical issues first, then build growth on top of them.", st_sub))
E.append(Spacer(1, 8))

phases = [
    ("PHASE 0", "Critical technical fixes", "Week 1", [
        "Unblock the old spam URLs so Google can finally remove them",
        "Add 301 redirects from all old links to the new pages (recover lost ranking)",
        "Fix the spam-blocking code flaw",
        "Submit a clean sitemap and request fresh indexing of key pages",
    ]),
    ("PHASE 1", "Listings & schema polish", "Week 1–2", [
        "Make phone number identical everywhere (website = source of truth)",
        "Consolidate duplicate Facebook pages into one",
        "Strengthen structured data for richer Google results",
        "Validate every page in Google’s Rich Results test",
    ]),
    ("PHASE 2", "Service-area landing pages", "Week 2–6", [
        "Build “service + area” pages (e.g. Sofa Cleaning in Dubai Marina)",
        "Start with top services × top Dubai areas — highest buyer intent",
        "Unique local content + internal links on each",
        "Target: grow from ~10 to 50–100+ ranking keywords",
    ]),
    ("PHASE 3", "Google Business & reviews", "Parallel", [
        "Optimise Google Business Profile (services, areas, hours, photos)",
        "Set up a steady customer-review process",
        "Build consistent local business citations",
    ]),
    ("PHASE 4", "Content & AI visibility", "Week 4+", [
        "Add a helpful blog answering common customer questions",
        "Improve visibility in AI answers (ChatGPT, Google AI)",
        "Earn local backlinks for authority",
    ]),
]

def phase_block(tag, title, when, items):
    head = Table([[
        Paragraph(f'{tag}', st_phaseh),
        Paragraph(f'{title}', st_phaseh),
        Paragraph(f'{when}', S("pw", parent=st_phasen, alignment=TA_CENTER)),
    ]], colWidths=[24*mm, doc.width-24*mm-26*mm, 26*mm])
    head.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (0,0), GOLD),
        ("BACKGROUND", (1,0), (-1,0), NAVY),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("ALIGN", (2,0), (2,0), "CENTER"),
        ("TOPPADDING", (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING", (0,0), (0,0), 8),
    ]))
    body_items = [bullet(it) for it in items]
    body_tbl = Table([[i] for i in body_items], colWidths=[doc.width])
    body_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), colors.white),
        ("BOX", (0,0), (-1,-1), 0.5, LINE),
        ("LEFTPADDING", (0,0), (-1,-1), 8),
        ("TOPPADDING", (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
    ]))
    return KeepTogether([head, body_tbl, Spacer(1, 7)])

for p in phases:
    E.append(phase_block(*p))

E.append(Spacer(1, 6))
E.append(HRFlowable(width="100%", thickness=1, color=GOLD))
E.append(Spacer(1, 8))

# ---------- Timeline / expectation ----------
E.append(Paragraph("WHAT TO EXPECT", st_kicker))
E.append(Paragraph("Realistic timeline", st_h2))
E.append(bullet("<b>Days 1–7:</b> technical fixes go live — Google starts cleaning up spam and re-reading the site."))
E.append(bullet("<b>Weeks 4–8:</b> spam pages drop off; old ranking strength flows to the new pages; first traffic returns."))
E.append(bullet("<b>Months 2–4:</b> service-area pages + Google Business drive steady keyword growth and organic leads."))
E.append(Spacer(1, 6))
note = Table([[Paragraph(
    "<b>Note:</b> There is no penalty, so recovery is straightforward — but not instant. "
    "Google re-crawls a large site gradually. The fixes are quick; the payoff compounds over the following weeks.",
    S("note", parent=st_body, fontSize=9.3, leading=13, textColor=NAVY))]],
    colWidths=[doc.width])
note.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), GOLD_L),
    ("BOX", (0,0), (-1,-1), 0.7, GOLD),
    ("LEFTPADDING", (0,0), (-1,-1), 10), ("RIGHTPADDING", (0,0), (-1,-1), 10),
    ("TOPPADDING", (0,0), (-1,-1), 8), ("BOTTOMPADDING", (0,0), (-1,-1), 8),
]))
E.append(note)

doc.build(E)
print("OK ->", OUT)
