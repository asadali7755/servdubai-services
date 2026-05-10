export type ServiceCategory = 'domestic' | 'commercial' | 'specialized'

export interface ExternalWebsite {
  name: string
  url: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ContentSection {
  headingLevel?: 'h2' | 'h3'
  heading?: string
  text?: string
}

export interface Service {
  id: string
  name: string
  heroTitle?: string
  heroSubtitle?: string
  slug: string
  category: ServiceCategory
  shortDescription: string
  fullDescription: string
  contentSections?: ContentSection[]
  benefits: string[]
  process: string[]
  faqs: ServiceFAQ[]
  images: string[]
  availableInEmirates: string[]
  externalWebsite?: ExternalWebsite
}

const ALL_EMIRATES = ['dubai', 'sharjah', 'abu-dhabi', 'ajman', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain']

export const services: Service[] = [
  {
    id: 'sofa-cleaning',
    name: 'Sofa Deep Cleaning & Shampooing',
    heroTitle: 'Sofa Deep Cleaning Services',
    heroSubtitle: 'Looking for the best sofa cleaning services Dubai has to offer? Our professional upholstery service removes stains, allergens, and odors using advanced pH-balanced technology. Book now!',
    slug: 'sofa-cleaning',
    category: 'domestic',
    shortDescription: 'Best professional sofa cleaning services in Dubai, Abu Dhabi & Sharjah. Expert upholstery shampooing at home — removes stains, odors & allergens. Same-day service across UAE.',
    fullDescription: `The Ultimate Guide to Reviving Your Upholstery

In a city like Dubai, where golden sands and desert winds are part of daily life, our homes often bear the brunt of the environment. While we focus on floors and windows, one of the most used items in any household — the sofa — is often the most neglected.

Whether you are dealing with dust from a summer sandstorm, coffee spills, or just general wear and tear, professional sofa deep cleaning and shampooing in Dubai is no longer a luxury; it is a necessity for a healthy, dust-free home.

Why Your Sofa Needs More Than Just a Surface Vacuum

In Dubai's high-humidity environment, sofas act like giant filters, trapping dust mites, allergens, and microscopic pollutants. Standard home vacuuming only reaches the surface, leaving deep-seated grime untouched. Our sofa cleaning services Dubai residents rely on use advanced hot-water extraction technology that penetrates deep into every fiber — removing what ordinary vacuuming simply cannot reach.

Health and Indoor Air Quality

Deep cleaning removes allergens that can trigger asthma or skin sensitivities. For families with children and pets, our professional sofa cleaning services ensure that the heart of your living room is hygienic and safe. Our upholstery sofa cleaning services in Dubai use non-toxic, eco-friendly products that are completely safe for children and pets.

Extending the Life of Your Furniture

Upholstery is an investment. Dust particles act like tiny sandpaper, grinding down fabric fibers every time you sit. Our professional sofa cleaning services at home remove these abrasive particles, preserving the fabric's integrity for years. Whether you need fabric sofa cleaning services near you or best sofa cleaning services in Abu Dhabi, our certified technicians deliver consistent results.

Eliminating Stubborn Odors

Dubai's heat can sometimes lead to trapped moisture and musty smells within sofa cushions. Our professional-grade deodorizers and shampooing treatments neutralize these odors at the source — not just masking them. This is why residents across Dubai, Sharjah, and Abu Dhabi trust Al Haya for their sofa cleaning services.

Our Sofa Cleaning Services Cover All UAE Emirates

Al Haya provides the best sofa cleaning services Dubai, Abu Dhabi, Sharjah, and across all 7 UAE Emirates. Our sofa cleaning services Dubai team is available 7 days a week with same-day booking. We offer carpet sofa cleaning services as a package deal, covering both your sofas and carpets in a single visit. Our sofa cleaning services cost is transparent — no hidden charges, free quotes via WhatsApp.

We handle all sofa types: L-shaped, sectional, 3-seater, corner sofas, fabric recliners, velvet sofas, leather sofas, and modular configurations. Our quick-dry technology means your sofa is ready to use within 3–4 hours after our professional sofa cleaning services at home.`,
    benefits: [
      '#1 sofa cleaning services Dubai & Abu Dhabi — trusted by 500+ clients',
      'Professional sofa cleaning services at home — we come to you',
      'Removes deep stains, odors, dust mites & allergens',
      'Safe for all fabrics — velvet, microfiber, leather, cotton',
      'Eco-friendly products safe for children and pets',
      'Transparent sofa cleaning services cost — free quotes',
      'Same-day service across all UAE Emirates',
      'Carpet sofa cleaning services available as a package',
    ],
    process: [
      'Pre-inspection — fabric type and stain assessment',
      'Pre-treatment spray to loosen embedded dirt and oils',
      'Hot-water extraction (professional deep shampooing)',
      'Stain spot treatment for stubborn marks',
      'Speed-dry with professional air movers (3–4 hours)',
      'Optional fabric protector application',
    ],
    faqs: [
      {
        question: 'How much does sofa cleaning cost in Dubai?',
        answer: 'Sofa cleaning prices in Dubai typically vary based on the size of the sofa (number of seats) and the material. Most professional services charge per seat, with additional costs for specialized treatments like leather conditioning or heavy stain removal.',
      },
      {
        question: 'Is sofa shampooing better than steam cleaning?',
        answer: 'Shampooing is highly effective for removing deep-seated grime and stubborn stains from fabric sofas. Steam cleaning is excellent for sanitization and killing dust mites. For the best results in Dubai\'s dusty environment, a combination of deep shampooing and high-pressure extraction is recommended.',
      },
      {
        question: 'How long does a sofa take to dry after professional cleaning?',
        answer: 'In Dubai\'s indoor climate, a sofa typically takes 4 to 8 hours to dry completely after a professional deep clean. Factors like fabric thickness, humidity, and airflow (AC usage) can influence this, with some heavy fabrics taking up to 12 hours.',
      },
      {
        question: 'Can professional cleaning remove all stains from a couch?',
        answer: 'While professional technicians use specialized enzymes and pH-balanced cleaners to treat ink, grease, and food spills, the success depends on the age of the stain and the fabric type. Pre-treating stains and avoiding DIY chemicals increases the likelihood of 100% removal.',
      },
      {
        question: 'How often should I get my sofa professionally cleaned in Dubai?',
        answer: 'Due to the high amount of dust and sand in the UAE, we recommend a professional deep clean every 6 to 12 months. If you have children, pets, or allergy sufferers in the home, a cleaning every 4 months is ideal to maintain indoor air quality.',
      },
      {
        question: 'Are the cleaning chemicals safe for my family and pets?',
        answer: 'Yes. We use eco-friendly, non-toxic cleaning solutions that are specifically designed for home use. Our high-pressure extraction process ensures that no soapy residue is left behind in the fabric fibers.',
      },
      {
        question: 'Do you clean the sofa at my location or take it to a facility?',
        answer: 'Our service is fully mobile. We bring industrial-grade extraction machinery and all necessary supplies to your home or office. The cleaning is performed on-site for your convenience, and the sofa remains in place throughout the process.',
      },
      {
        question: 'Can you clean delicate fabrics like velvet or silk?',
        answer: 'Absolutely. Our technicians are trained to identify fabric types before starting. For delicate materials, we use specialized low-moisture techniques and pH-neutral cleaners to ensure the fabric is cleaned thoroughly without any risk of browning, shrinking, or dye bleeding.',
      },
      {
        question: 'Do I need to do anything to prepare for the cleaning?',
        answer: 'We suggest clearing any small items or breakables from the area surrounding the sofa. Our team will handle the pre-vacuuming and furniture moving if necessary to ensure every inch of the upholstery is reached.',
      },
    ],
    contentSections: [
      {
        headingLevel: 'h2',
        heading: 'Why Your Dubai Home Needs Professional Sofa Cleaning',
        text: 'In Dubai\'s environment — desert dust, high humidity, and year-round AC — your sofa accumulates allergens, bacteria, and grime far faster than in temperate climates. Professional sofa cleaning services in Dubai goes beyond surface appearances to deliver a genuinely hygienic living space.',
      },
      {
        headingLevel: 'h3',
        heading: 'Combating Desert Dust and Micro-Allergens',
        text: 'Fine desert sand and dust mites accumulate deep within sofa fibers, directly impacting indoor air quality. Our sofa cleaning services Dubai use hot-water extraction to remove these micro-allergens at the source — improving breathing and reducing asthma and allergy triggers for your entire family.',
      },
      {
        headingLevel: 'h3',
        heading: 'Removing Stubborn Stains and Deep-Seated Grime',
        text: 'Coffee spills, food stains, sweat residue, and pet marks penetrate deep into upholstery fibers. Our sofa cleaning services use enzyme-based pre-treatment and professional extraction to restore your sofa\'s original appearance — removing stains that surface cleaning cannot touch.',
      },
      {
        headingLevel: 'h3',
        heading: 'Extending the Life of Your Luxury Furniture',
        text: 'Abrasive sand particles embedded in sofa fibers act like sandpaper — grinding down the fabric with every use. Regular professional sofa cleaning services in Dubai removes these particles, preserving fabric integrity and extending the life of your furniture investment significantly.',
      },
      {
        headingLevel: 'h2',
        heading: 'Our Specialized Sofa Cleaning Process',
        text: 'Al Haya\'s sofa cleaning services Dubai use a multi-stage process tailored to your specific fabric type and soiling level — delivering results far beyond what any home cleaning method can achieve.',
      },
      {
        headingLevel: 'h3',
        heading: 'Deep Steam Cleaning for Sanitization',
        text: 'Our sofa steam cleaning Dubai uses high-temperature steam extraction that penetrates deep into upholstery fibers — killing 99.9% of bacteria, dust mites, and mold spores without harsh chemicals. The gold standard for sofa sanitization in Dubai, Abu Dhabi, and Sharjah.',
      },
      {
        headingLevel: 'h3',
        heading: 'Shampoo & Fabric Extraction',
        text: 'Our specialist shampoo combined with professional hot-water extraction delivers deep dirt removal for all fabric sofa types. Pre-treatment spray breaks down oils and food residue before the extraction process flushes all contaminants out — leaving your sofa fresh and odor-free.',
      },
      {
        headingLevel: 'h3',
        heading: 'Leather Sofa Conditioning & Care',
        text: 'Leather sofa cleaning Dubai requires specialist pH-neutral cleaners that remove body oils and grime without stripping the finish. We follow with a conditioning treatment that restores suppleness and UV protection — essential in Dubai\'s heat to prevent cracking and fading.',
      },
      {
        headingLevel: 'h3',
        heading: 'Eco-Friendly & Pet-Safe Disinfection',
        text: 'All sofa cleaning services products are Dubai Municipality approved, non-toxic, and biodegradable — completely safe for children, babies, and pets. Our processes align with eco-friendly cleaning standards for a healthy home environment.',
      },
      {
        headingLevel: 'h2',
        heading: 'Sofa Cleaning Prices in Dubai: What to Expect',
        text: 'Our sofa cleaning services Dubai cost is fully transparent — no surprises, no hidden charges. Free quotes available via WhatsApp.',
      },
      {
        headingLevel: 'h3',
        heading: 'Factors Influencing Sofa Cleaning Service Rates',
        text: 'Sofa cleaning cost Dubai depends on: number of seats, fabric type (fabric vs leather vs velvet vs Alcantara), level of soiling, and whether additional treatments like fabric protector or deodorization are required.',
      },
      {
        headingLevel: 'h3',
        heading: 'Current Price Guide for Fabric and Leather Sofas',
        text: 'Sofa cleaning services Dubai starts from AED 150 for a 3-seater fabric sofa. Leather sofas, L-shaped, and sectional sofas are priced based on seating count. Our sofa cleaning services Abu Dhabi and Sharjah follow the same competitive pricing structure.',
      },
      {
        headingLevel: 'h2',
        heading: 'Serving All Major Areas Across Dubai',
        text: 'Our sofa cleaning services Dubai teams cover every community — from high-rise apartments to luxury villas.',
      },
      {
        headingLevel: 'h3',
        heading: 'From Dubai Marina and JBR to Downtown Dubai',
        text: 'Professional sofa cleaning services in Dubai Marina, JBR, Jumeirah Beach Residence, Downtown Dubai, Business Bay, DIFC, Deira, Al Qusais, and all surrounding areas. Same-day sofa cleaning services near me available.',
      },
      {
        headingLevel: 'h3',
        heading: 'Premium Service in Palm Jumeirah, Emirates Hills, and Dubai Hills',
        text: 'Our sofa cleaning services Dubai cover Palm Jumeirah, Emirates Hills, Dubai Hills Estate, Arabian Ranches, The Springs, Jumeirah, Al Barsha, Mirdif, and all villa communities. We also cover sofa cleaning services Abu Dhabi and Sharjah.',
      },
      {
        headingLevel: 'h2',
        heading: 'Why Choose Al Haya for Sofa Deep Cleaning in Dubai?',
        text: 'Al Haya is the trusted sofa cleaning services Dubai provider with 500+ satisfied residential and commercial clients across UAE.',
      },
      {
        headingLevel: 'h3',
        heading: 'Certified Technicians and Advanced Equipment',
        text: 'All Al Haya sofa cleaning technicians are trained, background-checked, and equipped with industrial-grade hot-water extraction machines and professional sofa cleaning products — far beyond any household cleaning method.',
      },
      {
        headingLevel: 'h3',
        heading: '100% Satisfaction Guarantee or Re-Clean',
        text: 'Not satisfied with your sofa cleaning services? We come back and re-clean at no extra charge. Our 100% satisfaction guarantee applies to every sofa cleaning service Dubai, Abu Dhabi, and Sharjah booking.',
      },
      {
        headingLevel: 'h3',
        heading: 'Same-Day Booking and Transparent Pricing',
        text: 'Need sofa cleaning services near me urgently? Same-day sofa cleaning services Dubai available across most areas. Transparent pricing — get a free quote via WhatsApp in minutes. No estimates that change upon arrival.',
      },
    ],
    images: ['/images/services/sofa-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Sofa Shampooing Dubai', url: 'https://sofashampooingdubai.com' },
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning & Shampooing',
    heroTitle: 'Professional Carpet Cleaning Services UAE & Dubai',
    heroSubtitle: 'Our carpet cleaning services UAE use deep steam extraction to remove desert sand, allergens & tough stains. Book carpet cleaning services in Dubai, Abu Dhabi & Sharjah — eco-friendly, safe for kids & pets. Same-day service available!',
    slug: 'carpet-cleaning',
    category: 'domestic',
    shortDescription: 'Best carpet cleaning services UAE — trusted carpet cleaner Dubai for sofa carpet cleaning, dry carpet cleaning services & professional carpet cleaning services in Sharjah. Affordable carpet cleaning services UAE — safe for kids & pets. Book today!',
    fullDescription: `The Ultimate Guide to a Dust-Free Home

In the United Arab Emirates, your carpet is more than just a floor covering — it is a centerpiece of home aesthetics and comfort. However, between the sweeping desert sand and the high humidity of coastal cities like Dubai and Abu Dhabi, maintaining that showroom look is a unique challenge. Our carpet cleaning services UAE use deep steam extraction to tackle what the climate throws at your carpets every day.

Why UAE Carpets Need Specialized Care

The UAE's desert climate means that fine sand and dust particles find their way into homes through the smallest crevices and AC vents. Research shows that carpets in the UAE collect dirt up to three times faster than those in more temperate regions. This is why carpet cleaning services in Dubai are in such high demand — standard vacuuming simply is not enough.

The Sand Accumulation Factor

Standard household vacuums often only reach the surface. Over time, heavy sand particles sink deep into the carpet fibers, acting like sandpaper that grinds down the weave every time you walk on it. Our carpet cleaning services Dubai teams use industrial-grade hot water extraction machines that flush out this deep-settled sand completely — restoring the carpet pile and extending the life of your flooring.

Humidity and Allergens

High humidity levels can trap moisture within thick carpet piles, creating a breeding ground for dust mites and mold. For residents suffering from asthma or allergies, professional carpet cleaning services in Abu Dhabi and Dubai is not a luxury — it is a health necessity. Our sofa and carpet cleaning services Dubai package addresses both upholstery and flooring in a single visit.

Carpet Shampooing vs Steam Extraction

Carpet shampooing is ideal for surface-level stains and refreshing the appearance of a rug. It uses a motorized brush and foam to lift dirt, though it may require longer drying times. Steam extraction (hot water extraction) is superior for carpet cleaning in Dubai — it removes fine desert sand, dust mites, and allergens at a deep level that shampooing alone cannot reach. Our professional carpet cleaning services combine both methods for the best results.

Our Carpet Cleaning Services Cover All UAE

Al Haya is the best carpet cleaning company Dubai residents and businesses trust. We provide carpet cleaning services in Dubai, carpet cleaning services in Abu Dhabi, and professional carpet cleaning services in Sharjah across all 7 UAE Emirates. Whether you need home carpet cleaning services, office carpet cleaning services, commercial carpet cleaning services, or house cleaning and carpet cleaning services together — our certified teams deliver consistent results.

We also offer sofa carpet cleaning Dubai and carpet and sofa cleaning Dubai as a combined package, saving you time and cost. Our dry carpet cleaning services use low-moisture techniques ideal for delicate rugs and quick-turnaround commercial spaces. As an affordable carpet cleaning services provider, we keep our pricing transparent — no hidden charges, free quotes via WhatsApp.

A clean carpet is the foundation of a healthy UAE home. By investing in carpet cleaning services UAE every few months, you are not just protecting your investment — you are ensuring the air your family breathes is free from the desert's dust and allergens. Book our carpet cleaning services UAE today and experience the difference a professional carpet cleaner Dubai makes.`,
    benefits: [
      'Best carpet cleaning services in Dubai from AED 75 — affordable carpet cleaning services',
      'Trusted carpet cleaner Dubai — 500+ satisfied clients',
      'Professional carpet cleaning services in Sharjah, Abu Dhabi & all UAE',
      'Sofa carpet cleaning Dubai & carpet and sofa cleaning Dubai packages',
      'Dry carpet cleaning services for delicate rugs & quick turnaround',
      'Home, office & commercial carpet cleaning services available',
      'Eco-friendly, non-toxic — safe for kids and pets',
      'House cleaning and carpet cleaning services in one visit',
    ],
    process: [
      'Pre-inspection — carpet type, fiber, and stain assessment',
      'Dry vacuum to remove loose sand and surface debris',
      'Pre-treatment spray for stains and deep-settled grime',
      'Hot-water steam extraction (industrial-grade machines)',
      'Spot treatment for stubborn or old stains',
      'Speed-dry — carpet ready in 1–2 hours',
    ],
    faqs: [
      {
        question: 'How much does carpet cleaning cost in Dubai?',
        answer: 'Professional carpet cleaning in Dubai typically starts from AED 30 per square meter or flat rates beginning at AED 75 for small rugs. Prices vary based on the carpet material (silk vs. synthetic) and the level of staining. We provide free quotes for all carpet cleaning services Dubai.',
      },
      {
        question: 'What is the best carpet cleaning method for the UAE climate?',
        answer: 'Steam Cleaning (Hot Water Extraction) is the most effective method for UAE homes. It is superior at extracting fine desert sand and dust mites that settle deep into the pile, which standard vacuuming cannot reach. Our carpet cleaning services in Dubai use this method as standard.',
      },
      {
        question: 'Is professional deep cleaning worth it in Dubai?',
        answer: 'Yes. While some general cleaners only offer surface-level results, a professional carpet cleaning service Dubai uses mechanical pile lifting and high-pressure extraction to improve indoor air quality and extend the life of your carpet by removing abrasive sand.',
      },
      {
        question: 'How long does a carpet take to dry after cleaning?',
        answer: 'Using professional-grade extraction machines, carpets in the UAE typically dry within 1 to 2 hours. This rapid drying prevents mold growth, which is a common concern in the region\'s high humidity. Our carpet cleaning services in Abu Dhabi and Dubai use the same fast-dry equipment.',
      },
      {
        question: 'How often should I have my carpets professionally cleaned in the UAE?',
        answer: 'Due to frequent sandstorms and high AC usage, we recommend professional carpet cleaning services every 3 to 4 months. This prevents sand from grinding down the fibers and keeps your indoor air free of allergens.',
      },
      {
        question: 'Do you clean the carpets at my home or take them away?',
        answer: 'Our carpet cleaning services are fully mobile — we bring industrial-grade equipment to your doorstep. You can use your space again just 1–2 hours after the carpet cleaning service Dubai is completed.',
      },
      {
        question: 'Are the cleaning chemicals safe for children and pets?',
        answer: 'Absolutely. We use non-toxic, biodegradable cleaning agents approved for home use. They are designed to be tough on stains but completely safe for sensitive family members and pets — used across all our carpet cleaning services in Dubai and Abu Dhabi.',
      },
      {
        question: 'Can you remove old stains and foul odors?',
        answer: 'Yes. Our deep extraction removes the source of odors — bacteria and mold — rather than just masking them. While we can remove most organic and oil-based stains, we recommend treating spills quickly for the best results from our carpet cleaning services.',
      },
      {
        question: 'Do you serve areas outside of Dubai?',
        answer: 'Yes. Our carpet cleaning services cover Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and Umm Al Quwain. We provide carpet cleaning services near me across all 7 UAE Emirates with the same high standards.',
      },
    ],
    images: ['/images/services/carpet-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Carpet Cleaning Dubai', url: 'https://carpetcleaningdubai.com' },
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Deep Cleaning',
    heroTitle: 'Professional Mattress Cleaning in Dubai | Top-Rated Deep Cleaning',
    heroSubtitle: 'Top-rated mattress cleaning services Dubai — eliminates dust mites, allergens & bacteria. Expert mattress cleaning services Dubai available near me across all UAE. Safe for kids & pets. Book today!',
    slug: 'mattress-cleaning',
    category: 'domestic',
    shortDescription: 'Best mattress cleaning services Dubai — eliminate 99.9% dust mites, bacteria & stains. Professional mattress cleaning services Dubai from AED 150. Book your sanitization today!',
    fullDescription: `The Ultimate Guide to a Healthier Sleep

In a city as vibrant and fast-paced as Dubai, quality sleep is your most valuable asset. However, while you might diligently wash your linens, the mattress beneath them often becomes a forgotten reservoir for allergens and debris. With Dubai's unique combination of fine desert dust, high humidity, and constant AC usage, a standard vacuum is not enough to maintain a truly hygienic sleep environment. Professional mattress deep cleaning in Dubai is no longer a luxury — it is a health necessity. Whether you are searching for mattress cleaning services Dubai or a trusted mattress deep cleaner, Al Haya delivers results.

The Invisible Guests in Your Bed

A mattress is one of the most biologically active items in a home. Every night, the average person sheds approximately 15 million skin cells. Over the lifespan of a mattress, this can total up to 1.5 kilograms of organic matter. A single used mattress can harbor anywhere from 100,000 to 10 million microscopic dust mites. It is not the mites themselves that cause issues, but their fecal matter and body fragments — which contain enzymes that are primary triggers for asthma, eczema, and morning congestion.

Why Professional Mattress Cleaning is Essential in the UAE

While DIY methods like baking soda or home vacuuming can manage surface odors, they rarely reach the core of the problem. Our professional mattress deep cleaning services in Dubai utilize industrial-grade mattress deep cleaning machines designed to sanitize deep within the fabric layers. Our deep cleaning mattress vacuum uses HEPA filtration for complete allergen removal — a true deep cleaning of mattress from surface to core.

Advanced Steam Sanitization

High-temperature steam cleaning is the gold standard for mattress hygiene. It effectively kills 99.9% of bacteria and dust mites without the need for harsh chemicals — making it completely safe for children and pets. Our mattress cleaning Dubai service uses this method as standard.

Specialized Stain Removal

Whether it is perspiration stains (common in Dubai's warmer climate) or accidental spills, our technicians use pH-balanced, eco-friendly cleaning agents that break down organic stains without damaging the mattress fibers or leaving behind toxic residues.

High-Power HEPA Filtration

Industrial vacuums with HEPA filters capture particles as small as 0.3 microns — ensuring that dust and allergens are removed from the room entirely rather than being redistributed into the air.

Our Mattress Deep Cleaning Process

Our mattress deep cleaning service follows a rigorous four-step protocol: industrial vacuuming to remove surface dust and debris, targeted spot treatment for stubborn stains, deep mattress cleaning steam sanitization to eliminate pathogens and allergens, and deodorizing to neutralize odors and prevent mold growth. We also offer sofa carpet mattress deep cleaning in Dubai as a combined package — covering all upholstery in one visit.

Frequency and Pricing in Dubai

For optimal health, professional mattress deep cleaning every 6 months is recommended. In Dubai, professional mattress cleaning services range from AED 150 to AED 250 depending on size (Single, Queen, or King) and the level of sanitization required. Al Haya provides mattress deep cleaning across all 7 UAE Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ.

Investing in mattress deep cleaning is an investment in your long-term respiratory health and sleep quality. By removing millions of microscopic irritants, you transform your bedroom back into the sanctuary it was meant to be.`,
    benefits: [
      'Mattress deep cleaning Dubai from AED 150 — transparent pricing',
      'Sofa and mattress deep cleaning package — save on combined booking',
      'Industrial mattress deep cleaning machine with HEPA filtration',
      'Deep cleaning mattress vacuum removes 0.3 micron particles',
      'Mattress deep cleaning services near me — all 7 UAE Emirates',
      'Kills 99.9% dust mites — deep cleaning of mattress guaranteed',
      'pH-balanced eco-friendly products — safe for kids & pets',
      'Sofa carpet mattress deep cleaning in Dubai in one visit',
    ],
    process: [
      'Industrial vacuum — removes surface dust, hair & loose debris',
      'Targeted spot treatment for stubborn & organic stains',
      'Deep steam sanitization — kills pathogens & allergens',
      'HEPA extraction — removes particles as small as 0.3 microns',
      'Deodorizing & moisture-free drying to prevent mold',
      'Final inspection — mattress ready in 2–4 hours',
    ],
    faqs: [
      {
        question: 'Is it worth getting a mattress professionally cleaned?',
        answer: 'Yes. Professional mattress deep cleaning uses industrial-strength steam and HEPA vacuums that penetrate deeper than household equipment, effectively removing millions of dust mites and deep-seated organic matter that cause allergies, asthma, and morning congestion.',
      },
      {
        question: 'How much do mattress cleaning services Dubai cost?',
        answer: 'Mattress cleaning services Dubai range from AED 150 for a single bed to AED 250 for a king-size bed, depending on sanitization level and stain treatment required. Pricing is fully transparent — free quotes via WhatsApp.',
      },
      {
        question: 'How long does it take for a mattress to dry after steam cleaning?',
        answer: 'With professional-grade extraction tools, a mattress typically takes 4 to 8 hours to dry completely. Using a fan or AC can significantly speed up this process. Our mattress deep cleaning machine minimizes moisture for faster drying.',
      },
      {
        question: 'Can professionals remove old yellow stains from a mattress?',
        answer: 'Yes. Our professional technicians use pH-balanced enzyme cleaners specifically designed to break down proteins in perspiration and body oils — the primary causes of yellowing. Most old yellow stains are significantly reduced or fully removed.',
      },
      {
        question: 'How often should I have my mattress professionally cleaned?',
        answer: 'For optimal hygiene and to manage allergies, have your mattress professionally deep cleaned every 6 months. If you have pets or suffer from asthma in Dubai\'s dusty environment, quarterly mattress deep cleaning is ideal.',
      },
      {
        question: 'Are the cleaning chemicals safe for children and pets?',
        answer: 'Yes. We use eco-friendly, non-toxic, biodegradable cleaning solutions. Our mattress deep cleaning service relies on high-temperature steam rather than harsh chemicals — completely safe for children, babies, and pets.',
      },
      {
        question: 'Can you clean a memory foam mattress without damaging it?',
        answer: 'Absolutely. We use specialized low-moisture techniques for memory foam and latex mattresses — sanitizing thoroughly without oversaturating the delicate internal structures. Our mattress deep cleaning services near me cover all mattress types.',
      },
      {
        question: 'Do I need to prepare anything before the mattress cleaning team arrives?',
        answer: 'We ask that you remove all bed linens and pillows before the technicians arrive. Our team handles the heavy lifting if the mattress needs to be rotated or moved during the deep cleaning of mattress process.',
      },
      {
        question: 'Does mattress cleaning help with morning congestion?',
        answer: 'Yes. Morning congestion is often caused by a reaction to dust mite excrement found in the mattress. By removing these allergens through sofa carpet mattress deep cleaning in Dubai, most users report significant improvement in breathing and air quality.',
      },
    ],
    contentSections: [
      {
        headingLevel: 'h2',
        heading: 'Why Your Mattress Needs More Than Just Clean Sheets',
        text: 'While clean bed linens create the illusion of a hygienic sleep environment, the mattress beneath them silently accumulates years of biological matter. In Dubai\'s unique climate — fine desert dust, high humidity, and constant AC usage — this problem is accelerated far beyond what most homeowners realize.',
      },
      {
        headingLevel: 'h3',
        heading: 'The Hidden Reality: Dust Mites, Bacteria, and Skin Cells',
        text: 'Every night you shed approximately 15 million skin cells — totaling up to 1.5 kilograms of organic matter over a mattress\'s lifetime. This feeds colonies of 100,000 to 10 million dust mites living deep within the mattress layers. A standard vacuum cannot reach them. Only professional mattress deep cleaning Dubai services with industrial-grade equipment can.',
      },
      {
        headingLevel: 'h3',
        heading: 'How a Dirty Mattress Affects Your Health',
        text: 'Dust mite excrement and body fragments contain enzymes that are primary triggers for asthma, eczema, morning congestion, and skin irritations. Residents who wake up with blocked sinuses or unexplained allergies are often reacting to what is inside their mattress — not the air in their room.',
      },
      {
        headingLevel: 'h2',
        heading: 'Our Comprehensive 4-Step Mattress Deep Cleaning Process',
        text: 'Al Haya\'s mattress deep cleaning service follows a rigorous protocol developed for the UAE climate — combining industrial equipment with eco-friendly solutions for a result that goes far beyond surface cleaning.',
      },
      {
        headingLevel: 'h3',
        heading: 'Step 1: Industrial-Strength HEPA Vacuuming',
        text: 'Our mattress deep cleaning machine uses HEPA filtration capturing particles as small as 0.3 microns — removing surface debris, hair, fine desert dust, and loose allergens that standard household vacuums completely miss.',
      },
      {
        headingLevel: 'h3',
        heading: 'Step 2: Targeted Stain and Odor Neutralization',
        text: 'Specialized pH-balanced enzyme treatment breaks down perspiration stains, spills, and organic matter. Our mattress cleaning services Dubai are designed for the warmer climate where sweat stains are more common.',
      },
      {
        headingLevel: 'h3',
        heading: 'Step 3: High-Temperature Steam Sanitization',
        text: 'Using 100°C+ steam, our deep mattress cleaning kills 99.9% of bacteria, dust mites, mold spores, and pathogens deep within the mattress layers — without harsh chemicals. Safe for children, babies, and pets.',
      },
      {
        headingLevel: 'h3',
        heading: 'Step 4: Moisture Extraction and Deodorizing',
        text: 'Professional extraction removes all moisture after steam treatment. A fresh deodorizer neutralizes odors at the source. Your mattress is ready for use within 4–8 hours — not days.',
      },
      {
        headingLevel: 'h2',
        heading: 'The Advantages of Professional Cleaning in the Dubai Climate',
        text: 'Dubai\'s environment creates unique challenges for mattress hygiene that require a specialized approach not needed in temperate climates.',
      },
      {
        headingLevel: 'h3',
        heading: 'Combating Desert Dust and Humidity',
        text: 'Fine desert sand enters through AC vents and settles deep in mattress fibers. Combined with humidity, this creates ideal conditions for mold and dust mite growth. Our mattress deep cleaning services near me are specifically effective for UAE desert conditions.',
      },
      {
        headingLevel: 'h3',
        heading: 'Extending the Lifespan of Your Mattress',
        text: 'Regular deep cleaning of mattress preserves the integrity of foam, memory foam, and spring structures. Removing abrasive sand particles prevents fiber breakdown — protecting your investment for years longer.',
      },
      {
        headingLevel: 'h2',
        heading: 'Professional Deep Cleaning vs. DIY Methods',
        text: 'Many Dubai residents attempt baking soda treatments or home vacuuming between professional cleans. While useful for maintenance, these methods cannot substitute for industrial deep mattress cleaning.',
      },
      {
        headingLevel: 'h3',
        heading: 'Why Household Vacuums and Baking Soda Are Not Enough',
        text: 'Household vacuums reach only the surface layer. Baking soda absorbs surface odors but does nothing for dust mites or bacteria living 2–3 cm inside the mattress. Only a professional mattress deep cleaner with industrial suction and steam can address the core problem.',
      },
      {
        headingLevel: 'h3',
        heading: 'Safe, Eco-Friendly, and Chemical-Free Solutions',
        text: 'Our sofa and mattress deep cleaning services use biodegradable, non-toxic products approved for home use. High-temperature steam is our primary sanitizer — no harsh chemicals, no residues, completely safe for your family.',
      },
      {
        headingLevel: 'h2',
        heading: 'Serving All Major Areas Across Dubai',
        text: 'Al Haya\'s mattress deep cleaning Dubai teams cover every major area and community. Same-day service is available across most locations.',
      },
      {
        headingLevel: 'h3',
        heading: 'Residential Deep Cleaning in Dubai Marina, JLT, and Palm Jumeirah',
        text: 'Our sofa carpet mattress deep cleaning in Dubai covers Dubai Marina, Jumeirah Lake Towers, Palm Jumeirah, Jumeirah Beach Residence, and all surrounding communities. Book mattress deep cleaning near me today.',
      },
      {
        headingLevel: 'h3',
        heading: 'Express Services for Downtown, Business Bay, and Beyond',
        text: 'We provide mattress deep cleaning services across Downtown Dubai, Business Bay, DIFC, Deira, Al Barsha, Mirdif, Arabian Ranches, and all other Dubai areas — as well as Abu Dhabi, Sharjah, and all 7 UAE Emirates.',
      },
    ],
    images: ['/images/services/mattress-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    slug: 'curtain-cleaning',
    category: 'domestic',
    heroTitle: 'Professional Curtain Cleaning Services in Dubai | Starting AED 15/sqm',
    heroSubtitle: 'Top-rated curtain cleaning Dubai — on-site steam & off-site dry cleaning. Best curtain cleaning in Dubai for all fabrics. Professional curtain cleaning Dubai near me. Book today!',
    shortDescription: 'Looking for professional curtain cleaning in Dubai? Expert on-site steam cleaning and off-site dry cleaning for all fabrics. Free pickup & delivery with 99% stain removal. Book your refresh today!',
    fullDescription: `The Ultimate Guide to a Dust-Free Home

Living in a city as vibrant and fast-paced as Dubai comes with its perks, but it also brings unique challenges for homeowners. Between frequent sandstorms, high humidity, and 24/7 reliance on air conditioning, your curtains do far more than look pretty — they act as a giant air filter for your home.

Over time, these fabrics trap dust, allergens, and pollutants that impact both your indoor air quality and the lifespan of your window treatments. Al Haya — the trusted curtain cleaning company Dubai residents choose — provides professional curtain cleaning services in Dubai to maintain a healthier, fresher home year-round.

Why Your Curtains Need Special Care in Dubai

In the UAE, curtains are exposed to environmental factors not common elsewhere. Fine desert sand finds its way into fabric fibers even with windows closed — making curtains look dull and feel gritty. AC vents blow dust directly onto drapes, and combined with humidity, this can lead to musty smells or mold growth in delicate fabrics. The intense Dubai sun also makes fabrics brittle and fades colors. Regular curtain cleaning Dubai removes these abrasive dust particles that accelerate wear and tear. Whether you need home curtain cleaning services or a professional curtain cleaning service near me, Al Haya is your trusted curtain cleaner across UAE.

On-Site vs. Off-Site Curtain Cleaning

Our curtain cleaning Dubai service offers two primary methods depending on your schedule and fabric type.

On-Site Steam Cleaning — the most popular curtain cleaning service Dubai residents choose. We use high-grade extraction machines to deep-clean your curtains while they are still hanging — no removal, no disruption. Best for cotton, synthetic blends, and heavy drapes. Service completed in a few hours. Eco-friendly and safe for kids and pets. This is our most requested curtain cleaning near me option across Dubai, Sharjah, and Abu Dhabi.

Off-Site Dry Cleaning — curtain dry cleaning near me for high-end or delicate fabrics. Our professional curtain cleaning Dubai team removes the curtains, takes them to a specialist facility, and returns them pressed and perfectly cleaned. Best for silk, velvet, chiffon, and embroidered curtains. Uses specialized solvents to remove 99% of stains without shrinking the fabric. This is also the recommended method for cleaning shower curtain liners and bathroom drapes.

The Health Benefits of Professional Curtain Cleaning

Professional curtain cleaning services are vital for a healthy living environment. Dust mites and pet dander hide in curtain folds — professional steam kills bacteria and removes allergens that trigger asthma and hay fever. Clean curtains also keep the air circulating through your AC system fresher for longer. Fabrics easily absorb cooking smells, smoke, and pet odors — our deep clean neutralizes these scents at the source.

How Much Does Curtain Cleaning Cost in Dubai?

Our curtain cleaning Dubai pricing is competitive and transparent. By square meter: AED 12 to AED 30 per sq. m. depending on fabric and method. Flat rate per piece: from AED 50 to AED 100 per curtain panel. Free on-site inspection and quote available via WhatsApp.

Al Haya is the best curtain cleaning company covering curtain cleaning Dubai, curtain cleaning Abu Dhabi, curtain cleaning Sharjah, and all 7 UAE Emirates — homes, villas, hotels, and commercial premises. Book our professional curtain cleaning services today and breathe easier tomorrow.`,
    benefits: [
      'Best curtain cleaning Dubai — on-site steam & off-site dry cleaning',
      'Professional curtain cleaning service near me across all UAE',
      'Curtain dry cleaning near me for silk, velvet & delicate fabrics',
      'Home curtain cleaning services — we come to you',
      'Curtain cleaning Abu Dhabi & curtain cleaning Sharjah covered',
      'Best curtain cleaning in Dubai from AED 50 per panel',
      'Pressing and re-hanging included — trusted curtain cleaner',
      'Cleaning shower curtain liners & all bathroom drapes available',
    ],
    process: [
      'Fabric assessment and colorfastness check',
      'On-site: high-grade steam extraction while hanging',
      'Off-site: careful removal, labeling, and transport',
      'Professional washing, dry cleaning, or steam treatment',
      'Pressing, quality inspection, and return',
      'Re-hanging and adjustment at your home',
    ],
    faqs: [
      {
        question: 'How often should curtains be cleaned in Dubai?',
        answer: 'Due to frequent sandstorms, high humidity, and constant AC usage, professionally clean your curtains every 3 to 6 months. This prevents dust accumulation and protects your family from respiratory allergens. Our curtain cleaning Dubai team is available same-day.',
      },
      {
        question: 'Can you clean my curtains without taking them down?',
        answer: 'Yes! Our on-site curtain cleaning Dubai service uses specialized steam extraction machines to deep-clean, sanitize, and remove odors while your curtains are still hanging — saving you time and the hassle of re-installation.',
      },
      {
        question: 'Which is better: steam cleaning or dry cleaning for curtains?',
        answer: 'It depends on the fabric. Steam cleaning is excellent for cotton and synthetic blends as it kills bacteria on-site. Curtain dry cleaning near me is preferred for delicate fabrics like silk, velvet, or embroidered drapes to prevent shrinkage and preserve texture.',
      },
      {
        question: 'How much does professional curtain cleaning cost in Dubai?',
        answer: 'Curtain cleaning in Dubai ranges from AED 12 to AED 30 per square meter or AED 50–100 per panel. Our professional curtain cleaning services in Dubai include free pickup and delivery for off-site orders.',
      },
      {
        question: 'How long does off-site curtain cleaning take?',
        answer: 'Off-site curtain dry cleaning near me has a turnaround of 3 to 5 business days — including free pickup, specialist cleaning, pressing, and professional re-hanging by our curtain cleaning Dubai team.',
      },
      {
        question: 'Can I wash my curtains in a regular washing machine?',
        answer: 'Most Dubai-style heavy drapes and blackout curtains are not suitable for home machines due to their weight and delicate linings. Professional curtain cleaning service near me is safer to avoid shrinkage or fabric damage.',
      },
      {
        question: 'Does curtain cleaning remove the musty AC smell?',
        answer: 'Yes. Professional curtain cleaning Dubai steam sanitization effectively neutralizes odors trapped in fabric fibers from AC moisture and household cooking — removing the smell at the source, not just masking it.',
      },
      {
        question: 'How do you calculate the price of curtain cleaning?',
        answer: 'Price is calculated by multiplying the height by the width of the curtain to find total square meters, then multiplying by the rate per sqm. Our curtain cleaning services Dubai starts from AED 15/sqm — free quote via WhatsApp.',
      },
      {
        question: 'Is it worth getting curtains professionally cleaned?',
        answer: 'Yes. Beyond aesthetics, best curtain cleaning in Dubai extends fabric life by removing abrasive dust and prevents buildup of health-harming allergens. A cleaner curtain means cleaner air for your family.',
      },
      {
        question: 'Do you offer curtain cleaning in Dubai Marina and Downtown?',
        answer: 'Yes. Our home curtain cleaning services cover Dubai Marina, JLT, Palm Jumeirah, Business Bay, Downtown Dubai, Al Barsha, and all areas. We also cover curtain cleaning Abu Dhabi and curtain cleaning Sharjah.',
      },
    ],
    contentSections: [
      {
        headingLevel: 'h2',
        heading: 'Why Professional Curtain Cleaning is Essential in Dubai',
        text: 'Dubai\'s unique environment makes professional curtain cleaning services far more important than in other cities. Between desert sandstorms, coastal humidity, and relentless AC usage, your curtains face challenges that regular dusting simply cannot address.',
      },
      {
        headingLevel: 'h3',
        heading: 'Combatting Desert Dust and Sand Accumulation',
        text: 'Dubai\'s frequent sandstorms push fine desert particles through window seals and AC vents directly into curtain fibers. Even with windows closed, sand accumulates rapidly — making curtains feel gritty, look dull, and harbor allergens. Our curtain cleaning Dubai service uses industrial extraction to remove this deep-settled sand completely.',
      },
      {
        headingLevel: 'h3',
        heading: 'Eliminating AC Allergens and Mold Growth',
        text: 'Constant air conditioning creates the perfect conditions for dust mite colonies and mold growth in fabric folds. AC vents blow contaminated air directly onto drapes, trapping pollutants that affect indoor air quality. Professional curtain cleaning in Dubai using steam sanitization kills 99.9% of these biological contaminants.',
      },
      {
        headingLevel: 'h3',
        heading: 'Protecting Fabrics from Extreme UV Sunlight',
        text: 'The intense UAE sun combined with abrasive sand creates a "sandpaper effect" that makes fabrics brittle and fades colors prematurely. Regular curtain cleaning Dubai removes these abrasive particles, significantly extending fabric life and preserving colour vibrancy.',
      },
      {
        headingLevel: 'h2',
        heading: 'Our Expert Curtain Cleaning Methodologies',
        text: 'Al Haya offers two specialist curtain cleaning services in Dubai tailored to your fabric type, schedule, and level of soiling — ensuring the best result for every curtain in your home.',
      },
      {
        headingLevel: 'h3',
        heading: 'On-Site Steam Cleaning (While-Hanging Service)',
        text: 'Our most popular curtain cleaning service near me — high-temperature steam extraction cleans, sanitizes, and deodorizes your curtains while they remain hanging. No removal, no re-hanging hassle. Ideal for cotton, synthetic blends, and heavy drapes. Service completed in a few hours using professional-grade equipment.',
      },
      {
        headingLevel: 'h3',
        heading: 'Professional Off-Site Dry Cleaning',
        text: 'Curtain dry cleaning near me for delicate fabrics — silk, velvet, organza, chiffon, and embroidered drapes require specialist chemical solvents at our facility. Our professional curtain cleaning Dubai team removes, labels, cleans, presses, and re-hangs with zero risk of shrinkage or texture damage.',
      },
      {
        headingLevel: 'h3',
        heading: 'Blackout and Sheer Curtain Specialists',
        text: 'Blackout curtains with light-blocking linings and sheer panels require specific care to avoid delamination or damage. Our curtain cleaner team is trained to handle all common Dubai window treatments — maintaining their function while delivering a deep professional clean.',
      },
      {
        headingLevel: 'h2',
        heading: 'Transparent Curtain Cleaning Prices in Dubai',
        text: 'Al Haya believes in fully transparent pricing — no hidden charges, no surprises. Get a free quote via WhatsApp before booking any curtain cleaning service Dubai.',
      },
      {
        headingLevel: 'h3',
        heading: 'Competitive Rates per Square Meter',
        text: 'Our curtain cleaning services Dubai rates start from AED 15 per square meter — among the most competitive professional curtain cleaning rates in Dubai. Standard market rates range from AED 12 to AED 30/sqm depending on fabric and method.',
      },
      {
        headingLevel: 'h3',
        heading: 'Affordable Flat-Rate Packages for Homes and Offices',
        text: 'For standard curtain panels, our home curtain cleaning services offer flat rates from AED 50 to AED 100 per panel. Studio apartments and small villas can access package deals — contact us for a customized quote for your property.',
      },
      {
        headingLevel: 'h3',
        heading: 'Free Pickup, Delivery, and Re-installation',
        text: 'Our off-site curtain cleaning company Dubai service includes free pickup from your home, specialist cleaning, professional pressing, and re-installation — completely hassle-free. Turnaround: 3 to 5 business days.',
      },
      {
        headingLevel: 'h2',
        heading: 'The Benefits of Choosing Our Dubai Cleaning Team',
        text: 'With 500+ satisfied clients across Dubai, Abu Dhabi, and Sharjah, Al Haya is the best curtain cleaning company for quality, reliability, and care.',
      },
      {
        headingLevel: 'h3',
        heading: 'Eco-Friendly and Pet-Safe Cleaning Solutions',
        text: 'All products used in our professional curtain cleaning Dubai are pH-balanced, non-toxic, and biodegradable — safe for children, pets, and residents with respiratory sensitivities. Our on-site steam uses only heat and water.',
      },
      {
        headingLevel: 'h3',
        heading: 'Advanced Stain and Odor Removal Technology',
        text: 'Our curtain cleaning in Dubai removes 99% of common household stains and neutralizes musty AC smells trapped in fabric fibers. Enzyme-based treatments break down organic staining at the molecular level — not just surface cleaning.',
      },
      {
        headingLevel: 'h3',
        heading: 'Same-Day Service and Flexible Booking',
        text: 'Need curtain cleaning near me urgently? We offer same-day curtain cleaning Dubai for most areas. Early morning, evening, and weekend slots available — designed for busy Dubai residents and professionals.',
      },
      {
        headingLevel: 'h2',
        heading: 'Service Areas Across the UAE',
        text: 'Our professional curtain cleaning services cover the entire UAE — from Dubai\'s most popular communities to Abu Dhabi, Sharjah, and beyond.',
      },
      {
        headingLevel: 'h3',
        heading: 'Covering Dubai Marina, JLT, and Downtown',
        text: 'Best curtain cleaning in Dubai Marina, Jumeirah Lake Towers, JBR, and Downtown Dubai. Our curtain cleaning service Dubai teams cover all high-rise towers and waterfront apartments in these areas.',
      },
      {
        headingLevel: 'h3',
        heading: 'Serving Palm Jumeirah, Business Bay, and Al Barsha',
        text: 'Professional curtain cleaning services for Palm Jumeirah villas, Business Bay offices, DIFC towers, Jumeirah, Al Barsha, and Mirdif. Same-day curtain cleaning near me available across all these communities.',
      },
      {
        headingLevel: 'h3',
        heading: 'Professional Care for Villas in Arabian Ranches and The Springs',
        text: 'Curtain cleaning Abu Dhabi, curtain cleaning Sharjah, Arabian Ranches, The Springs, The Meadows, Emirates Hills, and all villa communities across UAE. Our curtain cleaning company covers the full UAE.',
      },
    ],
    images: ['/images/services/curtain-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'car-interior-detailing',
    name: 'Car Interior Detailing',
    heroTitle: 'Professional Car Seat Cleaning Dubai | Deep Steam Sanitization & Stain Removal',
    heroSubtitle: 'Expert car seats cleaning Dubai, Sharjah & Abu Dhabi — fabric & leather car seats cleaning near me. Car seat steam cleaner, stain removal & odor elimination. Mobile service at your location!',
    slug: 'car-interior-detailing',
    category: 'domestic',
    shortDescription: 'Refresh your vehicle with expert car seat cleaning in Dubai. Deep steam sanitization, leather conditioning & fabric stain removal. Eco-friendly, fast-drying mobile service at your doorstep. Book today!',
    fullDescription: `The Ultimate Guide to Car Seats Cleaning Services in Dubai

Your car is your second home in Dubai — and just like your home, the interior needs regular professional care. Between the desert dust, extreme heat, and the daily demands of UAE life, car seats accumulate stains, allergens, and bacteria faster than in most other cities worldwide. Our professional car seats cleaning services Dubai bring the highest standard of automotive interior care directly to your location.

Why Car Seats Cleaning Services are Essential in the UAE

Dubai's extreme summer heat — regularly exceeding 45°C — accelerates the deterioration of both leather and fabric car seats. Heat causes leather to dry out and crack, while fabric seats trap sweat, dust, and food particles deep within the fibers. UAE vehicles also suffer from AC mold buildup, creating musty odors that standard car washes cannot address.

Our mobile car seats cleaning service uses hot-water extraction for fabric seats and specialist leather car seat cleaner products formulated for the UAE climate. We service all vehicle types — sedans, SUVs, 4x4s, minivans, pickup trucks, and luxury cars — and we come to your home, office, or any convenient location. Whether you need car seats cleaning Dubai, car seats cleaning Sharjah, or car seats cleaning Abu Dhabi — Al Haya covers all UAE Emirates.

Fabric Car Seats Deep Cleaning

Our car seats cleaning services for fabric interiors use a professional car seat steam cleaner and hot-water extraction that removes food stains, sweat residue, pet hair, and embedded dust from deep within the seat fibers. Our fabric car seat cleaner pre-treatment spray breaks down oils and organic staining before the car seats cleaning machine extraction flushes all contaminants out. Result: fresh, odor-free fabric seats dry within 2–3 hours. Car seats cleaning without leaving water stains — guaranteed with our low-moisture quick-dry technique.

Leather Car Seats Cleaning and Conditioning

UAE heat is the number one enemy of leather car seats — UV exposure and temperature extremes cause cracking and fading. Our leather car seats cleaning service uses a dedicated leather car seat cleaner to remove body oils and grime, followed by a conditioning treatment that restores suppleness and UV protection. Cleaning leather car seats and cleaning leather seats in cars requires specialist products — never use household chemicals. Our cleaning material for car seats is specifically formulated for UAE conditions.

Full Car Interior Detailing Package

Beyond car seats cleaning services, our full interior package covers dashboard and console detailing, door panels and handles, air vents deep cleaning, roof lining spot cleaning, floor mats and carpets hot-water extraction, all glass surfaces streak-free cleaning, and ozone-based deodorization for complete odor elimination.

Al Haya provides car seats cleaning services across all 7 UAE Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ — with same-day mobile service available.`,
    benefits: [
      'Car seats cleaning Dubai, Sharjah & Abu Dhabi — mobile service',
      'Car seat steam cleaner & hot-water extraction for fabric seats',
      'Leather car seat cleaner + conditioning — protects against UAE heat',
      'Car seats cleaning without leaving water stains — quick-dry method',
      'Car seats cleaning machine — industrial grade, not household grade',
      'Fabric car seat cleaner safe for all materials — no damage',
      'Cleaning leather car seats & cleaning material car seats available',
      'Car seat cleaning near me — same-day across all 7 UAE Emirates',
    ],
    process: [
      'Full dry vacuum — seats, carpets, floor mats, crevices',
      'Pre-treatment spray for stains and organic matter',
      'Hot-water extraction for fabric seats and carpets',
      'Leather cleaning and conditioning treatment',
      'Dashboard, panels, vents, and console detailing',
      'Ozone deodorization and UV-protective coating',
    ],
    faqs: [
      {
        question: 'How much does car seat cleaning cost in Dubai?',
        answer: 'Car seat cleaning Dubai starts from AED 100 for basic interiors. Comprehensive deep cleaning and sanitization packages for SUVs or luxury vehicles range between AED 250 and AED 500. Car seats cleaning Sharjah and car seats cleaning Abu Dhabi follow the same pricing. Free quotes via WhatsApp.',
      },
      {
        question: 'Can steam cleaning remove milk and coffee stains from car seats?',
        answer: 'Yes. Professional high-temperature car seat steam cleaner is highly effective at breaking down organic stains like milk, coffee, and food spills — simultaneously neutralizing odors and killing 99.9% of bacteria. Car seats cleaning without leaving water stains guaranteed.',
      },
      {
        question: 'Is it safe to professionally clean a baby car seat?',
        answer: 'Professional baby car seat cleaning Dubai is safe and highly recommended — provided technicians use non-toxic, baby-safe detergents and avoid soaking harness straps to maintain crash safety integrity. Our team follows all manufacturer guidelines.',
      },
      {
        question: 'How long should I wait to sit in my car after seat cleaning?',
        answer: 'With our industrial car seats cleaning machine and dry-steam technology, seats are touch-dry immediately and fully ready within 2 to 4 hours — depending on material and cabin ventilation. Car seats cleaning without leaving water stains is our standard.',
      },
      {
        question: 'What is the difference between a car wash and professional seat detailing?',
        answer: 'A standard car wash involves surface vacuuming only. Our professional car seats cleaning services Dubai use deep-extraction machinery and specialized fabric car seat cleaner or leather car seat cleaner to remove dirt, allergens, and pathogens embedded deep within seat foam and fibers.',
      },
      {
        question: 'How often should I get my car seats cleaned in the UAE?',
        answer: 'Due to high dust, sand, and humidity in the UAE, professional car seat cleaning near me every 4 to 6 months is recommended — preventing abrasive grit buildup and bacteria accumulation in car seats cleaning Dubai, Sharjah, and Abu Dhabi.',
      },
      {
        question: 'Will professional cleaning damage leather or Alcantara seats?',
        answer: 'No. Our leather car seat cleaner is pH-neutral and specifically designed for premium materials. Leather receives conditioning to prevent sun-induced cracking. Alcantara is cleaned with specialist brushes. Cleaning leather car seats and Alcantara requires expert care — not household products.',
      },
      {
        question: 'Do you offer mobile car seat cleaning at my home or office?',
        answer: 'Yes. Our mobile car seats cleaning service Dubai brings all equipment to your location — Dubai Marina, JLT, Business Bay, Jumeirah, Al Quoz, Downtown, and all areas. Car seat cleaning near me also available in Sharjah and Abu Dhabi.',
      },
      {
        question: 'Can you remove smoke or pet smell from car seats?',
        answer: 'Yes. Our car seats cleaning services target odor sources within the upholstery using ozone treatments and enzymatic fabric car seat cleaner — neutralizing odor molecules rather than masking them. Available as part of full car seats cleaning services near me.',
      },
    ],
    contentSections: [
      {
        headingLevel: 'h2',
        heading: 'Why Your Car Interior Needs Professional Care in Dubai\'s Climate',
        text: 'Dubai\'s extreme climate — summer temperatures exceeding 45°C combined with high humidity — creates conditions inside your vehicle that accelerate bacteria growth, damage upholstery, and embed allergens deep into seat fibers. Standard car washes cannot address these issues. Only professional car seats cleaning services Dubai with industrial equipment can.',
      },
      {
        headingLevel: 'h3',
        heading: 'Combating Bacteria Growth in High Humidity',
        text: 'In Dubai\'s humid coastal climate, spills on car seats do not just stain — they become breeding grounds for mold, bacteria, and dust mites within hours. The combination of heat and moisture trapped in seat foam creates an invisible hygiene problem. Our car seat steam cleaner kills 99.9% of bacteria deep within the upholstery layers.',
      },
      {
        headingLevel: 'h3',
        heading: 'Removing Deep-Seated Desert Dust and Sand',
        text: 'Fine desert sand acts as an abrasive inside your car — grinding down fabric fibers and penetrating leather pores with every journey. Our car seats cleaning machine uses industrial suction to extract this sand completely from deep within the upholstery, preventing the long-term fiber damage that shortens the life of premium car interiors.',
      },
      {
        headingLevel: 'h3',
        heading: 'Eliminating Stubborn Odors and Allergens',
        text: 'UAE vehicles develop persistent odors from food, cigarette smoke, pets, and AC condensation mold. Our ozone-based deodorization and car seat steam cleaner eliminate allergens and odors at the molecular level — not just masking them. Essential for allergy sufferers and families with children.',
      },
      {
        headingLevel: 'h2',
        heading: 'Specialized Cleaning for Premium Upholstery',
        text: 'Different materials require completely different car seats cleaning products and techniques. Our specialist team is trained across all premium automotive upholstery types found in UAE vehicles.',
      },
      {
        headingLevel: 'h3',
        heading: 'Expert Leather Seat Cleaning and Conditioning',
        text: 'Cleaning leather car seats in Dubai requires pH-neutral leather car seat cleaner to remove body oils and grime without stripping the finish. We follow with a UV-protective conditioning treatment that prevents the cracking and fading caused by UAE sun exposure. Essential for cleaning leather seats in cars across Dubai, Sharjah, and Abu Dhabi.',
      },
      {
        headingLevel: 'h3',
        heading: 'Alcantara & Suede Care: Preserving the Luxury Feel',
        text: 'Alcantara and suede car seats require specialist gentle techniques to prevent pilling and maintain the velvety texture. Our cleaning material for car seats includes specialist Alcantara-safe products — restoring the luxury feel without damaging the delicate microfiber surface.',
      },
      {
        headingLevel: 'h3',
        heading: 'Fabric Seat Deep Extraction & Shampooing',
        text: 'Our fabric car seat cleaner combined with industrial hot-water extraction removes deep food stains, drink spills, and sweat residue from all fabric types. Car seats cleaning without leaving water stains — our quick-dry technique ensures seats are ready within 2–3 hours.',
      },
      {
        headingLevel: 'h2',
        heading: 'The Dubai Gold Standard: Hygienic Baby Car Seat Cleaning',
        text: 'Baby car seat cleaning Dubai requires a specialized approach that goes beyond aesthetics — it is a critical safety and hygiene matter for your child\'s wellbeing.',
      },
      {
        headingLevel: 'h3',
        heading: 'Safety-First Approach: Protecting the Harness Integrity',
        text: 'Important warning: the harness straps of baby car seats must never be submerged in water or soaked — this damages the webbing and compromises crash safety. Our baby car seat cleaning Dubai technicians are trained to clean harness straps only with a damp cloth and approved cleaner, preserving full crash protection.',
      },
      {
        headingLevel: 'h3',
        heading: 'Eco-Friendly & Baby-Safe Sanitization',
        text: 'All products used in our baby car seat cleaning are non-toxic, fragrance-free, and specifically approved for sensitive infant skin. No harsh chemicals — our car seat steam cleaner uses high-temperature steam as the primary sanitizer, leaving zero chemical residue.',
      },
      {
        headingLevel: 'h3',
        heading: 'Eliminating Biohazards: Vomit, Urine, and Milk Spills',
        text: 'Baby car seats face unique biological contamination — vomit, urine, and milk spills create severe odor and bacteria problems. Our deep steam sterilization combined with enzyme-based fabric car seat cleaner ensures 99.9% germ removal while preserving seat integrity.',
      },
      {
        headingLevel: 'h2',
        heading: 'Why Choose Our Car Seats Cleaning Services in Dubai?',
        text: 'Al Haya is the trusted car seats cleaning service near me for residents across Dubai Marina, Downtown, JLT, Business Bay, Jumeirah, Al Quoz, and all UAE Emirates.',
      },
      {
        headingLevel: 'h3',
        heading: 'Mobile Car Seat Cleaning: We Come to You',
        text: 'Our mobile car seats cleaning service Dubai comes to your home or office — Dubai Marina, Downtown Dubai, JLT, Business Bay, Jumeirah, Al Barsha, Al Quoz, and all areas. Car seats cleaning Sharjah and car seats cleaning Abu Dhabi also available. No need to drive to a detailing center.',
      },
      {
        headingLevel: 'h3',
        heading: 'Advanced Steam Cleaning Technology',
        text: 'Our professional car seat steam cleaner delivers faster drying times and superior disinfection compared to DIY methods. Industrial-grade car seats cleaning machine with HEPA filtration — far beyond what any home steam cleaner can achieve.',
      },
      {
        headingLevel: 'h3',
        heading: 'Transparent Pricing & Same-Day Service',
        text: 'Car seats cleaning services Dubai start from AED 99. Car seat cleaning near me same-day service available across most UAE areas. Free quotes via WhatsApp — transparent car seats cleaning products pricing, no hidden charges.',
      },
    ],
    images: ['/images/services/car-interior-detailing.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'dining-chair-cleaning',
    name: 'Dining Chair Cleaning',
    slug: 'dining-chair-cleaning',
    category: 'domestic',
    shortDescription: 'Professional dining chair cleaning in UAE. Remove food stains and freshen fabric or leather dining chairs.',
    fullDescription: `Dining chairs are among the most heavily used and frequently soiled furniture items in any home. Daily contact with food, grease, sauces, beverages, and body oils creates a combination of staining and odor that regular wiping cannot address. Our dining chair cleaning service uses targeted stain treatment and hot-water extraction or leather conditioning to restore your chairs to a clean, hygienic condition.

We clean all dining chair types: fabric-upholstered chairs, leather dining chairs, faux leather or PU chairs, mixed-material chairs with padded seats, and wooden chairs with upholstered cushions. Each material requires a different approach, and our technicians are trained to identify the correct method before starting — ensuring effective cleaning without damage to the fabric or frame.

For fabric dining chairs, we apply a food-grade pre-treatment spray to grease and food stains before performing hot-water extraction. This combination removes the vast majority of staining including cooking oil, coffee, wine, tomato sauce, and other common dining contaminants. Stubborn older stains may require a second treatment pass. After cleaning, we apply an optional fabric protector that creates a barrier against future spills, making cleaning spills quick and easy.

For leather and faux leather chairs, we use a specialist leather cleaner that dissolves surface grime and body oils without stripping the finish or drying out the material. We follow this with a conditioning treatment that restores the leather's natural flexibility and sheen.

The service is available for single chairs or full dining sets, and we can also clean matching benches and ottoman seating. All products are food-safe and non-toxic, leaving no residue that could transfer to food or hands. Service is available across all 7 UAE Emirates with same-day availability in many areas.`,
    benefits: [
      'Removes food stains, grease, and odors',
      'Correct method selected per fabric type',
      'Optional fabric protector for future spill resistance',
      'Safe for full dining sets and benches',
      'Food-safe, non-toxic cleaning agents',
      'Available as single chair or full set service',
    ],
    process: [
      'Fabric/material type assessment',
      'Pre-treatment spray for food and grease stains',
      'Hot-water extraction or leather cleaning',
      'Spot treatment for stubborn marks',
      'Conditioning for leather chairs',
      'Optional fabric protector application',
    ],
    faqs: [
      {
        question: 'Can you clean an entire dining set in one visit?',
        answer: 'Yes. We clean full dining sets including all chairs, benches, and matching pieces in a single visit. Please mention the number of pieces when booking.',
      },
      {
        question: 'Can you remove old cooking oil stains?',
        answer: 'Yes. Our food-grade pre-treatment is specifically formulated to break down grease and oil-based stains. Results depend on how long the stain has been set, but significant improvement is almost always achieved.',
      },
      {
        question: 'Is the cleaning safe for chairs used at the dining table?',
        answer: 'All products used are food-safe and non-toxic. After drying (typically 1–2 hours), the chairs are safe for immediate use at your dining table.',
      },
      {
        question: 'Do you clean wooden chair frames as well?',
        answer: 'We focus primarily on upholstered and cushioned surfaces. Wooden frames are wiped down as part of the service. We can discuss additional wood polishing if required.',
      },
      {
        question: 'How long does dining chair cleaning take?',
        answer: 'A set of 6 chairs typically takes 1–2 hours to clean. Drying is complete within 1–2 hours with our quick-dry equipment.',
      },
      {
        question: 'Do you offer a fabric protector for dining chairs?',
        answer: 'Yes. We offer a fabric protector treatment that creates an invisible barrier against spills and staining, making your chairs much easier to maintain between professional cleans.',
      },
    ],
    images: ['/images/services/dining-chair-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'villa-deep-cleaning',
    name: 'Villa Deep Cleaning',
    heroTitle: 'Villa Deep Cleaning Services Dubai | Top-Rated & Eco-Friendly',
    heroSubtitle: 'Best villa deep cleaning services Dubai, Abu Dhabi & Sharjah — move-in, move-out, post-construction & periodic deep clean. Eco-friendly villa deep cleaning UAE. Book today!',
    slug: 'villa-deep-cleaning',
    category: 'commercial',
    shortDescription: 'Transform your home with the #1 villa deep cleaning services in Dubai. Eco-friendly steam technology eliminates 99% of dust and allergens. Spotless, healthy villa guaranteed. Free estimates — book today!',
    fullDescription: `The Ultimate Guide to Villa Deep Cleaning in Dubai

Maintaining a luxury villa in Dubai is a statement of lifestyle, but the city's unique environment — defined by fine desert dust, high humidity, and year-round air conditioning — presents a relentless challenge to home hygiene. Standard dusting and mopping simply are not enough to combat the microscopic pollutants that settle into the crevices of a high-end residence.

This guide explores why professional villa deep cleaning services Dubai are essential for property preservation and family health, what a comprehensive villa deep cleaning service includes, and how to choose the right partner for your home.

Why Regular Cleaning Is Not Enough for Dubai Villas

In the UAE, the concept of "clean" goes beyond what the eye can see. Traditional maid services focus on surface-level tidying, but villa deep cleaning Dubai is a specialized technical intervention designed to address three core Dubai-specific issues.

Fine Particulate Accumulation: Desert sand is exceptionally fine. It bypasses window seals and accumulates inside AC vents, behind heavy furniture, and deep within grout lines. Only professional villa deep cleaning services in Dubai with industrial equipment can address this.

AC System Hygiene: Your HVAC system is the lungs of your home. Without professional villa deep cleaning Dubai, it becomes a breeding ground for mold and bacteria, circulating allergens throughout every room.

High-Traffic Wear: Large villa layouts and outdoor-indoor living spaces mean that floors and upholstery face significant wear. Professional-grade equipment is required to extract deep-seated dirt from marble, stone, and luxury fabrics.

The Professional Villa Deep Cleaning Checklist

A true villa deep cleaning service should be systematic and exhaustive. Our best villa deep cleaning services Dubai cover every area from top to bottom.

Specialized Floor Restoration: Rather than just mopping, our professionals use single-disc machines and industrial scrubbers to lift stains from porous surfaces like marble and travertine — sanitizing the floor while restoring its original luster.

Detailed Kitchen Sanitization: The kitchen is the most critical area for hygiene. Our villa deep cleaning services in Dubai include full degreasing of oven interiors and exhaust hoods, sanitizing areas behind and underneath appliances, and steam cleaning of cabinets to eliminate food-borne bacteria.

Bathroom Steam Disinfection: Professionals use high-pressure steam cleaners reaching 100°C+ to kill 99.9% of germs in tile grouting and around fixtures — without harsh chemicals.

AC Vents and Grilles: Our villa deep cleaning UAE service includes removal and sanitization of AC grilles and wiping of internal vent openings to prevent dust blow-out onto freshly cleaned surfaces.

Window and Facade Refresh: Dubai's sandstorms leave windows dull. Our villa deep cleaning services include internal and external window cleaning, and power washing of balconies and patio areas.

Strategic Benefits of Villa Deep Cleaning Dubai

Investing in professional villa deep cleaning services Dubai twice a year offers more than aesthetics. Health and Wellness: significant reduction in indoor allergens — vital for residents with asthma or dust sensitivities. Asset Protection: regular villa deep cleaning Abu Dhabi and Dubai prevents permanent staining of expensive flooring. Property Value: for Palm Jumeirah, Emirates Hills, and Dubai Hills Estate villas, a spotless maintenance record maximizes rental yields and resale value.

Al Haya is the best villa deep cleaning services Dubai, Abu Dhabi, and Sharjah provider — serving all villa types across all 7 UAE Emirates with Dubai Municipality approved protocols and eco-friendly, biodegradable products.`,
    benefits: [
      'Best villa deep cleaning services Dubai from AED 399',
      'Villa deep cleaning Dubai, Abu Dhabi & Sharjah covered',
      'Move-in, move-out & post-construction villa deep cleaning UAE',
      'Commercial deep cleaning service in villa — offices & commercial villas',
      'Dubai Municipality approved eco-friendly products',
      'Teams of 2–6 trained, background-checked technicians',
      'Villa deep cleaning services Dubai price — transparent, no hidden charges',
      'Same-day villa deep cleaning services available',
    ],
    process: [
      'Walkthrough assessment and villa deep cleaning scope agreement',
      'Top-to-bottom room-by-room systematic clean',
      'Kitchen full degreasing, appliances & cabinet sanitization',
      'Bathroom steam disinfection — 99.9% germ removal',
      'AC grilles, windows, fixtures & furniture detailing',
      'Floor restoration, balcony & terrace power cleaning',
    ],
    faqs: [
      {
        question: 'What is included in a villa deep cleaning service?',
        answer: 'Our villa deep cleaning Dubai goes beyond surface tidying — industrial floor scrubbing with single-disc machine, steam sanitization of kitchens and bathrooms, cleaning of AC vents and grilles, internal window cleaning, and detailed dusting of ceiling fans and high-reach areas. The best villa deep cleaning services Dubai cover every inch.',
      },
      {
        question: 'How much does villa deep cleaning cost in Dubai?',
        answer: 'Villa deep cleaning services Dubai price starts from AED 750 for a 2-bedroom villa and up to AED 1,500+ for 5-bedroom luxury villas. Villa deep cleaning Abu Dhabi and Sharjah follow the same transparent pricing structure. Free estimates via WhatsApp.',
      },
      {
        question: 'How long does villa deep cleaning take?',
        answer: 'A 3 to 4-bedroom villa typically takes a team of 3–5 professionals approximately 6 to 8 hours. Move-in villa deep cleaning Dubai for vacant villas is often completed faster than furnished ones.',
      },
      {
        question: 'Do you use eco-friendly cleaning products?',
        answer: 'Yes. Our villa deep cleaning UAE uses Dubai Municipality-approved, non-toxic, and biodegradable cleaning agents combined with high-pressure steam machines — disinfecting surfaces without harsh chemicals. Safe for children and pets.',
      },
      {
        question: 'What is the difference between regular cleaning and deep cleaning in Dubai?',
        answer: 'Regular cleaning focuses on surface maintenance — mopping, dusting, tidying. Villa deep cleaning Dubai is a technical service that removes deep-seated dirt from grout, degreases kitchen appliances, and sanitizes HVAC vents where desert dust accumulates.',
      },
      {
        question: 'Should I be home during the villa deep cleaning?',
        answer: 'It is not required. Many residents provide access to their property manager or building security. We recommend a walkthrough at the beginning and end of the villa deep cleaning services Dubai session to ensure all specific requirements are met.',
      },
      {
        question: 'How often should a Dubai villa be professionally deep cleaned?',
        answer: 'Due to high sand volume and constant AC usage, professional villa deep cleaning services every 6 months is recommended — ideally before and after the peak summer season. Villa deep cleaning Abu Dhabi and Sharjah residents follow the same schedule.',
      },
      {
        question: 'Does villa deep cleaning include AC duct cleaning?',
        answer: 'Standard villa deep cleaning in Dubai includes cleaning AC vents and grilles. Full AC duct cleaning of internal pipework is an add-on service — highly recommended for villa residents in Dubai\'s dusty environment.',
      },
    ],
    contentSections: [
      {
        headingLevel: 'h2',
        heading: 'Why Regular Cleaning Is Not Enough for Dubai Villas',
        text: 'Traditional maid services focus on surface-level tidying, but villa deep cleaning Dubai is a specialized technical intervention. The UAE\'s combination of fine desert dust, high humidity, and constant AC usage creates hygiene challenges that only professional villa deep cleaning services in Dubai can address effectively.',
      },
      {
        headingLevel: 'h3',
        heading: 'Fine Particulate Accumulation — Desert Sand in Your Villa',
        text: 'Desert sand is exceptionally fine — bypassing window seals, accumulating inside AC vents, behind heavy furniture, and deep within grout lines. Best villa deep cleaning services Dubai use industrial-grade equipment to extract this deep-settled sand that standard cleaning cannot reach.',
      },
      {
        headingLevel: 'h3',
        heading: 'AC System Hygiene — The Lungs of Your Home',
        text: 'Without professional villa deep cleaning UAE, your HVAC system becomes a breeding ground for mold and bacteria that circulate allergens throughout every room. Our villa deep cleaning services in Dubai include full AC grille sanitization and vent cleaning as standard.',
      },
      {
        headingLevel: 'h3',
        heading: 'High-Traffic Wear on Luxury Flooring and Upholstery',
        text: 'Large villa layouts and outdoor-indoor living mean floors and upholstery face significant wear. Professional villa deep cleaning Dubai uses single-disc machines and industrial scrubbers to extract deep-seated dirt from marble, travertine, stone, and luxury fabrics.',
      },
      {
        headingLevel: 'h2',
        heading: 'The Professional Villa Deep Cleaning Checklist',
        text: 'Our best villa deep cleaning services Dubai cover every area systematically — from the highest ceiling fixtures to the deepest floor grout lines. Here is exactly what our villa deep cleaning service includes.',
      },
      {
        headingLevel: 'h3',
        heading: 'Specialized Floor Restoration',
        text: 'Professionals use single-disc machines and industrial scrubbers to lift stains from porous surfaces like marble and travertine — sanitizing the floor while restoring its original luster. This is a core part of our villa deep cleaning services Dubai price package.',
      },
      {
        headingLevel: 'h3',
        heading: 'Detailed Kitchen Sanitization',
        text: 'Our villa deep cleaning in Dubai kitchen service includes full degreasing of oven interiors and exhaust hoods, sanitizing areas behind and beneath large appliances, and steam cleaning of cabinets and drawers to eliminate food-borne bacteria.',
      },
      {
        headingLevel: 'h3',
        heading: 'Bathroom Steam Disinfection',
        text: 'High-pressure steam cleaners reaching 100°C+ kill 99.9% of germs in tile grouting and around fixtures — without harsh chemicals. Our villa deep cleaning Abu Dhabi and Dubai bathroom service leaves every fixture sparkling and sanitized.',
      },
      {
        headingLevel: 'h3',
        heading: 'AC Vents, Windows & Balcony Refresh',
        text: 'AC grille removal and sanitization, internal vent wiping, internal and external window cleaning, and balcony power washing are all included in our villa deep cleaning services UAE — essential after Dubai\'s frequent sandstorms.',
      },
      {
        headingLevel: 'h2',
        heading: 'Strategic Benefits of Villa Deep Cleaning Dubai',
        text: 'Investing in best villa deep cleaning services in Dubai twice a year delivers measurable benefits beyond aesthetics.',
      },
      {
        headingLevel: 'h3',
        heading: 'Health & Wellness — Allergen Reduction',
        text: 'Professional villa deep cleaning services significantly reduce indoor allergens — vital for residents with asthma or dust sensitivities. A clean villa means cleaner air for your entire family.',
      },
      {
        headingLevel: 'h3',
        heading: 'Asset Protection — Preserve Your Investment',
        text: 'Regular villa deep cleaning Dubai prevents permanent staining of expensive marble flooring and degradation of luxury upholstery fibers. Protecting your villa\'s finishes saves significantly more than the cost of cleaning.',
      },
      {
        headingLevel: 'h3',
        heading: 'Property Value — Palm Jumeirah, Emirates Hills & Dubai Hills',
        text: 'For villas in Palm Jumeirah, Emirates Hills, Dubai Hills Estate, Arabian Ranches, and The Springs — a spotless maintenance record is essential for maximizing rental yields and resale value. Our commercial deep cleaning service in villa is used by property managers across Dubai.',
      },
      {
        headingLevel: 'h2',
        heading: 'How to Choose the Best Villa Deep Cleaning Company in Dubai',
        text: 'With hundreds of providers in the market, Al Haya stands out as the best villa deep cleaning services Dubai provider for the following reasons.',
      },
      {
        headingLevel: 'h3',
        heading: 'Dubai Municipality Approved & Eco-Friendly',
        text: 'All products and protocols used in our villa deep cleaning UAE service are Dubai Municipality approved. We offer eco-friendly "Green Cleaning" using non-toxic, biodegradable detergents — essential for homes with children and pets.',
      },
      {
        headingLevel: 'h3',
        heading: 'Trained Staff & Transparent Pricing',
        text: 'All Al Haya villa deep cleaning technicians are in-house employees with specific training for luxury villa materials. Our villa deep cleaning services Dubai price is fixed and transparent — no estimates that change upon arrival. Square-footage-based pricing for 3, 4, and 5-bedroom villas.',
      },
    ],
    images: ['/images/services/villa-deep-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Villa Deep Cleaning', url: 'https://www.villadeepcleaning.com/' },
  },
  {
    id: 'apartment-cleaning',
    name: 'Apartment Cleaning',
    slug: 'apartment-cleaning',
    category: 'commercial',
    shortDescription: 'Professional apartment cleaning service in UAE. Regular, deep, and move-in/move-out cleaning packages.',
    fullDescription: `Our apartment cleaning service offers flexible packages designed to meet every need — from a quick regular maintenance clean to a comprehensive deep clean or a move-in/move-out clean that restores the property to its original condition. Whether you are a resident looking for a reliable regular cleaning team or a landlord or tenant preparing for a handover, Al Haya provides consistent, professional results across all UAE Emirates.

Our regular apartment cleaning package covers all the essential tasks needed to keep your home fresh and organized between deep cleans: dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathroom surfaces, wiping kitchen counters and hob, emptying bins, cleaning mirrors, and general tidying. This package is ideal for weekly or fortnightly bookings and can be customized to your specific priorities.

The deep cleaning package goes significantly further, addressing everything in the regular package plus: full oven cleaning, refrigerator interior cleaning, kitchen cabinet interior cleaning, bathroom descaling and grout scrubbing, window sill and track cleaning, balcony sweeping and mopping, behind-appliance cleaning, light switch and socket wiping, and a detailed clean of all door frames and handles. This level of clean is recommended quarterly or at the change of tenants.

Our move-in and move-out cleaning is the most thorough level — designed to meet the requirements of UAE tenancy agreements and property handovers. The team deep-cleans every surface, fixture, and fitting in the apartment, leaving it in a verifiably clean condition. We can provide a detailed cleaning checklist and completion report for landlord or agency sign-off.

All packages are available for studio apartments through to 4+ bedroom apartments, penthouses, and duplexes. Our cleaning teams are background-checked, uniformed, and trained to Al Haya's quality standards, ensuring a consistent result every visit.`,
    benefits: [
      'Regular, deep, and move-in/move-out packages',
      'Customizable to your specific requirements',
      'Background-checked and uniformed cleaners',
      'Suitable for all apartment sizes',
      'Completion report available for tenancy handovers',
      'Flexible scheduling including weekends',
    ],
    process: [
      'Package selection and scope agreement',
      'Top-to-bottom room-by-room cleaning',
      'Kitchen and bathroom deep clean',
      'Floor vacuuming and mopping',
      'Window sills, fixtures, and furniture detailing',
      'Final walkthrough and quality check',
    ],
    faqs: [
      {
        question: 'What is included in a regular apartment clean?',
        answer: 'Dusting, vacuuming, mopping, bathroom surface cleaning, kitchen counter wiping, hob cleaning, bin emptying, mirror cleaning, and general tidying. The scope can be customized on request.',
      },
      {
        question: 'How long does apartment cleaning take?',
        answer: 'A regular clean of a 1-bedroom apartment takes approximately 1.5–2 hours. A 2-bedroom deep clean takes 3–4 hours. Move-out cleans for larger apartments can take a full day.',
      },
      {
        question: 'Do you offer weekly or fortnightly cleaning?',
        answer: 'Yes. We offer flexible recurring packages — weekly, fortnightly, or monthly — at preferential rates. Regular clients are assigned the same cleaning team for consistency.',
      },
      {
        question: 'Can you clean a furnished and unfurnished apartment?',
        answer: 'Yes. We clean both furnished apartments (including furniture and appliances) and unfurnished apartments (walls, floors, fixtures, and fittings).',
      },
      {
        question: 'Do you provide a cleaning checklist for move-out?',
        answer: 'Yes. Our move-out cleaning includes a detailed checklist and completion documentation suitable for landlord or agency inspection.',
      },
      {
        question: 'Do I need to be home during the cleaning?',
        answer: 'Not necessarily. Many clients provide a key or access code. We are fully insured and our team members are background-checked. You will receive a confirmation message when the clean is complete.',
      },
    ],
    images: ['/images/services/apartment-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'office-cleaning',
    name: 'Office Cleaning',
    slug: 'office-cleaning',
    category: 'commercial',
    shortDescription: 'Professional office cleaning services in UAE. Daily, weekly, and deep cleaning for commercial spaces.',
    fullDescription: `A consistently clean and well-maintained office environment directly influences employee productivity, morale, and health — and creates a strong first impression on visiting clients and partners. Al Haya's professional office cleaning service covers all types of commercial spaces across UAE, from small boutique offices and co-working spaces to large corporate floors, government offices, and retail premises.

Our office cleaning packages are designed to be flexible around your business operations. We offer early-morning cleans before staff arrive, evening cleans after the working day, and weekend deep cleans — all scheduled to minimize disruption to your team. For large corporate clients, we can assign a dedicated team and site supervisor who manages the cleaning schedule and quality on an ongoing basis.

The standard office cleaning service includes workstation and desk surface cleaning, computer monitor and keyboard wiping with anti-static solutions, shared area and reception cleaning, phone and intercom sanitization, kitchen and pantry cleaning, bathroom and toilet sanitization, waste bin emptying and liner replacement, floor sweeping, vacuuming, and mopping, glass partition and window interior cleaning, and door handle and high-touch surface disinfection.

Our office deep cleaning service adds to this: full carpet extraction cleaning, upholstered furniture cleaning, ceiling fan and air vent cleaning, light fixture cleaning, detailed cleaning behind and beneath furniture, tile and grout scrubbing in bathrooms and kitchens, and kitchen appliance interior cleaning.

Post-COVID, workplace hygiene expectations have risen significantly. We offer an optional enhanced disinfection protocol using hospital-grade disinfectant and electrostatic spraying that ensures comprehensive coverage of all surfaces including vertical planes and underside surfaces — ideal for offices with high foot traffic or staff returning from sick leave.

We hold comprehensive liability insurance and our cleaning teams undergo regular training in chemical handling, equipment operation, and commercial cleaning standards.`,
    benefits: [
      'Flexible scheduling around your business hours',
      'Daily, weekly, and deep cleaning packages',
      'Enhanced disinfection protocol available',
      'Dedicated team and site supervisor option',
      'Comprehensive liability insurance',
      'High-touch surface disinfection included',
    ],
    process: [
      'Site assessment and schedule agreement',
      'Workstation, desk, and surface cleaning',
      'Kitchen, pantry, and bathroom sanitization',
      'Floor vacuuming, sweeping, and mopping',
      'Waste management and bin liner replacement',
      'High-touch disinfection and quality sign-off',
    ],
    faqs: [
      {
        question: 'Can you clean outside of our office hours?',
        answer: 'Yes. We offer early-morning, evening, and weekend cleaning slots to ensure your workspace is clean for the working day with zero disruption.',
      },
      {
        question: 'Do you provide cleaning materials and equipment?',
        answer: 'Yes. All cleaning agents, equipment, and consumables are provided by our team. You simply provide access to the premises.',
      },
      {
        question: 'Do you offer daily office cleaning contracts?',
        answer: 'Yes. We offer daily, 3-times-per-week, and weekly recurring contracts with preferential rates for longer-term commitments.',
      },
      {
        question: 'Can you handle large corporate offices with multiple floors?',
        answer: 'Absolutely. We deploy multi-team operations for large offices and can assign a dedicated site supervisor to manage scheduling and quality.',
      },
      {
        question: 'Do you offer disinfection services?',
        answer: 'Yes. Our enhanced disinfection protocol uses hospital-grade disinfectant and electrostatic spraying for comprehensive surface coverage — ideal after illness outbreaks or during peak seasons.',
      },
      {
        question: 'Are your cleaning staff vetted?',
        answer: 'All Al Haya cleaning staff are background-checked, reference-verified, uniformed, and trained to our quality standards before being deployed to client premises.',
      },
    ],
    images: ['/images/services/office-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'restaurant-kitchen-cleaning',
    name: 'Restaurant & Kitchen Cleaning',
    slug: 'restaurant-kitchen-cleaning',
    category: 'commercial',
    shortDescription: 'Deep commercial kitchen cleaning in UAE. Grease traps, hoods, equipment, and full hygiene compliance.',
    fullDescription: `Commercial kitchens operate under enormous demands, generating extreme levels of grease, steam, smoke, and food residue on a daily basis. Without regular professional deep cleaning, this buildup presents serious fire hazards from grease accumulation in exhaust hoods and ducts, hygiene compliance failures that risk your trade license, and an environment that accelerates equipment deterioration. Our restaurant and kitchen deep cleaning team is specifically trained in commercial kitchen hygiene protocols and uses industrial-strength degreasers and specialist equipment to deliver results that standard cleaning simply cannot match.

Our service is suitable for all types of food service operations — fine dining restaurants, fast food outlets, hotel kitchens, catering facilities, school and hospital canteens, food manufacturing premises, and cloud kitchens. We work during off-peak hours, late nights, or early mornings to minimize any impact on your operations.

The commercial kitchen deep clean covers exhaust hood interior and exterior degreasing, ductwork degreasing to the required access points, extraction fan blade cleaning, fryer oil drain and deep clean, grill and griddle degreasing, oven and combi-oven deep clean (including racks, glass, and door seals), range top and burner cleaning, stainless steel work surface degreasing and polishing, floor degreasing and sanitization (including floor drain cleaning), wall tile and grout scrubbing, refrigeration unit external and internal cleaning and gasket sanitization, waste area sanitization, and grease trap pumping and cleaning where applicable.

After cleaning, we provide a hygiene compliance report documenting the work completed, chemical usage, and the condition of key equipment — a document that supports your food safety management records and can be presented to UAE municipality inspectors.

Pricing is based on kitchen size and the extent of buildup. We recommend monthly deep cleaning for high-volume kitchens and quarterly for lower-volume operations. Emergency cleaning is available for kitchens facing imminent inspection.`,
    benefits: [
      'Reduces fire risk from grease buildup in hoods and ducts',
      'Supports UAE municipality hygiene compliance',
      'Trained in commercial kitchen cleaning protocols',
      'Hygiene compliance report provided',
      'Works during off-peak hours to avoid disruption',
      'Emergency cleaning available before inspections',
    ],
    process: [
      'Kitchen assessment and scope agreement',
      'Exhaust hood, duct, and fan degreasing',
      'Fryer, grill, oven, and equipment deep clean',
      'Surface, floor, and drain degreasing and sanitization',
      'Refrigeration and waste area cleaning',
      'Hygiene compliance report issued',
    ],
    faqs: [
      {
        question: 'How often should a commercial kitchen be deep cleaned?',
        answer: 'High-volume kitchens should be deep cleaned monthly. Lower-volume kitchens — quarterly. UAE municipality regulations require documented evidence of regular cleaning.',
      },
      {
        question: 'Do you provide a cleaning compliance report?',
        answer: 'Yes. After every deep clean, we provide a hygiene compliance report documenting work completed, chemicals used, and equipment condition — suitable for food safety management records and municipality inspections.',
      },
      {
        question: 'Can you clean during our closed hours?',
        answer: 'Yes. We schedule commercial kitchen cleans during your closed hours — late nights, early mornings, or rest days — to ensure zero impact on service.',
      },
      {
        question: 'Do you clean grease traps?',
        answer: 'Yes. Grease trap cleaning is included as part of our full kitchen deep clean. We can also arrange dedicated grease trap pumping and cleaning on its own schedule.',
      },
      {
        question: 'Can you help if we have a municipality inspection coming up?',
        answer: 'Yes. We offer priority emergency deep cleaning for kitchens facing imminent inspections. Contact us as early as possible to schedule.',
      },
      {
        question: 'What types of food businesses do you serve?',
        answer: 'Restaurants, cafes, hotels, catering companies, school and hospital canteens, cloud kitchens, food manufacturing facilities, and supermarket food preparation areas.',
      },
    ],
    images: ['/images/services/restaurant-kitchen-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'marble-polishing',
    name: 'Marble Polishing & Restoration',
    slug: 'marble-polishing',
    category: 'specialized',
    shortDescription: 'Expert marble polishing and restoration in UAE. Restore the natural shine and seal your marble surfaces.',
    fullDescription: `Marble is one of the most beautiful and prestigious natural stones used in UAE homes and commercial spaces, but it requires specialist care to maintain its appearance and integrity. Unlike ceramic or porcelain tiles, marble is a calcium carbonate-based stone that is naturally porous and prone to etching from acids (including lemon juice, vinegar, and certain cleaning products), scratching from grit and abrasive cleaners, and dulling from foot traffic and everyday wear. Our marble polishing and restoration service uses diamond abrasive technology and professional polishing compounds to restore your marble to its original factory finish — or better.

We offer the full spectrum of marble care services, from light polishing of surface scratches to comprehensive restoration of severely damaged or neglected marble. The appropriate service is determined during an initial assessment of the marble's current condition, the type and severity of damage, and the client's desired finish (matte, satin, or high gloss).

Marble grinding is used for floors with deep scratches, lippage (uneven tile edges), or surface irregularities that cannot be addressed by polishing alone. Using progressively finer diamond abrasive pads on a planetary grinding machine, we level the surface and remove all visible damage. Marble honing removes surface scratches, etch marks, and light staining to produce a smooth, matte finish without shine — a preferred finish for high-traffic areas. Marble polishing uses fine diamond pads and polishing powders or compounds to produce the characteristic high-gloss mirror finish associated with premium marble. Crystallization is an alternative high-gloss treatment that uses heat and a chemical reaction to harden the surface layer and produce exceptional shine. Marble sealing applies a penetrating impregnator sealer that fills the pores of the marble without altering its appearance, significantly reducing the penetration of staining liquids and making ongoing maintenance easier.

We work on all marble surfaces — floors, walls, countertops, staircases, bathroom surfaces, and feature columns. We also handle other natural stones including travertine, limestone, onyx, and terrazzo. Service is available across all 7 UAE Emirates with competitive pricing for large areas.`,
    benefits: [
      'Diamond abrasive technology restores factory shine',
      'Handles grinding, honing, polishing, and sealing',
      'Works on floors, walls, countertops, and staircases',
      'Also treats travertine, limestone, and terrazzo',
      'Penetrating sealer protects against future staining',
      'Large-area competitive pricing',
    ],
    process: [
      'Surface assessment and condition grading',
      'Diamond grinding to remove deep damage (if required)',
      'Progressive honing to smooth the surface',
      'Polishing with compounds to achieve target finish',
      'Crystallization or final polishing pass',
      'Penetrating sealer application and buffing',
    ],
    faqs: [
      {
        question: 'Can you restore marble that has gone dull?',
        answer: 'Yes. Dull marble is almost always fully restorable through professional polishing. The process removes the surface layer that has been etched or scratched, revealing the pristine stone beneath.',
      },
      {
        question: 'Can you remove etch marks from marble?',
        answer: 'Etch marks — white dull spots caused by acid contact — are removed through honing and polishing. In most cases they can be completely eliminated. Very deep etching may require grinding first.',
      },
      {
        question: 'How long does marble polishing take?',
        answer: 'A typical living room marble floor of 30–40 sqm takes approximately 4–6 hours. Larger areas or those requiring grinding may take 1–2 days. We will give you an accurate timeframe after assessment.',
      },
      {
        question: 'How long before I can walk on the marble after polishing?',
        answer: 'The marble can usually be walked on within 2–4 hours of completion. We recommend avoiding wet mopping for 24 hours to allow the sealer to cure fully.',
      },
      {
        question: 'Do you seal the marble after polishing?',
        answer: 'Yes. Sealing is included in our polishing service and is strongly recommended. The penetrating sealer protects the marble against staining from liquids such as coffee, oil, and wine without affecting the finish.',
      },
      {
        question: 'Do you work on marble countertops and bathroom surfaces?',
        answer: 'Yes. We polish and seal marble countertops, bathroom vanities, shower walls, and any other marble surface. These are treated using smaller, precision equipment appropriate for the space.',
      },
    ],
    images: ['/images/services/marble-polishing.webp'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Marble Pro UAE', url: 'https://marblepro.ae' },
  },
]

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)

export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  services.filter((s) => s.category === category)
