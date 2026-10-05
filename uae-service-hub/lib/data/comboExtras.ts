/**
 * Extra hand-written copy for each kept /[emirate]/[city]/[service] page
 * (Oct 2026 redesign). comboIntros.ts holds the long intro + meta description;
 * this adds a short headline, three local "focus" points and three FAQs that
 * appear ONLY on that one page — replacing the shared service benefits/process
 * lists and the area FAQs that used to be repeated across many URLs.
 */
import { DUBAI_COMBO_EXTRAS } from './comboExtras.dubai'

export interface ComboExtra {
  headline: string
  focus: [string, string, string]
  faqs: { question: string; answer: string }[]
}

const OTHER: Record<string, ComboExtra> = {
  /* ---------------- SHARJAH ---------------- */
  'sharjah-sharjah-city-sofa-cleaning': {
    headline: 'Dubai-standard sofa cleaning for central Sharjah, priced for Sharjah.',
    focus: [
      'Same extraction machines and process used on our Dubai jobs.',
      'Older Corniche-area sofas checked for fabric wear before cleaning.',
      'Evening slots for residents who commute to Dubai.',
    ],
    faqs: [
      { question: 'Do you clean sofas in Sharjah in the evening?', answer: 'Yes. Evening appointments are popular with residents who work in Dubai. Book a day or two ahead for the best slot.' },
      { question: 'Can you clean an old sofa that has never been cleaned?', answer: 'Yes. Heavily soiled sofas get an extra pre-treatment step. We tell you honestly how much improvement to expect.' },
      { question: 'Do you clean sofas in Sharjah offices?', answer: 'Yes, reception and office sofas are cleaned outside working hours.' },
    ],
  },
  'sharjah-sharjah-city-carpet-cleaning': {
    headline: 'Hot-water carpet extraction across central Sharjah — fine sand out, colour back.',
    focus: [
      'Dry pass to lift fine sand before wet extraction.',
      'Spot treatment for older and set-in stains.',
      'Large family rugs cleaned in sections for even drying.',
    ],
    faqs: [
      { question: 'Can you clean big majlis rugs in Sharjah?', answer: 'Yes. Large rugs are cleaned on site in sections and dried quickly with air movers.' },
      { question: 'Do you clean carpets in Sharjah villas outside the city centre?', answer: 'Yes, we cover the wider Sharjah City area. Share your location for timing.' },
      { question: 'How long before I can put furniture back?', answer: 'Usually within a couple of hours, once the carpet is dry to the touch.' },
    ],
  },
  'sharjah-al-nahda-sofa-cleaning': {
    headline: 'Twice-a-year sofa cleaning for busy Al Nahda family flats.',
    focus: [
      'Large family sofas and sectionals cleaned seat by seat.',
      'Child-safe products for sofas used by little ones every day.',
      'Reminder on WhatsApp when the next six-monthly clean is due.',
    ],
    faqs: [
      { question: 'Can you remove juice and food stains from a family sofa?', answer: 'Most food and drink stains respond well to pre-treatment and extraction, especially if they are recent.' },
      { question: 'Can you send a reminder for the next sofa clean?', answer: 'Yes. We can message you on WhatsApp when six months have passed.' },
      { question: 'Do you clean sofas in Al Nahda towers near the Dubai border?', answer: 'Yes, all Al Nahda towers are covered, including those close to the Dubai side.' },
    ],
  },
  'sharjah-al-nahda-carpet-cleaning': {
    headline: 'Carpet cleaning for high-traffic Al Nahda apartments — corridors, kids and daily life.',
    focus: [
      'Traffic paths from the front door pre-treated before extraction.',
      'Children’s room carpets cleaned with child-safe products.',
      'Same-day slots often available on our regular Sharjah route.',
    ],
    faqs: [
      { question: 'How often should carpets be cleaned in a busy family flat?', answer: 'Every six months suits most busy Al Nahda homes; quieter homes can go up to a year.' },
      { question: 'Can you clean wall-to-wall carpet in bedrooms?', answer: 'Yes. Fitted carpets are cleaned with hot-water extraction and speed-dried.' },
      { question: 'Do I need to move furniture before you arrive?', answer: 'No. We move light furniture ourselves and clean around heavy pieces.' },
    ],
  },
  'sharjah-al-majaz-sofa-cleaning': {
    headline: 'Sofa cleaning for lagoon-facing Al Majaz apartments — humidity dried out, not left in.',
    focus: [
      'Quick-dry extraction to stop humidity settling back into the fabric.',
      'Extra attention for lower-floor apartments closer to the water.',
      'Curtains can be added to tackle the same moisture problem.',
    ],
    faqs: [
      { question: 'Why does my sofa feel damp in an Al Majaz apartment?', answer: 'Lagoon-side air holds more moisture. Fabric absorbs it over time, which is why fast drying after cleaning is important here.' },
      { question: 'Can you clean curtains at the same visit?', answer: 'Yes. Curtains are often cleaned with the sofa in waterfront apartments.' },
      { question: 'Do you cover villas near Al Majaz Amphitheatre?', answer: 'Yes, villas around the lagoon are covered on the same basis as apartments.' },
    ],
  },

  /* ---------------- ABU DHABI ---------------- */
  'abu-dhabi-abu-dhabi-city-sofa-cleaning': {
    headline: 'Sofa and majlis cleaning across Abu Dhabi City — from Corniche studios to inland villas.',
    focus: [
      'Majlis seating and large sectionals cleaned piece by piece.',
      'Leather sofas cleaned and conditioned for the dry indoor air.',
      'Building-security key handover if you are not home.',
    ],
    faqs: [
      { question: 'Do you clean majlis seating in Abu Dhabi?', answer: 'Yes. Majlis cushions and floor seating are among our most common Abu Dhabi jobs.' },
      { question: 'Can you clean sofas before Eid?', answer: 'Yes, but slots fill quickly in the weeks before Eid. Book early to get your preferred day.' },
      { question: 'Do you cover Al Bateen and Al Khalidiyah?', answer: 'Yes, along with the Corniche, Muroor and Hamdan Street areas.' },
    ],
  },
  'abu-dhabi-abu-dhabi-city-carpet-cleaning': {
    headline: 'Rugs and fitted carpet in Abu Dhabi City homes, cleaned on site in one visit.',
    focus: [
      'Small apartment rugs and large villa carpets handled on the same visit.',
      'Dry vacuum, pre-treatment and hot-water extraction in sequence.',
      'Stubborn stains spot-treated by hand.',
    ],
    faqs: [
      { question: 'Can you clean carpets in a large inland villa?', answer: 'Yes. We bring a team and equipment sized to the villa so it can be done in one visit.' },
      { question: 'Do you clean prayer rugs?', answer: 'Yes, prayer rugs can be cleaned gently on site.' },
      { question: 'Is same-day carpet cleaning possible in Abu Dhabi City?', answer: 'Often, yes. Message us in the morning to check availability.' },
    ],
  },
  'abu-dhabi-abu-dhabi-city-marble-polishing': {
    headline: 'Marble polishing for Abu Dhabi apartments and villas — assessed first, then restored.',
    focus: [
      'On-site check to choose grinding, honing, polishing or sealing.',
      'Entryways and full living areas quoted by area and condition.',
      'Furniture covered and dust kept to a minimum.',
    ],
    faqs: [
      { question: 'Can you polish just the entrance hall?', answer: 'Yes. Small areas such as entrances are quoted separately.' },
      { question: 'Do I need to move furniture for marble polishing?', answer: 'We move light furniture. For larger rooms we agree beforehand where heavy pieces will go.' },
      { question: 'How long does marble polishing take?', answer: 'It depends on the area and condition. We give a time estimate with the quote after the assessment.' },
    ],
  },
  'abu-dhabi-khalifa-city-villa-deep-cleaning': {
    headline: 'Full-day villa deep cleans for Khalifa City A and B — every room, every vent.',
    focus: [
      'Team of several technicians for large multi-bedroom villas.',
      'AC vents, kitchens, bathrooms and upholstery covered in one visit.',
      'Marble polishing available as an add-on on the same day.',
    ],
    faqs: [
      { question: 'Can a large Khalifa City villa be cleaned in one day?', answer: 'Yes, with the right team size. We confirm timing and team size with your quote.' },
      { question: 'Do you clean majlis and outdoor seating during the deep clean?', answer: 'Yes, they can be included. Mention them when booking.' },
      { question: 'Should we be home during the deep clean?', answer: 'It is up to you. Many families stay in one area while we clean the rest.' },
    ],
  },
  'abu-dhabi-khalifa-city-sofa-cleaning': {
    headline: 'Multiple sofas, sectionals and majlis sets in Khalifa City villas — cleaned in one visit.',
    focus: [
      'Whole-villa sofa jobs planned so every room is done the same day.',
      'Designer pieces in newer villas tested before cleaning.',
      'Combine with villa deep cleaning or marble polishing.',
    ],
    faqs: [
      { question: 'Can you clean all the sofas in our villa at once?', answer: 'Yes. Send us the number of sofas and seats and we bring a team to finish in one visit.' },
      { question: 'Do you clean leather sectionals?', answer: 'Yes. Leather is cleaned and conditioned rather than shampooed.' },
      { question: 'Is it worth combining sofa cleaning with a villa clean?', answer: 'Many clients do, because furniture is moved once and the whole home is fresh at the same time.' },
    ],
  },
  'abu-dhabi-mohamed-bin-zayed-city-villa-deep-cleaning': {
    headline: 'Deep cleaning for spacious MBZ City family villas, sized to the household.',
    focus: [
      'Multi-bathroom and multi-kitchen villas planned room by room.',
      'Window tracks and AC vents cleaned to keep dust down.',
      'One living area kept usable throughout the day.',
    ],
    faqs: [
      { question: 'Do you clean villas with more than one kitchen?', answer: 'Yes. Main and outdoor or staff kitchens can all be included in the deep clean.' },
      { question: 'Can you start early in the morning?', answer: 'Yes. Early starts help large villas finish before evening.' },
      { question: 'Do you clean staff quarters?', answer: 'Yes, if you would like them included. Let us know when booking.' },
    ],
  },

  /* ---------------- AJMAN ---------------- */
  'ajman-ajman-city-sofa-cleaning': {
    headline: 'Professional sofa cleaning in Ajman City without Dubai prices.',
    focus: [
      'Hot-water extraction and quick-dry air movers on every job.',
      'Corniche-tower and inland apartments both covered.',
      'Price confirmed on WhatsApp from a photo before the visit.',
    ],
    faqs: [
      { question: 'Can I get a sofa quote from a photo?', answer: 'Yes. Send a photo and the number of seats on WhatsApp and we reply with a price.' },
      { question: 'Do you clean sofa cushions with removable covers?', answer: 'We clean covers on the cushion so they keep their shape and do not shrink.' },
      { question: 'Do you work on Fridays in Ajman?', answer: 'Yes, weekend slots including Friday afternoons are available.' },
    ],
  },
  'ajman-ajman-city-carpet-cleaning': {
    headline: 'Carpet cleaning across Ajman City — embedded sand out, living room refreshed.',
    focus: [
      'Industrial vacuum pass before steam extraction.',
      'Spot-treatment for older marks and food stains.',
      'Popular as a combined living-room package with the sofa.',
    ],
    faqs: [
      { question: 'Can carpet and sofa be cleaned on the same day?', answer: 'Yes. It is one of the most booked combinations in Ajman.' },
      { question: 'How soon can I walk on the carpet?', answer: 'Usually within a couple of hours once it is dry to the touch.' },
      { question: 'Do you clean carpets in Ajman offices?', answer: 'Yes. Office carpets are cleaned after hours.' },
    ],
  },
  'ajman-al-nuaimiya-sofa-cleaning': {
    headline: 'Sofa cleaning for busy Al Nuaimiya apartments, often booked the same day.',
    focus: [
      'Al Nuaimiya 1, 2 and 3 covered on our regular Ajman route.',
      'Heavily used family sofas pre-treated before extraction.',
      'You can step out — we call when we arrive and finish.',
    ],
    faqs: [
      { question: 'Can I book sofa cleaning for today in Al Nuaimiya?', answer: 'Often, yes. Message us in the morning and we confirm the earliest slot.' },
      { question: 'Do you clean L-shaped sofas?', answer: 'Yes. Sectional and L-shaped sofas are priced by seat count.' },
      { question: 'Is the cleaning safe for asthma sufferers?', answer: 'Extraction removes dust and allergens. We use low-odour products; let us know about any sensitivities.' },
    ],
  },

  /* ---------------- RAS AL KHAIMAH ---------------- */
  'ras-al-khaimah-rak-city-sofa-cleaning': {
    headline: 'Sofa cleaning for RAK City homes — new furniture protected, older sofas revived.',
    focus: [
      'Gentle method for newly furnished homes in new developments.',
      'Extra pre-treatment for older, heavily used sofas.',
      'Corniche and Al Nakheel areas covered.',
    ],
    faqs: [
      { question: 'Should I clean a new sofa?', answer: 'A light clean and fabric protector early on keeps a new sofa looking new for longer.' },
      { question: 'Do you cover Al Nakheel for sofa cleaning?', answer: 'Yes, Al Nakheel and the Corniche area are covered.' },
      { question: 'Can you clean dining chairs at the same visit?', answer: 'Yes. Fabric dining chairs are a common add-on.' },
    ],
  },
  'ras-al-khaimah-rak-city-carpet-cleaning': {
    headline: 'RAK City carpet cleaning — new carpets kept fresh, older ones brought back.',
    focus: [
      'Fresh carpets in new homes protected from regional dust early.',
      'Steam extraction for older carpets with embedded sand.',
      'Fast drying so rooms are usable the same day.',
    ],
    faqs: [
      { question: 'Can you clean carpets in a newly built RAK home?', answer: 'Yes. New carpets often hold construction dust that is worth removing early.' },
      { question: 'Do you clean large villa rugs in RAK?', answer: 'Yes, large rugs are cleaned on site.' },
      { question: 'Is same-day carpet cleaning available in RAK City?', answer: 'Often, yes. Message us to check the day’s availability.' },
    ],
  },
  'ras-al-khaimah-al-hamra-villa-deep-cleaning': {
    headline: 'Villa deep cleaning for Al Hamra golf and waterfront homes, booked a day ahead.',
    focus: [
      'Natural stone floors assessed during the deep clean.',
      'Terrace and sea-facing glass cleaned to remove salt film.',
      'Access arranged through community management.',
    ],
    faqs: [
      { question: 'Can you deep clean a holiday villa in Al Hamra before we arrive?', answer: 'Yes. Tell us your arrival date and how to access the villa, and we have it ready in time.' },
      { question: 'Do you polish marble during the villa clean?', answer: 'Marble is cleaned as standard. Polishing is a separate add-on that we quote after seeing the floor.' },
      { question: 'How far ahead should I book?', answer: 'At least a day ahead so we can send the right team size to the villa.' },
    ],
  },

  /* ---------------- FUJAIRAH ---------------- */
  'fujairah-fujairah-city-sofa-cleaning': {
    headline: 'Sofa cleaning on the Gulf of Oman coast — musty humidity removed at the source.',
    focus: [
      'Extraction and fast drying to remove trapped moisture.',
      'Corniche and Al Faseel homes covered on our east-coast route.',
      'Same-day or next-day depending on the route that day.',
    ],
    faqs: [
      { question: 'Why does my sofa smell musty in Fujairah?', answer: 'Coastal humidity soaks into fabric over time. Extraction followed by thorough drying removes what causes the smell.' },
      { question: 'How do I book on the east-coast route?', answer: 'Message us your area and preferred days — we confirm the earliest slot on the route.' },
      { question: 'Do you clean villas and apartments?', answer: 'Yes, both are covered across Fujairah City.' },
    ],
  },
  'fujairah-fujairah-city-carpet-cleaning': {
    headline: 'Carpet cleaning in Fujairah City — moisture and sand pulled out in one pass.',
    focus: [
      'Steam extraction for both dust and trapped humidity.',
      'Rugs dried quickly with air movers, not left overnight.',
      'Combined with sofa cleaning on the same east-coast visit.',
    ],
    faqs: [
      { question: 'Can carpets dry properly in humid weather?', answer: 'Yes. We use air movers to speed up drying instead of relying on room air.' },
      { question: 'Do you clean carpets in Fujairah offices?', answer: 'Yes. Commercial carpets are cleaned outside working hours.' },
      { question: 'Can you do sofa and carpet together?', answer: 'Yes, and it is the best use of an east-coast visit.' },
    ],
  },

  /* ---------------- UMM AL QUWAIN ---------------- */
  'umm-al-quwain-uaq-city-sofa-cleaning': {
    headline: 'Big-city sofa cleaning standards in quiet Umm Al Quwain.',
    focus: [
      'Fabric, leather and sectional sofas covered across UAQ City.',
      'Free Trade Zone offices and homes both served.',
      'Price confirmed on WhatsApp before booking.',
    ],
    faqs: [
      { question: 'Do you clean sofas in the UAQ Free Trade Zone?', answer: 'Yes, office and staff-accommodation sofas in the free zone are covered.' },
      { question: 'How long does a sofa take to dry?', answer: 'A few hours in most homes, with air movers used to speed up drying.' },
      { question: 'Can I book a combined sofa and carpet clean in UAQ?', answer: 'Yes. Combining the two is popular with UAQ families.' },
    ],
  },
}

const ALL: Record<string, ComboExtra> = { ...DUBAI_COMBO_EXTRAS, ...OTHER }

export const getComboExtra = (emirate: string, city: string, service: string): ComboExtra | undefined =>
  ALL[`${emirate}-${city}-${service}`]
