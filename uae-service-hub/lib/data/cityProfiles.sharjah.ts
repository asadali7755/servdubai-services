import type { CityProfile } from './cityProfiles'

export const SHARJAH_PROFILES: Record<string, CityProfile> = {
  'sharjah-sharjah-city': {
    tagline: 'Central Sharjah homes and offices — Dubai-standard cleaning at Sharjah prices.',
    story: [
      'Sharjah City covers everything from older apartment blocks near the Corniche to newer villas further out, so no two jobs look the same. Older buildings tend to need heavier kitchen and bathroom work; newer homes mostly need sofas, carpets and floors kept fresh.',
      'Many residents here commute to Dubai, so evening and weekend slots are popular. Teams cross the city regularly and can often combine nearby bookings, which keeps response times short.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Sofas are the most booked item across central Sharjah’s mix of apartments and villas.' },
      { service: 'carpet-cleaning', why: 'Family homes here often have several large rugs that need deep extraction, not just vacuuming.' },
      { service: 'apartment-cleaning', why: 'Older blocks near the Corniche often need a full move-in reset for new tenants.' },
    ],
    tips: [
      'Book on weekday evenings if you commute — slots fill fastest on weekends.',
      'In older flats, clean the kitchen exhaust grille whenever you clean the hob.',
      'Have rugs cleaned before winter, when families spend more time at home.',
    ],
    visit: 'Tell us the area and nearest landmark (King Faisal Road, Corniche, City Centre) so the team takes the quickest route.',
  },

  'sharjah-al-nahda': {
    tagline: 'Busy family towers on the Dubai border — sofas and flats refreshed on schedule.',
    story: [
      'Al Nahda is one of Sharjah’s most densely populated communities, packed with family apartments close to the Dubai border. With more people living in each flat, sofas and carpets wear faster than average and need regular attention.',
      'Many households here keep a twice-a-year routine for deep cleaning sofas and carpets, with a full apartment clean when the lease renews. Teams know the main towers around Al Nahda Park and Sahara Centre well, so visits run quickly.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Large family sofas in Al Nahda flats see heavy daily use and respond well to a twice-yearly extraction clean.' },
      { service: 'carpet-cleaning', why: 'Kids, guests and daily traffic push dirt deep into carpets in busy family apartments.' },
      { service: 'mattress-cleaning', why: 'Children’s mattresses benefit from regular sanitising to remove dust mites and spills.' },
    ],
    tips: [
      'Use washable covers on dining chairs if you have young children.',
      'Clean the sofa and mattress together — both collect the same dust and allergens.',
      'Vacuum carpets twice a week in busy households to slow down matting.',
    ],
    visit: 'Share your tower name near Al Nahda Park or Sahara Centre — most visits here are in high-rise buildings with visitor parking.',
  },

  'sharjah-al-qasimia': {
    tagline: 'Homes and businesses in central Al Qasimia, often cleaned the same day.',
    story: [
      'Al Qasimia sits in the middle of Sharjah, with apartments above shops and offices side by side. That central position means teams can usually reach it quickly, which makes it one of the easier areas for same-day bookings.',
      'Work here splits between residential flats needing sofa and carpet care and small commercial spaces that need a reliable deep clean outside opening hours.',
    ],
    picks: [
      { service: 'office-cleaning', why: 'Small offices and shops in Al Qasimia need cleaning outside business hours.' },
      { service: 'sofa-cleaning', why: 'Apartment sofas in this busy district pick up dust quickly from street-level traffic.' },
      { service: 'carpet-cleaning', why: 'Commercial and residential carpets both benefit from periodic deep extraction.' },
    ],
    tips: [
      'Schedule shop or office cleaning after closing so it does not disturb customers.',
      'Keep entrance mats clean — in busy streets they stop most dirt before it reaches the carpet.',
      'Wipe AC vents monthly in street-facing flats.',
    ],
    visit: 'Message us in the morning for same-day availability — Al Qasimia is central on our Sharjah route.',
  },

  'sharjah-al-majaz': {
    tagline: 'Lagoon-side apartments by Buhaira Corniche, protected from waterfront humidity.',
    story: [
      'Al Majaz wraps around Khalid Lagoon and the Buhaira Corniche, and many apartments here face the water. That view comes with slightly damper air, which settles into sofas and curtains and can leave a stale smell if fabrics are not cleaned regularly.',
      'Homes in this part of Sharjah are often well furnished, with good-quality sofas and rugs that are worth protecting. Most visits combine a fabric check, deep extraction and fast drying so nothing stays damp in the humid air.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Lagoon-facing apartments hold humidity in upholstery, so extraction and fast drying matter here.' },
      { service: 'curtain-cleaning', why: 'Large curtains in water-view living rooms absorb moisture and odour over time.' },
      { service: 'carpet-cleaning', why: 'Quality rugs in Al Majaz homes keep their colour and pile with regular low-moisture cleaning.' },
    ],
    tips: [
      'Plan sofa cleaning every 5–6 months in waterfront apartments.',
      'Open curtains during the day to let fabric dry out from overnight humidity.',
      'Keep rugs a little away from balcony doors where condensation forms.',
    ],
    visit: 'Most Al Majaz towers have visitor parking; let us know your building along the Corniche or near the Amphitheatre.',
  },

  'sharjah-al-khan': {
    tagline: 'Coastal Al Khan flats — fresh fabric and air in older seafront buildings.',
    story: [
      'Al Khan combines the beachfront and lagoon with some of Sharjah’s older residential buildings. Sea air, older ventilation and long-used furniture together mean fabrics and carpets can feel heavy and smell stale if they go too long without a deep clean.',
      'Most jobs here are apartment-focused: sofas, carpets and full deep cleans, done with products that are safe for children and pets since many homes are family flats.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Older sofas in coastal flats hold salt moisture and odour that extraction removes.' },
      { service: 'apartment-cleaning', why: 'Older buildings benefit from a full deep clean of kitchen, bathroom and fittings.' },
      { service: 'carpet-cleaning', why: 'Carpets in seafront flats trap sand and humidity that a vacuum leaves behind.' },
    ],
    tips: [
      'Wipe window tracks often — sand and salt collect there and blow back inside.',
      'Run bathroom fans after showers to limit mould in older buildings.',
      'Choose eco-friendly products if you have children playing on the carpets.',
    ],
    visit: 'Let us know if your building has limited parking near the beach — we plan the drop-off accordingly.',
  },

  'sharjah-dibba-al-hisn': {
    tagline: 'Sharjah’s east-coast town, served together with Dibba Al-Fujairah.',
    story: [
      'Dibba Al-Hisn is Sharjah’s enclave on the east coast, sharing its stretch of shoreline with Dibba Al-Fujairah. Homes are mostly villas and low-rise apartments, and coastal humidity is part of everyday life here.',
      'Because it is a longer drive from central Sharjah, visits are usually planned a day ahead and often combined with other Dibba bookings, so the team can spend proper time on each villa.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Villas are the main home type in Dibba Al-Hisn and suit a full one-visit deep clean.' },
      { service: 'sofa-cleaning', why: 'Coastal humidity makes regular upholstery cleaning worthwhile for family seating.' },
      { service: 'carpet-cleaning', why: 'Rugs in coastal villas collect sand from the beach and garden.' },
    ],
    tips: [
      'Book a day ahead so we can route the visit with other east-coast jobs.',
      'Air rooms in the early morning when the coast is coolest.',
      'Shake out entrance mats daily during windy months.',
    ],
    visit: 'Planned east-coast visits: message a day in advance for the best time slot.',
  },

  'sharjah-al-taawun': {
    tagline: 'On the Sharjah–Dubai commute — early and evening slots that fit your day.',
    story: [
      'Al Taawun runs along one of the busiest commuter roads between Sharjah and Dubai. Many residents leave early and come back late, so the biggest challenge is not the cleaning itself but finding a time when someone can open the door.',
      'That is why early-morning and evening appointments are common here, along with key handovers to building security. Homes are a mix of apartments, townhouses and some commercial units.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Quick-dry sofa cleaning fits around a commuter’s evening without leaving fabric damp overnight.' },
      { service: 'apartment-cleaning', why: 'Busy professionals here often prefer a full apartment clean done while they are at work.' },
      { service: 'carpet-cleaning', why: 'Townhouse carpets on Al Taawun get extra dust from the busy main road.' },
    ],
    tips: [
      'Ask for a first-slot morning booking before you leave for work.',
      'Leave a key with security if your building allows it.',
      'Keep road-facing windows shut during rush hour to reduce dust indoors.',
    ],
    visit: 'Early-morning and evening appointments available — tell us your commute window and we will fit the visit around it.',
  },

  'sharjah-muwaileh': {
    tagline: 'Family villas and student flats near University City — from big jobs to quick turnarounds.',
    story: [
      'Muwaileh has grown quickly around University City, so a single street can include large family villas and small student apartments. The cleaning needs are just as mixed: full villa deep cleans on one hand, and fast end-of-term cleans on the other.',
      'Student flats often need a quick, affordable reset before handing back keys, while family homes usually want sofas, carpets and a thorough villa clean together.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Family villas in Muwaileh suit a full deep clean, especially when moving in.' },
      { service: 'apartment-cleaning', why: 'Students near University City often need a fast clean before handing over a flat.' },
      { service: 'mattress-cleaning', why: 'Mattresses in shared student flats benefit from sanitising between tenants.' },
    ],
    tips: [
      'Book end-of-term move-out cleans early — dates near semester breaks fill quickly.',
      'Use mattress protectors in rented student rooms.',
      'Clean villa AC vents along with the deep clean to keep dust down.',
    ],
    visit: 'Mention whether it is a villa or an apartment — we send a team size to match.',
  },

  'sharjah-abu-shagara': {
    tagline: 'Central Abu Shagara flats — more traffic outside, more care needed inside.',
    story: [
      'Abu Shagara is a busy, central part of Sharjah close to King Faisal Street. Heavy traffic and constant activity outside mean apartments here pick up dust and grime faster than quieter suburbs.',
      'Most homes are apartments in dense residential blocks. Regular sofa and carpet cleaning makes the biggest difference, and teams can usually respond quickly because the area is central.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Street dust in central Abu Shagara settles into sofas faster than in quieter areas.' },
      { service: 'carpet-cleaning', why: 'High foot traffic in busy flats makes periodic deep extraction worthwhile.' },
      { service: 'curtain-cleaning', why: 'Curtains on road-facing windows trap traffic dust and odours.' },
    ],
    tips: [
      'Clean sofas every 3–4 months in road-facing apartments.',
      'Wash or clean curtains at least twice a year.',
      'Use door mats inside and outside the flat entrance.',
    ],
    visit: 'Central location means short response times — share your building near King Faisal Street or Abu Shagara Park.',
  },

  'sharjah-al-yarmook': {
    tagline: 'Settled family homes in Al Yarmook — whole-villa care plus everyday upkeep.',
    story: [
      'Al Yarmook is a well-established Sharjah neighbourhood with long-term family homes, both villas and apartment blocks. Many households have lived here for years, so furniture and rugs have a lot of history in them.',
      'A common request is a combined visit: a full villa deep clean together with sofas and carpets, so the whole home is reset in one go rather than room by room over weeks.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Long-term family villas benefit from a thorough reset once or twice a year.' },
      { service: 'carpet-cleaning', why: 'Rugs that have been in the family home for years revive with deep extraction.' },
      { service: 'dining-chair-cleaning', why: 'Fabric dining chairs in large family homes collect food stains over time.' },
    ],
    tips: [
      'Combine villa, sofa and carpet cleaning in one visit to save time and furniture moving.',
      'Treat food stains on dining chairs within a day for the best result.',
      'Rotate heavy furniture slightly every year to avoid permanent carpet dents.',
    ],
    visit: 'For combined villa visits we bring a larger team and start in the morning.',
  },

  'sharjah-al-nabba': {
    tagline: 'Older central Sharjah flats near Rolla — the right method for every fabric.',
    story: [
      'Al Nabba is close to Rolla and the Corniche, with many older residential buildings. Homes here often contain a mix of fabrics — older sofas, newer rugs, different finishes — so a single cleaning method rarely suits everything.',
      'Each visit starts with a quick check of fabric and surface types before choosing how to clean, which protects older pieces while still lifting years of dust.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Older sofas in Al Nabba flats need a fabric check before cleaning to avoid damage.' },
      { service: 'carpet-cleaning', why: 'Mixed carpets and rugs in central flats each need a method that suits their fibre.' },
      { service: 'apartment-cleaning', why: 'Older apartments benefit from a full deep clean of kitchens and bathrooms.' },
    ],
    tips: [
      'Check the care label before using any home cleaner on an older sofa.',
      'Avoid soaking older rugs — too much water can loosen the backing.',
      'Clean kitchen tiles regularly in older buildings to prevent grease build-up.',
    ],
    visit: 'Share the nearest landmark around Rolla or the Corniche — older buildings are easier to find that way.',
  },
}
