// ═══════════════════════════════════════════════════════════════
// Gulf Region — Iranian Strikes & Threats — Data
// Sources: UAE MOD/WAM, CENTCOM, Reuters, Al Arabiya, Gulf News,
//          CNN, Al Jazeera, France24, AP, Stars and Stripes,
//          Anadolu Agency, Breaking Defense, Military Watch Magazine
// ═══════════════════════════════════════════════════════════════

const MAP_META = {
    title: "Gulf Region — Iranian Strikes & Threats",
    lastUpdated: "2026-03-02",
    casualties: { killed: 6, injured: 87 },
    conflict: "Iran strikes on Gulf states, Feb 28 – Mar 2, 2026",
    summary: "On Feb 28, 2026, Iran launched a massive retaliatory strike against US military bases and allied targets across the Gulf following the US-Israeli Operation Epic Fury. The barrage included ballistic missiles, cruise missiles, and hundreds of drones targeting the UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, and Oman. In the UAE alone: 165 ballistic missiles, 2 cruise missiles, and 541 drones — of which 152 ballistic, 2 cruise, and 506 drones were intercepted. Qatar intercepted 65 missiles and 12 drones. Strikes caused confirmed damage to military bases, civilian airports, ports, and residential areas across the Gulf.",
    totalBarrage: "165 ballistic missiles, 2 cruise missiles, 541 drones (UAE alone); 65 ballistic missiles + 12 drones (Qatar)",
    intercepted: "152 ballistic, 2 cruise, 506 drones intercepted (UAE); 65 missiles + 12 drones intercepted (Qatar)"
};

const LOCATIONS = [
    // ═══════════════════════════════════════════════════════════
    // UAE — CRITICAL — Directly struck / confirmed impact
    // ═══════════════════════════════════════════════════════════
    {
        name: "Al Dhafra Air Base",
        lat: 24.2482, lng: 54.5477,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "critical",
        icon: "🎯",
        type: "US/UAE Joint Air Base — Primary Target",
        detail: "Primary US military air base in the UAE. Hosts ~5,000 US troops, THAAD & Patriot batteries, F-22s, RQ-4 Global Hawks, U-2s, E-3 AWACS. Iran's explicit primary target — they conducted a full-scale simulation attack on a replica of this base on Feb 24, days before the real strike.",
        incidents: [
            { date: "2026-02-24", text: "Iran conducted full-scale simulation attack on a replica of Al Dhafra — dress rehearsal for the real strike." },
            { date: "2026-02-28", text: "Iran launched 165 ballistic missiles, 2 cruise missiles, and 541 drones at UAE targets — Al Dhafra was the primary target. Witnesses reported smoke rising from the base. THAAD/Patriot systems engaged incoming threats over Abu Dhabi for hours." },
            { date: "2026-03-01", text: "Sixth wave of Iranian strikes continued targeting the base and surrounding areas." }
        ],
        sources: [
            { name: "Defence Blog", url: "https://defence-blog.com/iran-fires-ballistic-missiles-at-u-s-air-base-in-uae/" },
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports" },
            { name: "Shafaq News", url: "https://shafaq.com/en/Middle-East/Iranian-Missiles-hit-the-UAE-s-Al-Dhafra-Base" },
            { name: "The Week", url: "https://www.theweek.in/news/middle-east/2026/03/01/iran-launches-sixth-wave-of-strikes-on-dubai-bahrain-and-qatars-us-military-bases-uae-defence-intercepts-137-missiles.html" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Abu Dhabi Intl Airport (Zayed Intl)",
        lat: 24.4329, lng: 54.6445,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "critical",
        icon: "✈️",
        type: "International Airport (AUH) — Drone Strike",
        detail: "Abu Dhabi's primary airport. Directly targeted by Iranian drones during the Feb 28 barrage. 1 killed, 7 injured from debris of intercepted drone. UAE airspace remains CLOSED as of Mar 2. All Etihad flights cancelled.",
        incidents: [
            { date: "2026-02-28", text: "Iranian drone targeted airport. Interception debris killed 1 person (Asian national) and injured 7. Airport evacuated and all operations suspended indefinitely." }
        ],
        sources: [
            { name: "Gulf News", url: "https://gulfnews.com/business/aviation/one-killed-seven-injured-after-drone-debris-falls-at-zayed-international-airport-in-abu-dhabi-1.500459311" },
            { name: "Anadolu Agency", url: "https://www.aa.com.tr/en/middle-east/1-killed-at-abu-dhabi-airport-after-drone-interceptions-debris-sparks-fires-at-dubai-sites/3844467" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Dubai International Airport (DXB)",
        lat: 25.2528, lng: 55.3644,
        country: "UAE",
        city: "Dubai",
        severity: "critical",
        icon: "✈️",
        type: "World's Busiest Intl Airport — Hit Twice",
        detail: "World's busiest airport by international passengers. Terminal 3 directly hit by an Iranian drone. 4 staff injured. Hit again in a SECOND attack early Mar 1. Fully evacuated, all 3,400+ flights cancelled. Emirates, Flydubai suspended all operations.",
        incidents: [
            { date: "2026-02-28", text: "Drone struck Terminal 3 — 4 staff injured, passengers fled through debris and smoke. World's busiest international airport fully evacuated and shut down." },
            { date: "2026-03-01", text: "SECOND attack struck the airport in the early morning hours. Operations remain suspended." }
        ],
        sources: [
            { name: "CNN", url: "https://www.cnn.com/2026/02/28/middleeast/dubai-airport-uae-iran-attacks-intl-hnk" },
            { name: "Euronews", url: "https://www.euronews.com/2026/03/01/iranian-strikes-hit-dubai-and-abu-dhabi-damaging-airport-terminals-and-the-burj-al-arab" },
            { name: "Simple Flying", url: "https://simpleflying.com/dubai-international-airport-hit-by-drone/" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Jebel Ali Port",
        lat: 25.0195, lng: 55.0518,
        country: "UAE",
        city: "Dubai",
        severity: "critical",
        icon: "⚓",
        type: "Largest ME Port / US Navy Hub — Fire",
        detail: "9th largest container port globally. Primary US Navy logistics hub. Handles ~60% of Dubai's revenue. DP World suspended ALL operations after interceptor missile debris caused a berth fire. Smoke visible from video footage confirmed by Al Jazeera.",
        incidents: [
            { date: "2026-02-28", text: "Interceptor missile debris triggered fire at a port berth. DP World suspended all port operations — largest port in the Middle East offline." }
        ],
        sources: [
            { name: "Al Jazeera", url: "https://www.aljazeera.com/video/newsfeed/2026/3/1/video-smoke-seen-rising-from-dubais-main-shipping-port-after-iran-attack" },
            { name: "AFP / NAMPA", url: "https://www.nampa.org/text/22872509" },
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/03/01/dubai-battles-port-fire-after-iran-missile-attacks-statement" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Palm Jumeirah / Fairmont Hotel",
        lat: 25.1120, lng: 55.1380,
        country: "UAE",
        city: "Dubai",
        severity: "critical",
        icon: "💥",
        type: "Civilian Area — Hotel Fire, 4 Injured",
        detail: "Iconic tourism and residential area. Missile debris struck the Fairmont The Palm hotel, causing a fire and injuring 4 people. Thick black smoke visible across the area.",
        incidents: [
            { date: "2026-02-28", text: "Fire at Fairmont The Palm hotel from missile/drone strike debris — 4 injured, thick black smoke across Palm Jumeirah." }
        ],
        sources: [
            { name: "France24", url: "https://www.france24.com/en/live-news/20260228-explosion-at-dubai-landmark-the-palm-witnesses" },
            { name: "TIME", url: "https://time.com/7381884/iran-missiles-dubai-palm-gulf/" },
            { name: "CNN", url: "https://www.cnn.com/2026/02/28/world/us-israeli-strikes-video-breakdown-invs" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Burj Al Arab",
        lat: 25.1412, lng: 55.1853,
        country: "UAE",
        city: "Dubai",
        severity: "critical",
        icon: "🔥",
        type: "Iconic Hotel — Drone Debris Fire on Facade",
        detail: "World's most iconic luxury hotel. Debris from an intercepted Iranian drone struck the outer facade, igniting a fire. Guests evacuated. Fire brought under control. No fatalities.",
        incidents: [
            { date: "2026-02-28", text: "Intercepted drone debris struck the hotel facade, igniting a fire. Guests evacuated. Fire controlled." }
        ],
        sources: [
            { name: "Newsweek", url: "https://www.newsweek.com/dubai-airport-burj-al-arab-hotel-hit-by-drone-debris-in-iran-strike-11600058" },
            { name: "Times of Israel", url: "https://www.timesofisrael.com/fiery-explosions-rock-gulf-as-iran-attacks-arab-neighbors-over-us-israeli-strikes/" },
            { name: "India TV News", url: "https://www.indiatvnews.com/news/world/burj-al-arab-dubai-history-drone-incident-seven-star-hotel-2026-03-01-1032150" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Mina Zayed Port / Al Salam Naval Base",
        lat: 24.5175, lng: 54.3825,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "critical",
        icon: "⚓",
        type: "City Port — Drone Strike + Missile Near-Miss",
        detail: "Abu Dhabi's main city port, cruise terminal, AND Al Salam Naval Base (French military). Directly struck by at least 2 Shahed-136 drones targeting the French naval base. A missile also landed in the water meters from the German cruise ship Mein Schiff 4 (2,500 passengers).",
        incidents: [
            { date: "2026-03-01", text: "Two Iranian Shahed-136 drones struck Al Salam Naval Base (French 'Camp de la Paix'). Hit a warehouse, fire in 2 containers. French Defence Minister confirmed damage." },
            { date: "2026-03-01", text: "A missile landed in the water meters from the cruise ship Mein Schiff 4 (~2,500 passengers). Passengers ordered to shelter indoors." }
        ],
        sources: [
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/03/01/uae-says-iran-drone-attack-caused-fire-at-base-hosting-french-forces" },
            { name: "Militarnyi", url: "https://militarnyi.com/en/news/iran-attacks-french-camp-de-la-paix-base-in-abu-dhabi/" },
            { name: "The New Arab", url: "https://www.newarab.com/news/iran-drone-attack-caused-fire-base-hosting-french-forces-uae" },
            { name: "Greek City Times", url: "https://greekcitytimes.com/2026/03/02/missile-lands-near-mein-schiff-4-cruise-ship-abu-dhabi-zayed-port/" }
        ],
        dateAdded: "2026-03-01"
    },

    // ═══════════════════════════════════════════════════════════
    // UAE — HIGH — Active strike zone / confirmed debris
    // ═══════════════════════════════════════════════════════════
    {
        name: "Zayed Military City (UAE Armed Forces GHQ)",
        lat: 24.4134, lng: 54.6589,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "high",
        icon: "🎯",
        type: "UAE Military Command & Control Center",
        detail: "UAE Armed Forces General HQ, Air Force & Air Defence Command, Naval Forces Command, Zayed Military Hospital. Located within the Abu Dhabi primary strike zone.",
        incidents: [
            { date: "2026-02-28", text: "Located in Abu Dhabi primary strike zone. Interceptor debris fell in adjacent neighborhoods during 6 waves of attacks." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" },
            { name: "Arab News", url: "https://www.arabnews.com/node/2634845/middle-east" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Etihad Towers Area (Debris Impact)",
        lat: 24.4610, lng: 54.3320,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "high",
        icon: "💥",
        type: "Debris Impact — Injuries Confirmed",
        detail: "Landmark tower complex on the Abu Dhabi Corniche. Interceptor debris struck this area. A woman and child sustained minor injuries. Confirmed by UAE Ministry of Defence.",
        incidents: [
            { date: "2026-02-28", text: "Interceptor debris fell near Etihad Towers — a woman and child sustained minor injuries." }
        ],
        sources: [
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports" },
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Saadiyat Island (Confirmed Debris Zone)",
        lat: 24.5407, lng: 54.4341,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "high",
        icon: "💥",
        type: "Confirmed Debris — Cultural District",
        detail: "Interceptor debris confirmed by UAE MOD during THAAD/Patriot engagement. Home to Louvre Abu Dhabi, NYU Abu Dhabi, Guggenheim Abu Dhabi.",
        incidents: [
            { date: "2026-02-28", text: "Missile interceptor debris fell on the island during engagement of Iranian ballistic missiles. Confirmed by UAE MOD." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" },
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports" },
            { name: "Pravda", url: "https://www.pravda.com.ua/eng/news/2026/02/28/8023275/" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Khalifa City (Confirmed Debris Zone)",
        lat: 24.4200, lng: 54.5800,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "high",
        icon: "💥",
        type: "Confirmed Debris — Dense Residential",
        detail: "Major residential suburb between Abu Dhabi city and the airport — directly under the flight path of missiles targeting Al Dhafra and AUH Airport. Interceptor debris confirmed by UAE MOD.",
        incidents: [
            { date: "2026-02-28", text: "Shrapnel and interceptor debris fell in residential neighborhoods during multiple waves of Iranian attack. Confirmed by UAE MOD." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" },
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "AWS ME-Central-1 Data Center (mec1-az2)",
        lat: 24.4100, lng: 54.5100,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "high",
        icon: "🔥",
        type: "Cloud Data Center — Struck, Fire, Power Cut",
        detail: "Amazon Web Services ME-CENTRAL-1 region. Availability Zone mec1-az2 knocked offline after 'objects' struck the data center, causing fire. All power cut. First major hyperscale cloud facility physically damaged during military conflict.",
        incidents: [
            { date: "2026-03-01", text: "Objects struck the mec1-az2 data center causing fire. All power cut. EC2 API errors. AWS declined to attribute to Iranian strikes." }
        ],
        sources: [
            { name: "Data Center Dynamics", url: "https://www.datacenterdynamics.com/en/news/aws-uae-outage-after-objects-struck-the-data-center-cause-fire-amid-iran-attacks/" },
            { name: "Reuters / Yahoo News", url: "https://www.yahoo.com/news/articles/amazons-cloud-unit-reports-fire-223050670.html" },
            { name: "Jerusalem Post", url: "https://www.jpost.com/middle-east/iran-news/article-888442" }
        ],
        dateAdded: "2026-03-01"
    },

    // ═══════════════════════════════════════════════════════════
    // UAE — WATCHLIST
    // ═══════════════════════════════════════════════════════════
    {
        name: "Mohammed bin Zayed City (Debris Zone)",
        lat: 24.3700, lng: 54.5350,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "💥",
        type: "Confirmed Debris — Residential",
        detail: "Large residential district south of Abu Dhabi. Debris from THAAD/Patriot intercepts fell here. On the corridor between Abu Dhabi city and Al Dhafra Air Base.",
        incidents: [
            { date: "2026-02-28", text: "Interceptor debris impacted residential areas. Confirmed by UAE MOD." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Bani Yas (Debris Zone)",
        lat: 24.3200, lng: 54.6300,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "💥",
        type: "Confirmed Debris — Residential/Industrial",
        detail: "Suburb southeast of Abu Dhabi. Interceptor debris confirmed by UAE MOD. Near the airport corridor — an active strike zone.",
        incidents: [
            { date: "2026-02-28", text: "Debris from intercepted Iranian missiles fell in the area. Confirmed by UAE MOD." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Al Falah (Debris Zone)",
        lat: 24.3500, lng: 54.4900,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "💥",
        type: "Confirmed Debris — Residential",
        detail: "Residential community south of Abu Dhabi. Interceptor debris confirmed by UAE MOD.",
        incidents: [
            { date: "2026-02-28", text: "Debris from intercepted missiles confirmed." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "ADNOC Headquarters",
        lat: 24.4539, lng: 54.3773,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "🛢️",
        type: "National Oil Company HQ — 76-Story Tower",
        detail: "Abu Dhabi National Oil Company headquarters. 76-story landmark. Not directly targeted (Iran stated it targeted US military assets, not energy). Energy analysts warn disruptions could reduce UAE exports by 1–1.5 million bpd.",
        incidents: [
            { date: "2026-02-28", text: "Not directly struck. Located ~3 km from Etihad Towers debris zone. Houthis announced resumed attacks in support of Iran." }
        ],
        sources: [
            { name: "NPR", url: "https://www.npr.org/2026/02/28/nx-s1-5678603/iran-strikes-oil-energy-markets" },
            { name: "WTOP / AP", url: "https://wtop.com/world/2026/02/yemens-iranian-backed-houthi-rebels-to-resume-attacks-on-shipping-in-the-red-sea-corridor-2-rebel-officials-tell-ap/" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "ADNOC Musaffah / ICAD-3",
        lat: 24.3376, lng: 54.4907,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "🛢️",
        type: "Oil Fuel Depot — Previously Attacked in 2022",
        detail: "ADNOC pipeline terminal and fuel hub. Previously struck by Houthi drones in Jan 2022 — 3 killed, 6 injured. With Houthis announcing resumed attacks, high-risk repeat target.",
        incidents: [
            { date: "2022-01-17", text: "Houthi drones struck 3 ADNOC oil tanker trucks — 3 killed, 6 injured." },
            { date: "2026-02-28", text: "Not directly struck. Houthis announced resumption of attacks in support of Iran." }
        ],
        sources: [
            { name: "WTOP / AP", url: "https://wtop.com/world/2026/02/yemens-iranian-backed-houthi-rebels-to-resume-attacks-on-shipping-in-the-red-sea-corridor-2-rebel-officials-tell-ap/" },
            { name: "Shafaq News", url: "https://shafaq.com/en/Middle-East/Houthis-to-resume-Red-Sea-Israel-attacks-in-support-of-Iran" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Taweelah Power & Desalination",
        lat: 24.5300, lng: 54.7400,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "⚡",
        type: "Major Power & Water Plant — 909K m³/day",
        detail: "One of the world's largest desalination plants. Critical to Abu Dhabi's water supply — UAE gets ~90% of drinking water from desalination. High-risk in escalation scenario.",
        incidents: [],
        sources: [],
        dateAdded: "2026-02-28"
    },
    {
        name: "Qasr Al Watan (Presidential Palace)",
        lat: 24.4625, lng: 54.3055,
        country: "UAE",
        city: "Abu Dhabi",
        severity: "watchlist",
        icon: "🏛️",
        type: "UAE Presidential Palace",
        detail: "Official residence of the UAE President. UAE has closed its embassy in Tehran and recalled all diplomatic staff.",
        incidents: [
            { date: "2026-03-01", text: "UAE closed embassy in Tehran, recalled ambassador. Formal condemnation of Iran's attacks." }
        ],
        sources: [
            { name: "UAE WAM", url: "https://www.wam.ae/en/article/byzgpuq-uae-announces-closure-embassy-tehran-withdrawal" },
            { name: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-01/uae-shuts-embassy-in-tehran-in-response-to-iranian-strikes" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Hatta (Dubai Exclave)",
        lat: 24.7900, lng: 56.1150,
        country: "UAE",
        city: "Hatta",
        severity: "watchlist",
        icon: "🛂",
        type: "Border Town — Sheltering Stranded Tourists",
        detail: "Dubai exclave near the Oman border. Hotels sheltering stranded tourists in makeshift shelters.",
        incidents: [
            { date: "2026-03-01", text: "Hotels sheltering stranded tourists. Oman neutrality compromised after Duqm Port hit." }
        ],
        sources: [
            { name: "Jerusalem Post", url: "https://www.jpost.com/middle-east/iran-news/article-888422" },
            { name: "Travel & Tour World", url: "https://www.travelandtourworld.com/news/article/uae-implements-strategic-safety-closures-and-remote-work-advisories-following-regional-iranian-strikes/" }
        ],
        dateAdded: "2026-03-01"
    },

    // ═══════════════════════════════════════════════════════════
    // BAHRAIN — US 5th Fleet / Strikes on Civilian Areas
    // ═══════════════════════════════════════════════════════════
    {
        name: "NSA Bahrain / US 5th Fleet HQ (Juffair)",
        lat: 26.2235, lng: 50.5960,
        country: "Bahrain",
        city: "Manama",
        severity: "critical",
        icon: "🎯",
        type: "US Naval Base — Missile & Drone Strike",
        detail: "Naval Support Activity Bahrain — HQ of US Naval Forces Central Command (NAVCENT) and US 5th Fleet. Hosts ~9,000 US military personnel. Iran struck with ballistic missiles and Shahed drones. Radar/satcom dome destroyed, warehouse damaged. NAVCENT concluded Juffair is 'no longer safe for US personnel.' US Embassy issued security alert.",
        incidents: [
            { date: "2026-02-28", text: "Iranian ballistic missile impacted vicinity of NSA Bahrain. Radar/satcom dome and warehouse damaged." },
            { date: "2026-02-28", text: "US Embassy Manama issued Security Alert — Juffair area and high-rise buildings deemed unsafe." },
            { date: "2026-03-01", text: "NAVCENT ordered evacuation of non-essential personnel." }
        ],
        sources: [
            { name: "Stars and Stripes", url: "https://www.stripes.com/theaters/middle_east/2026-02-28/bahrain-base-departures-20902165.html" },
            { name: "Defense One", url: "https://www.defenseone.com/threats/2026/02/americans-evacuate-after-iranian-drones-damage-us-navy-base-bahrain/411786/" },
            { name: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation" },
            { name: "US Embassy Bahrain", url: "https://bh.usembassy.gov/security-alert-update-4-u-s-embassy-manama-bahrain-juffair-area-and-high-rise-buildings-not-deemed-safe-february-28-2026/" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Bahrain International Airport (BAH)",
        lat: 26.2708, lng: 50.6336,
        country: "Bahrain",
        city: "Muharraq",
        severity: "critical",
        icon: "✈️",
        type: "International Airport — Drone Strike",
        detail: "Bahrain's sole international airport. Targeted by an Iranian drone, resulting in material damage. No casualties. Airport operations suspended.",
        incidents: [
            { date: "2026-03-01", text: "Iranian drone struck the airport. Material damage confirmed by Bahrain Ministry of Interior. No casualties." }
        ],
        sources: [
            { name: "Al Mayadeen", url: "https://english.almayadeen.net/news/politics/drone-hits-bahrain-airport-as-gulf-states-intercept-iranian" },
            { name: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation" }
        ],
        dateAdded: "2026-03-01"
    },
    {
        name: "Era Views Tower, Hoora (Residential Strike)",
        lat: 26.2270, lng: 50.5850,
        country: "Bahrain",
        city: "Manama",
        severity: "critical",
        icon: "💥",
        type: "Residential High-Rise — Direct Drone Strike",
        detail: "Shahed drone directly struck the upper floors of the Era Views Tower, a residential high-rise ~1 mile from the US Navy base. The Breaker residential tower also caught fire. Three apartment complexes damaged total.",
        incidents: [
            { date: "2026-02-28", text: "Shahed drone struck upper floors of Era Views Tower — building set ablaze. The Breaker tower also on fire." },
            { date: "2026-02-28", text: "Iranian drones and missiles struck high-rise apartments across Juffair and Hoora neighborhoods." }
        ],
        sources: [
            { name: "Stars and Stripes", url: "https://www.stripes.com/theaters/middle_east/2026-02-28/strikes-on-bahrain-iran-israel-20902624.html" },
            { name: "Al Jazeera", url: "https://www.aljazeera.com/video/newsfeed/2026/2/28/suspected-iranian-drone-hits-bahrain-high-rise-building" },
            { name: "The Media Line", url: "https://themedialine.org/headlines/iran-targets-kuwait-airport-drones-hit-residential-areas-in-bahrain/" },
            { name: "CNN", url: "https://www.cnn.com/2026/02/28/world/us-israeli-strikes-video-breakdown-invs" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Isa Air Base",
        lat: 25.9181, lng: 50.5906,
        country: "Bahrain",
        city: "Isa Town",
        severity: "watchlist",
        icon: "🎯",
        type: "Bahrain Air Force / US Support Base",
        detail: "Royal Bahraini Air Force headquarters. Hosts US military operations supporting 5th Fleet. Air defense activity reported during Iranian barrage.",
        incidents: [
            { date: "2026-02-28", text: "Base placed on highest alert during Iranian missile barrage. Air defense activity reported over Bahrain." }
        ],
        sources: [
            { name: "Times of Israel", url: "https://www.timesofisrael.com/fiery-explosions-rock-gulf-as-iran-attacks-arab-neighbors-over-us-israeli-strikes/" }
        ],
        dateAdded: "2026-02-28"
    },

    // ═══════════════════════════════════════════════════════════
    // QATAR — Al Udeid Air Base / Radar Destroyed
    // ═══════════════════════════════════════════════════════════
    {
        name: "Al Udeid Air Base",
        lat: 25.1173, lng: 51.3150,
        country: "Qatar",
        city: "Al Rayyan",
        severity: "critical",
        icon: "🎯",
        type: "Largest US Base in ME — 2 Missiles Hit, Radar Destroyed",
        detail: "Largest US military installation in the Middle East. Hosts ~10,000 US personnel, CENTCOM forward HQ, Combined Air Operations Center (CAOC). Two Iranian ballistic missiles struck the base directly. An Iranian drone destroyed the AN/FPS-132 early warning radar ($1.1B asset, 5,000 km range). Qatar intercepted 65 missiles and 12 drones total. 8 injured.",
        incidents: [
            { date: "2026-02-28", text: "Two Iranian ballistic missiles struck Al Udeid Air Base." },
            { date: "2026-02-28", text: "Iranian drone destroyed the AN/FPS-132 early warning radar — $1.1 billion asset, critical missile defense component." },
            { date: "2026-03-01", text: "Qatar intercepted 65 ballistic missiles and 12 drones total. 8 people injured from debris." }
        ],
        sources: [
            { name: "Anadolu Agency", url: "https://www.aa.com.tr/en/middle-east/qatar-says-65-ballistic-missiles-12-drones-intercepted-in-iranian-retaliatory-strikes-8-injured/3844496" },
            { name: "Defence Security Asia", url: "https://defencesecurityasia.com/en/iran-destroys-us-an-fps-132-radar-qatar-irgc-missile-defense-gulf-escalation/" },
            { name: "Military Watch Magazine", url: "https://militarywatchmagazine.com/article/iranian-strike-missile-defence-radars-bahrain-qatar" },
            { name: "Al Jazeera", url: "https://www.aljazeera.com/news/2026/2/28/missile-debris-injures-eight-in-qatar-after-iran-launches-barrage" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Camp As Sayliyah",
        lat: 25.3050, lng: 51.3700,
        country: "Qatar",
        city: "Doha",
        severity: "watchlist",
        icon: "🎯",
        type: "US Army Prepositioned Stock",
        detail: "Largest US Army prepositioned equipment storage facility outside CONUS. Though formally transitioned to Qatar in 2023, US equipment and personnel still present.",
        incidents: [
            { date: "2026-02-28", text: "Base placed on elevated alert during Iranian strike campaign against Gulf US military facilities." }
        ],
        sources: [
            { name: "The Week", url: "https://www.theweek.in/news/middle-east/2026/03/01/iran-launches-sixth-wave-of-strikes-on-dubai-bahrain-and-qatars-us-military-bases-uae-defence-intercepts-137-missiles.html" }
        ],
        dateAdded: "2026-02-28"
    },

    // ═══════════════════════════════════════════════════════════
    // KUWAIT — Air Base Destroyed / Airport Hit
    // ═══════════════════════════════════════════════════════════
    {
        name: "Ali Al Salem Air Base",
        lat: 29.3467, lng: 47.5211,
        country: "Kuwait",
        city: "Jahra Governorate",
        severity: "critical",
        icon: "🎯",
        type: "Coalition Air Base — Major Missile Strike",
        detail: "Coalition air base hosting US, Kuwaiti, and Italian forces. Suffered the most visually confirmed damage outside the UAE. Chinese satellite imagery showed at least 4 direct impact sites, massive smoke plume visible from space. Hangars, runway, fuel depots extensively destroyed. Italy confirmed 'significant damage to the runway.' 3 Kuwaiti soldiers injured.",
        incidents: [
            { date: "2026-02-28", text: "Multiple Iranian ballistic missiles struck the base. At least 4 confirmed impact sites per satellite imagery. Hangars, runway, fuel depots destroyed. 3 Kuwaiti soldiers injured." },
            { date: "2026-03-01", text: "Satellite images released showing extensive destruction. Smoke plume extended many kilometers." }
        ],
        sources: [
            { name: "Stars and Stripes", url: "https://www.stripes.com/theaters/middle_east/2026-02-28/kuwait-air-base-attacked-20903985.html" },
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/gulf/2026/02/28/-significant-damage-to-runway-at-kuwait-base-hosting-italian-troops-italy-" },
            { name: "Kuwait Times", url: "https://kuwaittimes.com/article/40361/kuwait/war-hits-home/" },
            { name: "Times of Israel", url: "https://www.timesofisrael.com/liveblog_entry/kuwait-says-3-soldiers-injured-by-iran-missile-strike/" },
            { name: "France 24", url: "https://www.france24.com/en/middle-east/20260228-what-we-know-about-us-military-bases-mideast-gulf-targeted-iran-retaliatory-strikes" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Kuwait International Airport (KWI)",
        lat: 29.2266, lng: 47.9689,
        country: "Kuwait",
        city: "Farwaniya",
        severity: "critical",
        icon: "✈️",
        type: "International Airport — Drone Strike, 12 Injured",
        detail: "Kuwait's primary international airport. Struck by Iranian Shahed drone causing injuries to 12 people and material damage to Terminal 1. A second drone also hit the Terminal 2 construction project. Airport operations suspended.",
        incidents: [
            { date: "2026-02-28", text: "Drone struck Terminal 1 — 12 injured across multiple hospitals. Material damage to passenger terminal." },
            { date: "2026-02-28", text: "Second drone targeted Terminal 2 construction site — limited material damage." }
        ],
        sources: [
            { name: "Anadolu Agency", url: "https://www.aa.com.tr/en/middle-east/drone-targets-kuwait-international-airport-amid-us-israeli-war-with-iran/3843805" },
            { name: "Airways Magazine", url: "https://www.airwaysmag.com/new-post/drone-strike-damages-kuwait-airport-terminal-1" },
            { name: "Kuwait Times", url: "https://kuwaittimes.com/article/40361/kuwait/war-hits-home/" }
        ],
        dateAdded: "2026-02-28"
    },

    // ═══════════════════════════════════════════════════════════
    // SAUDI ARABIA — High Alert / Confirmed Targeting
    // ═══════════════════════════════════════════════════════════
    {
        name: "Prince Sultan Air Base (PSAB)",
        lat: 24.0627, lng: 47.5805,
        country: "Saudi Arabia",
        city: "Al Kharj",
        severity: "critical",
        icon: "🎯",
        type: "US/Saudi Air Base — Missile & Drone Strike",
        detail: "Major US military air base ~60 km south of Riyadh. Hosts US THAAD, Patriot, KC-135 tankers, E-3G AWACS. IRGC claimed they 'precisely hit' the base. Saudi Arabia said air defenses intercepted missiles near the base. Reports confirm impacts on base infrastructure.",
        incidents: [
            { date: "2026-02-28", text: "IRGC launched ballistic missiles and drones at the base. Iran state media confirmed targeting PSAB." },
            { date: "2026-03-01", text: "Saudi air defenses intercepted Iranian missiles near Prince Sultan Airbase in second wave." }
        ],
        sources: [
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/saudi-arabia/2026/02/28/saudi-arabia-says-reserves-right-of-response-after-iran-attacks-riyadh-east" },
            { name: "Military Watch Magazine", url: "https://militarywatchmagazine.com/article/iran-ballistic-missile-strike-us-bases" },
            { name: "Asharq Al-Awsat", url: "https://english.aawsat.com/gulf/5245738-saudi-arabia-strongly-condemns-failed-cowardly-iranian-attacks-targeting-riyadh-and" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "King Khalid International Airport (Riyadh)",
        lat: 24.9576, lng: 46.6988,
        country: "Saudi Arabia",
        city: "Riyadh",
        severity: "high",
        icon: "✈️",
        type: "International Airport — Missile Intercepted Nearby",
        detail: "Riyadh's main international airport. Saudi Arabia confirmed Iranian missiles targeted the capital region. Air defenses intercepted projectiles near the airport. No disruption to navigation or casualties reported.",
        incidents: [
            { date: "2026-02-28", text: "Iranian missiles targeted Riyadh region. Saudi air defenses intercepted projectiles near King Khalid International Airport." }
        ],
        sources: [
            { name: "Times of Israel", url: "https://www.timesofisrael.com/liveblog_entry/saudi-arabia-intercepts-missile-attacks-on-airport-base-report/" },
            { name: "Anadolu Agency", url: "https://www.aa.com.tr/en/middle-east/saudi-arabia-strongly-condemns-iranian-missile-attacks-targeting-riyadh-eastern-province/3843752" },
            { name: "Asharq Al-Awsat", url: "https://english.aawsat.com/gulf/5245738-saudi-arabia-strongly-condemns-failed-cowardly-iranian-attacks-targeting-riyadh-and" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Saudi Eastern Province (Aramco Region)",
        lat: 26.3927, lng: 49.9840,
        country: "Saudi Arabia",
        city: "Dhahran/Dammam",
        severity: "high",
        icon: "🛢️",
        type: "Oil Infrastructure — Confirmed Iranian Targeting",
        detail: "Home to virtually all major Aramco facilities. A Saudi official stated: 'missiles targeting Aramco come from the north, not Yemen' — directly attributing to Iran. Saudi MOD said air defenses intercepted the projectiles.",
        incidents: [
            { date: "2026-02-28", text: "Iran launched missiles at Saudi Eastern Province. Saudi official attributed Aramco attacks to Iran. Air defenses engaged." }
        ],
        sources: [
            { name: "Anadolu Agency", url: "https://www.aa.com.tr/en/energy/energy-security/iran-responsible-for-aramco-attack-says-saudi-official/26714" },
            { name: "Al Arabiya", url: "https://english.alarabiya.net/News/saudi-arabia/2026/02/28/saudi-arabia-says-reserves-right-of-response-after-iran-attacks-riyadh-east" },
            { name: "Breaking Defense", url: "https://breakingdefense.com/2026/03/iran-attacks-uae-saudi-missiles-drones-gcc-air-defense/" }
        ],
        dateAdded: "2026-02-28"
    },
    {
        name: "Aramco Abqaiq Processing Facility",
        lat: 25.9375, lng: 49.6878,
        country: "Saudi Arabia",
        city: "Abqaiq",
        severity: "watchlist",
        icon: "🛢️",
        type: "World's Largest Oil Processing — Previously Attacked",
        detail: "Processes ~7 million bpd — roughly 7% of global supply. Previously attacked by Iran-linked drones in Sept 2019, temporarily halving Saudi oil output. A prime escalation target.",
        incidents: [
            { date: "2019-09-14", text: "Iran-linked drone and cruise missile strike knocked out 5.7 million bpd of Saudi production." },
            { date: "2026-02-28", text: "Saudi placed all critical energy infrastructure on highest alert." }
        ],
        sources: [
            { name: "NPR", url: "https://www.npr.org/2026/02/28/nx-s1-5678603/iran-strikes-oil-energy-markets" }
        ],
        dateAdded: "2026-02-28"
    },

    // ═══════════════════════════════════════════════════════════
    // OMAN — Neutrality Compromised
    // ═══════════════════════════════════════════════════════════
    {
        name: "Duqm Port",
        lat: 19.6753, lng: 57.7035,
        country: "Oman",
        city: "Duqm",
        severity: "critical",
        icon: "💥",
        type: "Omani Port — Struck by 2 Iranian Drones",
        detail: "Major Omani port on the Arabian Sea coast. Targeted by 2 Iranian drones on Mar 1. One struck foreign workers' residences, injuring 1. Iran FM claimed 'not our choice.' This shatters Oman's traditional neutrality.",
        incidents: [
            { date: "2026-03-01", text: "2 Iranian drones targeted Duqm Port. One struck foreign workers' residences — 1 injured. Oman neutrality compromised." }
        ],
        sources: [
            { name: "Jerusalem Post", url: "https://www.jpost.com/middle-east/iran-news/article-888422" },
            { name: "UAE MOFA", url: "https://www.mofa.gov.ae/en/MediaHub/News/2026/3/1/UAE-Oman" }
        ],
        dateAdded: "2026-03-01"
    }
];
