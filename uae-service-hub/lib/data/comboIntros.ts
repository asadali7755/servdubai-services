/**
 * Unique intro-paragraph copy per (emirate, city, service) combo page.
 *
 * Every /[emirate]/[city]/[service] page used to build its intro paragraph
 * from one fixed template sentence with only the city/service name swapped
 * in — visually identical prose across every page for a service, which read
 * as duplicate content (client-flagged). This file holds a genuinely unique,
 * researched paragraph per combo instead. Falls back to the old template in
 * app/[emirate]/[city]/[service]/page.tsx for any combo not yet covered here.
 *
 * Key format: `${emirateSlug}-${citySlug}-${serviceSlug}`, e.g. 'dubai-marina-sofa-cleaning'.
 */

export interface ComboIntro {
  /** ~70-120 word intro paragraph for the combo page's intro card. */
  intro: string
  /** ~150-160 char meta description for <meta name="description"> — also unique per combo. */
  metaDescription: string
}

const comboIntros: Record<string, ComboIntro> = {

  /* ===========================================
     SOFA CLEANING
  =========================================== */

  'dubai-marina-sofa-cleaning': {
    intro: "Dubai Marina's high-rise towers — Marina Diamonds, Torch Tower, Princess Tower, Ocean Heights — are full of fabric and leather sofas that pick up dust fast in these dense waterfront buildings. Madinat Alhaya's sofa cleaning in Dubai Marina uses hot-water extraction after a pre-treatment spray to lift embedded grime, then speed-dries the fabric with air movers so your sofa is usable again in 3-4 hours. We bring every machine to your apartment — no need to haul furniture through the lobby. Fabric, leather, velvet and microfiber are all covered, with eco-friendly, pH-balanced products safe around children and pets, and transparent pricing confirmed before we start.",
    metaDescription: "Sofa cleaning in Dubai Marina — hot-water extraction for high-rise apartments in Marina Diamonds and Torch Tower. Free WhatsApp quote, same-day service.",
  },
  'dubai-jlt-sofa-cleaning': {
    intro: "JLT's lakeside clusters, from Almas Tower to Goldcrest Views and Lake View Towers, sit close enough to the water that humidity works its way into upholstery and can leave sofas smelling musty if they're not cleaned regularly. Our sofa cleaning in JLT starts with a fabric assessment, followed by pre-treatment spray and hot-water extraction to flush out trapped moisture and grime, then professional air-movers to dry the fabric within 3-4 hours. We service both residential clusters and DMCC-registered offices across JLT A to Z, with pH-balanced products safe for family homes and same-day booking available across the towers.",
    metaDescription: "Professional sofa cleaning in JLT Dubai — hot-water extraction built for lakeside humidity across all clusters A to Z. Free quote, same-day booking.",
  },
  'dubai-downtown-sofa-cleaning': {
    intro: "In Downtown Dubai's branded residences — The Address, Boulevard Point, Opera District towers around the Burj Khalifa — sofas are often velvet, Alcantara or designer leather, materials that punish a one-size-fits-all cleaning approach. Our sofa cleaning in Downtown Dubai starts with a fabric-type assessment before any product touches the upholstery, then uses pH-neutral hot-water extraction and, for leather pieces, a conditioning pass that protects against cracking in the heat. Same-day appointments are common here — message us in the morning and we can usually be in your Emaar residence by afternoon, with pricing confirmed upfront and no hidden charges.",
    metaDescription: "Sofa cleaning in Downtown Dubai for velvet, Alcantara and leather upholstery in Address and Boulevard Point residences. Same-day, fabric-safe service.",
  },
  'dubai-jumeirah-sofa-cleaning': {
    intro: "Jumeirah's beachside villas along Jumeirah Beach Road absorb salt air that settles into sofa fabric and, left unchecked, turns into musty odours faster than in inland homes. We recommend sofa cleaning in Jumeirah every 4-5 months for this reason, using hot-water extraction with quick-dry air movers to flush out trapped salt moisture rather than just masking it. Teams cover Jumeirah 1, 2 and 3 and can combine a sofa clean with the villa's carpets or a full deep clean in the same visit. All products are eco-friendly and safe for households with children, and quotes are confirmed by WhatsApp before booking.",
    metaDescription: "Sofa cleaning in Jumeirah villas — extraction cleaning built for coastal salt-air humidity along Jumeirah Beach Road. Free quote via WhatsApp today.",
  },
  'dubai-business-bay-sofa-cleaning': {
    intro: "Business Bay mixes canal-view apartments in Executive Towers and Damac Towers with corporate suites in Bay Square and Churchill Towers, and both need sofa cleaning fast without disrupting a working day. Canal-side humidity is the specific issue here — moisture that seeps into upholstery near the water — so we use quick-dry extraction rather than standard shampooing to prevent it lingering in the fabric. Evening and weekend slots are available for office reception sofas, while residential apartments get the same hot-water extraction and pre-treatment process. All work uses pH-balanced, non-toxic products, with pricing confirmed before the technician starts.",
    metaDescription: "Sofa cleaning in Business Bay for canal-view apartments and office suites — quick-dry extraction, flexible evening slots. Free WhatsApp quote today.",
  },
  'dubai-palm-jumeirah-sofa-cleaning': {
    intro: "Palm Jumeirah's frond villas and Shoreline and Tiara apartments tend toward designer upholstery — leather, linen blends, and fabrics chosen to match a specific interior rather than off-the-shelf furniture — which means our technicians assess the material before a single product is used. Sofa cleaning on Palm Jumeirah pairs hot-water extraction with leather conditioning where needed, protecting against the cracking that Dubai's heat and coastal humidity can cause over time. We work with the discretion the island's residences expect, bringing all machinery ourselves and confirming pricing in advance. Same-day service is available for most fronds and The Crescent.",
    metaDescription: "Sofa cleaning on Palm Jumeirah — fabric-matched cleaning and leather conditioning for frond villas and Shoreline apartments. Same-day booking available.",
  },
  'dubai-al-barsha-sofa-cleaning': {
    intro: "Al Barsha's family villas and apartment blocks across Al Barsha 1, 2 and 3 are established enough that many residents book sofa cleaning on a set schedule rather than only when something spills — usually every 4-6 months, shorter for households with young children or pets. Our process removes embedded dust with pre-treatment spray and hot-water extraction, and covers fabric, microfiber and leather sofas with the correct method for each. Al Barsha is one of the areas where we also bundle carpet cleaning into the same visit at a better combined rate, and quotes are transparent with no hidden costs added afterward.",
    metaDescription: "Sofa cleaning in Al Barsha, Dubai — trusted by families across Al Barsha 1-3, bundled carpet cleaning available. Free quote via WhatsApp today.",
  },
  'dubai-bur-dubai-sofa-cleaning': {
    intro: "Bur Dubai's mix of older courtyard buildings and newer towers across Karama, Mankhool and Al Fahidi means sofa cleaning jobs here range from single fabric sofas in partition apartments to full sets in family homes, and our pricing reflects that — starting from AED 150 for a standard 3-seater, among the most competitive rates we quote anywhere in Dubai. The process is the same hot-water extraction and pre-treatment spray used across the city, adapted to the building type and access. Same-day service is usually available across Karama, Mankhool, Meena Bazaar and Al Fahidi, with free quotes confirmed on WhatsApp.",
    metaDescription: "Sofa cleaning in Bur Dubai from AED 150 — same-day service across Karama, Mankhool and Al Fahidi. Transparent, affordable pricing, free quote.",
  },
  'sharjah-sharjah-city-sofa-cleaning': {
    intro: "Central Sharjah's mix of older apartments near the Corniche and newer villa communities around Al Majaz and King Faisal Road means our technicians see a wide range of upholstery types on any given day. Sofa cleaning in Sharjah City starts from AED 130 for a standard 3-seater — the same professional hot-water extraction and pre-treatment process we run in Dubai, at Sharjah-friendly pricing. A standard sofa takes 1-2 hours to clean and is dry and usable within 3-4 hours, which suits both Al Qasimia apartments and villa compounds further out. Same-day appointments are available across central Sharjah, with free quotes via WhatsApp.",
    metaDescription: "Sofa cleaning in Sharjah City from AED 130 — same-day hot-water extraction across Al Majaz, Al Nahda and Al Qasimia. Free WhatsApp quote today.",
  },
  'sharjah-al-nahda-sofa-cleaning': {
    intro: "Al Nahda is one of Sharjah's most densely populated residential districts, and that density is exactly why so many residents here book sofa cleaning on a recurring bi-annual schedule rather than waiting for a visible stain. Our teams cover Al Nahda 1 and 2 with the same hot-water extraction and pre-treatment spray used citywide, pricing from AED 130 for a standard fabric 3-seater. Leather, velvet and sectional sofas are quoted by seating count after a quick fabric check. You don't need to stay home for the full appointment — many Al Nahda residents step out and stay reachable by phone instead.",
    metaDescription: "Sofa cleaning in Al Nahda, Sharjah from AED 130 — same-day service, bi-annual packages available for busy households. Book via WhatsApp today.",
  },
  'sharjah-al-majaz-sofa-cleaning': {
    intro: "Al Majaz's waterfront apartments along Buhaira Corniche sit in a humid microclimate similar to Dubai Marina, and that moisture is exactly what shortens the life of untreated sofa fabric near the lagoon. Sofa cleaning in Al Majaz starts from around AED 150 for a standard 3-seater, using quick-dry extraction rather than standard shampooing to stop humidity settling back into the fibres after cleaning. We recommend a clean every 5-6 months for waterfront residences here, closer to the shorter end for ground-floor and lower-level apartments nearer the water. Villas near Al Majaz Amphitheatre are covered on the same visit basis if needed.",
    metaDescription: "Sofa cleaning in Al Majaz, Sharjah from AED 150 — quick-dry extraction built for Buhaira Corniche waterfront humidity. Free WhatsApp quote.",
  },
  'sharjah-al-qasimia-sofa-cleaning': {
    intro: "Al Qasimia sits close to Sharjah's city centre, and most of our sofa cleaning bookings here come from dense apartment buildings where a fast, tidy visit matters as much as the clean itself. We use the same hot-water extraction and pre-treatment process citywide, from AED 130 for a standard 3-seater, with the fabric usable again in 3-4 hours. Leather and sectional sofas are quoted after a quick fabric check. Same-day appointments are usually available, and every price is confirmed over WhatsApp before we start work.",
    metaDescription: "Sofa cleaning in Al Qasimia, Sharjah from AED 130 — fast apartment-friendly service, same-day booking via WhatsApp.",
  },
  'sharjah-al-khan-sofa-cleaning': {
    intro: "Al Khan's beachfront towers face the same humidity challenge as Al Majaz further along the Corniche, which is why our sofa cleaning here leans on quick-dry extraction rather than standard shampooing — it stops moisture settling back into the fabric after the visit. Pricing starts from AED 150 for a standard 3-seater, with leather conditioning available for premium pieces common in Al Khan's newer towers. We recommend a clean every 5-6 months for waterfront apartments here. Message us on WhatsApp for a free quote and same-day availability.",
    metaDescription: "Sofa cleaning in Al Khan, Sharjah from AED 150 — quick-dry extraction for beachfront tower humidity. Free WhatsApp quote.",
  },
  'sharjah-al-taawun-sofa-cleaning': {
    intro: "Al Taawun's mix of apartments and townhouses along the busy Al Taawun Road means many of our customers here commute to Dubai daily and want appointment times built around that schedule, not the other way round. We offer early-morning, evening and weekend sofa cleaning slots, using the standard hot-water extraction and pre-treatment process at AED 130 upward for a 3-seater. Fabric is dry and usable within 3-4 hours. Contact us on WhatsApp with your preferred time and we'll confirm a slot that fits your commute.",
    metaDescription: "Sofa cleaning in Al Taawun, Sharjah — flexible early-morning and evening slots for commuters. Free WhatsApp quote from AED 130.",
  },
  'sharjah-muwaileh-sofa-cleaning': {
    intro: "Muwaileh's growth around University City means our sofa cleaning jobs here range from full family-villa sectionals to smaller student apartment sofas, and we price each accordingly rather than a flat rate. Standard hot-water extraction and pre-treatment spray apply across fabric types, from AED 120 for a compact 3-seater. Villas near Muwaileh Commercial are covered on the same visit basis as smaller units nearby. Same-day service is usually available — message us on WhatsApp with your sofa size and location for an exact quote.",
    metaDescription: "Sofa cleaning in Muwaileh, Sharjah from AED 120 — covers family villas and student apartments near University City.",
  },
  'sharjah-abu-shagara-sofa-cleaning': {
    intro: "Abu Shagara's central location near King Faisal Street means apartments here see more foot traffic and airborne dust than quieter suburbs, so we generally recommend sofa cleaning every 4-6 months rather than the standard 6-12 month interval. Our hot-water extraction and pre-treatment process starts from AED 130 for a 3-seater, with the sofa ready to use again within 3-4 hours. Same-day appointments are usually available in this busy, central part of Sharjah. WhatsApp us your address for a free, no-obligation quote.",
    metaDescription: "Sofa cleaning in Abu Shagara, Sharjah from AED 130 — recommended every 4-6 months for this busy central district.",
  },
  'sharjah-al-yarmook-sofa-cleaning': {
    intro: "Al Yarmook's established mix of villas and apartment blocks means many of our sofa cleaning customers here have owned the same furniture for years, and want careful, fabric-appropriate treatment rather than an aggressive standard clean. We assess fabric type first, then apply hot-water extraction or leather conditioning as needed, from AED 130 for a standard 3-seater. Bundling with a villa deep clean is popular for Al Yarmook's family homes. Contact us on WhatsApp with your requirements for a free quote.",
    metaDescription: "Sofa cleaning in Al Yarmook, Sharjah from AED 130 — fabric-appropriate care for long-owned furniture, bundles with villa cleaning.",
  },
  'sharjah-al-nabba-sofa-cleaning': {
    intro: "Al Nabba's older central buildings near Rolla and the Sharjah Corniche mean our technicians often find a wider mix of fabric types and ages than in newer districts, so we check each sofa before choosing hot-water extraction or a gentler low-moisture method. Pricing starts from AED 130 for a standard 3-seater fabric sofa, with the piece dry and usable again within 3-4 hours. Same-day service is usually available across Al Nabba and nearby Rolla. WhatsApp us for a free, no-obligation quote.",
    metaDescription: "Sofa cleaning in Al Nabba, Sharjah from AED 130 — fabric-appropriate cleaning for central Sharjah's older buildings.",
  },
  'abu-dhabi-abu-dhabi-city-sofa-cleaning': {
    intro: "Abu Dhabi City spans everything from Corniche-facing apartments to spacious inland villas around Muroor and Hamdan Street, so our sofa cleaning teams carry the full range of fabric-care products rather than a single generic solution. Pricing follows the same transparent, service-based structure we use in Dubai rather than charging more for the emirate — hot-water extraction and pre-treatment spray for fabric sofas, conditioning for leather. You don't need to be home for the whole visit; many Al Khalidiyah residents arrange access through building security. We recommend a clean every 4-6 months to keep up with everyday household dust.",
    metaDescription: "Sofa cleaning in Abu Dhabi City — same transparent pricing as Dubai, covering Corniche apartments to inland villas. Free WhatsApp quote today.",
  },
  'abu-dhabi-khalifa-city-sofa-cleaning': {
    intro: "Khalifa City A and B are built around large family villas rather than towers, and that means our sofa cleaning visits here are usually larger jobs — multiple sofas, sectionals, and majlis seating in a single home — rather than a single apartment 3-seater. We use hot-water extraction and pre-treatment spray across all fabric types, with leather conditioning for the designer pieces common in Khalifa City's newer villas. Bundling sofa cleaning with a villa deep clean or marble polishing visit is popular here since one team can cover everything in a day. Contact us on WhatsApp with your villa size for a quote.",
    metaDescription: "Sofa cleaning in Khalifa City, Abu Dhabi — full-villa sofa and majlis seating cleaning, bundled with deep cleaning visits. Free quote via WhatsApp.",
  },
  'abu-dhabi-yas-island-sofa-cleaning': {
    intro: "Yas Island's serviced apartments and villas in communities like Yas Acres, Ansam and Waters Edge are furnished to a premium standard, and the upholstery reflects that — designer fabrics and leather that need product-appropriate handling rather than a standard shampoo pass. Our sofa cleaning on Yas Island begins with a fabric assessment, then hot-water extraction or leather conditioning depending on the piece, finished with professional air-movers so the sofa is usable again within a few hours. Concierge or key-holder access is common for Yas Acres and Ansam residents, and we only need someone reachable by phone during the visit. Same-day slots are usually available.",
    metaDescription: "Sofa cleaning on Yas Island — fabric-appropriate cleaning for premium serviced apartments and villas. Same-day WhatsApp booking available.",
  },
  'ajman-ajman-city-sofa-cleaning': {
    intro: "Ajman City's mix of Corniche apartments, Al Rashidiya buildings and Al Nuaimiya residential blocks means most of our sofa cleaning work here comes from tenants who want the same professional standard as Dubai without Dubai pricing. We deliver it from AED 120 for a standard 3-seater — hot-water extraction, pre-treatment spray for embedded grime, and quick-dry air movers so the sofa is back in use within a few hours. Leather and sectional pieces are quoted by seating count after a short fabric check. Same-day service is often available across Ajman City, and every quote is confirmed by WhatsApp before we start.",
    metaDescription: "Sofa cleaning in Ajman City from AED 120 — same professional standard as Dubai, transparent pricing. Free WhatsApp quote, same-day service.",
  },
  'ajman-al-nuaimiya-sofa-cleaning': {
    intro: "Al Nuaimiya's dense residential blocks and proximity to Ajman Free Zone make it one of our busiest Ajman service areas, and sofa cleaning here starts from AED 120 for a standard fabric 3-seater — the same hot-water extraction and pre-treatment process used across the rest of the UAE. Al Nuaimiya 1, 2 and 3 are all covered, and many residents don't need to be home for the full visit, as long as we can reach them by phone if access instructions need clarifying. Leather and larger sectional sofas are priced after we confirm seating count, with free quotes sent over WhatsApp.",
    metaDescription: "Sofa cleaning in Al Nuaimiya, Ajman from AED 120 — covers all three sub-areas, same-day service usually available. Free WhatsApp quote.",
  },
  'ajman-al-rashidiya-sofa-cleaning': {
    intro: "Al Rashidiya sits between villa compounds and residential apartment blocks near the Ajman-Sharjah border, so our sofa cleaning jobs here range from a single living-room 3-seater to full villa seating sets in one visit. The process stays consistent regardless of property type — pre-treatment spray to loosen embedded dirt, hot-water extraction to flush it out, and professional air movers to dry the fabric within 3-4 hours. A standard sofa cleaning appointment takes about 1-2 hours on-site. We quote by seating count for leather and sectional pieces and confirm the price by WhatsApp before any work begins in Al Rashidiya.",
    metaDescription: "Sofa cleaning in Al Rashidiya, Ajman — villa and apartment sofas covered, 1-2 hour appointments. Free WhatsApp quotes, same-day booking.",
  },
  'ajman-al-jerf-sofa-cleaning': {
    intro: "Al Jerf's residential streets sit close to Ajman Port and the Free Zone, and that industrial proximity means extra airborne dust settles into sofa fabric faster than in quieter Ajman districts — which is why we recommend sofa cleaning here every 4 months rather than the usual 6. Our hot-water extraction and pre-treatment spray are the same used citywide, cutting through the buildup that port-adjacent dust leaves in fibres. Al Jerf 1 and Al Jerf 2 are both covered, with all equipment brought to your door and no need to move the sofa outside. Free quotes are confirmed via WhatsApp before booking.",
    metaDescription: "Sofa cleaning in Al Jerf, Ajman — more frequent cleaning recommended near the port and Free Zone. Free WhatsApp quote, equipment brought to you.",
  },
  'ajman-al-rawda-sofa-cleaning': {
    intro: "Al Rawda's popularity with families means bigger homes and more furniture per household than in Ajman's denser districts, and our sofa cleaning visits here often cover multiple sofas or a full sectional set across Al Rawda 1, 2 and 3 in one appointment. We use the same hot-water extraction and pre-treatment process as everywhere else in the UAE, scheduled around a busy household rather than disrupting the day. Same-day booking is available, and pricing is confirmed by seating count and fabric type before the technician starts. Combining sofa cleaning with a villa deep clean is a popular option in Al Rawda.",
    metaDescription: "Sofa cleaning in Al Rawda, Ajman — full-home sofa sets covered across Al Rawda 1-3, same-day booking available. Free WhatsApp quote today.",
  },
  'ajman-al-hamidiya-sofa-cleaning': {
    intro: "Al Hamidiya's central location and heavy ground-floor retail foot traffic mean dust and grime settle into upholstery faster here than in quieter parts of Ajman, so sofas in Al Hamidiya 1 and 2 often need attention sooner than the standard six-month mark. Our sofa cleaning process — pre-treatment spray, hot-water extraction, and quick-dry air movers — clears embedded dirt from fabric and leather alike, with same-day appointments frequently available given how central this district sits on our regular Ajman routes. WhatsApp us in the morning for the best chance of a same-day slot, with pricing confirmed before we arrive.",
    metaDescription: "Sofa cleaning in Al Hamidiya, Ajman — same-day service for this busy, central district. Free WhatsApp quote, transparent pricing confirmed upfront.",
  },
  'ajman-al-zahya-sofa-cleaning': {
    intro: "Al Zahya's newer gated-community villas and townhouses tend to be furnished with premium fabrics and finishes, so our technicians check the material carefully before starting rather than defaulting to a one-size-fits-all shampoo. Sofa cleaning in Al Zahya uses hot-water extraction for fabric pieces and conditioning treatments for leather, matched to the specific upholstery rather than a generic approach. Access is usually coordinated through the gated community's management, and we only need someone reachable by phone during the visit. Combining sofa cleaning with villa deep cleaning or marble floor care is common for Al Zahya's newer homes.",
    metaDescription: "Sofa cleaning in Al Zahya, Ajman — fabric-matched cleaning for gated-community villas and townhouses. Free WhatsApp quote, flexible scheduling.",
  },
  'ajman-al-mowaihat-sofa-cleaning': {
    intro: "Al Mowaihat's steady growth along the Ajman-Sharjah border means a lot of our sofa cleaning bookings here come bundled with move-in or move-out cleaning, as new residents settle into villas and low-rise apartments across Al Mowaihat 1, 2 and 3. The process is the standard hot-water extraction with pre-treatment spray for embedded dirt, finished with air-movers so the sofa dries within a few hours rather than staying damp overnight. Both fabric and leather sofas are covered, with seating count determining the final price. Free, no-obligation quotes are available by WhatsApp for any property type in Al Mowaihat.",
    metaDescription: "Sofa cleaning in Al Mowaihat, Ajman — often bundled with move-in cleaning across this growing border-area community. Free WhatsApp quote.",
  },
  'ajman-musherief-sofa-cleaning': {
    intro: "Musherief's quieter, more spread-out villa layout compared to central Ajman means our sofa cleaning teams often handle larger jobs in one visit — full majlis seating and multiple sofas across a single villa compound rather than a single apartment piece. We use the same hot-water extraction and pre-treatment process across every property, with leather conditioning applied where the fabric calls for it. Combining sofa cleaning with carpet and full villa deep cleaning is common here given how much furniture a typical Musherief home has. Same-day booking and transparent, upfront pricing are available via WhatsApp for any Musherief address.",
    metaDescription: "Sofa cleaning in Musherief, Ajman — full-villa sofa and majlis seating cleaning for this quieter district. Free WhatsApp quote, same-day booking.",
  },
  'ras-al-khaimah-rak-city-sofa-cleaning': {
    intro: "RAK City's Corniche apartments and the growing residential streets around Al Nakheel are covered by the same sofa cleaning process we run across the rest of the UAE — pre-treatment spray, hot-water extraction, and quick-dry air movers, priced from AED 150 for a standard 3-seater fabric sofa. Ras Al Khaimah's rapid development means plenty of newly furnished homes, and we adjust our approach for both brand-new upholstery and older, heavier-soiled sofas. Same-day service is available across RAK City and Al Nakheel, and every quote is confirmed transparently over WhatsApp before the technician arrives at your door.",
    metaDescription: "Sofa cleaning in RAK City from AED 150 — same-day service across Corniche and Al Nakheel areas. Free WhatsApp quote, transparent pricing.",
  },
  'ras-al-khaimah-al-hamra-sofa-cleaning': {
    intro: "Al Hamra Village's golf and waterfront community expects a higher standard of care, and our sofa cleaning here reflects that — a fabric assessment before any product is used, followed by hot-water extraction for fabric pieces and conditioning for the leather and designer upholstery common in Al Hamra's premium villas and apartments. We recommend a clean every 4-6 months for these finishes, using pH-neutral products that protect rather than strip the fabric. Access is usually coordinated through community management or a trusted contact, and pricing is confirmed with you before any work begins on your Al Hamra property.",
    metaDescription: "Sofa cleaning in Al Hamra Village, RAK — fabric-matched care for golf and waterfront community residences. Free quote via WhatsApp today.",
  },
  'ras-al-khaimah-al-nakheel-sofa-cleaning': {
    intro: "Al Nakheel's established residential streets near RAK City are home to a lot of long-term families, and many of them book sofa cleaning here on a set quarterly schedule rather than waiting for a stain to appear. A standard 3-seater takes around 1-2 hours to clean and is dry and usable again within 3-4 hours — the same hot-water extraction process we use across every RAK area. Same-day service is usually available given how central Al Nakheel sits relative to RAK City, and every quote is confirmed transparently via WhatsApp before booking.",
    metaDescription: "Sofa cleaning in Al Nakheel, RAK — quarterly packages popular with long-term families. Same-day service, free quote via WhatsApp today.",
  },
  'fujairah-fujairah-city-sofa-cleaning': {
    intro: "Fujairah City's Gulf of Oman coastal climate creates a specific humidity problem for sofas that inland UAE areas don't face as much — moisture that settles into fabric and, left unchecked, leads to musty odours faster than in drier districts. We recommend sofa cleaning in Fujairah City every 4-6 months for this reason, using hot-water extraction with quick-dry air movers to flush trapped moisture rather than just cover the smell. Both residential apartments and villas near Fujairah Corniche and Al Faseel are covered, with same-day or next-day service depending on our east coast route that day. Free quotes via WhatsApp.",
    metaDescription: "Sofa cleaning in Fujairah City — extraction cleaning built for Gulf of Oman coastal humidity. Free WhatsApp quote, same-day or next-day service.",
  },
  'fujairah-kalba-sofa-cleaning': {
    intro: "Kalba's peaceful coastal setting around Khor Kalba mangrove reserve means residents here often care more than most about what's actually in the products used on their furniture, and our eco-friendly, non-toxic cleaning solutions fit that expectation without any compromise on results. Sofa cleaning in Kalba uses the same hot-water extraction and pre-treatment process as the rest of the UAE, safe for households with children and pets. Coastal humidity here means we suggest a clean every 4-6 months to prevent moisture building up in fabric. Message us on WhatsApp for a free quote and to arrange same-day or next-day service.",
    metaDescription: "Sofa cleaning in Kalba, Fujairah — eco-friendly extraction cleaning suited to this coastal, environmentally-minded community. Free WhatsApp quote.",
  },
  'umm-al-quwain-uaq-city-sofa-cleaning': {
    intro: "UAQ City's quieter, less crowded residential streets attract families looking for an alternative to Dubai's pace, and our sofa cleaning here brings the same big-city professional standard — hot-water extraction, pre-treatment spray, quick-dry air movers — at local-friendly pricing from around AED 130 for a standard 3-seater. Fabric, leather and sectional sofas across UAQ City and the Free Trade Zone are all covered, with the sofa dry and usable again within 3-4 hours of the visit. Contact us on WhatsApp for a free, no-obligation quote and to check same-day availability in Umm Al Quwain.",
    metaDescription: "Sofa cleaning in UAQ City from AED 130 — big-city professional standards at local pricing. Free WhatsApp quote, same-day availability.",
  },
  'umm-al-quwain-falaj-al-mualla-sofa-cleaning': {
    intro: "Falaj Al Mualla's growing residential community, near the Umm Al Quwain Equestrian Club, is increasingly booking professional sofa cleaning as more villas and apartments fill out this part of UAQ. We use the standard hot-water extraction and pre-treatment process across fabric and leather sofas alike, with the sofa ready to use again within 3-4 hours of drying. Same-day or next-day service is available depending on our schedule in the emirate that day, and every job is quoted transparently before we start. Message us on WhatsApp with your address and sofa details for a free estimate.",
    metaDescription: "Sofa cleaning in Falaj Al Mualla, UAQ — same-day or next-day service for this growing residential community. Free WhatsApp estimate.",
  },

  /* ===========================================
     CARPET CLEANING
  =========================================== */

  'dubai-marina-carpet-cleaning': {
    intro: "Dubai Marina's high-rise towers trap fine desert dust in shared corridors and lift lobbies before it ever reaches your carpet, but once it does, standard vacuuming can't remove what settles deep into the pile. Our carpet cleaning in Dubai Marina uses hot-water steam extraction with industrial-grade machines — the method that actually lifts embedded sand rather than just brushing the surface — followed by spot treatment for stubborn marks and a speed-dry process that has the carpet ready again in 1-2 hours. We cover apartments in Marina Diamonds, Torch Tower, Princess Tower and Ocean Heights, with sofa cleaning available as a combined package on the same visit.",
    metaDescription: "Carpet cleaning in Dubai Marina — steam extraction that removes embedded desert dust from high-rise apartments. Combine with sofa cleaning, free quote.",
  },
  'dubai-jlt-carpet-cleaning': {
    intro: "JLT's lakeside clusters bring a specific challenge to carpet care: the humidity off the lake settles into carpet fibres alongside everyday dust, and left too long it can lead to musty odours that vacuuming alone won't fix. Our carpet cleaning in JLT uses hot-water steam extraction to flush both dust and trapped moisture out of the pile, then dries the carpet within 1-2 hours using professional equipment rather than air-drying overnight. We cover residential clusters from A to Z as well as DMCC-registered offices, and can combine carpet cleaning with sofa shampooing in the same appointment for JLT residents and businesses alike.",
    metaDescription: "Carpet cleaning in JLT Dubai — steam extraction built for lakeside humidity across all clusters A to Z. Book via WhatsApp, free quote today.",
  },
  'dubai-downtown-carpet-cleaning': {
    intro: "Downtown Dubai's luxury residences often feature area rugs and wall-to-wall carpeting in silk or fine wool blends that need a gentler approach than the aggressive scrubbing suited to synthetic fibres. Our carpet cleaning services in Downtown Dubai begin with a material assessment — silk and wool get lower-moisture dry cleaning techniques, while synthetic carpets get full hot-water extraction — so the fibre is never put at risk. Same-day service is common across Emaar's Address and Opera District towers, and pricing starts from AED 75 for small rugs, scaled up for larger square-metre carpets. Free quotes are confirmed via WhatsApp before booking.",
    metaDescription: "Carpet cleaning in Downtown Dubai from AED 75 — fabric-matched cleaning for silk, wool and synthetic carpets. Same-day service, free WhatsApp quote.",
  },
  'dubai-jumeirah-carpet-cleaning': {
    intro: "Jumeirah's beachside villas along Jumeirah Beach Road deal with the same salt-air problem in their carpets as in their sofas — coastal humidity that accelerates dust buildup and, if untreated, leads to odour retention in the pile. We recommend carpet cleaning in Jumeirah every 4-5 months for villa residents here, using hot-water steam extraction with industrial machines to pull both sand and moisture out rather than mask them. Jumeirah 1, 2 and 3 are all covered, and carpet cleaning can be bundled with sofa and full villa deep cleaning in one visit — a common combination for Jumeirah's larger family homes.",
    metaDescription: "Carpet cleaning in Jumeirah villas — steam extraction built for coastal salt-air humidity along Jumeirah Beach Road. Free quote, bundled packages.",
  },
  'dubai-business-bay-carpet-cleaning': {
    intro: "Business Bay's office carpets in Executive Towers and Bay Square see heavier daily foot traffic than a typical residential carpet, and that means grime settles in faster along walkways and near entrances. Our carpet cleaning in Business Bay includes commercial extraction for office spaces alongside residential carpet cleaning for canal-view apartments, with flexible evening and weekend scheduling so office cleaning doesn't disrupt working hours. The process stays the same regardless of setting — dry vacuum, pre-treatment spray, hot-water steam extraction — with the carpet ready to walk on again within 1-2 hours. Free quotes for both residential and commercial bookings via WhatsApp.",
    metaDescription: "Carpet cleaning in Business Bay — residential and office carpets covered, flexible evening scheduling. Free WhatsApp quote, fast turnaround.",
  },
  'dubai-palm-jumeirah-carpet-cleaning': {
    intro: "Palm Jumeirah's frond villas often pair natural stone flooring with premium area rugs, and those rugs need a different level of care than a standard wall-to-wall carpet — closer inspection of fibre type before any cleaning product touches the surface. Our carpet cleaning on Palm Jumeirah covers everything from smaller decorative rugs to full-room carpeting, using hot-water steam extraction for synthetic fibres and gentler techniques for delicate silk or wool pieces. We work with the same discretion expected across Palm Jumeirah's residences, and quotes are confirmed before any work begins on The Crescent or the fronds.",
    metaDescription: "Carpet cleaning on Palm Jumeirah — fibre-matched cleaning for area rugs and full carpets in frond villas. Free quote, discreet service.",
  },
  'dubai-al-barsha-carpet-cleaning': {
    intro: "Al Barsha's inland location, away from the coast, means carpets here accumulate dry desert dust rather than coastal humidity, and that dust is genuinely abrasive against carpet fibres over time if it isn't extracted regularly. Long-term residents across Al Barsha 1, 2 and 3 often book quarterly carpet cleaning packages for exactly this reason, using hot-water steam extraction to remove sand that regular vacuuming misses. We bundle carpet and sofa cleaning together as a discounted package, which is popular with Al Barsha's established family households. Contact us on WhatsApp for a free quote covering any combination of the two services.",
    metaDescription: "Carpet cleaning in Al Barsha, Dubai — quarterly packages popular with families, bundled sofa cleaning available. Free WhatsApp quote today.",
  },
  'dubai-bur-dubai-carpet-cleaning': {
    intro: "Bur Dubai's older buildings across Karama, Mankhool and Al Fahidi often have window AC units rather than central systems, and that older ventilation circulates more dust into carpets than newer buildings tend to see. Our carpet cleaning in Bur Dubai starts from around AED 75 for small rugs, with larger carpets priced per square metre, using the same hot-water extraction process we run citywide to pull embedded sand and grime out of the pile. Same-day service is usually available across Karama, Mankhool, Meena Bazaar and Al Fahidi, and every quote is confirmed transparently before we begin work at your address.",
    metaDescription: "Carpet cleaning in Bur Dubai from AED 75 — steam extraction for older buildings across Karama and Mankhool. Free quote, same-day service.",
  },
  'sharjah-sharjah-city-carpet-cleaning': {
    intro: "Central Sharjah's carpets — in older apartments near the Corniche and in newer villa communities around Al Majaz — get the same hot-water steam extraction treatment we use across the rest of the UAE, priced competitively for Sharjah rather than charged at a premium. The process removes fine desert sand and dust mites that ordinary vacuuming leaves behind, with a dedicated spot-treatment pass for stubborn or older stains. Carpets are dry and usable again within 1-2 hours thanks to professional speed-drying. We cover Al Majaz, Al Nahda, Al Qasimia and all surrounding central Sharjah districts, with free WhatsApp quotes.",
    metaDescription: "Carpet cleaning in Sharjah City — steam extraction for apartments and villas across Al Majaz and Al Qasimia. Free quote, dries in 1-2 hours.",
  },
  'sharjah-al-nahda-carpet-cleaning': {
    intro: "Al Nahda's high-density apartment blocks generate a lot of everyday foot traffic through shared corridors and lift lobbies, and that traffic tracks dust into carpets faster than in lower-density areas. We recommend carpet cleaning every 6-12 months for most Al Nahda homes, closer to the 6-month mark for busier living rooms, using hot-water steam extraction to lift embedded sand and allergens from the pile. Al Nahda 1 and 2 are both covered, and same-day appointments are usually available given how active this district is on our regular Sharjah routes. Free, transparent quotes are sent over WhatsApp before booking.",
    metaDescription: "Carpet cleaning in Al Nahda, Sharjah — recommended every 6-12 months for this high-density district. Same-day service, free quote.",
  },
  'sharjah-al-majaz-carpet-cleaning': {
    intro: "Al Majaz's waterfront apartments near Khalid Lagoon face the same humid microclimate that affects sofas here, and carpets absorb that moisture just as readily — which is why we recommend carpet cleaning every 6 months for Al Majaz residences rather than the usual annual cycle. Hot-water steam extraction pulls both moisture and embedded dust out of the pile in one pass, with the carpet dry and usable within 1-2 hours afterward. Buhaira Corniche apartments and villas near the Al Majaz Amphitheatre are all covered, and carpet cleaning can be paired with sofa cleaning in the same visit for a better combined rate.",
    metaDescription: "Carpet cleaning in Al Majaz, Sharjah — recommended every 6 months for waterfront humidity near Khalid Lagoon. Free WhatsApp quote.",
  },
  'sharjah-al-qasimia-carpet-cleaning': {
    intro: "Al Qasimia's dense apartment buildings near Sharjah's city centre generate carpets that need regular steam extraction to stay allergen-free, especially with the desert dust that settles fast in this central location. Our hot-water steam extraction pulls embedded sand and grime from the pile in a single pass, dry-vacuumed first, with spot treatment for stubborn marks. Carpets are usable again within 1-2 hours. Same-day service is usually available, and we offer a combined rate when booked with sofa cleaning on the same visit.",
    metaDescription: "Carpet cleaning in Al Qasimia, Sharjah — steam extraction for dense central apartments, same-day WhatsApp booking.",
  },
  'sharjah-al-khan-carpet-cleaning': {
    intro: "Al Khan's beachfront towers deal with the same coastal humidity that shortens carpet life along the rest of the Sharjah Corniche, so we recommend cleaning every 6 months here rather than annually. Hot-water steam extraction removes both embedded dust and trapped moisture in one pass, followed by quick-dry techniques suited to the humid microclimate near the water. Carpets in Al Khan's residential towers are usually dry and usable within 1-2 hours. Message us on WhatsApp for a free quote and to check same-day availability.",
    metaDescription: "Carpet cleaning in Al Khan, Sharjah — humidity-appropriate steam extraction, recommended every 6 months near the coast.",
  },
  'sharjah-al-taawun-carpet-cleaning': {
    intro: "Al Taawun's apartments and townhouses along Al Taawun Road get regular carpet cleaning bookings from residents who commute to Dubai and want the job done around their schedule. We offer early-morning, evening and weekend slots, using hot-water steam extraction with a dry-vacuum first pass to lift embedded dust before the wet clean. Carpets are dry and usable within 1-2 hours. WhatsApp us your preferred time and carpet size for a free quote and to lock in a same-day or next available slot.",
    metaDescription: "Carpet cleaning in Al Taawun, Sharjah — flexible timing for commuters, steam extraction with fast drying.",
  },
  'sharjah-muwaileh-carpet-cleaning': {
    intro: "Muwaileh's mix of family villas and smaller apartments near University City means our carpet cleaning jobs range from large wall-to-wall villa carpets to compact bedroom rugs, priced by size and coverage rather than a flat fee. Hot-water steam extraction is our standard method, with spot treatment for stubborn stains and quick-dry techniques so the carpet is usable within 1-2 hours. Muwaileh Commercial area businesses are also covered for office carpet cleaning. Contact us on WhatsApp with your carpet size for an accurate quote.",
    metaDescription: "Carpet cleaning in Muwaileh, Sharjah — sized pricing for villas, apartments and offices near University City.",
  },
  'sharjah-abu-shagara-carpet-cleaning': {
    intro: "Abu Shagara's central, high-traffic apartments near King Faisal Street collect dust and grime faster than quieter districts, so we generally suggest carpet cleaning every 6 months rather than waiting for a visible stain. Hot-water steam extraction lifts embedded dirt in a single pass, followed by spot treatment where needed, and the carpet is dry within 1-2 hours. Same-day service is usually available in this busy, central part of Sharjah. WhatsApp us your address and carpet details for a free, no-obligation quote.",
    metaDescription: "Carpet cleaning in Abu Shagara, Sharjah — recommended every 6 months for this busy central district. Free WhatsApp quote.",
  },
  'sharjah-al-yarmook-carpet-cleaning': {
    intro: "Al Yarmook's established villas and apartment blocks often have larger, longer-owned carpets that benefit from careful assessment before cleaning — we check fibre type and condition first, then apply hot-water steam extraction or a gentler method as needed. Pricing is based on carpet size and coverage, with stubborn stains treated separately. Bundling carpet cleaning with a villa deep clean is common for Al Yarmook's family homes, saving a separate visit. Contact us on WhatsApp with your requirements for a free quote.",
    metaDescription: "Carpet cleaning in Al Yarmook, Sharjah — fabric-appropriate care for established homes, bundles with villa cleaning.",
  },
  'sharjah-al-nabba-carpet-cleaning': {
    intro: "Al Nabba's older buildings near Rolla and the Sharjah Corniche often have carpets with a wider range of ages and fibre types than newer districts, so our technicians assess each one before choosing hot-water steam extraction or a lower-moisture method. Embedded dust and grime are lifted in a single pass, with the carpet usable again within 1-2 hours. Same-day service is usually available across Al Nabba and nearby Rolla. WhatsApp us for a free, no-obligation quote.",
    metaDescription: "Carpet cleaning in Al Nabba, Sharjah — fabric-appropriate steam extraction for central Sharjah's older buildings.",
  },
  'abu-dhabi-abu-dhabi-city-carpet-cleaning': {
    intro: "Abu Dhabi City's carpets range from smaller area rugs in Corniche apartments to large wall-to-wall carpeting in inland Muroor and Hamdan Street villas, and our teams carry the equipment for both jobs on the same visit. Pricing is based on service type and property size rather than emirate, so Abu Dhabi carpet cleaning costs the same as it does in Dubai for an equivalent job — hot-water steam extraction, dry vacuum first pass, and spot treatment for stubborn stains. Free quotes are sent over WhatsApp, and same-day service is available for most bookings across Al Khalidiyah and Al Bateen.",
    metaDescription: "Carpet cleaning in Abu Dhabi City — steam extraction for apartments and villas, same pricing as Dubai. Free WhatsApp quote, same-day service.",
  },
  'abu-dhabi-khalifa-city-carpet-cleaning': {
    intro: "Khalifa City A and B's spacious family villas usually mean larger carpeted areas — living rooms, majlis spaces, multiple bedrooms — than a typical Abu Dhabi apartment, so our carpet cleaning visits here are sized accordingly. We use industrial-grade hot-water steam extraction across the whole carpeted footprint of the villa, with a dedicated spot-treatment pass for stains in high-traffic areas. Bundling carpet cleaning with sofa cleaning or a full villa deep clean is popular in Khalifa City, since one team visit can cover everything a large family villa needs. WhatsApp us your villa size for an accurate combined quote.",
    metaDescription: "Carpet cleaning in Khalifa City, Abu Dhabi — sized for large family villas, bundled with sofa and deep cleaning. Free WhatsApp quote.",
  },
  'abu-dhabi-yas-island-carpet-cleaning': {
    intro: "Yas Island's serviced apartments and villas across Yas Acres, Ansam and Waters Edge are furnished to a standard that expects carpets to look immaculate between guests, not just clean. Our carpet cleaning on Yas Island uses hot-water steam extraction as standard, with the carpet speed-dried and ready again within 1-2 hours rather than left damp for a full day. We cover both smaller decorative rugs and full-room carpeting, and concierge or key-holder access is common for residents who aren't home during the visit. Same-day service is available for most Yas Island carpet cleaning requests via WhatsApp booking.",
    metaDescription: "Carpet cleaning on Yas Island — fast-dry steam extraction for premium serviced apartments and villas. Same-day booking via WhatsApp.",
  },
  'ajman-ajman-city-carpet-cleaning': {
    intro: "Ajman City's mix of Corniche apartments and residential blocks across Al Rashidiya and Al Nuaimiya gets the same hot-water steam extraction process we run across the UAE, priced competitively for the emirate. Carpet cleaning removes embedded desert sand that regular vacuuming can't reach, with a dedicated spot-treatment pass for stubborn marks and professional speed-drying that has the carpet usable again within 1-2 hours. Free quotes are sent over WhatsApp, and same-day service is often available across Ajman City. Bundling carpet cleaning with sofa cleaning is a popular combination for Ajman households looking for a full living-room refresh.",
    metaDescription: "Carpet cleaning in Ajman City — steam extraction covering Corniche and Al Rashidiya areas. Free WhatsApp quote, same-day service.",
  },
  'ajman-al-nuaimiya-carpet-cleaning': {
    intro: "Al Nuaimiya's dense residential blocks near Ajman Free Zone make carpet cleaning one of our steadiest bookings in this part of Ajman, priced from around AED 70 for standard-sized carpets. We use hot-water steam extraction across Al Nuaimiya 1, 2 and 3, with the carpet dry and usable again within 1-2 hours of the appointment. We recommend cleaning every 6-12 months for most Al Nuaimiya homes, or closer to 6 months in busier living rooms and hallways. Same-day service is usually available given how active this district is on our regular Ajman routes, with free WhatsApp quotes.",
    metaDescription: "Carpet cleaning in Al Nuaimiya, Ajman from AED 70 — covering all three sub-areas, same-day service available. Free WhatsApp quote.",
  },
  'ajman-al-rashidiya-carpet-cleaning': {
    intro: "Al Rashidiya's mix of villa compounds and residential apartments near the Ajman-Sharjah border means our carpet cleaning bookings here range from a single living-room rug to a full villa's worth of carpeting. The process stays consistent — dry vacuum first, pre-treatment spray for embedded stains, then hot-water steam extraction with industrial machines — regardless of property size. Speed-drying has the carpet ready again within 1-2 hours rather than staying damp overnight. Contact us via WhatsApp for a free quote and same-day booking for any Al Rashidiya address, whether it's an apartment or a full villa compound.",
    metaDescription: "Carpet cleaning in Al Rashidiya, Ajman — villa and apartment carpets covered, same-day booking available. Free WhatsApp quote today.",
  },
  'ajman-al-jerf-carpet-cleaning': {
    intro: "Al Jerf's mix of port-adjacent industry and residential streets near Ajman Port means carpets here pick up more airborne dust than in quieter Ajman districts, and our deep steam extraction is especially effective at cutting through that buildup. Carpet cleaning is available throughout Al Jerf 1 and Al Jerf 2, using the same hot-water process that lifts embedded sand out of the pile rather than just refreshing the surface. Given the extra dust load in this area, we suggest carpet cleaning a little more often than the standard 6-12 month cycle. Free quotes are confirmed via WhatsApp before booking.",
    metaDescription: "Carpet cleaning in Al Jerf, Ajman — deep steam extraction for the extra dust near the port and Free Zone. Free WhatsApp quote.",
  },
  'ajman-al-rawda-carpet-cleaning': {
    intro: "Al Rawda's larger family villas across Al Rawda 1, 2 and 3 mean more carpeted floor area per household than in Ajman's apartment-heavy districts, and our teams size the visit to match — covering multiple rooms and majlis carpeting in a single appointment. Hot-water steam extraction removes embedded dust and stains from the full carpeted footprint, with spot treatment for high-traffic areas near doorways and seating. Combining carpet cleaning with sofa and villa deep cleaning is common here given how much a typical Al Rawda home has to cover. Same-day availability and transparent pricing are confirmed via WhatsApp.",
    metaDescription: "Carpet cleaning in Al Rawda, Ajman — full-villa carpet cleaning across Al Rawda 1-3. Same-day, transparent pricing, free WhatsApp quote.",
  },
  'ajman-al-hamidiya-carpet-cleaning': {
    intro: "Al Hamidiya's central location and heavy ground-floor retail foot traffic mean carpets here pick up grime faster than in quieter parts of Ajman, so we recommend carpet cleaning every 6 months rather than the usual 12. Hot-water steam extraction removes the embedded dirt that higher foot traffic drives into the pile, and the carpet is dry and usable again within 1-2 hours. Al Hamidiya 1 and 2 are both covered, and same-day appointments are frequently available given how central this district sits on our regular Ajman routes. Message us on WhatsApp in the morning for the best chance of a same-day slot.",
    metaDescription: "Carpet cleaning in Al Hamidiya, Ajman — recommended every 6 months for this busy, central district. Same-day service, free WhatsApp quote.",
  },
  'ajman-al-zahya-carpet-cleaning': {
    intro: "Al Zahya's newer gated-community villas often have premium carpeting that benefits from careful, product-appropriate handling rather than an aggressive standard scrub. Our carpet cleaning in Al Zahya checks fibre type before starting, using hot-water steam extraction for synthetic carpets and gentler methods for wool or higher-pile rugs common in these newer homes. Access is usually arranged through the gated community's management, and we only need someone reachable by phone during the visit. Bundling carpet cleaning with sofa cleaning or marble floor care is a popular combination for Al Zahya's modern villas and townhouses.",
    metaDescription: "Carpet cleaning in Al Zahya, Ajman — fibre-matched cleaning for premium carpeting in gated-community villas. Free WhatsApp quote.",
  },
  'ajman-al-mowaihat-carpet-cleaning': {
    intro: "Al Mowaihat's steady growth along the Ajman-Sharjah border brings a lot of new households settling into villas and low-rise apartments across Al Mowaihat 1, 2 and 3, and carpet cleaning here is often booked as part of a move-in or move-out package. Hot-water steam extraction removes embedded dust and any residue left from a previous tenant, with the carpet speed-dried and ready again within 1-2 hours. Both villas and apartments are covered under the same process, and free, no-obligation quotes are available via WhatsApp for any Al Mowaihat property, whether newly built or established.",
    metaDescription: "Carpet cleaning in Al Mowaihat, Ajman — often part of move-in/move-out packages for this growing area. Free WhatsApp quote today.",
  },
  'ajman-musherief-carpet-cleaning': {
    intro: "Musherief's larger, more spread-out villa compounds mean our carpet cleaning visits here typically cover more floor area than in Ajman's denser central districts, including majlis carpeting and multiple bedrooms in a single appointment. We use industrial hot-water steam extraction across the full carpeted footprint, with a dedicated pass for high-traffic hallways and living areas. Combining carpet cleaning with sofa and villa deep cleaning is the most cost-effective way to book in Musherief, since one team handles everything in a single visit. Contact us on WhatsApp for a free quote based on your villa's carpeted area.",
    metaDescription: "Carpet cleaning in Musherief, Ajman — full-villa carpet cleaning for this quieter district's larger homes. Free WhatsApp quote today.",
  },
  'ras-al-khaimah-rak-city-carpet-cleaning': {
    intro: "RAK City's carpets — across Corniche apartments and the residential streets near Al Nakheel — get the same hot-water steam extraction process we use across the rest of the UAE, removing embedded sand that a standard vacuum leaves behind. Carpet cleaning starts from around AED 75 for small rugs, with larger carpets priced per square metre, and the carpet is dry and usable again within 1-2 hours of the visit. Ras Al Khaimah's newer developments mean plenty of freshly laid carpets that still need protecting from the region's dust. Free quotes and same-day availability are confirmed by WhatsApp.",
    metaDescription: "Carpet cleaning in RAK City from AED 75 — steam extraction across Corniche and Al Nakheel areas. Free quote, same-day availability.",
  },
  'ras-al-khaimah-al-hamra-carpet-cleaning': {
    intro: "Al Hamra Village's golf and waterfront residences often pair premium area rugs with hard flooring, and those rugs need the same careful assessment we apply to sofa fabric before any cleaning product is used. Our carpet cleaning in Al Hamra Village covers both full carpeting and decorative rugs, using hot-water steam extraction for synthetic fibres and gentler low-moisture methods for wool and silk pieces common in these premium homes. Access is usually coordinated through community management, and pricing is confirmed after we assess the rug or carpet's material and size on-site.",
    metaDescription: "Carpet cleaning in Al Hamra Village, RAK — fibre-matched cleaning for premium rugs in golf and waterfront homes. Free assessment.",
  },
  'ras-al-khaimah-al-nakheel-carpet-cleaning': {
    intro: "Al Nakheel's established residential community near RAK City provides a steady base of long-term clients, and many families here book carpet cleaning on the same quarterly schedule as their sofa cleaning for consistent results. Carpet cleaning starts from around AED 75 for small rugs, with larger carpets priced per square metre — the same hot-water steam extraction process used across every RAK area, removing embedded sand that ordinary vacuuming misses. Same-day service is usually available given Al Nakheel's central location near RAK City. Free quotes are confirmed transparently over WhatsApp before any work begins.",
    metaDescription: "Carpet cleaning in Al Nakheel, RAK from AED 75 — quarterly packages popular with long-term residents. Free WhatsApp quote today.",
  },
  'fujairah-fujairah-city-carpet-cleaning': {
    intro: "Fujairah City's Gulf of Oman coastal climate brings humidity that settles into carpet fibres alongside everyday dust, and untreated carpets here can develop musty odours faster than in drier inland areas. Our carpet cleaning in Fujairah City uses hot-water steam extraction to pull both moisture and embedded dirt out of the pile in a single pass, with the carpet dry and usable within 1-2 hours. Apartments and villas near Fujairah Corniche and Al Faseel are all covered, with same-day or next-day service depending on our team's route on the east coast that day. Free quotes via WhatsApp.",
    metaDescription: "Carpet cleaning in Fujairah City — steam extraction built for Gulf of Oman coastal humidity. Free WhatsApp quote, same or next-day service.",
  },
  'fujairah-kalba-carpet-cleaning': {
    intro: "Kalba's peaceful coastal setting near Khor Kalba mangrove reserve means residents here often prefer cleaning products that align with the area's environmental character, and our carpet cleaning uses eco-friendly, non-toxic solutions as standard rather than as an optional upgrade. Carpet cleaning in Kalba starts from around AED 75 for small rugs, with larger carpets priced per square metre, using hot-water steam extraction to remove embedded coastal dust and moisture. Same-day or next-day service is available depending on our schedule along the Fujairah coast. Message us on WhatsApp for a free quote for your Kalba property.",
    metaDescription: "Carpet cleaning in Kalba, Fujairah from AED 75 — eco-friendly steam extraction for this coastal community. Free WhatsApp quote.",
  },
  'umm-al-quwain-uaq-city-carpet-cleaning': {
    intro: "UAQ City's quieter residential streets and the areas around the Free Trade Zone are covered by the same professional carpet cleaning process we run across the UAE, priced for Umm Al Quwain's local market rather than at Dubai rates. Hot-water steam extraction removes embedded sand and allergens from the pile, with the carpet dry and ready again within 1-2 hours. Both villa and apartment carpets are covered, and free quotes are sent over WhatsApp before any work begins. Same-day service is usually available for UAQ City bookings given the emirate's smaller, more manageable coverage area.",
    metaDescription: "Carpet cleaning in UAQ City — steam extraction at local-friendly pricing, same-day service available. Free WhatsApp quote today.",
  },
  'umm-al-quwain-falaj-al-mualla-carpet-cleaning': {
    intro: "Falaj Al Mualla's growing residential community near the Umm Al Quwain Equestrian Club is seeing more villas and apartments filling out the area, and carpet cleaning demand has grown alongside it. We use the standard hot-water steam extraction process across fabric and synthetic carpets alike, with the carpet ready to walk on again within 1-2 hours of drying. Same-day or next-day service is available depending on our schedule in the emirate, and every job is quoted transparently before we begin. Message us on WhatsApp with your address and carpet size for a free estimate.",
    metaDescription: "Carpet cleaning in Falaj Al Mualla, UAQ — same-day or next-day steam extraction for this growing community. Free WhatsApp estimate.",
  },

  /* ===========================================
     VILLA DEEP CLEANING
  =========================================== */

  'dubai-jumeirah-villa-deep-cleaning': {
    intro: "Jumeirah's beachside villas along Jumeirah Beach Road and across Jumeirah 1, 2 and 3 are large enough that a proper deep clean means a team of 3-6 technicians working room-by-room rather than a quick single-person visit. Our villa deep cleaning in Jumeirah covers kitchen degreasing, steam disinfection in every bathroom, AC grille removal and sanitization, and internal window cleaning, with pricing starting from around AED 750 for a 2-bedroom property and scaling up for the larger 4-6 bedroom villas common along this stretch. Sofa and carpet cleaning can be bundled into the same visit — a popular combination for Jumeirah's bigger family homes. WhatsApp us your villa size for an exact quote.",
    metaDescription: "Villa deep cleaning in Jumeirah from AED 750 — full room-by-room service for beachside villas. Free WhatsApp quote, bundled packages.",
  },
  'dubai-palm-jumeirah-villa-deep-cleaning': {
    intro: "Palm Jumeirah's frond villas combine natural stone flooring, designer upholstery and multiple bathrooms, and our villa deep cleaning here is built around that scale — teams of 3-6 technicians covering kitchen degreasing, steam disinfection, AC grilles, windows and floor restoration in a single scheduled visit. Marble care is assessed alongside the deep clean, since many Palm villas benefit from polishing as a separate add-on where floors have dulled. We work with the discretion Palm Jumeirah residences expect, using Dubai Municipality-approved, biodegradable products throughout. Pricing starts from around AED 750 for smaller properties and scales with villa size — contact us via WhatsApp for a full estimate.",
    metaDescription: "Villa deep cleaning on Palm Jumeirah from AED 750 — full-property service with marble care assessed alongside. Free WhatsApp estimate.",
  },
  'dubai-al-barsha-villa-deep-cleaning': {
    intro: "Al Barsha's established family villas across Al Barsha 1, 2 and 3 are the kind of homes where a deep clean genuinely means every room — kitchen degreasing, bathroom steam disinfection, AC vents, windows and floor restoration — rather than the surface tidy a regular maintenance visit covers. Pricing starts from AED 750 for a 2-bedroom villa and scales with property size, using Dubai Municipality-approved products throughout. Many Al Barsha residents combine villa deep cleaning with sofa and carpet cleaning in the same visit at a discounted bundle rate, which suits this area's long-established, larger households. Contact us via WhatsApp for a free quote specific to your property.",
    metaDescription: "Villa deep cleaning in Al Barsha from AED 750 — full-property service, bundled sofa and carpet cleaning available. Free WhatsApp quote.",
  },
  'dubai-bur-dubai-villa-deep-cleaning': {
    intro: "Bur Dubai's older buildings and traditional courtyard-style homes across Al Fahidi, Mankhool and Karama often have older AC and ventilation systems, so vent sanitization is a bigger part of the job here than in newer Dubai villas. Our villa deep cleaning in Bur Dubai covers the standard top-to-bottom process — kitchen, bathrooms, AC grilles, windows and floors — adapted for the specific layout and building type, whether that's a single-unit residence or a partition-style property. Pricing starts from AED 750 for a 2-bedroom home, with move-in and move-out cleaning especially popular given Bur Dubai's high tenant turnover. Free quotes via WhatsApp.",
    metaDescription: "Villa deep cleaning in Bur Dubai from AED 750 — adapted for older buildings and traditional layouts. Free WhatsApp quote today.",
  },
  'sharjah-sharjah-city-villa-deep-cleaning': {
    intro: "Sharjah City's villa communities, spread beyond the older apartments near the Corniche, get the same top-to-bottom deep cleaning process we run in Dubai — room-by-room cleaning, kitchen degreasing, bathroom steam disinfection, and AC grille sanitization — at the same transparent, competitive pricing. Our teams are experienced with Sharjah's specific villa layouts and the climate-related cleaning challenges of the emirate, from dust accumulation to AC vent buildup. A team of 3-5 technicians typically completes a 3-4 bedroom villa in 6-8 hours. Free estimates are available via WhatsApp for any Sharjah City villa, with same-day scheduling where possible.",
    metaDescription: "Villa deep cleaning in Sharjah City — same standard as Dubai, transparent pricing. Free WhatsApp estimate, same-day scheduling.",
  },
  'sharjah-al-nahda-villa-deep-cleaning': {
    intro: "Al Nahda's family villas sit alongside its denser apartment blocks, and our villa deep cleaning here follows the same comprehensive process regardless of property size — kitchen, bathrooms, AC vents, windows and floor restoration in a single scheduled visit. Full apartment or villa deep cleaning in Al Nahda starts from AED 250 for a studio, scaling up with property size and bedroom count. Many Al Nahda families book bi-annual deep cleaning packages that combine the villa clean with sofa and carpet care for consistent year-round results. Contact us on WhatsApp for a free, no-obligation quote for your Al Nahda property.",
    metaDescription: "Villa deep cleaning in Al Nahda, Sharjah from AED 250 — bi-annual packages popular with local families. Free WhatsApp quote.",
  },
  'sharjah-al-majaz-villa-deep-cleaning': {
    intro: "Al Majaz's upscale villas along the Buhaira Corniche waterfront combine the standard deep cleaning scope — kitchen degreasing, bathroom disinfection, AC grilles, window cleaning — with extra attention to upholstery, since waterfront humidity affects fabric and marble surfaces faster than it does further inland. Our teams handle full villa deep cleaning alongside marble care for premium interiors in this prestigious community, using quick-dry techniques where humidity is a concern. Pricing is confirmed after an assessment of villa size and scope. Contact us via WhatsApp for a quote covering your Al Majaz waterfront property.",
    metaDescription: "Villa deep cleaning in Al Majaz, Sharjah — full-property service with marble care for waterfront villas. Free WhatsApp quote.",
  },
  'sharjah-al-qasimia-villa-deep-cleaning': {
    intro: "Al Qasimia's mixed residential and commercial buildings include a number of standalone villas among the apartment blocks, and our villa deep cleaning here covers the full scope — kitchen degreasing, bathroom disinfection, AC vents, window tracks and floor care — in one visit. Central Sharjah's dust accumulates quickly indoors, so we pay particular attention to window tracks and AC grilles during the clean. Pricing is confirmed after we know villa size and scope. WhatsApp us with your property details for a free quote.",
    metaDescription: "Villa deep cleaning in Al Qasimia, Sharjah — full-property service for central Sharjah villas. Free WhatsApp quote.",
  },
  'sharjah-al-khan-villa-deep-cleaning': {
    intro: "Al Khan's beachfront villas face the same coastal humidity as its apartment towers, which means our deep cleaning teams pay extra attention to marble and tiled surfaces prone to dulling near the water, alongside the standard kitchen, bathroom, AC and window scope. Quick-dry techniques help limit moisture buildup after wet-cleaning steps. Villa size and scope determine the final price, confirmed after a quick assessment. Contact us on WhatsApp for a quote covering your Al Khan property.",
    metaDescription: "Villa deep cleaning in Al Khan, Sharjah — full-property service built for beachfront humidity. Free WhatsApp quote.",
  },
  'sharjah-al-taawun-villa-deep-cleaning': {
    intro: "Al Taawun's townhouses and villas along Al Taawun Road get the full deep-cleaning scope from our teams — kitchen degreasing, bathroom disinfection, AC vents, window tracks, and floor care — with flexible scheduling for residents who commute to Dubai daily. Early-morning and weekend appointments are available on request. Final pricing depends on property size, confirmed after a quick assessment. Message us on WhatsApp with your villa details and preferred time for a free quote.",
    metaDescription: "Villa deep cleaning in Al Taawun, Sharjah — full-property service with flexible commuter-friendly scheduling.",
  },
  'sharjah-muwaileh-villa-deep-cleaning': {
    intro: "Muwaileh's family villa compounds near University City are a regular booking for our full deep-cleaning service — kitchen, bathrooms, AC vents, window tracks and floors covered in a single visit by a team sized to the property. Move-in and move-out cleaning is especially popular here given the area's ongoing growth. Pricing is confirmed after we know villa size and scope. WhatsApp us with your property details for a free quote and to check same-day or next-day availability.",
    metaDescription: "Villa deep cleaning in Muwaileh, Sharjah — full-property service, popular for move-in/move-out. Free WhatsApp quote.",
  },
  'sharjah-abu-shagara-villa-deep-cleaning': {
    intro: "Abu Shagara has fewer standalone villas than Sharjah's outer suburbs, but the ones we service get the same full scope as anywhere else — kitchen degreasing, bathroom disinfection, AC vents, window tracks and floor care in one visit. Central Sharjah's dust levels mean we pay close attention to window tracks and AC grilles during the clean. Final pricing depends on property size and condition, confirmed after a quick assessment. Contact us on WhatsApp for a free quote.",
    metaDescription: "Villa deep cleaning in Abu Shagara, Sharjah — full-property service for central Sharjah homes. Free WhatsApp quote.",
  },
  'sharjah-al-yarmook-villa-deep-cleaning': {
    intro: "Al Yarmook's established family villas are some of our most regular deep-cleaning bookings in Sharjah, often paired with a sofa and carpet cleaning visit on the same day for long-term residents who prefer one team handling everything at once. The full scope covers kitchen, bathrooms, AC vents, window tracks and floors. Pricing is confirmed after we know property size and scope. WhatsApp us with your villa details for a free, combined quote.",
    metaDescription: "Villa deep cleaning in Al Yarmook, Sharjah — full-property service, often bundled with sofa and carpet cleaning.",
  },
  'sharjah-al-nabba-villa-deep-cleaning': {
    intro: "Al Nabba's older residential stock near Rolla and the Sharjah Corniche includes a mix of villas alongside its apartment buildings, and our deep-cleaning teams assess each property's specific condition before starting — older fittings and surfaces sometimes need a gentler approach than newer builds. The full scope covers kitchen, bathrooms, AC vents, window tracks and floors. Contact us on WhatsApp with your property details for a free quote.",
    metaDescription: "Villa deep cleaning in Al Nabba, Sharjah — full-property service tailored to central Sharjah's older homes.",
  },
  'abu-dhabi-abu-dhabi-city-villa-deep-cleaning': {
    intro: "Abu Dhabi City's inland villas, larger and more spread out than the Corniche-facing apartments closer to the water, typically need a full villa deep clean every 3-6 months to stay ahead of everyday dust — with sofa and carpet cleaning recommended on the shorter 4-6 month cycle in between. Our process covers kitchen degreasing, steam disinfection in every bathroom, AC grille and vent sanitization, and internal window cleaning, using the same Dubai Municipality-approved products we use across the UAE. Pricing is based on villa size and scope, not emirate, so Abu Dhabi rates match what we charge in Dubai. Free quotes via WhatsApp.",
    metaDescription: "Villa deep cleaning in Abu Dhabi City — full-property service, same pricing as Dubai. Free WhatsApp quote, recommended every 3-6 months.",
  },
  'abu-dhabi-khalifa-city-villa-deep-cleaning': {
    intro: "Khalifa City A and B's large 4-6 bedroom villa formats mean our deep cleaning teams here are typically 3-4 technicians working 6-8 hours to cover every room, kitchen, bathroom, AC vent and piece of upholstery in one visit. Pricing starts from around AED 750 for a 2-bedroom property and scales up for Khalifa City's larger family villas — WhatsApp us your villa size for an exact quote. Marble polishing is a popular add-on here too, since many Khalifa City villas have flooring that benefits from periodic diamond-pad restoration alongside the standard deep clean. All products are eco-friendly and biodegradable.",
    metaDescription: "Villa deep cleaning in Khalifa City from AED 750 — full-property service for large family villas. Marble add-on available, free quote.",
  },
  'abu-dhabi-yas-island-villa-deep-cleaning': {
    intro: "Yas Island's villas across communities like Yas Acres and Ansam are held to the same premium standard as the island's serviced apartments, and our villa deep cleaning here reflects that — full kitchen degreasing, bathroom steam disinfection, AC grille sanitization, window cleaning and floor restoration, using Dubai Municipality-approved products throughout. Marble and luxury sofa cleaning are commonly booked alongside the deep clean for Yas Island's premium interiors. Access is often coordinated through concierge or a trusted key-holder, and same-day service is available for most requests. Contact us via WhatsApp for a quote tailored to your Yas Island villa.",
    metaDescription: "Villa deep cleaning on Yas Island — full-property service with marble and luxury sofa care available. Free WhatsApp quote.",
  },
  'ajman-ajman-city-villa-deep-cleaning': {
    intro: "Ajman City's villas across the Corniche, Al Rashidiya and Al Nuaimiya areas get the same full deep cleaning scope we run across the UAE — kitchen, bathrooms, AC vents, windows and floors — covered in a single visit by a team sized to your property. Pricing depends on villa size, and we confirm an exact quote after understanding the property, keeping in line with Ajman-friendly rates rather than Dubai pricing. Move-in, move-out and post-construction deep cleaning are all available, and Ajman's rapid residential growth means we handle a steady stream of these bookings. Contact us via WhatsApp for a free quote.",
    metaDescription: "Villa deep cleaning in Ajman City — full-property service at Ajman-friendly pricing. Move-in/move-out available, free WhatsApp quote.",
  },
  'ajman-al-nuaimiya-villa-deep-cleaning': {
    intro: "Al Nuaimiya's residential streets, some of Ajman's most centrally located, are covered by our full villa deep cleaning process — kitchen degreasing, bathroom steam disinfection, AC vent sanitization, and floor restoration across Al Nuaimiya 1, 2 and 3. Sofa cleaning starts from AED 120 and carpet cleaning from AED 70 if you'd like to bundle either into the same visit as the deep clean, which is a common combination for Al Nuaimiya households. Same-day service is usually available given how active this district is on our regular Ajman routes. Free quotes and exact villa pricing are confirmed via WhatsApp.",
    metaDescription: "Villa deep cleaning in Al Nuaimiya, Ajman — full-property service, bundled sofa and carpet cleaning available. Free WhatsApp quote.",
  },
  'ajman-al-rashidiya-villa-deep-cleaning': {
    intro: "Al Rashidiya's mix of villa compounds and apartment buildings means our deep cleaning teams here work across a genuine range of property sizes, from a compact 2-bedroom villa to larger family compounds. Pricing starts from around AED 750 for a 2-bedroom villa, with larger compounds priced after we understand the property size. The process covers kitchen degreasing, bathroom disinfection, AC grille cleaning and floor restoration in every visit, and marble polishing is available as an add-on for villas with dulled or scratched flooring. Free quotes and same-day booking are available via WhatsApp for any Al Rashidiya property.",
    metaDescription: "Villa deep cleaning in Al Rashidiya, Ajman from AED 750 — marble polishing add-on available. Free WhatsApp quote, same-day booking.",
  },
  'ajman-al-jerf-villa-deep-cleaning': {
    intro: "Al Jerf's residential streets near Ajman Port and the Free Zone deal with more airborne dust than quieter parts of the emirate, and our villa deep cleaning here puts extra emphasis on AC grille sanitization and floor cleaning to cut through that buildup. The full process — kitchen degreasing, bathroom steam disinfection, window cleaning and floor restoration — covers villas across Al Jerf 1 and Al Jerf 2, with all equipment brought on-site by our team. Given the extra dust in this area, we suggest scheduling a deep clean a little more frequently than the standard six-month cycle. Free quotes via WhatsApp.",
    metaDescription: "Villa deep cleaning in Al Jerf, Ajman — extra focus on dust from the port and Free Zone. Free WhatsApp quote, equipment brought to you.",
  },
  'ajman-al-rawda-villa-deep-cleaning': {
    intro: "Al Rawda's popularity with families means larger villa compounds across Al Rawda 1, 2 and 3, and our teams schedule accordingly — a typical 3-4 bedroom villa here takes around 5-7 hours to deep clean fully, covering every room, kitchen, bathroom and soft furnishing in one visit. Pricing starts from around AED 750 for a 2-bedroom villa and scales up for Al Rawda's larger family homes. Marble polishing is available for villas with floors that have dulled from daily use, and WhatsApp quotes are confirmed against your specific villa size before booking. Same-day and next-day availability depend on our schedule that week.",
    metaDescription: "Villa deep cleaning in Al Rawda, Ajman from AED 750 — sized for larger family villas. Marble polishing available, free quote.",
  },
  'ajman-al-hamidiya-villa-deep-cleaning': {
    intro: "Al Hamidiya's dense, centrally located residential streets mean our villa deep cleaning teams here are used to working around ground-floor retail activity and tighter parking access without it affecting the service. The full deep clean covers kitchen degreasing, bathroom steam disinfection, AC grille sanitization and floor restoration, priced after we understand your villa's size and scope. Central Ajman locations like Al Hamidiya often get same-day service given how close this district sits to our regular routes. Contact us on WhatsApp for a free quote and to check availability for your property.",
    metaDescription: "Villa deep cleaning in Al Hamidiya, Ajman — full-property service, same-day availability for this central district. Free quote.",
  },
  'ajman-al-zahya-villa-deep-cleaning': {
    intro: "Al Zahya's newer gated-community villas and townhouses often have premium flooring and finishes that our teams treat with extra care during the deep clean — checking marble and stone surfaces separately from standard tile before deciding on cleaning versus polishing. Pricing starts from around AED 750 for a 2-bedroom townhouse and scales up for larger gated-community villas. The standard deep clean covers kitchen, bathrooms, AC vents and windows, and marble polishing or sealing is available as a tailored add-on for Al Zahya's newer flooring. Contact us on WhatsApp for a quote matched to your specific property.",
    metaDescription: "Villa deep cleaning in Al Zahya, Ajman from AED 750 — careful handling of premium finishes. Marble add-on available, free quote.",
  },
  'ajman-al-mowaihat-villa-deep-cleaning': {
    intro: "Al Mowaihat's growing population along the Ajman-Sharjah border means a lot of our villa deep cleaning bookings here are move-in or move-out jobs, as new residents settle into villas and low-rise apartments across Al Mowaihat 1, 2 and 3. Pricing depends on property size and condition — contact us via WhatsApp with your villa or apartment details for a free, no-obligation quote. The standard process covers kitchen degreasing, bathroom disinfection, AC grille sanitization and floor restoration, and carpet cleaning is available across all three Al Mowaihat sub-areas as an add-on to the deep clean.",
    metaDescription: "Villa deep cleaning in Al Mowaihat, Ajman — popular for move-in/move-out across this growing border area. Free WhatsApp quote.",
  },
  'ajman-musherief-villa-deep-cleaning': {
    intro: "Musherief's quieter, more spread-out villa layout compared to central Ajman means a full deep clean here — covering multiple bedrooms, majlis areas and outdoor spaces — typically takes our team 6-8 hours in a single visit. Pricing starts from around AED 750 for a 2-bedroom home and scales up based on the larger villa compounds typical of this district. We combine sofa cleaning, carpet cleaning and villa deep cleaning into one visit for Musherief households, which is more cost-effective than booking each service separately. WhatsApp us for an exact quote based on your Musherief villa's size.",
    metaDescription: "Villa deep cleaning in Musherief, Ajman from AED 750 — full-property service for larger, spread-out villas. Free WhatsApp quote.",
  },
  'ras-al-khaimah-rak-city-villa-deep-cleaning': {
    intro: "RAK City's growing residential community, spread across the Corniche and Al Nakheel areas, gets the same full deep cleaning process we run across the UAE — kitchen degreasing, bathroom steam disinfection, AC grille sanitization and floor restoration — covering all rooms, kitchen, bathrooms and upholstery in one visit. Ras Al Khaimah's rapid development means we handle plenty of newly built villas alongside older properties, adapting the scope to whatever condition the home is in. Same-day service is available for villa deep cleaning throughout RAK City and Al Nakheel, with free estimates confirmed via WhatsApp before booking.",
    metaDescription: "Villa deep cleaning in RAK City — full-property service across Corniche and Al Nakheel. Free WhatsApp estimate, same-day service.",
  },
  'ras-al-khaimah-al-hamra-villa-deep-cleaning': {
    intro: "Al Hamra Village's golf and waterfront villas expect the highest cleaning standard in RAK, and our villa deep cleaning here reflects that — full kitchen degreasing, bathroom steam disinfection, AC grille sanitization, and marble care for the natural stone flooring common in Al Hamra's premium properties. We assess golf and waterfront villa floors on-site before confirming a quote, since marble polishing pricing depends on floor area and current condition. Access is usually coordinated through community management or a trusted contact, and we recommend booking at least 24 hours in advance to ensure the right team size for your villa.",
    metaDescription: "Villa deep cleaning in Al Hamra Village, RAK — premium service with marble care for golf and waterfront villas. Free quote.",
  },
  'ras-al-khaimah-al-nakheel-villa-deep-cleaning': {
    intro: "Al Nakheel's established family villas near RAK City provide a stable base of repeat clients, and many families here book their full villa deep clean on the same quarterly schedule as their sofa and carpet cleaning for consistent results. The process covers every room, kitchen, bathrooms, AC vents and windows in a single scheduled visit. Same-day service is usually available given Al Nakheel's central location near RAK City, and pricing is confirmed after we understand your villa's size and scope. Contact us via WhatsApp for a free quote and to check availability for your property.",
    metaDescription: "Villa deep cleaning in Al Nakheel, RAK — quarterly packages popular with established families. Free WhatsApp quote today.",
  },
  'fujairah-fujairah-city-villa-deep-cleaning': {
    intro: "Fujairah City's family villas across districts near the Corniche and Al Faseel get the standard full deep clean — kitchen degreasing, bathroom steam disinfection, AC grille sanitization, window cleaning and floor restoration — priced from around AED 750 for a 2-bedroom property and scaling up based on villa size. Fujairah's Gulf of Oman coastal climate creates humidity conditions that affect upholstery and marble alike, so we can add sofa cleaning or marble polishing to the same visit where floors or fabric have been affected. Contact us via WhatsApp for same-day or next-day service and a free quote.",
    metaDescription: "Villa deep cleaning in Fujairah City from AED 750 — full-property service, marble and sofa add-ons available. Free quote.",
  },
  'fujairah-kalba-villa-deep-cleaning': {
    intro: "Kalba's coastal residential villas near Khor Kalba mangrove reserve get the same full deep cleaning process — kitchen, bathrooms, AC vents, windows and floor restoration — using eco-friendly, biodegradable products that suit this environmentally-minded community. Villa deep cleaning in Kalba covers all rooms in a single visit, with pricing confirmed after we understand your villa's size. Given Kalba's peaceful coastal character, many residents pair the deep clean with regular sofa and carpet maintenance visits rather than one-off bookings. Contact us via WhatsApp for a free quote and to arrange same-day or next-day service in Kalba.",
    metaDescription: "Villa deep cleaning in Kalba, Fujairah — eco-friendly full-property service for this coastal community. Free WhatsApp quote.",
  },
  'umm-al-quwain-uaq-city-villa-deep-cleaning': {
    intro: "UAQ City's family villas and Free Trade Zone properties get the same big-city deep cleaning standard we bring across the UAE — kitchen degreasing, bathroom steam disinfection, AC vent sanitization and floor restoration — at local-friendly UAQ pricing. Villa deep cleaning is available throughout UAQ City, covering all rooms, kitchen, bathrooms and upholstery in a single visit rather than spreading the job across multiple appointments. WhatsApp us for a free quote, and ask about bundling sofa or carpet cleaning into the same booking for a better combined rate on your UAQ City villa.",
    metaDescription: "Villa deep cleaning in UAQ City — full-property service at local-friendly pricing. Free WhatsApp quote, bundled packages available.",
  },
  'umm-al-quwain-falaj-al-mualla-villa-deep-cleaning': {
    intro: "Falaj Al Mualla's growing residential community, near the Umm Al Quwain Equestrian Club, is seeing more villas move from move-in condition to established family homes, and our deep cleaning bookings here reflect that mix. Pricing starts from around AED 750 for a 2-bedroom property and scales up for larger homes — contact us via WhatsApp for an exact quote based on your villa. The process covers kitchen degreasing, bathroom disinfection, AC grille sanitization and floor restoration, and marble polishing is available for villas with flooring that has dulled from everyday use.",
    metaDescription: "Villa deep cleaning in Falaj Al Mualla, UAQ from AED 750 — full-property service, marble polishing available. Free quote.",
  },

  /* ===========================================
     MARBLE POLISHING
  =========================================== */

  'dubai-downtown-marble-polishing': {
    intro: "Downtown Dubai's Emaar residences — The Address, Boulevard Point, Opera District towers — are full of marble floors that see constant foot traffic and, over a year or two, begin etching and dulling from everyday spills and cleaning products. Our marble polishing in Downtown Dubai uses diamond abrasive pads and pH-neutral stone cleaners to restore that factory-finish shine without causing micro-scratches, following a full assessment of the marble's current condition before we choose between honing, polishing or crystallization. Most Downtown residences benefit from professional polishing every 12-18 months, closer to 12 for high-traffic living areas. A typical 30-40 sqm living room takes 4-6 hours to complete.",
    metaDescription: "Marble polishing in Downtown Dubai — diamond abrasive restoration for Address and Boulevard Point residences. Free on-site assessment.",
  },
  'dubai-jumeirah-marble-polishing': {
    intro: "Jumeirah's beachside villas often have marble entryways and living areas that dull faster than inland properties because of the salt air rolling in off the Gulf, which accelerates the etching that ordinary foot traffic causes anyway. Our marble polishing in Jumeirah uses diamond abrasive technology to grind out scratches and lippage where needed, then hones and polishes the surface back to a high-gloss or matte finish depending on what you prefer. We also offer marble sealing, which fills the stone's pores and slows how quickly coastal humidity re-dulls the surface. Villas across Jumeirah 1, 2 and 3 are all covered, and pricing depends on floor area — contact us via WhatsApp for an assessment.",
    metaDescription: "Marble polishing in Jumeirah — diamond abrasive restoration built for coastal salt-air dulling. Free assessment, WhatsApp quote today.",
  },
  'dubai-palm-jumeirah-marble-polishing': {
    intro: "Palm Jumeirah's frond villas are where marble polishing is our most requested service, since natural stone flooring, travertine and limestone surfaces are standard across The Crescent and the fronds and take constant wear from Dubai's coastal humidity. We use professional diamond pads and premium stone restorers to bring back the natural shine without damaging the surface, working through grinding, honing and polishing stages depending on how far the marble has deteriorated. Crystallization is also available for a harder, more durable high-gloss finish in high-traffic entryways and living rooms. Same-day assessment visits are available, with an accurate quote confirmed after we've seen the floor in person.",
    metaDescription: "Marble polishing on Palm Jumeirah — our signature service for frond villa flooring. Free on-site assessment, same-day visits.",
  },
  'dubai-business-bay-marble-polishing': {
    intro: "Business Bay's Executive Towers and Damac Towers apartments mix marble entryways and bathrooms with the canal-view humidity that speeds up dulling near the water, and our marble polishing here accounts for both factors — diamond abrasive polishing for the shine, plus a penetrating sealer that reduces how much moisture the stone absorbs going forward. We work on floors, countertops, bathroom surfaces and staircases across both residential apartments and office reception areas, scheduling around business hours where needed for corporate clients. A typical assessment determines whether your marble needs light polishing or a full grinding pass. Contact us on WhatsApp for a quote.",
    metaDescription: "Marble polishing in Business Bay — diamond abrasive restoration with sealing for canal-side humidity. Free WhatsApp quote.",
  },
  'sharjah-sharjah-city-marble-polishing': {
    intro: "Central Sharjah's villa communities and newer apartment buildings around Al Majaz and King Faisal Road include a fair amount of marble flooring that's rarely had professional attention since installation, which is usually why it looks dull rather than because it's actually dirty. Our marble polishing in Sharjah City uses diamond abrasive pads to grind out scratches and etch marks before polishing the surface back to a high-gloss finish, at the same competitive, transparent pricing we offer across every Sharjah district. We assess the marble on-site before quoting, since the right treatment depends on how deteriorated the stone actually is. Free estimates via WhatsApp.",
    metaDescription: "Marble polishing in Sharjah City — diamond abrasive restoration for villas and newer apartment buildings. Free estimate.",
  },
  'sharjah-al-nahda-marble-polishing': {
    intro: "Al Nahda's residential villas and apartment buildings include marble entryways and living rooms that dull from the district's heavy foot traffic long before the stone itself is actually damaged. Our marble polishing in Al Nahda uses diamond pads and polishing compounds to restore that shine, choosing between honing for a matte finish or full polishing for high-gloss depending on what suits your interior. We also apply penetrating sealers where requested, which reduce staining from everyday spills and make ongoing maintenance easier between professional visits. Contact us via WhatsApp for an on-site assessment and accurate quote for your Al Nahda property.",
    metaDescription: "Marble polishing in Al Nahda, Sharjah — diamond abrasive restoration for dulled entryways and living rooms. Free assessment.",
  },
  'sharjah-al-majaz-marble-polishing': {
    intro: "Al Majaz's upscale villas along the Buhaira Corniche waterfront often feature natural stone flooring that dulls faster here than further inland, since the humid microclimate near Khalid Lagoon accelerates the etching process on unsealed marble. Our marble polishing service in Al Majaz includes grinding for deeper scratches, honing and polishing for the finish, and a penetrating sealer specifically recommended for waterfront properties to slow future humidity damage. We work on floors, staircases and bathroom surfaces throughout this prestigious community, alongside full villa cleaning where needed. Contact us via WhatsApp for an assessment and quote for your Al Majaz property.",
    metaDescription: "Marble polishing in Al Majaz, Sharjah — restoration with sealing recommended for waterfront humidity. Free WhatsApp quote.",
  },
  'sharjah-al-qasimia-marble-polishing': {
    intro: "Al Qasimia's older apartment buildings and villas near central Sharjah often have marble that's dulled from years of foot traffic without professional attention. We assess the floor first, then apply diamond abrasive grinding, honing and polishing as the condition requires, finishing with a sealer to slow future staining. Pricing depends on floor area and restoration level, confirmed after an on-site look. WhatsApp us for a free assessment and quote.",
    metaDescription: "Marble polishing in Al Qasimia, Sharjah — diamond abrasive restoration, free on-site assessment via WhatsApp.",
  },
  'sharjah-al-khan-marble-polishing': {
    intro: "Al Khan's beachfront towers and villas see marble dull faster than inland properties due to coastal humidity and salt air, which is why we usually recommend sealing as part of the restoration here, not just polishing. Diamond abrasive pads handle grinding and honing for scratched or etched floors, finishing with a high-gloss polish. Final pricing depends on floor area and condition, assessed on-site. Contact us on WhatsApp for a free quote.",
    metaDescription: "Marble polishing in Al Khan, Sharjah — restoration with sealing recommended for coastal humidity. Free WhatsApp quote.",
  },
  'sharjah-al-taawun-marble-polishing': {
    intro: "Al Taawun's mixed residential and commercial properties along Al Taawun Road include marble entryways and floors that benefit from periodic diamond-pad polishing to maintain their shine, especially in higher-traffic commercial units. We assess condition first, then choose grinding, honing or straight polishing accordingly. Pricing depends on floor area and restoration needed. Message us on WhatsApp for a free assessment and quote, with flexible appointment times available.",
    metaDescription: "Marble polishing in Al Taawun, Sharjah — diamond abrasive restoration for homes and commercial units. Free WhatsApp quote.",
  },
  'sharjah-muwaileh-marble-polishing': {
    intro: "Muwaileh's newer villa compounds near University City often have marble that just needs routine polishing to maintain its factory shine, rather than the heavier grinding older properties sometimes need. We assess the floor on-site, then apply the appropriate diamond-pad treatment and finish with sealing if recommended. Pricing depends on floor area and condition. Contact us on WhatsApp for a free estimate and to arrange a visit.",
    metaDescription: "Marble polishing in Muwaileh, Sharjah — routine and restoration polishing for newer villa compounds. Free WhatsApp quote.",
  },
  'sharjah-abu-shagara-marble-polishing': {
    intro: "Abu Shagara's older central buildings often have marble flooring that hasn't been professionally restored in years, with visible dulling from foot traffic near King Faisal Street. Our diamond abrasive process handles grinding, honing and polishing depending on the floor's condition, assessed on-site before we confirm a price. Crystallization is available for a longer-lasting glossy finish in high-traffic areas. WhatsApp us for a free assessment.",
    metaDescription: "Marble polishing in Abu Shagara, Sharjah — assessed restoration for central Sharjah's older buildings. Free WhatsApp quote.",
  },
  'sharjah-al-yarmook-marble-polishing': {
    intro: "Al Yarmook's established villas often have marble that's original to the property and due for its first professional restoration in years. We assess the floor's condition on-site, then apply grinding, honing and polishing as needed, with sealing recommended to protect the finish going forward. Pricing depends on floor area and restoration level. Contact us on WhatsApp for a free quote and assessment visit.",
    metaDescription: "Marble polishing in Al Yarmook, Sharjah — restoration for established villa flooring. Free on-site WhatsApp quote.",
  },
  'sharjah-al-nabba-marble-polishing': {
    intro: "Al Nabba's older residential buildings near Rolla and the Sharjah Corniche often have marble that's never had professional attention since it was installed, and our restoration process — grinding, honing, polishing, with sealing where useful — brings it back to a genuine shine rather than a temporary buff. Floor area and condition determine the final price, confirmed after an on-site assessment. WhatsApp us for a free quote.",
    metaDescription: "Marble polishing in Al Nabba, Sharjah — full restoration for central Sharjah's older marble flooring.",
  },
  'abu-dhabi-abu-dhabi-city-marble-polishing': {
    intro: "Abu Dhabi City's premium apartments near the Corniche and larger inland villas around Muroor and Hamdan Street both feature marble flooring at a scale that ranges from a single entryway to a full living area. Our marble polishing uses diamond abrasive technology across grinding, honing, polishing and sealing stages, chosen based on an on-site assessment of the marble's current condition rather than a one-size-fits-all treatment. Pricing follows the same structure we use in Dubai — based on floor area and condition, not emirate. Same-day assessment visits are available across Al Khalidiyah, Al Bateen and the wider city. Free quotes via WhatsApp.",
    metaDescription: "Marble polishing in Abu Dhabi City — diamond abrasive restoration, same pricing as Dubai. Free assessment, WhatsApp quote today.",
  },
  'abu-dhabi-khalifa-city-marble-polishing': {
    intro: "Khalifa City A and B's large villas frequently have marble flooring in living rooms and entryways — the areas that see the most foot traffic and therefore the most dulling over time. Periodic diamond-pad polishing restores that shine, and we typically bundle it with a full villa deep clean since one team visit can cover both the floors and the rest of the home. We also offer marble sealing, honing for a matte finish, and full grinding for floors with deeper scratches or lippage. WhatsApp us your villa size and current floor condition for an accurate combined quote.",
    metaDescription: "Marble polishing in Khalifa City, Abu Dhabi — periodic restoration bundled with villa deep cleaning. Free combined quote.",
  },
  'abu-dhabi-yas-island-marble-polishing': {
    intro: "Yas Island's luxury villas and serviced apartments across Yas Acres, Ansam and Waters Edge are exactly where our specialist marble polishing gets the most demand, since the island's premium residential standard means dulled or scratched marble stands out more than it would elsewhere. Pricing here is based on floor area and the level of restoration needed — light polishing costs less than full grinding and restoration, and we provide an accurate quote only after assessing the floor in person. Crystallization is available for high-traffic entryways and living rooms that need a longer-lasting glossy finish. Same-day assessment visits can usually be arranged.",
    metaDescription: "Marble polishing on Yas Island — assessed restoration for premium villas and serviced apartments. Free quote, same-day visits.",
  },
  'ajman-ajman-city-marble-polishing': {
    intro: "Ajman City's villas across the Corniche, Al Rashidiya and Al Nuaimiya areas often have marble flooring that's never had a professional restoration since it was laid, and dulling from years of ordinary use is usually the reason it no longer shines. Our marble polishing uses diamond abrasive pads through grinding, honing and polishing stages depending on the marble's condition, priced competitively for Ajman rather than at Dubai rates. We assess the floor on-site before confirming a quote, since the right treatment genuinely depends on how deteriorated the stone is. Free estimates are available via WhatsApp for any Ajman City property.",
    metaDescription: "Marble polishing in Ajman City — diamond abrasive restoration at Ajman-friendly pricing. Free on-site estimate, WhatsApp quote.",
  },
  'ajman-al-nuaimiya-marble-polishing': {
    intro: "Al Nuaimiya's residential apartments and commercial buildings near Ajman Free Zone include marble surfaces in entryways and reception areas that pick up scuffs and etch marks from regular foot traffic. Our marble polishing service restores that shine using diamond abrasive pads and pH-neutral polishing compounds, choosing between a matte honed finish or full high-gloss polish depending on the space. We cover Al Nuaimiya 1, 2 and 3 for both residential and commercial marble restoration, and same-day assessment visits are usually available given how active this district is on our regular Ajman routes. Free quotes via WhatsApp.",
    metaDescription: "Marble polishing in Al Nuaimiya, Ajman — residential and commercial restoration, same-day assessments available. Free quote.",
  },
  'ajman-al-rashidiya-marble-polishing': {
    intro: "Al Rashidiya's mixed villa and apartment community includes marble flooring that's dulled or scratched from daily use rather than genuinely damaged, which is exactly what diamond abrasive polishing is built to fix. We assess the marble's current condition first, then choose grinding for deeper scratches, honing for a matte finish, or full polishing for high-gloss shine — restoring the surface without introducing new micro-scratches. Marble polishing is often booked alongside villa deep cleaning here, since one visit can cover both the floors and the rest of the property. Contact us via WhatsApp for a free assessment and quote.",
    metaDescription: "Marble polishing in Al Rashidiya, Ajman — restoration for villas and apartments, often bundled with deep cleaning. Free quote.",
  },
  'ajman-al-jerf-marble-polishing': {
    intro: "Al Jerf's port-adjacent location means marble floors here pick up more airborne dust and grit than in quieter Ajman districts, and that grit acts abrasively underfoot, accelerating the dulling process on unsealed stone. Our marble polishing in Al Jerf uses diamond abrasive pads to remove the surface damage this causes, finishing with a penetrating sealer that reduces how much future dust and staining can settle into the pores. We cover Al Jerf 1 and Al Jerf 2 for both residential villas and commercial marble surfaces near the port and Free Zone. Contact us via WhatsApp for an on-site assessment.",
    metaDescription: "Marble polishing in Al Jerf, Ajman — restoration with sealing recommended for the port-adjacent dust. Free on-site assessment.",
  },
  'ajman-al-rawda-marble-polishing': {
    intro: "Al Rawda's villa compounds across Al Rawda 1, 2 and 3 often have marble flooring that's dulled from daily foot traffic and everyday household spills rather than any deeper damage. Our marble polishing here uses diamond abrasive pads and polishing compounds to restore the shine, and we typically bundle the service with sofa or carpet cleaning during the same visit for Al Rawda's larger family villas. Honing is available for a matte, non-slip finish preferred in some high-traffic hallways, while full polishing delivers the high-gloss look most Al Rawda homeowners request. WhatsApp us for a free assessment and quote.",
    metaDescription: "Marble polishing in Al Rawda, Ajman — diamond abrasive restoration, often bundled with sofa or carpet cleaning. Free assessment.",
  },
  'ajman-al-hamidiya-marble-polishing': {
    intro: "Al Hamidiya's busy, centrally located streets with heavy ground-floor retail foot traffic mean marble entryways here dull faster than in quieter Ajman districts, and we recommend professional restoration sooner than the usual 12-18 month cycle as a result. Our marble polishing uses diamond abrasive pads and pH-neutral compounds to restore shine without new scratching, with same-day assessment visits frequently available given how central Al Hamidiya sits on our regular Ajman routes. We cover Al Hamidiya 1 and 2 for both residential and ground-floor commercial marble surfaces. Message us on WhatsApp for a free quote.",
    metaDescription: "Marble polishing in Al Hamidiya, Ajman — faster restoration cycle recommended for this high-traffic district. Free quote.",
  },
  'ajman-al-zahya-marble-polishing': {
    intro: "Al Zahya's newer gated-community villas and townhouses often have premium marble or stone flooring installed as a design feature, and our technicians offer polishing and sealing tailored to these finishes rather than one-size-fits-all cleaning methods. We assess the marble's condition on-site first, then apply diamond abrasive polishing and, where appropriate, a penetrating sealer that protects the newer stone from future staining and dulling. Marble polishing here is commonly booked alongside villa deep cleaning, since Al Zahya's premium finishes benefit from care across the whole property rather than just the floors. WhatsApp us for a free assessment.",
    metaDescription: "Marble polishing in Al Zahya, Ajman — tailored restoration and sealing for newer gated-community villas. Free assessment.",
  },
  'ajman-al-mowaihat-marble-polishing': {
    intro: "Al Mowaihat's growing villa and apartment community along the Ajman-Sharjah border includes plenty of newer marble installations that still benefit from a protective sealer, alongside older flooring that's genuinely dulled from years of use. Our marble polishing service covers both scenarios — light polishing and sealing for newer floors, full diamond-pad restoration for older, more scratched surfaces. We cover Al Mowaihat 1, 2 and 3, and marble polishing is often requested alongside move-in cleaning as new residents settle into the area. Free, no-obligation quotes are available via WhatsApp after an on-site assessment of your marble.",
    metaDescription: "Marble polishing in Al Mowaihat, Ajman — restoration and sealing for newer and older marble alike. Free on-site assessment.",
  },
  'ajman-musherief-marble-polishing': {
    intro: "Musherief's family villa compounds often include marble flooring in majlis areas and entryways that see heavy use during gatherings, and our marble polishing here focuses on restoring that specific high-traffic shine. Diamond abrasive pads remove surface scratching and etching, and we finish with polishing compounds to bring back the original gloss. Combining marble polishing with sofa and carpet cleaning during the same visit is common for Musherief's larger, more spread-out villas, since our team is already on-site for the day. Contact us on WhatsApp for a free assessment and quote based on your villa's floor area.",
    metaDescription: "Marble polishing in Musherief, Ajman — restoration for majlis and entryway flooring in family villas. Free assessment.",
  },
  'ras-al-khaimah-rak-city-marble-polishing': {
    intro: "RAK City's growing villa and apartment community includes marble flooring throughout Al Nakheel and the areas near the Corniche that's often never had a professional polish since it was installed. Our marble polishing service uses diamond abrasive technology to grind out scratches and lippage where needed, then hones and polishes the surface back to your preferred finish. Villa deep cleaning is available in the same visit for RAK City properties, covering all rooms alongside the floor restoration. We assess the marble on-site before confirming a quote, since the right treatment depends on its current condition. Free estimates via WhatsApp.",
    metaDescription: "Marble polishing in RAK City — diamond abrasive restoration across Al Nakheel and Corniche areas. Free estimate, WhatsApp quote.",
  },
  'ras-al-khaimah-al-hamra-marble-polishing': {
    intro: "Al Hamra Village's golf and waterfront villas are where our specialist marble polishing services in Ras Al Khaimah are most requested, since natural stone flooring is standard throughout this premium community and needs regular restoration to keep its factory-finish shine. Pricing depends on floor area and the marble's current condition — we assess golf and waterfront villa floors on-site and confirm an accurate quote before starting. We use professional diamond pads and premium stone restorers, working through grinding, honing and polishing stages as needed. Contact us via WhatsApp to arrange an assessment for your Al Hamra property.",
    metaDescription: "Marble polishing in Al Hamra Village, RAK — our most requested service in this golf and waterfront community. Free assessment.",
  },
  'ras-al-khaimah-al-nakheel-marble-polishing': {
    intro: "Al Nakheel's established villas near RAK City often have marble flooring in living rooms and entryways that's dulled gradually enough that residents don't notice until it's compared side-by-side with a freshly polished section. Our marble polishing here uses diamond abrasive pads and polishing compounds to restore that shine, with an on-site assessment determining whether light polishing or a fuller grinding pass is needed. Marble polishing pairs well with the quarterly sofa and carpet cleaning packages many long-term Al Nakheel families already book with us. Contact us via WhatsApp for a free assessment and accurate quote.",
    metaDescription: "Marble polishing in Al Nakheel, RAK — restoration for established villas, pairs with quarterly cleaning packages. Free quote.",
  },
  'fujairah-fujairah-city-marble-polishing': {
    intro: "Fujairah City's villas and apartments near the Corniche and Al Faseel often have marble flooring that's dulled specifically from the Gulf of Oman's coastal humidity, which speeds up etching on unsealed stone compared to inland UAE properties. Our marble polishing in Fujairah City uses diamond abrasive pads through grinding, honing and polishing stages, finishing with a penetrating sealer that's particularly valuable here given the coastal climate. We assess the marble's condition on-site before confirming a quote, and villa deep cleaning is available in the same visit. Contact us via WhatsApp for same-day or next-day service.",
    metaDescription: "Marble polishing in Fujairah City — restoration with sealing recommended for coastal humidity. Free assessment, WhatsApp quote.",
  },
  'fujairah-kalba-marble-polishing': {
    intro: "Kalba's coastal residential villas near Khor Kalba mangrove reserve include marble flooring that's affected by the same humid, salt-tinged air that shapes the rest of this peaceful community's maintenance needs. Our marble polishing uses diamond abrasive pads and pH-neutral polishing compounds, finishing with a penetrating sealer that helps protect the stone from ongoing coastal moisture. We assess the floor on-site before confirming a quote, since the right treatment depends on how far the marble has dulled. Contact us via WhatsApp for a free assessment and to arrange same-day or next-day service in Kalba.",
    metaDescription: "Marble polishing in Kalba, Fujairah — restoration with sealing suited to this coastal community. Free assessment, WhatsApp quote.",
  },
  'umm-al-quwain-uaq-city-marble-polishing': {
    intro: "UAQ City's family villas and Free Trade Zone properties include marble flooring that benefits from the same diamond abrasive restoration we offer across the UAE, at pricing suited to Umm Al Quwain's local market. We assess the marble's current condition on-site — grinding for deeper scratches, honing for a matte finish, or full polishing for high-gloss shine — before confirming a quote. Marble polishing is available throughout UAQ City, and villa deep cleaning can be bundled into the same visit for a better combined rate. WhatsApp us for a free assessment of your UAQ City property.",
    metaDescription: "Marble polishing in UAQ City — diamond abrasive restoration at local-friendly pricing. Free WhatsApp assessment today.",
  },
  'umm-al-quwain-falaj-al-mualla-marble-polishing': {
    intro: "Falaj Al Mualla's residential villas, near the Umm Al Quwain Equestrian Club, include marble flooring that's dulled from everyday use rather than any deeper damage in most cases we see here. Our marble polishing restores shine using diamond abrasive pads and polishing compounds, with an on-site assessment determining whether your floor needs light polishing or a fuller grinding pass. Marble polishing is available for Falaj Al Mualla's residential villas, and villa deep cleaning can be booked in the same visit. Contact us via WhatsApp for a free quote and to arrange same-day or next-day service.",
    metaDescription: "Marble polishing in Falaj Al Mualla, UAQ — restoration for residential villas, bundled deep cleaning available. Free quote.",
  },

  /* ===========================================
     FLOOR CLEANING
  =========================================== */

  'dubai-mirdif-floor-cleaning': {
    intro: "Mirdif sits on Dubai's eastern edge close to open desert, and that means more fine, abrasive sand reaches homes here than in areas further into the city — settling into tiled floors and grout lines rather than staying airborne. Our floor cleaning in Mirdif uses rotary scrubbing machines with full extraction, matched to your specific floor type, plus a dedicated grout pass with narrow brush heads that's what actually restores the original colour of tile lines. Villa floors across Mirdif City Centre, Uptown Mirdif and Mushrif Park are usually large, so we quote after confirming floor area and type rather than publishing a flat rate. Machine scrubbing every six to twelve months keeps grout from staining permanently.",
    metaDescription: "Floor cleaning in Mirdif — rotary scrubbing and grout deep cleaning built for eastern Dubai's desert sand. Free WhatsApp quote.",
  },
  'dubai-umm-suqeim-floor-cleaning': {
    intro: "Umm Suqeim's beachside villas across Umm Suqeim 1, 2 and 3 face a specific floor problem that inland areas don't: coastal humidity means dust arrives damp and sets into grout lines instead of sweeping away, while salt in the air speeds up dulling on natural stone. Our floor cleaning here uses rotary scrubbing with a dedicated grout pass on tiled sections, restoring the tile lines that mopping alone can't reach. If your floors are marble or another natural stone that's gone dull rather than dirty, that needs polishing rather than cleaning, and we'll tell you which one applies during the assessment. Villa floor and sofa cleaning can be combined in one visit for a better combined rate.",
    metaDescription: "Floor cleaning in Umm Suqeim — grout deep cleaning for coastal humidity, marble polishing assessed separately. Free quote.",
  },
  'dubai-al-barsha-floor-cleaning': {
    intro: "Al Barsha's established villa compounds and apartment complexes across Al Barsha 1, 2 and 3 accumulate the same abrasive desert dust that affects floors throughout inland Dubai, and regular mopping alone doesn't remove what's worked into grout lines and floor texture over time. Our floor cleaning uses rotary scrubbing machines matched to your specific flooring — ceramic and porcelain get more aggressive scrubbing, while natural stone is treated as a separate marble restoration job rather than standard cleaning. A dedicated grout pass restores the original colour between tiles, which is usually the most visible difference after the visit. Quotes are confirmed after we understand your floor area and type.",
    metaDescription: "Floor cleaning in Al Barsha, Dubai — rotary scrubbing and grout restoration for villas and apartments. Free WhatsApp quote.",
  },
  'dubai-bur-dubai-floor-cleaning': {
    intro: "Bur Dubai's mix of traditional courtyard buildings and modern apartment towers across Karama, Mankhool and Al Fahidi means our floor cleaning jobs here vary widely in scale, from a single apartment's tiled floor to a full villa's worth of flooring. We use rotary scrubbing machines and pressure extraction rather than mop-and-bucket cleaning, with a dedicated grout pass that lifts the soil absorbed into porous cement lines rather than just moving it around. Post-construction floor cleaning is also common in Bur Dubai given how much renovation work happens in this older district. Contact us via WhatsApp for a quote based on your floor size and type.",
    metaDescription: "Floor cleaning in Bur Dubai — rotary scrubbing and grout restoration for apartments and villas alike. Free WhatsApp quote.",
  },

}

export const getComboIntro = (emirateSlug: string, citySlug: string, serviceSlug: string): ComboIntro | undefined =>
  comboIntros[`${emirateSlug}-${citySlug}-${serviceSlug}`]

export default comboIntros
