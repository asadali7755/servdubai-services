/**
 * Hyper-local content per city.
 * Key format: `${emirateSlug}-${citySlug}`
 * Provides unique, area-specific descriptions to avoid duplicate content
 * and signal genuine local relevance to Google's Helpful Content System.
 */

export interface CityLocalContent {
  /** 2-3 sentences unique to this area - mentions landmarks and property types */
  localDescription: string
  /** Specific nearby buildings / sub-neighbourhoods Google associates with this area */
  landmarks: string[]
  /** What kind of properties dominate this area */
  propertyType: string
  /** One local insight / trust signal specific to this area */
  areaNote: string
  /** Area-specific FAQ (2-3 questions) */
  localFAQs: { question: string; answer: string }[]
}

const cityLocalContent: Record<string, CityLocalContent> = {

  /* ===========================================
     DUBAI
  =========================================== */

  'dubai-marina': {
    localDescription: "We provide premium sofa shampooing, carpet deep cleaning, and villa services for high-rise apartments in Dubai Marina. Our certified technicians cover all major residential towers along Marina Walk - including Marina Diamonds, Torch Tower, Princess Tower, and Ocean Heights - and extend full coverage to JBR (Jumeirah Beach Residence).",
    landmarks: ['Marina Diamonds', 'Torch Tower', 'Princess Tower', 'Ocean Heights', 'Marina Walk', 'JBR'],
    propertyType: 'high-rise waterfront apartments and luxury towers',
    areaNote: "Dubai Marina's dense high-rise environment means shared facilities and frequent resident turnover - making regular professional cleaning essential for maintaining hygiene standards and rental property value.",
    localFAQs: [
      {
        question: 'Do you provide sofa cleaning services in Dubai Marina high-rise towers?',
        answer: "Yes. Our mobile teams bring all equipment to your apartment in any Dubai Marina tower - from Marina Diamonds to Torch Tower. No need to move furniture out. Same-day booking available.",
      },
      {
        question: 'How long does a sofa clean take in a Marina apartment?',
        answer: "A standard 3-seater sofa takes approximately 1-2 hours. Your sofa is dry and ready to use within 3-4 hours, making it convenient for Marina residents with busy schedules.",
      },
      {
        question: 'Do you offer move-out cleaning for Dubai Marina apartments?',
        answer: "Yes. We provide full move-out deep cleaning for apartments in all Dubai Marina towers - covering sofa, carpet, kitchen, bathroom, and all surfaces to help you reclaim your security deposit.",
      },
      {
        question: 'Do I need to be home during the appointment in a Marina tower?',
        answer: "Not necessarily - many Marina Diamonds, Torch Tower, and Ocean Heights residents leave a key with building security or a neighbour. We just need clear access instructions and a way to reach you by phone during the visit.",
      },
    ],
  },

  'dubai-jlt': {
    localDescription: "Professional steam cleaning services for residential and commercial clusters in JLT (Jumeirah Lakes Towers). We cover all clusters from A to Z - serving tenants in Lake View Towers, Goldcrest Views, and Almas Tower with same-day availability. Our teams are familiar with all JLT building access procedures for fast, hassle-free service.",
    landmarks: ['Almas Tower', 'Goldcrest Views', 'Lake View Towers', 'JLT Cluster A to Z', 'DMCC Free Zone'],
    propertyType: 'clustered residential and commercial towers',
    areaNote: "JLT's lakeside residential clusters attract a large mix of young professionals and families. The open-plan apartments and lake-view residences require specialist upholstery care due to the lakeside humidity that can accelerate fabric deterioration.",
    localFAQs: [
      {
        question: 'Do you clean sofas and carpets in JLT Cluster apartments?',
        answer: "Yes. We cover all JLT clusters - A through Z. Our teams regularly service Goldcrest Views, Lake View Towers, and Almas Tower residential floors. Contact us and mention your cluster for a free quote.",
      },
      {
        question: 'Can you clean both residential and office spaces in JLT?',
        answer: "Absolutely. JLT's mixed-use towers mean we serve both residential tenants and DMCC-registered businesses. Office sanitization, carpet cleaning, and sofa shampooing are all available for commercial units in JLT.",
      },
      {
        question: 'Is lakeside humidity a problem for sofas in JLT?',
        answer: "Yes - JLT's lake proximity creates slightly higher humidity, which can trap moisture in upholstery and lead to musty odors over time. We recommend professional sofa cleaning every 4-6 months for JLT residents to prevent this.",
      },
      {
        question: 'What payment methods do you accept for JLT bookings?',
        answer: "We accept cash and bank transfer for both residential and DMCC-registered commercial bookings in JLT. Payment is due on completion of the job, and we confirm the final price with you before we start.",
      },
    ],
  },

  'dubai-downtown': {
    localDescription: "Expert cleaning services for luxury apartments and penthouses in Downtown Dubai, including The Address Residences, Burj Khalifa district, Opera District, and Boulevard Point. We specialize in care for premium interiors in Emaar's flagship community - offering marble polishing, sofa deep cleaning, and full villa deep cleans using eco-friendly products safe for high-end finishes.",
    landmarks: ['Burj Khalifa', 'The Address Residences', 'Boulevard Point', 'Opera District', 'Vida Residences'],
    propertyType: 'luxury apartments, penthouses and branded residences',
    areaNote: "Downtown Dubai's premium residences feature high-end marble flooring, designer furniture, and luxury fabrics that require specialist cleaning techniques - not standard domestic methods - to maintain their value and appearance.",
    localFAQs: [
      {
        question: 'Do you provide marble polishing services in Downtown Dubai apartments?',
        answer: "Yes. Marble polishing is one of our most requested services in Downtown Dubai. We use diamond polishing pads and pH-neutral stone cleaners to restore shine to marble floors in Emaar residences, The Address, and Burj Khalifa apartments without causing micro-scratches.",
      },
      {
        question: 'Are your cleaning products safe for luxury designer furniture in Downtown?',
        answer: "Yes. All products are pH-balanced, non-toxic, and specifically selected for premium upholstery - including velvet, Alcantara, and designer fabric. We carry out fabric type assessment before any cleaning to ensure the correct method is used.",
      },
      {
        question: 'How quickly can you arrive for a clean in Downtown Dubai?',
        answer: "Same-day service is available in Downtown Dubai for most services. WhatsApp us in the morning and we can typically arrange an afternoon visit - covering the Burj Khalifa district, Boulevard Point, and all Opera District towers.",
      },
      {
        question: 'How often should marble floors in Downtown Dubai apartments be polished?',
        answer: "Most Downtown residences benefit from professional marble polishing every 12-18 months. High-traffic living areas in The Address and Boulevard Point towers may need it closer to the 12-month mark to keep the factory-finish shine.",
      },
    ],
  },

  'dubai-business-bay': {
    localDescription: "High-standard cleaning for executive apartments and office suites in Business Bay, covering Executive Towers, Damac Towers, and Canal Residence. Our teams are experienced with the modern open-plan layouts and canal-view apartments that define Dubai's central business district - delivering fast, professional results suited to busy corporate schedules.",
    landmarks: ['Executive Towers', 'Damac Towers', 'Canal Residence', 'Business Bay Canal', 'Bay Square', 'Churchill Towers'],
    propertyType: 'executive apartments, serviced residences and corporate office suites',
    areaNote: "Business Bay's mix of residential and commercial towers creates unique cleaning needs - from full apartment deep cleans for residential tenants to office carpet and sofa sanitization for businesses operating in the same complex.",
    localFAQs: [
      {
        question: 'Do you offer office cleaning services in Business Bay?',
        answer: "Yes. We provide professional office cleaning for corporate spaces in Business Bay - including carpet extraction, sofa sanitization for reception areas, and full office deep cleaning. Flexible scheduling including evenings and weekends to avoid disrupting work hours.",
      },
      {
        question: 'Can you do sofa cleaning for a canal-view apartment in Business Bay?',
        answer: "Absolutely. We regularly service apartments in Executive Towers, Damac and Churchill Towers. Canal-view apartments are a specialty - the humidity near the canal can affect upholstery, and we use quick-dry extraction to prevent moisture issues.",
      },
      {
        question: 'How long does a Business Bay apartment deep clean take?',
        answer: "A standard 1-bedroom apartment in Business Bay takes approximately 3-4 hours for a full deep clean. A 2-bedroom typically takes 5-6 hours with our team of 2 trained technicians.",
      },
      {
        question: 'What payment methods do you accept in Business Bay?',
        answer: "We accept cash and bank transfer for both residential apartments and corporate bookings in Business Bay. For office contracts in Executive Towers or Bay Square, we can also arrange invoicing for repeat cleaning schedules.",
      },
    ],
  },

  'dubai-jumeirah': {
    localDescription: "Comprehensive villa and apartment cleaning across Jumeirah's residential districts - Jumeirah 1, 2, and 3. Our teams are experienced with large beachside villas, townhouses, and private residences along Jumeirah Beach Road, bringing professional deep cleaning to one of Dubai's most established family communities.",
    landmarks: ['Jumeirah 1', 'Jumeirah 2', 'Jumeirah 3', 'Jumeirah Beach Road', 'Kite Beach vicinity', 'La Mer'],
    propertyType: 'beachside villas, townhouses and private residences',
    areaNote: "Jumeirah's proximity to the sea means fabrics absorb salt air and coastal humidity - accelerating dust accumulation in upholstery and carpets. We recommend professional sofa and carpet cleaning every 4-5 months for Jumeirah villa residents.",
    localFAQs: [
      {
        question: 'Do you clean large villas in Jumeirah 1, 2 and 3?',
        answer: "Yes. Villa deep cleaning is our most popular service in Jumeirah. We send teams of 3-6 trained technicians for large villas, covering all rooms, AC vents, kitchen, bathrooms, and all soft furnishings in a single comprehensive visit.",
      },
      {
        question: 'Does sea air affect sofas in Jumeirah villas?',
        answer: "Yes. Salt air from the Arabian Gulf carries moisture that penetrates sofa fabrics and can cause musty odors and mold growth over time. Professional sofa shampooing and deep extraction every 4-5 months is especially recommended for Jumeirah beachside villas.",
      },
      {
        question: 'Can you clean the villa and the sofa in the same visit?',
        answer: "Absolutely. We offer combined villa deep cleaning and sofa/carpet packages for Jumeirah villas - one team handles everything in a single visit, saving you time and cost. Contact us via WhatsApp for a bundled quote.",
      },
      {
        question: 'How much does villa deep cleaning cost in Jumeirah?',
        answer: "Villa deep cleaning in Jumeirah starts from around AED 750 for a 2-bedroom property and scales up for larger 4-6 bedroom beachside villas along Jumeirah Beach Road. Message us on WhatsApp with your villa size for an exact quote.",
      },
    ],
  },

  'dubai-deira': {
    localDescription: "Affordable professional cleaning for apartments and commercial spaces in Deira, including Al Rigga, Naif, Port Saeed, and Al Muraqqabat. Our teams are experienced with the mixed residential-commercial building types common in this historic district - providing fast, reliable service for one of Dubai's busiest areas.",
    landmarks: ['Al Rigga', 'Naif', 'Port Saeed', 'Al Muraqqabat', 'Gold Souk area', 'Deira Waterfront'],
    propertyType: 'mixed residential apartments and commercial spaces',
    areaNote: "Deira's older buildings and high-density environment mean frequent tenant changes - creating strong demand for fast move-in and move-out cleaning. Our teams can typically arrive same-day in Deira for urgent booking requests.",
    localFAQs: [
      {
        question: 'Do you offer move-in move-out cleaning in Deira?',
        answer: "Yes. Move-in and move-out cleaning is highly popular in Deira due to the high tenant turnover. We provide full apartment cleaning packages covering kitchen, bathrooms, all rooms, and upholstery at competitive Deira-friendly pricing.",
      },
      {
        question: 'Can you clean older apartments in Deira with older AC systems?',
        answer: "Yes. Older Deira buildings with window AC units and older ductwork accumulate more dust than newer buildings. We include AC vent cleaning and grille sanitization in our Deira apartment deep clean packages.",
      },
      {
        question: 'What areas of Deira do you cover?',
        answer: "We cover all Deira areas - Al Rigga, Naif, Port Saeed, Al Muraqqabat, Hor Al Anz, Muhaisnah, Murar, and all surrounding streets. Same-day service is available for most Deira locations.",
      },
      {
        question: 'Do I need to be present during the cleaning in Deira?',
        answer: "No, you don't have to be home for the full visit - many Deira tenants hand over keys or coordinate with the building watchman. We just ask for someone reachable by phone in case our team has a question about access.",
      },
    ],
  },

  'dubai-palm-jumeirah': {
    localDescription: "Elite villa and apartment cleaning on Palm Jumeirah, serving residents on the Palm Fronds, The Crescent, Shoreline Apartments, and Tiara Residences. We provide specialist-grade marble polishing, luxury sofa cleaning, and full villa deep cleaning for Dubai's most prestigious island community - with complete discretion and premium service standards.",
    landmarks: ['Palm Fronds', 'The Crescent', 'Shoreline Apartments', 'Atlantis The Palm', 'Tiara Residences', 'Five Palm Jumeirah'],
    propertyType: 'luxury beachfront villas, frond villas and signature apartments',
    areaNote: "Palm Jumeirah's luxury villas feature natural stone flooring, designer upholstery, and bespoke interiors. Our specialist marble polishing and fabric protection treatments are our most requested services here - preserving premium surfaces against Dubai's coastal humidity.",
    localFAQs: [
      {
        question: 'Do you clean luxury villas on Palm Jumeirah fronds?',
        answer: "Yes. We specialize in luxury villa cleaning on Palm Jumeirah fronds and The Crescent. Our teams handle marble floors, luxury upholstery, designer kitchens, and outdoor areas with the care and discretion that Palm residences require.",
      },
      {
        question: 'Do you offer marble polishing for Palm Jumeirah villa floors?',
        answer: "Yes. Marble polishing is our signature service on Palm Jumeirah. We use professional diamond pads and premium stone restorers to bring back the natural shine of marble, travertine, and limestone floors without damaging the surface.",
      },
      {
        question: 'How far in advance do I need to book for Palm Jumeirah?',
        answer: "Same-day service is available for most cleaning requests on Palm Jumeirah. For full villa deep cleaning, we recommend booking at least 24 hours in advance to ensure the right team size is allocated for your property.",
      },
      {
        question: 'What payment methods do you accept on Palm Jumeirah?',
        answer: "We accept cash and bank transfer for Palm Jumeirah bookings. The final price is confirmed with you before work begins, based on villa or apartment size and the specific marble, upholstery, or deep cleaning services required.",
      },
    ],
  },

  'dubai-al-barsha': {
    localDescription: "Trusted cleaning services for villas and apartments across Al Barsha 1, 2, and 3 - one of Dubai's most established family communities near Mall of the Emirates. We cover all villa compounds, apartment complexes, and commercial spaces in Al Barsha, providing thorough deep cleaning and regular maintenance packages for long-term residents.",
    landmarks: ['Al Barsha 1', 'Al Barsha 2', 'Al Barsha 3', 'Mall of the Emirates vicinity', 'Al Barsha Pond Park'],
    propertyType: 'family villas, apartment complexes and commercial spaces',
    areaNote: "Al Barsha's established family community creates consistent demand for regular cleaning packages. Many long-term residents book quarterly deep cleans - especially for sofas and carpets, which accumulate significant dust in this inland residential area.",
    localFAQs: [
      {
        question: 'Do you cover all Al Barsha areas - 1, 2, and 3?',
        answer: "Yes. We provide full coverage across Al Barsha 1, Al Barsha 2, and Al Barsha 3, including all villa compounds and apartment buildings in each district. Same-day availability in most Al Barsha locations.",
      },
      {
        question: 'Do you offer regular maintenance cleaning packages in Al Barsha?',
        answer: "Yes. Our quarterly and bi-annual deep cleaning packages are very popular in Al Barsha with long-term residents. Regular packages include sofa cleaning, carpet deep cleaning, and villa deep cleaning at a discounted bundle rate.",
      },
      {
        question: 'How much does villa deep cleaning cost in Al Barsha?',
        answer: "Villa deep cleaning in Al Barsha starts from AED 750 for a 2-bedroom villa and varies based on property size and scope. We offer transparent, fixed pricing - contact us via WhatsApp for a free quote specific to your Al Barsha property.",
      },
      {
        question: 'How often should sofas be cleaned in Al Barsha homes?',
        answer: "For family villas and apartments in Al Barsha 1, 2, and 3, we recommend professional sofa cleaning every 4-6 months. Households with young children or pets often prefer the shorter end of that range to keep upholstery fresh.",
      },
    ],
  },

  'dubai-bur-dubai': {
    localDescription: "Professional cleaning for apartments and commercial spaces in Bur Dubai, including Al Fahidi, Mankhool, Meena Bazaar, and Karama areas. Our teams are experienced with the diverse building types in this historic district - from traditional courtyard homes to modern apartment towers - delivering reliable cleaning for both residential and commercial clients.",
    landmarks: ['Al Fahidi Historic District', 'Mankhool', 'Meena Bazaar', 'Karama', 'Khalid Bin Walid Road'],
    propertyType: 'mixed apartments, commercial spaces and traditional buildings',
    areaNote: "Bur Dubai's central location and diverse housing stock create high demand for affordable professional cleaning. Many buildings in this area have older AC and ventilation systems - making regular deep cleaning and vent sanitization particularly important.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services in Karama and Mankhool?',
        answer: "Yes. We regularly service apartments and commercial spaces in Karama, Mankhool, Meena Bazaar, and Al Fahidi. These are among our most active service areas in Bur Dubai - same-day service is usually available.",
      },
      {
        question: 'Can you clean older apartments with traditional layouts in Bur Dubai?',
        answer: "Absolutely. Our technicians are experienced with older Bur Dubai apartment layouts including single-unit and partition-style residences. We adapt our cleaning approach to the specific layout and building type.",
      },
      {
        question: 'Do you offer sofa cleaning in Bur Dubai at affordable prices?',
        answer: "Yes. Sofa cleaning in Bur Dubai starts from AED 150 for a standard 3-seater. We offer some of the most competitive pricing in the area, with transparent quotes - no hidden charges. Book via WhatsApp for a free estimate.",
      },
      {
        question: 'Do you offer carpet cleaning in Bur Dubai?',
        answer: "Yes. Carpet cleaning in Bur Dubai starts from around AED 75 for small rugs, with larger carpets priced per square meter. We cover Karama, Mankhool, Meena Bazaar, and Al Fahidi with free WhatsApp quotes.",
      },
    ],
  },

  'dubai-silicon-oasis': {
    localDescription: "Specialized cleaning for residential and commercial properties in Dubai Silicon Oasis - including The Icon Tower, Silicon Gate, and Semmer Villas. We serve this integrated technology park community with professional sofa cleaning, carpet cleaning, and villa deep cleaning tailored for the modern families and professionals who call DSO home.",
    landmarks: ['The Icon Tower', 'Silicon Gate', 'Semmer Villas', 'DSO Park', 'DSOA Free Zone'],
    propertyType: 'apartments, townhouses and technology park offices',
    areaNote: "Dubai Silicon Oasis attracts tech professionals and young families seeking modern, affordable living. Move-in/move-out cleaning and periodic deep cleans are our most popular services in this rapidly growing community.",
    localFAQs: [
      {
        question: 'Do you clean apartments and villas in Dubai Silicon Oasis?',
        answer: "Yes. We cover all residential buildings in DSO - from The Icon Tower apartments to Semmer and Cedre Villas. Both furnished and unfurnished properties are covered, including full move-in/move-out cleaning packages.",
      },
      {
        question: 'Do you offer office cleaning for DSO tech companies?',
        answer: "Yes. Office and commercial space cleaning in Dubai Silicon Oasis is available for businesses registered in the DSOA free zone. We provide carpet cleaning, sofa cleaning for reception areas, and full office sanitization.",
      },
      {
        question: 'How do I book a cleaning in Silicon Oasis?',
        answer: "The easiest way is via WhatsApp - message us with your address and the service required and we will send a free quote within minutes. Same-day service is often available in DSO.",
      },
      {
        question: 'How often should carpets be cleaned in DSO apartments?',
        answer: "We recommend professional carpet cleaning every 6-12 months for Silicon Oasis apartments, or every 6 months in living areas with heavier foot traffic. Regular cleaning also helps maintain carpets in rented Icon Tower and Silicon Gate units for move-out inspections.",
      },
    ],
  },

  'dubai-mirdif': {
    localDescription:
      "Floor, sofa and full home cleaning across Mirdif's low-rise villa communities and family compounds - from the established streets around Mirdif City Centre to Uptown Mirdif and Mushrif Park. Mirdif is a settled, largely villa-based neighbourhood, so most of our work here is whole-home rather than single-room.",
    landmarks: ['Mirdif City Centre', 'Uptown Mirdif', 'Mushrif Park', 'Ghoroob', 'Shorooq', 'Al Mizhar'],
    propertyType: 'family villas, townhouses and low-rise compound homes',
    areaNote:
      "Mirdif sits on Dubai's eastern edge, close to open desert, and homes here take on more airborne sand than areas further into the city. It shows up first in tiled floors and grout lines rather than in the air, which is why floor deep cleaning is the service most requested by Mirdif residents.",
    localFAQs: [
      {
        question: 'Do you provide floor cleaning in Mirdif?',
        answer:
          "Yes - Mirdif is one of the areas we cover most regularly for floor cleaning. We use rotary scrubbing machines with extraction and run a separate grout pass on tiled floors, which is what restores the original colour of the tile lines. Villa floors in Mirdif are usually large, so we quote after confirming floor area and type.",
      },
      {
        question: 'Why do Mirdif floors get dusty so quickly?',
        answer:
          "Mirdif is on the eastern side of Dubai near open desert, so more fine sand reaches homes here than in central areas. That sand is abrasive and settles into grout and floor texture, where mopping cannot reach it. Machine scrubbing every six to twelve months keeps it from building up permanently.",
      },
      {
        question: 'Can you clean a whole Mirdif villa in one visit?',
        answer:
          "Yes. Most Mirdif properties are villas or townhouses, and we send a team sized to the home so floors, sofas, carpets and the full deep clean are handled in a single visit rather than spread across days. Contact us on WhatsApp with the villa size for a combined quote.",
      },
      {
        question: 'How much does floor cleaning cost in Mirdif?',
        answer:
          "Floor cleaning pricing in Mirdif depends on total floor area and whether a full grout pass is needed on tiled sections. Most Mirdif villas have large floor areas, so we confirm an exact price after you share the approximate square footage on WhatsApp.",
      },
    ],
  },
  'dubai-umm-suqeim': {
    localDescription:
      "Villa and floor cleaning across Umm Suqeim 1, 2 and 3 - the beachside residential belt running between Jumeirah and Al Sufouh, behind Umm Suqeim Beach and Burj Al Arab. The area is almost entirely established villas, many with extensive marble and tiled flooring.",
    landmarks: ['Umm Suqeim 1', 'Umm Suqeim 2', 'Umm Suqeim 3', 'Umm Suqeim Beach', 'Burj Al Arab vicinity', 'Jumeirah Beach Road'],
    propertyType: 'established beachside villas and large family homes',
    areaNote:
      "Umm Suqeim is close enough to the coast that salt-laden humidity reaches the homes here. On floors that means damp-set dust that dries into grout lines rather than brushing away, and on natural stone it accelerates dulling - so floors in Umm Suqeim typically need machine cleaning rather than mopping to look right.",
    localFAQs: [
      {
        question: 'Do you offer floor cleaning services in Umm Suqeim?',
        answer:
          "Yes. Umm Suqeim villas usually have large tiled or stone floor areas, and we cover the area regularly. Tiled floors get rotary scrubbing plus a dedicated grout pass. If your floors are marble or another natural stone and have gone dull, that needs polishing rather than cleaning and we will tell you which one applies.",
      },
      {
        question: 'Does being near the beach affect floors in Umm Suqeim?',
        answer:
          "It does. Coastal humidity means dust arrives damp and sets into grout instead of sweeping away, and salt in the air speeds up dulling on natural stone. Both are surface-level problems that respond well to proper machine cleaning, and to stone polishing where the floor is marble or travertine.",
      },
      {
        question: 'Can you clean floors and sofas in the same Umm Suqeim visit?',
        answer:
          "Yes, and for villas it is usually the sensible way to book. One team covers floor scrubbing, sofa and carpet cleaning in a single visit, which costs less than separate appointments. Message us on WhatsApp with your villa size for a combined quote.",
      },
      {
        question: 'Do you offer marble polishing in Umm Suqeim?',
        answer:
          "Yes. Many Umm Suqeim villas have marble or natural stone flooring that dulls from coastal humidity and salt air. We assess the stone during our floor cleaning visit and recommend marble polishing separately when that's the correct treatment rather than standard cleaning.",
      },
    ],
  },
  'dubai-international-city': {
    localDescription: "Cost-effective professional cleaning for apartments across International City's themed clusters, including China Cluster, England Cluster, Spain Cluster, and Persia Cluster. Madinat Alhaya offers transparent, affordable cleaning packages tailored specifically for budget-conscious residents in this large residential community near Dragon Mart.",
    landmarks: ['China Cluster', 'England Cluster', 'Spain Cluster', 'Persia Cluster', 'France Cluster', 'Dragon Mart vicinity'],
    propertyType: 'budget apartments in themed residential clusters',
    areaNote: "International City's high-density, high-turnover environment creates strong demand for fast, affordable move-in and move-out cleaning. Our competitive pricing and same-day availability make us a popular choice for residents in all clusters.",
    localFAQs: [
      {
        question: 'Which International City clusters do you cover?',
        answer: "We cover all International City clusters - China, England, Spain, France, Italy, Persia, Russia, Morocco, and all others. Our teams are familiar with the building layouts throughout the development.",
      },
      {
        question: 'Do you offer affordable sofa cleaning in International City?',
        answer: "Yes. Sofa cleaning in International City starts from AED 120 for a standard 3-seater - among the most affordable rates in Dubai. We offer transparent pricing with no hidden charges and free quotes via WhatsApp.",
      },
      {
        question: 'Can you do a full apartment deep clean for move-out in International City?',
        answer: "Yes. Move-out cleaning is our most popular service in International City. We cover kitchen, bathroom, all rooms, and upholstery - helping tenants maximise their security deposit return. Same-day service is usually available.",
      },
      {
        question: 'Do you offer carpet cleaning in International City?',
        answer: "Yes. Carpet cleaning in International City starts from around AED 75 for small rugs. We cover China Cluster, England Cluster, Spain Cluster, and every other cluster in the development with the same transparent pricing.",
      },
    ],
  },

  /* ===========================================
     SHARJAH
  =========================================== */

  'sharjah-sharjah-city': {
    localDescription: "Professional cleaning for apartments and villas in central Sharjah, covering Al Majaz, Al Nahda, Al Qasimia, and King Faisal Road areas. Our teams serve both residential and commercial clients throughout Sharjah City with the same professional standards as Dubai - at highly competitive Sharjah pricing.",
    landmarks: ['Al Majaz Waterfront', 'King Faisal Road', 'Sharjah Corniche', 'Al Qasimia', 'Sharjah City Centre vicinity'],
    propertyType: 'mixed apartments, villas and commercial spaces',
    areaNote: "Sharjah City's diverse residential mix - from older apartments near the Corniche to newer villa communities - means our teams are experienced with all building types and cleaning requirements across the emirate.",
    localFAQs: [
      {
        question: 'Do you provide sofa cleaning services in Sharjah City?',
        answer: "Yes. Sofa cleaning in Sharjah City starts from AED 130 for a standard 3-seater. We cover all areas of central Sharjah - Al Majaz, Al Nahda, Al Qasimia, and all surrounding districts. Same-day service available.",
      },
      {
        question: 'Are your Sharjah cleaning prices different from Dubai?',
        answer: "Our Sharjah rates are competitive and transparent. Pricing is based on service type and property size - not location. Free quotes available via WhatsApp. No extra charges for Sharjah locations.",
      },
      {
        question: 'Do you cover villa cleaning in Sharjah City suburbs?',
        answer: "Yes. We cover villa deep cleaning throughout Sharjah City and its suburbs. Our teams are experienced with Sharjah villa layouts and the specific cleaning challenges of the emirate's climate.",
      },
      {
        question: 'How long does a sofa cleaning appointment take in Sharjah City?',
        answer: "A standard 3-seater sofa takes around 1-2 hours to clean, with the fabric dry and usable again within 3-4 hours. Larger sectional sofas or heavily soiled upholstery in Al Majaz or Al Qasimia apartments may take a little longer.",
      },
    ],
  },

  'sharjah-al-nahda': {
    localDescription: "Trusted cleaning services for the residential apartments and family villas in Al Nahda, Sharjah - one of the emirate's most densely populated communities. Our teams provide fast, reliable sofa cleaning, carpet shampooing, and full apartment deep cleaning for Al Nahda residents.",
    landmarks: ['Al Nahda 1', 'Al Nahda 2', 'Al Nahda Park', 'Sahara Centre vicinity'],
    propertyType: 'residential apartments and family villas',
    areaNote: "Al Nahda's high-density residential character means strong demand for regular apartment cleaning and sofa shampooing. Many Al Nahda residents book bi-annual deep cleaning packages for consistent results.",
    localFAQs: [
      {
        question: 'Do you clean apartments in Al Nahda Sharjah?',
        answer: "Yes. Al Nahda is one of our most active service areas in Sharjah. We cover Al Nahda 1, Al Nahda 2, and all surrounding streets. Same-day service is usually available for sofa and carpet cleaning requests.",
      },
      {
        question: 'How much does apartment cleaning cost in Al Nahda?',
        answer: "Full apartment deep cleaning in Al Nahda starts from AED 250 for a studio and varies by property size. Sofa cleaning starts from AED 130. Contact us via WhatsApp for a free, no-obligation quote.",
      },
      {
        question: 'Do I need to be home for the appointment in Al Nahda?',
        answer: "You don't have to stay for the entire visit - many Al Nahda residents let our team in and step out, or coordinate access through the building. We just need someone reachable by phone during the job.",
      },
      {
        question: 'How often should sofas be cleaned in Al Nahda apartments?',
        answer: "We recommend professional sofa cleaning every 4-6 months for Al Nahda's dense residential apartments, which is also why many residents here book our bi-annual deep cleaning packages for consistent results.",
      },
    ],
  },

  'sharjah-al-qasimia': {
    localDescription: "Professional cleaning for apartments and commercial spaces in Al Qasimia, Sharjah - serving the mixed residential and commercial buildings throughout this busy central district with reliable, same-day cleaning services.",
    landmarks: ['Al Qasimia', 'University City vicinity', 'Industrial Area access'],
    propertyType: 'mixed residential apartments and commercial spaces',
    areaNote: "Al Qasimia's central Sharjah location makes it convenient for same-day service. Our teams cover both residential apartment cleaning and commercial space sanitization throughout the district.",
    localFAQs: [
      {
        question: 'Do you offer commercial cleaning in Al Qasimia Sharjah?',
        answer: "Yes. We cover office and commercial space cleaning in Al Qasimia - including carpet extraction, sofa sanitization, and full space deep cleaning for businesses in this area.",
      },
      {
        question: 'Do you offer sofa cleaning in residential apartments in Al Qasimia?',
        answer: "Yes. Alongside our commercial cleaning work in Al Qasimia, we regularly service sofa and carpet cleaning for residential apartments in the district. Same-day appointments are usually available.",
      },
      {
        question: 'What payment methods do you accept in Al Qasimia?',
        answer: "We accept cash and bank transfer for both residential and commercial bookings in Al Qasimia. The price is confirmed with you before the job starts, with no hidden charges added afterward.",
      },
      {
        question: 'How quickly can you respond to a booking in Al Qasimia?',
        answer: "Al Qasimia's central Sharjah location means we can usually offer same-day service for sofa cleaning, carpet cleaning, and office sanitization requests. Message us on WhatsApp with your address for the fastest available slot.",
      },
    ],
  },

  'sharjah-al-majaz': {
    localDescription: "Expert cleaning for waterfront apartments and villas in Al Majaz, Sharjah - covering the Buhaira Corniche area and all residential buildings along the lagoon. Our specialist teams handle luxury sofa cleaning, carpet shampooing, and full apartment deep cleaning in this prestigious Sharjah community.",
    landmarks: ['Buhaira Corniche', 'Al Majaz Waterfront', 'Al Majaz Amphitheatre', 'Khalid Lagoon'],
    propertyType: 'waterfront apartments and upscale villas',
    areaNote: "Al Majaz's Buhaira Corniche waterfront creates a slightly humid microclimate similar to Dubai Marina. Professional sofa cleaning every 5-6 months is recommended to prevent moisture-related fabric deterioration in waterfront residences.",
    localFAQs: [
      {
        question: 'Do you offer cleaning services for Al Majaz waterfront apartments?',
        answer: "Yes. We regularly service apartments and villas along the Buhaira Corniche and Al Majaz waterfront. Waterfront humidity can affect upholstery - we use quick-dry extraction to prevent moisture buildup in sofa fabrics.",
      },
      {
        question: 'How much does sofa cleaning cost in Al Majaz?',
        answer: "Sofa cleaning in Al Majaz starts from around AED 150 for a standard 3-seater fabric sofa, with leather and sectional sofas priced by seating count. Contact us on WhatsApp for a free quote specific to your Buhaira Corniche apartment.",
      },
      {
        question: 'Do you offer villa cleaning near Buhaira Corniche?',
        answer: "Yes. Alongside apartment cleaning, we service the upscale villas along the Buhaira Corniche and Al Majaz waterfront, including full deep cleaning and marble care for premium interiors.",
      },
      {
        question: 'How often should carpets be cleaned in Al Majaz waterfront apartments?',
        answer: "Given the humid microclimate near Khalid Lagoon, we recommend carpet cleaning every 6 months for Al Majaz apartments to prevent moisture and odor buildup in fibers close to the waterfront.",
      },
    ],
  },

  'sharjah-al-khan': {
    localDescription: "Professional sofa, carpet, and apartment cleaning in Al Khan, Sharjah - experienced with the waterfront apartments and older residential buildings in this coastal area. Fast, reliable service for Al Khan residents with same-day availability.",
    landmarks: ['Al Khan Lagoon', 'Al Khan Beach', 'Al Khan residential buildings'],
    propertyType: 'coastal apartments and older residential buildings',
    areaNote: "Al Khan's coastal location and older building stock mean that regular professional cleaning is important for maintaining indoor air quality and fabric condition.",
    localFAQs: [
      {
        question: 'Do you provide cleaning in Al Khan, Sharjah?',
        answer: "Yes. We cover Al Khan in Sharjah with same-day availability for sofa cleaning, carpet shampooing, and full apartment deep cleaning. Contact us via WhatsApp for a free quote.",
      },
      {
        question: 'Do you offer carpet cleaning in Al Khan?',
        answer: "Yes. We provide carpet and rug cleaning throughout Al Khan, including the older residential buildings near Al Khan Lagoon and Al Khan Beach. Free quotes via WhatsApp with same-day availability in most cases.",
      },
      {
        question: 'How long does an apartment deep clean take in Al Khan?',
        answer: "A standard 1-2 bedroom apartment deep clean in Al Khan typically takes 3-5 hours with a team of two technicians, covering kitchen, bathrooms, sofas, and all rooms.",
      },
      {
        question: 'Do you use eco-friendly products safe for kids and pets in Al Khan homes?',
        answer: "Yes. All our cleaning products across Al Khan and the rest of Sharjah are eco-friendly and safe for households with children and pets. We can point out any specific products used on request.",
      },
    ],
  },

  'sharjah-dibba-al-hisn': {
    localDescription: "Cleaning services for villas and apartments in Dibba Al-Hisn, Sharjah's enclave on the UAE's east coast - covering the town centre and surrounding residential streets. Sofa, carpet, and villa deep cleaning with the same standards we bring to the rest of Sharjah.",
    landmarks: ['Dibba Al-Hisn town centre', 'Al Hisn Fort area', 'Dibba Al-Hisn Corniche'],
    propertyType: 'villas and low-rise residential apartments',
    areaNote: "Dibba Al-Hisn sits right beside Dibba Al-Fujairah on the same stretch of coast, so we serve both sides of the town on the same visit where useful for the customer.",
    localFAQs: [
      {
        question: 'Do you clean villas and apartments in Dibba Al-Hisn, Sharjah?',
        answer: "Yes. We cover Dibba Al-Hisn with sofa cleaning, carpet cleaning, and villa deep cleaning. We also serve Dibba Al-Fujairah on the Fujairah side of the same town - message us on WhatsApp to schedule either.",
      },
      {
        question: 'How far is Dibba Al-Hisn from your other Sharjah coverage?',
        answer: "Dibba Al-Hisn is on the east coast, a separate drive from central Sharjah, but it's within our regular UAE-wide coverage - contact us for same-day or next-day availability.",
      },
      {
        question: 'How much does villa deep cleaning cost in Dibba Al-Hisn?',
        answer: "Villa deep cleaning in Dibba Al-Hisn starts from around AED 750 for a 2-bedroom property, similar to our pricing across the rest of Sharjah and Fujairah's east coast. Message us on WhatsApp for an exact quote based on villa size.",
      },
      {
        question: 'Do you offer same-day service in Dibba Al-Hisn?',
        answer: "Same-day service in Dibba Al-Hisn depends on our team's schedule on the east coast that day, but we can usually offer next-day appointments. Contact us on WhatsApp as early as possible for the best chance of same-day booking.",
      },
    ],
  },

  /* ===========================================
     ABU DHABI
  =========================================== */

  'abu-dhabi-abu-dhabi-city': {
    localDescription: "Premium cleaning services for apartments, villas, and offices in Abu Dhabi City, covering Corniche, Al Khalidiyah, Muroor, and Hamdan Street communities. Our certified teams bring the same professional standards we deliver across Dubai to Abu Dhabi's prestigious residential and commercial properties.",
    landmarks: ['Abu Dhabi Corniche', 'Al Khalidiyah', 'Muroor Road', 'Hamdan Street', 'Al Bateen'],
    propertyType: 'premium apartments, villas and government district offices',
    areaNote: "Abu Dhabi City's mix of luxury apartments near the Corniche and spacious family villas inland means our teams are experienced with the full spectrum of property types - from studio apartments to 6-bedroom villas.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services in Abu Dhabi City?',
        answer: "Yes. We cover Abu Dhabi City including Corniche, Al Khalidiyah, Muroor, Hamdan Street, Al Bateen, and all surrounding areas. Same-day service is available for sofa cleaning, carpet cleaning, and villa deep cleaning.",
      },
      {
        question: 'Are your Abu Dhabi prices the same as Dubai?',
        answer: "Our pricing is based on service type and property size - not emirate. We offer the same competitive, transparent rates in Abu Dhabi as in Dubai. Free quotes available via WhatsApp.",
      },
      {
        question: 'Do I need to be home during the cleaning in Abu Dhabi City?',
        answer: "No, you don't need to stay for the whole appointment. Many Corniche and Al Khalidiyah residents provide access via building security or a spare key, as long as someone is reachable by phone during the visit.",
      },
      {
        question: 'How often should villas in Abu Dhabi City be deep cleaned?',
        answer: "We recommend a full villa deep clean every 3-6 months for Abu Dhabi City's larger inland villas, with sofa and carpet cleaning on a more frequent 4-6 month cycle to manage everyday dust.",
      },
    ],
  },

  'abu-dhabi-al-ain': {
    localDescription: "Professional cleaning services in Al Ain - the Garden City of UAE. We serve apartments, villas, and commercial spaces throughout Al Ain's established residential communities, including Al Jimi, Al Muwaiji, and the areas surrounding Al Ain Mall.",
    landmarks: ['Al Jimi', 'Al Muwaiji', 'Al Ain Oasis', 'Al Ain Mall vicinity', 'Al Ain Zoo area'],
    propertyType: 'family villas, garden apartments and commercial spaces',
    areaNote: "Al Ain's inland desert climate creates significant dust accumulation in upholstery and carpets. Regular professional deep cleaning every 4-6 months is highly recommended for Al Ain residents to maintain healthy indoor air quality.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services in Al Ain?',
        answer: "Yes. We cover Al Ain - including Al Jimi, Al Muwaiji, Zakher, and all main residential areas. Our team is familiar with Al Ain's villa-dominated communities and desert climate cleaning requirements.",
      },
      {
        question: 'How much does sofa cleaning cost in Al Ain?',
        answer: "Sofa cleaning in Al Ain starts from around AED 150 for a standard 3-seater fabric sofa, the same transparent pricing we offer across the UAE. Contact us via WhatsApp for a free quote.",
      },
      {
        question: 'Do you offer villa deep cleaning packages in Al Ain?',
        answer: "Yes. Given Al Ain's desert climate and dust accumulation, we offer combined villa deep cleaning packages covering floors, sofas, carpets, and AC vents for garden villas in Al Jimi and Al Muwaiji.",
      },
      {
        question: 'What payment methods do you accept in Al Ain?',
        answer: "We accept cash and bank transfer for all Al Ain bookings, with the final price confirmed before work begins - no hidden charges added on completion.",
      },
    ],
  },

  'abu-dhabi-khalifa-city': {
    localDescription: "Expert cleaning for villas and apartments in Khalifa City A and B - Abu Dhabi's popular suburban community. Our teams serve the large family villa compounds and modern apartments throughout Khalifa City with reliable, professional deep cleaning and sofa care.",
    landmarks: ['Khalifa City A', 'Khalifa City B', 'Yas Island vicinity', 'Abu Dhabi International Airport area'],
    propertyType: 'spacious family villas and modern apartments',
    areaNote: "Khalifa City's large villa communities attract long-term family residents who appreciate the space and greenery. Regular villa deep cleaning - particularly of AC vents, marble floors, and large upholstered sofas - is essential in this suburban setting.",
    localFAQs: [
      {
        question: 'Do you clean villas in Khalifa City Abu Dhabi?',
        answer: "Yes. Villa deep cleaning is our most popular service in Khalifa City. We cover both Khalifa City A and B, with teams experienced in the large 4-6 bedroom villa formats typical of this community.",
      },
      {
        question: 'How much does villa deep cleaning cost in Khalifa City?',
        answer: "Villa deep cleaning in Khalifa City starts from around AED 750 for a 2-bedroom property and scales up for the larger 4-6 bedroom villas common in Khalifa City A and B. WhatsApp us your villa size for an exact quote.",
      },
      {
        question: 'Do you offer marble polishing for Khalifa City villas?',
        answer: "Yes. Many Khalifa City villas have marble flooring that benefits from periodic diamond-pad polishing, particularly in living rooms and entryways that see the most foot traffic.",
      },
      {
        question: 'How long does a full villa deep clean take in Khalifa City?',
        answer: "A typical 4-bedroom villa in Khalifa City takes a team of 3-4 technicians around 6-8 hours to fully deep clean, covering all rooms, kitchen, bathrooms, AC vents, and upholstery.",
      },
    ],
  },

  'abu-dhabi-yas-island': {
    localDescription: "Specialist cleaning for luxury residences and serviced apartments on Yas Island, Abu Dhabi - covering Yas Acres, Ansam, Waters Edge, and all major residential developments on the island. Our premium cleaning service is tailored for Yas Island's upscale community standards.",
    landmarks: ['Yas Acres', 'Ansam', 'Waters Edge', 'Yas Marina Circuit', 'Ferrari World vicinity'],
    propertyType: 'luxury island residences, villas and serviced apartments',
    areaNote: "Yas Island's waterfront location and premium residential developments mean our specialist marble polishing, luxury sofa cleaning, and full villa deep cleaning services are in high demand here.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services on Yas Island?',
        answer: "Yes. We cover all residential communities on Yas Island - Yas Acres, Ansam, Waters Edge, and all others. Same-day service is available for sofa cleaning, carpet cleaning, and full villa deep cleaning.",
      },
      {
        question: 'How much does marble polishing cost on Yas Island?',
        answer: "Marble polishing pricing on Yas Island is based on floor area and the level of restoration needed - light polishing costs less than full grinding and restoration. We provide an accurate quote after assessing the floor.",
      },
      {
        question: 'Do I need to be present during the cleaning on Yas Island?',
        answer: "Not for the whole appointment - many Yas Acres and Ansam residents coordinate access through concierge or a trusted key holder, as long as we can reach you by phone if needed.",
      },
      {
        question: 'How often should sofas be cleaned in Yas Island residences?',
        answer: "We recommend professional sofa cleaning every 4-6 months for Yas Island's serviced apartments and villas to keep premium upholstery looking its best between guests or regular use.",
      },
    ],
  },

  /* ===========================================
     AJMAN
  =========================================== */

  'ajman-ajman-city': {
    localDescription: "Professional cleaning for apartments and villas in Ajman City, including Al Rashidiya, Al Nuaimiya, and Corniche areas. Madinat Alhaya offers affordable same-day cleaning across all of Ajman - the same professional standards as Dubai at Ajman-friendly pricing.",
    landmarks: ['Ajman Corniche', 'Al Rashidiya', 'Al Nuaimiya', 'Ajman City Centre vicinity'],
    propertyType: 'mixed apartments, villas and commercial spaces',
    areaNote: "Ajman's rapid residential growth and competitive property market mean strong demand for move-in, move-out, and regular deep cleaning. Our competitive pricing makes professional cleaning accessible for all Ajman residents.",
    localFAQs: [
      {
        question: 'Do you offer cleaning services in Ajman City?',
        answer: "Yes. We cover all areas of Ajman City - Corniche, Al Rashidiya, Al Nuaimiya, Al Jurf, and all surrounding areas. Competitive pricing with free quotes via WhatsApp. Same-day service often available.",
      },
      {
        question: 'How much does sofa cleaning cost in Ajman City?',
        answer: "Sofa cleaning in Ajman City starts from around AED 120 for a standard 3-seater, among the most competitive rates we offer. Free quotes via WhatsApp for Corniche, Al Rashidiya, and Al Nuaimiya addresses.",
      },
      {
        question: 'Do you offer villa deep cleaning in Ajman City?',
        answer: "Yes. Villa deep cleaning is available throughout Ajman City, covering all rooms, kitchen, bathrooms, and upholstery in a single visit. Pricing depends on villa size - contact us for a free quote.",
      },
      {
        question: 'What payment methods do you accept in Ajman?',
        answer: "We accept cash and bank transfer across all Ajman bookings, with the price confirmed upfront before any work begins.",
      },
    ],
  },

  'ajman-al-nuaimiya': {
    localDescription: "Trusted cleaning services for apartments and commercial spaces in Al Nuaimiya, Ajman - one of the emirate's most centrally located and active residential districts. Fast, affordable sofa cleaning, carpet shampooing, and deep cleaning for Al Nuaimiya residents.",
    landmarks: ['Al Nuaimiya 1', 'Al Nuaimiya 2', 'Al Nuaimiya 3', 'Ajman Free Zone vicinity'],
    propertyType: 'dense residential apartments and commercial spaces',
    areaNote: "Al Nuaimiya's high-density residential character and proximity to Ajman Free Zone make it one of the emirate's most active communities for regular cleaning services.",
    localFAQs: [
      {
        question: 'Do you clean apartments in Al Nuaimiya Ajman?',
        answer: "Yes. We cover Al Nuaimiya 1, 2, and 3 in Ajman. Sofa cleaning starts from AED 120, carpet cleaning from AED 70. Free quotes via WhatsApp - same-day service usually available.",
      },
      {
        question: 'Do I need to be home during the cleaning in Al Nuaimiya?',
        answer: "No, you don't have to stay the whole time. Many Al Nuaimiya residents leave access instructions and step out, as long as someone can be reached by phone during the visit.",
      },
      {
        question: 'How often should carpets be cleaned in Al Nuaimiya apartments?',
        answer: "We recommend carpet cleaning every 6-12 months for Al Nuaimiya's dense residential apartments, or closer to every 6 months in busier living rooms and hallways.",
      },
      {
        question: 'Do you offer same-day service in Al Nuaimiya?',
        answer: "Yes, same-day service is usually available in Al Nuaimiya given how centrally located and active this district is for us. Message us early in the day on WhatsApp for the best chance of same-day booking.",
      },
    ],
  },

  'ajman-al-rashidiya': {
    localDescription: "Professional sofa, carpet, and apartment cleaning in Al Rashidiya, Ajman - experienced with the mixed residential buildings and villa communities in this growing area. Reliable same-day service for all Al Rashidiya residents.",
    landmarks: ['Al Rashidiya', 'Al Rashidiya Park', 'Ajman-Sharjah border area'],
    propertyType: 'mixed villa compounds and residential apartments',
    areaNote: "Al Rashidiya's mix of villas and apartments attracts both families and professionals. Our flexible service offering - from sofa cleaning to full villa deep cleaning - suits all property types in this varied community.",
    localFAQs: [
      {
        question: 'Do you cover Al Rashidiya in Ajman?',
        answer: "Yes. We provide sofa cleaning, carpet cleaning, and full apartment/villa deep cleaning in Al Rashidiya, Ajman. Contact us via WhatsApp for a free quote and same-day booking.",
      },
      {
        question: 'How much does villa deep cleaning cost in Al Rashidiya?',
        answer: "Villa deep cleaning in Al Rashidiya starts from around AED 750 for a 2-bedroom villa, with larger villa compounds priced after we understand the property size. Free quotes via WhatsApp.",
      },
      {
        question: 'Do you offer marble polishing in Al Rashidiya villas?',
        answer: "Yes. We provide marble polishing for Al Rashidiya's mixed villa and apartment community, restoring shine to dulled or scratched marble floors with diamond abrasive technology.",
      },
      {
        question: 'How long does a sofa cleaning appointment take in Al Rashidiya?',
        answer: "A standard 3-seater sofa takes about 1-2 hours to clean in Al Rashidiya, with the fabric usable again within 3-4 hours of drying time.",
      },
    ],
  },

  'ajman-al-jerf': {
    localDescription: "Reliable sofa, carpet, and villa cleaning in Al Jerf, Ajman - a waterfront district home to both industrial businesses and residential communities near Ajman Port. Madinat Alhaya's teams bring all equipment on-site for fast, same-day service.",
    landmarks: ['Al Jerf 1', 'Al Jerf 2', 'Ajman Port vicinity', 'Ajman Free Zone'],
    propertyType: 'residential apartments and villas near the port and free zone',
    areaNote: "Al Jerf's mix of port-adjacent industry and residential streets means many households deal with extra dust and airborne particles - our deep steam cleaning is especially effective at cutting through that buildup.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services in Al Jerf, Ajman?',
        answer: "Yes. We cover Al Jerf 1 and Al Jerf 2 in Ajman, including apartments near Ajman Port and the Free Zone. Free quotes via WhatsApp, with same-day service usually available.",
      },
      {
        question: 'How often should sofas be cleaned in Al Jerf due to dust from the port area?',
        answer: "Given Al Jerf's mix of port-adjacent industry and residential streets, we recommend sofa cleaning every 4 months rather than the usual 6, since airborne dust settles into fabric faster here than in quieter districts.",
      },
      {
        question: 'Do you offer carpet cleaning for Al Jerf apartments?',
        answer: "Yes. Carpet cleaning is available throughout Al Jerf 1 and Al Jerf 2, using deep steam extraction that's especially effective at cutting through the extra dust common in this area.",
      },
      {
        question: 'What payment methods do you accept in Al Jerf?',
        answer: "We accept cash and bank transfer for Al Jerf bookings, including for businesses near Ajman Port and the Free Zone. Price is confirmed before the job starts.",
      },
    ],
  },

  'ajman-al-rawda': {
    localDescription: "Professional sofa, carpet, and villa deep cleaning in Al Rawda, Ajman - a large, family-oriented residential district known for its villa compounds and spacious apartment buildings. Same-day booking with transparent, upfront pricing.",
    landmarks: ['Al Rawda 1', 'Al Rawda 2', 'Al Rawda 3', 'Sheikh Ammar Bin Humaid Street'],
    propertyType: 'villa compounds and mid-rise residential apartments',
    areaNote: "Al Rawda's popularity with families means larger homes and more furniture to cover - our teams are used to scheduling full villa deep cleans here without disrupting a busy household's day.",
    localFAQs: [
      {
        question: 'Do you clean villas and apartments in Al Rawda?',
        answer: "Yes. We cover Al Rawda 1, 2 and 3 in Ajman for sofa cleaning, carpet cleaning and full villa deep cleaning. WhatsApp us for a free quote and same-day availability.",
      },
      {
        question: 'How much does villa deep cleaning cost in Al Rawda?',
        answer: "Villa deep cleaning in Al Rawda starts from around AED 750 for a 2-bedroom villa and scales up for the larger family villas common in Al Rawda 1, 2, and 3. WhatsApp us your villa size for an exact quote.",
      },
      {
        question: 'How long does a villa deep clean take for a typical Al Rawda home?',
        answer: "A typical 3-4 bedroom villa in Al Rawda takes our team around 5-7 hours to deep clean fully, covering all rooms, kitchen, bathrooms, and soft furnishings in one visit.",
      },
      {
        question: 'Do you offer marble polishing in Al Rawda?',
        answer: "Yes. Marble polishing is available for Al Rawda villas, restoring shine to floors that have dulled from daily foot traffic and everyday household spills.",
      },
    ],
  },

  'ajman-al-hamidiya': {
    localDescription: "Trusted sofa, carpet, and apartment cleaning in Al Hamidiya, Ajman - a busy, centrally located residential and commercial area close to Ajman's main roads. Fast response times and eco-friendly products for every booking.",
    landmarks: ['Al Hamidiya 1', 'Al Hamidiya 2', 'Ajman Corniche Road'],
    propertyType: 'dense residential apartments with ground-floor retail',
    areaNote: "Al Hamidiya's central location and heavy foot traffic mean carpets and sofas here pick up dust and grime faster than in quieter suburbs - we recommend more frequent deep cleans for households in this area.",
    localFAQs: [
      {
        question: 'Do you offer cleaning services in Al Hamidiya, Ajman?',
        answer: "Yes. We cover Al Hamidiya 1 and 2 in Ajman. Sofa and carpet cleaning, plus full apartment deep cleaning, with free WhatsApp quotes and same-day service where possible.",
      },
      {
        question: "How often should carpets be cleaned in Al Hamidiya given the area's foot traffic?",
        answer: "Given Al Hamidiya's busy, central location, we recommend carpet cleaning every 6 months rather than the usual 12, since higher foot traffic and ground-floor retail dust settle into carpets faster here.",
      },
      {
        question: 'Do you offer same-day sofa cleaning in Al Hamidiya?',
        answer: "Yes. Same-day sofa cleaning is often available in Al Hamidiya given its central Ajman location close to our regular routes. WhatsApp us in the morning for the best chance of a same-day slot.",
      },
      {
        question: 'What payment methods do you accept in Al Hamidiya?',
        answer: "We accept cash and bank transfer for all Al Hamidiya bookings, with the final price confirmed with you before the job begins.",
      },
    ],
  },

  'ajman-al-zahya': {
    localDescription: "Premium sofa, carpet, and villa cleaning for Al Zahya, Ajman - one of the emirate's newer, upscale gated communities. Madinat Alhaya matches the area's standards with careful, detail-oriented service for modern villas and townhouses.",
    landmarks: ['Al Zahya Gate', 'Sheikh Ammar Bin Humaid Street', 'Al Zahya City Centre vicinity'],
    propertyType: 'modern gated-community villas and townhouses',
    areaNote: "Al Zahya's newer villas often have premium flooring and upholstery that benefit from careful, product-appropriate cleaning rather than one-size-fits-all methods - our technicians check fabric and surface type before starting.",
    localFAQs: [
      {
        question: 'Do you cover Al Zahya in Ajman?',
        answer: "Yes. We provide sofa cleaning, carpet cleaning and villa deep cleaning across Al Zahya's gated communities in Ajman. Contact us on WhatsApp for a free quote.",
      },
      {
        question: 'How much does villa deep cleaning cost in Al Zahya?',
        answer: "Villa deep cleaning in Al Zahya starts from around AED 750 for a 2-bedroom townhouse and scales up for larger gated-community villas. Contact us on WhatsApp for a quote matched to your property.",
      },
      {
        question: 'Do you offer marble polishing for Al Zahya villas?',
        answer: "Yes. Many newer Al Zahya villas have premium marble or stone flooring, and we offer polishing and sealing tailored to these finishes rather than one-size-fits-all cleaning methods.",
      },
      {
        question: 'Do I need to be home during the appointment in Al Zahya?',
        answer: "Not necessarily - many Al Zahya residents coordinate access through the gated community's management or leave a key with a trusted contact, as long as we can reach you by phone.",
      },
    ],
  },

  'ajman-al-mowaihat': {
    localDescription: "Reliable sofa, carpet, and villa cleaning in Al Mowaihat, Ajman - a growing residential district on the Ajman-Sharjah border with a mix of villas and low-rise apartments. Same-day service with all equipment brought to your door.",
    landmarks: ['Al Mowaihat 1', 'Al Mowaihat 2', 'Al Mowaihat 3', 'Ajman-Sharjah border road'],
    propertyType: 'villas and low-rise residential apartments',
    areaNote: "Al Mowaihat's steady residential growth means many households are moving in or renovating - our move-in and move-out deep cleaning packages are popular here.",
    localFAQs: [
      {
        question: 'Do you clean homes in Al Mowaihat, Ajman?',
        answer: "Yes. We cover Al Mowaihat 1, 2 and 3 in Ajman for sofa, carpet and villa deep cleaning, including move-in/move-out cleans. Free quotes via WhatsApp.",
      },
      {
        question: 'How much does a move-in or move-out clean cost in Al Mowaihat?',
        answer: "Move-in and move-out cleaning pricing in Al Mowaihat depends on property size and condition. Contact us via WhatsApp with your villa or apartment details for a free, no-obligation quote.",
      },
      {
        question: 'Do you offer carpet cleaning in Al Mowaihat?',
        answer: "Yes. Carpet cleaning is available across Al Mowaihat 1, 2, and 3, covering both villas and low-rise apartments in this growing border-area community.",
      },
      {
        question: 'What payment methods do you accept in Al Mowaihat?',
        answer: "We accept cash and bank transfer for all Al Mowaihat bookings, with pricing confirmed upfront before any work begins.",
      },
    ],
  },

  'ajman-musherief': {
    localDescription: "Professional sofa, carpet, and villa cleaning in Musherief, Ajman - a quieter residential area popular with families for its villa compounds and lower density compared to central Ajman. Transparent pricing and same-day availability.",
    landmarks: ['Musherief', 'Al Mowaihat vicinity', 'Ajman Academy area'],
    propertyType: 'family villa compounds and townhouses',
    areaNote: "Musherief's quieter, more spread-out villa layout means our teams often handle larger jobs in a single visit - full villa deep cleans covering multiple bedrooms, majlis areas and outdoor spaces.",
    localFAQs: [
      {
        question: 'Do you provide villa cleaning in Musherief, Ajman?',
        answer: "Yes. We cover Musherief and nearby areas in Ajman for sofa cleaning, carpet cleaning and full villa deep cleaning. WhatsApp us for a free quote and same-day booking.",
      },
      {
        question: 'How much does villa deep cleaning cost in Musherief?',
        answer: "Villa deep cleaning in Musherief starts from around AED 750 for a 2-bedroom home and scales up based on the larger villa compounds typical of this quieter district. WhatsApp us for an exact quote.",
      },
      {
        question: 'How long does a full villa deep clean take in Musherief?',
        answer: "Given Musherief's larger, more spread-out villa layouts, a full deep clean including majlis areas and outdoor spaces typically takes our team 6-8 hours in a single visit.",
      },
      {
        question: 'Do you offer sofa and carpet cleaning alongside villa cleaning in Musherief?',
        answer: "Yes. We combine sofa cleaning, carpet cleaning and villa deep cleaning into one visit for Musherief households, which is more cost-effective than booking each service separately.",
      },
    ],
  },

  /* ===========================================
     RAS AL KHAIMAH
  =========================================== */

  'ras-al-khaimah-rak-city': {
    localDescription: "Expert cleaning services for apartments and villas in RAK City (Ras Al Khaimah) - serving the Corniche, Al Nakheel, and all main residential areas of this rapidly growing emirate. Professional sofa cleaning, carpet shampooing, and villa deep cleaning with same-day availability.",
    landmarks: ['RAK Corniche', 'Al Nakheel', 'Al Qawasim Corniche', 'Ras Al Khaimah City Centre vicinity'],
    propertyType: 'family villas, apartments and growing residential communities',
    areaNote: "Ras Al Khaimah's rapid development and expanding residential community mean increasing demand for professional cleaning. Our competitive pricing and same-day service make us a top choice for RAK residents.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services in Ras Al Khaimah?',
        answer: "Yes. We cover RAK City, Al Nakheel, Al Hamra, and all main residential areas in Ras Al Khaimah. Same-day service available. Free quotes via WhatsApp.",
      },
      {
        question: 'How much does sofa cleaning cost in RAK City?',
        answer: "Sofa cleaning in RAK City starts from around AED 150 for a standard 3-seater fabric sofa, the same transparent pricing as the rest of the UAE. Free quotes via WhatsApp.",
      },
      {
        question: 'Do you offer villa deep cleaning in RAK City?',
        answer: "Yes. Villa deep cleaning is available throughout RAK City, Al Nakheel, and Al Hamra, covering all rooms, kitchen, bathrooms, and upholstery in one visit.",
      },
      {
        question: 'What payment methods do you accept in Ras Al Khaimah?',
        answer: "We accept cash and bank transfer for all Ras Al Khaimah bookings, with the price confirmed before the job starts.",
      },
    ],
  },

  'ras-al-khaimah-al-hamra': {
    localDescription: "Premium cleaning for luxury villas and apartments in Al Hamra Village, Ras Al Khaimah - specialist care for golf and waterfront community residences. Our teams handle marble polishing, luxury sofa cleaning, and full villa deep cleaning for this prestigious RAK development.",
    landmarks: ['Al Hamra Village', 'Al Hamra Golf Club', 'Al Hamra Marina', 'Waldorf Astoria RAK vicinity'],
    propertyType: 'luxury golf and waterfront villas and apartments',
    areaNote: "Al Hamra Village's premium waterfront and golf community attracts discerning residents who expect the highest cleaning standards. Our specialist marble polishing and luxury upholstery services are particularly popular here.",
    localFAQs: [
      {
        question: 'Do you clean luxury villas in Al Hamra Village RAK?',
        answer: "Yes. We provide full villa deep cleaning, marble polishing, and luxury sofa care for Al Hamra Village residents. Our specialist team is experienced with the premium finishes and materials typical of Al Hamra properties.",
      },
      {
        question: 'How much does marble polishing cost in Al Hamra Village?',
        answer: "Marble polishing pricing in Al Hamra Village depends on floor area and the marble's current condition. We assess golf and waterfront villa floors on-site and confirm an accurate quote before starting.",
      },
      {
        question: 'Do I need to be home during the cleaning in Al Hamra?',
        answer: "Not for the entire visit - many Al Hamra Village residents coordinate access through community management or a trusted contact, as long as we can reach you by phone.",
      },
      {
        question: 'How often should luxury sofas be cleaned in Al Hamra Village?',
        answer: "We recommend professional sofa cleaning every 4-6 months for Al Hamra's premium upholstery, using fabric-appropriate products to protect designer and leather finishes.",
      },
    ],
  },

  'ras-al-khaimah-al-nakheel': {
    localDescription: "Professional cleaning for apartments and villas in Al Nakheel, Ras Al Khaimah - trusted by families and professionals in this established residential community near RAK City. Reliable sofa cleaning, carpet shampooing, and deep cleaning services.",
    landmarks: ['Al Nakheel', 'Al Nakheel Park', 'RAK City border areas'],
    propertyType: 'established family villas and apartments',
    areaNote: "Al Nakheel's established residential community provides a stable base for regular cleaning clients. Many families here book quarterly sofa and carpet cleaning packages for consistent cleanliness.",
    localFAQs: [
      {
        question: 'Do you cover Al Nakheel in Ras Al Khaimah?',
        answer: "Yes. We cover Al Nakheel and all surrounding RAK residential areas. Contact us via WhatsApp for a free quote and same-day service wherever possible.",
      },
      {
        question: 'How much does carpet cleaning cost in Al Nakheel?',
        answer: "Carpet cleaning in Al Nakheel starts from around AED 75 for small rugs, with larger carpets priced per square meter. Contact us via WhatsApp for a free quote.",
      },
      {
        question: 'Do you offer same-day service in Al Nakheel?',
        answer: "Same-day service is usually available in Al Nakheel given its established, central location near RAK City. Message us early in the day for the best chance of a same-day slot.",
      },
      {
        question: 'How long does a sofa cleaning appointment take in Al Nakheel?',
        answer: "A standard 3-seater sofa takes around 1-2 hours to clean in Al Nakheel, and is dry and ready to use again within 3-4 hours.",
      },
    ],
  },

  /* ===========================================
     FUJAIRAH
  =========================================== */

  'fujairah-fujairah-city': {
    localDescription: "Professional cleaning services in Fujairah City - the UAE's only emirate on the Gulf of Oman. We serve apartments, villas, and commercial spaces across all main residential districts, providing reliable sofa cleaning, carpet shampooing, and deep cleaning for Fujairah residents.",
    landmarks: ['Fujairah Fort', 'Fujairah Corniche', 'Fujairah City Centre vicinity', 'Al Faseel'],
    propertyType: 'family villas, apartments and commercial spaces',
    areaNote: "Fujairah's Gulf of Oman coastal climate creates unique humidity conditions that can affect upholstery. Regular professional cleaning helps Fujairah residents maintain fresh, allergen-free interiors year-round.",
    localFAQs: [
      {
        question: 'Do you provide cleaning services in Fujairah City?',
        answer: "Yes. We cover Fujairah City and all surrounding residential areas. Sofa cleaning, carpet cleaning, and villa deep cleaning are all available. Contact us via WhatsApp for same-day or next-day service.",
      },
      {
        question: 'How much does villa deep cleaning cost in Fujairah City?',
        answer: "Villa deep cleaning in Fujairah City starts from around AED 750 for a 2-bedroom property and scales up based on villa size. Contact us via WhatsApp for a free quote.",
      },
      {
        question: 'Do you offer marble polishing in Fujairah City?',
        answer: "Yes. Marble polishing is available for villas and apartments across Fujairah City, restoring shine to floors affected by the Gulf of Oman coastal humidity.",
      },
      {
        question: "How often should sofas be cleaned in Fujairah's coastal climate?",
        answer: "We recommend professional sofa cleaning every 4-6 months in Fujairah, since the coastal humidity here can trap moisture in upholstery faster than in inland areas.",
      },
    ],
  },

  'fujairah-dibba-al-fujairah': {
    localDescription: "Trusted cleaning for villas and apartments in Dibba Al-Fujairah - covering coastal properties and residential communities in this scenic northern area. Professional sofa and carpet cleaning with same-day availability for Dibba residents.",
    landmarks: ['Dibba Al-Fujairah Corniche', 'Dibba Port', 'Al Aqah Beach vicinity'],
    propertyType: 'coastal villas and residential apartments',
    areaNote: "Dibba Al-Fujairah's coastal setting and scenic mountain backdrop attract both permanent residents and holiday homeowners. Our cleaning team is experienced with coastal property maintenance needs.",
    localFAQs: [
      {
        question: 'Do you clean apartments and villas in Dibba Al-Fujairah?',
        answer: "Yes. We serve Dibba Al-Fujairah with sofa cleaning, carpet cleaning, and full villa deep cleaning. Contact us via WhatsApp for scheduling and a free quote.",
      },
      {
        question: 'Do you also cover Dibba Al-Hisn on the Sharjah side?',
        answer: "Yes. Dibba Al-Hisn and Dibba Al-Fujairah sit on the same stretch of coast - we cover both sides of the town, message us on WhatsApp to schedule either.",
      },
      {
        question: 'How much does sofa cleaning cost in Dibba Al-Fujairah?',
        answer: "Sofa cleaning in Dibba Al-Fujairah starts from around AED 150 for a standard 3-seater, the same transparent pricing we offer across the UAE. Free quotes via WhatsApp.",
      },
      {
        question: 'Do you offer same-day service in Dibba Al-Fujairah?',
        answer: "Same-day service in Dibba Al-Fujairah depends on our team's route on the east coast that day, but next-day appointments are reliably available. Message us on WhatsApp as early as possible.",
      },
    ],
  },

  'fujairah-kalba': {
    localDescription: "Professional cleaning services for apartments and villas in Kalba, Fujairah - one of the UAE's most peaceful residential communities on the Gulf of Oman coastline. Reliable sofa cleaning, carpet shampooing, and deep cleaning for Kalba residents.",
    landmarks: ['Kalba Corniche', 'Kalba Old Town', 'Khor Kalba'],
    propertyType: 'coastal residential villas and apartments',
    areaNote: "Kalba's peaceful coastal community and Khor Kalba mangrove reserve create a unique environment. Our eco-friendly cleaning products are particularly important here to align with the area's environmental values.",
    localFAQs: [
      {
        question: 'Do you provide cleaning in Kalba, Fujairah?',
        answer: "Yes. We cover Kalba and surrounding areas in Fujairah. WhatsApp us for a free quote and to arrange same-day or next-day service for your sofa, carpet, or apartment cleaning needs.",
      },
      {
        question: 'How much does carpet cleaning cost in Kalba?',
        answer: "Carpet cleaning in Kalba starts from around AED 75 for small rugs, with larger carpets priced per square meter. Contact us via WhatsApp for a free quote.",
      },
      {
        question: 'Do you use eco-friendly products safe for kids and pets in Kalba?',
        answer: "Yes. All our products are eco-friendly and safe for households with children and pets, which fits well with the environmental character of Kalba's Khor Kalba mangrove community.",
      },
      {
        question: 'Do you offer villa deep cleaning in Kalba?',
        answer: "Yes. Villa deep cleaning is available for Kalba's coastal residential villas, covering all rooms, kitchen, bathrooms, and upholstery in a single visit.",
      },
    ],
  },

  /* ===========================================
     UMM AL QUWAIN
  =========================================== */

  'umm-al-quwain-uaq-city': {
    localDescription: "Professional cleaning for apartments and villas in UAQ City (Umm Al Quwain) - trusted by residents of this quiet and affordable emirate for sofa cleaning, carpet shampooing, and full deep cleaning. Madinat Alhaya brings big-city professional standards to UAQ at local-friendly pricing.",
    landmarks: ['UAQ Corniche', 'UAQ Free Trade Zone', 'Dream Land vicinity'],
    propertyType: 'family villas, apartments and free zone properties',
    areaNote: "Umm Al Quwain's quiet residential character and affordable property prices attract families seeking a less crowded alternative to Dubai. Our professional cleaning services are competitively priced for UAQ residents.",
    localFAQs: [
      {
        question: 'Do you offer cleaning services in Umm Al Quwain?',
        answer: "Yes. We cover UAQ City and all surrounding areas. Sofa cleaning, carpet cleaning, and villa deep cleaning are all available. WhatsApp us for a free quote.",
      },
      {
        question: 'How much does sofa cleaning cost in UAQ City?',
        answer: "Sofa cleaning in UAQ City starts from around AED 130 for a standard 3-seater, competitively priced for this quieter emirate. Free quotes via WhatsApp.",
      },
      {
        question: 'Do you offer villa deep cleaning in Umm Al Quwain?',
        answer: "Yes. Villa deep cleaning is available throughout UAQ City, covering all rooms, kitchen, bathrooms, and upholstery in a single visit at local-friendly pricing.",
      },
      {
        question: 'What payment methods do you accept in UAQ?',
        answer: "We accept cash and bank transfer for all Umm Al Quwain bookings, with the price confirmed before work begins.",
      },
    ],
  },

  'umm-al-quwain-falaj-al-mualla': {
    localDescription: "Expert cleaning services in Falaj Al Mualla, Umm Al Quwain - serving residential villas and apartments in this growing community with reliable same-day sofa cleaning, carpet shampooing, and apartment deep cleaning.",
    landmarks: ['Falaj Al Mualla', 'Umm Al Quwain Equestrian Club vicinity'],
    propertyType: 'residential villas and apartments',
    areaNote: "Falaj Al Mualla's growing residential community provides increasing demand for professional cleaning services. Our same-day availability ensures UAQ residents get fast, convenient service.",
    localFAQs: [
      {
        question: 'Do you clean villas and apartments in Falaj Al Mualla?',
        answer: "Yes. We cover Falaj Al Mualla in Umm Al Quwain. Contact us via WhatsApp for a free quote and to arrange same-day or next-day service.",
      },
      {
        question: 'How much does villa deep cleaning cost in Falaj Al Mualla?',
        answer: "Villa deep cleaning in Falaj Al Mualla starts from around AED 750 for a 2-bedroom property and scales up for larger homes. Contact us via WhatsApp for an exact quote.",
      },
      {
        question: 'Do you offer marble polishing in Falaj Al Mualla?',
        answer: "Yes. Marble polishing is available for Falaj Al Mualla's residential villas, restoring shine to floors that have dulled from everyday use.",
      },
      {
        question: 'How long does a sofa cleaning appointment take in Falaj Al Mualla?',
        answer: "A standard 3-seater sofa takes around 1-2 hours to clean in Falaj Al Mualla, and is dry and ready to use again within 3-4 hours.",
      },
    ],
  },
}

export const getCityContent = (emirateSlug: string, citySlug: string): CityLocalContent | undefined =>
  cityLocalContent[`${emirateSlug}-${citySlug}`]
