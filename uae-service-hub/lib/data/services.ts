export type ServiceCategory = 'domestic' | 'commercial' | 'specialized'

export interface ExternalWebsite {
  name: string
  url: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  id: string
  name: string
  slug: string
  category: ServiceCategory
  shortDescription: string
  fullDescription: string
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
    slug: 'sofa-cleaning',
    category: 'domestic',
    shortDescription: 'Best professional sofa cleaning services in Dubai, Abu Dhabi & Sharjah. Expert upholstery shampooing at home — removes stains, odors & allergens. Same-day service across UAE.',
    fullDescription: `Professional Sofa Deep Cleaning & Shampooing in Dubai: The Ultimate Guide to Reviving Your Upholstery

In a city like Dubai, where golden sands and desert winds are part of daily life, our homes often bear the brunt of the environment. While we focus on floors and windows, one of the most used items in any household — the sofa — is often the most neglected.

Whether you are dealing with dust from a summer sandstorm, coffee spills, or just general wear and tear, professional sofa deep cleaning and shampooing in Dubai is no longer a luxury; it is a necessity for a healthy, dust-free home.

Why Your Sofa Needs More Than Just a Surface Vacuum

In Dubai's high-humidity environment, sofas act like giant filters, trapping dust mites, allergens, and microscopic pollutants. Standard home vacuuming only reaches the surface, leaving deep-seated grime untouched. Our professional sofa cleaning services in Dubai use advanced hot-water extraction technology that penetrates deep into every fiber — removing what ordinary vacuuming simply cannot reach.

Health and Indoor Air Quality

Deep cleaning removes allergens that can trigger asthma or skin sensitivities. For families with children and pets, our professional sofa cleaning services ensure that the heart of your living room is hygienic and safe. Our upholstery sofa cleaning services in Dubai use non-toxic, eco-friendly products that are completely safe for children and pets.

Extending the Life of Your Furniture

Upholstery is an investment. Dust particles act like tiny sandpaper, grinding down fabric fibers every time you sit. Our professional sofa cleaning services at home remove these abrasive particles, preserving the fabric's integrity for years. Whether you need fabric sofa cleaning services near you or best sofa cleaning services in Abu Dhabi, our certified technicians deliver consistent results.

Eliminating Stubborn Odors

Dubai's heat can sometimes lead to trapped moisture and musty smells within sofa cushions. Our professional-grade deodorizers and shampooing treatments neutralize these odors at the source — not just masking them. This is why residents across Dubai, Sharjah, and Abu Dhabi trust Al Haya for their sofa cleaning services.

Our Sofa Cleaning Services Cover All UAE Emirates

Al Haya provides the best sofa cleaning services in Dubai, sofa cleaning services in Abu Dhabi, sofa cleaning services in Sharjah, and across all 7 UAE Emirates. We offer carpet sofa cleaning services as a package deal, covering both your sofas and carpets in a single visit. Our sofa cleaning services cost is transparent — no hidden charges, free quotes via WhatsApp.

We handle all sofa types: L-shaped, sectional, 3-seater, corner sofas, fabric recliners, velvet sofas, leather sofas, and modular configurations. Our quick-dry technology means your sofa is ready to use within 3–4 hours after our professional sofa cleaning services at home.`,
    benefits: [
      'Best sofa cleaning services in Dubai & Abu Dhabi',
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
        question: 'What is the sofa cleaning services cost in Dubai?',
        answer: 'Our sofa cleaning services cost depends on sofa size and type. A standard 3-seater starts from AED 150. We provide free quotes via WhatsApp — no hidden charges. We offer the best sofa cleaning services in Dubai at competitive prices.',
      },
      {
        question: 'Do you provide sofa cleaning services at home in Dubai?',
        answer: 'Yes. All our professional sofa cleaning services are done at your home across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates. Our technicians arrive with all equipment — you do not need to move the sofa anywhere.',
      },
      {
        question: 'Are you the best sofa cleaning services in Abu Dhabi?',
        answer: 'Al Haya provides professional sofa cleaning services in Abu Dhabi with the same certified technicians and equipment used in Dubai. Same-day service is available across Abu Dhabi including Khalifa City, Yas Island, and Al Ain.',
      },
      {
        question: 'Do you offer upholstery sofa cleaning services in Dubai for fabric sofas?',
        answer: 'Yes. Our upholstery sofa cleaning services in Dubai cover all fabric types — velvet, cotton, linen, microfiber, and synthetic blends. We also offer fabric sofa cleaning services near you with same-day availability.',
      },
      {
        question: 'Can I book carpet sofa cleaning services together?',
        answer: 'Yes. We offer carpet sofa cleaning services as a combined package at a discounted rate. Book both sofa and carpet cleaning in one visit and save on the total sofa cleaning services cost.',
      },
      {
        question: 'Do you offer sofa cleaning services in Sharjah?',
        answer: 'Yes. Our sofa cleaning services in Sharjah cover all areas including Sharjah City, Al Nahda, Al Majaz, Al Khan, and Al Qasimia. Same-day professional sofa cleaning services are available in most Sharjah locations.',
      },
    ],
    images: ['/images/services/sofa-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Sofa Shampooing Dubai', url: 'https://sofashampooingdubai.com' },
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning & Shampooing',
    slug: 'carpet-cleaning',
    category: 'domestic',
    shortDescription: 'Expert carpet cleaning and shampooing in UAE. Deep cleans all carpet types — rugs, wall-to-wall, Persian.',
    fullDescription: `Our carpet cleaning service delivers a thorough, professional deep clean for all types of carpets and rugs across UAE. Using professional hot-water extraction — also known as steam cleaning — combined with our specialist shampoo solutions, we remove embedded dirt, pet hair, food stains, allergens, and bacteria from deep within the carpet fibers, delivering results that ordinary vacuuming and household cleaning products cannot achieve.

Carpets are one of the largest surfaces in any home or office, and they act as a filter — trapping dust, pollen, mold spores, pet dander, and other airborne particles over time. When this filter becomes saturated, those particles are released back into the air you breathe. A regular professional carpet clean significantly improves indoor air quality and is particularly important for households with allergy sufferers, young children, or pets.

We clean wall-to-wall carpets, area rugs, Persian rugs, runner carpets, and commercial carpeting. Our team is specifically trained to handle delicate handmade rugs with care — assessing fibers and dyes before selecting the safest and most effective cleaning method. For natural fiber rugs such as wool, silk, or jute, we use low-moisture techniques that clean effectively without shrinkage or color bleeding.

Our process begins with a thorough dry-vacuuming pass to remove loose debris, followed by a pre-treatment application to break down oils and staining. The hot-water extraction stage uses heated water and extraction simultaneously to flush contaminants from the fiber base up through the pile and into our containment tanks. Post-cleaning, we apply a protective treatment that shields the carpet fibers from future staining and extends the life of your carpet. Typical drying time is 2–6 hours depending on carpet thickness and ambient conditions.

Al Haya provides carpet cleaning services across all 7 UAE Emirates — Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — with same-day availability in most areas.`,
    benefits: [
      'Deep hot-water extraction removes embedded dirt and allergens',
      'Safe for all carpet types including Persian and wool rugs',
      'Removes pet hair, food stains, and odors',
      'Protective treatment extends carpet life',
      'Improves indoor air quality',
      'Same-day service available',
    ],
    process: [
      'Dry vacuum to remove loose debris',
      'Pre-treatment spray for oils and stains',
      'Hot-water extraction (steam cleaning)',
      'Spot treatment for stubborn stains',
      'Protective fiber treatment application',
      'Speed-dry with air movers',
    ],
    faqs: [
      {
        question: 'How long does carpet cleaning take?',
        answer: 'Cleaning time depends on the size and condition of the carpet — a typical room takes 30–60 minutes. Drying takes 2–6 hours depending on thickness and ventilation.',
      },
      {
        question: 'Can you remove old or stubborn stains?',
        answer: 'We can remove the majority of stains using our specialist pre-treatment solutions. Some very old or chemically set stains may be reduced but not fully eliminated — we will advise you honestly after the pre-inspection.',
      },
      {
        question: 'Do you clean Persian and handmade rugs?',
        answer: 'Yes. We handle Persian, Turkish, Kashmiri, and other handmade rugs with specialist low-moisture techniques that protect delicate fibers and dyes.',
      },
      {
        question: 'Is steam cleaning safe for all carpets?',
        answer: 'Hot-water extraction is safe for most synthetic and wool carpets. For natural fiber rugs such as jute or sisal, we use low-moisture methods instead. Our technicians assess each carpet before selecting the appropriate method.',
      },
      {
        question: 'How often should carpets be professionally cleaned?',
        answer: 'For homes with children or pets, every 6 months is recommended. For lighter-use areas, annual cleaning is sufficient. Commercial carpets typically require quarterly cleaning.',
      },
      {
        question: 'Do you move furniture before cleaning?',
        answer: 'We move lighter furniture items at no extra charge. For heavy furniture such as wardrobes or beds, we clean around them. Please let us know in advance if you have specific requirements.',
      },
    ],
    images: ['/images/services/carpet-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Carpet Cleaning Dubai', url: 'https://carpetcleaningdubai.com' },
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Deep Cleaning',
    slug: 'mattress-cleaning',
    category: 'domestic',
    shortDescription: 'Deep mattress cleaning service in UAE. Eliminates dust mites, stains, and bacteria for a healthier sleep.',
    fullDescription: `We spend roughly a third of our lives on our mattresses, yet most people never consider professional cleaning. The average mattress can harbor millions of dust mites, dead skin cells, sweat residue, bacteria, mold spores, and pet dander — all invisible to the naked eye. These contaminants are directly linked to allergies, asthma, eczema, and disrupted sleep quality. Our mattress deep cleaning service addresses this hidden health hazard using a combination of UV sanitization and hot-water extraction.

Our cleaning process is methodical and thorough. We begin with a powerful dry vacuum pass using a specialist mattress attachment that agitates and extracts surface debris, dust mites, and loose particles. We then apply an enzyme-based pre-treatment solution to break down biological matter — sweat, urine, and other organic stains — before performing hot-water extraction to flush contaminants from deep within the mattress layers. This is followed by UV-C light sanitization, which destroys bacteria, viruses, and mold at the cellular level without any chemical residue. Finally, we deodorize the mattress with a fresh-scent neutralizer.

Our service is particularly recommended for families with young children, allergy sufferers, asthma patients, and anyone who experiences unexplained nighttime congestion or sneezing. A professionally cleaned mattress supports genuinely restorative sleep by eliminating the biological triggers that cause nighttime discomfort.

We treat all mattress types — foam, memory foam, latex, spring, and pocket spring — adjusting the moisture level and technique to suit each. Single, double, queen, and king sizes are all covered. Typical drying time is 2–4 hours. We recommend professional mattress cleaning every 6 months for optimal results.

Al Haya offers mattress cleaning across all 7 UAE Emirates with flexible scheduling including early morning and evening appointments to minimize disruption to your routine.`,
    benefits: [
      'Eliminates dust mites, bacteria, and mold spores',
      'UV-C sanitization without chemical residue',
      'Improves sleep quality and reduces allergy symptoms',
      'Safe for all mattress types including memory foam',
      'Removes sweat stains and odors',
      'Recommended for allergy and asthma sufferers',
    ],
    process: [
      'Dry vacuum with specialist mattress attachment',
      'Enzyme pre-treatment for biological stains',
      'Hot-water extraction to flush deep contaminants',
      'UV-C light sanitization',
      'Deodorization and fresh-scent neutralizer',
      'Speed-dry — ready in 2–4 hours',
    ],
    faqs: [
      {
        question: 'How often should I have my mattress professionally cleaned?',
        answer: 'We recommend every 6 months. For allergy sufferers, asthma patients, or households with pets, every 3–4 months is ideal.',
      },
      {
        question: 'Can you remove urine stains from mattresses?',
        answer: 'Yes. Our enzyme-based pre-treatment is specifically designed to break down urine, sweat, and other biological stains. Fresh stains are almost always fully removable; older set stains are significantly reduced.',
      },
      {
        question: 'Is UV sanitization safe?',
        answer: 'UV-C light is the same technology used in hospitals and medical facilities to sanitize surfaces. It is highly effective against bacteria and viruses and leaves absolutely no chemical residue.',
      },
      {
        question: 'How long before I can sleep on the mattress after cleaning?',
        answer: 'The mattress is typically dry within 2–4 hours depending on thickness and ventilation. We recommend waiting until fully dry before putting bedding back on.',
      },
      {
        question: 'Do you clean all mattress sizes?',
        answer: 'Yes — single, double, queen, and king. We also clean cot mattresses and sofa bed mattresses.',
      },
      {
        question: 'Will the cleaning damage my memory foam mattress?',
        answer: 'No. We adjust moisture levels specifically for foam and memory foam mattresses to prevent saturation. Our technique is gentle yet highly effective on these materials.',
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
    shortDescription: 'Professional curtain cleaning in UAE. On-site or take-away service for all curtain types and fabrics.',
    fullDescription: `Curtains and drapes accumulate dust, cooking fumes, cigarette smoke, pet dander, and allergens at a remarkable rate — directly impacting your indoor air quality and the overall freshness of your home or office. Most curtains are cleaned far less frequently than they should be, often going years between cleans. Our professional curtain cleaning service offers both on-site steam cleaning and a full take-away service to suit your needs and fabric type.

Our on-site curtain cleaning uses gentle low-pressure steam that penetrates the fabric to loosen and remove dust, allergens, and surface grime — all without removing the curtains from the rails or tracks. This is ideal for most fabric types and is a particularly convenient option for large or heavy curtains that are difficult to take down. The steam also sanitizes the fabric, killing bacteria and dust mites, and the curtains are typically dry within 2–4 hours.

For heavily soiled curtains, delicate fabrics, or curtains requiring pressing and re-hanging, our take-away service is the better option. We carefully remove, label, and transport your curtains to our specialist cleaning facility where they undergo professional washing, drying, pressing, and quality inspection before being returned, re-hung, and adjusted. Fabrics handled include sheer, blackout, velvet, silk, cotton, linen, polyester, and eyelet curtains.

All cleaning agents used are pH-balanced and fabric-safe, protecting colors and preventing shrinkage or distortion. We inspect each curtain for colorfastness and existing damage before selecting the appropriate cleaning method, ensuring your curtains are returned in the best possible condition.

We service homes, villas, apartments, hotels, and commercial premises across all 7 UAE Emirates, with competitive pricing for large-volume orders.`,
    benefits: [
      'On-site steam or full take-away service options',
      'Handles all curtain types and fabric weights',
      'Removes dust, allergens, odors, and cooking fumes',
      'Pressing and re-hanging included in take-away service',
      'pH-balanced, fabric-safe cleaning agents',
      'Commercial and residential service available',
    ],
    process: [
      'Fabric assessment and colorfastness check',
      'On-site: low-pressure steam cleaning in place',
      'Take-away: careful removal, labeling, and transport',
      'Professional washing, drying, and pressing',
      'Quality inspection before return',
      'Re-hanging and adjustment',
    ],
    faqs: [
      {
        question: 'Do you take the curtains down to clean them?',
        answer: 'For on-site cleaning, curtains remain on the rails. For our take-away service, we carefully remove, label, clean, press, and re-hang them for you.',
      },
      {
        question: 'Can you clean blackout curtains?',
        answer: 'Yes. Blackout curtains are cleaned using our on-site steam method or take-away service depending on the fabric weight and the degree of soiling.',
      },
      {
        question: 'How long does on-site curtain cleaning take?',
        answer: 'On-site steam cleaning typically takes 1–3 hours depending on the number of curtains. They are usually dry within 2–4 hours.',
      },
      {
        question: 'Is curtain cleaning safe for silk and velvet?',
        answer: 'Yes, when handled correctly. We assess the fabric before selecting the method — delicate fabrics such as silk and velvet are dry-cleaned or hand-cleaned using specialist techniques.',
      },
      {
        question: 'How often should curtains be cleaned?',
        answer: 'We recommend professional cleaning at least once a year. Curtains in kitchens, smoking households, or homes with pets should be cleaned every 6 months.',
      },
      {
        question: 'Do you offer curtain cleaning for hotels and commercial premises?',
        answer: 'Yes. We have competitive pricing for large-volume orders and can arrange after-hours service to minimize disruption to hotel guests and office workers.',
      },
    ],
    images: ['/images/services/curtain-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'car-interior-detailing',
    name: 'Car Interior Detailing',
    slug: 'car-interior-detailing',
    category: 'domestic',
    shortDescription: 'Complete car interior detailing across UAE. Deep clean seats, carpets, dashboard, and eliminate odors.',
    fullDescription: `Our car interior detailing service delivers a comprehensive, professional deep clean of your vehicle's interior — removing years of accumulated dust, stains, odors, and bacteria from every surface. We service all vehicle types including sedans, SUVs, minivans, pickup trucks, and luxury cars, and we come to your location across all UAE Emirates so you do not need to drive anywhere.

The detailing process begins with a complete dry vacuum of all surfaces including seats, carpets, floor mats, boot area, and between seat cushions. We then deep clean fabric seats using hot-water extraction, which removes food stains, sweat residue, and embedded dirt from the fibers. Leather seats receive a dedicated leather cleaner followed by a conditioning treatment that restores softness and protects against UV cracking — particularly important in the UAE climate where leather can deteriorate rapidly.

Dashboard, door panels, centre console, air vents, and all plastic surfaces are cleaned with specialist automotive interior cleaners and detailed with soft brushes to reach into crevices and vents. The roof lining is carefully spot-cleaned to remove hand marks and staining without soaking the material. All glass surfaces are cleaned inside for streak-free visibility.

One of the most valued aspects of our service is odor elimination. UAE vehicles often develop persistent odors from food, pets, cigarette smoke, or mold caused by air conditioning condensation. We apply an anti-bacterial treatment and ozone-based deodorization that eliminates odor at the source rather than masking it.

After cleaning, we apply a UV-protective coating to the dashboard and interior plastics, a water-repellent treatment to fabric seats, and a conditioner to leather. The result is a vehicle interior that looks, smells, and feels showroom-fresh. The service typically takes 2–4 hours depending on vehicle size and condition.`,
    benefits: [
      'Full interior deep clean at your location',
      'Leather conditioning protects against UAE heat cracking',
      'Ozone deodorization eliminates odors at the source',
      'UV-protective coating for dashboard and plastics',
      'Hot-water extraction for fabric seats and carpets',
      'All vehicle types including luxury and SUVs',
    ],
    process: [
      'Full dry vacuum of all surfaces and crevices',
      'Hot-water extraction for fabric seats and carpets',
      'Leather cleaning and conditioning',
      'Dashboard, panels, and vents detailing',
      'Anti-bacterial treatment and ozone deodorization',
      'UV-protective and water-repellent coatings',
    ],
    faqs: [
      {
        question: 'Do you come to my location?',
        answer: 'Yes. Our technicians travel to your home, office, or any convenient location across all 7 UAE Emirates with all equipment included.',
      },
      {
        question: 'How long does car interior detailing take?',
        answer: 'Typically 2–4 hours depending on vehicle size and the condition of the interior. Heavily soiled vehicles or larger SUVs may take slightly longer.',
      },
      {
        question: 'Can you remove cigarette smell from the car?',
        answer: 'Yes. We use ozone-based deodorization which eliminates smoke and other persistent odors at the molecular level rather than masking them.',
      },
      {
        question: 'Is leather conditioning included?',
        answer: 'Yes. All leather surfaces receive a dedicated cleaner and conditioning treatment at no extra charge, which is particularly important in the UAE to prevent UV cracking.',
      },
      {
        question: 'What vehicles do you service?',
        answer: 'All vehicle types — sedans, SUVs, 4x4s, minivans, pickup trucks, and luxury vehicles. Please mention your vehicle type when booking.',
      },
      {
        question: 'Can I drive the car immediately after?',
        answer: 'We recommend leaving the car with windows open for 30–60 minutes after treatment to allow any residual moisture to dry fully before driving.',
      },
    ],
    images: ['/images/services/car-interior-detailing.jpg'],
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
    images: ['/images/services/dining-chair-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'villa-deep-cleaning',
    name: 'Villa Deep Cleaning',
    slug: 'villa-deep-cleaning',
    category: 'commercial',
    shortDescription: 'Complete villa deep cleaning service in UAE. Move-in/move-out, post-construction, and periodic deep clean.',
    fullDescription: `Our villa deep cleaning service is one of our most comprehensive offerings — a meticulous, room-by-room deep clean of your entire villa that goes far beyond standard housekeeping. Whether you need a move-in clean before moving into a new property, a move-out clean to meet tenancy agreement requirements, a post-construction clean to remove dust and debris, or a thorough periodic deep clean, our trained team delivers exceptional results consistently.

The service begins with a detailed walkthrough to assess the scope of cleaning required and document any pre-existing damage. We then work systematically through each room — starting from the highest surfaces and working down to the floors — ensuring that no area is missed. Our teams typically consist of 2–4 trained cleaners working in coordination, allowing us to complete most villas within 4–8 hours depending on size and condition.

Kitchen cleaning includes full degreasing of all surfaces, cabinet interior and exterior cleaning, oven and hob deep clean, refrigerator cleaning (inside, outside, and beneath), microwave and small appliance cleaning, sink descaling, and tile and grout scrubbing. Bathroom cleaning includes toilet deep clean, shower and bath descaling, tap and fixture polishing, mirror cleaning, tile and grout scrubbing, and floor sanitization.

Throughout the villa, we clean ceiling fans, light fixtures, switches, and sockets; wipe all doors, handles, and frames; clean window sills, window interiors, and track channels; dust and wipe all furniture surfaces; vacuum all carpeted areas; mop all hard floors; clean staircases; and sweep and clean balconies and terraces.

All cleaning materials and equipment are brought by our team — you do not need to provide anything. We use professional-grade, eco-friendly products that are highly effective without leaving harmful residues. Post-construction cleaning includes removal of construction dust, cement splatter, paint spots, and adhesive residue. We serve all villa types across all 7 UAE Emirates.`,
    benefits: [
      'Complete room-by-room deep clean from top to bottom',
      'Suitable for move-in, move-out, and post-construction',
      'Teams of 2–4 trained technicians',
      'All equipment and products provided',
      'Eco-friendly professional-grade products',
      'Available across all 7 UAE Emirates',
    ],
    process: [
      'Walkthrough assessment and scope agreement',
      'Top-to-bottom cleaning per room',
      'Kitchen full degreasing and appliance cleaning',
      'Bathroom deep scrub and sanitization',
      'Windows, fixtures, and furniture detailing',
      'Floor vacuuming, mopping, and balcony cleaning',
    ],
    faqs: [
      {
        question: 'How long does villa deep cleaning take?',
        answer: 'Most villas take 4–8 hours depending on size and condition. Large or heavily soiled villas may require additional time. We will give you an accurate estimate after the initial walkthrough.',
      },
      {
        question: 'Do I need to provide cleaning materials?',
        answer: 'No. Our team brings all necessary equipment, cleaning agents, mops, cloths, and consumables. You do not need to provide anything.',
      },
      {
        question: 'Do you offer post-construction cleaning?',
        answer: 'Yes. Post-construction cleaning is a specialist service that includes removal of construction dust, cement splatter, paint spots, adhesive residue, and debris. We restore the villa to a move-in-ready condition.',
      },
      {
        question: 'Can you do move-out cleaning that meets tenancy requirements?',
        answer: 'Absolutely. Our move-out clean is designed to restore the property to the condition required by most UAE tenancy agreements. We document the clean and can provide a completion report if needed.',
      },
      {
        question: 'How many cleaners will come?',
        answer: 'Typically 2–4 trained cleaners depending on villa size. We coordinate team deployment to complete the job efficiently within the agreed timeframe.',
      },
      {
        question: 'Do you clean inside wardrobes and kitchen cabinets?',
        answer: 'Yes. Interior cleaning of wardrobes, kitchen cabinets, and drawers is included in the deep cleaning service. Please ensure they are emptied before the appointment.',
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
    images: ['/images/services/office-cleaning.jpg'],
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
    images: ['/images/services/restaurant-kitchen-cleaning.jpg'],
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
