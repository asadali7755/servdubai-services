# -*- coding: utf-8 -*-
"""Client-facing Phase 2 report for ServeDubai.com — service-area landing pages."""

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

OUT = r"E:\sheryar bhai projects\servdubai-website\ServeDubai-Phase2-Report.pdf"

styles = getSampleStyleSheet()
def S(name, **kw):
    base = kw.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

st_title = S("t",  fontName="Helvetica-Bold", fontSize=21, leading=25, textColor=NAVY)
st_sub   = S("s",  fontName="Helvetica",      fontSize=10.5, leading=15, textColor=GREY)
st_h2    = S("h2", fontName="Helvetica-Bold", fontSize=13.5, leading=17, textColor=NAVY, spaceBefore=4, spaceAfter=4)
st_kick  = S("k",  fontName="Helvetica-Bold", fontSize=8,  leading=10, textColor=GOLD, spaceAfter=2)
st_body  = S("b",  fontName="Helvetica",      fontSize=10, leading=14.5, textColor=INK)
st_li    = S("li", fontName="Helvetica",      fontSize=9.5, leading=13.5, textColor=INK, leftIndent=2, spaceAfter=2)
st_cell  = S("c",  fontName="Helvetica",      fontSize=9, leading=12, textColor=INK)
st_cellb = S("cb", parent=st_cell, fontName="Helvetica-Bold")
st_wb    = S("wb", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=colors.white)
st_phaseh= S("ph", fontName="Helvetica-Bold", fontSize=11, leading=13.5, textColor=colors.white)
st_bc    = S("bc", parent=st_body, alignment=TA_CENTER)

def check(t): return Paragraph(f'<font color="#1f8a4c"><b>&#10004;</b></font>&nbsp;&nbsp;{t}', st_li)
def dot(t, col=GOLD): return Paragraph(f'<font color="#{col.hexval()[2:]}">&#9679;</font>&nbsp;&nbsp;{t}', st_li)

def header_footer(canvas, doc):
    canvas.saveState(); w, h = A4
    canvas.setFillColor(NAVY); canvas.rect(0, h-16*mm, w, 16*mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD); canvas.rect(0, h-16*mm, w, 1.6*mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white); canvas.setFont("Helvetica-Bold", 11)
    canvas.drawString(18*mm, h-10.5*mm, "AL HAYA CLEANING SERVICES")
    canvas.setFillColor(GOLD_L); canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w-18*mm, h-10.5*mm, "servedubai.com  ·  Phase 2 Report")
    canvas.setStrokeColor(LINE); canvas.setLineWidth(0.5); canvas.line(18*mm, 13*mm, w-18*mm, 13*mm)
    canvas.setFillColor(GREY); canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18*mm, 9*mm, "Prepared for the client  ·  Confidential")
    canvas.drawCentredString(w/2, 9*mm, "Phase 2 — Service-Area Pages · June 2026")
    canvas.drawRightString(w-18*mm, 9*mm, f"Page {doc.page}")
    canvas.restoreState()

doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=22*mm, bottomMargin=16*mm)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=header_footer)])
E = []

E.append(Spacer(1, 4))
E.append(Paragraph("PROGRESS REPORT — PHASE 2", st_kick))
E.append(Paragraph("Local Landing Pages — Built & Live", st_title))
E.append(Spacer(1, 4))
E.append(Paragraph(
    "Following the technical recovery, we have launched the first set of <b>“service + area” landing "
    "pages</b> — dedicated pages that target exactly what local customers search before booking "
    "(e.g. “sofa cleaning Dubai Marina”). This is the single biggest lever for turning Google "
    "visibility into phone calls and WhatsApp leads.", st_sub))
E.append(Spacer(1, 8))
E.append(HRFlowable(width="100%", thickness=1, color=GOLD))
E.append(Spacer(1, 10))

def stat(big, small):
    return ([Paragraph(f'<font color="#0e1635"><b>{big}</b></font>', st_bc),
             Paragraph(small, S("ss", parent=st_sub, alignment=TA_CENTER, fontSize=8, leading=10))])
cells = [stat("24", "new local pages live"),
         stat("4", "services targeted"),
         stat("8", "Dubai areas covered"),
         stat("Live", "verified & in sitemap")]
snap = Table([[c[0] for c in cells],[c[1] for c in cells]], colWidths=[doc.width/4]*4)
snap.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GOLD_L),("BOX",(0,0),(-1,-1),0.5,LINE),
    ("INNERGRID",(0,0),(-1,-1),0.5,colors.white),("TOPPADDING",(0,0),(-1,0),10),
    ("BOTTOMPADDING",(0,1),(-1,1),10),("VALIGN",(0,0),(-1,-1),"MIDDLE"),("FONTSIZE",(0,0),(-1,0),12)]))
E.append(snap)
E.append(Spacer(1, 14))

# What we built
E.append(Paragraph("WHAT WE BUILT", st_kick))
E.append(Paragraph("24 dedicated local pages", st_h2))
E.append(Paragraph("Each page targets one service in one specific Dubai area — the high-intent searches people make when they are ready to book:", st_body))
E.append(Spacer(1, 6))
rows = [
    [Paragraph("<b>Service</b>", st_wb), Paragraph("<b>Areas covered</b>", st_wb), Paragraph("<b>Pages</b>", st_wb)],
    [Paragraph("Sofa Cleaning", st_cellb), Paragraph("Marina, JLT, Downtown, Jumeirah, Business Bay, Palm Jumeirah, Al Barsha, Bur Dubai", st_cell), Paragraph("8", st_cell)],
    [Paragraph("Carpet Cleaning", st_cellb), Paragraph("Same 8 top Dubai areas", st_cell), Paragraph("8", st_cell)],
    [Paragraph("Villa Deep Cleaning", st_cellb), Paragraph("Jumeirah, Palm Jumeirah, Al Barsha, Bur Dubai (villa areas)", st_cell), Paragraph("4", st_cell)],
    [Paragraph("Marble Polishing", st_cellb), Paragraph("Downtown, Jumeirah, Palm Jumeirah, Business Bay (premium areas)", st_cell), Paragraph("4", st_cell)],
]
t = Table(rows, colWidths=[34*mm, doc.width-34*mm-18*mm, 18*mm])
t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),NAVY),("ROWBACKGROUNDS",(0,1),(-1,-1),[colors.white,GOLD_L]),
    ("ALIGN",(2,0),(2,-1),"CENTER"),("VALIGN",(0,0),(-1,-1),"MIDDLE"),("GRID",(0,0),(-1,-1),0.5,LINE),
    ("BOX",(0,0),(-1,-1),0.7,NAVY),("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
    ("LEFTPADDING",(0,0),(-1,-1),7),("RIGHTPADDING",(0,0),(-1,-1),7)]))
E.append(t)
E.append(Spacer(1, 6))
E.append(Paragraph("Example: <font color='#b8923a'>servedubai.com/dubai/marina/sofa-cleaning</font>", S("ex", parent=st_sub, fontSize=9)))
E.append(Spacer(1, 12))

# Why this matters / quality
E.append(Paragraph("HOW WE BUILT THEM RIGHT", st_kick))
E.append(Paragraph("Quality over quantity — built to rank, not to spam", st_h2))
E.append(check("<b>Every page is genuinely unique</b> — real local content (area landmarks, property types, local FAQs) combined with detailed service info. No copy-paste pages."))
E.append(check("<b>Higher booking intent</b> — each page speaks to one service in one area, with a WhatsApp button that pre-fills the area name so you instantly know where the lead is from."))
E.append(check("<b>Safe for SEO</b> — we deliberately built a focused set, not hundreds of thin pages (which Google now penalises). We expand only as these prove themselves."))
E.append(check("<b>Properly connected</b> — added to the sitemap and linked from the area pages, so Google discovers and ranks them."))
E.append(Spacer(1, 6))
ver = Table([[Paragraph("<b>Verified live:</b> all 24 pages load correctly, each with the right title, a single clear headline, and rich structured data for Google — confirmed in the sitemap.", S("v", parent=st_body, fontSize=9.3, leading=13, textColor=NAVY))]], colWidths=[doc.width])
ver.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GREENL),("BOX",(0,0),(-1,-1),0.7,GREEN),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8)]))
E.append(ver)

# Page 2 — expectations + next
E.append(Spacer(1, 14))
E.append(Paragraph("WHAT TO EXPECT", st_kick))
E.append(Paragraph("Timeline for these pages", st_h2))
E.append(dot("<b>Weeks 1–3:</b> Google discovers and indexes the new pages (we’ve submitted them for crawling)."))
E.append(dot("<b>Weeks 3–8:</b> pages begin ranking for area-specific searches like “sofa cleaning Dubai Marina.”"))
E.append(dot("<b>Months 2–3:</b> as rankings build, these high-intent pages start delivering booking enquiries."))
E.append(Spacer(1, 12))

E.append(Paragraph("WHAT'S NEXT", st_kick))
E.append(Paragraph("The roadmap from here", st_h2))
E.append(Spacer(1, 6))
phases = [
    ("EXPAND", "More areas & services", "Once this batch ranks", [
        "Add more Dubai areas and additional services to the proven format",
        "Replicate for Abu Dhabi and Sharjah — the next biggest markets",
    ]),
    ("PHASE 3", "Google Business & reviews", "Highest near-term ROI", [
        "Optimise the Google Business Profile and build a steady review flow",
        "Google Maps often drives more calls for cleaning businesses than search",
    ]),
    ("PHASE 4", "Content & AI visibility", "Authority", [
        "Helpful blog answering common customer questions (e.g. cleaning costs)",
        "Improve visibility in AI answers (ChatGPT, Google AI Overviews)",
    ]),
]
def phase_block(tag, title, tagline, items):
    head = Table([[Paragraph(tag, st_phaseh), Paragraph(title, st_phaseh),
                   Paragraph(tagline, S("pt", parent=S("x"), fontName="Helvetica-Oblique", fontSize=8, textColor=GOLD_L, alignment=TA_CENTER))]],
                 colWidths=[26*mm, doc.width-26*mm-44*mm, 44*mm])
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
note = Table([[Paragraph("<b>Bottom line:</b> the site is recovered and the growth engine is now running. These local pages are the foundation for steady organic leads — we’ll scale them as they prove their results.", S("bl", parent=st_body, fontSize=9.5, leading=13.5, textColor=NAVY))]], colWidths=[doc.width])
note.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GOLD_L),("BOX",(0,0),(-1,-1),0.7,GOLD),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8)]))
E.append(note)

doc.build(E)
print("OK ->", OUT)
