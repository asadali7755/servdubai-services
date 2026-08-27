# -*- coding: utf-8 -*-
"""GBP Content Pack as a clean, copy-paste-friendly PDF."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)

GOLD=colors.HexColor("#b8923a"); GOLD_L=colors.HexColor("#f3ecda"); NAVY=colors.HexColor("#0e1635")
INK=colors.HexColor("#1f2430"); GREY=colors.HexColor("#5b6270"); LINE=colors.HexColor("#e3e6ec")
GREEN=colors.HexColor("#1f8a4c"); GREENL=colors.HexColor("#e7f4ec"); BOXBG=colors.HexColor("#f6f3ea")

OUT=r"E:\sheryar bhai projects\servdubai-website\ServeDubai-GBP-Content-Pack.pdf"
styles=getSampleStyleSheet()
def S(n,**k):
    b=k.pop("parent",styles["Normal"]); return ParagraphStyle(n,parent=b,**k)

st_title=S("t",fontName="Helvetica-Bold",fontSize=20,leading=24,textColor=NAVY)
st_sub=S("s",fontName="Helvetica",fontSize=10,leading=14,textColor=GREY)
st_kick=S("k",fontName="Helvetica-Bold",fontSize=8,leading=10,textColor=GOLD,spaceAfter=2)
st_h=S("h",fontName="Helvetica-Bold",fontSize=11.5,leading=14,textColor=NAVY,spaceBefore=8,spaceAfter=3)
st_body=S("b",fontName="Helvetica",fontSize=9.7,leading=13.5,textColor=INK)
st_li=S("li",fontName="Helvetica",fontSize=9.3,leading=13,textColor=INK,leftIndent=2,spaceAfter=2.5)
st_copy=S("c",fontName="Courier",fontSize=8.6,leading=12.5,textColor=INK)
st_small=S("sm",fontName="Helvetica-Oblique",fontSize=8.3,leading=11.5,textColor=GREY)

def li(t): return Paragraph(f'<font color="#b8923a">&#9679;</font>&nbsp;&nbsp;{t}', st_li)
def copybox(text):
    t=Table([[Paragraph(text, st_copy)]], colWidths=[doc.width])
    t.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),BOXBG),("BOX",(0,0),(-1,-1),0.6,GOLD),
        ("LEFTPADDING",(0,0),(-1,-1),9),("RIGHTPADDING",(0,0),(-1,-1),9),
        ("TOPPADDING",(0,0),(-1,-1),7),("BOTTOMPADDING",(0,0),(-1,-1),7)]))
    return t

def hf(c,d):
    c.saveState(); w,h=A4
    c.setFillColor(NAVY); c.rect(0,h-16*mm,w,16*mm,fill=1,stroke=0)
    c.setFillColor(GOLD); c.rect(0,h-16*mm,w,1.6*mm,fill=1,stroke=0)
    c.setFillColor(colors.white); c.setFont("Helvetica-Bold",11); c.drawString(18*mm,h-10.5*mm,"AL HAYA CLEANING SERVICES")
    c.setFillColor(GOLD_L); c.setFont("Helvetica",8); c.drawRightString(w-18*mm,h-10.5*mm,"servedubai.com · GBP Content Pack")
    c.setStrokeColor(LINE); c.setLineWidth(0.5); c.line(18*mm,13*mm,w-18*mm,13*mm)
    c.setFillColor(GREY); c.setFont("Helvetica",7.5)
    c.drawString(18*mm,9*mm,"Copy-paste into business.google.com"); c.drawRightString(w-18*mm,9*mm,f"Page {d.page}")
    c.restoreState()

doc=BaseDocTemplate(OUT,pagesize=A4,leftMargin=18*mm,rightMargin=18*mm,topMargin=22*mm,bottomMargin=15*mm)
doc.addPageTemplates([PageTemplate(id="a",frames=[Frame(doc.leftMargin,doc.bottomMargin,doc.width,doc.height,id="m")],onPage=hf)])
E=[]

E.append(Spacer(1,4))
E.append(Paragraph("GOOGLE BUSINESS PROFILE",st_kick))
E.append(Paragraph("Copy-Paste Content Pack",st_title))
E.append(Paragraph("Al Haya Cleaning Services · servedubai.com · +971 55 127 5545",st_sub))
E.append(Spacer(1,7)); E.append(HRFlowable(width="100%",thickness=1,color=GOLD)); E.append(Spacer(1,8))

E.append(Paragraph("1. Business name & categories",st_h))
E.append(li("<b>Name:</b> Al Haya Cleaning Services"))
E.append(li("<b>Primary category:</b> House Cleaning Service"))
E.append(li("<b>Secondary:</b> Carpet Cleaning · Upholstery Cleaning · Marble Contractor · Commercial Cleaning Service"))

E.append(Paragraph("2. Business description  (paste in “From the business” → Description)",st_h))
E.append(copybox("Al Haya Cleaning Services is a professional, licensed and insured cleaning company in "
    "Dubai, serving all 7 UAE Emirates. We provide sofa &amp; upholstery cleaning, carpet &amp; rug deep "
    "cleaning, villa &amp; apartment deep cleaning, marble polishing &amp; restoration, mattress "
    "sanitization, office cleaning and more. Our IICRC-trained technicians use eco-friendly, non-toxic "
    "products safe for children and pets. We offer same-day service, transparent pricing with no hidden "
    "charges, and a 100% satisfaction guarantee. With 5+ years of experience and 500+ happy clients "
    "across Dubai, Abu Dhabi, Sharjah and beyond, we deliver the gold standard of cleaning. Free quotes "
    "on WhatsApp: +971 55 127 5545. Book today!"))
E.append(Paragraph("Tip: 750-character limit — this fits.",st_small))

E.append(Paragraph("3. Services  (add each under “Services”)",st_h))
for t in [
    "<b>Sofa Deep Cleaning &amp; Shampooing</b> — Hot-water extraction &amp; steam for all fabrics, incl. L-shape, corner &amp; leather. Removes stains, odors &amp; allergens.",
    "<b>Carpet &amp; Rug Cleaning</b> — Deep steam extraction for carpets, Persian &amp; area rugs. Stain removal, fast drying.",
    "<b>Villa Deep Cleaning</b> — Move-in/move-out deep clean — AC vents, bathrooms, kitchens, baseboards.",
    "<b>Apartment Deep Cleaning</b> — Full deep clean for apartments, studios &amp; flats.",
    "<b>Marble Polishing &amp; Restoration</b> — Diamond-pad polishing &amp; re-crystallization for marble, granite &amp; terrazzo.",
    "<b>Mattress Deep Cleaning</b> — UV-C sanitization, dust-mite &amp; allergen removal.",
    "<b>Curtain &amp; Blinds Cleaning</b> · <b>Dining Chair &amp; Furniture Cleaning</b> · <b>Office &amp; Commercial Cleaning</b> · <b>Restaurant &amp; Kitchen Cleaning</b> · <b>Car Interior Detailing</b>",
]:
    E.append(li(t))

E.append(Paragraph("4. Service areas",st_h))
E.append(Paragraph("Dubai (Marina, Downtown, JLT, Business Bay, Palm Jumeirah, Jumeirah, Al Barsha, Deira, "
    "Bur Dubai, Silicon Oasis, International City), Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, Fujairah.", st_body))

E.append(Paragraph("5. Key details",st_h))
E.append(li("<b>Phone:</b> +971 55 127 5545  (must match the website exactly)"))
E.append(li("<b>Website:</b> https://servedubai.com   ·   <b>Hours:</b> Mon–Sun, 8:00 AM – 10:00 PM"))
E.append(li("<b>Attributes:</b> Online estimates · Onsite services"))

# Page 2
E.append(Spacer(1,12))
E.append(Paragraph("6. Review-request message  (send after every job on WhatsApp)",st_h))
E.append(copybox("Thank you for choosing Al Haya! We hope you loved the clean. If you have a minute, "
    "a quick Google review really helps us reach more families in your area: [PASTE YOUR REVIEW LINK]"))
E.append(Paragraph("Get your link: GBP dashboard → “Ask for reviews” → copy (looks like g.page/r/XXXX/review). "
    "Send it to us and we’ll wire the website’s “Leave a Google Review” button to it.", st_small))

E.append(Paragraph("7. Google Posts ideas  (post 1–2 per week — free visibility)",st_h))
for t in [
    "“Same-day sofa &amp; carpet cleaning across Dubai Marina this week — WhatsApp for a free quote.”",
    "“Move-out cleaning special — get your security deposit back. Book now.”",
    "Before/after photo of a marble polishing or sofa job.",
    "“Eco-friendly products, safe for kids &amp; pets — book your villa deep clean.”",
]:
    E.append(li(t))

E.append(Spacer(1,10))
note=Table([[Paragraph("<b>Priority this week:</b>  1) Complete sections 1–5 + add 10–15 real photos.  "
    "2) Start review requests after every job (section 6) — this drives ranking &amp; calls.  "
    "3) Use the same phone everywhere and keep one official Facebook page.",
    S("n",parent=st_body,fontSize=9.5,leading=13.5,textColor=NAVY))]],colWidths=[doc.width])
note.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),GREENL),("BOX",(0,0),(-1,-1),0.7,GREEN),
    ("LEFTPADDING",(0,0),(-1,-1),10),("RIGHTPADDING",(0,0),(-1,-1),10),
    ("TOPPADDING",(0,0),(-1,-1),8),("BOTTOMPADDING",(0,0),(-1,-1),8)]))
E.append(note)

doc.build(E)
print("OK ->",OUT)
