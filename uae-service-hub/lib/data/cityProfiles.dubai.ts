import type { CityProfile } from './cityProfiles'

export const DUBAI_PROFILES: Record<string, CityProfile> = {
  'dubai-marina': {
    tagline: 'Tower apartments above the water — cleaned without moving a single piece of furniture out.',
    story: [
      'Most Marina homes are compact, fully furnished rentals where the sofa, the rug and the mattress do all the work. With the AC running almost all year and windows rarely open, dust and skin oils settle into fabric rather than blowing away, so the living-room sofa is usually the first thing that looks tired.',
      'A typical visit here is booked around the building rather than the home: we confirm the service lift, register the team with security, and carry compact extraction machines that fit a standard tower lift. Most one-bedroom jobs are finished in a single morning.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'The sofa is usually the most-used seat in a furnished Marina rental, and the first thing a landlord inspects at handover.' },
      { service: 'mattress-cleaning', why: 'Short-let and holiday-home owners in the towers turn beds over often and need them sanitised between guests.' },
      { service: 'apartment-cleaning', why: 'High resident turnover makes move-in and move-out cleans one of the most booked jobs in the area.' },
    ],
    tips: [
      'Run the balcony door closed on windy days — fine sand from the beach side settles on rugs within hours.',
      'Vacuum sofa cushions weekly; AC-dried air makes dust cling to fabric instead of falling to the floor.',
      'Book deep cleans before your tenancy inspection, not after — it is easier to fix stains while they are fresh.',
    ],
    visit: 'Tell us your tower name and floor when you message — we arrange lift access and security registration before the team arrives.',
  },

  'dubai-jlt': {
    tagline: 'Lake-view clusters from A to Z, homes and DMCC offices on the same day.',
    story: [
      'JLT is one of the few Dubai communities where apartments and working offices share the same towers. That mix shapes the work: in the morning a team might shampoo a family sofa in a lake-facing apartment, and by afternoon clean office carpet two clusters away.',
      'Because the towers sit around man-made lakes, the air inside many apartments stays a little damper than in inland areas. Upholstery that is never deep cleaned tends to hold a faint musty smell first — usually noticeable on cushions and curtains before anything is visibly dirty.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Hot-water extraction pulls out the moisture-trapped grime that causes musty smells in lake-facing apartments.' },
      { service: 'office-cleaning', why: 'Many DMCC-registered businesses work from JLT towers and need after-hours carpet and workspace cleaning.' },
      { service: 'curtain-cleaning', why: 'Floor-to-ceiling curtains in lake-view units absorb humidity and odours long before they look dirty.' },
    ],
    tips: [
      'Air out cushions on cooler evenings — a few hours of airflow helps stop humidity settling into the foam.',
      'Rotate rugs every few months so the sunny side by the window does not fade unevenly.',
      'For offices, book carpet cleaning on a Friday afternoon so it is fully dry by Monday.',
    ],
    visit: 'Mention your cluster letter and tower — JLT has dozens of near-identical buildings and it saves the team time at the gate.',
  },

  'dubai-downtown': {
    tagline: 'Designer upholstery and polished stone in the Burj Khalifa district, handled with care.',
    story: [
      'Downtown apartments are often finished with materials that do not forgive a generic cleaning approach — velvet and bouclé sofas, silk-blend rugs, and marble or porcelain floors that show every dull patch under the large windows.',
      'Every visit here starts with a short material check before any product touches a surface. For many Downtown homes the most valuable work is not removing heavy dirt but restoring the finish: lifting the dull film on marble, refreshing the pile of a designer rug, and leaving the space ready for guests.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Large-format marble in Downtown living rooms dulls fastest along walkways and is the most requested restoration job.' },
      { service: 'sofa-cleaning', why: 'Fabric-specific methods protect velvet, bouclé and leather pieces that standard shampooing can damage.' },
      { service: 'carpet-cleaning', why: 'Low-moisture cleaning suits fine wool and silk-blend rugs common in branded residences.' },
    ],
    tips: [
      'Use pH-neutral cleaners on marble at home — vinegar and lemon-based sprays etch the surface over time.',
      'Keep designer fabrics out of direct afternoon sun from the floor-to-ceiling windows to slow fading.',
      'Blot spills on velvet straight away and never rub — rubbing crushes the pile permanently.',
    ],
    visit: 'Most Downtown residences need a contractor pass from building management — we can send the team details a day ahead.',
  },

  'dubai-jumeirah': {
    tagline: 'Family villas by the beach road — whole-home cleaning that keeps up with sea air.',
    story: [
      'Jumeirah 1, 2 and 3 are full of large, lived-in villas: majlis seating, big family sofas, layered rugs and plenty of guests. Being a few streets from the sea, these homes deal with salt-laden humidity that settles into fabric and makes dust stick.',
      'Many Jumeirah bookings combine jobs — a villa deep clean on the ground floor, sofas and carpets refreshed in the same visit, and bedrooms done last. Planning the order matters, so wet-cleaned rooms have time to dry before the family needs them again.',
    ],
    picks: [
      { service: 'villa-deep-cleaning', why: 'Large multi-storey villas benefit from a full top-to-bottom clean done in one coordinated visit.' },
      { service: 'sofa-cleaning', why: 'Majlis and family seating hold salt moisture that causes odours if left too long between cleans.' },
      { service: 'carpet-cleaning', why: 'Sand tracked in from the beach works deep into rug pile and wears the fibres down.' },
    ],
    tips: [
      'Put a coarse mat at every garden and beach-side door — most sand enters on shoes.',
      'Schedule sofa and carpet cleaning every 4–5 months in beachside villas rather than once a year.',
      'Open shaded windows early in the morning to air rooms before the humidity rises.',
    ],
    visit: 'For villas we usually send a larger team and start early, so ground-floor living areas are dry by evening.',
  },

  'dubai-deira': {
    tagline: 'Fast, fair-priced cleaning for Deira’s busy apartments and older buildings.',
    story: [
      'Deira is one of Dubai’s oldest and busiest districts, with a lot of older apartment blocks and frequent tenant changes. Older units often have heavier build-up in kitchens, bathrooms and AC grilles, and a new tenant usually wants everything reset before moving in.',
      'Jobs here are often urgent — a handover tomorrow, a new tenant arriving this weekend — so speed and a clear quote up front matter most. Teams come with everything needed, including equipment for stubborn grease and limescale typical of older fittings.',
    ],
    picks: [
      { service: 'apartment-cleaning', why: 'Frequent tenant changes in Deira’s older blocks make move-in and move-out cleans the most common booking.' },
      { service: 'sofa-cleaning', why: 'Second-hand and long-used sofas in shared flats often need a full extraction clean rather than a surface wipe.' },
      { service: 'restaurant-kitchen-cleaning', why: 'Deira’s many cafeterias and small restaurants need regular degreasing of hoods, walls and floors.' },
    ],
    tips: [
      'In older buildings, have AC grilles cleaned along with the flat — they spread dust back onto freshly cleaned furniture.',
      'Photograph the flat after a move-out clean; it helps if there is any question about the deposit.',
      'Use a kitchen degreaser weekly on older tiled walls before grease hardens.',
    ],
    visit: 'Parking is tight around Naif and Al Rigga — a building name and nearest landmark helps the team arrive on time.',
  },

  'dubai-business-bay': {
    tagline: 'Canal-side apartments and office suites, cleaned around a working week.',
    story: [
      'Business Bay mixes executive apartments, serviced residences and office floors, often in the same tower. Residents tend to be busy professionals who want the job done while they are at work, and offices want it done when nobody is at their desk.',
      'Open-plan layouts and light-coloured fabrics are common here, which means marks show quickly on sofas and carpet runners. Many clients book a recurring slot so the apartment or office never gets to the point of needing a heavy restoration clean.',
    ],
    picks: [
      { service: 'office-cleaning', why: 'Office suites in Business Bay towers need after-hours carpet and workstation cleaning that does not disturb staff.' },
      { service: 'apartment-cleaning', why: 'Serviced and executive apartments change occupants often and need a reliable reset between stays.' },
      { service: 'marble-polishing', why: 'Lobby-style marble and porcelain in premium units dulls along the main walkways.' },
    ],
    tips: [
      'Choose stain-resistant treatment for light sofas in open-plan living rooms.',
      'Book office carpet cleaning at the end of the week so it has the weekend to dry.',
      'Keep a microfibre cloth for glass partitions — fingerprints show fast under office lighting.',
    ],
    visit: 'Leave a key with concierge or building security if you will be at work — we confirm the timing with you by phone.',
  },

  'dubai-palm-jumeirah': {
    tagline: 'Frond villas and signature apartments — stone, fabric and finish, cared for discreetly.',
    story: [
      'Homes on the Palm are built around natural stone, bespoke furniture and big glass walls facing the sea. That combination looks spectacular but is demanding to maintain: coastal humidity dulls marble faster, and fine upholstery needs gentle, fabric-specific methods.',
      'Visits on the fronds are usually planned in advance with the household or villa manager, with a set order of rooms and a quiet, uniformed team. The goal is restoration and protection — not just cleaning — so surfaces keep their finish between visits.',
    ],
    picks: [
      { service: 'marble-polishing', why: 'Natural stone in frond villas is the single most requested specialist job on the Palm.' },
      { service: 'villa-deep-cleaning', why: 'Large beachfront villas need coordinated, room-by-room deep cleaning by a bigger team.' },
      { service: 'sofa-cleaning', why: 'Bespoke and designer upholstery needs a fabric test and gentle extraction rather than standard shampoo.' },
    ],
    tips: [
      'Wipe salt film off glass and stone near the pool deck weekly — it dries into a dull haze.',
      'Ask for a protective seal after marble polishing in sea-facing rooms.',
      'Rotate outdoor cushions indoors during humid summer months to stop mildew.',
    ],
    visit: 'Book a few days ahead where possible — we coordinate gate access with your frond security or building concierge.',
  },

  'dubai-al-barsha': {
    tagline: 'Long-term family homes near Mall of the Emirates, kept fresh on a regular rhythm.',
    story: [
      'Al Barsha 1, 2 and 3 are settled family neighbourhoods — many residents have lived in the same villa or apartment for years. Homes here have more furniture, more rugs and more children than the average Dubai flat, and dust builds steadily in this inland area.',
      'Because of that, a lot of Al Barsha clients prefer a routine: a deep clean of sofas and carpets every few months, with a full villa clean once or twice a year. Regular visits are faster and easier on fabrics than one heavy clean after a long gap.',
    ],
    picks: [
      { service: 'carpet-cleaning', why: 'Family rugs in Al Barsha homes collect inland dust and everyday spills faster than in smaller flats.' },
      { service: 'villa-deep-cleaning', why: 'Established villas benefit from a full deep clean once or twice a year alongside lighter maintenance.' },
      { service: 'floor-cleaning', why: 'Tiled ground floors and grout lines in older villas brighten noticeably with machine scrubbing.' },
    ],
    tips: [
      'Set a quarterly reminder for sofa and carpet cleaning — it is cheaper than restoring heavily soiled fabric.',
      'Use washable throws on the family sofa during school holidays.',
      'Have grout lines machine-scrubbed once a year; mopping alone pushes dirt deeper into them.',
    ],
    visit: 'Ask about a recurring slot — many Al Barsha families keep the same day and team every few months.',
  },

  'dubai-bur-dubai': {
    tagline: 'From Al Fahidi lanes to Karama blocks — practical cleaning for older and newer homes alike.',
    story: [
      'Bur Dubai covers a wide range of homes, from older low-rise buildings around Al Fahidi and Meena Bazaar to newer towers in Mankhool and Karama. Older buildings often have older AC and ventilation, which keeps recirculating dust onto furniture and carpets.',
      'Clients here usually want honest, affordable work that fixes the real problem. Often that means cleaning the sofa and carpet together and pointing out when the AC vents are the reason things get dirty again so quickly.',
    ],
    picks: [
      { service: 'sofa-cleaning', why: 'Affordable extraction cleaning revives well-used sofas in older Bur Dubai flats.' },
      { service: 'carpet-cleaning', why: 'Wall-to-wall and loose carpets in older units trap dust pushed out by ageing AC systems.' },
      { service: 'floor-cleaning', why: 'Older tiled floors with darkened grout respond well to deep machine scrubbing.' },
    ],
    tips: [
      'Change or clean AC filters every few weeks in older buildings — it keeps furniture cleaner for longer.',
      'Clean the sofa and carpet in the same visit; dust from one quickly resettles on the other.',
      'Keep shoes at the door during the dusty summer months.',
    ],
    visit: 'Share the nearest metro station or landmark — some older Bur Dubai buildings are tricky to find by name alone.',
  },

  'dubai-silicon-oasis': {
    tagline: 'Modern apartments, townhouses and tech offices in DSO — quick, tidy and well-planned.',
    story: [
      'Silicon Oasis is a newer, planned community popular with young families and tech professionals. Many homes are recently built, which means fewer deep-set stains but a lot of moving in and out, and furniture that is still new enough to protect.',
      'Typical work here is a move-in clean before boxes arrive, a periodic carpet and sofa refresh, or after-hours cleaning for small offices in the technology park. Jobs are usually straightforward to plan thanks to consistent building layouts.',
    ],
    picks: [
      { service: 'apartment-cleaning', why: 'Move-in and move-out cleans are the most booked jobs in this fast-growing community.' },
      { service: 'carpet-cleaning', why: 'Light-coloured carpets in newer apartments show traffic paths quickly and clean up well if done early.' },
      { service: 'office-cleaning', why: 'Small tech offices in DSO want reliable after-hours cleaning of carpet and shared kitchens.' },
    ],
    tips: [
      'Book the move-in clean before furniture delivery so the team can reach every corner.',
      'Apply fabric protection to a new sofa early — it is easiest while the fabric is still clean.',
      'Vacuum along skirting boards weekly; construction dust from nearby sites settles there first.',
    ],
    visit: 'Townhouse clients can park the team van in the driveway; for towers, tell us your building name in DSO.',
  },

  'dubai-international-city': {
    tagline: 'Clear prices and same-day help across every International City cluster.',
    story: [
      'International City is built around themed clusters of low-rise apartment blocks, home to a large, budget-conscious community with frequent moves. Flats here are often shared, which means sofas and mattresses see heavy daily use.',
      'Most residents want a simple, clearly priced job done fast — usually a move-out clean before handing back keys, or a sofa and mattress refresh in a shared flat. Teams carry everything and work efficiently so the job fits into a single visit.',
    ],
    picks: [
      { service: 'apartment-cleaning', why: 'Fast move-out cleaning is the most requested job in International City’s high-turnover clusters.' },
      { service: 'mattress-cleaning', why: 'Mattresses in shared flats benefit from sanitising when a new flatmate moves in.' },
      { service: 'sofa-cleaning', why: 'Heavily used shared sofas come back noticeably fresher with hot-water extraction.' },
    ],
    tips: [
      'Agree the cleaning scope in writing on WhatsApp before the visit, so the price is clear for everyone sharing.',
      'Use mattress protectors in shared rooms — they are far cheaper than replacing a stained mattress.',
      'Ventilate bathrooms daily to slow down mould in older ground-floor units.',
    ],
    visit: 'Send your cluster name and building number — clusters look alike and this avoids delays on arrival.',
  },

  'dubai-mirdif': {
    tagline: 'Villa floors on Dubai’s desert edge — scrubbed, not just mopped.',
    story: [
      'Mirdif’s low-rise villas sit close to open desert on Dubai’s eastern side, so fine sand finds its way indoors more than in central areas. It shows up mostly on floors: tiles lose their shine and grout lines slowly turn grey even in well-kept homes.',
      'That is why floor deep cleaning is the most common request here, often combined with sofas and rugs in the same visit. Because most Mirdif homes are whole villas rather than flats, teams plan room by room so the family can keep using part of the house during the job.',
    ],
    picks: [
      { service: 'floor-cleaning', why: 'Machine scrubbing lifts the fine sand that settles into tile and grout in Mirdif villas.' },
      { service: 'villa-deep-cleaning', why: 'Whole-villa homes here suit a single planned visit covering every floor and room.' },
      { service: 'carpet-cleaning', why: 'Rugs near garden doors trap desert sand that a household vacuum cannot fully remove.' },
    ],
    tips: [
      'Dry-mop daily before wet-mopping — mopping sand turns it into abrasive paste on tiles.',
      'Keep garden-facing doors closed on windy afternoons.',
      'Have grout machine-cleaned once or twice a year to stop it darkening permanently.',
    ],
    visit: 'Villa jobs in Mirdif usually start in the morning; the team brings floor machines that run on a standard socket.',
  },

  'dubai-umm-suqeim': {
    tagline: 'Beachside villas near Burj Al Arab — marble and tile brought back from salt-dull.',
    story: [
      'Umm Suqeim 1, 2 and 3 are almost entirely established villas, many with large marble or tiled ground floors. The sea is close enough that salty humidity reaches inside, and on floors it leaves a damp film that dries into grout and slowly dulls natural stone.',
      'Ordinary mopping tends to move that film around rather than remove it. Most Umm Suqeim visits focus on floors — machine cleaning, and polishing where there is marble — often with sofas done at the same time while furniture is already moved.',
    ],
    picks: [
      { service: 'floor-cleaning', why: 'Machine cleaning removes the damp-set dust that coastal humidity drives into grout lines.' },
      { service: 'marble-polishing', why: 'Natural stone in beachside villas dulls faster from salt air and benefits from polishing and sealing.' },
      { service: 'sofa-cleaning', why: 'It makes sense to refresh sofas in the same visit while furniture is already moved for floor work.' },
    ],
    tips: [
      'Use a stone-safe, pH-neutral floor cleaner — harsh products speed up dulling on marble.',
      'Run a dehumidifier in closed rooms during the humid summer months.',
      'Book floor and sofa cleaning together so furniture only has to be moved once.',
    ],
    visit: 'We usually work through ground floors first; let us know if a room needs to stay usable during the day.',
  },
}
