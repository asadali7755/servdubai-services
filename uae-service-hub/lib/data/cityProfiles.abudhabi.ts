import type { CityProfile } from './cityProfiles'

export const ABU_DHABI_PROFILES: Record<string, CityProfile> = {
  'abu-dhabi-abu-dhabi-city': {
    tagline: 'From Corniche apartments to inland villas — the capital, cleaned to one standard.',
    story: [
      'Abu Dhabi City covers a huge range of homes: high-rise apartments along the Corniche and Khalidiyah, older blocks around Hamdan Street and Muroor, and large family villas in areas like Al Bateen. A studio and a six-bedroom villa need very different plans.',
      'Teams adjust the size of the crew and the equipment to the property. Apartment jobs are usually sofas, carpets and a full deep clean; villa jobs often add marble floors and majlis seating.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'From studio sofas to large majlis seating, upholstery is the most booked job in the capital.' },
      { service: 'carpet-cleaning', why: 'Family homes in Abu Dhabi often have large rugs that need deep extraction.' },
      { service: 'marble-polishing', why: 'Marble floors in older villas and premium apartments dull along main walkways.' },
    ],
    tips: [
      'Clean majlis cushions before Eid and family gatherings — bookings peak in the weeks before.',
      'Use pH-neutral cleaners on marble to avoid etching.',
      'Vacuum rugs from both sides once a month to remove deep-set sand.',
    ],
    visit: 'Tell us whether it is an apartment or a villa — we send the right team size and equipment.',
  },

  'abu-dhabi-al-ain': {
    tagline: 'The Garden City’s dry inland air — deep cleaning that keeps desert dust out of fabric.',
    story: [
      'Al Ain is inland and much drier than the coast, so the challenge here is dust rather than humidity. Fine dust works into sofas, carpets and curtains and slowly dulls colours, even in homes that are cleaned daily.',
      'Most Al Ain homes are family villas and garden apartments in areas like Al Jimi and Al Muwaiji. A deep clean every few months keeps indoor air noticeably fresher, especially for families with allergies.',
    ],
    picks: [
      { service: 'carpet-cleaning', why: 'Desert dust settles deep in carpet pile in Al Ain’s dry inland climate.' },
      { service: 'sofa-cleaning', why: 'Upholstery holds fine dust that triggers allergies if not deep cleaned regularly.' },
      { service: 'villa-deep-cleaning', why: 'Family villas with gardens benefit from a full deep clean every few months.' },
    ],
    tips: [
      'Keep windows closed during dusty, windy afternoons.',
      'Deep clean sofas and carpets every 4–6 months.',
      'Change AC filters often — they catch much of the dust before it reaches furniture.',
    ],
    visit: 'Al Ain visits are planned in advance — message us to book a day that suits you.',
  },

  'abu-dhabi-khalifa-city': {
    tagline: 'Spacious family villas in Khalifa City A and B — full-home deep cleans done in a day.',
    story: [
      'Khalifa City is known for large family villas with gardens, plus some modern apartments. Big homes mean big jobs — multiple bedrooms, majlis areas, large sofas and marble floors — and families want it done without the house being out of action for days.',
      'Villa deep cleans here are planned with a larger team that works through the house in a set order, finishing living areas first so the family can settle back in by evening.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Large Khalifa City villas suit a single, well-planned deep clean by a bigger team.' },
      { service: 'marble-polishing', why: 'Marble ground floors in family villas lose shine in high-traffic areas.' },
      { service: 'sofa-cleaning', why: 'Large family and majlis sofas benefit from regular extraction cleaning.' },
    ],
    tips: [
      'Have AC vents cleaned along with the villa — it stops dust returning quickly.',
      'Polish marble before it gets badly scratched; light polishing costs less than restoration.',
      'Keep a mat at garden doors to stop soil reaching the carpets.',
    ],
    visit: 'Villa jobs start in the morning; tell us the number of bedrooms for an accurate quote.',
  },

  'abu-dhabi-yas-island': {
    tagline: 'Island residences on Yas — premium finishes kept looking new.',
    story: [
      'Yas Island’s residential communities, such as Yas Acres, Ansam and Waters Edge, are modern and well finished, with marble, quality upholstery and lots of glass. The waterfront setting adds humidity, which shows first on stone and fabric.',
      'Most work here is about keeping new homes looking new: marble polishing, careful sofa cleaning and full villa deep cleans, often scheduled around residents who travel frequently.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Polished stone in Yas residences dulls with waterfront humidity and daily foot traffic.' },
      { service: 'sofa-cleaning', why: 'Premium upholstery needs gentle, fabric-specific cleaning.' },
      { service: 'villa-deep-cleaning', why: 'Villa communities on Yas suit full deep cleans before guests or after travel.' },
    ],
    tips: [
      'Book a deep clean before you return from long trips so the home is fresh on arrival.',
      'Seal marble after polishing in rooms facing the water.',
      'Use a dehumidifier in closed rooms while travelling.',
    ],
    visit: 'Community security may need your name for the gate pass — we confirm details before the visit.',
  },

  'abu-dhabi-mohamed-bin-zayed-city': {
    tagline: 'Large-family villa compounds in MBZ City — whole-home cleaning without the chaos.',
    story: [
      'MBZ City is a big, family-oriented district with spacious villa compounds. Larger families mean more furniture, more bedrooms and more daily wear — and a cleaning visit that has to work around a busy household.',
      'Teams here usually take on a full villa in one visit, working floor by floor and keeping one area usable at all times so daily life carries on.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Spacious compound villas suit a full deep clean completed in a single visit.' },
      { service: 'sofa-cleaning', why: 'Majlis and family seating in large households need regular deep cleaning.' },
      { service: 'carpet-cleaning', why: 'Large rugs in busy family homes collect dust and spills quickly.' },
    ],
    tips: [
      'Plan the villa deep clean before school terms start, when the house is quieter.',
      'Use washable covers on majlis cushions for daily use.',
      'Vacuum rugs in children’s rooms more often than living areas.',
    ],
    visit: 'Tell us the villa size and how many floors — we bring a crew big enough to finish in one day.',
  },

  'abu-dhabi-al-shamkha': {
    tagline: 'New villas in Al Shamkha — handover dust cleared before you move in.',
    story: [
      'Al Shamkha is one of Abu Dhabi’s newer residential districts, and many families are moving into newly built villas. New homes come with their own mess: construction dust in cupboards, paint marks, and fine grit on every floor.',
      'Move-in cleans are the most common job here, followed by regular sofa and carpet care once the family has settled.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'New villas need a full post-handover clean to remove construction dust before moving in.' },
      { service: 'floor-cleaning', why: 'Fine grit left after construction scratches new tiles unless it is properly removed.' },
      { service: 'sofa-cleaning', why: 'Once settled, regular sofa cleaning keeps new furniture looking new.' },
    ],
    tips: [
      'Book the move-in clean before furniture is delivered.',
      'Clean inside cupboards and AC vents — construction dust hides there.',
      'Lay mats at entrances while nearby homes are still being built.',
    ],
    visit: 'Let us know your handover date — we can schedule the clean right after keys are released.',
  },

  'abu-dhabi-shakhbout-city': {
    tagline: 'Planned villas in Shakhbout City — accurate quotes, efficient deep cleans.',
    story: [
      'Shakhbout City is a well-planned district where many villas follow similar layouts. That makes it easier to quote accurately and plan a deep clean efficiently, since teams know what to expect on arrival.',
      'Most work is family villa cleaning — sofas, carpets and full deep cleans — scheduled for same-day or next-day visits.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Consistent villa layouts let us quote and complete full deep cleans efficiently.' },
      { service: 'carpet-cleaning', why: 'Family rugs collect sand from gardens and driveways.' },
      { service: 'mattress-cleaning', why: 'Several bedrooms per villa make mattress sanitising a common add-on.' },
    ],
    tips: [
      'Share your villa type when booking — it helps us give a fixed price.',
      'Sanitise mattresses once or twice a year in family homes.',
      'Sweep driveways regularly to cut down sand carried indoors.',
    ],
    visit: 'Same-day and next-day slots are usually available — send your villa type and number of rooms.',
  },

  'abu-dhabi-baniyas': {
    tagline: 'Long-established Baniyas villas — from routine upkeep to restoration-style deep cleans.',
    story: [
      'Baniyas is one of Abu Dhabi’s long-established residential districts with a wide mix of villa sizes and ages. Older villas often need more than routine cleaning — tired marble, heavily used carpets and kitchens with years of build-up.',
      'Teams handle both: regular maintenance for well-kept homes and intensive restoration-style deep cleans for villas that have not had professional care in a while.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Older marble floors in Baniyas villas can often be restored rather than replaced.' },
      { service: 'villa-deep-cleaning', why: 'Older villas benefit from a restoration-style clean of kitchens, bathrooms and floors.' },
      { service: 'carpet-cleaning', why: 'Long-used carpets come back noticeably with deep extraction.' },
    ],
    tips: [
      'Ask for a marble assessment before considering new flooring.',
      'Tackle kitchen grease in older villas with a professional degrease once a year.',
      'Keep heavy furniture on felt pads to protect old marble.',
    ],
    visit: 'For older villas we can inspect first and quote the restoration work before booking.',
  },

  'abu-dhabi-al-reef': {
    tagline: 'Gated Al Reef villas — gate access sorted before we arrive.',
    story: [
      'Al Reef is a large gated villa community near Khalifa City, with consistent Mediterranean and desert-style layouts. Gated access means visits need a little coordination with community security, which we arrange in advance so nothing is delayed.',
      'Typical work here is sofa, carpet and full villa cleaning for families who want a dependable routine.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Similar villa layouts in Al Reef make full deep cleans quick to plan.' },
      { service: 'sofa-cleaning', why: 'Family sofas in community villas need regular deep cleaning.' },
      { service: 'curtain-cleaning', why: 'Large villa windows mean heavy curtains that collect dust from the surrounding desert.' },
    ],
    tips: [
      'Register us with community security a day ahead to avoid waiting at the gate.',
      'Clean curtains twice a year in villas facing open land.',
      'Keep sliding-door tracks clean to stop sand being blown inside.',
    ],
    visit: 'We coordinate gate access with Al Reef security — just share your villa number when booking.',
  },
}
