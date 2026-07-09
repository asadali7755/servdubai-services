/**
 * Blog posts — Phase 4 (authority + AI visibility).
 * Buyer-question, UAE-specific content that ranks for informational searches and
 * gets quoted by AI assistants (ChatGPT, Google AI Overviews). Each post links
 * internally to the relevant service/area pages to pass authority.
 */

export interface BlogSection {
  heading: string
  body?: string[]
  bullets?: string[]
}
export interface BlogCostRow {
  label: string
  price: string
}
export interface BlogPost {
  slug: string
  /** SEO <title> */
  title: string
  h1: string
  description: string // meta description
  excerpt: string // index card text
  image: string
  datePublished: string
  dateModified?: string
  readMins: number
  intro: string[]
  sections: BlogSection[]
  costTable?: { title: string; rows: BlogCostRow[]; note?: string }
  faqs: { question: string; answer: string }[]
  relatedServices: string[] // service slugs
}

import generatedPosts from './generated-blog-posts.json'

const handWrittenBlogPosts: BlogPost[] = [
  {
    slug: 'sofa-cleaning-cost-dubai',
    title: 'How Much Does Sofa Cleaning Cost in Dubai?',
    h1: 'How Much Does Sofa Cleaning Cost in Dubai?',
    description:
      'A clear 2026 price guide for professional sofa cleaning in Dubai — costs by sofa size & material, what affects the price, and how to book. Free quotes on WhatsApp.',
    excerpt:
      'Real 2026 prices for professional sofa cleaning in Dubai — by seater, fabric vs leather, and what changes the cost.',
    image: '/images/services/leather-sofa-cleaning-dubai.webp',
    datePublished: '2026-06-01',
    readMins: 5,
    intro: [
      'If you are searching for professional sofa cleaning in Dubai, the first question is almost always: how much will it cost? The honest answer is that it depends on a few things — the number of seats, the fabric type, and how deep the cleaning needs to be. This guide gives you realistic 2026 price ranges so you know what to expect before you book.',
      'At Madinat Alhaya, our pricing is transparent with no hidden charges, and every quote is free via WhatsApp. Below is how sofa cleaning is typically priced across Dubai.',
    ],
    sections: [
      {
        heading: 'What affects the price of sofa cleaning?',
        body: [
          'Three main factors decide your final price:',
        ],
        bullets: [
          'Size — a 1-seater costs far less than a large L-shaped or corner sofa.',
          'Material — fabric is standard; leather, velvet and suede need specialist care and cost more.',
          'Condition — heavy stains, pet odors or years of dust take longer and may need extra treatment.',
        ],
      },
      {
        heading: 'Fabric vs leather sofa cleaning',
        body: [
          'Fabric sofas are cleaned with hot-water extraction (steam) that lifts dust, allergens and stains from deep in the fibres. Leather sofas need a gentler process — pH-balanced cleaners and conditioning so the leather does not dry out or crack in Dubai’s climate. Because leather requires specialist products and care, it usually sits at the higher end of the price range.',
        ],
      },
      {
        heading: 'How long does it take — and when can I use it?',
        body: [
          'A standard 3-seater takes around 1–2 hours. With our quick-dry extraction method, your sofa is usually dry and ready to use within 3–4 hours, which is convenient for busy Dubai apartments and villas.',
        ],
      },
    ],
    costTable: {
      title: 'Approximate sofa cleaning prices in Dubai (2026)',
      rows: [
        { label: '1-seater / armchair', price: 'AED 60 – 100' },
        { label: '3-seater sofa (fabric)', price: 'AED 250 – 350' },
        { label: 'L-shaped / corner sofa', price: 'AED 350 – 500' },
        { label: 'Leather sofa (per seat)', price: 'AED 90 – 150' },
        { label: 'Sofa + carpet bundle', price: 'Discounted package — ask on WhatsApp' },
      ],
      note: 'Prices are indicative for 2026 and vary with size, material and condition. Get an exact free quote on WhatsApp.',
    },
    faqs: [
      {
        question: 'Is professional sofa cleaning worth it in Dubai?',
        answer:
          'Yes. Dubai’s fine dust and humidity trap allergens deep in upholstery that home vacuuming cannot reach. Professional hot-water extraction removes dust mites, stains and odors, improves indoor air quality, and extends the life of your sofa.',
      },
      {
        question: 'How often should I get my sofa professionally cleaned?',
        answer:
          'Every 6 months is recommended in Dubai due to high dust and humidity. Homes with children, pets or allergy sufferers may benefit from cleaning every 3–4 months.',
      },
      {
        question: 'Do you clean the sofa at my home?',
        answer:
          'Yes. Our team brings all equipment to your home anywhere in Dubai. There is no need to move the sofa out, and same-day service is usually available.',
      },
    ],
    relatedServices: ['sofa-cleaning', 'carpet-cleaning'],
  },

  {
    slug: 'villa-deep-cleaning-cost-dubai',
    title: 'Villa Deep Cleaning Cost in Dubai (2026)',
    h1: 'How Much Does Villa Deep Cleaning Cost in Dubai?',
    description:
      'What villa deep cleaning costs in Dubai in 2026, what’s included, and how long it takes — by villa size. Move-in/move-out specialists. Free WhatsApp quote.',
    excerpt:
      'Villa deep cleaning prices in Dubai by size, what’s included, and move-in/move-out tips.',
    image: '/images/services/villa-deep-cleaning.webp',
    datePublished: '2026-06-01',
    readMins: 6,
    intro: [
      'Villa deep cleaning is one of the most requested services in Dubai — especially for move-in, move-out, or post-renovation cleans. Because villas vary so much in size, the price range is wider than for a single sofa or carpet. This guide explains what drives the cost and what a proper deep clean includes.',
    ],
    sections: [
      {
        heading: 'What’s included in a villa deep clean?',
        body: ['A genuine deep clean goes well beyond regular dusting. It typically includes:'],
        bullets: [
          'Deep sanitization of all bathrooms and kitchens',
          'Cleaning of AC vents and internal window tracks',
          'Floor scrubbing, skirting boards, doors and switches',
          'Inside cupboards and wardrobes (move-in/move-out)',
          'Removal of Dubai’s fine desert dust from every surface',
        ],
      },
      {
        heading: 'What affects villa cleaning price?',
        body: [
          'The biggest factor is size — number of bedrooms and bathrooms — followed by condition (a post-construction or long-vacant villa needs more work) and any add-ons like sofa, carpet or marble treatment. A team-based approach is used for larger villas so the job is finished in a single day.',
        ],
      },
      {
        heading: 'Move-in & move-out cleaning',
        body: [
          'For tenants, a professional move-out deep clean helps you reclaim your security deposit, as landlords and agencies in Dubai expect the property returned in pristine condition. For move-in, a deep clean gives you a fresh, sanitized home before you unpack.',
        ],
      },
    ],
    costTable: {
      title: 'Approximate villa deep cleaning prices in Dubai (2026)',
      rows: [
        { label: '2-bedroom villa / townhouse', price: 'AED 600 – 900' },
        { label: '3–4 bedroom villa', price: 'AED 900 – 1,500' },
        { label: '5+ bedroom villa', price: 'AED 1,500 – 2,500+' },
        { label: 'Post-renovation deep clean', price: 'Custom — request a survey' },
      ],
      note: 'Indicative 2026 ranges. Final price depends on size, condition and add-ons. Free quote on WhatsApp.',
    },
    faqs: [
      {
        question: 'How long does villa deep cleaning take?',
        answer:
          'Most villas are completed in one day using a team of 3–6 trained technicians. Larger or post-construction villas may take longer; we confirm timing when we quote.',
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer:
          'Not for the whole time. We recommend being available at the start and end for a quick walkthrough, but you do not need to stay throughout.',
      },
      {
        question: 'Will a move-out clean help me get my deposit back?',
        answer:
          'A professional move-out deep clean returns the villa to handover condition, which is what agencies and landlords expect — greatly improving your chances of a full deposit refund.',
      },
    ],
    relatedServices: ['villa-deep-cleaning', 'apartment-cleaning', 'marble-polishing'],
  },

  {
    slug: 'how-often-clean-sofa-carpet-dubai',
    title: 'How Often to Clean Your Sofa & Carpet in Dubai',
    h1: 'How Often Should You Clean Your Sofa & Carpet in Dubai?',
    description:
      'Dubai’s dust and humidity mean upholstery needs cleaning more often than you think. Here’s how often to deep-clean your sofa, carpet and mattress in the UAE.',
    excerpt:
      'A simple schedule for how often to deep-clean sofas, carpets and mattresses in Dubai’s dusty, humid climate.',
    image: '/images/services/carpet-cleaning.webp',
    datePublished: '2026-06-01',
    readMins: 4,
    intro: [
      'Dubai’s environment is uniquely hard on soft furnishings. Frequent sandstorms push fine dust indoors, and high humidity helps dust mites and odors thrive. That means sofas, carpets and mattresses here need professional attention more often than in cooler, drier climates. Here is a practical schedule.',
    ],
    sections: [
      {
        heading: 'Recommended cleaning frequency in the UAE',
        bullets: [
          'Sofas & upholstery — every 6 months (every 3–4 months with kids, pets or allergies).',
          'Carpets & rugs — every 6–12 months, plus spot-treat spills immediately.',
          'Mattresses — every 6 months for UV-C sanitization and dust-mite removal.',
          'Curtains — once a year, or more in high-dust areas near construction.',
        ],
      },
      {
        heading: 'Why more often than elsewhere?',
        body: [
          'Fine desert dust acts like sandpaper, grinding down fabric fibres every time you sit or walk. Humidity then traps that grime and moisture inside cushions and carpet padding, leading to musty odors and allergens. Regular professional deep cleaning removes what home vacuuming cannot, protecting both your health and your furniture investment.',
        ],
      },
      {
        heading: 'Signs it’s time to book',
        bullets: [
          'Visible dullness, stains or flattened carpet pile',
          'A musty smell that returns after airing the room',
          'Increased sneezing, congestion or skin irritation indoors',
          'It has simply been more than 6 months',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does humidity in Dubai really affect my sofa?',
        answer:
          'Yes. Humidity lets moisture and dust settle deep into upholstery, encouraging dust mites and musty odors. Professional extraction removes trapped moisture and allergens that surface vacuuming leaves behind.',
      },
      {
        question: 'Can regular cleaning extend the life of my carpet?',
        answer:
          'Absolutely. Removing abrasive sand particles prevents them from cutting carpet fibres, so professional cleaning every 6–12 months noticeably extends the life and appearance of your carpets and rugs.',
      },
    ],
    relatedServices: ['sofa-cleaning', 'carpet-cleaning', 'mattress-cleaning'],
  },

  {
    slug: 'move-out-cleaning-checklist-dubai',
    title: 'Move-Out Cleaning Checklist for Dubai Tenants',
    h1: 'Move-Out Cleaning Checklist for Dubai Tenants',
    description:
      'A complete move-out cleaning checklist for Dubai tenants — exactly what to clean to get your security deposit back, plus when to hire professionals.',
    excerpt:
      'Everything to clean before handover in Dubai — room by room — so you get your full security deposit back.',
    image: '/images/services/apartment-cleaning.webp',
    datePublished: '2026-06-01',
    readMins: 6,
    intro: [
      'Moving out of a rental in Dubai? Landlords and real-estate agencies expect the property returned in the same clean condition you received it — and your security deposit often depends on it. Use this room-by-room checklist to avoid deductions, or hand the whole job to a professional move-out cleaning team.',
    ],
    sections: [
      {
        heading: 'Kitchen',
        bullets: [
          'Degrease the stove, oven, hood and backsplash',
          'Clean inside and outside all cabinets and drawers',
          'Descale the sink and taps; wipe down the fridge inside',
          'Mop floors and clean skirting boards',
        ],
      },
      {
        heading: 'Bathrooms',
        bullets: [
          'Descale and disinfect toilet, shower, bath and taps',
          'Remove water stains from glass and mirrors',
          'Clean tile grout and exhaust vents',
          'Empty and wipe all cabinets',
        ],
      },
      {
        heading: 'Living areas & bedrooms',
        bullets: [
          'Dust and wipe AC vents, light fixtures and switches',
          'Clean inside wardrobes and built-in cupboards',
          'Clean internal window glass and tracks',
          'Spot-clean walls; deep-clean carpets or floors',
        ],
      },
      {
        heading: 'Should you hire a professional?',
        body: [
          'For most tenants, a professional move-out deep clean is worth it: it returns the property to handover standard, gives you an invoice some agencies request, and saves you days of work during a stressful move. Madinat Alhaya offers full move-out packages across Dubai with same-day availability.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do landlords in Dubai really check cleaning at handover?',
        answer:
          'Yes. Most agencies and landlords inspect the property at handover and can deduct cleaning costs from your deposit if it is not returned in clean, move-in-ready condition.',
      },
      {
        question: 'How much does move-out cleaning cost in Dubai?',
        answer:
          'It depends on property size — similar to deep-cleaning rates. A professional move-out clean is usually far cheaper than the deposit deductions you risk by skipping it. Get a free quote on WhatsApp.',
      },
    ],
    relatedServices: ['apartment-cleaning', 'villa-deep-cleaning', 'sofa-cleaning'],
  },

  {
    slug: 'carpet-cleaning-cost-dubai',
    title: 'Carpet Cleaning Cost in Dubai (2026)',
    h1: 'How Much Does Carpet Cleaning Cost in Dubai?',
    description:
      'Carpet & rug cleaning prices in Dubai for 2026 — by size and method (steam vs dry), what affects the cost, and how to protect rugs from desert dust. Free quote.',
    excerpt:
      'Carpet & rug cleaning prices in Dubai, steam vs dry cleaning, and how to protect rugs from desert dust.',
    image: '/images/services/carpet-cleaning.webp',
    datePublished: '2026-06-01',
    readMins: 5,
    intro: [
      'Carpets and rugs in Dubai take a beating from fine desert sand and humidity. Professional cleaning not only refreshes their look but protects your investment — especially for delicate Persian and wool rugs. Here is what carpet cleaning costs in Dubai in 2026 and how the methods differ.',
    ],
    sections: [
      {
        heading: 'Steam cleaning vs dry cleaning — which do you need?',
        body: [
          'Steam (hot-water extraction) is the most thorough method: it injects hot water and solution deep into the pile, then extracts dirt, allergens and moisture. It suits most synthetic and wall-to-wall carpets. Dry cleaning uses minimal moisture and is better for delicate natural fibres or rugs that cannot be soaked, like fine wool and silk Persians.',
        ],
      },
      {
        heading: 'What affects the price?',
        bullets: [
          'Area in square metres (or rug size)',
          'Fibre type — synthetic vs wool/silk Persian',
          'Stains, pet accidents or odor treatment',
          'On-site cleaning vs take-away rug cleaning',
        ],
      },
      {
        heading: 'Protecting carpets between cleans',
        body: [
          'Vacuum at least weekly, deal with spills immediately (blot, don’t rub), use doormats to catch sand, and rotate rugs to even out wear. Even with good care, a professional deep clean every 6–12 months is recommended in Dubai’s dusty climate.',
        ],
      },
    ],
    costTable: {
      title: 'Approximate carpet & rug cleaning prices in Dubai (2026)',
      rows: [
        { label: 'Small rug (up to 5 m²)', price: 'AED 80 – 150' },
        { label: 'Medium carpet (per m²)', price: 'AED 8 – 15 / m²' },
        { label: 'Wool / Persian rug (per m²)', price: 'AED 20 – 35 / m²' },
        { label: 'Carpet + sofa bundle', price: 'Discounted — ask on WhatsApp' },
      ],
      note: 'Indicative 2026 ranges; final price depends on size, fibre and condition. Free quote on WhatsApp.',
    },
    faqs: [
      {
        question: 'How long does carpet take to dry after cleaning?',
        answer:
          'With professional extraction, most carpets are dry within 3–6 hours depending on thickness and ventilation. We use high-extraction equipment to speed drying and prevent mold in Dubai’s humidity.',
      },
      {
        question: 'Can you clean Persian and wool rugs safely?',
        answer:
          'Yes. Delicate wool and silk Persian rugs are cleaned with low-moisture, pH-balanced methods to protect the fibres and colours. We assess each rug before choosing the method.',
      },
    ],
    relatedServices: ['carpet-cleaning', 'sofa-cleaning'],
  },

  {
    slug: 'marble-polishing-dubai-guide',
    title: 'Marble Polishing in Dubai: Cost & Process',
    h1: 'Marble Polishing in Dubai: Cost, Process & Restoring Shine',
    description:
      'Everything about marble polishing in Dubai — what it costs in 2026, the difference between polishing and crystallization, and how to restore dull or scratched marble floors.',
    excerpt:
      'What marble polishing costs in Dubai, polishing vs crystallization, and how to bring dull floors back to a mirror shine.',
    image: '/images/services/marble-polishing.webp',
    datePublished: '2026-06-01',
    readMins: 5,
    intro: [
      'Marble floors give Dubai homes a luxurious look — but they are porous and scratch easily, dulling over time from foot traffic, sand and acidic spills. Professional marble polishing restores that mirror-like shine. Here’s how the process works and what it costs in 2026.',
    ],
    sections: [
      {
        heading: 'Polishing vs re-crystallization',
        body: [
          'Standard polishing uses progressively finer diamond pads to grind out scratches and restore the stone’s natural surface. Re-crystallization goes a step further — a chemical-and-heat process that creates a hard, high-gloss, durable protective layer. For high-traffic areas and a long-lasting mirror finish, crystallization is the premium choice.',
        ],
      },
      {
        heading: 'The professional process',
        bullets: [
          'Assessment of stone type and damage',
          'Grinding to remove deep scratches and lippage',
          'Honing to a smooth, even surface',
          'Polishing / re-crystallization for shine',
          'Sealing to protect against future stains',
        ],
      },
      {
        heading: 'Is the process messy?',
        body: [
          'No. We use a wet polishing method with advanced machinery that keeps dust to a minimum, so your home stays clean throughout the restoration.',
        ],
      },
    ],
    costTable: {
      title: 'Approximate marble polishing prices in Dubai (2026)',
      rows: [
        { label: 'Standard polishing (per m²)', price: 'AED 12 – 25 / m²' },
        { label: 'Re-crystallization (per m²)', price: 'AED 20 – 40 / m²' },
        { label: 'Stain / etch mark removal', price: 'Custom — request a survey' },
        { label: 'Full villa floor restoration', price: 'Custom package' },
      ],
      note: 'Indicative 2026 ranges; price depends on area, stone condition and finish. Free site survey available.',
    },
    faqs: [
      {
        question: 'Can dull, scratched marble really be restored?',
        answer:
          'Yes. Diamond grinding and polishing removes scratches and etch marks, restoring the marble’s original shine. Re-crystallization then adds a durable, glossy protective finish.',
      },
      {
        question: 'How often should marble floors be polished in Dubai?',
        answer:
          'High-traffic areas benefit from polishing every 12–18 months, while sealing every 1–2 years helps protect against stains and dulling from sand and spills.',
      },
    ],
    relatedServices: ['marble-polishing', 'villa-deep-cleaning'],
  },
]

export const blogPosts: BlogPost[] = [
  ...handWrittenBlogPosts,
  ...(generatedPosts as BlogPost[]),
]

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug)
