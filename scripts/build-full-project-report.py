# -*- coding: utf-8 -*-
"""Complete project report — all SEO + site work across the 4 phases + what's next."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether, PageBreak,
)

GOLD=colors.HexColor("#b8923a"); GOLD_L=colors.HexColor("#f3ecda"); NAVY=colors.HexColor("#0e1635")
INK=colors.HexColor("#1f2430"); GREY=colors.HexColor("#5b6270"); LINE=colors.HexColor("#e3e6ec")
GREEN=colors.HexColor("#1f8a4c"); GREENL=colors.HexColor("#e7f4ec"); AMBER=colors.HexColor("#c77d11")

OUT=r"E:\sheryar bhai projects\servdubai-website\ServeDubai-Full-Project-Report.pdf"
styles=getSampleStyleSheet()
def S(n,**k):
    b=k.pop("parent",styles["Normal"]); return ParagraphStyle(n,parent=b,**k)

st_title=S("t",fontName="Helvetica-Bold",fontSize=22,leading=26,textColor=NAVY)
st_subt=S("st",fontName="Helvetica",fontSize=11,leading=15,textColor=GREY)
st_kick=S("k",fontName="Helvetica-Bold",fontSize=8,leading=10,textColor=GOLD,spaceAfter=2)
st_h=S("h",fontName="Helvetica-Bold",fontSize=13,leading=16,textColor=NAVY,spaceBefore=6,spaceAfter=3)
st_body=S("b",fontName="Helvetica",fontSize=9.8,leading=14,textColor=INK)
st_li=S("li",fontName="Helvetica",fontSize=9.5,leading=13.5,textColor=INK,leftIndent=2,spaceAfter=2.5)
st_bc=S("bc",parent=st_body,alignment=TA_CENTER)
st_wb=S("wb",fontName="Helvetica-Bold",fontSize=9,leading=12,textColor=colors.white)
st_phaseh=S("ph",fontName="Helvetica-Bold",fontSize=11,leading=14,textColor=colors.white)
st_phasen=S("pn",fontName="Helvetica-Oblique",fontSize=8,leading=10,textColor=GOLD_L)

def chk(t): return Paragraph(f'<font color="#1f8a4c"><b>&#10004;</b></font>&nbsp;&nbsp;{t}', st_li)
def dot(t,col=GOLD): return Paragraph(f'<font color="#{col.hexval()[2:]}">&#9679;</font>&nbsp;&nbsp;{t}', st_li)
def box(t): return Paragraph(f'<font color="#b8923a">&#9744;</font>&nbsp;&nbsp;{t}', st_li)

def hf(c,d):
    c.saveState(); w,h=A4
    c.setFillColor(NAVY); c.rect(0,h-16*mm,w,16*mm,fill=1,stroke=0)
    c.setFillColor(GOLD); c.rect(0,h-16*mm,w,1.6*mm,fill=1,stroke=0)
    c.setFillColor(colors.white); c.setFont("Helvetica-Bold",11); c.drawString(18*mm,h-10.5*mm,"AL HAYA CLEANING SERVICES")
    c.setFillColor(GOLD_L); c.setFont("Helvetica",8); c.drawRightString(w-18*mm,h-10.5*mm,"servedubai.com · Project Report")
    c.setStrokeColor(LINE); c.setLineWidth(0.5); c.line(18*mm,13*mm,w-18*mm,13*mm)
    c.setFillColor(GREY); c.setFont("Helvetica",7.5)
    c.drawString(18*mm,9*mm,"SEO & Website Project Report · Confidential")
    c.drawCentredString(w/2,9*mm,"June 2026")
    c.drawRightString(w-18*mm,9*mm,f"Page {d.page}")
    c.restoreState()

doc=BaseDocTemplate(OUT,pagesize=A4,leftMargin=18*mm,rightMargin=18*mm,topMargin=22*mm,bottomMargin=16*mm)
doc.addPageTemplates([PageTemplate(id="a",frames=[Frame(doc.leftMargin,doc.bottomMargin,doc.width,doc.height,id="m")],onPage=hf)])
E=[]
CW=doc.width

def sec(tag,title,tagline=""):
    cells=[Paragraph(tag,st_phaseh),Paragraph(title,st_phaseh)]
    widths=[26*mm,CW-26*mm]
    if tagline:
        cells=[Paragraph(tag,st_phaseh),Paragraph(title,st_phaseh),Paragraph(tagline,S("x",parent=st_phasen,alignment=TA_CENTER))]
        widths=[26*mm,CW-26*mm-46*mm,46*mm]
    head=Table([cells],colWidths=widths)
    style=[("BACKGROUND",(0,0),(0,0),GOLD),("BACKGROUND",(1,0),(-1,0),NAVY),
        ("VALIGN",(0,0),(-1,-1),"MIDDLE"),("TOPPADDING",(0,0),(-1,-1),6),("BOTTOMPADDING",(0,0),(-1,-1),6),
        ("LEFTPADDING",(0,0),(0,0),8)]
    if tagline: style.append(("ALIGN",(2,0),(2,0),"CENTER"))
    head.setStyle(TableStyle(style))
    return head

# ── COVER ──
E.append(Spacer(1,4))
E.append(Paragraph("COMPLETE PROJECT REPORT",st_kick))
E.append(Paragraph("SEO Recovery & Website Overhaul",st_title))
E.append(Spacer(1,5))
E.append(Paragraph("A full summary of the work completed on servedubai.com — from rescuing the site after "
    "a hacked-WordPress migration, through technical SEO, new local pages, a redesign, Google reviews "
    "setup, and a content blog — plus the action items that remain.",st_subt))
E.append(Spacer(1,9)); E.append(HRFlowable(width="100%",thickness=1,color=GOLD)); E.append(Spacer(1,11))

def stat(big,small):
    return ([Paragraph(f'<font color="#0e1635"><b>{big}</b></font>',st_bc),
             Paragraph(small,S("ss",parent=st_subt,alignment=TA_CENTER,fontSize=8,leading=10))])
cells=[stat("52 → 89","pages on the site"),stat("4 + 1","phases delivered"),
       stat("No Penalty","Google status: clean"),stat("100%","critical fixes live")]
snap=Table([[c[0] for c in cells],[c[1] for c in cells]],colWidths=[CW/4]*4)
snap.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GOLD_L),("BOX",(0,0),(-1,-1),0.5,LINE),
    ("INNERGRID",(0,0),(-1,-1),0.5,colors.white),("TOPPADDING",(0,0),(-1,0),10),
    ("BOTTOMPADDING",(0,1),(-1,1),10),("VALIGN",(0,0),(-1,-1),"MIDDLE"),("FONTSIZE",(0,0),(-1,0),12.5)]))
E.append(snap); E.append(Spacer(1,13))

E.append(Paragraph("THE STARTING PROBLEM",st_kick))
E.append(Paragraph("Why the website wasn't ranking",st_h))
E.append(dot("The old site was <b>hacked</b> on WordPress, creating ~400,000 fake spam pages Google still remembered."))
E.append(dot("Those spam pages were <b>blocked the wrong way</b>, so Google could never remove them — wasting its attention on junk."))
E.append(dot("The old links were <b>not redirected</b> after moving to the new site, losing years of ranking history."))
E.append(dot("The site also showed <b>two versions</b> (www vs non-www) to Google, splitting its trust."))
E.append(dot("<b>Good news:</b> no Google penalty — the issues were technical, and the content was already strong."))

# ── PHASE 0/1 ──
E.append(Spacer(1,12))
E.append(sec("PHASE 1","Technical Recovery","Done & live"))
E.append(Spacer(1,6))
E.append(chk("<b>Fixed the website address</b> — www now permanently points to one main domain (servedubai.com)."))
E.append(chk("<b>Unblocked the spam clean-up</b> — so Google can finally de-list the ~400k hacked URLs (now marked permanently gone)."))
E.append(chk("<b>Recovered old links</b> — added permanent redirects from old WordPress URLs to the new pages."))
E.append(chk("<b>Fixed structured data</b> — corrected breadcrumbs and business info so Google reads the site cleanly."))
E.append(chk("<b>Search Console</b> — clean sitemap submitted, key pages sent for fresh indexing."))

# ── PHASE 2 ──
E.append(Spacer(1,10))
E.append(sec("PHASE 2","Local Landing Pages","Done & live"))
E.append(Spacer(1,6))
E.append(chk("<b>24 new “service in area” pages</b> (e.g. Sofa Cleaning in Dubai Marina) targeting high-intent local searches."))
E.append(chk("Each page genuinely unique — local landmarks, property types and FAQs — built to rank, not to spam."))
E.append(chk("New <b>/areas hub page</b> and internal links so customers and Google find them easily."))
E.append(chk("Full structured data (Service, Local Business, FAQ, Breadcrumb) on every page."))

E.append(PageBreak())

# ── DESIGN ──
E.append(sec("DESIGN","Look, Readability & Flow","Done & live"))
E.append(Spacer(1,6))
E.append(chk("<b>Redesigned the navigation bar</b> — readable over any background, with a clear green WhatsApp button."))
E.append(chk("<b>Bigger, clearer text across the whole site</b> — content was too small; now comfortable to read."))
E.append(chk("<b>Reordered the homepage</b> for what customers need first: Services → Locations → Book by Area → Booking."))
E.append(chk("Consistent, professional look in both the Dark and Light themes."))

# ── PHASE 3 ──
E.append(Spacer(1,10))
E.append(sec("PHASE 3","Google Reviews & Profile","Site done"))
E.append(Spacer(1,6))
E.append(chk("<b>“Review us on Google” buttons</b> added across the site, wired to the direct review link."))
E.append(chk("Delivered a <b>GBP guide + content pack</b> (description, services, areas, review templates) to optimise the profile."))
E.append(dot("Profile optimisation &amp; collecting reviews are ongoing — handled on the Google Business dashboard (see action items).", col=AMBER))

# ── PHASE 4 ──
E.append(Spacer(1,10))
E.append(sec("PHASE 4","Blog — Authority & AI","Done & live"))
E.append(Spacer(1,6))
E.append(chk("<b>New blog with 6 expert articles</b> — cleaning costs, care schedules, and a move-out checklist (Dubai-specific)."))
E.append(chk("The kind of content that ranks for informational searches and gets quoted by AI assistants (ChatGPT, Google AI)."))
E.append(chk("<b>Attractive, animated design</b> — featured post, hover effects, and smooth entrance animations."))
E.append(chk("Article + FAQ structured data, and internal links to the relevant services."))

# ── RESULTS ──
E.append(Spacer(1,12))
E.append(Paragraph("WHERE THINGS STAND",st_kick))
E.append(Paragraph("Results so far",st_h))
res=[
    [Paragraph("<b>Area</b>",st_wb),Paragraph("<b>Before</b>",st_wb),Paragraph("<b>Now</b>",st_wb)],
    [Paragraph("Pages on the site",st_body),Paragraph("52",st_body),Paragraph("89",st_body)],
    [Paragraph("Spam pages clean-up",st_body),Paragraph("Stuck (blocked)",st_body),Paragraph("De-listing in progress",st_body)],
    [Paragraph("Website address",st_body),Paragraph("Split (www + non-www)",st_body),Paragraph("Unified + permanent",st_body)],
    [Paragraph("Local landing pages",st_body),Paragraph("0",st_body),Paragraph("24 + hub",st_body)],
    [Paragraph("Blog articles",st_body),Paragraph("0",st_body),Paragraph("6",st_body)],
    [Paragraph("Google review CTAs",st_body),Paragraph("None",st_body),Paragraph("Site-wide",st_body)],
]
t=Table(res,colWidths=[CW*0.4,CW*0.3,CW*0.3])
t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),NAVY),("ROWBACKGROUNDS",(0,1),(-1,-1),[colors.white,GOLD_L]),
    ("GRID",(0,0),(-1,-1),0.5,LINE),("BOX",(0,0),(-1,-1),0.7,NAVY),
    ("VALIGN",(0,0),(-1,-1),"MIDDLE"),("TOPPADDING",(0,0),(-1,-1),5),("BOTTOMPADDING",(0,0),(-1,-1),5),
    ("LEFTPADDING",(0,0),(-1,-1),7)]))
E.append(t)

E.append(PageBreak())

# ── REMAINING WORK ──
E.append(sec("WHAT'S NEXT","Remaining Work"))
E.append(Spacer(1,8))
E.append(Paragraph("A. Client action items (off-site — only the business owner can do these)",st_h))
E.append(Paragraph("These now drive the results, since the website side is complete:",st_body))
E.append(Spacer(1,3))
E.append(box("<b>Google Search Console:</b> request indexing for the new pages (blog, /areas, area pages)."))
E.append(box("<b>Google Business Profile:</b> complete it using the content pack — description, services, areas, and 10–15 photos."))
E.append(box("<b>Collect reviews:</b> after every job, WhatsApp the customer the Google review link (target 1–2 per week). This drives the most calls."))
E.append(box("<b>Consistency:</b> use the same phone number everywhere; consolidate Facebook pages into one; list on UAE directories."))
E.append(Spacer(1,8))

E.append(Paragraph("B. Optional enhancements (we can do these on request)",st_h))
E.append(box("Polish the blog article pages with the same animated style as the index."))
E.append(box("Write additional blog articles — each one targets more keywords and AI mentions."))
E.append(box("Add a reviews section + Google star ratings on the site (once 5–10 real reviews are in)."))
E.append(box("Performance / page-speed tuning (Core Web Vitals)."))
E.append(box("Expand local pages to more Dubai areas, then Abu Dhabi &amp; Sharjah, as the first batch starts ranking."))
E.append(Spacer(1,8))

E.append(Paragraph("C. Timeline & expectations",st_h))
E.append(dot("<b>Weeks 1–8:</b> spam pages drop off, old ranking strength returns, new pages get indexed."))
E.append(dot("<b>Months 2–4:</b> local pages, reviews and blog combine to grow rankings and organic leads."))
E.append(Spacer(1,8))

note=Table([[Paragraph("<b>Summary:</b> The website is recovered and fully optimised — technically sound, well-structured, "
    "readable, and content-rich. The foundation for ranking and organic leads is complete. The next gains come "
    "from the client action items above (especially Google reviews) plus giving Google a few weeks to re-crawl.",
    S("bl",parent=st_body,fontSize=9.7,leading=14,textColor=NAVY))]],colWidths=[CW])
note.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GREENL),("BOX",(0,0),(-1,-1),0.7,GREEN),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),9),("BOTTOMPADDING",(0,0),(-1,-1),9)]))
E.append(note)

doc.build(E)
print("OK ->",OUT)
