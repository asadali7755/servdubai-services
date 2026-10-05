import type { ComboIntro } from './comboIntros'

/**
 * Intros for combo pages added Oct 2026: car services in lower-competition
 * sub-areas (chosen from Google autocomplete demand + weak local SERPs), and
 * Palm Jumeirah floor care (Search Console shows the site already ranking for
 * "floorcare palm jumeirah" queries with no matching page).
 */
export const COMBO_INTROS_V2: Record<string, ComboIntro> = {
  'dubai-palm-jumeirah-floor-cleaning': {
    intro: "Floors on Palm Jumeirah are usually the most valuable surface in the home — large-format marble, limestone or porcelain running through frond villas and Shoreline apartments, with sea-facing glass letting in salt air. That salt settles as a dull film that ordinary mopping just spreads around. Our floor care on Palm Jumeirah starts with identifying the stone, then machine scrubbing and rinsing to lift the film and the dirt in grout lines. Where the stone itself has lost its shine, we tell you that polishing is the right job instead, rather than over-scrubbing it. Teams work room by room so the household keeps using the villa.",
    metaDescription: "Floor care on Palm Jumeirah — machine scrubbing for marble, limestone and porcelain in frond villas and Shoreline apartments. Free WhatsApp quote.",
  },

  /* ---------------- CAR WASH AT HOME ---------------- */
  'dubai-silicon-oasis-car-wash-at-home': {
    intro: "Dubai Silicon Oasis is full of residents who drive to work every day — from the towers around Silicon Gate to the townhouses near Semmer Villas — and most cars here sit in basement or open parking between trips. Our car wash at home in Silicon Oasis comes to that parking bay: exterior wash, wheels and tyres, glass inside and out, and a vacuum of seats and mats. Tell us your building name and bay number and we plan around any parking rules. Families often book two cars together, and weekly slots are popular with commuters who don't want to queue at a petrol station after work.",
    metaDescription: "Car wash at home in Dubai Silicon Oasis — we wash your car in your building or townhouse parking. Weekly plans, several cars per visit. WhatsApp to book.",
  },
  'dubai-international-city-car-wash-at-home': {
    intro: "International City's clusters have thousands of cars parked in open lots between low-rise blocks, and the dust from the surrounding area settles on them fast. Our car wash at home in International City comes to your cluster — China, England, Persia or any other — and washes the car where it is parked: body, wheels, glass and a quick interior vacuum. It's a simple, clearly priced service, confirmed on WhatsApp before we arrive. Shared-flat residents often split the booking for several cars in the same building, which keeps the price per car down.",
    metaDescription: "Car wash at home in International City Dubai — we come to your cluster parking. Clear price on WhatsApp, several cars in one visit.",
  },
  'dubai-mirdif-car-wash-at-home': {
    intro: "Most Mirdif homes are villas with their own driveway, and being on Dubai's desert edge means cars pick up a fine layer of sand almost daily. Our car wash at home in Mirdif washes the family cars on your driveway or in the garage — exterior, wheels, glass and interior vacuum — so nobody has to give up a weekend at the car wash. Several cars per visit is common here, and many households keep a weekly or fortnightly slot. We can also add interior deep cleaning or AC odour removal on the same day.",
    metaDescription: "Car wash at home in Mirdif — family cars washed on your villa driveway. Weekly plans, multiple cars per visit. Free WhatsApp quote.",
  },
  'dubai-al-barsha-car-wash-at-home': {
    intro: "Al Barsha has a mix of family villas and apartment blocks near Mall of the Emirates, and plenty of households with more than one car. Our car wash at home in Al Barsha covers Al Barsha 1, 2 and 3 — on villa driveways or in building parking — with an exterior wash, wheels and tyres, glass, and an interior vacuum. Long-term residents here often set up a regular weekly slot, and it's easy to add the family's second car to the same visit.",
    metaDescription: "Car wash at home in Al Barsha 1, 2 and 3 — villa driveways and building parking. Weekly slots, several cars per visit. Book on WhatsApp.",
  },
  'sharjah-muwaileh-car-wash-at-home': {
    intro: "Muwaileh has grown fast around University City, with family villas and apartment buildings side by side — and a lot of cars that rarely get time at a car wash. Our car wash at home in Muwaileh comes to your villa or building parking and handles the full exterior, wheels, glass and interior vacuum. Students and families both book here; sharing a visit across two or three cars in the same building is a common way to keep it affordable.",
    metaDescription: "Car wash at home in Muwaileh, Sharjah — at your villa or building parking near University City. Several cars per visit. WhatsApp for a price.",
  },
  'sharjah-al-nahda-car-wash-at-home': {
    intro: "Al Nahda's towers on the Sharjah–Dubai border are home to thousands of commuters who spend their week on the road between the two emirates. Our car wash at home in Al Nahda comes to your building parking: exterior wash, wheels, glass, and a vacuum of the seats and mats. Evening and early-morning slots fit around the commute, and weekly plans mean the car is clean before the working week starts.",
    metaDescription: "Car wash at home in Al Nahda, Sharjah — in your building parking, early or evening slots for commuters. Weekly plans available.",
  },
  'ajman-al-rashidiya-car-wash-at-home': {
    intro: "Al Rashidiya mixes villa communities and apartment buildings near the Sharjah border, and many households here keep two cars. Our car wash at home in Al Rashidiya washes them where they're parked — villa driveway or building parking — with an exterior wash, wheels and tyres, glass inside and out, and an interior vacuum. Prices are set for Ajman and confirmed on WhatsApp before the visit.",
    metaDescription: "Car wash at home in Al Rashidiya, Ajman — villa driveways and building parking. Ajman pricing, confirmed on WhatsApp.",
  },
  'ajman-al-jerf-car-wash-at-home': {
    intro: "Al Jerf sits close to Ajman Port and the free zone, where the extra dust from industry settles on parked cars within a day or two. Our car wash at home in Al Jerf comes to your home or workplace parking and washes the body, wheels and glass, with a full interior vacuum to remove the fine dust that gets inside. Businesses in the area can also book their company cars on a regular schedule.",
    metaDescription: "Car wash at home in Al Jerf, Ajman — homes and company cars near the port and free zone. Regular plans available.",
  },
  'abu-dhabi-khalifa-city-car-wash-at-home': {
    intro: "Khalifa City A and B are full of large family villas, usually with two or more cars in the driveway. Our car wash at home in Khalifa City washes all of them in one visit — exterior, wheels and tyres, glass and interior vacuum — so the family never has to queue at a car wash. Weekly slots are popular here, and interior deep cleaning or odour removal can be added when a car needs more than a wash.",
    metaDescription: "Car wash at home in Khalifa City, Abu Dhabi — all the family cars washed on your villa driveway. Weekly plans. WhatsApp for a quote.",
  },
  'abu-dhabi-al-ain-car-wash-at-home': {
    intro: "Al Ain's dry inland climate means dust is the number one enemy of a clean car — a few days is enough for a layer to settle on the paint and work its way inside. Our car wash at home in Al Ain comes to your villa or apartment parking and handles the exterior, wheels, glass and interior vacuum. Al Ain visits are planned in advance, so message us with your area and preferred day.",
    metaDescription: "Car wash at home in Al Ain — exterior and interior wash at your villa or building parking. Planned visits, WhatsApp to book.",
  },
  'ras-al-khaimah-rak-city-car-wash-at-home': {
    intro: "Ras Al Khaimah is spread out, and most residents drive everywhere — between the Corniche, Al Nakheel and the newer communities. Our car wash at home in RAK City comes to your villa or building parking with an exterior wash, wheels and tyres, glass and an interior vacuum, at RAK pricing. Several cars can be done in one visit, and regular weekly or fortnightly slots are available.",
    metaDescription: "Car wash at home in RAK City — at your villa or building parking, RAK pricing. Several cars per visit. WhatsApp for a quote.",
  },
  'fujairah-fujairah-city-car-wash-at-home': {
    intro: "On the Gulf of Oman coast, cars in Fujairah City deal with salty, humid air as well as dust — a combination that dulls paint and leaves a film on glass. Our car wash at home in Fujairah City comes to your home or office parking and washes the body, wheels and glass, with an interior vacuum. Visits run on our east-coast route, so booking a day ahead gets the best slot.",
    metaDescription: "Car wash at home in Fujairah City — exterior and interior wash at your doorstep on the east coast. Book a day ahead on WhatsApp.",
  },
  'umm-al-quwain-uaq-city-car-wash-at-home': {
    intro: "UAQ City is quieter and more spacious than its neighbours, and most homes have their own parking or driveway. Our car wash at home in Umm Al Quwain washes your car right there — exterior, wheels and tyres, glass and interior vacuum — at prices set for UAQ. Families with more than one car often book them together.",
    metaDescription: "Car wash at home in Umm Al Quwain — at your villa or building parking, UAQ pricing. Book on WhatsApp.",
  },

  /* ---------------- CAR INTERIOR ---------------- */
  'dubai-jlt-car-interior-detailing': {
    intro: "JLT residents and DMCC office workers spend a lot of time in their cars, and the cabin shows it — coffee on the seats, dust in the vents, sand in the carpets from weekend trips. Our car interior cleaning in JLT is done in your cluster's parking: seats shampooed or leather cleaned and conditioned, carpets and mats extracted, dashboard and vents detailed. Office workers often book it during the working day while the car sits in the tower car park.",
    metaDescription: "Car interior cleaning in JLT — seat shampoo, leather care, carpets and vents, done in your cluster parking. WhatsApp for a price.",
  },
  'sharjah-sharjah-city-car-interior-detailing': {
    intro: "In central Sharjah many cars double as family transport for school runs and long commutes to Dubai, so seats and carpets take a beating. Our car interior cleaning in Sharjah City deep-cleans fabric seats with hot-water extraction, cleans and conditions leather, extracts carpets and mats, and details the dashboard and vents — at your home or office parking. The price is confirmed on WhatsApp from your car type before we come.",
    metaDescription: "Car interior cleaning in Sharjah City — fabric seat shampoo, leather care, carpets and dashboard at your doorstep. Free WhatsApp quote.",
  },
  'ajman-ajman-city-car-interior-detailing': {
    intro: "Ajman's heat is hard on car interiors — leather dries out, fabric traps sweat and spills, and dust settles deep in the carpets. Our car interior cleaning in Ajman City is done where the car is parked: seats deep-cleaned or conditioned, carpets and mats extracted, and dashboard, vents and door panels detailed. Ajman pricing, confirmed on WhatsApp before the visit.",
    metaDescription: "Car interior cleaning in Ajman City — seats, leather, carpets and vents cleaned at your home. Ajman pricing on WhatsApp.",
  },
  'abu-dhabi-abu-dhabi-city-car-interior-detailing': {
    intro: "From Corniche apartments to villas around Muroor and Hamdan Street, Abu Dhabi families rely on their cars every day — and the cabin collects dust, food and sun damage fast. Our car interior cleaning in Abu Dhabi City deep-cleans fabric seats, cleans and conditions leather, extracts carpets and mats, and details the dashboard and vents, all at your parking. Large family SUVs and 7-seaters are welcome; tell us the model for an accurate quote.",
    metaDescription: "Car interior cleaning in Abu Dhabi City — seats, leather, carpets and vents for family cars and SUVs, at your doorstep. WhatsApp quote.",
  },
}
