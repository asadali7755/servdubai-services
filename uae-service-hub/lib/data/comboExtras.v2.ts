import type { ComboExtra } from './comboExtras'

/**
 * Extras for combo pages added Oct 2026: car services in lower-competition
 * sub-areas, Palm Jumeirah floor care, and 10 older combos restored because
 * Search Console still showed impressions for them after they were pruned.
 * No prices or unverifiable claims — quotes are confirmed on WhatsApp.
 */
export const COMBO_EXTRAS_V2: Record<string, ComboExtra> = {
  'dubai-palm-jumeirah-floor-cleaning': {
    headline: 'Salt film off marble and limestone — frond villas and Shoreline apartments, room by room.',
    focus: [
      'Stone type checked first, so limestone is never scrubbed like porcelain.',
      'Low-speed rotary scrubbing and wet-vac rinse to lift the dull salt film.',
      'Honest advice when the floor needs polishing rather than more cleaning.',
    ],
    faqs: [
      { question: 'Why do my Palm floors look dull again a few days after mopping?', answer: 'Sea air leaves a fine salt film that a mop spreads around instead of removing. Machine scrubbing with a proper rinse takes the film off rather than redistributing it.' },
      { question: 'Can you clean the terrace and pool deck too?', answer: 'Yes. Outdoor stone and tiles can be added to the same visit; tell us the rough area when you send photos.' },
      { question: 'Do you need a gate pass for the fronds?', answer: 'Often yes. Send us your frond and villa number and we share team details so security can register the visit.' },
    ],
  },

  /* ---------------- CAR WASH AT HOME ---------------- */
  'dubai-silicon-oasis-car-wash-at-home': {
    headline: 'Washed in your Silicon Oasis parking bay while you are at work or asleep.',
    focus: [
      'Tower basements and townhouse driveways both covered.',
      'Early-morning slots so the car is clean before the commute.',
      'Two or more cars in one building washed in a single stop.',
    ],
    faqs: [
      { question: 'Can you wash my car in a DSO tower basement?', answer: 'In most buildings, yes. Share the building name, bay number and any rules from management, and we plan the method to suit.' },
      { question: 'Do I have to be home for the wash?', answer: 'No. If the car is reachable and the key is with security or a family member, we wash it and send you photos when done.' },
      { question: 'Is there a weekly plan for Silicon Oasis?', answer: 'Yes. You can fix the same day and time every week or every two weeks.' },
    ],
  },
  'dubai-international-city-car-wash-at-home': {
    headline: 'Dust off your car right in the cluster lot — no queue, no drive to a car wash.',
    focus: [
      'All clusters covered, from China and England to Persia and France.',
      'Open-lot parking is ideal for a quick exterior wash plus interior vacuum.',
      'Flatmates in one building can book together and share one visit.',
    ],
    faqs: [
      { question: 'Which International City clusters do you cover?', answer: 'All of them, plus Warsan and the nearby phases. Tell us the cluster and building number when you book.' },
      { question: 'Can three flatmates book their cars in one visit?', answer: 'Yes. Send the number and type of cars, and we give one combined quote.' },
      { question: 'How often should I wash a car parked in an open lot here?', answer: 'Most residents with open parking book weekly, because dust settles quickly. Weekly slots are easy to fix.' },
    ],
  },
  'dubai-mirdif-car-wash-at-home': {
    headline: 'The whole family fleet washed on your Mirdif driveway, every week if you like.',
    focus: [
      'Driveway or garage washing for Mirdif villas and Uptown Mirdif.',
      'Several family cars done in one visit.',
      'Easy add-ons: interior deep clean or AC odour removal on the same day.',
    ],
    faqs: [
      { question: 'Can you wash cars parked outside the villa gate?', answer: 'Yes, as long as the car is safely parked and reachable. Let us know where it will be when you book.' },
      { question: 'Do you need water from the villa?', answer: 'Usually not; the team brings its own kit. If anything is needed from your side, we tell you before the visit.' },
      { question: 'Can you do a deep interior clean for the family car at the same time?', answer: 'Yes. Add car interior cleaning to the booking and we plan the extra time.' },
    ],
  },
  'dubai-al-barsha-car-wash-at-home': {
    headline: 'Al Barsha 1, 2 and 3 — villa driveway or building basement, the car gets washed where it is.',
    focus: [
      'Villas and apartment blocks near Mall of the Emirates covered.',
      'Second family car added to the same slot.',
      'Regular weekly slots for long-term residents.',
    ],
    faqs: [
      { question: 'Do you cover Barsha Heights (Tecom) as well?', answer: 'Yes. Barsha Heights and Al Barsha South can be booked too; share your building name.' },
      { question: 'Can you wash my car at my office near Mall of the Emirates?', answer: 'Yes, if the office car park allows it. Tell us the building and parking level.' },
      { question: 'What does a standard wash include?', answer: 'Exterior body, wheels and tyres, glass inside and out, and a vacuum of seats, mats and boot.' },
    ],
  },
  'sharjah-muwaileh-car-wash-at-home': {
    headline: 'Car wash at your Muwaileh villa or building — popular with University City families and students.',
    focus: [
      'Villas and apartment buildings around University City covered.',
      'Shared visits for several cars in one building.',
      'Interior vacuum included with every standard wash.',
    ],
    faqs: [
      { question: 'Can students in a shared building book together?', answer: 'Yes. Book the cars together for one visit and one combined price.' },
      { question: 'Do you cover Muwaileh Commercial and Al Zahia?', answer: 'Yes, both are close by. Share the exact location when booking.' },
      { question: 'How do I get the price?', answer: 'Send the number and type of cars on WhatsApp; we confirm the price before the visit.' },
    ],
  },
  'sharjah-al-nahda-car-wash-at-home': {
    headline: 'Before or after the Dubai commute — your car washed in the Al Nahda tower parking.',
    focus: [
      'Early-morning and evening slots that fit around the commute.',
      'Basement and open-lot parking both handled.',
      'Weekly plans so the car is clean for the working week.',
    ],
    faqs: [
      { question: 'Can you wash my car before I leave for work?', answer: 'Yes, early slots are available. Book a day ahead to secure the time.' },
      { question: 'Do you cover both the Sharjah and Dubai sides of Al Nahda?', answer: 'Yes. Tell us which side your building is on so we route the team correctly.' },
      { question: 'Can I pause my weekly wash when I travel?', answer: 'Yes. Just message us before the next slot and we skip it.' },
    ],
  },
  'ajman-al-rashidiya-car-wash-at-home': {
    headline: 'Two-car households in Al Rashidiya, washed in one visit at Ajman pricing.',
    focus: [
      'Villa compounds and apartment buildings near the Sharjah border.',
      'Both family cars washed in the same slot.',
      'Ajman pricing, confirmed on WhatsApp before we come.',
    ],
    faqs: [
      { question: 'Do you wash cars inside villa compounds?', answer: 'Yes. Let us know the compound name and any entry rules for contractors.' },
      { question: 'Can you add interior cleaning?', answer: 'Yes, interior deep cleaning or odour removal can be added to the same visit.' },
      { question: 'How far ahead should I book?', answer: 'A day ahead is usually enough; same-day can sometimes be arranged.' },
    ],
  },
  'ajman-al-jerf-car-wash-at-home': {
    headline: 'Port and free-zone dust off your car — at home or in the company car park.',
    focus: [
      'Homes and workplaces near Ajman Port and the free zone.',
      'Full interior vacuum to remove fine dust that gets inside.',
      'Company cars on a fixed weekly or fortnightly schedule.',
    ],
    faqs: [
      { question: 'Can you wash our company cars in the free zone?', answer: 'Yes, if the site allows contractors. Send the number of vehicles and location for a combined quote.' },
      { question: 'Why does my car get dusty so fast in Al Jerf?', answer: 'Industrial activity near the port adds fine dust to the air. A regular wash plus interior vacuum keeps it under control.' },
      { question: 'Do you send an invoice for company bookings?', answer: 'Yes, tell us the company details when booking and we share the invoice after the visit.' },
    ],
  },
  'abu-dhabi-khalifa-city-car-wash-at-home': {
    headline: 'Every car on your Khalifa City driveway washed in one visit.',
    focus: [
      'Khalifa City A and B villas covered.',
      'Multi-car families booked as one job.',
      'Interior deep clean or odour removal added when a car needs more.',
    ],
    faqs: [
      { question: 'Do you cover Khalifa City B and nearby compounds?', answer: 'Yes. Share the sector and villa number when you book.' },
      { question: 'Can you wash an SUV and a sedan together?', answer: 'Yes. Mixed cars are fine; send the types for one quote.' },
      { question: 'Is there a weekly plan?', answer: 'Yes, you can fix the same day and time every week.' },
    ],
  },
  'abu-dhabi-al-ain-car-wash-at-home': {
    headline: 'Inland dust is relentless in Al Ain — planned doorstep washes keep it off the paint.',
    focus: [
      'Villas and apartment parking across Al Ain.',
      'Exterior wash plus a thorough interior vacuum for fine dust.',
      'Visits planned in advance on fixed Al Ain days.',
    ],
    faqs: [
      { question: 'Which days do you cover Al Ain?', answer: 'Al Ain visits are scheduled in advance. Message us your area and preferred day and we confirm the nearest slot.' },
      { question: 'Do you cover areas like Al Jimi and Al Muwaiji?', answer: 'Yes, most residential areas of Al Ain. Share your exact location to confirm.' },
      { question: 'Can you combine a wash with interior cleaning?', answer: 'Yes, interior deep cleaning can be added to the same visit.' },
    ],
  },
  'ras-al-khaimah-rak-city-car-wash-at-home': {
    headline: 'RAK drivers cover long distances — get the car washed at home instead of hunting for a car wash.',
    focus: [
      'Corniche, Al Nakheel and newer RAK communities covered.',
      'RAK pricing, confirmed on WhatsApp first.',
      'Weekly or fortnightly slots for regular washing.',
    ],
    faqs: [
      { question: 'Do you cover Al Hamra and Mina Al Arab too?', answer: 'Yes. Tell us your community when booking so we can plan the route.' },
      { question: 'Can several cars be washed in one RAK visit?', answer: 'Yes, send the number and type of cars for one combined price.' },
      { question: 'How do I book?', answer: 'Send your location and car type on WhatsApp; we confirm the price and slot.' },
    ],
  },
  'fujairah-fujairah-city-car-wash-at-home': {
    headline: 'Salt air and dust off your car on the east coast — washed at your home or office.',
    focus: [
      'Homes and offices across Fujairah City.',
      'Glass cleaned inside and out to clear the salty film.',
      'East-coast route — booking a day ahead gets the best slot.',
    ],
    faqs: [
      { question: 'Why does my windscreen get a film so quickly in Fujairah?', answer: 'Humid, salty coastal air leaves a film on glass and paint. Regular washing with proper glass cleaning removes it.' },
      { question: 'Do you cover Kalba or Dibba?', answer: 'Message us your location; nearby areas can often be added to the east-coast route.' },
      { question: 'How far ahead should I book?', answer: 'A day ahead is best for Fujairah, so we can plan the route.' },
    ],
  },
  'umm-al-quwain-uaq-city-car-wash-at-home': {
    headline: 'Washed in your own UAQ driveway or building parking, at UAQ prices.',
    focus: [
      'Villas and buildings across UAQ City.',
      'Family cars booked together in one visit.',
      'Interior vacuum included as standard.',
    ],
    faqs: [
      { question: 'Do you cover Al Salamah and Al Raas?', answer: 'Yes, most residential areas of UAQ. Share your location to confirm.' },
      { question: 'Can I get a regular wash every week?', answer: 'Yes, weekly or fortnightly slots can be fixed.' },
      { question: 'How is the price confirmed?', answer: 'On WhatsApp, from the number and type of cars, before the visit.' },
    ],
  },

  /* ---------------- CAR INTERIOR ---------------- */
  'dubai-jlt-car-interior-detailing': {
    headline: 'Coffee, sand and dust out of your cabin while the car sits in the JLT tower car park.',
    focus: [
      'Fabric seats shampooed or leather cleaned and conditioned.',
      'Carpets and mats extracted, vents and dashboard detailed.',
      'Done during office hours for DMCC workers.',
    ],
    faqs: [
      { question: 'Can you clean my car while I am at work in JLT?', answer: 'Yes, if the car park allows it. Leave the key with reception or security and we send photos when finished.' },
      { question: 'How long until the seats are dry?', answer: 'Fabric seats usually need a few hours to dry fully; leaving windows slightly open or AC running helps.' },
      { question: 'Can you remove coffee stains from fabric seats?', answer: 'Most coffee stains come out or fade a lot with pre-treatment and extraction. Older stains may not disappear completely; we tell you honestly.' },
    ],
  },
  'sharjah-sharjah-city-car-interior-detailing': {
    headline: 'School runs and long commutes leave their mark — deep interior cleaning at your Sharjah door.',
    focus: [
      'Hot-water extraction for fabric seats and carpets.',
      'Leather cleaned and conditioned against heat damage.',
      'Child seats and the back row given extra attention.',
    ],
    faqs: [
      { question: 'Can you clean children’s car seats?', answer: 'Yes, fabric child seats can usually be cleaned. Let us know how many when booking.' },
      { question: 'Do you clean 7-seater family cars?', answer: 'Yes. Tell us the model so we quote for all three rows.' },
      { question: 'How do I get a price?', answer: 'Send your car type and a photo of the seats on WhatsApp.' },
    ],
  },
  'ajman-ajman-city-car-interior-detailing': {
    headline: 'Heat-dried leather and dusty carpets refreshed where your car is parked in Ajman.',
    focus: [
      'Leather cleaned and conditioned so it stops cracking.',
      'Carpets and mats extracted to remove deep dust.',
      'Dashboard, vents and door panels detailed.',
    ],
    faqs: [
      { question: 'My leather seats feel dry and stiff — can you help?', answer: 'Cleaning and conditioning usually improves the feel a lot. Cracks that are already there cannot be repaired by cleaning.' },
      { question: 'Can you remove sand from the carpets?', answer: 'Yes, carpets and mats are vacuumed and extracted to lift embedded sand and dust.' },
      { question: 'Where do you do the work?', answer: 'At your home or office parking in Ajman.' },
    ],
  },
  'abu-dhabi-abu-dhabi-city-car-interior-detailing': {
    headline: 'Big family SUVs welcome — full interior cleaning at your Abu Dhabi parking.',
    focus: [
      'Corniche apartments, Muroor and Hamdan Street areas covered.',
      'All rows of 7-seaters cleaned, including the boot.',
      'Fabric extraction, leather care, vents and dashboard.',
    ],
    faqs: [
      { question: 'Do you clean the third row and boot?', answer: 'Yes, on 7-seaters all rows and the boot are included. Tell us the model for an accurate quote.' },
      { question: 'Can you clean the car in a building basement?', answer: 'Usually yes; share your building and parking details when booking.' },
      { question: 'Can I add odour removal?', answer: 'Yes, AC vent and odour treatment can be added to the same visit.' },
    ],
  },

  /* ---------------- RESTORED (still had impressions after pruning) ---------------- */
  'sharjah-al-qasimia-sofa-cleaning': {
    headline: 'Quick, tidy sofa cleaning for busy Al Qasimia apartment buildings.',
    focus: [
      'Compact kit that fits older building lifts and narrow corridors.',
      'Pre-treatment for food and tea stains before extraction.',
      'Fabric usable again the same day in most cases.',
    ],
    faqs: [
      { question: 'Can you clean a sofa in a small Al Qasimia flat?', answer: 'Yes. The equipment is compact and we work in place, without moving the sofa out.' },
      { question: 'Do you clean majlis-style floor seating?', answer: 'Yes, majlis cushions and floor seating can be cleaned. Send a photo for a quote.' },
      { question: 'When can we sit on it again?', answer: 'Usually the same day once it has dried; we advise on drying when we finish.' },
    ],
  },
  'sharjah-al-qasimia-carpet-cleaning': {
    headline: 'Rugs and wall-to-wall carpets in central Sharjah, cleaned without leaving them damp.',
    focus: [
      'Dry vacuum first to remove grit before any water is used.',
      'Hot-water extraction matched to the carpet fibre.',
      'Fast drying so rooms are usable again quickly.',
    ],
    faqs: [
      { question: 'Do you clean hand-made rugs?', answer: 'Yes, with a gentler method. Send a photo so we can check the material first.' },
      { question: 'Can you remove old stains?', answer: 'Many come out or fade a lot; some older stains are permanent. We tell you honestly before starting.' },
      { question: 'Is parking a problem in Al Qasimia?', answer: 'Sometimes. Tell us your building and we plan where the team can park.' },
    ],
  },
  'sharjah-al-majaz-carpet-cleaning': {
    headline: 'Lake-side Al Majaz apartments — carpets cleaned and dried before the humidity sets in.',
    focus: [
      'Extra extraction passes to keep moisture low.',
      'Odour check for carpets near balconies and windows.',
      'Tower parking and lift access planned in advance.',
    ],
    faqs: [
      { question: 'My carpet smells musty near the balcony — can you fix it?', answer: 'Deep extraction usually removes what causes the smell. Thorough drying matters, so we leave the room well ventilated.' },
      { question: 'Can you clean carpets in an office in Al Majaz?', answer: 'Yes, office carpets can be done after hours.' },
      { question: 'How do I get a quote?', answer: 'Send a photo and the rough size on WhatsApp.' },
    ],
  },
  'abu-dhabi-abu-dhabi-city-villa-deep-cleaning': {
    headline: 'Full villa deep cleans across Abu Dhabi island — top floor to majlis.',
    focus: [
      'Room-by-room plan agreed before the team starts.',
      'Kitchens, bathrooms and AC grilles given the most time.',
      'Move-in and move-out cleans for tenancy handovers.',
    ],
    faqs: [
      { question: 'How many cleaners come for a villa?', answer: 'It depends on the villa size and condition; we tell you the team size with the quote.' },
      { question: 'Do you clean the majlis and outdoor areas?', answer: 'Yes, they can be included. Mention them when you send details.' },
      { question: 'Can you clean before we move in?', answer: 'Yes, move-in cleans are common. Share the date and we plan the visit.' },
    ],
  },
  'abu-dhabi-baniyas-carpet-cleaning': {
    headline: 'Carpets that have been down for years in Baniyas villas, lifted back to life.',
    focus: [
      'Fibre and condition checked before choosing the method.',
      'Steam extraction or low-moisture cleaning as needed.',
      'Baniyas and Baniyas North both covered.',
    ],
    faqs: [
      { question: 'Can very old carpets be cleaned safely?', answer: 'Usually yes; we pick a gentler method for worn or delicate carpets.' },
      { question: 'Do you also clean sofas in the same visit?', answer: 'Yes, sofa cleaning can be added.' },
      { question: 'How do I get a price?', answer: 'Send photos and rough room sizes on WhatsApp.' },
    ],
  },
  'umm-al-quwain-al-salamah-carpet-cleaning': {
    headline: 'Family-home carpets in Al Salamah, cleaned at your door at UAQ prices.',
    focus: [
      'Large living-room carpets and rugs in villas.',
      'Pre-treatment for everyday spills and foot traffic.',
      'Quick drying so the family can use the room again.',
    ],
    faqs: [
      { question: 'Do you clean majlis carpets?', answer: 'Yes, majlis carpets and rugs are common jobs here.' },
      { question: 'Can you come at the weekend?', answer: 'Weekend slots are often available; book a few days ahead.' },
      { question: 'How is the price set?', answer: 'From photos and rough sizes, confirmed on WhatsApp before the visit.' },
    ],
  },
  'abu-dhabi-khalifa-city-carpet-cleaning': {
    headline: 'Big villa carpets and kids’ rooms in Khalifa City, deep cleaned in one visit.',
    focus: [
      'Whole-villa carpet jobs planned room by room.',
      'Child- and pet-friendly products on request.',
      'Stairs and landings included when needed.',
    ],
    faqs: [
      { question: 'Can you clean stair carpets?', answer: 'Yes, stairs and landings can be included.' },
      { question: 'Is the cleaning safe with children at home?', answer: 'Tell us when booking and we use suitable products and advise when rooms are ready.' },
      { question: 'Can you do sofas on the same day?', answer: 'Yes, add sofa cleaning to the booking.' },
    ],
  },
  'abu-dhabi-mohamed-bin-zayed-city-sofa-cleaning': {
    headline: 'MBZ City sofas — from family L-shapes to majlis sets — cleaned in your home.',
    focus: [
      'Large sectional and majlis seating cleaned on site.',
      'Fabric test before any product is used.',
      'Leather sofas cleaned and conditioned.',
    ],
    faqs: [
      { question: 'Can you clean a big L-shaped sofa?', answer: 'Yes. Send a photo so we quote for the right size.' },
      { question: 'Do you clean majlis seating in MBZ?', answer: 'Yes, majlis cushions and back rests can be cleaned in place.' },
      { question: 'How soon can you come?', answer: 'Often within a day or two; same-day is sometimes possible.' },
    ],
  },
  'ajman-ajman-city-villa-deep-cleaning': {
    headline: 'Villa deep cleaning in Ajman City — move-in, move-out or a full seasonal reset.',
    focus: [
      'Kitchens and bathrooms deep cleaned and degreased.',
      'Windows, AC grilles and skirting boards included.',
      'Ajman pricing, confirmed before the visit.',
    ],
    faqs: [
      { question: 'Do you clean empty villas before move-in?', answer: 'Yes, empty-villa cleans are common; share the date and villa size.' },
      { question: 'Can you include sofa or carpet cleaning?', answer: 'Yes, they can be added to the same booking.' },
      { question: 'How long does a villa deep clean take?', answer: 'It depends on size and condition; we give a time estimate with the quote.' },
    ],
  },
  'ajman-al-rashidiya-carpet-cleaning': {
    headline: 'From one rug to a whole villa — carpets in Al Rashidiya cleaned and dried fast.',
    focus: [
      'Same process for apartments and villa compounds.',
      'Embedded stains pre-treated before extraction.',
      'Speed-drying so carpets are usable the same day.',
    ],
    faqs: [
      { question: 'Do you clean carpets in villa compounds?', answer: 'Yes. Share the compound name and any entry rules.' },
      { question: 'Can you take a rug away for cleaning?', answer: 'Most rugs are cleaned on site. Ask us if your rug needs special care.' },
      { question: 'How do I book?', answer: 'Send photos and your location on WhatsApp.' },
    ],
  },
}
