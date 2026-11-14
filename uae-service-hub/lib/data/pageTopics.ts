/**
 * Extra topic sections per page (on-page topic pass, 14 Nov 2026).
 *
 * Each page already ranked (positions ~5-70 in Search Console, Aug-Nov 2026)
 * for searches its copy did not answer directly. Every section below covers one
 * of those search groups, e.g. "cleaning curtains at home" (61 impressions) or
 * "carpet cleaning sharjah" (143). Only confirmed claims are used: work at the
 * customer's place, free WhatsApp quote, same-day slots, eco-friendly products
 * safe for kids and pets, trained and background-checked team. No prices.
 */
export type TopicSection = {
  h2: string
  paras: string[]
  related?: { text: string; href: string }[]
}

export const PAGE_TOPICS: Record<string, TopicSection[]> = {
  // ── Service pages ────────────────────────────────────────────────
  '/services/sofa-cleaning': [
    {
      h2: 'Sofa deep cleaning or dry cleaning at home?',
      paras: [
        'Most fabric sofas get a deep clean: the fabric is pre-treated, shampooed and then rinsed with hot-water extraction, which pulls the dirt and shampoo back out of the cushions instead of leaving it in the foam. This is the right choice for spills, body oils on the arms and headrests, and the fine dust that builds up in Dubai homes.',
        'Some fabrics cannot take much water — certain velvets, silks and sofas marked "S" (solvent only) on the care label. For those we use a low-moisture dry cleaning method at your home. Send a photo of the sofa and its care label on WhatsApp and we tell you which method fits before we book the visit.',
      ],
    },
    {
      h2: 'Couches, armchairs and other upholstered furniture',
      paras: [
        'The same team cleans every upholstered piece in the room in one visit: L-shape and corner sofas, recliners, armchairs, ottomans, headboards, cushions and upholstered benches. Leather is cleaned with a leather cleaner and conditioned, not shampooed.',
        'If your dining chairs or a mattress need attention too, mention it when you ask for the quote and they are done on the same day.',
      ],
      related: [
        { text: 'Dining chair cleaning', href: '/services/dining-chair-cleaning' },
        { text: 'Mattress cleaning', href: '/services/mattress-cleaning' },
      ],
    },
  ],
  '/services/carpet-cleaning': [
    {
      h2: 'Carpet cleaning at home: how the visit works',
      paras: [
        'Your carpets are cleaned where they lie — nothing is rolled up or taken away. The team vacuums out the loose sand first, treats stains and traffic lanes, then deep cleans with hot-water extraction and leaves the carpet damp, not wet.',
        'Most wall-to-wall carpets and rugs are dry enough to walk on in a few hours, faster with the AC running. Send a photo and the room size on WhatsApp for a free quote; same-day slots are often available.',
      ],
    },
    {
      h2: 'Carpet shampooing or steam extraction?',
      paras: [
        'Shampooing on its own loosens dirt but can leave residue in the pile, which attracts dust again. We shampoo heavily soiled areas and then rinse everything out with steam extraction, so the carpet stays clean for longer.',
        'Delicate rugs — silk, viscose, old hand-knotted pieces — get a gentler low-moisture clean. Tell us the rug type and we choose the method before the visit.',
      ],
      related: [{ text: 'Sofa cleaning', href: '/services/sofa-cleaning' }],
    },
  ],
  '/services/curtain-cleaning': [
    {
      h2: 'Cleaning curtains at home, without taking them down',
      paras: [
        'Most curtains are steam cleaned while they are still hanging. The team vacuums the dust off the folds and the top of the track, then works down each panel with a steam tool that lifts dust, odours and light marks. Your windows are not left bare for days.',
        'Blinds — fabric, roller and aluminium — are cleaned on site the same way. Send a photo of the curtains and the number of windows on WhatsApp for a free quote.',
      ],
    },
    {
      h2: 'Dry cleaning, steam cleaning and pressing: which curtains need what',
      paras: [
        'Everyday cotton, linen and polyester curtains respond well to steam cleaning at home. Silk, velvet, embroidered and heavily lined curtains are safer with dry cleaning. Blackout curtains need care with the coating, so they are cleaned at a lower temperature.',
        'If you are not sure what your curtains are made of, a photo of the label is usually enough for us to tell you the right method.',
      ],
    },
  ],
  '/services/villa-deep-cleaning': [
    {
      h2: 'Villa cleaning or villa deep cleaning?',
      paras: [
        'A regular villa clean keeps the house tidy: floors, kitchen and bathroom surfaces, dusting. A deep clean goes into what regular cleaning leaves behind — inside cupboards and appliances, grout lines, AC grilles, behind and under furniture, window tracks and the outdoor areas.',
        'Most families book a deep clean when moving in or out, after renovation work, before an event, or once or twice a year. The trained, background-checked team brings its own machines and eco-friendly products that are safe for kids and pets.',
      ],
    },
    {
      h2: 'Large and luxury villas',
      paras: [
        'Bigger villas in Emirates Hills, Palm Jumeirah, Arabian Ranches and Dubai Hills are cleaned by a larger team so the job still finishes in a day. Marble floors, natural stone and delicate finishes get their own products, and marble polishing can be added to the same visit.',
      ],
      related: [{ text: 'Marble polishing', href: '/services/marble-polishing' }],
    },
  ],
  '/services/office-cleaning': [
    {
      h2: 'Daily, weekly or monthly office cleaning',
      paras: [
        'Busy offices usually need daily cleaning of desks, kitchens and washrooms; smaller offices often get by with one or two visits a week; and most offices add a deep clean every few months for carpets, chairs, glass and hard-to-reach dust.',
        'Visits can be scheduled before or after working hours so your team is not disturbed. Tell us the office size and how many people use it, and we suggest a schedule with a free quote on WhatsApp.',
      ],
    },
    {
      h2: 'Office sanitisation',
      paras: [
        'Sanitisation focuses on the surfaces many hands touch: door handles, light switches, desks, keyboards, phones, meeting tables, kitchen counters and washrooms. It can be booked on its own or added to a regular clean, using products that are safe for the people who work there.',
      ],
    },
  ],
  '/services/apartment-cleaning': [
    {
      h2: 'Move-in and move-out deep cleaning',
      paras: [
        'Before you move in, a deep clean removes the dust and leftovers of the previous tenant from cupboards, the kitchen, bathrooms, AC grilles and balcony. Before you move out, it helps the apartment pass the landlord\'s handover check.',
        'An empty apartment is the easiest to deep clean, so book it for the day after the furniture leaves or before it arrives. Same-day slots are often available.',
      ],
    },
    {
      h2: '1BHK, 2BHK and larger apartments',
      paras: [
        'A studio or 1BHK deep clean is usually finished in a few hours by a small team; 2BHK, 3BHK and larger apartments get a bigger team so the work still fits in one day. The scope is the same for every size: kitchen, bathrooms, bedrooms, living areas, windows from the inside and the balcony.',
        'Send the apartment size and building name on WhatsApp for a free quote.',
      ],
    },
  ],
  '/services/marble-polishing': [
    {
      h2: 'Marble restoration and crystallization',
      paras: [
        'Polishing brings back the shine on marble that is dull but flat. When the floor has scratches, etch marks from acidic spills or uneven tiles, it needs restoration first: the surface is ground with diamond pads, then honed and polished.',
        'Crystallization is the final step for many floors — a treatment that hardens the top layer and gives a deeper gloss that lasts longer with normal cleaning. We look at photos of the floor and tell you which steps it needs.',
      ],
    },
    {
      h2: 'Marble polishing in Abu Dhabi and across the UAE',
      paras: [
        'The same marble polishing service is available in Abu Dhabi, Sharjah, Ajman and the other emirates, with the team and machines coming to your villa, apartment or office. Send photos of the floor and its approximate size on WhatsApp for a free quote.',
      ],
      related: [{ text: 'Floor cleaning', href: '/services/floor-cleaning' }],
    },
  ],

  // ── Emirate pages ────────────────────────────────────────────────
  '/sharjah': [
    {
      h2: 'Carpet cleaning in Sharjah',
      paras: [
        'Sharjah apartments in Al Nahda, Al Qasimia, Al Majaz and Al Khan often have wall-to-wall carpet in the bedrooms and rugs in the living room, and both collect fine sand quickly. Carpets are deep cleaned at your home with hot-water extraction and are usually dry in a few hours.',
        'Send a photo and the room size on WhatsApp for a free quote; same-day slots are often available across Sharjah.',
      ],
      related: [
        { text: 'Carpet cleaning in Al Nahda', href: '/sharjah/al-nahda/carpet-cleaning' },
        { text: 'Carpet cleaning in Al Qasimia', href: '/sharjah/al-qasimia/carpet-cleaning' },
        { text: 'Carpet cleaning in Al Majaz', href: '/sharjah/al-majaz/carpet-cleaning' },
      ],
    },
    {
      h2: 'Home, apartment and building cleaning in Sharjah',
      paras: [
        'For homes and apartments we do deep cleaning — kitchens, bathrooms, floors, windows from the inside, cupboards and AC grilles — including move-in and move-out cleans. Offices and building common areas such as lobbies, corridors and stairwells are cleaned on a schedule that suits the building.',
        'The trained, background-checked team brings its own equipment and eco-friendly products that are safe for kids and pets.',
      ],
    },
  ],
  '/ajman': [
    {
      h2: 'Home and house cleaning in Ajman',
      paras: [
        'In Ajman most bookings are deep cleans of apartments and villas in Al Nuaimiya, Al Rashidiya, Al Jerf and Al Rawda: kitchens, bathrooms, floors, windows from the inside and cupboards, plus move-in and move-out cleans for new tenants.',
        'The team comes to your home with its own machines and eco-friendly products, and same-day slots are often available.',
      ],
    },
    {
      h2: 'Carpet and sofa cleaning in Ajman',
      paras: [
        'Carpets, rugs and sofas are cleaned at your home with hot-water extraction, which lifts the sand and dust that vacuuming leaves in the fibres. Send a photo on WhatsApp and you get a free quote before anyone visits.',
      ],
      related: [
        { text: 'Carpet cleaning in Ajman City', href: '/ajman/ajman-city/carpet-cleaning' },
        { text: 'Sofa cleaning', href: '/services/sofa-cleaning' },
      ],
    },
  ],
  '/ras-al-khaimah': [
    {
      h2: 'House cleaning and deep cleaning in Ras Al Khaimah',
      paras: [
        'From apartments in RAK City to villas in Al Hamra and Mina Al Arab, the team deep cleans kitchens, bathrooms, floors, windows from the inside, cupboards and outdoor areas, including move-in and move-out cleans.',
        'Book a few days ahead for larger villas; for smaller jobs same-day slots are often available. The quote is free on WhatsApp.',
      ],
    },
    {
      h2: 'Carpet and sofa cleaning in Ras Al Khaimah',
      paras: [
        'Carpets, rugs and sofas are cleaned at your home in Ras Al Khaimah with hot-water extraction and are usually dry in a few hours. Leather sofas are cleaned and conditioned instead of shampooed.',
      ],
      related: [
        { text: 'Carpet cleaning in RAK City', href: '/ras-al-khaimah/rak-city/carpet-cleaning' },
        { text: 'Sofa cleaning in RAK City', href: '/ras-al-khaimah/rak-city/sofa-cleaning' },
      ],
    },
  ],
  '/umm-al-quwain': [
    {
      h2: 'Cleaning company in Umm Al Quwain',
      paras: [
        'In Umm Al Quwain the team covers UAQ City, Al Salamah, Al Ramlah and Falaj Al Mualla for deep cleaning of homes and villas, sofa and carpet cleaning, and office cleaning. Everything is done at your place with the team\'s own equipment.',
        'Send a photo of what needs cleaning on WhatsApp for a free quote.',
      ],
    },
  ],

  // ── Area hubs ────────────────────────────────────────────────────
  '/dubai/jlt': [
    {
      h2: 'House cleaning services in JLT',
      paras: [
        'Most JLT homes are apartments in the cluster towers, so visits are planned around building access and the service lift. A house cleaning visit covers kitchens, bathrooms, bedrooms, living areas, windows from the inside and the balcony; sofas, carpets and mattresses can be added to the same visit.',
        'Tell us your cluster and tower on WhatsApp for a free quote. Same-day slots are often available in JLT.',
      ],
      related: [
        { text: 'Carpet cleaning in JLT', href: '/dubai/jlt/carpet-cleaning' },
        { text: 'Sofa cleaning in JLT', href: '/dubai/jlt/sofa-cleaning' },
      ],
    },
  ],
  '/dubai/marina': [
    {
      h2: 'Cleaning services in Dubai Marina',
      paras: [
        'Dubai Marina homes are mostly high-rise apartments, where sea air and AC run all year long. The services booked most here are apartment deep cleaning, sofa and carpet cleaning, and move-in and move-out cleans before tenancy handovers.',
        'The team brings everything up in the service lift and works around building rules. Send your tower name and what needs cleaning on WhatsApp for a free quote.',
      ],
      related: [
        { text: 'Carpet cleaning in Dubai Marina', href: '/dubai/marina/carpet-cleaning' },
        { text: 'Sofa cleaning in Dubai Marina', href: '/dubai/marina/sofa-cleaning' },
      ],
    },
  ],

  // ── Area x service pages ─────────────────────────────────────────
  '/dubai/palm-jumeirah/sofa-cleaning': [
    {
      h2: 'Sofa cleaning services in Palm Jumeirah villas and apartments',
      paras: [
        'On the Palm we clean sofas in the frond villas, the Shoreline and Golden Mile apartments and the Crescent residences. Large sectional sofas, outdoor-terrace cushions and light fabrics that show sand and sun-cream marks are the most common jobs.',
        'Fabric sofas are shampooed and hot-water extracted at your home; leather is cleaned and conditioned. Send a photo on WhatsApp for a free quote.',
      ],
    },
  ],
  '/dubai/palm-jumeirah/carpet-cleaning': [
    {
      h2: 'Sofa and carpet cleaning together on the Palm',
      paras: [
        'Many Palm Jumeirah homes book carpets and sofas in the same visit, since the same sand and humidity affect both. If you need the sofas done too, our Palm Jumeirah sofa cleaning page explains how upholstery is cleaned.',
      ],
      related: [{ text: 'Sofa cleaning in Palm Jumeirah', href: '/dubai/palm-jumeirah/sofa-cleaning' }],
    },
  ],
  '/dubai/jumeirah/sofa-cleaning': [
    {
      h2: 'Jumeirah or Palm Jumeirah?',
      paras: [
        'This page covers the Jumeirah 1, 2 and 3 villa areas along Jumeirah Beach Road. If your home is on the Palm, see the Palm Jumeirah sofa cleaning page — the service is the same, the team and access arrangements are different.',
      ],
      related: [{ text: 'Sofa cleaning in Palm Jumeirah', href: '/dubai/palm-jumeirah/sofa-cleaning' }],
    },
  ],
  '/dubai/marina/carpet-cleaning': [
    {
      h2: 'Other cleaning services in Dubai Marina',
      paras: [
        'Besides carpets, Marina residents book sofa cleaning, apartment deep cleaning and move-out cleans, often in the same visit.',
      ],
      related: [{ text: 'Cleaning services in Dubai Marina', href: '/dubai/marina' }],
    },
  ],
  '/sharjah/al-nahda/carpet-cleaning': [
    {
      h2: 'Carpet cleaning at home in Al Nahda',
      paras: [
        'Your carpets and rugs are cleaned inside your Al Nahda apartment — nothing is taken away. The team vacuums out the sand, treats stains, deep cleans with hot-water extraction and leaves them damp enough to dry in a few hours with the AC on. Same-day slots are often available.',
      ],
    },
  ],
  '/sharjah/al-qasimia/carpet-cleaning': [
    {
      h2: 'Carpet cleaning at home in Al Qasimia',
      paras: [
        'Al Qasimia carpets are cleaned at your home with hot-water extraction, which is what removes the fine sand that builds up in central Sharjah apartments. Rugs and wall-to-wall carpet can be done in the same visit, and the quote is free on WhatsApp.',
      ],
    },
  ],
  '/sharjah/al-majaz/carpet-cleaning': [
    {
      h2: 'Carpet cleaning at home in Al Majaz',
      paras: [
        'In Al Majaz the team cleans carpets in the lagoon-side towers and nearby villas at your home. Stains and traffic lanes are pre-treated, then the carpet is deep cleaned and left to dry in a few hours. Send a photo on WhatsApp for a free quote.',
      ],
    },
  ],
}

export const getPageTopics = (path: string): TopicSection[] => PAGE_TOPICS[path] ?? []
