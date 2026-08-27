# -*- coding: utf-8 -*-
"""Client-facing SEO progress report for ServeDubai.com — Phase 0 done + roadmap."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether,
)

GOLD   = colors.HexColor("#b8923a")
GOLD_L = colors.HexColor("#f3ecda")
NAVY   = colors.HexColor("#0e1635")
INK    = colors.HexColor("#1f2430")
GREY   = colors.HexColor("#5b6270")
LINE   = colors.HexColor("#e3e6ec")
GREEN  = colors.HexColor("#1f8a4c")
GREENL = colors.HexColor("#e7f4ec")
AMBER  = colors.HexColor("#c77d11")

OUT = r"E:\sheryar bhai projects\servdubai-website\ServeDubai-SEO-Progress-Report.pdf"

styles = getSampleStyleSheet()
def S(name, **kw):
    base = kw.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

st_title  = S("t",  fontName="Helvetica-Bold", fontSize=21, leading=25, textColor=NAVY)
st_sub    = S("s",  fontName="Helvetica",      fontSize=10.5, leading=15, textColor=GREY)
st_h2     = S("h2", fontName="Helvetica-Bold", fontSize=13.5, leading=17, textColor=NAVY, spaceBefore=4, spaceAfter=4)
st_kick   = S("k",  fontName="Helvetica-Bold", fontSize=8,  leading=10, textColor=GOLD, spaceAfter=2)
st_body   = S("b",  fontName="Helvetica",      fontSize=10, leading=14.5, textColor=INK)
st_li     = S("li", fontName="Helvetica",      fontSize=9.5, leading=13.5, textColor=INK, leftIndent=2, spaceAfter=2)
st_cell   = S("c",  fontName="Helvetica",      fontSize=9, leading=12, textColor=INK)
st_cellb  = S("cb", parent=st_cell, fontName="Helvetica-Bold")
st_wb     = S("wb", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=colors.white)
st_phaseh = S("ph", fontName="Helvetica-Bold", fontSize=11, leading=13.5, textColor=colors.white)
st_bc     = S("bc", parent=st_body, alignment=TA_CENTER)

def check(text):
    return Paragraph(f'<font color="#1f8a4c"><b>&#10004;</b></font>&nbsp;&nbsp;{text}', st_li)
def dot(text, col=GOLD):
    return Paragraph(f'<font color="#{col.hexval()[2:]}">&#9679;</font>&nbsp;&nbsp;{text}', st_li)

def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setFillColor(NAVY); canvas.rect(0, h-16*mm, w, 16*mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD); canvas.rect(0, h-16*mm, w, 1.6*mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white); canvas.setFont("Helvetica-Bold", 11)
    canvas.drawString(18*mm, h-10.5*mm, "AL HAYA CLEANING SERVICES")
    canvas.setFillColor(GOLD_L); canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w-18*mm, h-10.5*mm, "servedubai.com  ·  SEO Progress Report")
    canvas.setStrokeColor(LINE); canvas.setLineWidth(0.5); canvas.line(18*mm, 13*mm, w-18*mm, 13*mm)
    canvas.setFillColor(GREY); canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18*mm, 9*mm, "Prepared for the client  ·  Confidential")
    canvas.drawCentredString(w/2, 9*mm, "SEO Recovery — Progress Report · June 2026")
    canvas.drawRightString(w-18*mm, 9*mm, f"Page {doc.page}")
    canvas.restoreState()

doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=22*mm, bottomMargin=16*mm)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=header_footer)])
E = []

# ---- Title ----
E.append(Spacer(1, 4))
E.append(Paragraph("PROGRESS REPORT", st_kick))
E.append(Paragraph("SEO Recovery — Phase 1 Complete", st_title))
E.append(Spacer(1, 4))
E.append(Paragraph(
    "This report summarises the technical recovery work completed on servedubai.com, the results "
    "verified live, and the remaining phases planned to grow rankings and generate organic leads. "
    "Reminder: the site has <b>no Google penalty</b> — the issues were technical leftovers from the "
    "old hacked WordPress site and its migration, and the critical ones are now fixed.", st_sub))
E.append(Spacer(1, 8))
E.append(HRFlowable(width="100%", thickness=1, color=GOLD))
E.append(Spacer(1, 10))

# ---- Snapshot ----
def stat(big, small):
    return ([Paragraph(f'<font color="#0e1635"><b>{big}</b></font>', st_bc),
             Paragraph(small, S("ss", parent=st_sub, alignment=TA_CENTER, fontSize=8, leading=10))])
cells = [stat("5 / 5", "critical fixes done & live"),
         stat("52", "real pages in sitemap"),
         stat("No Penalty", "Google status: clean"),
         stat("4–8 wks", "to first visible results")]
snap = Table([[c[0] for c in cells],[c[1] for c in cells]], colWidths=[doc.width/4]*4)
snap.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,-1),GOLD_L),("BOX",(0,0),(-1,-1),0.5,LINE),
    ("INNERGRID",(0,0),(-1,-1),0.5,colors.white),
    ("TOPPADDING",(0,0),(-1,0),10),("BOTTOMPADDING",(0,1),(-1,1),10),
    ("VALIGN",(0,0),(-1,-1),"MIDDLE"),("FONTSIZE",(0,0),(-1,0),11),
]))
E.append(snap)
E.append(Spacer(1, 14))

# ---- Completed ----
E.append(Paragraph("COMPLETED — PHASE 1 (TECHNICAL RECOVERY)", st_kick))
E.append(Paragraph("What we fixed", st_h2))
done = [
    "<b>Domain fixed:</b> www now permanently points to one main address (servedubai.com) — Google no longer sees two conflicting versions of the site.",
    "<b>Spam clean-up unlocked:</b> the ~400,000 fake pages from the old hack were wrongly blocked, which stopped Google from removing them. We unblocked + flagged them as permanently gone, so Google can now de-list them.",
    "<b>Old links recovered:</b> added permanent redirects from the old website links to the new ones, so years of ranking history transfer instead of being lost.",
    "<b>Search-result data fixed:</b> corrected the website’s structured data (breadcrumbs) so Google reads it cleanly.",
    "<b>Search Console set up:</b> clean sitemap submitted (52 real pages found) and key pages sent to Google for fresh indexing.",
]
for d in done:
    E.append(check(d))
E.append(Spacer(1, 6))
ver = Table([[Paragraph("<b>Verified live:</b> main pages load correctly (200 OK), old links redirect permanently, and all hack/spam URLs now return “Gone (410).” Real pages are untouched and safe.", S("v", parent=st_body, fontSize=9.3, leading=13, textColor=NAVY))]], colWidths=[doc.width])
ver.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GREENL),("BOX",(0,0),(-1,-1),0.7,GREEN),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8)]))
E.append(ver)
E.append(Spacer(1, 12))

# ---- What to expect ----
E.append(Paragraph("WHAT TO EXPECT NOW", st_kick))
E.append(Paragraph("Recovery timeline", st_h2))
E.append(dot("<b>Weeks 1–4:</b> Google re-crawls the site, starts removing the spam pages, and re-reads the real pages."))
E.append(dot("<b>Weeks 4–8:</b> spam count drops, old ranking strength flows to the new pages, first organic traffic returns."))
E.append(dot("<b>Months 2–4:</b> with the growth phases below, keyword rankings and leads build steadily."))
E.append(Spacer(1, 4))
E.append(Paragraph("Note: clearing hundreds of thousands of spam URLs is gradual by design — Google re-crawls a large site over weeks, not days. This is normal and already in motion.", S("n", parent=st_sub, fontSize=8.7, leading=12)))

# ---- Remaining phases (page 2) ----
E.append(Spacer(1, 14))
E.append(Paragraph("REMAINING PHASES — THE GROWTH PLAN", st_kick))
E.append(Paragraph("What we’ll do next to rank & get leads", st_h2))
E.append(Spacer(1, 6))

phases = [
    ("PHASE 2", "Service-area landing pages", "Biggest growth lever", [
        "Create “service + area” pages, e.g. Sofa Cleaning in Dubai Marina, Villa Cleaning in Arabian Ranches",
        "Target low-competition, high-intent local searches (people ready to book)",
        "Goal: grow from ~10 ranking keywords to 50–100+",
    ]),
    ("PHASE 3", "Google Business Profile & reviews", "Highest near-term ROI", [
        "Optimise the Google Business Profile (services, areas, hours, photos)",
        "Set up a steady customer-review process (Maps often drives more calls than search)",
        "Make business listings consistent everywhere (name, phone, address)",
    ]),
    ("PHASE 4", "Content & AI visibility", "Authority + future-proofing", [
        "Add a helpful blog answering common customer questions (e.g. cleaning costs in Dubai)",
        "Improve visibility in AI answers (ChatGPT, Google AI Overviews)",
        "Earn local backlinks to build trust and authority",
    ]),
]
def phase_block(tag, title, tagline, items):
    head = Table([[Paragraph(tag, st_phaseh), Paragraph(title, st_phaseh),
                   Paragraph(tagline, S("pt", parent=S("x"), fontName="Helvetica-Oblique", fontSize=8, textColor=GOLD_L, alignment=TA_CENTER))]],
                 colWidths=[24*mm, doc.width-24*mm-42*mm, 42*mm])
    head.setStyle(TableStyle([("BACKGROUND",(0,0),(0,0),GOLD),("BACKGROUND",(1,0),(-1,0),NAVY),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),("ALIGN",(2,0),(2,0),"CENTER"),
        ("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),("LEFTPADDING",(0,0),(0,0),8)]))
    body = Table([[dot(it)] for it in items], colWidths=[doc.width])
    body.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),colors.white),("BOX",(0,0),(-1,-1),0.5,LINE),
        ("LEFTPADDING",(0,0),(-1,-1),8),("TOPPADDING",(0,0),(-1,-1),3),("BOTTOMPADDING",(0,0),(-1,-1),3)]))
    return KeepTogether([head, body, Spacer(1, 7)])

for p in phases:
    E.append(phase_block(*p))

E.append(Spacer(1, 4))
note = Table([[Paragraph("<b>Bottom line:</b> the hardest part — the technical recovery — is done and live. The remaining phases are about growth: capturing local searches and turning visibility into phone calls and WhatsApp leads.", S("bl", parent=st_body, fontSize=9.5, leading=13.5, textColor=NAVY))]], colWidths=[doc.width])
note.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GOLD_L),("BOX",(0,0),(-1,-1),0.7,GOLD),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8)]))
E.append(note)

doc.build(E)
print("OK ->", OUT)
