# -*- coding: utf-8 -*-
"""Client-facing Phase 3 guide — Google Business Profile & Reviews action plan."""

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

OUT = r"E:\sheryar bhai projects\servdubai-website\ServeDubai-Phase3-GBP-Guide.pdf"

styles = getSampleStyleSheet()
def S(name, **kw):
    base = kw.pop("parent", styles["Normal"]); return ParagraphStyle(name, parent=base, **kw)

st_title = S("t",  fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=NAVY)
st_sub   = S("s",  fontName="Helvetica",      fontSize=10.5, leading=15, textColor=GREY)
st_h2    = S("h2", fontName="Helvetica-Bold", fontSize=13, leading=16, textColor=NAVY, spaceBefore=4, spaceAfter=3)
st_kick  = S("k",  fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=GOLD, spaceAfter=2)
st_body  = S("b",  fontName="Helvetica",      fontSize=10, leading=14.5, textColor=INK)
st_box   = S("bx", fontName="Helvetica",      fontSize=9.5, leading=14, textColor=NAVY)
st_chk   = S("c",  fontName="Helvetica",      fontSize=9.7, leading=14, textColor=INK, leftIndent=2, spaceAfter=2.5)
st_phaseh= S("ph", fontName="Helvetica-Bold", fontSize=11, leading=13.5, textColor=colors.white)
st_mono  = S("m",  fontName="Courier",        fontSize=9, leading=13, textColor=INK)

def chk(t): return Paragraph(f'<font color="#b8923a">&#9744;</font>&nbsp;&nbsp;{t}', st_chk)

def header_footer(canvas, doc):
    canvas.saveState(); w, h = A4
    canvas.setFillColor(NAVY); canvas.rect(0, h-16*mm, w, 16*mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD); canvas.rect(0, h-16*mm, w, 1.6*mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white); canvas.setFont("Helvetica-Bold", 11)
    canvas.drawString(18*mm, h-10.5*mm, "AL HAYA CLEANING SERVICES")
    canvas.setFillColor(GOLD_L); canvas.setFont("Helvetica", 8)
    canvas.drawRightString(w-18*mm, h-10.5*mm, "servedubai.com  ·  Phase 3 Guide")
    canvas.setStrokeColor(LINE); canvas.setLineWidth(0.5); canvas.line(18*mm, 13*mm, w-18*mm, 13*mm)
    canvas.setFillColor(GREY); canvas.setFont("Helvetica", 7.5)
    canvas.drawString(18*mm, 9*mm, "Prepared for the client  ·  Confidential")
    canvas.drawCentredString(w/2, 9*mm, "Google Business Profile & Reviews — June 2026")
    canvas.drawRightString(w-18*mm, 9*mm, f"Page {doc.page}")
    canvas.restoreState()

doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=22*mm, bottomMargin=16*mm)
doc.addPageTemplates([PageTemplate(id="all", frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="m")], onPage=header_footer)])
E = []

E.append(Spacer(1, 4))
E.append(Paragraph("PHASE 3 — ACTION GUIDE", st_kick))
E.append(Paragraph("Google Business Profile & Reviews", st_title))
E.append(Spacer(1, 4))
E.append(Paragraph(
    "For a cleaning business, Google Maps usually drives <b>more phone calls than search results</b>. "
    "This guide lists exactly what to do on your Google Business Profile (GBP) and how to collect "
    "reviews — the highest-impact, fastest-return work after the technical fixes.", st_sub))
E.append(Spacer(1, 8))
E.append(HRFlowable(width="100%", thickness=1, color=GOLD))
E.append(Spacer(1, 10))

# Section A
def sec(tag, title):
    head = Table([[Paragraph(tag, st_phaseh), Paragraph(title, st_phaseh)]],
                 colWidths=[10*mm, doc.width-10*mm])
    head.setStyle(TableStyle([("BACKGROUND",(0,0),(0,0),GOLD),("BACKGROUND",(1,0),(-1,0),NAVY),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),("TOPPADDING",(0,0),(-1,-1),5),("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LEFTPADDING",(0,0),(0,0),6)]))
    return head

E.append(sec("A", "Optimise your Google Business Profile"))
E.append(Spacer(1, 6))
E.append(Paragraph("Go to business.google.com (your profile already exists) and complete each item:", st_body))
E.append(Spacer(1, 4))
for t in [
    "<b>Primary category:</b> House Cleaning Service (add secondary: Carpet Cleaning, Upholstery Cleaning, Marble Contractor)",
    "<b>Services:</b> add all 11 services (Sofa, Carpet, Villa, Marble, Mattress, Office, etc.) — each with a short description",
    "<b>Service areas:</b> add top Dubai areas + all 7 Emirates",
    "<b>Phone:</b> +971 55 127 5545 — exactly the same as the website (consistency matters)",
    "<b>Website:</b> https://servedubai.com",
    "<b>Hours:</b> Monday–Sunday, 8:00 AM – 10:00 PM",
    "<b>Business description:</b> keyword-rich (we can write this for you)",
    "<b>Photos:</b> upload 10–15 real photos — before/after, team at work, equipment (profiles with photos rank higher)",
    "<b>Attributes:</b> enable Online estimates, Onsite services, and any that apply",
]:
    E.append(chk(t))
E.append(Spacer(1, 10))

E.append(sec("B", "Build a steady stream of reviews"))
E.append(Spacer(1, 6))
E.append(Paragraph("Reviews drive ranking, trust, and calls. Make this a simple routine:", st_body))
E.append(Spacer(1, 4))
for t in [
    "In GBP, open <b>“Ask for reviews”</b> and copy your <b>direct review link</b> (looks like g.page/r/XXXX/review)",
    "After <b>every job</b>, WhatsApp the customer that link (template below)",
    "Aim for <b>1–2 reviews per week</b> — steady is better than all at once",
    "<b>Reply</b> to every review — Google rewards active profiles",
]:
    E.append(chk(t))
E.append(Spacer(1, 6))
tmpl = Table([[Paragraph("<b>Review-request message (WhatsApp):</b>", st_box)],
              [Paragraph("Thank you for choosing Al Haya! We hope you loved the clean. "
                         "If you have a minute, a quick Google review really helps us: "
                         "[your review link]", st_mono)]], colWidths=[doc.width])
tmpl.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GOLD_L),("BOX",(0,0),(-1,-1),0.7,GOLD),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),7),("BOTTOMPADDING",(0,0),(-1,-1),7)]))
E.append(tmpl)

# Page 2
E.append(Spacer(1, 14))
E.append(sec("C", "Keep your business details consistent"))
E.append(Spacer(1, 6))
E.append(Paragraph("Google trusts businesses whose name, phone and address match everywhere:", st_body))
E.append(Spacer(1, 4))
for t in [
    "Use <b>+971 55 127 5545</b> everywhere (website, GBP, Facebook, directories)",
    "Consolidate the multiple Facebook pages into <b>one</b> official page",
    "List the business on UAE directories with identical details — Yellow Pages UAE, Yalla.ae, Connect.ae, etc.",
]:
    E.append(chk(t))
E.append(Spacer(1, 12))

E.append(sec("✓", "What we'll do on the website to support this"))
E.append(Spacer(1, 6))
for t in [
    "Add a <b>“Leave us a Google Review”</b> button on the site (share your review link with us)",
    "Add a <b>reviews section</b> on the site once a few reviews come in",
    "Add <b>star-rating rich snippets</b> for Google — only after real reviews exist (never faked)",
]:
    E.append(chk(t))
E.append(Spacer(1, 14))

# Expectations + priority
E.append(Paragraph("WHAT TO EXPECT", st_kick))
E.append(Paragraph("Why this is worth it", st_h2))
E.append(Paragraph(
    "An optimised profile with regular reviews can start generating Maps calls within <b>2–4 weeks</b> — "
    "often faster than organic search rankings. The more genuine reviews you gather, the higher you appear "
    "in the local “Map pack,” and the more customers choose you over competitors.", st_body))
E.append(Spacer(1, 10))
note = Table([[Paragraph("<b>Priority order:</b>  1) Complete the GBP profile (Section A)   2) Start the review routine after every job (Section B)   3) Fix listing consistency (Section C). Sections A &amp; B are where the calls come from — start there this week.", S("bl", parent=st_body, fontSize=9.5, leading=14, textColor=NAVY))]], colWidths=[doc.width])
note.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GREENL),("BOX",(0,0),(-1,-1),0.7,GREEN),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8)]))
E.append(note)

doc.build(E)
print("OK ->", OUT)
