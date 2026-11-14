/**
 * One trusted outside link per page (on-page audit, 14 Nov 2026): the English
 * Wikipedia article for the emirate, area or the thing being cleaned. Every URL
 * was checked against the Wikipedia API (exists, not a disambiguation page, and
 * about the right place). Areas without their own article use their emirate.
 */
export type WikiLink = { title: string; url: string }

export const WIKI_EMIRATE: Record<string, WikiLink> = {
  'abu-dhabi': { title: "Abu Dhabi", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'ajman': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'dubai': { title: "Dubai", url: "https://en.wikipedia.org/wiki/Dubai" },
  'fujairah': { title: "Fujairah", url: "https://en.wikipedia.org/wiki/Fujairah" },
  'ras-al-khaimah': { title: "Ras Al Khaimah", url: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah" },
  'sharjah': { title: "Sharjah", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'umm-al-quwain': { title: "Umm Al Quwain", url: "https://en.wikipedia.org/wiki/Umm_Al_Quwain" },
}

/** key: `${emirateSlug}/${citySlug}` */
export const WIKI_CITY: Record<string, WikiLink> = {
  'abu-dhabi/abu-dhabi-city': { title: "Abu Dhabi City", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'abu-dhabi/al-ain': { title: "Al Ain", url: "https://en.wikipedia.org/wiki/Al_Ain" },
  'abu-dhabi/al-reef': { title: "Abu Dhabi", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'abu-dhabi/al-shamkha': { title: "Abu Dhabi", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'abu-dhabi/baniyas': { title: "Abu Dhabi", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'abu-dhabi/khalifa-city': { title: "Khalifa City", url: "https://en.wikipedia.org/wiki/Khalifa_City" },
  'abu-dhabi/mohamed-bin-zayed-city': { title: "Abu Dhabi", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'abu-dhabi/shakhbout-city': { title: "Abu Dhabi", url: "https://en.wikipedia.org/wiki/Abu_Dhabi" },
  'abu-dhabi/yas-island': { title: "Yas Island", url: "https://en.wikipedia.org/wiki/Yas_Island" },
  'ajman/ajman-city': { title: "Ajman City", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-hamidiya': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-jerf': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-mowaihat': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-nuaimiya': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-rashidiya': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-rawda': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/al-zahya': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'ajman/musherief': { title: "Ajman", url: "https://en.wikipedia.org/wiki/Ajman" },
  'dubai/al-barsha': { title: "Al Barsha", url: "https://en.wikipedia.org/wiki/Al_Barsha" },
  'dubai/bur-dubai': { title: "Bur Dubai", url: "https://en.wikipedia.org/wiki/Bur_Dubai" },
  'dubai/business-bay': { title: "Business Bay", url: "https://en.wikipedia.org/wiki/Business_Bay" },
  'dubai/deira': { title: "Deira, Dubai", url: "https://en.wikipedia.org/wiki/Deira,_Dubai" },
  'dubai/downtown': { title: "Downtown Dubai", url: "https://en.wikipedia.org/wiki/Downtown_Dubai" },
  'dubai/international-city': { title: "International City", url: "https://en.wikipedia.org/wiki/Dubai_International_City" },
  'dubai/jlt': { title: "Jumeirah Lake Towers", url: "https://en.wikipedia.org/wiki/Jumeirah_Lakes_Towers" },
  'dubai/jumeirah': { title: "Jumeirah", url: "https://en.wikipedia.org/wiki/Jumeirah" },
  'dubai/marina': { title: "Dubai Marina", url: "https://en.wikipedia.org/wiki/Dubai_Marina" },
  'dubai/mirdif': { title: "Mirdif", url: "https://en.wikipedia.org/wiki/Mirdif" },
  'dubai/palm-jumeirah': { title: "Palm Jumeirah", url: "https://en.wikipedia.org/wiki/Palm_Jumeirah" },
  'dubai/silicon-oasis': { title: "Dubai Silicon Oasis", url: "https://en.wikipedia.org/wiki/Dubai_Silicon_Oasis" },
  'dubai/umm-suqeim': { title: "Umm Suqeim", url: "https://en.wikipedia.org/wiki/Umm_Suqeim" },
  'fujairah/al-faseel': { title: "Fujairah", url: "https://en.wikipedia.org/wiki/Fujairah" },
  'fujairah/al-sharyah': { title: "Fujairah", url: "https://en.wikipedia.org/wiki/Fujairah" },
  'fujairah/dibba-al-fujairah': { title: "Dibba Al-Fujairah", url: "https://en.wikipedia.org/wiki/Dibba_Al-Fujairah" },
  'fujairah/fujairah-city': { title: "Fujairah City", url: "https://en.wikipedia.org/wiki/Fujairah" },
  'fujairah/kalba': { title: "Kalba", url: "https://en.wikipedia.org/wiki/Kalba" },
  'fujairah/madab': { title: "Fujairah", url: "https://en.wikipedia.org/wiki/Fujairah" },
  'fujairah/merashid': { title: "Fujairah", url: "https://en.wikipedia.org/wiki/Fujairah" },
  'fujairah/qidfa': { title: "Qidfa", url: "https://en.wikipedia.org/wiki/Qidfa" },
  'ras-al-khaimah/al-dhait': { title: "Ras Al Khaimah", url: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah" },
  'ras-al-khaimah/al-hamra': { title: "Ras Al Khaimah", url: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah" },
  'ras-al-khaimah/al-nakheel': { title: "Al Nakheel", url: "https://en.wikipedia.org/wiki/Al_Nakheel" },
  'ras-al-khaimah/al-rams': { title: "Rams (Ras Al Khaimah)", url: "https://en.wikipedia.org/wiki/Rams_(Ras_Al_Khaimah)" },
  'ras-al-khaimah/digdaga': { title: "Digdaga", url: "https://en.wikipedia.org/wiki/Digdaga" },
  'ras-al-khaimah/khatt': { title: "Khatt", url: "https://en.wikipedia.org/wiki/Khatt" },
  'ras-al-khaimah/mina-al-arab': { title: "Ras Al Khaimah", url: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah" },
  'ras-al-khaimah/rak-city': { title: "RAK City", url: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah" },
  'sharjah/abu-shagara': { title: "Abu Shagara", url: "https://en.wikipedia.org/wiki/Abu_Shagara" },
  'sharjah/al-khan': { title: "Al Khan", url: "https://en.wikipedia.org/wiki/Al_Khan" },
  'sharjah/al-majaz': { title: "Al Majaz", url: "https://en.wikipedia.org/wiki/Downtown_Sharjah" },
  'sharjah/al-nabba': { title: "Al Nabba", url: "https://en.wikipedia.org/wiki/Al_Naba%27ah" },
  'sharjah/al-nahda': { title: "Sharjah", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'sharjah/al-qasimia': { title: "Sharjah", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'sharjah/al-taawun': { title: "Sharjah", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'sharjah/al-yarmook': { title: "Sharjah", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'sharjah/dibba-al-hisn': { title: "Dibba Al-Hisn", url: "https://en.wikipedia.org/wiki/Dibba_Al-Hisn" },
  'sharjah/muwaileh': { title: "Sharjah", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'sharjah/sharjah-city': { title: "Sharjah City", url: "https://en.wikipedia.org/wiki/Sharjah" },
  'umm-al-quwain/al-humrah': { title: "Umm Al Quwain", url: "https://en.wikipedia.org/wiki/Umm_Al_Quwain" },
  'umm-al-quwain/al-ramlah': { title: "Umm Al Quwain", url: "https://en.wikipedia.org/wiki/Umm_Al_Quwain" },
  'umm-al-quwain/al-salamah': { title: "Umm Al Quwain", url: "https://en.wikipedia.org/wiki/Umm_Al_Quwain" },
  'umm-al-quwain/falaj-al-mualla': { title: "Falaj Al Mualla", url: "https://en.wikipedia.org/wiki/Falaj_Al_Mualla" },
  'umm-al-quwain/khor-al-beidah': { title: "Khor Al Beidah", url: "https://en.wikipedia.org/wiki/Khor_Al_Beidah" },
  'umm-al-quwain/uaq-city': { title: "Umm Al Quwain", url: "https://en.wikipedia.org/wiki/Umm_Al_Quwain" },
}

export const WIKI_SERVICE: Record<string, WikiLink> = {
  'apartment-cleaning': { title: "Housekeeping", url: "https://en.wikipedia.org/wiki/Housekeeping" },
  'car-ac-odor-sanitization': { title: "Automobile air conditioning", url: "https://en.wikipedia.org/wiki/Automotive_air_conditioning" },
  'car-interior-detailing': { title: "Auto detailing", url: "https://en.wikipedia.org/wiki/Auto_detailing" },
  'car-wash-at-home': { title: "Car wash", url: "https://en.wikipedia.org/wiki/Car_wash" },
  'carpet-cleaning': { title: "Carpet cleaning", url: "https://en.wikipedia.org/wiki/Carpet_cleaning" },
  'curtain-cleaning': { title: "Curtain", url: "https://en.wikipedia.org/wiki/Curtain" },
  'dining-chair-cleaning': { title: "Upholstery", url: "https://en.wikipedia.org/wiki/Upholstery" },
  'floor-cleaning': { title: "Floor cleaning", url: "https://en.wikipedia.org/wiki/Floor_cleaning" },
  'marble-polishing': { title: "Marble", url: "https://en.wikipedia.org/wiki/Marble" },
  'mattress-cleaning': { title: "Mattress", url: "https://en.wikipedia.org/wiki/Mattress" },
  'office-cleaning': { title: "Commercial cleaning", url: "https://en.wikipedia.org/wiki/Commercial_cleaning" },
  'restaurant-kitchen-cleaning': { title: "Kitchen exhaust cleaning", url: "https://en.wikipedia.org/wiki/Kitchen_exhaust_cleaning" },
  'sofa-cleaning': { title: "Upholstery", url: "https://en.wikipedia.org/wiki/Upholstery" },
  'villa-deep-cleaning': { title: "Housekeeping", url: "https://en.wikipedia.org/wiki/Housekeeping" },
}

/** Pick the service article that matches a blog slug or title (falls back to Housekeeping) */
const TOPIC: [RegExp, string][] = [
  [/sofa|upholster|couch|furniture/, 'sofa-cleaning'],
  [/carpet|rug/, 'carpet-cleaning'],
  [/mattress/, 'mattress-cleaning'],
  [/curtain|blind/, 'curtain-cleaning'],
  [/marble|granite|stone/, 'marble-polishing'],
  [/floor|tile|grout/, 'floor-cleaning'],
  [/office|commercial|workplace/, 'office-cleaning'],
  [/kitchen|restaurant/, 'restaurant-kitchen-cleaning'],
  [/car-|car seat|detailing/, 'car-interior-detailing'],
]
export function wikiForTopic(text: string): WikiLink {
  const t = text.toLowerCase()
  const hit = TOPIC.find(([re]) => re.test(t))
  return WIKI_SERVICE[hit ? hit[1] : 'villa-deep-cleaning']
}

/** The service page a blog post should send readers (and link weight) to, with descriptive link text */
const SERVICE_LINK: Record<string, { href: string; text: string }> = {
  'sofa-cleaning': { href: '/services/sofa-cleaning', text: 'sofa cleaning services in Dubai' },
  'carpet-cleaning': { href: '/services/carpet-cleaning', text: 'carpet cleaning in Dubai' },
  'mattress-cleaning': { href: '/services/mattress-cleaning', text: 'mattress cleaning in Dubai' },
  'curtain-cleaning': { href: '/services/curtain-cleaning', text: 'curtain cleaning in Dubai' },
  'marble-polishing': { href: '/services/marble-polishing', text: 'marble polishing in Dubai' },
  'floor-cleaning': { href: '/services/floor-cleaning', text: 'floor cleaning in Dubai' },
  'office-cleaning': { href: '/services/office-cleaning', text: 'office cleaning in Dubai' },
  'restaurant-kitchen-cleaning': { href: '/services/restaurant-kitchen-cleaning', text: 'kitchen deep cleaning in Dubai' },
  'car-interior-detailing': { href: '/services/car-interior-detailing', text: 'car seat cleaning in Dubai' },
  'villa-deep-cleaning': { href: '/services/villa-deep-cleaning', text: 'villa deep cleaning in Dubai' },
}
export function serviceForTopic(text: string): { href: string; text: string } {
  const t = text.toLowerCase()
  const hit = TOPIC.find(([re]) => re.test(t))
  return SERVICE_LINK[hit ? hit[1] : 'villa-deep-cleaning']
}
