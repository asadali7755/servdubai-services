export type ServiceCategory = 'domestic' | 'commercial' | 'specialized'

export interface ExternalWebsite {
  name: string
  url: string
}

export interface Service {
  id: string
  name: string
  slug: string
  category: ServiceCategory
  shortDescription: string
  fullDescription: string
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
    shortDescription: 'Professional sofa deep cleaning and shampooing service across UAE. Removes stains, odors, and allergens.',
    fullDescription: `Our professional sofa deep cleaning service uses advanced hot-water extraction and eco-friendly shampoos to restore your sofa to its original freshness. We treat all fabric types including velvet, cotton, linen, and microfiber. Our certified technicians remove deep-set stains, eliminate odors, and extract dust mites and allergens, leaving your sofa hygienically clean and looking new.

We cover all sofa types — L-shaped, sectional, 3-seater, corner sofas, and fabric recliners. Our quick-dry technology means your sofa is ready to use within 3–4 hours. Available across all 7 UAE Emirates with same-day service in most areas.`,
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
    fullDescription: `Our carpet cleaning service delivers a deep, thorough clean for all types of carpets and rugs. Using professional hot-water extraction (steam cleaning) combined with our specialist shampoo solutions, we remove embedded dirt, pet hair, food stains, and allergens from the carpet fibers.

We clean wall-to-wall carpets, area rugs, Persian rugs, and runner carpets. Our team is trained to handle delicate handmade rugs with care. Post-cleaning, we apply a protective treatment to extend the life of your carpet. Carpets are typically dry within 2–6 hours depending on thickness.`,
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
    fullDescription: `We spend a third of our lives on our mattresses, yet they harbor millions of dust mites, dead skin cells, sweat residue, and bacteria. Our mattress deep cleaning service uses UV sanitization combined with hot-water extraction to eliminate these health hazards.

Our process: vacuum to remove surface debris, apply enzyme-based pre-treatment to break down stains and biological matter, hot-water extraction, UV-C light sanitization, and deodorization. The result is a mattress that is visibly cleaner, odor-free, and significantly reduced in allergen levels. Recommended every 6 months for optimal sleep health.`,
    images: ['/images/services/mattress-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    slug: 'curtain-cleaning',
    category: 'domestic',
    shortDescription: 'Professional curtain cleaning in UAE. On-site or take-away service for all curtain types and fabrics.',
    fullDescription: `Curtains trap dust, cooking fumes, and allergens over time, affecting your indoor air quality and the overall freshness of your home. Our curtain cleaning service offers both on-site steam cleaning (curtains remain hanging) and a take-away service for thorough machine washing and pressing.

We handle all curtain types: sheer, blackout, velvet, silk, cotton, and linen. Our on-site process uses gentle low-pressure steam that cleans and freshens without removing the curtains from the rails. For heavily soiled or delicate curtains, our take-away service includes professional washing, drying, pressing, and re-hanging.`,
    images: ['/images/services/curtain-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'car-interior-detailing',
    name: 'Car Interior Detailing',
    slug: 'car-interior-detailing',
    category: 'domestic',
    shortDescription: 'Complete car interior detailing across UAE. Deep clean seats, carpets, dashboard, and eliminate odors.',
    fullDescription: `Our car interior detailing service transforms the inside of your vehicle, removing years of dust, stains, and odors. We deep clean every surface including leather and fabric seats, carpets, floor mats, dashboard, door panels, and roof lining.

Our process uses specialized automotive cleaning products, hot-water extraction for fabric seats and carpets, leather conditioning for leather surfaces, and UV-safe dashboard protectant. We also apply an anti-bacterial treatment and deodorize the entire interior. Available at your location across all UAE Emirates — we come to you.`,
    images: ['/images/services/car-interior-detailing.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'dining-chair-cleaning',
    name: 'Dining Chair Cleaning',
    slug: 'dining-chair-cleaning',
    category: 'domestic',
    shortDescription: 'Professional dining chair cleaning in UAE. Remove food stains and freshen fabric or leather dining chairs.',
    fullDescription: `Dining chairs face constant exposure to food spills, grease, and body contact, making them one of the most frequently soiled furniture items in the home. Our dining chair cleaning service uses targeted stain treatment and hot-water extraction to restore your chairs.

We clean all dining chair types: fabric-upholstered, leather, faux leather, and mixed-material chairs. Our technicians apply pre-treatment to food and grease stains, extract deeply embedded dirt, and sanitize the surface. Leather chairs receive a conditioning treatment after cleaning to prevent cracking.`,
    images: ['/images/services/dining-chair-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'villa-deep-cleaning',
    name: 'Villa Deep Cleaning',
    slug: 'villa-deep-cleaning',
    category: 'commercial',
    shortDescription: 'Complete villa deep cleaning service in UAE. Move-in/move-out, post-construction, and periodic deep clean.',
    fullDescription: `Our villa deep cleaning service covers every room, surface, and fixture in your villa with meticulous attention to detail. Whether you need a move-in clean, move-out clean, post-construction clean, or a thorough periodic deep clean, our trained team delivers exceptional results.

The service includes: all rooms cleaned top to bottom, kitchen degreasing and appliance cleaning, bathroom deep scrubbing and sanitization, floor mopping and polishing, window interior cleaning, balcony cleaning, and removal of all cleaning waste. We bring all equipment and eco-friendly cleaning products.`,
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
    fullDescription: `Our apartment cleaning service offers flexible packages to suit your needs — from a quick regular clean to a comprehensive deep clean. Our experienced cleaners work efficiently to deliver a spotless, fresh-smelling apartment every time.

Regular clean: dusting, vacuuming, mopping, bathroom and kitchen surface cleaning, bin emptying. Deep clean: everything in the regular clean plus oven cleaning, refrigerator cleaning, cabinet interior cleaning, bathroom descaling, window sill cleaning, and balcony sweeping. Move-in/move-out clean: the deepest level, designed to meet tenancy requirements.`,
    images: ['/images/services/apartment-cleaning.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'office-cleaning',
    name: 'Office Cleaning',
    slug: 'office-cleaning',
    category: 'commercial',
    shortDescription: 'Professional office cleaning services in UAE. Daily, weekly, and deep cleaning for commercial spaces.',
    fullDescription: `A clean office boosts productivity, creates a professional impression, and promotes employee wellbeing. Our office cleaning service covers all commercial spaces — from small offices to large corporate floors.

Services include: workstation and desk cleaning, common area and reception cleaning, kitchen and pantry cleaning, bathroom sanitization, floor care (mopping, vacuuming), glass and partition cleaning, waste management, and supply restocking. We offer flexible scheduling — early morning, evening, or weekend cleans to minimize disruption to your business operations.`,
    images: ['/images/services/office-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'restaurant-kitchen-cleaning',
    name: 'Restaurant & Kitchen Cleaning',
    slug: 'restaurant-kitchen-cleaning',
    category: 'commercial',
    shortDescription: 'Deep commercial kitchen cleaning in UAE. Grease traps, hoods, equipment, and full hygiene compliance.',
    fullDescription: `Commercial kitchens require specialist deep cleaning to meet health and safety standards and prevent fire hazards from grease buildup. Our restaurant and kitchen cleaning team is trained in commercial kitchen hygiene protocols.

Our service covers: exhaust hood and ductwork degreasing, fryer and grill deep cleaning, oven and combi-oven cleaning, floor degreasing and sanitization, grease trap cleaning, refrigeration unit cleaning, wall tile and grout scrubbing, and waste area sanitization. We use food-safe cleaning agents and provide a hygiene compliance report after each service.`,
    images: ['/images/services/restaurant-kitchen-cleaning.jpg'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'marble-polishing',
    name: 'Marble Polishing & Restoration',
    slug: 'marble-polishing',
    category: 'specialized',
    shortDescription: 'Expert marble polishing and restoration in UAE. Restore the natural shine and seal your marble surfaces.',
    fullDescription: `Marble is a premium natural stone that requires specialist care to maintain its luster and prevent damage from etching, scratching, and staining. Our marble polishing and restoration service uses diamond abrasive pads and professional polishing compounds to restore your marble to its original factory finish.

Services include: marble grinding (for deep scratches and lippage), honing (to remove surface scratches and etch marks), polishing (to restore high shine), crystallization (for long-lasting gloss), and sealing (to protect against future staining). We work on floors, countertops, walls, and staircase marble throughout UAE.`,
    images: ['/images/services/marble-polishing.webp'],
    availableInEmirates: ALL_EMIRATES,
    externalWebsite: { name: 'Marble Pro UAE', url: 'https://marblepro.ae' },
  },
]

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)

export const getServicesByCategory = (category: ServiceCategory): Service[] =>
  services.filter((s) => s.category === category)
