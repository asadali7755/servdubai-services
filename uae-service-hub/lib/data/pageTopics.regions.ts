import type { TopicSection } from './pageTopics'

/**
 * Second round of topic sections (17 Nov 2026) for the Sharjah, Ajman and
 * Abu Dhabi hubs, their sofa pages and the new upholstery page.
 *
 * Why: the pages competitors rank with for "cleaning services sharjah",
 * "cleaning company ajman", "carpet cleaning abu dhabi" and "sofa cleaning
 * abu dhabi" run to roughly 1,500-2,000 words; ours were ~650-1,200. Every
 * section answers a search group these pages already get impressions for in
 * Search Console (Aug-Nov 2026). Same rules as pageTopics.ts: only confirmed
 * claims (work at the customer's place, free WhatsApp quote, same-day slots,
 * eco-friendly products safe for kids and pets, trained and background-checked
 * team) and no prices.
 *
 * These are appended after the PAGE_TOPICS sections for the same path.
 */
export const REGION_TOPICS: Record<string, TopicSection[]> = {
  // ── Sharjah ──────────────────────────────────────────────────────
  '/sharjah': [
    {
      h2: 'Choosing a cleaning company in Sharjah',
      paras: [
        'Before you book any cleaning company in Sharjah, ask four things: how the job will be done, who will come to your home, which products they use, and what the price includes. A clear answer to each one tells you more than any rating.',
        'With us, the method depends on what is being cleaned: hot-water extraction for most carpets and fabric sofas, a low-moisture clean for delicate fabrics, and a leather cleaner and conditioner for leather. The team is trained and background-checked, brings its own machines, and uses eco-friendly products that are safe for kids and pets. The price is agreed on WhatsApp from your photos before anyone visits, so there are no surprises on the day.',
      ],
    },
    {
      h2: 'Sofa cleaning in Sharjah',
      paras: [
        'Sofas in Sharjah family apartments get heavy daily use, and the fine dust that comes in through windows and AC vents settles deep in the cushions. Fabric sofas are pre-treated, shampooed and rinsed with hot-water extraction at your home; L-shape and corner sofas, recliners and loose cushions are all done in the same visit. Leather sofas are cleaned and conditioned instead of shampooed.',
        'Most fabric sofas are dry enough to sit on in a few hours with the AC running. Send a photo of the sofa on WhatsApp for a free quote.',
      ],
      related: [
        { text: 'Sofa cleaning in Sharjah City', href: '/sharjah/sharjah-city/sofa-cleaning' },
        { text: 'Sofa cleaning in Al Nahda', href: '/sharjah/al-nahda/sofa-cleaning' },
        { text: 'Sofa cleaning in Al Majaz', href: '/sharjah/al-majaz/sofa-cleaning' },
        { text: 'Sofa cleaning in Al Qasimia', href: '/sharjah/al-qasimia/sofa-cleaning' },
      ],
    },
    {
      h2: 'Apartment cleaning and move-out cleans in Sharjah',
      paras: [
        'A lot of Sharjah tenants move every year or two, so move-in and move-out cleans are a big part of our work here. An empty-apartment clean covers the kitchen inside and out (cabinets, hob, oven and extractor), bathrooms with descaling of taps and tiles, wardrobes and cupboards, windows and frames from the inside, balcony, AC grilles, skirting boards and every floor.',
        'If you are moving in, the clean is best done before your furniture arrives. If you are moving out, book it after the last boxes leave and before the handover inspection. Same-day slots are often available in Al Nahda, Al Taawun, Al Khan and Al Majaz.',
      ],
      related: [{ text: 'Apartment cleaning', href: '/services/apartment-cleaning' }],
    },
    {
      h2: 'Cleaning services by area in Sharjah',
      paras: [
        'Al Nahda, on the Dubai border, is mostly high-rise family apartments where sofas, carpets and move-out cleans are booked most. Al Majaz, Al Khan and Al Taawun are lagoon and waterfront tower districts, where humidity makes regular sofa and mattress cleaning worthwhile. Al Qasimia, Abu Shagara, Al Nabba and Al Yarmook are older central neighbourhoods with many older buildings, where fabric checks and gentle methods matter.',
        'Muwaileh has newer apartment blocks and villas towards University City, and Dibba Al-Hisn on the east coast is covered on planned visits. Each area has its own page with local tips and the services most booked there.',
      ],
      related: [
        { text: 'Al Nahda', href: '/sharjah/al-nahda' },
        { text: 'Al Majaz', href: '/sharjah/al-majaz' },
        { text: 'Al Taawun', href: '/sharjah/al-taawun' },
        { text: 'Muwaileh', href: '/sharjah/muwaileh' },
      ],
    },
    {
      h2: 'Upholstery, mattress and curtain cleaning in Sharjah',
      paras: [
        'Besides sofas and carpets, Sharjah homes often add armchairs, upholstered headboards, dining chairs, mattresses and curtains to the same visit. Mattresses are vacuumed, treated for stains and deep cleaned; curtains are steam cleaned while they are still hanging, so nothing has to be taken down or sent away.',
      ],
      related: [
        { text: 'Upholstery and furniture cleaning', href: '/services/upholstery-cleaning' },
        { text: 'Mattress cleaning', href: '/services/mattress-cleaning' },
        { text: 'Curtain cleaning', href: '/services/curtain-cleaning' },
      ],
    },
  ],

  '/sharjah/sharjah-city/sofa-cleaning': [
    {
      h2: 'Sofa cleaning services in Sharjah: how the visit works',
      paras: [
        'You send a photo of the sofa on WhatsApp and get a free quote. On the day, the technician vacuums the sofa with an upholstery tool to lift sand and crumbs from the seams, pre-treats stains and the arms and headrests where body oil builds up, then shampoos the fabric and rinses it with hot-water extraction. The extraction pulls the dirt and the shampoo back out of the foam, so the sofa does not get dirty again quickly.',
        'The cushions are left damp, not wet, and most fabric sofas are dry enough to use in a few hours with the AC or a fan running. Same-day slots are often available across Sharjah City.',
      ],
    },
    {
      h2: 'Fabric, leather and L-shape sofas',
      paras: [
        'Cotton, polyester and microfibre sofas take a full shampoo and extraction clean. Velvet, chenille and other delicate fabrics get a low-moisture method so the pile dries evenly. Leather and faux-leather sofas are cleaned with a leather cleaner and then conditioned, never shampooed. Large L-shape and corner sofas, sofa beds and recliners are all cleaned in place.',
        'The products are eco-friendly and safe for kids and pets once the fabric is dry, which matters in Sharjah family homes where children sit and play on the sofa every day.',
      ],
    },
    {
      h2: 'Sofa cleaning in other Sharjah areas',
      paras: [
        'The same service is available everywhere in Sharjah. These pages cover the areas where sofa cleaning is booked most, and if you have armchairs, dining chairs or a headboard to clean as well, they can be done in the same visit.',
      ],
      related: [
        { text: 'Al Nahda', href: '/sharjah/al-nahda/sofa-cleaning' },
        { text: 'Al Majaz', href: '/sharjah/al-majaz/sofa-cleaning' },
        { text: 'Al Qasimia', href: '/sharjah/al-qasimia/sofa-cleaning' },
        { text: 'Upholstery and furniture cleaning', href: '/services/upholstery-cleaning' },
      ],
    },
  ],

  // ── Ajman ────────────────────────────────────────────────────────
  '/ajman': [
    {
      h2: 'Choosing a cleaning company in Ajman',
      paras: [
        'Ask any cleaning company in Ajman how they will clean, who will come, and what is included before you book. We answer all three on WhatsApp before the visit: you send photos or the size of the home, and you get a free quote that lists what will be cleaned.',
        'The team is trained and background-checked, brings its own machines and equipment, and uses eco-friendly products that are safe for kids and pets. Because Ajman is compact, response times are usually short and same-day slots are often available.',
      ],
    },
    {
      h2: 'Deep cleaning services in Ajman',
      paras: [
        'A deep clean goes further than a weekly clean. In the kitchen the team degreases the hob, oven, extractor hood, tiles and cabinet fronts and cleans inside the cupboards. Bathrooms are descaled, including taps, shower glass, tiles and grout. In the rest of the home it covers windows and frames from the inside, doors and handles, light switches, skirting boards, AC grilles and every floor.',
        'Sofas, carpets, mattresses and curtains can be added to the same visit, so the whole home is finished in one day.',
      ],
      related: [{ text: 'Villa deep cleaning', href: '/services/villa-deep-cleaning' }],
    },
    {
      h2: 'Move-in and move-out cleaning in Ajman',
      paras: [
        'Ajman has a lot of tenancy changes every year, and an empty apartment is the easiest time to clean it properly. A move-out clean is done after the last boxes leave and before the handover inspection; a move-in clean is best done before the furniture arrives. Both cover cupboards and wardrobes inside, kitchen appliances, bathrooms, windows, balcony, AC grilles and floors.',
      ],
      related: [{ text: 'Apartment cleaning', href: '/services/apartment-cleaning' }],
    },
    {
      h2: 'Villa cleaning in Al Zahya, Al Rawda and Musherief',
      paras: [
        'Ajman villa communities need a bigger team and more time than apartments. A full villa deep clean usually covers every bedroom and bathroom, the kitchen, majlis and living areas, stairs, balconies and outdoor areas, with sofas and carpets cleaned in the same visit if needed. Tell us the number of bedrooms and floors and we confirm the team size with the quote.',
      ],
      related: [
        { text: 'Villa deep cleaning in Ajman City', href: '/ajman/ajman-city/villa-deep-cleaning' },
        { text: 'Al Zahya', href: '/ajman/al-zahya' },
        { text: 'Al Rawda', href: '/ajman/al-rawda' },
      ],
    },
    {
      h2: 'Cleaning services in Al Rashidiya, Al Nuaimiya and Ajman City',
      paras: [
        'Al Rashidiya and Al Nuaimiya are dense apartment districts where sofa, carpet and move-out cleans are booked most. In Ajman City and along the Corniche, sea air and humidity make regular sofa and mattress cleaning worthwhile. Each area has its own page with the services most booked there.',
      ],
      related: [
        { text: 'Al Rashidiya', href: '/ajman/al-rashidiya' },
        { text: 'Carpet cleaning in Al Rashidiya', href: '/ajman/al-rashidiya/carpet-cleaning' },
        { text: 'Sofa cleaning in Al Nuaimiya', href: '/ajman/al-nuaimiya/sofa-cleaning' },
        { text: 'Sofa cleaning in Ajman City', href: '/ajman/ajman-city/sofa-cleaning' },
      ],
    },
  ],

  // ── Abu Dhabi ────────────────────────────────────────────────────
  '/abu-dhabi': [
    {
      h2: 'Carpet cleaning services in Abu Dhabi',
      paras: [
        'Abu Dhabi villas often have large rugs in the majlis and living rooms, and apartments on the island have wall-to-wall carpet in the bedrooms. Both are cleaned at your home: the team vacuums out the sand, pre-treats stains and traffic lanes, then deep cleans with hot-water extraction. Delicate rugs such as silk, viscose and old hand-knotted pieces get a gentler low-moisture clean.',
        'Most carpets are dry enough to walk on in a few hours. Send a photo and the rough size on WhatsApp for a free quote.',
      ],
      related: [
        { text: 'Carpet cleaning in Abu Dhabi City', href: '/abu-dhabi/abu-dhabi-city/carpet-cleaning' },
        { text: 'Carpet cleaning in Khalifa City', href: '/abu-dhabi/khalifa-city/carpet-cleaning' },
        { text: 'Carpet cleaning in Baniyas', href: '/abu-dhabi/baniyas/carpet-cleaning' },
      ],
    },
    {
      h2: 'Sofa, majlis and upholstery cleaning in Abu Dhabi',
      paras: [
        'Sofa sets, majlis seating, floor cushions, armchairs and upholstered headboards are cleaned in place, piece by piece. Fabric is shampooed and rinsed with hot-water extraction, delicate fabrics get a low-moisture method, and leather is cleaned and conditioned. Mattresses can be deep cleaned in the same visit.',
      ],
      related: [
        { text: 'Sofa cleaning in Abu Dhabi City', href: '/abu-dhabi/abu-dhabi-city/sofa-cleaning' },
        { text: 'Sofa cleaning in Khalifa City', href: '/abu-dhabi/khalifa-city/sofa-cleaning' },
        { text: 'Sofa cleaning in MBZ City', href: '/abu-dhabi/mohamed-bin-zayed-city/sofa-cleaning' },
        { text: 'Upholstery and furniture cleaning', href: '/services/upholstery-cleaning' },
      ],
    },
    {
      h2: 'Villa deep cleaning in Khalifa City, MBZ City and Al Reef',
      paras: [
        'Villa deep cleans are planned around the household: a team sized to the villa, a set room order, and one living area kept usable during the day. The clean covers bedrooms, bathrooms, the kitchen, majlis, stairs, balconies and outdoor areas, plus AC grilles, windows from the inside and all floors. Post-handover cleans for new villas in Al Shamkha, Shakhbout City and Yas remove construction dust before you move in.',
      ],
      related: [
        { text: 'Villa cleaning in Khalifa City', href: '/abu-dhabi/khalifa-city/villa-deep-cleaning' },
        { text: 'Villa cleaning in MBZ City', href: '/abu-dhabi/mohamed-bin-zayed-city/villa-deep-cleaning' },
        { text: 'Villa cleaning in Abu Dhabi City', href: '/abu-dhabi/abu-dhabi-city/villa-deep-cleaning' },
      ],
    },
    {
      h2: 'Floor care and marble polishing in Abu Dhabi',
      paras: [
        'Marble, granite and tiled floors are common in Abu Dhabi villas and lobbies. Dull or scratched marble is polished at your home with floor machines and diamond pads. Tiled floors get a machine scrub and grout clean, which removes the grey film that mopping leaves in the grout lines. Send photos of the floor and its approximate size for a free quote.',
      ],
      related: [
        { text: 'Marble polishing in Abu Dhabi City', href: '/abu-dhabi/abu-dhabi-city/marble-polishing' },
        { text: 'Floor cleaning', href: '/services/floor-cleaning' },
      ],
    },
    {
      h2: 'Office cleaning and professional cleaners in Abu Dhabi',
      paras: [
        'For offices, clinics and showrooms the team cleans desks, meeting rooms, kitchens, washrooms and floors, and can deep clean office chairs and carpets outside working hours. The same trained, background-checked team handles homes too, with eco-friendly products that are safe for kids and pets.',
        'Al Ain, inland and drier, gets the same services on planned visits with extra attention to dust. Message us on WhatsApp to book a day.',
      ],
      related: [
        { text: 'Office cleaning', href: '/services/office-cleaning' },
        { text: 'Cleaning in Al Ain', href: '/abu-dhabi/al-ain' },
      ],
    },
  ],

  '/abu-dhabi/abu-dhabi-city/sofa-cleaning': [
    {
      h2: 'Sofa shampooing and steam cleaning in Abu Dhabi',
      paras: [
        'Most fabric sofas get a full deep clean: the technician vacuums out sand and crumbs, pre-treats stains and the arms and headrests, shampoos the fabric and then rinses it with hot-water extraction. The extraction step is what makes the difference: it pulls the dirt and shampoo back out of the foam instead of leaving residue that attracts dust again.',
        'Sofas are left damp, not wet, and most are dry enough to use in a few hours with the AC running. Send a photo on WhatsApp for a free quote; same-day slots are often available on the island.',
      ],
    },
    {
      h2: 'Leather sofa cleaning in Abu Dhabi',
      paras: [
        'Leather and faux-leather sofas are never shampooed. They are cleaned with a leather cleaner that lifts body oil and surface dirt without stripping the finish, and then conditioned so the leather stays soft. Cracks and colour loss cannot be cleaned away, and we tell you from the photo what to expect.',
      ],
    },
    {
      h2: 'Couches, majlis seating and other upholstery',
      paras: [
        'In Abu Dhabi homes the sofa is often part of a bigger set: majlis cushions, floor seating, armchairs, ottomans and upholstered headboards. All of it can be cleaned in the same visit, each piece with the method that suits its fabric.',
      ],
      related: [
        { text: 'Upholstery and furniture cleaning', href: '/services/upholstery-cleaning' },
        { text: 'Sofa cleaning in Khalifa City', href: '/abu-dhabi/khalifa-city/sofa-cleaning' },
        { text: 'Sofa cleaning in MBZ City', href: '/abu-dhabi/mohamed-bin-zayed-city/sofa-cleaning' },
      ],
    },
  ],

  // ── Upholstery (new page) and its neighbours ─────────────────────
  '/services/upholstery-cleaning': [
    {
      h2: 'Upholstery cleaning or sofa cleaning?',
      paras: [
        'If it is only the sofa, see our sofa cleaning page: it covers fabric, leather and L-shape sofas in detail. This page is for everything else that is upholstered, or for a whole room or home at once. Both are booked the same way and can be done in a single visit.',
      ],
      related: [
        { text: 'Sofa cleaning services in Dubai', href: '/services/sofa-cleaning' },
        { text: 'Dining chair cleaning', href: '/services/dining-chair-cleaning' },
        { text: 'Mattress cleaning', href: '/services/mattress-cleaning' },
      ],
    },
    {
      h2: 'Upholstery cleaning in Abu Dhabi and Sharjah',
      paras: [
        'In Abu Dhabi the most common upholstery jobs are majlis seating and large villa sofa sets; in Sharjah they are armchairs, headboards and dining chairs in family apartments. The service and the method are the same as in Dubai.',
      ],
      related: [
        { text: 'Cleaning in Abu Dhabi', href: '/abu-dhabi' },
        { text: 'Cleaning in Sharjah', href: '/sharjah' },
      ],
    },
  ],
  '/services/dining-chair-cleaning': [
    {
      h2: 'Other upholstered furniture',
      paras: [
        'If you have armchairs, an upholstered headboard, ottomans or office chairs to clean as well, they can be done in the same visit as the dining chairs.',
      ],
      related: [{ text: 'Upholstery and furniture cleaning', href: '/services/upholstery-cleaning' }],
    },
  ],
}
