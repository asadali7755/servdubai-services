/**
 * Hand-written copy for each of the 7 emirate hub pages (Oct 2026 redesign).
 * Replaces the old template functions in app/[emirate]/page.tsx that produced
 * the same paragraphs on every emirate with only the name swapped.
 */
export interface EmirateProfile {
  tagline: string
  about: [string, string]
  highlights: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
}

export const EMIRATE_PROFILES: Record<string, EmirateProfile> = {
  dubai: {
    tagline: 'From Marina towers to Mirdif villas — one team for sofas, carpets, floors and full deep cleans across Dubai.',
    about: [
      'Dubai is where most of our work happens, and no two areas are alike. Tower apartments in Dubai Marina and JLT need compact equipment and lift bookings; villas in Jumeirah, Umm Suqeim and Mirdif need bigger teams and floor machines; Downtown and the Palm need careful handling of marble and designer fabric.',
      'What stays the same is how a booking works: you send a photo or a short description on WhatsApp, you get a clear price, and a team arrives with everything needed. Coastal areas deal with salt and humidity, inland areas with fine sand — so the advice and the method change with the address.',
    ],
    highlights: [
      { title: 'Towers and villas', text: 'Compact machines for high-rise apartments, larger crews and floor scrubbers for villas.' },
      { title: 'Coast vs inland', text: 'Humidity-focused drying near the sea, sand-focused extraction in inland communities.' },
      { title: 'Building access handled', text: 'We register teams with security and book service lifts where buildings require it.' },
      { title: 'Specialist surfaces', text: 'Marble, natural stone, velvet and leather each get their own method.' },
    ],
    faqs: [
      { question: 'Which Dubai areas do you cover?', answer: 'All of Dubai, including Dubai Marina, JLT, Downtown, Business Bay, Palm Jumeirah, Jumeirah, Umm Suqeim, Al Barsha, Bur Dubai, Deira, Mirdif, Silicon Oasis and International City.' },
      { question: 'Do I need to be home during the visit?', answer: 'Not always. Many Dubai clients leave a key with concierge or building security. We call when we arrive and when we finish.' },
      { question: 'Can you arrange building access and lift bookings?', answer: 'Yes. Share your building name and we send team details for security registration or a contractor pass where required.' },
      { question: 'How quickly can you come?', answer: 'Same-day visits are often possible when booked in the morning. Larger villa jobs are usually scheduled a day or two ahead.' },
      { question: 'How do I get a price?', answer: 'Send a photo of what needs cleaning, or the size of the home, on WhatsApp. We reply with a price before booking.' },
    ],
  },
  sharjah: {
    tagline: 'Central Sharjah, Al Nahda, Al Majaz and beyond — Dubai-standard cleaning at Sharjah prices.',
    about: [
      'Sharjah has a wide mix of homes: dense family towers in Al Nahda, lagoon-facing apartments in Al Majaz, older buildings around Rolla and the Corniche, and villa neighbourhoods further out. Many residents commute to Dubai, so evening and weekend appointments matter here more than almost anywhere.',
      'We use the same machines and process as on our Dubai jobs, with pricing set for Sharjah. We also cover Dibba Al-Hisn, Sharjah’s enclave on the east coast, on planned visits.',
    ],
    highlights: [
      { title: 'Commuter-friendly times', text: 'Early-morning, evening and weekend slots for residents who work in Dubai.' },
      { title: 'Family flats', text: 'Twice-yearly sofa and carpet routines for busy family apartments.' },
      { title: 'Older buildings', text: 'Fabric checks and gentle methods for older sofas and carpets.' },
      { title: 'East coast too', text: 'Dibba Al-Hisn covered on planned east-coast routes.' },
    ],
    faqs: [
      { question: 'Are Sharjah prices different from Dubai?', answer: 'Yes. The process and equipment are the same, but pricing is set for Sharjah. We confirm the price on WhatsApp before booking.' },
      { question: 'Do you offer evening appointments in Sharjah?', answer: 'Yes. Evening and weekend slots are popular with residents who commute to Dubai.' },
      { question: 'Do you cover Dibba Al-Hisn?', answer: 'Yes, on planned east-coast visits. Please book a day ahead.' },
      { question: 'Which Sharjah areas are covered?', answer: 'Sharjah City, Al Nahda, Al Majaz, Al Qasimia, Al Khan, Al Taawun, Muwaileh, Abu Shagara, Al Yarmook, Al Nabba and Dibba Al-Hisn.' },
      { question: 'Can I leave a key with building security?', answer: 'Yes, if your building allows it. We call you when we arrive and again when we finish.' },
    ],
  },
  'abu-dhabi': {
    tagline: 'Capital apartments, Khalifa City villas and Al Ain homes — cleaned to one consistent standard.',
    about: [
      'Abu Dhabi homes range from Corniche apartments to some of the largest family villas we clean anywhere — in Khalifa City, MBZ City, Al Reef and the newer districts like Al Shamkha. Majlis seating, large rugs and marble floors are part of most villa jobs here.',
      'For larger villas we plan the visit around the household: a bigger team, a set room order and one area kept usable during the day. Al Ain, inland and much drier, gets the same service with extra focus on dust.',
    ],
    highlights: [
      { title: 'Large villas', text: 'Team sized to the villa so full deep cleans finish in a single day.' },
      { title: 'Majlis care', text: 'Floor cushions and majlis seating cleaned piece by piece.' },
      { title: 'Gated communities', text: 'Gate passes arranged in advance in Al Reef, Yas and other compounds.' },
      { title: 'New handovers', text: 'Post-handover cleans for new villas in Al Shamkha and nearby districts.' },
    ],
    faqs: [
      { question: 'Do you cover Al Ain?', answer: 'Yes. Al Ain visits are planned in advance — message us to book a day.' },
      { question: 'Can a large Abu Dhabi villa be cleaned in one day?', answer: 'Usually, yes. We confirm team size and timing with the quote based on bedrooms and floors.' },
      { question: 'Do you clean majlis seating?', answer: 'Yes. Majlis cushions and floor seating are among our most requested Abu Dhabi jobs.' },
      { question: 'How do you handle gated-community access?', answer: 'Share your villa number when booking and we coordinate with community security before the visit.' },
      { question: 'Do you clean newly handed-over villas?', answer: 'Yes. Post-handover cleans remove construction dust from floors, cupboards and AC vents before you move in.' },
    ],
  },
  ajman: {
    tagline: 'Ajman City, Al Nuaimiya, Al Zahya and more — move-in cleans, sofas and villas at Ajman-friendly prices.',
    about: [
      'Ajman has grown quickly, and a lot of people move in and out each year. That makes move-in and move-out cleaning one of our most common Ajman jobs, alongside sofas and carpets in dense apartment districts like Al Nuaimiya and Al Hamidiya.',
      'Villa communities such as Al Zahya, Al Rawda and Musherief need bigger visits — full deep cleans, majlis seating and sometimes outdoor areas. Ajman’s compact size means response times are usually short.',
    ],
    highlights: [
      { title: 'Moving made easier', text: 'Move-in and move-out cleans planned around handover dates.' },
      { title: 'Busy districts', text: 'Same-day sofa cleaning often possible in central areas.' },
      { title: 'Modern villas', text: 'Product-appropriate cleaning for premium finishes in gated communities.' },
      { title: 'Clear pricing', text: 'Scope and price agreed on WhatsApp before the team arrives.' },
    ],
    faqs: [
      { question: 'Do you offer move-out cleaning in Ajman?', answer: 'Yes. Send the handover date and we schedule the clean a day or two before.' },
      { question: 'Is same-day sofa cleaning available in Ajman?', answer: 'Often, especially in central areas like Al Nuaimiya and Al Hamidiya. Message us in the morning.' },
      { question: 'Which Ajman areas do you cover?', answer: 'Ajman City, Al Nuaimiya, Al Rashidiya, Al Jerf, Al Rawda, Al Hamidiya, Al Zahya, Al Mowaihat and Musherief.' },
      { question: 'Do you clean villas in gated communities like Al Zahya?', answer: 'Yes. We coordinate gate access with community security in advance.' },
      { question: 'Can I get a quote from photos?', answer: 'Yes. Send photos and room sizes on WhatsApp and we reply with a price.' },
    ],
  },
  'ras-al-khaimah': {
    tagline: 'From RAK City to Al Hamra, Mina Al Arab and the mountain towns — planned visits across Ras Al Khaimah.',
    about: [
      'Ras Al Khaimah stretches from coastal communities like Al Hamra Village and Mina Al Arab to inland districts like Digdaga and the mountain town of Khatt. Humidity is the issue on the coast; dust from farmland and mountains is the issue inland.',
      'Because the emirate is spread out, many visits are planned a day or more ahead and grouped by area. RAK City and Al Nakheel are on our regular route; the north and the mountain areas are scheduled visits.',
    ],
    highlights: [
      { title: 'Coastal homes', text: 'Marble and fabric care adjusted for lagoon and sea humidity.' },
      { title: 'Inland districts', text: 'Extra carpet and sofa extraction where farm and mountain dust settles.' },
      { title: 'Holiday villas', text: 'Deep cleans before the guest season in golf and waterfront communities.' },
      { title: 'Route planning', text: 'Visits grouped by area so outlying towns still get proper time.' },
    ],
    faqs: [
      { question: 'Do you travel to Khatt, Al Rams and Digdaga?', answer: 'Yes. These areas are covered on planned visits — please book a few days ahead.' },
      { question: 'Can you clean a holiday villa in Al Hamra before we arrive?', answer: 'Yes. Share the arrival date and access details and we have the villa ready.' },
      { question: 'Is same-day service available in RAK?', answer: 'Often in RAK City and Al Nakheel. Outlying areas are usually scheduled a day or more ahead.' },
      { question: 'Do you polish marble in waterfront homes?', answer: 'Yes. Marble polishing is popular in Al Hamra and Mina Al Arab, where humidity dulls stone faster.' },
      { question: 'Which RAK areas are covered?', answer: 'RAK City, Al Hamra, Al Nakheel, Al Dhait, Mina Al Arab, Al Rams, Digdaga and Khatt.' },
    ],
  },
  fujairah: {
    tagline: 'The Gulf of Oman coast — Fujairah City, Kalba, Dibba and Qidfa on planned east-coast routes.',
    about: [
      'Fujairah is the only emirate fully on the Gulf of Oman, with mountains rising close behind the coast. The climate is different from the west coast, and coastal humidity is what affects sofas, carpets and stone floors most here.',
      'We run planned east-coast routes covering Fujairah City, Al Faseel, Kalba, Dibba Al-Fujairah and the smaller coastal towns. Booking a day ahead gets the best time slot.',
    ],
    highlights: [
      { title: 'East-coast routes', text: 'Visits grouped by town for reliable timing along the coast.' },
      { title: 'Humidity care', text: 'Extraction and fast drying to stop musty smells returning.' },
      { title: 'Holiday homes', text: 'Refresh cleans for Dibba holiday villas before guests arrive.' },
      { title: 'Shift-friendly', text: 'Early and evening slots near the hospital and government offices.' },
    ],
    faqs: [
      { question: 'How far ahead should I book in Fujairah?', answer: 'A day ahead is best so we can plan the east-coast route.' },
      { question: 'Do you cover Kalba and Dibba?', answer: 'Yes. Kalba, Dibba Al-Fujairah and Qidfa are on our east-coast routes.' },
      { question: 'Can you clean a holiday home in Dibba before guests arrive?', answer: 'Yes. Tell us the arrival date and how to access the property.' },
      { question: 'Do you offer evening appointments?', answer: 'Yes, especially in central areas like Al Sharyah where many clients work shifts.' },
      { question: 'Which Fujairah areas are covered?', answer: 'Fujairah City, Dibba Al-Fujairah, Kalba, Al Faseel, Al Sharyah, Madab, Merashid and Qidfa.' },
    ],
  },
  'umm-al-quwain': {
    tagline: 'Quiet, spacious Umm Al Quwain — local pricing for homes from the Corniche to the new villa districts.',
    about: [
      'Umm Al Quwain attracts families looking for more space and a slower pace. Homes range from Corniche-side apartments to newly built villas in Al Salamah and quiet neighbourhoods near the mangrove coast.',
      'Many UAQ bookings are seasonal — a deep clean before the cooler months when families entertain more — or post-handover cleans in new villas. Spread-out areas are routed together, so booking a day ahead helps.',
    ],
    highlights: [
      { title: 'New villas', text: 'Post-handover deep cleans before families move in.' },
      { title: 'Seasonal cleans', text: 'Pre-winter sofa, carpet and dining-chair refreshes.' },
      { title: 'Coastal care', text: 'Humidity-aware cleaning near the mangroves and beach.' },
      { title: 'Local pricing', text: 'Prices set for UAQ and confirmed before booking.' },
    ],
    faqs: [
      { question: 'Do you clean new villas after handover in UAQ?', answer: 'Yes. Post-handover cleans are common in Al Salamah and other new districts.' },
      { question: 'Can you remind me about a seasonal clean?', answer: 'Yes. We can message you before the winter season to book.' },
      { question: 'Which UAQ areas do you cover?', answer: 'UAQ City, Falaj Al Mualla, Al Salamah, Al Ramlah, Al Humrah and Khor Al Beidah.' },
      { question: 'Is same-day service available in UAQ?', answer: 'Sometimes, especially in Falaj Al Mualla and UAQ City. Outlying areas are usually booked a day ahead.' },
      { question: 'Do you use eco-friendly products near the wetlands?', answer: 'Yes. We use low-toxicity products and can choose gentler options on request.' },
    ],
  },
}
