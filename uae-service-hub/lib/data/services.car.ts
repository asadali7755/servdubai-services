import type { Service } from './services'

/**
 * Car services added Oct 2026 (client confirmed: car wash at home, polish /
 * ceramic / detailing, AC & odour sanitisation — across all 7 emirates).
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

Add Interior or Polish When You Need It

A wash keeps the car looking clean week to week. When the seats need more than a vacuum, add our car interior deep cleaning; when the paint looks dull, add polishing. You can mix services in one booking.

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
    images: ['/images/car/car-wash-foam-garage.webp', '/images/car/car-wash-foam-brush.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
  {
    id: 'car-polishing-ceramic-coating',
    name: 'Car Polishing & Ceramic Coating',
    heroTitle: 'Car Polishing, Detailing & Ceramic Coating UAE',
    heroSubtitle:
      'Bring back the shine on sun-faded paint with machine polishing, and protect it with ceramic coating — done at your home or office across the UAE.',
    slug: 'car-polishing-ceramic-coating',
    category: 'specialized',
    shortDescription:
      'Machine car polishing, full detailing and ceramic coating at your home or office in the UAE. Restores shine and protects paint from sun and sand.',
    fullDescription: `Why UAE Paint Loses Its Shine

Strong sun, fine sand and frequent washing slowly dull a car's clear coat. Light swirl marks from automatic car washes and wiping dusty paint make the surface look hazy, especially on dark colours. Polishing removes a very thin layer of that damaged surface so the paint reflects light evenly again.

Machine Polishing

We start with a wash and decontamination so no grit is trapped under the pad, then polish panel by panel with a machine polisher. Light swirls and haze usually improve a lot; deep scratches that go through the clear coat cannot be polished out, and we tell you honestly which is which before we start.

Ceramic Coating

After polishing, a ceramic coating adds a hard protective layer on top of the paint. Coated cars are easier to wash, water and dust slide off more easily, and the paint is better protected from the sun. We explain the coating options and how to care for them when we quote.

Full Detailing Packages

Polishing and coating can be combined with interior deep cleaning, glass treatment and tyre dressing for a complete detail — useful before selling a car or after buying a used one.

Mobile, Across the UAE

The work is done at your villa, building parking or office in all 7 emirates. Polishing and coating need shade and a dry surface, so we agree the location and timing with you when booking.`,
    contentSections: [
      { headingLevel: 'h2', heading: 'Polish, coat or both?', text: 'Polishing fixes how the paint looks today. Ceramic coating protects it going forward. Most cars benefit from polishing first, then coating to keep the result longer.' },
      { headingLevel: 'h3', heading: 'Before selling a car', text: 'A polish and interior detail can make a used car present much better for photos and viewings.' },
      { headingLevel: 'h3', heading: 'After buying a used car', text: 'A full detail removes the previous owner’s wear and gives you a clean starting point.' },
    ],
    benefits: [
      'Machine polishing for swirl marks and haze',
      'Paint decontamination before polishing',
      'Ceramic coating for long-lasting protection',
      'Headlight restoration on request',
      'Full interior + exterior detailing packages',
      'Honest check of what can and cannot be polished out',
      'Done at your home or office',
      'All 7 emirates covered',
    ],
    process: [
      'Paint inspection and agreement on the result to expect',
      'Wash and decontamination',
      'Machine polishing panel by panel',
      'Wipe-down and inspection under light',
      'Ceramic coating application (if booked)',
      'Aftercare advice for the coating',
    ],
    faqs: [
      { question: 'Can polishing remove all scratches?', answer: 'No. Light swirls and haze usually improve a lot, but scratches that go through the clear coat cannot be polished away. We check the paint and tell you what to expect before starting.' },
      { question: 'Is ceramic coating worth it in the UAE?', answer: 'For many owners, yes: it makes washing easier and helps protect paint from sun and sand. We explain the options so you can decide.' },
      { question: 'Can polishing be done in my building parking?', answer: 'Often yes, if there is shade and space around the car. Share your parking details and we confirm.' },
      { question: 'How long does polishing take?', answer: 'It depends on the car size and condition. We give a time estimate with the quote.' },
      { question: 'Do you restore cloudy headlights?', answer: 'Yes, headlight restoration can be added to a polishing or detailing booking.' },
    ],
    images: ['/images/car/car-polish-machine-black.webp', '/images/car/car-polish-detailer.webp'],
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
    images: ['/images/car/car-interior-steering-wipe.webp', '/images/car/car-interior-seat-wipe.webp'],
    availableInEmirates: ALL_EMIRATES,
  },
]
