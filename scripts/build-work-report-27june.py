from fpdf import FPDF
from datetime import datetime

class Report(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 22)
        self.set_text_color(26, 21, 16)
        self.cell(0, 12, 'ServeDubai - Work Report', ln=True, align='C')
        self.set_font('Helvetica', '', 11)
        self.set_text_color(100, 90, 70)
        self.cell(0, 8, '27 June 2026  |  servedubai.com  |  Branch: 001-service-hub-website', ln=True, align='C')
        self.ln(4)
        self.set_draw_color(201, 168, 76)
        self.set_line_width(0.8)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(8)

    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(140, 130, 110)
        self.cell(0, 10, f'ServeDubai Work Report  |  Page {self.page_no()}', align='C')

    def section_title(self, title):
        self.set_font('Helvetica', 'B', 14)
        self.set_text_color(26, 21, 16)
        self.cell(0, 10, title, ln=True)
        self.set_draw_color(201, 168, 76)
        self.set_line_width(0.4)
        self.line(10, self.get_y(), 80, self.get_y())
        self.ln(4)

    def stat_row(self, label, value, color=(26, 21, 16)):
        self.set_font('Helvetica', '', 11)
        self.set_text_color(100, 90, 70)
        self.cell(50, 7, label, ln=False)
        self.set_font('Helvetica', 'B', 11)
        self.set_text_color(*color)
        self.cell(0, 7, str(value), ln=True)

    def change_card(self, tag, tag_color, title, desc):
        self.set_font('Helvetica', 'B', 9)
        self.set_text_color(*tag_color)
        self.cell(self.get_string_width(tag) + 6, 6, tag, ln=False)
        self.set_font('Helvetica', 'B', 11)
        self.set_text_color(26, 21, 16)
        self.cell(0, 6, '  ' + title, ln=True)
        self.set_font('Helvetica', '', 10)
        self.set_text_color(90, 78, 58)
        self.multi_cell(0, 5.5, desc)
        self.ln(4)

    def commit_row(self, hash_id, message, detail):
        self.set_font('Courier', 'B', 9)
        self.set_text_color(201, 168, 76)
        self.cell(22, 6, hash_id, ln=False)
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(26, 21, 16)
        self.cell(0, 6, message, ln=True)
        self.set_font('Helvetica', '', 9)
        self.set_text_color(100, 90, 70)
        self.cell(22, 5, '', ln=False)
        self.cell(0, 5, detail, ln=True)
        self.ln(2)


pdf = Report()
pdf.set_auto_page_break(auto=True, margin=20)
pdf.add_page()

# Summary Stats
pdf.section_title('Summary')
pdf.stat_row('Commits:', '3')
pdf.stat_row('Files Changed:', '13')
pdf.stat_row('Lines Added:', '+810', (27, 175, 122))
pdf.stat_row('Lines Removed:', '-433', (227, 73, 72))
pdf.stat_row('New Files:', '1 (HomeContent.tsx)')
pdf.stat_row('Status:', 'Pushed & Deployed to Vercel')
pdf.ln(6)

# Commits
pdf.section_title('Commits')
pdf.commit_row('07a0da1', 'Arabic translations, social links, light theme, hydration fix', 'Main feature commit - 13 files, +776 / -419 lines')
pdf.commit_row('52066ba', 'Navbar dark transparent on scroll', 'Initial scroll fix - 1 file, +26 / -14 lines')
pdf.commit_row('0f53290', 'Navbar glassy transparent on scroll', 'Refined glassy look - 1 file, +15 / -7 lines')
pdf.ln(4)

# Changes Delivered
pdf.section_title('Changes Delivered')

pdf.change_card('FEATURE', (37, 99, 168),
    'Full Arabic Translation - Homepage + Contact + WhatsApp',
    'Homepage sections (hero, services, FAQ, CTA, about, map), contact page form/labels, WhatsApp button - all switch to Arabic with RTL support when language toggle is used. Translations stored in lib/i18n/translations.ts.')

pdf.change_card('BUG FIX', (227, 73, 72),
    'Hydration Crash Fix - LanguageProvider Rewrite',
    'Rewrote LanguageProvider from React Context to useSyncExternalStore pattern. Eliminated hydration mismatch that caused blank page on load. Provider component is now a passthrough - components call useLocale() directly.')

pdf.change_card('BUG FIX', (227, 73, 72),
    'Social Media Links - Facebook + LinkedIn',
    'Fixed broken Facebook link to alhayacleandubai. Replaced X/Twitter with LinkedIn profile. Updated Header, Footer, and SEO sameAs schema in lib/utils/seo.ts.')

pdf.change_card('UI FIX', (186, 130, 20),
    'Light Theme Text Visibility - Entire Website',
    'Fixed white/light text invisible on light background across all pages: contact page, home service cards, why section, FAQ, map section, CTA stats. Added global Tailwind class overrides for text-white, text-gray-300/400/500 in main content area.')

pdf.change_card('UI FIX', (186, 130, 20),
    'Hero Sub-headings Visibility + Image Shade',
    'Added white shade overlay on hero images. Made sub-headings bold black so they are readable over the images in light theme.')

pdf.change_card('UI FIX', (186, 130, 20),
    'Navbar Glassy Look Preserved on Scroll',
    'Navbar now keeps the same frosted glass transparent gradient when user scrolls down - no more solid white/dark background switch. Applies to desktop + mobile + dropdown menus.')

# Files Modified
pdf.section_title('Files Modified (13)')
files = [
    'app/globals.css',
    'app/layout.tsx',
    'app/page.tsx',
    'app/contact/page.tsx',
    'components/HomeContent.tsx (NEW)',
    'components/Header.tsx',
    'components/Footer.tsx',
    'components/Hero.tsx',
    'components/EmiratesSection.tsx',
    'components/WhatsAppButton.tsx',
    'lib/i18n/LanguageProvider.tsx',
    'lib/i18n/translations.ts',
    'lib/utils/seo.ts',
]
pdf.set_font('Courier', '', 9)
pdf.set_text_color(60, 50, 40)
for f in files:
    marker = '  + ' if '(NEW)' in f else '  M '
    pdf.cell(0, 5.5, marker + f, ln=True)

pdf.ln(6)

# Notes
pdf.section_title('Notes')
pdf.set_font('Helvetica', '', 10)
pdf.set_text_color(90, 78, 58)
notes = [
    '- All changes pushed to origin/001-service-hub-website',
    '- Vercel auto-deploy triggered - no manual deployment needed',
    '- No Google Search Console action required - Googlebot will crawl automatically',
    '- For faster indexing: use GSC URL Inspection > Request Indexing on key pages',
    '- Phone number: +971 55 127 5545 (servedubai) - unchanged',
]
for n in notes:
    pdf.cell(0, 6, n, ln=True)

output_path = r'E:\sheryar bhai projects\servdubai-website\ServeDubai-WorkReport-27June2026.pdf'
pdf.output(output_path)
print(f'PDF saved: {output_path}')
