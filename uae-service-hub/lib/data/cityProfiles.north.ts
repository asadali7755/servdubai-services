import type { CityProfile } from './cityProfiles'

/** Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain area profiles. */
export const NORTH_PROFILES: Record<string, CityProfile> = {
  /* ---------------- AJMAN ---------------- */
  'ajman-ajman-city': {
    tagline: 'Ajman’s growing city centre — move-in, move-out and everyday deep cleaning at fair prices.',
    story: [
      'Ajman City has grown quickly, with new towers along the Corniche and established neighbourhoods inland. A lot of people move in and out each year, so the most common requests are move-in and move-out cleans, followed by sofas and carpets.',
      'Prices here are set for Ajman, not Dubai, and the scope is agreed on WhatsApp before the team arrives so there are no surprises.',
    ],
    picks: [
      { service: 'apartment-cleaning', why: 'Frequent moves in Ajman City make move-in and move-out cleans the most booked job.' },
      { service: 'sofa-cleaning', why: 'Family sofas in Ajman homes respond well to hot-water extraction.' },
      { service: 'villa-deep-cleaning', why: 'Villas in the inland neighbourhoods benefit from a full deep clean once or twice a year.' },
    ],
    tips: [
      'Book move-out cleans a few days before your inspection date.',
      'Ask for a written scope on WhatsApp so the price is clear.',
      'Clean balcony glass often in Corniche towers — sea spray leaves a film.',
    ],
    visit: 'Share your building or villa area in Ajman City and we will confirm a time the same day.',
  },

  'ajman-al-nuaimiya': {
    tagline: 'Central Al Nuaimiya apartments — quick response, regular upkeep.',
    story: [
      'Al Nuaimiya is one of Ajman’s busiest residential districts, full of apartment blocks close to the free zone. Dense living means sofas and carpets wear faster and benefit from more frequent cleaning.',
      'Its central location makes same-day visits common, and many households keep a regular routine for sofas and carpets.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Heavily used sofas in dense Al Nuaimiya flats benefit from regular extraction.' },
      { service: 'carpet-cleaning', why: 'High-traffic apartments push dirt deep into carpets quickly.' },
      { service: 'mattress-cleaning', why: 'Family mattresses benefit from sanitising every few months.' },
    ],
    tips: [
      'Clean carpets every 4–6 months in busy family apartments.',
      'Use mattress protectors for children’s beds.',
      'Keep shoes at the door to reduce dust from the street.',
    ],
    visit: 'Same-day slots are often available in Al Nuaimiya — message us in the morning.',
  },

  'ajman-al-rashidiya': {
    tagline: 'Villas and apartments on the Sharjah border — flexible service for every home type.',
    story: [
      'Al Rashidiya mixes villa communities with apartment buildings near the Sharjah border. One day the job is a single sofa in a flat; the next it is a full villa with marble floors.',
      'Teams bring a flexible kit so they can handle both, and quotes are tailored to the home rather than a fixed package.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Sofas are the most common job across Al Rashidiya’s apartments and villas.' },
      { service: 'villa-deep-cleaning', why: 'Villa homes here suit a full deep clean, especially when moving in.' },
      { service: 'marble-polishing', why: 'Villas with marble floors benefit from periodic polishing.' },
    ],
    tips: [
      'Let us know your home type when booking so we bring the right equipment.',
      'Polish marble before scratches become deep.',
      'Wipe AC grilles monthly to keep furniture cleaner.',
    ],
    visit: 'Tell us whether it is a flat or a villa near the Sharjah border and we will match the team.',
  },

  'ajman-al-jerf': {
    tagline: 'Near Ajman Port — deep steam cleaning that cuts through extra dust.',
    story: [
      'Al Jerf sits near Ajman Port and the free zone, where industrial activity and residential streets meet. Homes here tend to pick up more airborne dust, which settles into sofas and carpets faster than in quieter areas.',
      'Deep steam and extraction cleaning works well against that build-up, and many households here book more frequent cleans as a result.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Port-area dust settles into upholstery and needs regular extraction.' },
      { service: 'carpet-cleaning', why: 'Carpets near the industrial area trap fine particles that vacuums leave behind.' },
      { service: 'curtain-cleaning', why: 'Curtains filter a lot of the extra dust and need cleaning more often here.' },
    ],
    tips: [
      'Clean sofas every 3–4 months in homes near the port.',
      'Keep windows shut on windy days.',
      'Clean curtains at least twice a year.',
    ],
    visit: 'Share your street or building near Ajman Port and we will plan the route.',
  },

  'ajman-al-rawda': {
    tagline: 'Big family homes in Al Rawda — full villa deep cleans that respect a busy household.',
    story: [
      'Al Rawda is popular with families, with villa compounds and spacious apartments along Sheikh Ammar Bin Humaid Street. Larger homes mean more rooms, more furniture and more daily wear.',
      'Villa deep cleans here are planned so the family can keep using part of the house, with living areas finished first.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Large family villas in Al Rawda suit a planned, room-by-room deep clean.' },
      { service: 'carpet-cleaning', why: 'Family rugs collect daily spills and dust quickly.' },
      { service: 'dining-chair-cleaning', why: 'Fabric dining chairs in big households pick up food stains often.' },
    ],
    tips: [
      'Schedule deep cleans before the cooler months when families host more guests.',
      'Treat dining chair stains quickly.',
      'Rotate rugs to spread wear evenly.',
    ],
    visit: 'Tell us how many bedrooms and floors — we size the team to finish in one visit.',
  },

  'ajman-al-hamidiya': {
    tagline: 'Busy Al Hamidiya — shops downstairs, homes upstairs, and dust that needs regular attention.',
    story: [
      'Al Hamidiya is central and busy, with apartments above ground-floor shops along main roads. Constant foot traffic brings in more dust and grime, especially on carpets near the entrance.',
      'Households here benefit from more frequent deep cleans, and same-day sofa cleaning is a common request.',
    ],
    picks: [
      { service: 'carpet-cleaning', why: 'Heavy foot traffic in central Al Hamidiya grinds dirt into carpets quickly.' },
      { service: 'sofa-cleaning', why: 'Same-day sofa cleaning is one of the most requested jobs in this busy area.' },
      { service: 'office-cleaning', why: 'Ground-floor shops and small offices need regular deep cleaning.' },
    ],
    tips: [
      'Clean entrance-area carpets more often than bedroom carpets.',
      'Use washable runners in the hallway.',
      'Book shop cleaning after closing time.',
    ],
    visit: 'Same-day sofa cleaning is often possible — message us before noon.',
  },

  'ajman-al-zahya': {
    tagline: 'Modern gated villas in Al Zahya — careful cleaning for premium finishes.',
    story: [
      'Al Zahya is one of Ajman’s newer, upscale gated communities, with modern villas and townhouses. Newer homes often have premium flooring and upholstery that need product-appropriate care.',
      'Technicians check fabric and surface types before starting, so finishes are protected while still getting a thorough clean.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Premium stone floors in Al Zahya villas keep their shine with regular polishing.' },
      { service: 'sofa-cleaning', why: 'Modern upholstery needs fabric-specific cleaning methods.' },
      { service: 'villa-deep-cleaning', why: 'Gated-community villas suit periodic full deep cleans.' },
    ],
    tips: [
      'Ask for a fabric test on any designer sofa before cleaning.',
      'Seal marble after polishing in high-traffic areas.',
      'Register visitors with the community gate in advance.',
    ],
    visit: 'We coordinate gate access with Al Zahya security — share your villa number when booking.',
  },

  'ajman-al-mowaihat': {
    tagline: 'Growing Al Mowaihat — move-in and renovation clean-ups on the Sharjah border.',
    story: [
      'Al Mowaihat is a growing district on the Ajman–Sharjah border with villas and low-rise apartments. Many households are moving in or renovating, which leaves dust and debris everywhere.',
      'Move-in and post-renovation deep cleans are the most popular jobs here, along with carpet cleaning once the home is settled.',
    ],
    picks: [
      { service: 'apartment-cleaning', why: 'Move-in and move-out cleans are the most common request in growing Al Mowaihat.' },
      { service: 'floor-cleaning', why: 'Renovation dust and paint marks need machine floor cleaning.' },
      { service: 'carpet-cleaning', why: 'Carpets in newly settled homes pick up dust from nearby construction.' },
    ],
    tips: [
      'Book a deep clean after renovation, before furniture goes back in.',
      'Cover sofas during building work.',
      'Clean AC filters after renovation dust settles.',
    ],
    visit: 'Tell us your move-in or renovation finish date and we will book the clean right after.',
  },

  'ajman-musherief': {
    tagline: 'Quiet villa compounds in Musherief — big homes, done properly in one visit.',
    story: [
      'Musherief is quieter and more spread out than central Ajman, popular with families for its villa compounds. Homes are larger, often with majlis areas and outdoor spaces.',
      'Teams usually handle full villa deep cleans in a single visit, covering bedrooms, majlis and outdoor seating.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Spread-out family villas in Musherief suit a full one-day deep clean.' },
      { service: 'sofa-cleaning', why: 'Majlis seating in large villas benefits from deep extraction.' },
      { service: 'carpet-cleaning', why: 'Large rugs in villa living rooms collect dust from gardens and courtyards.' },
    ],
    tips: [
      'Clean majlis seating before family gatherings.',
      'Bring outdoor cushions inside during dusty months.',
      'Sweep courtyards often to reduce sand carried indoors.',
    ],
    visit: 'Villa visits start in the morning — tell us about majlis and outdoor areas for an accurate quote.',
  },

  /* ---------------- RAS AL KHAIMAH ---------------- */
  'ras-al-khaimah-rak-city': {
    tagline: 'RAK’s growing city — Corniche flats and family villas, cleaned without the Dubai price tag.',
    story: [
      'Ras Al Khaimah City is expanding fast, with apartments along the Corniche and family villas in established areas like Al Nakheel. Growth means plenty of new residents setting up home.',
      'Teams cover the main residential areas with sofa, carpet and villa cleaning, and prices are set for RAK rather than Dubai.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Sofa cleaning is the most requested job across RAK City homes.' },
      { service: 'carpet-cleaning', why: 'Family rugs in RAK villas collect dust from gardens and driveways.' },
      { service: 'villa-deep-cleaning', why: 'New and established villas both benefit from a full deep clean.' },
    ],
    tips: [
      'Book a move-in clean if you are new to RAK — it sets a clean starting point.',
      'Clean sofas every 4–6 months.',
      'Keep balcony doors closed on windy Corniche days.',
    ],
    visit: 'Share your area — Corniche, Al Nakheel or City Centre — and we will confirm the timing.',
  },

  'ras-al-khaimah-al-hamra': {
    tagline: 'Golf and marina homes in Al Hamra Village — premium care for premium finishes.',
    story: [
      'Al Hamra Village is a golf and waterfront community with luxury villas and apartments. Homes here feature marble, quality upholstery and big windows facing the marina or golf course.',
      'Marble polishing and careful upholstery cleaning are the most popular jobs, often booked before guests arrive or at the start of the season.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Golf and waterfront villas suit a full deep clean before the guest season.' },
      { service: 'marble-polishing', why: 'Marble in waterfront homes dulls faster and benefits from polishing and sealing.' },
      { service: 'sofa-cleaning', why: 'Luxury upholstery needs gentle, fabric-appropriate cleaning.' },
    ],
    tips: [
      'Book deep cleans before the cooler holiday season when bookings peak.',
      'Wipe salt film off terrace glass weekly.',
      'Seal marble after polishing in sea-facing rooms.',
    ],
    visit: 'We coordinate with Al Hamra community security — share your villa or building name.',
  },

  'ras-al-khaimah-al-nakheel': {
    tagline: 'Established Al Nakheel — dependable quarterly cleaning for settled families.',
    story: [
      'Al Nakheel is an established residential area next to RAK City, with family villas and apartments. Many families here have been in the same home for years and like a regular routine.',
      'Quarterly sofa and carpet cleaning is common, which keeps homes fresh and avoids heavy restoration work.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Quarterly sofa cleaning is a common routine for Al Nakheel families.' },
      { service: 'carpet-cleaning', why: 'Regular carpet cleaning keeps family rugs fresh year-round.' },
      { service: 'mattress-cleaning', why: 'Mattress sanitising is a popular add-on to regular visits.' },
    ],
    tips: [
      'Set a quarterly reminder for sofas and carpets.',
      'Add mattress sanitising once or twice a year.',
      'Vacuum rugs weekly between deep cleans.',
    ],
    visit: 'Ask about a recurring booking — many Al Nakheel clients keep the same day each quarter.',
  },

  'ras-al-khaimah-al-dhait': {
    tagline: 'RAK’s biggest residential district — from Al Dhait South streets to new northern extensions.',
    story: [
      'Al Dhait North and South together form one of RAK’s largest residential zones, with mid-rise apartment blocks and family villas. Older streets in the south and newer developments in the north have quite different needs.',
      'Most bookings come through neighbours recommending us on the same street, and visits are often grouped for faster response.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Sofa cleaning is the most common job across Al Dhait’s apartments and villas.' },
      { service: 'villa-deep-cleaning', why: 'Family villas in Al Dhait benefit from a full deep clean.' },
      { service: 'carpet-cleaning', why: 'Older homes in Al Dhait South often have long-used carpets that revive well.' },
    ],
    tips: [
      'Book with neighbours on the same street for faster scheduling.',
      'Deep clean older carpets before replacing them — many come back well.',
      'Clean AC vents in older blocks once a year.',
    ],
    visit: 'Tell us whether you are in Al Dhait North or South — it helps us group nearby visits.',
  },

  'ras-al-khaimah-mina-al-arab': {
    tagline: 'Lagoon and mangrove living in Mina Al Arab — humidity-aware care for stone and fabric.',
    story: [
      'Mina Al Arab is a master-planned lagoon community with waterfront villas, townhouses and beachfront apartments, including Hayat Island. The mangrove setting brings higher humidity than most of RAK.',
      'That humidity settles into upholstery and dulls marble faster, so cleaning and polishing are recommended a little more often here than inland.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Higher lagoon humidity dulls marble faster in Mina Al Arab homes.' },
      { service: 'sofa-cleaning', why: 'Upholstery in waterfront homes benefits from cleaning every 3–4 months.' },
      { service: 'curtain-cleaning', why: 'Curtains facing the lagoon absorb moisture and odours.' },
    ],
    tips: [
      'Clean sofas every 3–4 months in lagoon-facing homes.',
      'Run a dehumidifier in closed rooms.',
      'Polish and seal marble more often than inland homes.',
    ],
    visit: 'Share your community name — Hayat Island, Flamingo Villas or the lagoon townhouses.',
  },

  'ras-al-khaimah-al-rams': {
    tagline: 'RAK’s northern coast — villa deep cleans for large extended-family homes.',
    story: [
      'Al Rams is RAK’s northernmost town, a former fishing village with traditional villas and newer housing along the Corniche. Homes are often large and shared by extended families.',
      'Most bookings here are full villa deep cleans, planned in advance because of the longer drive north.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Large extended-family villas in Al Rams suit a planned full deep clean.' },
      { service: 'sofa-cleaning', why: 'Majlis seating in family villas benefits from deep extraction.' },
      { service: 'carpet-cleaning', why: 'Coastal sand gets into rugs in Corniche-side homes.' },
    ],
    tips: [
      'Book a few days ahead for northern RAK visits.',
      'Clean majlis cushions before family occasions.',
      'Shake out door mats daily near the coast.',
    ],
    visit: 'We plan Al Rams visits in advance — message us with your preferred day.',
  },

  'ras-al-khaimah-digdaga': {
    tagline: 'Inland Digdaga — less humidity, more farm dust, and carpets that need regular care.',
    story: [
      'Digdaga is an established inland district of RAK, known for its agricultural centre and family villa communities. The climate is drier than the coast, so humidity is less of a problem, but dust from surrounding farmland settles indoors.',
      'Carpet cleaning is especially worthwhile here, along with sofas and full villa deep cleans.',
    ],
    picks: [
      { service: 'carpet-cleaning', why: 'Dust from nearby farmland settles deep in carpets in Digdaga homes.' },
      { service: 'villa-deep-cleaning', why: 'Family villas benefit from a periodic full deep clean.' },
      { service: 'sofa-cleaning', why: 'Upholstery collects fine dust in the drier inland air.' },
    ],
    tips: [
      'Vacuum carpets twice a week during dusty months.',
      'Keep windows closed during farming activity and windy days.',
      'Deep clean carpets every 4–6 months.',
    ],
    visit: 'Digdaga visits are planned along the RAK Airport road route — tell us your preferred day.',
  },

  'ras-al-khaimah-khatt': {
    tagline: 'Mountain-view villas near the Khatt hot springs — seasonal deep cleans before family gatherings.',
    story: [
      'Khatt sits at the foot of the Hajar Mountains, known for its hot springs and low-density villa streets. Homes are spread out, often large, and used for family gatherings.',
      'Villa deep cleaning is by far the most requested service here, often booked seasonally before guests arrive.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Large spread-out villas in Khatt suit a full seasonal deep clean.' },
      { service: 'sofa-cleaning', why: 'Majlis and family seating are refreshed before gatherings.' },
      { service: 'carpet-cleaning', why: 'Mountain dust settles into rugs in open, airy homes.' },
    ],
    tips: [
      'Book seasonal cleans a week ahead of family events.',
      'Close windows on windy days when mountain dust blows through.',
      'Store spare cushions in sealed covers.',
    ],
    visit: 'Khatt is on our longer RAK route — book a few days ahead for the best slot.',
  },

  /* ---------------- FUJAIRAH ---------------- */
  'fujairah-fujairah-city': {
    tagline: 'On the Gulf of Oman — Fujairah City homes kept fresh through coastal humidity.',
    story: [
      'Fujairah is the only emirate fully on the Gulf of Oman coast, and its climate is different from the west coast — more humid at times, with mountains close behind the city. Upholstery and carpets feel this first.',
      'Teams serve apartments, villas and commercial spaces across Fujairah City with sofa, carpet and deep cleaning.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Coastal humidity in Fujairah makes regular upholstery cleaning important.' },
      { service: 'carpet-cleaning', why: 'Carpets in coastal homes trap moisture and sand.' },
      { service: 'villa-deep-cleaning', why: 'Family villas across Fujairah City suit a full deep clean once or twice a year.' },
    ],
    tips: [
      'Clean sofas every 4–5 months in coastal homes.',
      'Air rooms early in the morning.',
      'Use a dehumidifier in closed bedrooms during humid months.',
    ],
    visit: 'East-coast visits are planned in advance — message us a day ahead.',
  },

  'fujairah-dibba-al-fujairah': {
    tagline: 'Coastal Dibba homes and holiday villas — ready before you or your guests arrive.',
    story: [
      'Dibba Al-Fujairah sits on the northern east coast with mountains behind it. Many properties are permanent family homes, and some are holiday homes that sit empty between visits.',
      'Holiday homes often need a full refresh before guests arrive, while family homes need regular sofa and carpet care against coastal humidity.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Holiday villas need a full refresh before guests arrive.' },
      { service: 'sofa-cleaning', why: 'Coastal humidity settles into upholstery in Dibba homes.' },
      { service: 'mattress-cleaning', why: 'Holiday-home mattresses benefit from sanitising between stays.' },
    ],
    tips: [
      'Book a clean a day or two before guests arrive.',
      'Leave a dehumidifier running in empty holiday homes.',
      'Cover furniture when the home is unused for long periods.',
    ],
    visit: 'We can combine Dibba Al-Fujairah and Dibba Al-Hisn visits on the same day.',
  },

  'fujairah-kalba': {
    tagline: 'Peaceful Kalba by the mangroves — eco-friendly cleaning for coastal family homes.',
    story: [
      'Kalba is a calm coastal town near the Khor Kalba mangrove reserve. Families here value a quieter pace of life and a cleaner environment.',
      'Eco-friendly, low-toxicity products are a priority, along with sofa, carpet and villa deep cleaning suited to coastal homes.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Eco-friendly sofa cleaning suits Kalba’s family homes and coastal climate.' },
      { service: 'carpet-cleaning', why: 'Sand and humidity from the coast work into carpet pile.' },
      { service: 'villa-deep-cleaning', why: 'Villas in Kalba benefit from a full periodic deep clean.' },
    ],
    tips: [
      'Ask for eco-friendly products if you have children or pets.',
      'Keep beach towels away from upholstery.',
      'Air rooms when the sea breeze is dry.',
    ],
    visit: 'Kalba is on our east-coast route — book a day ahead.',
  },

  'fujairah-al-faseel': {
    tagline: 'Beachfront towers in Al Faseel — salt air handled on stone and fabric.',
    story: [
      'Al Faseel is Fujairah City’s northern beachfront district, with apartment towers and villas facing the Gulf of Oman directly. Salt-air exposure is higher here than anywhere else in the city.',
      'Marble care and upholstery cleaning are the main jobs, with attention to removing salt film rather than just surface dust.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Direct beach frontage in Al Faseel dulls marble faster than inland homes.' },
      { service: 'sofa-cleaning', why: 'Salt-laden air settles into upholstery in beachfront towers.' },
      { service: 'curtain-cleaning', why: 'Curtains on sea-facing windows absorb salt and moisture.' },
    ],
    tips: [
      'Wipe salt film off balcony glass weekly.',
      'Polish and seal marble in sea-facing rooms.',
      'Clean curtains twice a year.',
    ],
    visit: 'Share your tower or villa along the Al Faseel corniche when booking.',
  },

  'fujairah-al-sharyah': {
    tagline: 'Fujairah’s administrative heart — early and evening slots around shift work.',
    story: [
      'Al Sharyah sits close to the main hospital and government offices in Fujairah City. Many residents work shifts, so finding the right time matters as much as the cleaning itself.',
      'Early-morning and evening appointments are common, with sofa, carpet and villa cleaning for this central residential area.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Quick-dry sofa cleaning fits around shift schedules in Al Sharyah.' },
      { service: 'apartment-cleaning', why: 'Busy professionals here often book full apartment cleans while at work.' },
      { service: 'carpet-cleaning', why: 'Family carpets in central homes need regular deep cleaning.' },
    ],
    tips: [
      'Tell us your shift pattern so we can book a suitable slot.',
      'Leave a key with a neighbour or building guard if you are on shift.',
      'Vacuum carpets weekly between deep cleans.',
    ],
    visit: 'Early-morning and evening slots available — tell us your shift times when booking.',
  },

  'fujairah-madab': {
    tagline: 'Green Madab near Madhab Park — villa cleaning inside and out.',
    story: [
      'Madab is an established villa area on the northern edge of Fujairah City, near Madhab Park and the Heritage Village. It is one of the greener residential pockets in the city.',
      'Villa deep cleans here often include outdoor seating and terrace areas alongside sofas and carpets inside.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Established family villas in Madab suit a full deep clean, often including terraces.' },
      { service: 'sofa-cleaning', why: 'Indoor and outdoor seating both benefit from regular cleaning.' },
      { service: 'carpet-cleaning', why: 'Garden soil and leaves are tracked onto rugs in greener villas.' },
    ],
    tips: [
      'Put mats at garden doors to stop soil reaching rugs.',
      'Clean outdoor cushions before storing them for summer.',
      'Book villa cleans in the cooler months when you use the garden more.',
    ],
    visit: 'Let us know if you want terrace or outdoor seating included in the villa visit.',
  },

  'fujairah-merashid': {
    tagline: 'Near the port and Corniche — move-in and move-out cleans for Merashid apartments.',
    story: [
      'Merashid is on the eastern side of Fujairah City, close to the Corniche and Fujairah Port. Many residents are company-housed staff and long-term renters, so apartments change hands often.',
      'Move-in and move-out cleans are the most common jobs, along with sofa and carpet cleaning.',
    ],
    picks: [
      { service: 'apartment-cleaning', why: 'Frequent tenant changes near the port make move-out cleans the most booked job.' },
      { service: 'sofa-cleaning', why: 'Furnished company flats need sofas refreshed between occupants.' },
      { service: 'mattress-cleaning', why: 'Mattresses in shared staff housing benefit from sanitising.' },
    ],
    tips: [
      'Book move-out cleans before the handover inspection.',
      'Use mattress protectors in furnished flats.',
      'Clean AC filters when moving in.',
    ],
    visit: 'Same-day service may be possible in Merashid — message us early in the day.',
  },

  'fujairah-qidfa': {
    tagline: 'Quiet coastal Qidfa — scheduled alongside Dibba and Fujairah City visits.',
    story: [
      'Qidfa is a coastal town north of Fujairah City on the road to Dibba, with villas and low-rise homes along a quiet stretch of coastline.',
      'Because it is spread out, visits are usually combined with nearby Dibba or Fujairah City bookings, and flexible timing gets the fastest response.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Coastal villas in Qidfa suit a full planned deep clean.' },
      { service: 'sofa-cleaning', why: 'Humidity on this stretch of coast settles into upholstery.' },
      { service: 'carpet-cleaning', why: 'Beach sand finds its way into carpets in coastal homes.' },
    ],
    tips: [
      'Be flexible on the day for the quickest booking.',
      'Shake out entrance mats daily.',
      'Air rooms in the early morning.',
    ],
    visit: 'We route Qidfa visits with Dibba and Fujairah City jobs — book a day ahead.',
  },

  /* ---------------- UMM AL QUWAIN ---------------- */
  'umm-al-quwain-uaq-city': {
    tagline: 'Quiet, affordable UAQ — big-city cleaning standards at local prices.',
    story: [
      'Umm Al Quwain is quieter and more affordable than its neighbours, attracting families looking for space. UAQ City has villas, apartments and free-zone properties near the Corniche.',
      'Teams provide sofa, carpet and full deep cleaning at prices set for UAQ.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Sofa cleaning is the most common request in UAQ City homes.' },
      { service: 'villa-deep-cleaning', why: 'Family villas benefit from a full deep clean once or twice a year.' },
      { service: 'carpet-cleaning', why: 'Coastal sand gets into rugs in Corniche-side homes.' },
    ],
    tips: [
      'Combine sofa and carpet cleaning in one visit.',
      'Keep coastal-facing windows shut on windy days.',
      'Plan villa deep cleans before the winter season.',
    ],
    visit: 'Share your area near the Corniche or free zone when booking.',
  },

  'umm-al-quwain-falaj-al-mualla': {
    tagline: 'Growing Falaj Al Mualla — same-day help for new and settled homes.',
    story: [
      'Falaj Al Mualla is a growing inland community in UAQ with villas and apartments. As more families move in, demand for reliable cleaning has grown.',
      'Same-day sofa, carpet and apartment deep cleaning is available for most of the area.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Same-day sofa cleaning is the most popular job in Falaj Al Mualla.' },
      { service: 'apartment-cleaning', why: 'New residents often book a full apartment clean before moving in.' },
      { service: 'carpet-cleaning', why: 'Inland dust settles in carpets quickly.' },
    ],
    tips: [
      'Book a move-in clean before furniture arrives.',
      'Vacuum carpets twice a week in dusty months.',
      'Clean sofas every 4–6 months.',
    ],
    visit: 'Message us in the morning for same-day availability in Falaj Al Mualla.',
  },

  'umm-al-quwain-al-salamah': {
    tagline: 'New villas in Al Salamah — post-handover deep cleans before families move in.',
    story: [
      'Al Salamah is one of UAQ’s newer villa developments, inland from the Corniche. Many bookings are post-handover deep cleans before families move in.',
      'New villas need construction dust removed from floors, cupboards and AC vents before furniture goes in.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Post-handover deep cleans are the most common job in new Al Salamah villas.' },
      { service: 'floor-cleaning', why: 'Construction grit needs machine cleaning to protect new tiles.' },
      { service: 'curtain-cleaning', why: 'New curtains collect construction dust during the first months.' },
    ],
    tips: [
      'Schedule the clean right after handover, before furniture arrives.',
      'Check AC vents for construction dust.',
      'Lay protective mats while nearby villas are still being built.',
    ],
    visit: 'Let us know your handover date — we can book the clean right after.',
  },

  'umm-al-quwain-al-ramlah': {
    tagline: 'Quiet Al Ramlah — seasonal cleaning ahead of winter gatherings.',
    story: [
      'Al Ramlah is a quiet, low-density UAQ neighbourhood near the inland waterfront developments. Life here is calm, and most families entertain more during the cooler months.',
      'Recurring seasonal cleaning before winter is the most common pattern here.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Sofas are refreshed before winter gatherings in Al Ramlah homes.' },
      { service: 'carpet-cleaning', why: 'Rugs are cleaned seasonally before guests arrive.' },
      { service: 'dining-chair-cleaning', why: 'Dining chairs see more use during winter entertaining.' },
    ],
    tips: [
      'Book seasonal cleaning in October or November.',
      'Treat dining chair spills quickly.',
      'Rotate rugs before the winter season.',
    ],
    visit: 'Ask about a seasonal booking — we can remind you before winter.',
  },

  'umm-al-quwain-al-humrah': {
    tagline: 'Near the UAQ mangroves — humidity-aware cleaning for coastal homes.',
    story: [
      'Al Humrah is close to UAQ Beach and the mangrove coastline, so homes here see higher humidity than inland parts of the emirate.',
      'Sofa and carpet cleaning every few months helps prevent musty smells, along with full villa deep cleans.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Coastal humidity near the mangroves makes regular sofa cleaning important.' },
      { service: 'carpet-cleaning', why: 'Moisture and sand settle into carpets in coastal homes.' },
      { service: 'villa-deep-cleaning', why: 'Coastal villas benefit from a full deep clean before the cooler months.' },
    ],
    tips: [
      'Clean sofas and carpets every 3–4 months.',
      'Run a dehumidifier in closed rooms.',
      'Air rooms in the early morning.',
    ],
    visit: 'Share your street near UAQ Beach when booking.',
  },

  'umm-al-quwain-khor-al-beidah': {
    tagline: 'Homes near the Khor Al Beidah wetlands — planned visits, gentle products.',
    story: [
      'Khor Al Beidah is UAQ’s protected lagoon and mangrove reserve on the southern coast, with low-density villas nearby. It is one of the most spread-out areas we cover.',
      'Booking a day ahead lets us route the visit with nearby Al Salamah or UAQ City jobs.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Spread-out villas near the reserve suit a full planned deep clean.' },
      { service: 'sofa-cleaning', why: 'Coastal humidity near the wetlands settles into upholstery.' },
      { service: 'curtain-cleaning', why: 'Curtains in lagoon-facing homes absorb moisture over time.' },
    ],
    tips: [
      'Book a day ahead for the best time slot.',
      'Choose eco-friendly products near the wetland reserve.',
      'Air curtains on dry, breezy days.',
    ],
    visit: 'We route Khor Al Beidah visits with Al Salamah and UAQ City — book a day in advance.',
  },
}
