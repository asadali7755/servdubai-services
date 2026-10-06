import type { Service } from './services'

/**
 * Car services added Oct 2026 (client confirmed: car wash at home and AC & odour
 * sanitisation across all 7 emirates). Car polishing/ceramic is NOT offered — do not add it.
 * Car seat / interior cleaning already exists as 'car-interior-detailing'.
 * No prices are stated here on purpose — quotes are confirmed on WhatsApp.
 */
const ALL_EMIRATES = ['dubai', 'sharjah', 'abu-dhabi', 'ajman', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain']

export const CAR_SERVICES: Service[] = [
  {
    id: 'car-wash-at-home',
    name: 'Car Wash at Home',
    heroTitle: 'Car Wash at Home in Dubai & UAE',
    heroSubtitle:
      'A full outside-and-inside car wash at your villa, building parking or office — no queue at the petrol station. Book on WhatsApp in any of the 7 emirates.',
    slug: 'car-wash-at-home',
    category: 'domestic',
    shortDescription:
      'Car wash at your home, building parking or office anywhere in the UAE — exterior wash, interior vacuum, glass and tyres. Book on WhatsApp.',
    fullDescription: `Car Wash at Your Doorstep

In the UAE a car collects a layer of fine dust within a day or two, and a weekly wash at a petrol station often means a queue in the heat. Our car wash at home service brings the wash to wherever the car is parked — the driveway of a villa, a basement parking bay, or the office car park.

What a Home Car Wash Includes

A standard visit covers the full exterior body, wheels and tyres, door shuts, and all glass inside and out, followed by a vacuum of seats, mats and boot. The team brings its own equipment and cleaning products. If your building has rules about water use in the parking, tell us when you book and we plan the method around them.

One Car or a Whole Family Fleet

Many households book two or three cars in the same visit, and some businesses book their company cars on a weekly or fortnightly schedule. Washing several cars in one stop is the easiest way to keep every vehicle clean without anyone losing an evening.

Add Interior Cleaning When You Need It

A wash keeps the car looking clean week to week. When the seats need more than a vacuum, add our car interior deep cleaning, or AC and odour treatment if the cabin smells. You can mix services in one booking.

Across All 7 Emirates

Madinat Alhaya offers car wash at home in Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah and Umm Al Quwain. Send your location and car type on WhatsApp and we confirm the price and the next available slot.`,
    contentSections: [
      { headingLevel: 'h2', heading: 'Why book a car wash at home?', text: 'You save the drive and the queue, the car is washed where it already is, and you can book the same slot every week. It also suits people without a car wash close to their building.' },
      { headingLevel: 'h3', heading: 'Villa driveways', text: 'For villas we wash the car on the driveway or in the garage and can do several family cars in one visit.' },
      { headingLevel: 'h3', heading: 'Building parking', text: 'For apartment towers we work in your allocated bay. Share the building name and bay number, and any rules from building management.' },
      { headingLevel: 'h3', heading: 'Office and company cars', text: 'Company cars can be washed in the office car park during working hours on a regular schedule.' },
    ],
    benefits: [
      'Exterior body wash, wheels and tyres',
      'Inside and outside glass',
      'Seats, mats and boot vacuumed',
      'At your villa, building parking or office',
      'Several cars in one visit',
      'Weekly or fortnightly plans available',
      'Price confirmed on WhatsApp before the visit',
      'All 7 emirates covered',
    ],
    process: [
      'Send your location, car type and parking details on WhatsApp',
      'We confirm the price and time slot',
      'Exterior wash, wheels and tyres',
      'Glass cleaned inside and out',
      'Interior vacuum of seats, mats and boot',
      'Quick walk-round check with you',
    ],
    faqs: [
      { question: 'Can you wash my car in a building basement parking?', answer: 'Yes, in most buildings. Tell us the building name and bay number when you book, and any rules your building has, so we can plan the right method.' },
      { question: 'Do I need to provide water or electricity?', answer: 'Usually not. The team brings its own equipment. If something is needed from your side we tell you before the visit.' },
      { question: 'Can you wash more than one car in the same visit?', answer: 'Yes. Many families and offices book several cars together. Send the number and type of cars for one combined quote.' },
      { question: 'Do you offer a weekly car wash plan?', answer: 'Yes. You can book the same day and time every week or every two weeks.' },
      { question: 'Do I need to be there during the wash?', answer: 'Not always. If the car is accessible and you leave the key with security or a family member, we can wash it and send photos when done.' },
    ],
    images: ['/images/car-services/snow-foam-car-wash-at-home-dubai.webp', '/images/car-services/car-wheel-rim-cleaning-car-wash-at-home.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'car-ac-odor-sanitization',
    name: 'Car AC & Odor Sanitization',
    heroTitle: 'Car AC Vent Cleaning & Odor Removal UAE',
    heroSubtitle:
      'Musty smell when the AC starts? Smoke or pet odour that won’t go away? We clean and sanitise the cabin, vents and upholstery at your doorstep.',
    slug: 'car-ac-odor-sanitization',
    category: 'specialized',
    shortDescription:
      'Car AC vent cleaning, smoke and pet odour removal, and full cabin sanitisation at your home or office across the UAE.',
    fullDescription: `Where Car Smells Come From

In the UAE the car AC runs almost all year. Moisture collects in the system and on the vents, and dust and organic matter build up with it — which is why many cars smell musty for the first minutes after starting. Spilled drinks, food, smoke and pets add their own odours that soak into seats, carpets and the roof lining.

Cleaning, Not Covering

Air fresheners only mask the problem. We clean the sources: vents and accessible AC parts, seats and carpets, and the roof lining, then sanitise the cabin. The goal is a car that smells of nothing at all.

Smoke and Pet Odour

Smoke and pet smells sit deep in fabric and foam. These jobs combine interior deep cleaning with odour treatment, and heavy cases can need more than one treatment. We tell you honestly what to expect.

Good After Illness or a Used-Car Purchase

Cabin sanitisation is also popular after someone in the family has been unwell, or after buying a used car whose history you don't know.

At Your Doorstep in All 7 Emirates

The work is done where the car is parked — home, building parking or office — anywhere in the UAE. Book on WhatsApp with your car type and what the smell is like.`,
    contentSections: [
      { headingLevel: 'h2', heading: 'Is it the AC or the seats?', text: 'If the smell appears when the AC starts, the source is usually in the vents or system. If it is there all the time, it is usually in the upholstery or carpets. Many cars need both cleaned.' },
      { headingLevel: 'h3', heading: 'Cabin air filter', text: 'A blocked cabin filter makes smells and dust worse. We check it and tell you if it needs replacing.' },
    ],
    benefits: [
      'AC vent cleaning and sanitisation',
      'Smoke odour treatment',
      'Pet hair and pet odour removal',
      'Seats, carpets and roof lining cleaned at the source',
      'Full cabin sanitisation',
      'Cabin filter check',
      'At your home or office',
      'All 7 emirates covered',
    ],
    process: [
      'Ask about the smell and when it appears',
      'Vacuum and remove loose debris',
      'Vent and accessible AC area cleaning',
      'Upholstery and carpet cleaning where the smell sits',
      'Cabin sanitisation and odour treatment',
      'Air-out and smell check with you',
    ],
    faqs: [
      { question: 'Why does my car smell when I turn on the AC?', answer: 'Usually moisture and dust build up in the vents and AC system. Cleaning and sanitising those areas typically removes the musty smell.' },
      { question: 'Can you remove cigarette smell from a car?', answer: 'In most cases the smell can be removed or greatly reduced by cleaning the upholstery and treating the cabin. Heavy smoke cars may need more than one treatment.' },
      { question: 'Is the treatment safe for children and pets?', answer: 'We air the car out after treatment and tell you when it is ready to use. Let us know about anyone with allergies when booking.' },
      { question: 'Do you replace the cabin air filter?', answer: 'We check it and tell you if it needs replacing. Let us know if you want us to arrange the filter.' },
    ],
    images: ['/images/car-services/car-ac-vent-cleaning-odor-removal.webp', '/images/car/car-interior-steering-wipe.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
]
