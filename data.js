// ═══════════════════════════════════════════════════════════════
// Gulf Region — Iranian Strikes & Threats — Data
// Sources: UAE MOD/WAM, CENTCOM, Reuters, Al Arabiya, Gulf News,
//          CNN, Al Jazeera, France24, AP, Stars and Stripes,
//          Anadolu Agency, Breaking Defense, Military Watch Magazine
// Auto-updated by gulf-map-bot
// ═══════════════════════════════════════════════════════════════

const MAP_META = {
    "title": "Gulf Region — Iranian Strikes & Threats",
    "lastUpdated": "2026-03-02T23:20:23.443Z",
    "casualties": {
        "killed": 17,
        "injured": 162
    },
    "conflict": "Iran strikes on Gulf states, Feb 28 – Mar 2, 2026",
    "summary": "Day 3 (March 2): Iran's retaliatory strikes continue across all GCC states and Iraq. Major escalation as Qatar Air Force shoots down two Iranian Su-24 bombers — first Gulf state to down Iranian manned aircraft. QatarEnergy halts all LNG production (~20% of global supply) after drone strikes on Ras Laffan and Mesaieed. Iran-backed militias in Iraq actively attacking US forces in Erbil and Baghdad. IRGC claims cruise missile strikes on Ali al-Salem Air Base in Kuwait. US death toll rises to 6 killed, 18 wounded. State Dept urges all US citizens to depart 15 Middle Eastern countries immediately. Saudi source warns of military response if Iran mounts concerted attack on Aramco. GCC pledges 'all necessary measures including responding to aggression.'",
    "totalBarrage": "UAE MOD reports intercepting 165 ballistic missiles, 2 cruise missiles, 541 drones (35 drones penetrated). Kuwait: 97 ballistic missiles and 283 drones intercepted. Bahrain: 45 missiles and 9 drones intercepted. Qatar: 18+ missiles/cruise missiles/drones intercepted plus 2 Su-24 aircraft shot down. UAE confirms 137 missiles and 209 drones fired at UAE on Day 1 alone.",
    "intercepted": "Majority of projectiles intercepted across all GCC states. UAE: 35 of 541 drones penetrated defenses. Qatar: All ballistic missiles intercepted before reaching targets. Kuwait: Majority of drones near Rumaithiya/Salwa intercepted. Breaking Defense notes structural vulnerability — air defenses effective but saturation attacks remain serious concern."
};

const LOCATIONS = [
    // ═══════════════════════════════════════════════════════════
    // UAE
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Al Dhafra Air Base",
            "lat": 24.2482,
            "lng": 54.5477,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "critical",
            "icon": "🎯",
            "type": "US/UAE Joint Air Base — Primary Target",
            "detail": "Primary US military air base in the UAE. Hosts ~5,000 US troops, THAAD & Patriot batteries, F-22s, RQ-4 Global Hawks, U-2s, E-3 AWACS. Iran's explicit primary target — they conducted a full-scale simulation attack on a replica of this base on Feb 24, days before the real strike.",
            "incidents": [
                    {
                            "date": "2026-02-24",
                            "text": "Iran conducted full-scale simulation attack on a replica of Al Dhafra — dress rehearsal for the real strike."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Iran launched 165 ballistic missiles, 2 cruise missiles, and 541 drones at UAE targets — Al Dhafra was the primary target. Witnesses reported smoke rising from the base. THAAD/Patriot systems engaged incoming threats over Abu Dhabi for hours."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Sixth wave of Iranian strikes continued targeting the base and surrounding areas."
                    }
            ],
            "sources": [
                    {
                            "name": "Defence Blog",
                            "url": "https://defence-blog.com/iran-fires-ballistic-missiles-at-u-s-air-base-in-uae/"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports"
                    },
                    {
                            "name": "Shafaq News",
                            "url": "https://shafaq.com/en/Middle-East/Iranian-Missiles-hit-the-UAE-s-Al-Dhafra-Base"
                    },
                    {
                            "name": "The Week",
                            "url": "https://www.theweek.in/news/middle-east/2026/03/01/iran-launches-sixth-wave-of-strikes-on-dubai-bahrain-and-qatars-us-military-bases-uae-defence-intercepts-137-missiles.html"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Abu Dhabi Intl Airport (Zayed Intl)",
            "lat": 24.4329,
            "lng": 54.6445,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "critical",
            "icon": "✈️",
            "type": "International Airport (AUH) — Drone Strike",
            "detail": "Abu Dhabi's primary airport. Directly targeted by Iranian drones during the Feb 28 barrage. 1 killed, 7 injured from debris of intercepted drone. UAE airspace remains CLOSED as of Mar 2. All Etihad flights cancelled.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian drone targeted airport. Interception debris killed 1 person (Asian national) and injured 7. Airport evacuated and all operations suspended indefinitely."
                    }
            ],
            "sources": [
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/business/aviation/one-killed-seven-injured-after-drone-debris-falls-at-zayed-international-airport-in-abu-dhabi-1.500459311"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/1-killed-at-abu-dhabi-airport-after-drone-interceptions-debris-sparks-fires-at-dubai-sites/3844467"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Dubai International Airport (DXB)",
            "lat": 25.2528,
            "lng": 55.3644,
            "country": "UAE",
            "city": "Dubai",
            "severity": "critical",
            "icon": "✈️",
            "type": "World's Busiest Intl Airport — Hit Twice",
            "detail": "World's busiest airport by international passengers. Terminal 3 directly hit by an Iranian drone. 4 staff injured. Hit again in a SECOND attack early Mar 1. Fully evacuated, all 3,400+ flights cancelled. Emirates, Flydubai suspended all operations. Day 3 (March 2): Fresh explosions heard in Dubai for third consecutive day. CNN team reported back-to-back blasts and jets overhead. March 2: Third consecutive day of explosions in Dubai. Airport remains closed; Flightradar24 reports 2,000+ flights cancelled across seven key Gulf airports. March 2: Third day of explosions heard across Dubai. UAE airspace remains closed. Etihad flights suspended until March 3. Dubai Airports announced limited flight resumption from DXB and DWC starting evening of March 2, three days after initial shutdown. Mar 2: Dubai Airports announced limited resumption of flights from DXB and DWC starting Monday evening after 3 days shutdown. Thousands of passengers remain stranded. March 2 evening: Dubai Airports announced limited flight resumption at DXB and DWC after 3 days of closure. Thousands of passengers remain stranded.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Drone struck Terminal 3 — 4 staff injured, passengers fled through debris and smoke. World's busiest international airport fully evacuated and shut down."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "SECOND attack struck the airport in the early morning hours. Operations remain suspended."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Day 3: CNN team heard 'two back-to-back blasts,' jets overhead and apparent interceptors in Dubai on Monday morning"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Loud explosions heard in Dubai for a third consecutive day as Iranian retaliatory strikes continue. Airport remains closed with 2,000+ flights cancelled across Gulf hubs."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Loud blasts heard for third consecutive day in Dubai shortly after 9 AM local time. CNBC team in UAE confirmed explosions. UAE airspace closures extended. Etihad suspended all Abu Dhabi flights until 14:00 UAE time March 3."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Dubai Airports announced limited resumption of flights from DXB and Al Maktoum International (DWC) starting Monday evening March 2, three days after initial closure."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Dubai Airports announced limited flight resumption from DXB and Al Maktoum (DWC) starting Monday evening March 2, after 3 days of closure. Operations remain heavily restricted."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/02/28/middleeast/dubai-airport-uae-iran-attacks-intl-hnk"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/01/iranian-strikes-hit-dubai-and-abu-dhabi-damaging-airport-terminals-and-the-burj-al-arab"
                    },
                    {
                            "name": "Simple Flying",
                            "url": "https://simpleflying.com/dubai-international-airport-hit-by-drone/"
                    },
                    {
                            "name": "CNN (March 2 Live)",
                            "url": "https://us.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/us-and-israeli-strikes-on-iran-disrupt-regional-and-international-flights"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/02/us-iran-live-updates-trump-oil-gold.html"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/war-widens-as-israel-us-strike-iran-and-clash-with-hezbollah"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Jebel Ali Port",
            "lat": 25.0195,
            "lng": 55.0518,
            "country": "UAE",
            "city": "Dubai",
            "severity": "critical",
            "icon": "⚓",
            "type": "Largest ME Port / US Navy Hub — Fire",
            "detail": "9th largest container port globally. Primary US Navy logistics hub. Handles ~60% of Dubai's revenue. DP World suspended ALL operations after interceptor missile debris caused a berth fire. Smoke visible from video footage confirmed by Al Jazeera.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Interceptor missile debris triggered fire at a port berth. DP World suspended all port operations — largest port in the Middle East offline."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/3/1/video-smoke-seen-rising-from-dubais-main-shipping-port-after-iran-attack"
                    },
                    {
                            "name": "AFP / NAMPA",
                            "url": "https://www.nampa.org/text/22872509"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/01/dubai-battles-port-fire-after-iran-missile-attacks-statement"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Palm Jumeirah / Fairmont Hotel",
            "lat": 25.112,
            "lng": 55.138,
            "country": "UAE",
            "city": "Dubai",
            "severity": "critical",
            "icon": "💥",
            "type": "Civilian Area — Hotel Fire, 4 Injured",
            "detail": "Iconic tourism and residential area. Missile debris struck the Fairmont The Palm hotel, causing a fire and injuring 4 people. Thick black smoke visible across the area.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Fire at Fairmont The Palm hotel from missile/drone strike debris — 4 injured, thick black smoke across Palm Jumeirah."
                    }
            ],
            "sources": [
                    {
                            "name": "France24",
                            "url": "https://www.france24.com/en/live-news/20260228-explosion-at-dubai-landmark-the-palm-witnesses"
                    },
                    {
                            "name": "TIME",
                            "url": "https://time.com/7381884/iran-missiles-dubai-palm-gulf/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/02/28/world/us-israeli-strikes-video-breakdown-invs"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Burj Al Arab",
            "lat": 25.1412,
            "lng": 55.1853,
            "country": "UAE",
            "city": "Dubai",
            "severity": "critical",
            "icon": "🔥",
            "type": "Iconic Hotel — Drone Debris Fire on Facade",
            "detail": "World's most iconic luxury hotel. Debris from an intercepted Iranian drone struck the outer facade, igniting a fire. Guests evacuated. Fire brought under control. No fatalities.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Intercepted drone debris struck the hotel facade, igniting a fire. Guests evacuated. Fire controlled."
                    }
            ],
            "sources": [
                    {
                            "name": "Newsweek",
                            "url": "https://www.newsweek.com/dubai-airport-burj-al-arab-hotel-hit-by-drone-debris-in-iran-strike-11600058"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/fiery-explosions-rock-gulf-as-iran-attacks-arab-neighbors-over-us-israeli-strikes/"
                    },
                    {
                            "name": "India TV News",
                            "url": "https://www.indiatvnews.com/news/world/burj-al-arab-dubai-history-drone-incident-seven-star-hotel-2026-03-01-1032150"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Mina Zayed Port / Al Salam Naval Base",
            "lat": 24.5175,
            "lng": 54.3825,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "critical",
            "icon": "⚓",
            "type": "City Port — Drone Strike + Missile Near-Miss",
            "detail": "Abu Dhabi's main city port, cruise terminal, AND Al Salam Naval Base (French military). Directly struck by at least 2 Shahed-136 drones targeting the French naval base. A missile also landed in the water meters from the German cruise ship Mein Schiff 4 (2,500 passengers). Two Iranian drones struck warehouse at Al Salam Naval Base. French Defense Minister confirmed hangar hosting French forces was hit with limited damage. No casualties. On March 1, UAE MOD confirmed two Iranian drones hit a warehouse at the Al Salam Naval Base (Camp de la Paix), which hosts French forces. Fire in two containers; no casualties. French Defence Minister confirmed limited material damage.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Two Iranian Shahed-136 drones struck Al Salam Naval Base (French 'Camp de la Paix'). Hit a warehouse, fire in 2 containers. French Defence Minister confirmed damage."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "A missile landed in the water meters from the cruise ship Mein Schiff 4 (~2,500 passengers). Passengers ordered to shelter indoors."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Two Iranian drones struck a warehouse at Al Salam Naval Base causing a fire in two containers. French Defense Minister confirmed a hangar hosting French forces was hit with limited damage. No casualties reported by either UAE or France."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/01/uae-says-iran-drone-attack-caused-fire-at-base-hosting-french-forces"
                    },
                    {
                            "name": "Militarnyi",
                            "url": "https://militarnyi.com/en/news/iran-attacks-french-camp-de-la-paix-base-in-abu-dhabi/"
                    },
                    {
                            "name": "The New Arab",
                            "url": "https://www.newarab.com/news/iran-drone-attack-caused-fire-base-hosting-french-forces-uae"
                    },
                    {
                            "name": "Greek City Times",
                            "url": "https://greekcitytimes.com/2026/03/02/missile-lands-near-mein-schiff-4-cruise-ship-abu-dhabi-zayed-port/"
                    },
                    {
                            "name": "Channels Television / AFP",
                            "url": "https://www.channelstv.com/2026/03/01/iran-drone-attack-caused-fire-at-uae-base-hosting-french-forces/amp/"
                    },
                    {
                            "name": "Wikipedia (citing UAE MOD, France Info)",
                            "url": "https://en.wikipedia.org/wiki/2026_Israeli%E2%80%93United_States_strikes_on_Iran"
                    }
            ],
            "dateAdded": "2026-03-01"
    },
    {
            "name": "Zayed Military City (UAE Armed Forces GHQ)",
            "lat": 24.4134,
            "lng": 54.6589,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "🎯",
            "type": "UAE Military Command & Control Center",
            "detail": "UAE Armed Forces General HQ, Air Force & Air Defence Command, Naval Forces Command, Zayed Military Hospital. Located within the Abu Dhabi primary strike zone.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Located in Abu Dhabi primary strike zone. Interceptor debris fell in adjacent neighborhoods during 6 waves of attacks."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2634845/middle-east"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Etihad Towers Area (Debris Impact)",
            "lat": 24.461,
            "lng": 54.332,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "💥",
            "type": "Debris Impact — Injuries Confirmed",
            "detail": "Landmark tower complex on the Abu Dhabi Corniche. Interceptor debris struck this area. A woman and child sustained minor injuries. Confirmed by UAE Ministry of Defence.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Interceptor debris fell near Etihad Towers — a woman and child sustained minor injuries."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports"
                    },
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Saadiyat Island (Confirmed Debris Zone)",
            "lat": 24.5407,
            "lng": 54.4341,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "💥",
            "type": "Confirmed Debris — Cultural District",
            "detail": "Interceptor debris confirmed by UAE MOD during THAAD/Patriot engagement. Home to Louvre Abu Dhabi, NYU Abu Dhabi, Guggenheim Abu Dhabi.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Missile interceptor debris fell on the island during engagement of Iranian ballistic missiles. Confirmed by UAE MOD."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports"
                    },
                    {
                            "name": "Pravda",
                            "url": "https://www.pravda.com.ua/eng/news/2026/02/28/8023275/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Khalifa City (Confirmed Debris Zone)",
            "lat": 24.42,
            "lng": 54.58,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "💥",
            "type": "Confirmed Debris — Dense Residential",
            "detail": "Major residential suburb between Abu Dhabi city and the airport — directly under the flight path of missiles targeting Al Dhafra and AUH Airport. Interceptor debris confirmed by UAE MOD.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Shrapnel and interceptor debris fell in residential neighborhoods during multiple waves of Iranian attack. Confirmed by UAE MOD."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/02/28/explosions-heard-in-uae-capital-abu-dhabi-reports"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "AWS ME-Central-1 Data Center (mec1-az2)",
            "lat": 24.41,
            "lng": 54.51,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "🔥",
            "type": "Cloud Data Center — Struck, Fire, Power Cut",
            "detail": "Amazon Web Services ME-CENTRAL-1 region. Availability Zone mec1-az2 knocked offline after 'objects' struck the data center, causing fire. All power cut. First major hyperscale cloud facility physically damaged during military conflict.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Objects struck the mec1-az2 data center causing fire. All power cut. EC2 API errors. AWS declined to attribute to Iranian strikes."
                    }
            ],
            "sources": [
                    {
                            "name": "Data Center Dynamics",
                            "url": "https://www.datacenterdynamics.com/en/news/aws-uae-outage-after-objects-struck-the-data-center-cause-fire-amid-iran-attacks/"
                    },
                    {
                            "name": "Reuters / Yahoo News",
                            "url": "https://www.yahoo.com/news/articles/amazons-cloud-unit-reports-fire-223050670.html"
                    },
                    {
                            "name": "Jerusalem Post",
                            "url": "https://www.jpost.com/middle-east/iran-news/article-888442"
                    }
            ],
            "dateAdded": "2026-03-01"
    },
    {
            "name": "Mohammed bin Zayed City (Debris Zone)",
            "lat": 24.37,
            "lng": 54.535,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "watchlist",
            "icon": "💥",
            "type": "Confirmed Debris — Residential",
            "detail": "Large residential district south of Abu Dhabi. Debris from THAAD/Patriot intercepts fell here. On the corridor between Abu Dhabi city and Al Dhafra Air Base.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Interceptor debris impacted residential areas. Confirmed by UAE MOD."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Bani Yas (Debris Zone)",
            "lat": 24.32,
            "lng": 54.63,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "watchlist",
            "icon": "💥",
            "type": "Confirmed Debris — Residential/Industrial",
            "detail": "Suburb southeast of Abu Dhabi. Interceptor debris confirmed by UAE MOD. Near the airport corridor — an active strike zone.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Debris from intercepted Iranian missiles fell in the area. Confirmed by UAE MOD."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Al Falah (Debris Zone)",
            "lat": 24.35,
            "lng": 54.49,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "watchlist",
            "icon": "💥",
            "type": "Confirmed Debris — Residential",
            "detail": "Residential community south of Abu Dhabi. Interceptor debris confirmed by UAE MOD.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Debris from intercepted missiles confirmed."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "ADNOC Headquarters",
            "lat": 24.4539,
            "lng": 54.3773,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "watchlist",
            "icon": "🛢️",
            "type": "National Oil Company HQ — 76-Story Tower",
            "detail": "Abu Dhabi National Oil Company headquarters. 76-story landmark. Not directly targeted (Iran stated it targeted US military assets, not energy). Energy analysts warn disruptions could reduce UAE exports by 1–1.5 million bpd.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Not directly struck. Located ~3 km from Etihad Towers debris zone. Houthis announced resumed attacks in support of Iran."
                    }
            ],
            "sources": [
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/02/28/nx-s1-5678603/iran-strikes-oil-energy-markets"
                    },
                    {
                            "name": "WTOP / AP",
                            "url": "https://wtop.com/world/2026/02/yemens-iranian-backed-houthi-rebels-to-resume-attacks-on-shipping-in-the-red-sea-corridor-2-rebel-officials-tell-ap/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "ADNOC Musaffah / ICAD-3",
            "lat": 24.3376,
            "lng": 54.4907,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "🛢️",
            "type": "Oil Fuel Depot — Previously Attacked in 2022",
            "detail": "ADNOC pipeline terminal and fuel hub. Previously struck by Houthi drones in Jan 2022 — 3 killed, 6 injured. With Houthis announcing resumed attacks, high-risk repeat target. Upgraded to FALLING DEBRIS: Abu Dhabi authorities confirmed debris from drone interception caused minor building damage at ICAD warehouse and Mussafah commercial facility. March 2: Abu Dhabi authorities confirmed and responded to drone attack on Musaffah fuel terminal. Fire controlled, no injuries or operational disruption. On March 2, intercepted drone debris damaged a warehouse in ICAD and a commercial site in Mussaffah. A separate drone strike caused a fire at a fuel tank terminal in Musaffah, which Abu Dhabi authorities contained. No injuries reported.",
            "incidents": [
                    {
                            "date": "2022-01-17",
                            "text": "Houthi drones struck 3 ADNOC oil tanker trucks — 3 killed, 6 injured."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Not directly struck. Houthis announced resumption of attacks in support of Iran."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Abu Dhabi authorities confirmed falling debris from drone interception struck a warehouse in Industrial City of Abu Dhabi (ICAD) and a commercial facility in Mussafah area, causing minor building damage."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Drone attack on Musaffah fuel terminal confirmed by Abu Dhabi Media Office. Fire quickly brought under control. No injuries reported and operations not affected."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Debris from intercepted drones damaged a warehouse in ICAD and a commercial site in Mussaffah. Abu Dhabi authorities later contained a fire caused by a drone strike on a fuel tank terminal in Musaffah. No injuries reported."
                    }
            ],
            "sources": [
                    {
                            "name": "WTOP / AP",
                            "url": "https://wtop.com/world/2026/02/yemens-iranian-backed-houthi-rebels-to-resume-attacks-on-shipping-in-the-red-sea-corridor-2-rebel-officials-tell-ap/"
                    },
                    {
                            "name": "Shafaq News",
                            "url": "https://shafaq.com/en/Middle-East/Houthis-to-resume-Red-Sea-Israel-attacks-in-support-of-Iran"
                    },
                    {
                            "name": "Radio Shoma (Abu Dhabi authorities)",
                            "url": "https://www.radioshoma934.ae/news/international-news/fire-from-missile-debris-kills-one-in-bahrain/"
                    },
                    {
                            "name": "PBS NewsHour",
                            "url": "https://www.pbs.org/newshour/world/live-updates-u-s-israel-conflict-with-iran-widens"
                    },
                    {
                            "name": "The National (UAE)",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/01/iran-missile-attacks-uae-deaths/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Taweelah Power & Desalination",
            "lat": 24.53,
            "lng": 54.74,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "watchlist",
            "icon": "⚡",
            "type": "Major Power & Water Plant — 909K m³/day",
            "detail": "One of the world's largest desalination plants. Critical to Abu Dhabi's water supply — UAE gets ~90% of drinking water from desalination. High-risk in escalation scenario.",
            "incidents": [],
            "sources": [],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Qasr Al Watan (Presidential Palace)",
            "lat": 24.4625,
            "lng": 54.3055,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "watchlist",
            "icon": "🏛️",
            "type": "UAE Presidential Palace",
            "detail": "Official residence of the UAE President. UAE has closed its embassy in Tehran and recalled all diplomatic staff.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "UAE closed embassy in Tehran, recalled ambassador. Formal condemnation of Iran's attacks."
                    }
            ],
            "sources": [
                    {
                            "name": "UAE WAM",
                            "url": "https://www.wam.ae/en/article/byzgpuq-uae-announces-closure-embassy-tehran-withdrawal"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-01/uae-shuts-embassy-in-tehran-in-response-to-iranian-strikes"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Hatta (Dubai Exclave)",
            "lat": 24.79,
            "lng": 56.115,
            "country": "UAE",
            "city": "Hatta",
            "severity": "watchlist",
            "icon": "🛂",
            "type": "Border Town — Sheltering Stranded Tourists",
            "detail": "Dubai exclave near the Oman border. Hotels sheltering stranded tourists in makeshift shelters.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Hotels sheltering stranded tourists. Oman neutrality compromised after Duqm Port hit."
                    }
            ],
            "sources": [
                    {
                            "name": "Jerusalem Post",
                            "url": "https://www.jpost.com/middle-east/iran-news/article-888422"
                    },
                    {
                            "name": "Travel & Tour World",
                            "url": "https://www.travelandtourworld.com/news/article/uae-implements-strategic-safety-closures-and-remote-work-advisories-following-regional-iranian-strikes/"
                    }
            ],
            "dateAdded": "2026-03-01"
    },
    {
            "name": "Strait of Hormuz — Maritime Incidents (off Sharjah/Mina Saqr, UAE)",
            "lat": 25.9,
            "lng": 56.1,
            "country": "UAE",
            "city": "Sharjah / Ras Al Khaimah coastal waters",
            "severity": "critical",
            "icon": "⚓",
            "type": "Projectile attacks on commercial vessels",
            "detail": "UK Maritime Trade Operations (UKMTO) reported multiple maritime incidents on March 1: one vessel west of Sharjah rocked by explosion from unknown projectile; another tanker north of Muscat struck above the waterline sparking a fire; a third vessel northwest of Mina Saqr hit by projectile igniting a blaze aboard. Widespread GPS jamming also reported across Emirati, Qatari, Omani and Iranian waters. On March 2, IRGC commander General Jabbari declared the Strait closed and threatened to set passing vessels on fire. Maritime traffic has effectively ceased. IRGC struck tanker ATHE NOVA with drones.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "UKMTO reported three separate maritime attacks: vessel hit west of Sharjah, tanker struck north of Muscat, and vessel hit near Mina Saqr. Fires aboard multiple ships. GPS jamming widespread."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "IRGC commander General Ebrahim Jabbari declared the Strait of Hormuz closed to all traffic, stating on state TV: vessels attempting to pass will be 'set on fire.' Traffic through the waterway has effectively stopped. IRGC struck tanker ATHE NOVA with 2 drones (separate map entry)."
                    }
            ],
            "sources": [
                    {
                            "name": "Fox News",
                            "url": "https://www.foxnews.com/world/strait-hormuz-maritime-incidents-follow-us-israeli-operation-epic-fury-strikes-iran"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2794562-tanker-hit-near-hormuz-strait-as-iran-conflict-widens"
                    },
                    {
                            "name": "CNN Live",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Daily Sabah",
                            "url": "https://www.dailysabah.com/world/mid-east/iran-says-strait-of-hormuz-closed-will-torch-ships-trying-to-pass"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Al Hamra Village, Ras Al Khaimah (Intercepted Drone Debris)",
            "lat": 25.7167,
            "lng": 55.7833,
            "country": "UAE",
            "city": "Ras Al Khaimah",
            "severity": "high",
            "icon": "💥",
            "type": "Intercepted drone debris damage",
            "detail": "Debris from an intercepted Iranian drone caused damage in Al Hamra Village in Ras Al Khaimah on Monday, per the UAE Ministry of Defense via The National. No injuries were reported. This represents a geographic widening of debris impacts beyond Abu Dhabi and Dubai into the northern emirate of Ras Al Khaimah.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Intercepted Iranian drone debris caused damage in Al Hamra Village, Ras Al Khaimah. No injuries reported. Confirmed by UAE MOD."
                    }
            ],
            "sources": [
                    {
                            "name": "The National (UAE)",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/01/iran-missile-attacks-uae-deaths/"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

    // ═══════════════════════════════════════════════════════════
    // Bahrain
    // ═══════════════════════════════════════════════════════════
    {
            "name": "NSA Bahrain / US 5th Fleet HQ (Juffair)",
            "lat": 26.2235,
            "lng": 50.596,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "🎯",
            "type": "US Naval Base — Missile & Drone Strike",
            "detail": "Naval Support Activity Bahrain — HQ of US Naval Forces Central Command (NAVCENT) and US 5th Fleet. Hosts ~9,000 US military personnel. Iran struck with ballistic missiles and Shahed drones. Radar/satcom dome destroyed, warehouse damaged. NAVCENT concluded Juffair is 'no longer safe for US personnel.' US Embassy issued security alert. Bahrain Defense Force confirmed intercepting 45 missiles and 9 drones. Base sustained damage to large building. Sirens continued into Sunday afternoon. Bahrain intercepted 45 missiles and 9 drones. Satellite imagery published by WaPo showed smoke rising from damage at the US naval base. Breaking Defense confirmed video showing parts of 5th Fleet HQ were hit in initial attack. CNN verified video of Shahed drone directly hitting radar dome at the base. Bahrain confirmed intercepting 45 missiles and 9 drones total. DoDEA school on base canceled in-person classes for the week. On March 2, sirens sounded again over Bahrain. Al Jazeera reports 1 person killed in Bahrain from Iranian attacks — the first confirmed death in the country. Reports of new drone strikes overnight against the base. March 2: Bahrain Defence Force updated total interceptions to 61 missiles and 34 drones (up from 45/9). Ongoing Iranian targeting of the area. March 2: Bahrain MOI activated air raid alerts, closed Shaikh Khalifa bridge, and urged residents to shelter. US Embassy warned hotels in Manama could be targeted. March 2: Bahrain activated new air raid alerts, closed Shaikh Khalifa bridge. US Embassy closed, warned Americans to avoid Manama hotels.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian ballistic missile impacted vicinity of NSA Bahrain. Radar/satcom dome and warehouse damaged."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "US Embassy Manama issued Security Alert — Juffair area and high-rise buildings deemed unsafe."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "NAVCENT ordered evacuation of non-essential personnel."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Bahrain Defense Force confirmed air defenses intercepted 45 missiles and 9 drones including Shahed-136 types. Navy base sustained damage to a large building and at least one other structure. Limited debris reported across multiple areas."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Bahrain reported intercepting 45 missiles and 9 drones including Shahed-136 kamikaze drones. Multiple fires reported burning at the 5th Fleet base following continued drone strikes overnight into March 1-2. Video confirmed parts of 5th Fleet headquarters were hit."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Bahrain confirmed intercepting 45 missiles and 9 drones including Shahed-136 kamikaze drones since start of Iranian attacks. CNN geolocated video shows Shahed drone directly impacting radar dome at the facility. US Navy had pre-evacuated many personnel."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Air-raid sirens sounded again over Bahrain on March 2. Al Jazeera liveblog reports 1 person killed in Bahrain from Iranian attacks. New drone strikes reported against the naval base overnight."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain Defence Force updated total interceptions to 61 missiles and 34 drones destroyed (up from earlier 45 missiles and 9 drones). Ongoing strikes and fires reported at or near 5th Fleet headquarters."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain MOI activated air raid alerts Monday and urged residents to head to nearest safe place. Shaikh Khalifa bin Salman Bridge closed. Residents urged to use main roads only when necessary."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain Ministry of Interior activated fresh air raid alerts, urged residents to seek nearest shelter. Shaikh Khalifa bin Salman Bridge closed. US Embassy in Bahrain closed for March 2; warned US citizens to avoid hotels in Manama as potential targets."
                    }
            ],
            "sources": [
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-02-28/bahrain-base-departures-20902165.html"
                    },
                    {
                            "name": "Defense One",
                            "url": "https://www.defenseone.com/threats/2026/02/americans-evacuate-after-iranian-drones-damage-us-navy-base-bahrain/411786/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation"
                    },
                    {
                            "name": "US Embassy Bahrain",
                            "url": "https://bh.usembassy.gov/security-alert-update-4-u-s-embassy-manama-bahrain-juffair-area-and-high-rise-buildings-not-deemed-safe-february-28-2026/"
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-01/bahrain-iranian-drones-sunday-20915170.html"
                    },
                    {
                            "name": "Breaking Defense",
                            "url": "https://breakingdefense.com/2026/03/iran-attacks-uae-saudi-missiles-drones-gcc-air-defense/"
                    },
                    {
                            "name": "Washington Post",
                            "url": "https://www.washingtonpost.com/investigations/2026/03/01/where-iran-strikes-middle-east-images-video/"
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-02-28/strikes-on-bahrain-iran-israel-20902624.html"
                    },
                    {
                            "name": "Al Jazeera Live (March 2)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/2/us-israel-attack-iran-live"
                    },
                    {
                            "name": "CNN Live Updates",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "The Star (Bernama-QNA)",
                            "url": "https://www.thestar.com.my/news/nation/2026/03/02/bahrain-announces-one-killed-two-injured-by-falling-debris-from-intercepted-missile"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "US Embassy Bahrain",
                            "url": "https://bh.usembassy.gov/security-alert-update-6-u-s-embassy-manama-bahrain-u-s-embassy-closure-march-1-2026/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Bahrain International Airport (BAH)",
            "lat": 26.2708,
            "lng": 50.6336,
            "country": "Bahrain",
            "city": "Muharraq",
            "severity": "critical",
            "icon": "✈️",
            "type": "International Airport — Drone Strike",
            "detail": "Bahrain's sole international airport. Targeted by an Iranian drone, resulting in material damage. No casualties. Airport operations suspended.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Iranian drone struck the airport. Material damage confirmed by Bahrain Ministry of Interior. No casualties."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Mayadeen",
                            "url": "https://english.almayadeen.net/news/politics/drone-hits-bahrain-airport-as-gulf-states-intercept-iranian"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation"
                    }
            ],
            "dateAdded": "2026-03-01"
    },
    {
            "name": "Era Views Tower, Hoora (Residential Strike)",
            "lat": 26.227,
            "lng": 50.585,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "💥",
            "type": "Residential High-Rise — Direct Drone Strike",
            "detail": "Shahed drone directly struck the upper floors of the Era Views Tower, a residential high-rise ~1 mile from the US Navy base. The Breaker residential tower also caught fire. Three apartment complexes damaged total.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Shahed drone struck upper floors of Era Views Tower — building set ablaze. The Breaker tower also on fire."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Iranian drones and missiles struck high-rise apartments across Juffair and Hoora neighborhoods."
                    }
            ],
            "sources": [
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-02-28/strikes-on-bahrain-iran-israel-20902624.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/2/28/suspected-iranian-drone-hits-bahrain-high-rise-building"
                    },
                    {
                            "name": "The Media Line",
                            "url": "https://themedialine.org/headlines/iran-targets-kuwait-airport-drones-hit-residential-areas-in-bahrain/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/02/28/world/us-israeli-strikes-video-breakdown-invs"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Isa Air Base",
            "lat": 25.9181,
            "lng": 50.5906,
            "country": "Bahrain",
            "city": "Isa Town",
            "severity": "high",
            "icon": "🎯",
            "type": "Bahrain Air Force / US Support Base",
            "detail": "Royal Bahraini Air Force headquarters. Hosts US military operations supporting 5th Fleet. Air defense activity reported during Iranian barrage. Bahrain air defenses actively engaged from Isa Air Base intercepting 45 missiles and 9 drones. Confirmed debris fell across multiple areas. Upgraded to FALLING DEBRIS.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Base placed on highest alert during Iranian missile barrage. Air defense activity reported over Bahrain."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Bahrain's air defenses responded from Isa Air Base overnight to hostile Iranian missile attacks, intercepting 45 missiles and 9 drones. Bahraini state media confirmed limited debris across several areas."
                    }
            ],
            "sources": [
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/fiery-explosions-rock-gulf-as-iran-attacks-arab-neighbors-over-us-israeli-strikes/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/israel-iran-attack-02-28-26-hnk-intl"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Crowne Plaza Hotel, Manama, Bahrain",
            "lat": 26.2235,
            "lng": 50.5535,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "💥",
            "type": "Hotel — Confirmed Drone Strike",
            "detail": "US Embassy in Bahrain confirmed the Crowne Plaza Hotel in Manama was struck on March 1, 2026, resulting in injuries. The hotel was hosting diplomats and US embassy personnel. Bahrain Interior Ministry confirmed material damage. US Embassy warned Americans to avoid all hotels in Manama.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Iranian drone struck Crowne Plaza Hotel. US Embassy confirmed strike resulting in injuries. Bahrain Interior Ministry confirmed material damage, no fatalities."
                    }
            ],
            "sources": [
                    {
                            "name": "U.S. Embassy Bahrain (Official)",
                            "url": "https://bh.usembassy.gov/security-alert-update-5-u-s-embassy-manama-bahrain-u-s-government-personnel-moved-from-hotels-march-1-2026/"
                    },
                    {
                            "name": "ABC News",
                            "url": "https://abcnews.com/International/warning-americans-bahrain-after-iran-strikes-dubai-gulf/story?id=130648905"
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-01/bases-damaged-iran-attacks-20916010.html"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Breaker Residential Tower, Seef District, Bahrain",
            "lat": 26.217,
            "lng": 50.532,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "high",
            "icon": "💥",
            "type": "Residential Tower — Drone/Debris Strike Under Investigation",
            "detail": "The Breaker residential tower in Manama's Seef district sustained heavy damage and fire on Feb 28 from an aerial attack. Stars and Stripes confirmed a section of the building's exterior collapsed inward across two to three floors. Bahrain police said the incident remains under investigation as to whether the cause was a direct drone strike or falling debris from a missile intercept.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Aerial attack set fire to Breaker tower. Exterior collapsed across 2-3 floors. Investigation ongoing into whether drone strike or interception debris."
                    }
            ],
            "sources": [
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-01/bahrain-iranian-drones-sunday-20915170.html"
                    },
                    {
                            "name": "Stars and Stripes (initial)",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-02-28/strikes-on-bahrain-iran-israel-20902624.html"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Mina Salman Port (Vessel Fire), Bahrain",
            "lat": 26.2094,
            "lng": 50.6,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "⚓",
            "type": "Interceptor debris / vessel fire",
            "detail": "Bahrain's Interior Ministry confirmed that falling debris from an intercepted Iranian missile caused a fire on a foreign vessel in the industrial zone near Mina Salman port. One Asian worker was killed and two others were seriously injured in what Bahrain described as 'Iranian aggression.' UPGRADED TO CRITICAL: Bahrain MOI confirmed 1 Asian worker killed and 2 seriously injured when intercepted missile debris struck a foreign vessel, causing fire. First confirmed death in Bahrain. Bahrain MOI confirmed first fatality in Bahrain: an Asian worker killed when intercepted missile debris fell onto a vessel in Salman Industrial City. Two others seriously injured. Fire brought under control. March 2: 1 worker killed and 2 seriously injured by debris from intercepted missile on foreign ship. US-flagged tanker Stena Imperative (Navy TSP vessel) also struck by projectiles while berthed, causing onboard fire. Bahrain confirmed one Asian worker killed by interceptor debris on a vessel in Salman Industrial City; two others seriously injured. On March 2, interceptor debris struck a foreign vessel in the Salman industrial zone, killing one worker and seriously injuring two. UKMTO reported a separate vessel struck by two projectiles at the port. On March 2, UKMTO reported a vessel struck by two projectiles at Bahrain port. Interceptor debris struck a foreign ship in Salman industrial zone, killing 1 worker and seriously injuring 2. Mar 2: UKMTO confirmed vessel struck by 2 projectiles. Bahrain Interior Ministry: 1 Asian worker killed, 2 seriously injured from interceptor debris falling on foreign ship at Salman Industrial City. On March 2, Bahrain's Ministry of Interior confirmed 1 Asian worker killed and 2 seriously injured from intercepted missile debris falling on a foreign vessel. Bahrain Defence Force reports total of 61 missiles and 34 drones intercepted since the start of the conflict. March 2: US-flagged tanker Stena Imperative struck by two projectiles in Port of Bahrain per Reuters/Vanguard Tech. Fire broke out and was extinguished; crew evacuated. UKMTO confirmed the vessel fire incident.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Interceptor debris caused fire on foreign vessel at Mina Salman port industrial zone. 1 killed, 2 seriously injured (Bahrain Interior Ministry)."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain MOI confirmed: debris from an intercepted Iranian missile fell on a foreign vessel undergoing maintenance in Salman Industrial City, causing a fire that killed 1 Asian worker and seriously injured 2 others. Fire brought under control. First confirmed death in Bahrain from Iranian strikes."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain MOI confirms 1 Asian worker killed and 2 seriously injured after debris from an intercepted missile fell onto a foreign vessel undergoing maintenance in Salman Industrial City, causing a fire. Emergency teams extinguished the blaze."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Falling debris from intercepted Iranian missile struck a foreign ship in Salman industrial zone, killing 1 Asian worker and seriously injuring 2 others. Separately, US-flagged tanker Stena Imperative was hit by projectiles while berthed at Port of Bahrain, causing fire and explosions on board."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain Interior Ministry confirmed an Asian worker killed when debris from an intercepted missile fell onto a foreign vessel undergoing maintenance in Salman Industrial City. Two others sustained serious injuries."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "UKMTO confirms vessel at Bahrain port struck by two unknown projectiles causing fire. Bahrain Interior Ministry confirms debris from intercepted Iranian missile fell on a foreign ship at Salman Industrial City, killing 1 Asian worker and seriously injuring 2 others. Fire extinguished, crew evacuated."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Bahrain MOI confirmed falling debris from an intercepted missile caused fire on a foreign ship undergoing maintenance in Salman Industrial City. One Asian worker killed, two others seriously injured. Fire was brought under control."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "US-flagged oil tanker Stena Imperative reportedly struck by two Iranian projectiles in the Port of Bahrain, causing a fire that was extinguished. Crew evacuated. Reported by Reuters and maritime security firm Vanguard Tech, cited by CBS News. UKMTO also reported a vessel struck by two unknown projectiles at port of Bahrain."
                    }
            ],
            "sources": [
                    {
                            "name": "Middle East Eye (Live)",
                            "url": "https://www.middleeasteye.net/live/live-us-and-israel-attack-iran"
                    },
                    {
                            "name": "Al Jazeera (Live Blog Mar 2)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/2/us-israel-attack-iran-live"
                    },
                    {
                            "name": "ARN News Centre",
                            "url": "https://www.arnnewscentre.ae/news/international/fire-from-missile-debris-kills-one-in-bahrain/"
                    },
                    {
                            "name": "The Star (Malaysia)",
                            "url": "https://www.thestar.com.my/news/nation/2026/03/02/bahrain-announces-one-killed-two-injured-by-falling-debris-from-intercepted-missile"
                    },
                    {
                            "name": "Gulf Insider",
                            "url": "https://www.gulf-insider.com/first-death-reported-in-bahrain-amid-rising/"
                    },
                    {
                            "name": "Sharjah24 / BNA",
                            "url": "https://sharjah24.ae/en/Articles/2026/03/02/kmr37"
                    },
                    {
                            "name": "Al Jazeera (Casualty Tracker)",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    },
                    {
                            "name": "Marine Log / UKMTO",
                            "url": "https://www.marinelog.com/legal/safety-and-security/u-s-flagged-stena-imperative-hit-following-operation-epic-fury-strikes/"
                    },
                    {
                            "name": "gCaptain / Bloomberg",
                            "url": "https://gcaptain.com/qatar-lng-shutdown-iran-drone-attack-ras-laffan/"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-day-3-american-deaths-israel-gulf-allies-hit-missile-strikes/"
                    },
                    {
                            "name": "Jerusalem Post (citing UKMTO)",
                            "url": "https://www.jpost.com/middle-east/article-888568"
                    },
                    {
                            "name": "Wikipedia (2026 Israeli-US strikes on Iran)",
                            "url": "https://en.wikipedia.org/wiki/2026_Israeli%E2%80%93United_States_strikes_on_Iran"
                    },
                    {
                            "name": "PBS NewsHour",
                            "url": "https://www.pbs.org/newshour/world/live-updates-u-s-israel-conflict-with-iran-widens"
                    },
                    {
                            "name": "WAM (via Iraq Sun)",
                            "url": "http://www.iraqsun.com/news/278896783/bahrain-announces-one-killed-two-injured-by-falling-debris-from-intercepted-missile"
                    },
                    {
                            "name": "ARN News Centre",
                            "url": "https://www.arnnewscentre.ae/en/news/international/fire-from-missile-debris-kills-one-in-bahrain/"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

    // ═══════════════════════════════════════════════════════════
    // Qatar
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Al Udeid Air Base",
            "lat": 25.1173,
            "lng": 51.315,
            "country": "Qatar",
            "city": "Al Rayyan",
            "severity": "critical",
            "icon": "🎯",
            "type": "Largest US Base in ME — 2 Missiles Hit, Radar Destroyed",
            "detail": "Largest US military installation in the Middle East. Hosts ~10,000 US personnel, CENTCOM forward HQ, Combined Air Operations Center (CAOC). Two Iranian ballistic missiles struck the base directly. An Iranian drone destroyed the AN/FPS-132 early warning radar ($1.1B asset, 5,000 km range). Qatar intercepted 65 missiles and 12 drones total. 8 injured. Qatar confirmed 66 missiles and 12 drones fired at the country, 114 reports of falling shrapnel nationwide, 16 injured (one serious). Day 3 (March 2): Explosions continued in Doha with CNN team filming apparent interceptions overhead. Al Jazeera reports third consecutive day of Iranian retaliatory strikes targeting Qatar. March 2: Explosions heard in Doha for third day. Qatar FM spokesperson: 'Iran has to pay a price for this blatant attack on our people. An attack like this cannot be left without retaliation.' On March 2, Qatar shot down two Iranian Su-24 fighter jets — the first shoot-down of manned aircraft in the conflict — and intercepted 7 missiles and 5 drones. Qatar MoD stated its armed forces possess 'full capabilities to safeguard the state's sovereignty.' March 2: Qatar Emiri Air Force shot down two Iranian Su-24 fighter jets and intercepted 7 ballistic missiles + 5 drones — the first confirmed air-to-air engagement of the conflict. Qatar MOD stated threats were addressed immediately upon detection per operational plans. On March 2, Qatar Emiri Air Force shot down two Iranian Su-24 fighter-bombers — the first manned aircraft destroyed in combat during the conflict. Qatar also intercepted 7 ballistic missiles and 5 drones in the same engagement. Qatar MOD stressed armed forces possess 'full capabilities to safeguard the state's sovereignty.' March 2: Qatar shot down two Iranian Su-24 bombers — the first manned Iranian aircraft downed since the conflict began — while intercepting 7 ballistic missiles and 5 drones. IRGC has claimed 12 waves of attacks since war began. Mar 2: Qatar Air Force shot down 2 Iranian Su-24 Fencer tactical bombers and intercepted 7 ballistic missiles and 5 drones — first confirmed aerial kill of Iranian aircraft by a Gulf state. QatarEnergy suspends all LNG production following drone strikes on Ras Laffan and Mesaieed facilities. March 2: Qatar Emiri Air Force confirmed shoot-down of two Iranian Su-24 Fencer bombers incoming from Iran — the first Gulf state to down Iranian manned aircraft. QEAF also intercepted 7 ballistic missiles and 5 drones on the same day. Qatar MOD now deploying fighter jets over Gulf waters rather than relying solely on ground-based Patriot systems.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Two Iranian ballistic missiles struck Al Udeid Air Base."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Iranian drone destroyed the AN/FPS-132 early warning radar — $1.1 billion asset, critical missile defense component."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Qatar intercepted 65 ballistic missiles and 12 drones total. 8 people injured from debris."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Second wave of missiles intercepted and neutralized by Qatar's Ministry of Defence. Qatar confirmed 66 missiles total fired at the country, with 114 reports of falling shrapnel nationwide and 16 people injured."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Day 3: Explosions heard near Al Udeid area as Iranian retaliatory strikes continue; CNN photojournalist filmed apparent missile interceptions in Doha skies Monday morning"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Third consecutive day of Iranian strikes targeting Qatar. Loud explosions heard in Doha on Monday. Qatar FM spokesperson says Iran must 'pay a price' for attacks on Qatari people, signaling potential retaliation."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar MoD announces air force 'successfully shot down' two Iranian Su-24 Fencer fighter-bomber jets incoming from Iran — the first air-to-air shoot-down of manned aircraft in the conflict. Also intercepted 7 ballistic missiles and 5 drones targeting multiple areas. All projectiles neutralized before reaching targets."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "MAJOR ESCALATION: Qatar Emiri Air Force shot down two Iranian Su-24 Fencer attack jets incoming from Iran. Air defenses also intercepted 7 ballistic missiles and 5 drones targeting several areas of Qatar. Qatar MOD confirmed all missiles shot down before reaching targets. First confirmed air-to-air engagement of the conflict."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar Air Force shot down two Iranian Su-24 Fencer bombers approaching from Iran — first manned aircraft downed in conflict. Also intercepted 7 ballistic missiles and 5 drones targeting several areas of Qatar. Qatar MOD confirmed all threats neutralized before reaching targets."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar MOD announces shootdown of 2 Iranian Su-24 Fencer bombers approaching from Iran — first confirmed aerial shootdown of Iranian aircraft by a Gulf state. Also intercepted 7 ballistic missiles via air defenses and 5 drones via QEAF and Qatari Navy. All projectiles destroyed before reaching targets. Qatar now deploying fighter jets to intercept threats over Gulf waters instead of relying solely on Patriot systems."
                    }
            ],
            "sources": [
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/qatar-says-65-ballistic-missiles-12-drones-intercepted-in-iranian-retaliatory-strikes-8-injured/3844496"
                    },
                    {
                            "name": "Defence Security Asia",
                            "url": "https://defencesecurityasia.com/en/iran-destroys-us-an-fps-132-radar-qatar-irgc-missile-defense-gulf-escalation/"
                    },
                    {
                            "name": "Military Watch Magazine",
                            "url": "https://militarywatchmagazine.com/article/iranian-strike-missile-defence-radars-bahrain-qatar"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/2/28/missile-debris-injures-eight-in-qatar-after-iran-launches-barrage"
                    },
                    {
                            "name": "CNN Live",
                            "url": "https://www.cnn.com/world/live-news/israel-iran-attack-02-28-26-hnk-intl"
                    },
                    {
                            "name": "CNN (March 2 Live)",
                            "url": "https://us.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera (Day 3)",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/drones-hit-saudi-ras-tanura-refinery-as-iran-strikes-targets-across-region"
                    },
                    {
                            "name": "Qatar News Agency (QNA)",
                            "url": "https://qna.org.qa/en/News-Area/News/2026-3/2/qatar-shoots-down-two-iranian-jets-intercepts-12-missiles-and-drones"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/gulf/qatar/qatar-shoots-down-two-iranian-su-24-jets-intercepts-missiles-1.500461182"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/qatar-says-it-downed-two-iranian-fighter-jets-as-conflict-widens"
                    },
                    {
                            "name": "Defence Blog",
                            "url": "https://defence-blog.com/qatar-shoots-down-two-iranian-su-24-fencer-attack-jets/"
                    },
                    {
                            "name": "Associated Press",
                            "url": "https://www.coastreporter.net/world-news/qatar-says-its-air-force-shot-down-2-iranian-warplanes-11943204"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-02/qatar-downs-pair-of-iranian-fighter-jets-in-first-for-conflict"
                    },
                    {
                            "name": "France24 / AFP",
                            "url": "https://www.france24.com/en/live-news/20260302-qatar-downs-iran-warplanes-halts-lng-production-as-gulf-crisis-deepens"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/gulf/2026/03/02/qatar-shoots-down-two-iranian-bombers/"
                    },
                    {
                            "name": "The Aviationist",
                            "url": "https://theaviationist.com/2026/03/02/qatar-shot-down-two-iranian-su-24s/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Camp As Sayliyah",
            "lat": 25.305,
            "lng": 51.37,
            "country": "Qatar",
            "city": "Doha",
            "severity": "watchlist",
            "icon": "🎯",
            "type": "US Army Prepositioned Stock",
            "detail": "Largest US Army prepositioned equipment storage facility outside CONUS. Though formally transitioned to Qatar in 2023, US equipment and personnel still present.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Base placed on elevated alert during Iranian strike campaign against Gulf US military facilities."
                    }
            ],
            "sources": [
                    {
                            "name": "The Week",
                            "url": "https://www.theweek.in/news/middle-east/2026/03/01/iran-launches-sixth-wave-of-strikes-on-dubai-bahrain-and-qatars-us-military-bases-uae-defence-intercepts-137-missiles.html"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Doha Industrial Zone (Debris Fire)",
            "lat": 25.21,
            "lng": 51.44,
            "country": "Qatar",
            "city": "Doha",
            "severity": "high",
            "icon": "💥",
            "type": "Industrial Zone — Confirmed Debris Fire from Interception",
            "detail": "Qatar's Interior Ministry confirmed it was responding to a limited fire in an industrial zone south of Doha caused by debris from an intercepted Iranian missile on March 1. AFP photographers captured thick black smoke rising from the area. Qatari officials said Iran launched 65 missiles and 12 drones at Qatar, with most intercepted, but 114 reports of falling shrapnel nationwide.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Debris from intercepted missile caused limited fire in Doha industrial zone. Qatar Interior Ministry confirmed response. AFP captured thick smoke plume."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/1/more-blasts-rock-dubai-doha-and-manama-as-iran-targets-us-assets-in-gulf"
                    },
                    {
                            "name": "Al Jazeera (Debris/Injuries)",
                            "url": "https://www.aljazeera.com/news/2026/2/28/missile-debris-injures-eight-in-qatar-after-iran-launches-barrage"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Northern Qatar Early Warning Radar Site",
            "lat": 25.95,
            "lng": 51.35,
            "country": "Qatar",
            "city": "Northern Qatar",
            "severity": "critical",
            "icon": "🎯",
            "type": "Reported missile targeting of radar facility",
            "detail": "A long-range early warning radar in northern Qatar was targeted by an Iranian missile, according to sources who spoke to Al Jazeera on Feb 28. No injuries were reported. The IRGC separately claimed destruction of the AN/FPS-132 Block 5 US missile warning radar in Qatar, though this claim has not been independently verified. UPGRADE: Qatari officials confirmed in joint briefing that 'a drone targeted an early warning radar system.' Reuters confirmed the $1B AN/FPS-132 Block 5 radar was struck and damaged. Satellite imagery analyzed by NPR shows possible burn scarring near the radar installation. Iran claimed the radar was destroyed; US has not publicly confirmed extent of damage.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian missile reportedly targeted long-range early warning radar in northern Qatar. No confirmed injuries or damage assessment available from Qatari authorities."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Qatari officials confirmed in joint defense/interior/foreign affairs briefing that a drone struck the AN/FPS-132 early warning radar system; Reuters source confirmed radar struck and damaged"
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation"
                    },
                    {
                            "name": "Euronews (Qatar briefing)",
                            "url": "https://www.euronews.com/2026/03/01/qatar-intercepts-iranian-missile-waves-on-day-two-of-retaliation-as-doha-fire-contained"
                    },
                    {
                            "name": "Reuters (via MarketScreener)",
                            "url": "https://uk.marketscreener.com/news/an-early-warning-radar-in-the-north-of-qatar-was-struck-and-damaged-by-an-iranian-attack-official-ce7e5cdcd988fe2c"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Hamad International Airport (DOH), Qatar",
            "lat": 25.2731,
            "lng": 51.6081,
            "country": "Qatar",
            "city": "Doha",
            "severity": "high",
            "icon": "✈️",
            "type": "Airport — Targeted, Attacks Intercepted",
            "detail": "Qatar's Foreign Ministry spokesperson confirmed that Iran targeted civilian infrastructure including the international airport. All attacks were intercepted by Qatari armed forces; no confirmed ground impact at the airport. All aircraft movements suspended; 2,000+ flights cancelled. Qatar Airways operations remain grounded. March 2: Qatar FM confirmed airport was directly targeted by Iranian attacks; all intercepted. Qatar warned Iran must 'pay a price' and retaliation cannot be ruled out. Qatar FM spokesman confirmed on March 2 that Iranian attacks targeted civilian infrastructure including the international airport. Attacks intercepted but severity elevated given confirmed targeting. Flights remain suspended pending airspace reopening. On March 2, Qatar MOD confirmed shooting down 2 Iranian SU-24 Fencer bombers — the first time Qatar has downed manned aircraft. Also intercepted 7 ballistic missiles and 5 drones on the same day. All projectiles neutralized before reaching targets.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Qatar FM spokesperson confirms Iranian attacks targeted civilian infrastructure including Hamad International Airport; all attacks intercepted. Airport remains closed with all movements suspended."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar FM spokesperson Majed Al Ansari confirmed to CNN that Iran targeted civilian infrastructure including Hamad International Airport; attacks intercepted. Qatar FM separately warned Iran must 'pay a price' for the attacks and that they 'cannot be left without retaliation.'"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar FM spokesman confirmed Iran targeted Hamad International Airport; attacks intercepted by air defenses. Over 100 missiles and scores of drones launched at Qatar targeting civilian and military infrastructure. Flights remain suspended."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar confirmed interception of Iranian attacks targeting civilian infrastructure including Doha International Airport. Qatar MOD reported shooting down 2 Iranian SU-24 bombers, 7 ballistic missiles, and 5 drones on March 2. All threats intercepted before reaching targets."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/us-and-israeli-strikes-on-iran-disrupt-regional-and-international-flights"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/drones-hit-saudi-ras-tanura-refinery-as-iran-strikes-targets-across-region"
                    },
                    {
                            "name": "CNN (Qatar FM interview)",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/qatar-says-iranian-attacks-injured-around-20-targeted-airport-and-energy-infrastructure/"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/world/gulf/qatarenergy-stops-lng-production-after-attacks-on-ras-laffan-mesaieed-facilities"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/gulf/qatar/qatar-shoots-down-two-iranian-su-24-jets-intercepts-missiles-1.500461182"
                    },
                    {
                            "name": "QNA (Qatar)",
                            "url": "https://qna.org.qa/en/News-Area/News/2026-3/2/qatar-shoots-down-two-iranian-jets-intercepts-12-missiles-and-drones"
                    },
                    {
                            "name": "JPost",
                            "url": "https://www.jpost.com/middle-east/article-888568"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Ras Laffan Industrial City (QatarEnergy LNG Facility)",
            "lat": 25.9036,
            "lng": 51.536,
            "country": "Qatar",
            "city": "Ras Laffan",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Energy Infrastructure Strike",
            "detail": "Iranian drone struck QatarEnergy facility in Ras Laffan Industrial City on March 2, causing QatarEnergy to halt all LNG production. Ras Laffan supplies roughly 20% of global LNG exports. No human casualties reported but damage assessment is underway. March 2: Iranian drone confirmed struck QatarEnergy facility in Ras Laffan. QatarEnergy halted all LNG production — an unprecedented shutdown affecting ~20% of global LNG supply. European gas prices surged ~45–50%. March 2: QatarEnergy halted all natural gas production. Ras Laffan supplies approximately one-fifth of global LNG exports. Combined with Strait of Hormuz closure, this represents a major disruption to global energy markets. QatarEnergy confirmed full halt of LNG production on March 2, citing military attacks on operating facilities. European gas prices surged ~45%. Qatar is one of the world's top LNG producers. QatarEnergy announced a full halt to LNG and associated products production citing military attacks. European TTF gas benchmark jumped ~45% to over €46. Mar 2: QatarEnergy halted all LNG production — one of the world's largest LNG exporters. European gas prices surged 50%+. Qatar MOD confirmed Iranian missile hit energy facility at Ras Laffan. QatarEnergy ceased all LNG production on March 2 after Iranian drone struck the facility, affecting ~20% of global LNG supply. European benchmark gas prices surged nearly 50%. QatarEnergy's Ras Laffan plant operates 14 LNG trains with 77M tonnes annual capacity. March 2: QatarEnergy halted ALL LNG production across Ras Laffan and Mesaieed — unprecedented shutdown of the world's largest LNG export facility (~20% of global supply). European gas prices surged 50%+. No human casualties confirmed from the drone strikes.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Iranian drone struck QatarEnergy facility at Ras Laffan Industrial City. QatarEnergy ceased all LNG production and associated products."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar MoD confirmed an Iranian drone targeted an energy facility in Ras Laffan Industrial City belonging to QatarEnergy. QatarEnergy announced a complete halt of LNG production and associated products, threatening ~20% of global LNG supply. European gas prices surged ~45%."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "QatarEnergy halted natural gas production at Ras Laffan, the world's largest LNG export facility, after Iranian drone strikes. The facility supplies ~20% of global LNG. Gas prices surged worldwide as a result."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "QatarEnergy announced full halt of all LNG and associated products production following Iranian strikes on Ras Laffan and Mesaieed facilities. Dutch TTF European gas benchmark surged approximately 45%."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "QatarEnergy announces full halt of LNG production following Iranian drone strikes on operating facilities at Ras Laffan and Mesaieed. Qatar Defence Ministry confirmed one drone targeted an energy facility belonging to QatarEnergy at Ras Laffan. Dutch TTF gas benchmark surged ~45%."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "QatarEnergy suspends all LNG production following Iranian drone strikes on Ras Laffan and Mesaieed facilities. European natural gas prices surged more than 50%. Qatar MOD confirmed Iranian missiles struck energy facility in Ras Laffan affiliated with QatarEnergy."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "QatarEnergy announced full cessation of LNG production following the drone strikes on Ras Laffan and Mesaieed facilities. The Ras Laffan plant supplies ~20% of global LNG. European gas prices surged 50%+ and Asian LNG prices jumped 39% on the announcement. Qatar MOD confirmed no human casualties from the drone strike on the energy facility."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/qatarenergy-worlds-largest-lng-firm-halts-production-after-iran-attacks"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/02/qatars-state-owned-energy-company-halts-lng-production-after-iran-drone-attacks.html"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/energy/general/qatar-says-2-drones-from-iran-target-energy-sites/55084"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/gulf/qatar/qatar-shoots-down-two-iranian-su-24-jets-intercepts-missiles-1.500461182"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/02/03/2026/qatarenergy-to-stop-lng-production-following-iranian-attacks"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live/live-us-and-israel-attack-iran"
                    },
                    {
                            "name": "Eurasian Times",
                            "url": "https://www.eurasiantimes.com/historic-kill-qatar-shoots-down-two-iranian-su-24-fighter-bombers-after-tehrans-massive-strikes-on-energy-facility/"
                    },
                    {
                            "name": "France24 / AFP",
                            "url": "https://www.france24.com/en/live-news/20260302-qatar-downs-iran-warplanes-halts-lng-production-as-gulf-crisis-deepens"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/war-widens-as-israel-us-strike-iran-and-clash-with-hezbollah"
                    },
                    {
                            "name": "QNA (Qatar)",
                            "url": "https://qna.org.qa/en/News-Area/News/2026-3/2/qatar-shoots-down-two-iranian-jets-intercepts-12-missiles-and-drones"
                    },
                    {
                            "name": "The National (UAE)",
                            "url": "https://www.thenationalnews.com/business/energy/2026/03/02/qatar-halts-gas-output-after-iran-strikes-top-facility/"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-02/qatar-stops-lng-production-at-world-s-top-plant-after-attack"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/world/gulf/qatarenergy-stops-lng-production-after-attacks-on-ras-laffan-mesaieed-facilities"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Mesaieed Industrial City (Power Plant Strike)",
            "lat": 25.0064,
            "lng": 51.5547,
            "country": "Qatar",
            "city": "Mesaieed",
            "severity": "critical",
            "icon": "⚡",
            "type": "Energy Infrastructure Strike",
            "detail": "Iranian drone struck a water storage tank at Mesaieed Energy power plant on March 2. Qatar MOD confirmed the strike; no human casualties reported. QatarEnergy halted production citing attacks on both Mesaieed and Ras Laffan facilities. March 2: Iranian drone struck a water storage tank at Mesaieed Energy power plant. No casualties. QatarEnergy halted operations at Mesaieed facilities. Qatar MOD confirmed drone targeted a water tank at a Mesaieed power plant on March 2. QatarEnergy has ceased all LNG production. On March 2, Qatar Defence Ministry confirmed an Iranian drone targeted a water tank at a Mesaieed power plant. QatarEnergy ceased all LNG production across both Mesaieed and Ras Laffan. March 2: Drone confirmed to have struck water storage tank at power plant. QatarEnergy shut down all LNG production across both Mesaieed and Ras Laffan. No casualties.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Iranian drone targeted and hit water storage tank belonging to Mesaieed Energy power plant. No casualties reported; damage assessment underway."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar MoD confirmed an Iranian drone targeted a water storage tank belonging to the Mesaieed Energy power plant. No human casualties reported. QatarEnergy ceased production at Mesaieed facilities."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Qatar Defence Ministry confirmed an Iranian drone targeted a water tank belonging to a power plant in Mesaieed. QatarEnergy subsequently ceased all LNG production at Mesaieed and Ras Laffan. No casualties reported."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "QatarEnergy confirmed cessation of all LNG and associated products production due to military attacks. Drone struck water storage tank at Mesaieed power plant. No human casualties reported. Qatar MOD confirmed damage assessment underway."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/qatarenergy-worlds-largest-lng-firm-halts-production-after-iran-attacks"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/qatar-says-2-drones-from-iran-target-energy-sites/3846468"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/02/03/2026/iran-drones-target-mesaieed-power-plant-qatarenergy-ras-laffan-facility-ministry-of-defense"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/world/gulf/qatar-reports-2-drone-attacks-targeting-energy-facilities-no-casualties"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/war-widens-as-israel-us-strike-iran-and-clash-with-hezbollah"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/world/gulf/qatarenergy-stops-lng-production-after-attacks-on-ras-laffan-mesaieed-facilities"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/energy/general/qatar-says-2-drones-from-iran-target-energy-sites/55084"
                    },
                    {
                            "name": "The Aviationist",
                            "url": "https://theaviationist.com/2026/03/02/qatar-shot-down-two-iranian-su-24s/"
                    },
                    {
                            "name": "France24 / AFP",
                            "url": "https://www.france24.com/en/live-news/20260302-qatar-downs-iran-warplanes-halts-lng-production-as-gulf-crisis-deepens"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/economy/2026/3/2/why-qatarenergys-lng-production-halt-could-shake-up-global-gas-markets"
                    },
                    {
                            "name": "Eurasian Times",
                            "url": "https://www.eurasiantimes.com/historic-kill-qatar-shoots-down-two-iranian-su-24-fighter-bombers-after-tehrans-massive-strikes-on-energy-facility/"
                    },
                    {
                            "name": "Qatar Tribune",
                            "url": "https://www.qatar-tribune.com/article/222248/latest-news/qatarenergy-stops-production-oflng-following-attacks-on-its-facilities"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

    // ═══════════════════════════════════════════════════════════
    // Kuwait
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Ali Al Salem Air Base",
            "lat": 29.3467,
            "lng": 47.5211,
            "country": "Kuwait",
            "city": "Jahra Governorate",
            "severity": "critical",
            "icon": "🎯",
            "type": "Coalition Air Base — Major Missile Strike",
            "detail": "Coalition air base hosting US, Kuwaiti, and Italian forces. Suffered the most visually confirmed damage outside the UAE. Chinese satellite imagery showed at least 4 direct impact sites, massive smoke plume visible from space. Hangars, runway, fuel depots extensively destroyed. Italy confirmed 'significant damage to the runway.' 3 Kuwaiti soldiers injured. Kuwait defense ministry confirmed 3 soldiers injured with minimal material damage. Kuwait intercepted 97 ballistic missiles and 283 drones total. On March 2, Kuwait air defenses engaged a new wave of hostile drones approaching from maritime routes. The majority were shot down per state media. Early March 2: Kuwait state media reported new drone interceptions approaching via maritime routes, suggesting evolving Iranian tactics. On March 2, a fighter jet crashed within 10km of the base (pilot ejected safely). Kuwait air defenses intercepted hostile drones at dawn approaching via maritime routes. March 2 dawn: Kuwait Army confirmed air defense forces intercepted hostile drones approaching centrally via maritime routes. Multiple US F-15E aircraft crashed nearby (cause under investigation). March 2: CENTCOM confirmed 4th US service member died from injuries sustained in Iran's initial attacks on Kuwait. 'Major combat operations continue.'",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Multiple Iranian ballistic missiles struck the base. At least 4 confirmed impact sites per satellite imagery. Hangars, runway, fuel depots destroyed. 3 Kuwaiti soldiers injured."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Satellite images released showing extensive destruction. Smoke plume extended many kilometers."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Kuwait defense ministry confirmed 3 soldiers sustained minor injuries and minimal material damage from Iranian ballistic missile attack. Operational readiness unaffected. Kuwait intercepted 97 ballistic missiles and 283 drones total."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Kuwait air defenses intercepted hostile drones approaching via 'maritime routes' early Monday local time. Kuwaiti Air Defense forces shot down 'the majority' of incoming drones (CNN/Kuwait state media KUNA). No confirmed ground impacts reported."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Fighter jet (consistent with F-15E/F-18) crashed within 10km of base; pilot ejected; CNN geolocated crash site near Al Jahra. Kuwait state media reported dawn interceptions of hostile drones approaching via maritime routes."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Kuwait Air Defence Force intercepted 'a number of hostile aerial targets at dawn' approaching via maritime routes over central Kuwait. No casualties reported from interceptions. Separately, several US F-15E aircraft crashed nearby (~10km west); cause under investigation."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirmed 4th US service member killed in action at 7:30 AM ET — succumbed to injuries from Iran's initial attacks in Kuwait. Total: 4 US KIA, 4+ seriously wounded in Kuwait."
                    }
            ],
            "sources": [
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-02-28/kuwait-air-base-attacked-20903985.html"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/02/28/-significant-damage-to-runway-at-kuwait-base-hosting-italian-troops-italy-"
                    },
                    {
                            "name": "Kuwait Times",
                            "url": "https://kuwaittimes.com/article/40361/kuwait/war-hits-home/"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/kuwait-says-3-soldiers-injured-by-iran-missile-strike/"
                    },
                    {
                            "name": "France 24",
                            "url": "https://www.france24.com/en/middle-east/20260228-what-we-know-about-us-military-bases-mideast-gulf-targeted-iran-retaliatory-strikes"
                    },
                    {
                            "name": "Breaking Defense",
                            "url": "https://breakingdefense.com/2026/03/iran-attacks-uae-saudi-missiles-drones-gcc-air-defense/"
                    },
                    {
                            "name": "CNN (Live Updates Mar 2)",
                            "url": "https://www.cnn.com/world/live-news/us-israel-iran-attack-03-01-26-intl"
                    },
                    {
                            "name": "CNN Live Updates",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Free Press Journal",
                            "url": "https://www.freepressjournal.in/world/us-embassy-in-kuwait-allegedly-attacked-by-iranian-drone-f-15-fighter-jet-crashes-amid-rising-middle-east-tensions-videos"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/news/breaking-us-fighter-jet-crashes-kuwait"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/news/iran-military-operation-american-service-members-killed-centcom/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Kuwait International Airport (KWI)",
            "lat": 29.2266,
            "lng": 47.9689,
            "country": "Kuwait",
            "city": "Farwaniya",
            "severity": "critical",
            "icon": "✈️",
            "type": "International Airport — Drone Strike, 12 Injured",
            "detail": "Kuwait's primary international airport. Struck by Iranian Shahed drone causing injuries to 12 people and material damage to Terminal 1. A second drone also hit the Terminal 2 construction project. Airport operations suspended. Terminal 1 sustained damage. Kuwait Health Ministry reported 1 killed and 32 wounded nationwide from Iranian attacks.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Drone struck Terminal 1 — 12 injured across multiple hospitals. Material damage to passenger terminal."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Second drone targeted Terminal 2 construction site — limited material damage."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Drone struck Terminal 1, causing material damage and injuring several employees. Kuwait Health Ministry reported 1 civilian killed and 32 wounded nationwide from Iranian strikes on Sunday."
                    }
            ],
            "sources": [
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/drone-targets-kuwait-international-airport-amid-us-israeli-war-with-iran/3843805"
                    },
                    {
                            "name": "Airways Magazine",
                            "url": "https://www.airwaysmag.com/new-post/drone-strike-damages-kuwait-airport-terminal-1"
                    },
                    {
                            "name": "Kuwait Times",
                            "url": "https://kuwaittimes.com/article/40361/kuwait/war-hits-home/"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/israel-iran-live-updates-rcna261099"
                    },
                    {
                            "name": "Al Jazeera Tracker",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Camp Buehring, Kuwait",
            "lat": 29.3922,
            "lng": 47.4946,
            "country": "Kuwait",
            "city": "Udairi Range",
            "severity": "critical",
            "icon": "🎯",
            "type": "US Military Base — Confirmed Strike, US KIA",
            "detail": "Three US Army soldiers from a sustainment unit were killed and five seriously wounded in an Iranian drone strike at Camp Buehring in northwestern Kuwait on March 1. CENTCOM confirmed the casualties. Additional troops sustained minor shrapnel injuries and concussions. CENTCOM confirmed March 1 that three US service members were killed and five seriously wounded — the first US combat fatalities in Operation Epic Fury. Identified as part of a sustainment unit in Kuwait. CENTCOM confirmed 3 US Army soldiers killed and 5 seriously wounded. Soldiers were part of an Army sustainment unit based at Camp Buehring. Video confirmed Iranian Arash-2 pattern kamikaze drone impact. Mar 2 UPDATE: CENTCOM confirms total of 6 US service members killed. Defense Secretary Hegseth confirmed 4 died when Iranian munition hit tactical operations center. Remains of 2 additional service members recovered from struck facility.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Iranian drone strike killed 3 US Army soldiers and seriously wounded 5 others at Camp Buehring. CENTCOM confirmed first US combat deaths of Operation Epic Fury."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "CENTCOM confirmed three US service members killed in action and five seriously wounded during Iranian attacks. WaPo identified them as part of a sustainment unit in Kuwait. First US combat deaths of Operation Epic Fury."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "CENTCOM confirmed 3 US Army soldiers from sustainment unit were killed and 5 seriously wounded in Iranian drone strike at Camp Buehring. Video shows Iranian Arash-2 kamikaze drone impacting a vehicle on base (CBS, AP, Al Jazeera)."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirms US death toll at this facility has risen to 6 total KIA. Defense Secretary Hegseth revealed 4 were killed when incoming munition hit a tactical operations center. CENTCOM recovered remains of 2 additional previously unaccounted-for service members from the struck facility."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/us-israel-iran-attack-03-01-26-intl"
                    },
                    {
                            "name": "Washington Post",
                            "url": "https://www.washingtonpost.com/world/2026/03/01/trump-iran-israel-khamenei-strikes-live-updates/"
                    },
                    {
                            "name": "UPI",
                            "url": "https://www.upi.com/Top_News/World-News/2026/03/01/kuwait-us-troops-killed-in-iranian-strike/3671772394271/"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbs17.com/news/national-news/us-service-members-in-kuwait-were-killed-in-military-operation-against-iran/"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/01/nx-s1-5731365/us-israeli-strikes-region"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/news/iran-military-operation-american-service-members-killed-centcom/"
                    },
                    {
                            "name": "Al Jazeera (Drone Strike Video)",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/3/1/iranian-drone-strikes-us-military-facility-in-kuwait"
                    },
                    {
                            "name": "The Maritime Executive",
                            "url": "https://maritime-executive.com/article/three-u-s-servicemembers-killed-in-iranian-strikes-on-kuwait"
                    },
                    {
                            "name": "ABC News",
                            "url": "https://abcnews.com/International/live-updates/iran-live-updates-israel-launches-preemptive-strike-iran/?id=130301492"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-day-3-american-deaths-israel-gulf-allies-hit-missile-strikes/"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "US Embassy Area (Hawalli), Kuwait City",
            "lat": 29.2858,
            "lng": 48.0575,
            "country": "Kuwait",
            "city": "Kuwait City",
            "severity": "critical",
            "icon": "🏛️",
            "type": "Embassy Area / Debris Zone",
            "detail": "AFP photos show smoke rising from the area near the US Embassy in Kuwait City on March 2. Kuwait's air defenses intercepted hostile drones near Rumaithiya and Salwa neighborhoods in Hawalli Governorate where the embassy is located. US Embassy issued security alert urging people to stay away. Firefighters and ambulances were seen in the area. March 2: Reuters witness and AFP photos confirm smoke rising near US Embassy area. Active air defense interceptions ongoing over central Kuwait. March 2: Smoke seen near US Embassy. Kuwaiti air defenses intercepted hostile drones at dawn near Rumaithiya and Salwa neighborhoods in Hawalli Governorate. Kuwait Civil Defense confirmed explosions heard in residential areas were from successful interceptions. March 2: AP confirmed fire and smoke inside embassy compound after Iranian attack. No confirmed casualties. Embassy warned of continuing threat and ordered shelter-in-place. March 2: Fire and black smoke from inside US Embassy compound. CBS News reported 'apparent Iranian missile strike.' Embassy closed and issued emergency shelter-in-place. No immediate casualty reports but compound visibly damaged. March 2: Smoke confirmed near US Embassy compound. Embassy closed. US warned of 'continuing threat of missile and UAV attacks' and urged Americans to take cover. Mar 2: Large fire confirmed inside US Embassy compound from suspected Iranian drone. No injuries. Embassy had pre-emptively ordered staff to residences. All appointments canceled until further notice.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Smoke and interception debris near US Embassy in Hawalli; Kuwait intercepted hostile drones at dawn; US Embassy issued shelter-in-place alert"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Reuters witness reported smoke rising from the vicinity of the US Embassy in Kuwait City on March 2. AFP photo shows smoke in the embassy area. Kuwait air defenses were active intercepting hostile drones over central Kuwait at dawn."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Loud bangs and sirens heard in Kuwait early Monday morning; Reuters witness reports smoke seen rising near the US embassy. Kuwaiti Air Defense intercepted hostile drones approaching via maritime routes near Rumaithiya and Salwa neighborhoods in Hawalli Governorate. No injuries reported from interception operations."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "AP video confirmed fire and smoke inside the US Embassy compound after Iranian attack Monday morning. Embassy issued shelter-in-place alert: 'Do not come to the embassy. There is a continuing threat of missile and UAV attacks over Kuwait.' Embassy did not confirm direct projectile hit; fire may be from interception debris."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Fire and smoke rose from inside US Embassy compound after apparent Iranian attack. Embassy issued shelter-in-place alert warning Americans to stay away. Heavy security, ambulance and fire truck presence. No confirmed casualties."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Smoke seen rising from near the US Embassy in Kuwait City on March 2 morning. AFP/Reuters photos confirm smoke. US Embassy closed and warned of 'continuing threat of missile and UAV attacks,' urging Americans to shelter in place."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN Live Updates",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Times of Israel Liveblog (AFP photo)",
                            "url": "https://www.timesofisrael.com/liveblog-march-02-2026/"
                    },
                    {
                            "name": "The Nightly (Australia)",
                            "url": "https://thenightly.com.au/politics/australia/australian-news-and-politics-live-wong-says-us-israel-will-need-to-explain-legal-basis-for-iran-strikes-c-21800817"
                    },
                    {
                            "name": "KUNA (Kuwait News Agency)",
                            "url": "https://www.kuna.net.kw/ArticleDetails.aspx?id=3278534&language=en"
                    },
                    {
                            "name": "Reuters (via Al-Monitor)",
                            "url": "https://www.al-monitor.com/originals/2026/03/kuwait-intercepts-hostile-drones-third-day-iran-retaliatory-strikes"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "AP via ABC News",
                            "url": "https://abcnews.com/International/wireStory/fire-smoke-inside-us-embassy-compound-kuwait-after-130667966"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/drones-hit-saudi-ras-tanura-refinery-as-iran-strikes-targets-across-region"
                    },
                    {
                            "name": "ABC News / AP",
                            "url": "https://abcnews.com/International/wireStory/saudi-arabia-intercepted-drones-targeting-ras-tanura-oil-130667464"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-day-3-american-deaths-israel-gulf-allies-hit-missile-strikes/"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/02/g-s1-112151/iran-war-widens-threatens-to-engulf-lebanon"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/middle-east/live-blog/live-updates-iran-war-israel-us-hezbollah-lebanon-khamenei-trump-rcna261259"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/kuwait-says-several-us-warplanes-crashed-in-the-country-all-crew-survived/"
                    },
                    {
                            "name": "PBS NewsHour",
                            "url": "https://www.pbs.org/newshour/world/live-updates-u-s-israel-conflict-with-iran-widens"
                    },
                    {
                            "name": "ABC News",
                            "url": "https://abcnews.com/International/live-updates/iran-live-updates-israel-launches-preemptive-strike-iran/?id=130301492"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Mina Al-Ahmadi Refinery (Shrapnel Impact), Kuwait",
            "lat": 29.0608,
            "lng": 48.1501,
            "country": "Kuwait",
            "city": "Al-Ahmadi",
            "severity": "high",
            "icon": "🛢️",
            "type": "Oil Refinery / Debris Impact",
            "detail": "Falling shrapnel from interceptions hit Kuwait's Mina Al-Ahmadi petroleum plant on March 2 morning, injuring two workers who were transferred to hospital with minor injuries. Confirmed by KUNA (state news agency). March 2: KUNA confirmed major oil refinery struck by shrapnel from dawn air defense interceptions.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Interceptor debris/shrapnel fell on Mina Al-Ahmadi refinery; 2 workers wounded with minor injuries"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "State-run Kuwait News Agency reported a major oil refinery was hit by falling shrapnel from air defense interceptions during dawn March 2 operations."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN (citing KUNA)",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "The Nightly (Australia)",
                            "url": "https://thenightly.com.au/politics/australia/australian-news-and-politics-live-wong-says-us-israel-will-need-to-explain-legal-basis-for-iran-strikes-c-21800817"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "F-15E Crash Site, Al Jahra District, Kuwait",
            "lat": 29.33,
            "lng": 47.6,
            "country": "Kuwait",
            "city": "Al Jahra",
            "severity": "high",
            "icon": "🎯",
            "type": "Military Aircraft Crash (Under Investigation)",
            "detail": "Kuwait's Ministry of Defense confirmed 'several United States military aircraft crashed' on Monday March 2 with all crew surviving. CNN geolocated video of an F-15E Strike Eagle crashing within 10km of Ali Al Salem Air Base near Al Jahra. Crew ejected safely and were recovered by Kuwaiti forces. Cause remains under investigation — Iran claims shootdown, some analysts suspect friendly fire. Kuwait's Defence Ministry later confirmed 'several' US warplanes crashed in the country, with all crew surviving. This is an escalation from the initial single F-15E crash report. Kuwait MOD confirmed 'several' US warplanes crashed (not just one), all crew survived. Friendly fire confirmed for at least one F-15. Crews stable after hospital evaluation. CENTCOM confirmed 3 F-15E Strike Eagles (not 1) were shot down by Kuwaiti air defenses in friendly fire incident. Confirmed crash debris in Al Jahra district. All 6 crew survived. First confirmed air-to-air friendly fire incident of the conflict. CENTCOM officially confirmed 3 F-15Es downed by Kuwaiti air defenses in friendly fire at 11:03 PM ET Mar 1. All 6 crew ejected safely. Investigation underway. Mar 2: CENTCOM confirmed friendly fire — 3 F-15Es shot down by Kuwaiti air defenses during active combat. All 6 aircrew safe. Kuwait acknowledged incident. Shows chaotic nature of air defense operations under sustained Iranian barrage.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Multiple US F-15E Strike Eagles crash west of Al Jahra, Kuwait. Kuwait MOD confirms all crew survived. Pilots ejected safely and were recovered by locals then transferred to Kuwaiti authorities. Cause under investigation."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Kuwait's Defence Ministry confirmed 'several' US fighter jets crashed in Kuwait (not just one); all crew members survived. Unconfirmed reports suggest possible friendly fire incident (Al Jazeera, Euronews)"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Kuwait Defense Ministry confirmed 'several' US warplanes crashed Monday morning, not just one. All crew members survived and were evacuated to hospital. US official confirmed at least one F-15 downed by apparent friendly fire. Al Jazeera reported footage showing at least two separate crash instances."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirmed 3 US F-15E Strike Eagles were mistakenly shot down by Kuwaiti air defenses during Operation Epic Fury amid Iranian aircraft, ballistic missile, and drone attacks. All 6 aircrew ejected safely and are in stable condition. Crash occurred at 11:03 PM ET March 1."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM officially confirmed three US F-15E Strike Eagles were shot down at 11:03 PM ET March 1 by Kuwaiti air defenses in a friendly fire incident during active Iranian attacks. All six aircrew ejected safely and are in stable condition. CNN geolocated one crash within 10 km of Ali Al Salem base. Kuwait acknowledged the incident."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirms 3 US F-15E Strike Eagles 'mistakenly shot down by Kuwaiti air defenses' during active combat involving Iranian aircraft, ballistic missiles and drones. All 6 aircrew ejected safely, recovered in stable condition. Kuwait acknowledged the incident."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/2026/03/02/world/video/kuwait-fighter-jets-down-al-jahra-hnk-digvid"
                    },
                    {
                            "name": "CNN Live Updates",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/news/breaking-us-fighter-jet-crashes-kuwait"
                    },
                    {
                            "name": "Türkiye Today",
                            "url": "https://www.turkiyetoday.com/region/us-f-15-crashes-in-kuwait-3215419"
                    },
                    {
                            "name": "Al Jazeera (several US jets crash in Kuwait)",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "Euronews (F-15E crash, friendly fire reports)",
                            "url": "https://www.euronews.com/2026/03/02/drones-hit-saudi-ras-tanura-refinery-as-iran-strikes-targets-across-region"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/02/us-iran-live-updates-trump-oil-gold.html"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-day-3-american-deaths-israel-gulf-allies-hit-missile-strikes/"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/war-widens-as-israel-us-strike-iran-and-clash-with-hezbollah"
                    },
                    {
                            "name": "US CENTCOM",
                            "url": "https://www.centcom.mil/MEDIA/PRESS-RELEASES/Press-Release-View/Article/4418568/three-us-f-15s-involved-in-friendly-fire-incident-in-kuwait-pilots-safe/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/2026/03/02/middleeast/us-kuwait-aircraft-crash-iran-intl-hnk"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/news/us-f-15-jets-mistakenly-shot-down-kuwait-riendly-fire-crew-safe/"
                    },
                    {
                            "name": "Axios",
                            "url": "https://www.axios.com/2026/03/02/3-us-fighter-jets-friendly-fire-kuwait"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Rumaithiya / Salwa Neighborhoods (Drone Interceptions), Kuwait",
            "lat": 29.305,
            "lng": 48.075,
            "country": "Kuwait",
            "city": "Kuwait City (Hawalli Governorate)",
            "severity": "watchlist",
            "icon": "💥",
            "type": "Drone interception zone",
            "detail": "On March 2, Kuwait's civil defense confirmed that air defense forces intercepted the majority of hostile drones approaching the country via maritime routes near the Rumaithiya and Salwa areas in Hawalli Governorate. No injuries reported. Residents heard loud explosions from successful interception operations.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Kuwaiti air defenses intercepted majority of hostile sea-launched drones near Rumaithiya and Salwa neighborhoods; no injuries; explosions heard in residential areas from intercepts"
                    }
            ],
            "sources": [
                    {
                            "name": "Reuters via Al-Monitor",
                            "url": "https://www.al-monitor.com/originals/2026/03/kuwait-intercepts-hostile-drones-third-day-iran-retaliatory-strikes"
                    },
                    {
                            "name": "Kuwait Times",
                            "url": "https://kuwaittimes.com/article/40432/kuwait/kuwait-air-defense-intercepts-drones-near-rumaithiya-salwa-neighborhoods/"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/02/03/2026/live-updates:-rising-concerns-as-missiles-continue-to-be-intercepted-across-gulf-"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Shuaiba Port (US Tactical Operations Center Strike)",
            "lat": 29.0374,
            "lng": 48.1564,
            "country": "Kuwait",
            "city": "Shuaiba",
            "severity": "critical",
            "icon": "⚓",
            "type": "Direct Iranian strike on US military facility",
            "detail": "Six US service members killed when an Iranian projectile scored a direct hit on a makeshift tactical operations center at the civilian port of Shuaiba on Sunday morning local time. Defense Secretary Hegseth confirmed one projectile penetrated air defenses and struck a fortified triple-wide trailer used as an operations center. No warning or siren preceded the strike. CENTCOM confirmed the death toll rose to 6 on Monday afternoon after two additional remains were recovered.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Iranian projectile (suspected drone) directly struck a US Army sustainment unit's makeshift tactical operations center at Shuaiba Port. 6 US service members killed. Defense Secretary Hegseth confirmed one projectile got through air defenses."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/02/politics/six-soldiers-killed-in-iranian-strike-kuwait"
                    },
                    {
                            "name": "CNN Live",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "KVIA (CNN Wire)",
                            "url": "https://kvia.com/politics/cnn-us-politics/2026/03/02/no-warning-no-siren-six-us-service-members-killed-in-iranian-strike-that-hit-makeshift-operations-center-in-kuwait/"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

    // ═══════════════════════════════════════════════════════════
    // Saudi Arabia
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Prince Sultan Air Base (PSAB)",
            "lat": 24.0627,
            "lng": 47.5805,
            "country": "Saudi Arabia",
            "city": "Al Kharj",
            "severity": "critical",
            "icon": "🎯",
            "type": "US/Saudi Air Base — Missile & Drone Strike",
            "detail": "Major US military air base ~60 km south of Riyadh. Hosts US THAAD, Patriot, KC-135 tankers, E-3G AWACS. IRGC claimed they 'precisely hit' the base. Saudi Arabia said air defenses intercepted missiles near the base. Reports confirm impacts on base infrastructure.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "IRGC launched ballistic missiles and drones at the base. Iran state media confirmed targeting PSAB."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Saudi air defenses intercepted Iranian missiles near Prince Sultan Airbase in second wave."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/02/28/saudi-arabia-says-reserves-right-of-response-after-iran-attacks-riyadh-east"
                    },
                    {
                            "name": "Military Watch Magazine",
                            "url": "https://militarywatchmagazine.com/article/iran-ballistic-missile-strike-us-bases"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5245738-saudi-arabia-strongly-condemns-failed-cowardly-iranian-attacks-targeting-riyadh-and"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "King Khalid International Airport (Riyadh)",
            "lat": 24.9576,
            "lng": 46.6988,
            "country": "Saudi Arabia",
            "city": "Riyadh",
            "severity": "high",
            "icon": "✈️",
            "type": "International Airport — Missile Intercepted Nearby",
            "detail": "Riyadh's main international airport. Saudi Arabia confirmed Iranian missiles targeted the capital region. Air defenses intercepted projectiles near the airport. No disruption to navigation or casualties reported.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian missiles targeted Riyadh region. Saudi air defenses intercepted projectiles near King Khalid International Airport."
                    }
            ],
            "sources": [
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/saudi-arabia-intercepts-missile-attacks-on-airport-base-report/"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/saudi-arabia-strongly-condemns-iranian-missile-attacks-targeting-riyadh-eastern-province/3843752"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5245738-saudi-arabia-strongly-condemns-failed-cowardly-iranian-attacks-targeting-riyadh-and"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Saudi Eastern Province (Aramco Region)",
            "lat": 26.3927,
            "lng": 49.984,
            "country": "Saudi Arabia",
            "city": "Dhahran/Dammam",
            "severity": "high",
            "icon": "🛢️",
            "type": "Oil Infrastructure — Confirmed Iranian Targeting",
            "detail": "Home to virtually all major Aramco facilities. A Saudi official stated: 'missiles targeting Aramco come from the north, not Yemen' — directly attributing to Iran. Saudi MOD said air defenses intercepted the projectiles.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iran launched missiles at Saudi Eastern Province. Saudi official attributed Aramco attacks to Iran. Air defenses engaged."
                    }
            ],
            "sources": [
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/energy/energy-security/iran-responsible-for-aramco-attack-says-saudi-official/26714"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/02/28/saudi-arabia-says-reserves-right-of-response-after-iran-attacks-riyadh-east"
                    },
                    {
                            "name": "Breaking Defense",
                            "url": "https://breakingdefense.com/2026/03/iran-attacks-uae-saudi-missiles-drones-gcc-air-defense/"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Aramco Abqaiq Processing Facility",
            "lat": 25.9375,
            "lng": 49.6878,
            "country": "Saudi Arabia",
            "city": "Abqaiq",
            "severity": "watchlist",
            "icon": "🛢️",
            "type": "World's Largest Oil Processing — Previously Attacked",
            "detail": "Processes ~7 million bpd — roughly 7% of global supply. Previously attacked by Iran-linked drones in Sept 2019, temporarily halving Saudi oil output. A prime escalation target.",
            "incidents": [
                    {
                            "date": "2019-09-14",
                            "text": "Iran-linked drone and cruise missile strike knocked out 5.7 million bpd of Saudi production."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Saudi placed all critical energy infrastructure on highest alert."
                    }
            ],
            "sources": [
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/02/28/nx-s1-5678603/iran-strikes-oil-energy-markets"
                    }
            ],
            "dateAdded": "2026-02-28"
    },
    {
            "name": "Aramco Ras Tanura Refinery (Drone Strike)",
            "lat": 26.64,
            "lng": 50.15,
            "country": "Saudi Arabia",
            "city": "Ras Tanura",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Oil Facility Strike",
            "detail": "An Iranian Shahed-136 drone struck Saudi Aramco's Ras Tanura refining facility on March 2 morning, sparking a fire that was described as small and contained. Aramco halted refinery operations as a precautionary measure. No casualties reported. Refinery shut down as precautionary measure Monday. Saudi MOD says two drones intercepted; debris caused small, contained fire. 550,000 bpd facility halted, impacting crude exports. Analysts call this a 'significant escalation' targeting Gulf energy infrastructure. March 2: Two drones intercepted targeting refinery; debris fire. Saudi Arabia shut down some operational units. Saudi state TV confirmed temporary refinery shutdown. March 2: Saudi energy ministry confirmed partial shutdown of refinery operations. Officials clarified the fire was caused by debris from an intercepted Iranian missile, not a direct drone strike as initially reported. Saudi state TV confirmed temporary shutdown of Ras Tanura refinery on March 2 after drone debris from interception caused a contained fire. Mar 2: Saudi state TV confirmed temporary shutdown of refinery following drone attack. MOD: 2 drones intercepted, debris caused small fire, no casualties. Saudi state TV confirmed Ras Tanura refinery (550,000 bpd capacity) temporarily shut down on March 2 after drone interception debris caused a fire. Saudi MOD confirmed 2 drones intercepted.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Iranian drone struck Ras Tanura refinery causing fire; Aramco shut down operations as precautionary measure"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Saudi Aramco shut down the 550,000 bpd Ras Tanura refinery as a precautionary measure after Iranian drones targeted the facility. Saudi MOD said two drones were intercepted and debris caused a small, contained fire. No casualties reported. Brent crude surged to ~$80/barrel on the news."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Saudi MoD reported two drones 'attempted to attack' the Ras Tanura refinery; both intercepted and destroyed. Debris caused a 'small' fire. Saudi Energy Ministry confirmed some operational units shut down as a precautionary measure. Reuters reported refinery production suspended."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Saudi energy ministry formally confirmed partial operational shutdown of Ras Tanura refinery following attack that caused a fire. Fire was brought under control. Saudi officials clarified damage was from intercepted Iranian missile debris, not a direct drone strike."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Saudi state TV confirmed authorities temporarily shut down Ras Tanura refinery near Dammam. Saudi MOD said two drones intercepted; debris caused small contained fire. No civilian casualties reported."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Saudi authorities temporarily shut down Ras Tanura refinery near Dammam after drone attack. Saudi MOD said two drones attempting to attack were intercepted and destroyed; small debris fire resulted. No civilian casualties reported."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Saudi state television confirmed authorities temporarily shut down the Ras Tanura refinery (550,000 bpd capacity) after a fire broke out from debris during interception of attacking drones. Saudi MOD said two drones were intercepted and destroyed, with a 'small' fire resulting from falling debris. No civilian casualties."
                    }
            ],
            "sources": [
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-02/saudi-arabia-s-ras-tanura-refinery-shuts-down-after-drone-attack"
                    },
                    {
                            "name": "Reuters (via Ynetnews)",
                            "url": "https://www.ynetnews.com/article/r6m4n4jxc"
                    },
                    {
                            "name": "Times of Israel Liveblog",
                            "url": "https://www.timesofisrael.com/liveblog-march-02-2026/"
                    },
                    {
                            "name": "Reuters (via Business Recorder)",
                            "url": "https://www.brecorder.com/news/40409699/saudi-aramcos-ras-tanura-refinery-hit-by-drone-shut-as-precautionary-measure"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/blasts-shake-qatar-uae-kuwait-as-irans-retaliatory-strikes-continue"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/business/2026/03/02/saudi-aramco-shuts-down-ras-tanura-refinery-following-drone-attack/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/02/g-s1-112151/iran-war-widens-threatens-to-engulf-lebanon"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/02/03/2026/live-updates:-rising-concerns-as-missiles-continue-to-be-intercepted-across-gulf-"
                    },
                    {
                            "name": "ABC News (AP)",
                            "url": "https://abcnews.com/International/wireStory/saudi-arabia-intercepted-drones-targeting-ras-tanura-oil-130667464"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

    // ═══════════════════════════════════════════════════════════
    // Oman
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Duqm Port",
            "lat": 19.6753,
            "lng": 57.7035,
            "country": "Oman",
            "city": "Duqm",
            "severity": "critical",
            "icon": "💥",
            "type": "Omani Port — Struck by 2 Iranian Drones",
            "detail": "Major Omani port on the Arabian Sea coast. Targeted by 2 Iranian drones on Mar 1. One struck foreign workers' residences, injuring 1. Iran FM claimed 'not our choice.' This shatters Oman's traditional neutrality. Oman News Agency confirmed two drones hit Duqm port on March 1, injuring one expatriate worker. First attack on Oman. GCC condemned the strike on the mediator state.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "2 Iranian drones targeted Duqm Port. One struck foreign workers' residences — 1 injured. Oman neutrality compromised."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Oman News Agency confirmed Duqm commercial port was struck by two drones. One expatriate worker injured. First attack on Oman, which had been mediating US-Iran talks. Condemned by the Gulf Cooperation Council."
                    }
            ],
            "sources": [
                    {
                            "name": "Jerusalem Post",
                            "url": "https://www.jpost.com/middle-east/iran-news/article-888422"
                    },
                    {
                            "name": "UAE MOFA",
                            "url": "https://www.mofa.gov.ae/en/MediaHub/News/2026/3/1/UAE-Oman"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/1/more-blasts-rock-dubai-doha-and-manama-as-iran-targets-us-assets-in-gulf"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2794562-tanker-hit-near-hormuz-strait-as-iran-conflict-widens"
                    }
            ],
            "dateAdded": "2026-03-01"
    },
    {
            "name": "Strait of Hormuz — Tanker SKYLIGHT (off Khasab, Oman)",
            "lat": 26.25,
            "lng": 56.27,
            "country": "Oman",
            "city": "Khasab (Musandam)",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Iranian strike on oil tanker in Strait of Hormuz",
            "detail": "Palau-flagged oil tanker SKYLIGHT struck approximately 5 nautical miles north of Khasab Port in Oman's Musandam Governorate on March 1. All 20 crew (15 Indian, 5 Iranian nationals) evacuated; four sustained injuries. Iranian state TV claimed tanker was sinking. This was the first confirmed attack on a commercial vessel in the Strait of Hormuz during this conflict.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Oil tanker SKYLIGHT struck 5nm north of Khasab port. 20 crew evacuated, 4 injured. Iranian state TV claimed tanker sinking after attempting to pass through Strait of Hormuz."
                    }
            ],
            "sources": [
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/business/2026/03/01/first-oil-tanker-attacked-in-the-strait-of-hormuz-according-to-oman"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2794562-tanker-hit-near-hormuz-strait-as-iran-conflict-widens"
                    },
                    {
                            "name": "Middle East Monitor",
                            "url": "https://www.middleeastmonitor.com/20260301-iran-confirms-attack-on-oil-tanker-for-defying-orders-not-to-cross-strait-of-hormuz/"
                    },
                    {
                            "name": "Fox News",
                            "url": "https://www.foxnews.com/world/strait-hormuz-maritime-incidents-follow-us-israeli-operation-epic-fury-strikes-iran"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Oil Tanker MKD VYOM (Drone Boat Attack off Muscat, Gulf of Oman)",
            "lat": 23.6,
            "lng": 59.5,
            "country": "Oman",
            "city": "Off Muscat Coast",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime — Drone Boat Attack on Tanker",
            "detail": "A bomb-laden unmanned boat exploded against the Marshall Islands-flagged oil tanker MKD VYOM, 52 nautical miles off Muscat Governorate in the Gulf of Oman on March 2. The attack caused a fire and explosion in the main engine room, killing one Indian crew member. All 20 crew evacuated; 4 injured.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Unmanned drone boat struck Marshall Islands-flagged tanker MKD VYOM off Muscat. Explosion in engine room killed 1 Indian crew member; 4 injured; 20 evacuated. Royal Navy of Oman monitoring."
                    }
            ],
            "sources": [
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-day-3-american-deaths-israel-gulf-allies-hit-missile-strikes/"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/middle-east/live-blog/live-updates-iran-war-israel-us-hezbollah-lebanon-khamenei-trump-rcna261259"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/02/war-widens-as-israel-us-strike-iran-and-clash-with-hezbollah"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

    // ═══════════════════════════════════════════════════════════
    // International Waters (Strait of Hormuz)
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Oil Tanker ATHE NOVA (IRGC Drone Strike, Strait of Hormuz)",
            "lat": 26.55,
            "lng": 56.25,
            "country": "International Waters (Strait of Hormuz)",
            "city": "Strait of Hormuz",
            "severity": "critical",
            "icon": "🛢️",
            "type": "IRGC drone strike on commercial tanker",
            "detail": "The IRGC claimed it struck the Honduran-flagged bitumen tanker ATHE NOVA with two drones in the Strait of Hormuz on March 2. The vessel, UAE-managed, was reported on fire and disabled. Maritime analytics firm Kpler and Reuters confirmed the attack. Part of IRGC's campaign to enforce declared closure of the Strait of Hormuz to all shipping.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "IRGC struck Honduran-flagged tanker ATHE NOVA with 2 drones in Strait of Hormuz. Vessel on fire and disabled per Reuters and maritime sources. IRGC described vessel as linked to US allies."
                    }
            ],
            "sources": [
                    {
                            "name": "Reuters via Al-Monitor",
                            "url": "https://www.al-monitor.com/originals/2026/03/fuel-tanker-ablaze-strait-hormuz-after-drone-strike-iran-revolutionary-guards-say"
                    },
                    {
                            "name": "The Maritime Executive",
                            "url": "https://maritime-executive.com/article/iran-claims-strike-on-iran-linked-bitumen-tanker"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/irans-revolutionary-guards-claim-drone-attack-on-oil-tanker-in-strait-of-hormuz/"
                    }
            ],
            "dateAdded": "2026-03-02"
    },

];
