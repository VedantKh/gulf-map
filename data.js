// ═══════════════════════════════════════════════════════════════
// Gulf Region — Iranian Strikes & Threats — Data
// Sources: UAE MOD/WAM, CENTCOM, Reuters, Al Arabiya, Gulf News,
//          CNN, Al Jazeera, France24, AP, Stars and Stripes,
//          Anadolu Agency, Breaking Defense, Military Watch Magazine
// Auto-updated by gulf-map-bot
// ═══════════════════════════════════════════════════════════════

const MAP_META = {
    "title": "Gulf Region — Iranian Strikes & Threats",
    "lastUpdated": "2026-03-04T17:34:56.610Z",
    "casualties": {
        "killed": 21,
        "injured": 176
    },
    "conflict": "Iran strikes on Gulf states, Feb 28 – Mar 2, 2026",
    "summary": "Day 5 of conflict: IRGC announced 17th wave of 'True Promise 4', claiming 230 drones fired at US bases in Erbil, Kuwait (Ali Al Salem, Camp Arifjan), and Bahrain (Isa Air Base). Attacks expanded deeper into Iraq, targeting Erbil US base/hotel, Sulaimaniyah, Baghdad Camp Victory, and Kurdish opposition camps. Qatar PM demanded Iran cease Gulf attacks; Iran's Araghchi claimed strikes target only US interests. Iran warned it will target 'all economic centres in the region' if US-Israeli attacks continue. Volume/frequency of Gulf attacks reportedly decreasing per Al Jazeera correspondent in Doha.",
    "totalBarrage": "Per US Admiral Brad Cooper (CENTCOM): Iran has launched more than 500 ballistic missiles and 2,000+ drones in retaliation. IRGC's latest wave alone claimed 230 drones. UAE MOD: 186 missiles tracked (172 destroyed), 812 drones monitored (755 intercepted). Bahrain: 73 missiles, 91 drones destroyed.",
    "intercepted": "UAE: 172 of 186 missiles, 755 of 812 drones. Bahrain: 73 missiles, 91 drones. Kuwait: 97 ballistic missiles, 283 drones. Qatar: 10 drones, 2 cruise missiles (March 4 alone). Jordan: 49 drones and ballistic missiles."
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
            "detail": "Abu Dhabi's main city port, cruise terminal, AND Al Salam Naval Base (French military). Directly struck by at least 2 Shahed-136 drones targeting the French naval base. A missile also landed in the water meters from the German cruise ship Mein Schiff 4 (2,500 passengers). Two Iranian drones struck warehouse at Al Salam Naval Base. French Defense Minister confirmed hangar hosting French forces was hit with limited damage. No casualties. On March 1, UAE MOD confirmed two Iranian drones hit a warehouse at the Al Salam Naval Base (Camp de la Paix), which hosts French forces. Fire in two containers; no casualties. French Defence Minister confirmed limited material damage. French Camp de la Paix near the port was also struck; France deployed Rafale jets in response.",
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
                    },
                    {
                            "date": "2026-03-01",
                            "text": "French naval air base Camp de la Paix, located near Zayed Port, was also struck by Iranian drones. France subsequently deployed Rafale jets to protect its bases."
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
                    },
                    {
                            "name": "Wikipedia (2026 Iranian strikes on UAE)",
                            "url": "https://en.wikipedia.org/wiki/2026_Iranian_strikes_on_the_United_Arab_Emirates"
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
            "severity": "critical",
            "icon": "🔥",
            "type": "Cloud Data Center — Struck, Fire, Power Cut",
            "detail": "Amazon Web Services ME-CENTRAL-1 region. Availability Zone mec1-az2 knocked offline after 'objects' struck the data center, causing fire. All power cut. First major hyperscale cloud facility physically damaged during military conflict. AWS confirmed on March 3 that two UAE facilities were 'directly struck' by drones. A second availability zone (mec1-az3) is also significantly impaired. Strikes caused structural damage, power failures, and water damage from fire suppression. Abu Dhabi Commercial Bank and other financial institutions reported platform outages linked to regional IT disruption.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Objects struck the mec1-az2 data center causing fire. All power cut. EC2 API errors. AWS declined to attribute to Iranian strikes."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "AWS officially confirmed two UAE facilities 'directly struck' by drones, causing structural damage, power disruption, and water damage from fire suppression. Second availability zone (mec1-az3) also significantly impaired. Banking apps and regional cloud services disrupted across UAE."
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
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/02/amazon-says-drone-strikes-damaged-3-facilities-in-uae-and-bahrain.html"
                    },
                    {
                            "name": "The Register",
                            "url": "https://www.theregister.com/2026/03/02/amazon_outages_middle_east/"
                    },
                    {
                            "name": "BleepingComputer",
                            "url": "https://www.bleepingcomputer.com/news/technology/amazon-drone-strikes-damaged-aws-data-centers-in-middle-east/"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/business/2026/03/03/drone-strikes-damage-amazon-data-centres-in-uae-and-bahrain-disrupting-services/"
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
            "severity": "critical",
            "icon": "🛢️",
            "type": "Oil Fuel Depot — Previously Attacked in 2022",
            "detail": "ADNOC pipeline terminal and fuel hub. Previously struck by Houthi drones in Jan 2022 — 3 killed, 6 injured. With Houthis announcing resumed attacks, high-risk repeat target. Upgraded to FALLING DEBRIS: Abu Dhabi authorities confirmed debris from drone interception caused minor building damage at ICAD warehouse and Mussafah commercial facility. March 2: Abu Dhabi authorities confirmed and responded to drone attack on Musaffah fuel terminal. Fire controlled, no injuries or operational disruption. On March 2, intercepted drone debris damaged a warehouse in ICAD and a commercial site in Mussaffah. A separate drone strike caused a fire at a fuel tank terminal in Musaffah, which Abu Dhabi authorities contained. No injuries reported. On March 3, a drone struck a fuel tank terminal in the Musaffah industrial area, causing a fire. Abu Dhabi authorities confirmed the strike and said the situation was quickly contained.",
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
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Abu Dhabi authorities responded to fire at fuel tank terminal in Musaffah area after it was targeted by a drone on Tuesday. Situation quickly contained with emergency teams deployed (Gulf News, Abu Dhabi Media Office)"
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
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-with-iran-enters-day-3-as-tensions-escalate-uae-stays-alert-1.500460317"
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
            "detail": "UK Maritime Trade Operations (UKMTO) reported multiple maritime incidents on March 1: one vessel west of Sharjah rocked by explosion from unknown projectile; another tanker north of Muscat struck above the waterline sparking a fire; a third vessel northwest of Mina Saqr hit by projectile igniting a blaze aboard. Widespread GPS jamming also reported across Emirati, Qatari, Omani and Iranian waters. On March 2, IRGC commander General Jabbari declared the Strait closed and threatened to set passing vessels on fire. Maritime traffic has effectively ceased. IRGC struck tanker ATHE NOVA with drones. JMIC elevated regional maritime threat level to CRITICAL. HERCULES STAR struck 17nm NW of Mina Saqr (fire extinguished, no injuries). OCEAN ELECTRA near-miss 35nm W of Sharjah. Total 5+ commercial vessels now struck/targeted. 150+ ships stranded. Major insurers cancelling war-risk coverage. Norwegian Maritime Authority raised to MARSEC/ISPS Level 3. On March 3, IRGC senior adviser Jabari declared 'the strait is closed' and threatened to set ablaze any ship attempting passage. IRGC also threatened to attack oil pipelines. Tanker traffic through the strait has dropped approximately 70% with over 150 ships anchoring outside to avoid risks. IRGC senior adviser Ebrahim Jabari declared Strait closed: 'If anyone tries to pass, the heroes of the Revolutionary Guard will set those ships ablaze.' At least 5 tankers damaged, 2 personnel killed, ~150 ships stranded. All major shipping lines (Maersk, MSC, Hapag-Lloyd, CMA CGM) suspended Hormuz transit. JMIC elevated regional maritime threat level to 'critical' on March 1. At least five commercial vessels struck or targeted in 24 hours. Oil tanker Hercules Star struck near Mina Saqr; bulk carrier Ocean Electra near-miss off Sharjah. As of March 3, the Strait of Hormuz remains effectively closed to commercial shipping. JMIC upgraded risk assessment to Critical. P&I insurance withdrawn from March 5, making transit economically unviable. At least 5 tankers damaged, ~150 ships stranded. March 4: IRGC Navy claims complete control of the strait. Deputy commander says 10+ tankers struck. UKMTO also reported a container ship struck in the strait. CENTCOM says no Iranian ships remain operational in the Arabian Gulf, Strait of Hormuz, or Gulf of Oman after US forces destroyed 17 Iranian vessels including a submarine.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "UKMTO reported three separate maritime attacks: vessel hit west of Sharjah, tanker struck north of Muscat, and vessel hit near Mina Saqr. Fires aboard multiple ships. GPS jamming widespread."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "IRGC commander General Ebrahim Jabbari declared the Strait of Hormuz closed to all traffic, stating on state TV: vessels attempting to pass will be 'set on fire.' Traffic through the waterway has effectively stopped. IRGC struck tanker ATHE NOVA with 2 drones (separate map entry)."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Gibraltar-flagged tanker HERCULES STAR struck by unknown projectile ~17nm NW of Mina Saqr, UAE; fire broke out and was extinguished; no injuries; vessel continued voyage under own power"
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Tanker OCEAN ELECTRA reported near-miss ~35nm west of Sharjah, UAE; unknown projectile exploded in close proximity; crew safe, no damage"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "IRGC senior adviser Ebrahim Jabari formally declared the Strait of Hormuz 'closed,' warning any vessel attempting passage would be attacked. IRGC also threatened to target oil pipelines to prevent any oil from leaving the region."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "IRGC formally declared Strait of Hormuz closed; threatened to attack any vessel attempting transit. At least 5 tankers damaged, 2 crew killed, ~150 ships stranded per Al Jazeera."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "JMIC raised regional maritime threat level to 'critical' (highest designation) after five commercial vessels struck or targeted in 24 hours across Gulf of Oman, Musandam approaches and UAE coastal waters. Oil tanker Hercules Star struck 17nm NW of Mina Saqr; fire extinguished, no injuries. Bulk carrier Ocean Electra near-miss 35nm W of Sharjah. (Maritime Telegraph, Argus Media)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Strait remains effectively closed. JMIC upgraded regional risk to Critical (highest level). P&I insurance withdrawn from March 5. At least 5 tankers damaged, 2 maritime personnel killed, ~150 ships stranded. Near-zero commercial traffic."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC Navy deputy commander Mohammad Akbarzadeh claims 'complete control' of Strait of Hormuz; says 10+ oil tankers struck by missiles/drones after ignoring no-passage warnings (Fars via Al Jazeera)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Container ship struck in the Strait of Hormuz per UKMTO report (Argus Media)"
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
                    },
                    {
                            "name": "Seatrade Maritime",
                            "url": "https://www.seatrade-maritime.com/security/seafarer-killed-as-three-tankers-hit-in-middle-east"
                    },
                    {
                            "name": "gCaptain",
                            "url": "https://gcaptain.com/strait-of-hormuz-enters-active-crisis-five-ships-hit-traffic-collapses-tanker-markets-brace-for-historic-shock/"
                    },
                    {
                            "name": "UKMTO / Fox News",
                            "url": "https://www.foxnews.com/world/iran-starts-indiscriminate-strikes-gulf-oman-hits-shadow-tanker-tied-regime"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/2/iran-says-will-attack-any-ship-trying-to-pass-through-strait-of-hormuz"
                    },
                    {
                            "name": "Al Jazeera Live Blog (March 3)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/3/iran-live-news-israel-bombs-tehran-beirut-trump-says-war-to-last-4-weeks"
                    },
                    {
                            "name": "Al Jazeera (oil prices)",
                            "url": "https://www.aljazeera.com/economy/2026/3/3/shutdown-of-hormuz-strait-raises-fears-of-soaring-oil-prices"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/03/strait-of-hormuz-closure-which-countries-will-be-hit-the-most.html"
                    },
                    {
                            "name": "Maritime Telegraph (vessel attack summary)",
                            "url": "https://www.maritimetelegraph.com/stena-imperative-hit/"
                    },
                    {
                            "name": "Argus Media (JMIC threat level critical)",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2795180-us-flagged-tanker-hit-in-bahrain"
                    },
                    {
                            "name": "Seatrade Maritime (is Hormuz really closed?)",
                            "url": "https://www.seatrade-maritime.com/security/is-the-strait-of-hormuz-really-closed-"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/4/irgc-says-iran-in-complete-control-of-strait-of-hormuz-amid-trump-threats"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2796119-another-vessel-attacked-off-fujairah-ukmto"
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
    {
            "name": "Al Minhad Air Base (Coalition HQ), Dubai",
            "lat": 25.0268,
            "lng": 55.3614,
            "country": "UAE",
            "city": "Dubai",
            "severity": "critical",
            "icon": "🎯",
            "type": "Military Base Drone Strike",
            "detail": "Iranian drones struck Al Minhad Air Base, located 24km south of Dubai, which hosts US, Australian, and coalition military forces. Australian Defense Minister Richard Marles confirmed the base was hit on the first night of attacks (Feb 28). All Australian staff at the base were reported safe and accounted for. Al Minhad has hosted Australian forces since 2003 and serves as the primary hub for coalition operations in the Middle East. IRGC claimed in Wave 12 that Al Minhad base was struck by 6 drones and 5 ballistic missiles on March 2. Claim not independently verified by UAE MOD but consistent with updated UAE interception totals showing significantly increased targeting.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian drones struck Al Minhad Air Base on the first night of attacks; confirmed by Australian Defense Minister Marles; all coalition staff safe and accounted for"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "IRGC Wave 12 of Operation True Promise 4 claimed the US military command and control center at Al Minhad was hit by 6 drones and 5 ballistic missiles, per Al Mayadeen citing IRGC statement. UAE updated total drone count: 689 detected (645 intercepted, 44 hitting within territory)."
                    }
            ],
            "sources": [
                    {
                            "name": "AFP via SpaceWar",
                            "url": "https://www.spacewar.com/afp/260302234435.o89e9bqh.html"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/australia-says-its-mideast-military-hq-was-hit-by-iranian-drone-attack-over-weekend/"
                    },
                    {
                            "name": "Al Mayadeen (IRGC Wave 12 claim)",
                            "url": "https://english.almayadeen.net/news/politics/wave-12-of-true-promise-4--enemy-naval-assets--fuel-tankers"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Fujairah Oil Industry Zone (FOIZ) — Drone Debris Fire",
            "lat": 25.1224,
            "lng": 56.358,
            "country": "UAE",
            "city": "Fujairah",
            "severity": "high",
            "icon": "🛢️",
            "type": "Oil infrastructure debris fire",
            "detail": "A major fire broke out at the Fujairah Oil Industry Zone on Tuesday March 3 after debris from a successfully intercepted Iranian drone fell inside the facility. The Fujairah Media Office confirmed no injuries were reported, the fire was contained, and normal operations resumed. Fujairah is the world's third-largest oil storage hub and a key bunker fuel supplier for ships transiting the Strait of Hormuz. On March 3, Fujairah authorities confirmed sounds heard were from successful air defense interceptions. On March 3, a new debris fire from a drone interception prompted the suspension of an ATP Challenger tennis tournament in Fujairah. The Fujairah press office confirmed ongoing interception operations. Al Jazeera reported on March 4 that Fujairah port was again targeted overnight as Tehran continued retaliatory strikes for a fourth night.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "Debris from intercepted Iranian drone caused fire at FOIZ oil storage facility. Fire contained, no injuries, operations resumed per Fujairah Media Office."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Fujairah authorities confirm sounds heard across emirate on March 3 were result of successful air defense interception operations (Fujairah authorities via Peninsula Qatar)."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Al Jazeera March 4 live blog reports strikes on 'a port in the city of Fujairah' during fourth night of Iranian retaliatory attacks"
                    }
            ],
            "sources": [
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/03/drone-debris-caused-fire-at-uae-oil-industry-zone-operations-resume-media-office-"
                    },
                    {
                            "name": "Arab News (AFP)",
                            "url": "https://www.arabnews.com/node/2635089/middle-east"
                    },
                    {
                            "name": "Anadolu Agency (via Sunday Guardian)",
                            "url": "https://sundayguardianlive.com/world/us-iran-war-day-4-fire-erupts-at-fujairah-oil-storage-facility-in-uae-following-air-defense-drone-interception-watch-173785/"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2795400-uae-s-fujairah-storage-tanks-hit-by-drones"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/03/03/2026/live-updates-attack-by-two-drones-on-us-embassy-in-saudi-capital-sparks-limited-fire"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/3/uae-tennis-tournament-suspended-after-drone-interception-sparks-fire"
                    },
                    {
                            "name": "Al Jazeera (March 4 Live Blog)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/4/iran-live-news-us-embassy-in-dubai-hit-israel-pounds-tehran-beirut"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "US Consulate General, Dubai (Drone Strike)",
            "lat": 25.2517,
            "lng": 55.2893,
            "country": "UAE",
            "city": "Dubai",
            "severity": "critical",
            "icon": "🏛️",
            "type": "Diplomatic Facility Strike",
            "detail": "An Iranian drone struck a parking lot adjacent to the US Consulate General chancellery building in Dubai, causing a fire. US Secretary of State Marco Rubio confirmed all personnel were accounted for. The Dubai Media Office confirmed the fire was extinguished with no injuries reported. Al Jazeera reported on March 4 that strikes on the US consulate in Dubai continued for a fourth night as part of Tehran's ongoing retaliatory campaign.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "Iranian drone struck parking lot adjacent to US Consulate chancellery building, causing fire. Consulate had been evacuated prior to strike. Fire contained, no injuries. Confirmed by Sec. Rubio and Dubai Media Office."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Al Jazeera March 4 live blog reports continued 'fourth night' retaliatory strikes on Washington's consulate in Dubai (overnight Mar 3-4)"
                    }
            ],
            "sources": [
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-03-26"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/iran-israel-us-attack-trump-live-updates-rcna261438"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/04/iranian-drone-strike-targets-us-consulate-in-dubai-uae-says-no-injuries"
                    },
                    {
                            "name": "CNN Video",
                            "url": "https://edition.cnn.com/2026/03/03/world/video/dubai-us-consulate-drone-digvid"
                    },
                    {
                            "name": "Al Jazeera (March 4 Live Blog)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/4/iran-live-news-us-embassy-in-dubai-hit-israel-pounds-tehran-beirut"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Vessels Struck 7-10nm East of Fujairah (Maritime Projectile Attacks)",
            "lat": 25.135,
            "lng": 56.47,
            "country": "UAE",
            "city": "Fujairah",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Projectile Strikes",
            "detail": "UKMTO confirmed two separate vessel attacks 7-10nm east of Fujairah on the night of March 3-4. One vessel struck by unknown projectile causing damage to steel plating (22:40 GMT). A tanker experienced a loud blast with projectile debris found on deck and minor funnel damage (22:30 GMT). All crew reported safe in both incidents.",
            "incidents": [
                    {
                            "date": "2026-03-04",
                            "text": "Vessel struck by unknown projectile 7nm east of Fujairah; steel plating damaged; crew safe (UKMTO via Reuters at 22:40 GMT Mar 3)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Tanker hit by debris from unknown projectile 10nm east of Fujairah; funnel sustained minor damage; crew safe (UKMTO via Al Arabiya)"
                    }
            ],
            "sources": [
                    {
                            "name": "Reuters (via UKMTO)",
                            "url": "https://www.usnews.com/news/world/articles/2026-03-03/uk-maritime-trade-operations-receives-a-report-of-an-incident-east-of-uaes-fujairah"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/middle-east/2026/03/04/tanker-struck-off-emirati-coast-by-unknown-projectile-debris-uk-maritime-agency"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/sea-vessel-struck-seven-nautical-miles-east-uaes-fujairah"
                    }
            ],
            "dateAdded": "2026-03-04"
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
            "detail": "Naval Support Activity Bahrain — HQ of US Naval Forces Central Command (NAVCENT) and US 5th Fleet. Hosts ~9,000 US military personnel. Iran struck with ballistic missiles and Shahed drones. Radar/satcom dome destroyed, warehouse damaged. NAVCENT concluded Juffair is 'no longer safe for US personnel.' US Embassy issued security alert. Bahrain Defense Force confirmed intercepting 45 missiles and 9 drones. Base sustained damage to large building. Sirens continued into Sunday afternoon. Bahrain intercepted 45 missiles and 9 drones. Satellite imagery published by WaPo showed smoke rising from damage at the US naval base. Breaking Defense confirmed video showing parts of 5th Fleet HQ were hit in initial attack. CNN verified video of Shahed drone directly hitting radar dome at the base. Bahrain confirmed intercepting 45 missiles and 9 drones total. DoDEA school on base canceled in-person classes for the week. On March 2, sirens sounded again over Bahrain. Al Jazeera reports 1 person killed in Bahrain from Iranian attacks — the first confirmed death in the country. Reports of new drone strikes overnight against the base. March 2: Bahrain Defence Force updated total interceptions to 61 missiles and 34 drones (up from 45/9). Ongoing Iranian targeting of the area. March 2: Bahrain MOI activated air raid alerts, closed Shaikh Khalifa bridge, and urged residents to shelter. US Embassy warned hotels in Manama could be targeted. March 2: Bahrain activated new air raid alerts, closed Shaikh Khalifa bridge. US Embassy closed, warned Americans to avoid Manama hotels. Bahrain repelled new wave of attacks on March 3. Total interceptions now 70 ballistic missiles and 76 drones (up from 45 missiles and 9 drones on Day 1). Sirens activated early Tuesday.",
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
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Bahrain Defence Force repelled new wave of Iranian aerial attacks on Tuesday. Updated total interceptions: 70 ballistic missiles and 76 drones. Air raid sirens activated early Tuesday (CNN, Gulf News, Dubai Eye/ARN)"
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
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-with-iran-enters-day-3-as-tensions-escalate-uae-stays-alert-1.500460317"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
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
            "severity": "critical",
            "icon": "🎯",
            "type": "Bahrain Air Force / US Support Base",
            "detail": "Royal Bahraini Air Force headquarters. Hosts US military operations supporting 5th Fleet. Air defense activity reported during Iranian barrage. Bahrain air defenses actively engaged from Isa Air Base intercepting 45 missiles and 9 drones. Confirmed debris fell across multiple areas. Upgraded to FALLING DEBRIS. March 3: IRGC via IRNA claimed large-scale dawn attack (20 drones, 3 missiles) targeting the US air base. Bahrain sirens activated early Tuesday. Damage claims unverified independently. CNN reports sirens sounding over Bahrain early Tuesday March 3, with Interior Ministry activating air raid alerts. Updated Bahrain interception count: 70 missiles and 76 drones intercepted as of March 3, per Bahrain Defence Force via CNN. Bahrain Defence Force updated total interceptions to 70 ballistic missiles and 76 drones as of March 3. Updated Bahrain interception totals as of March 3: 70 missiles and 76 drones intercepted per Bahrain Defence Force (via CNN). Sirens continued Tuesday morning. Bahrain Defence Force updated interception tally on March 3: 73 missiles and 91 drones destroyed since conflict began. Bahrain's updated interception figures as of March 3: 73 missiles and 91 drones destroyed since Feb 28. Bahrain Defence Force updated interception figures: 73 missiles and 91 drones destroyed since start of conflict (Al Jazeera, March 3). March 4: US ordered non-emergency departure from Bahrain, upgrading from authorized departure. Embassy warned US citizens that hotels in Manama may be targeted. On March 4, the IRGC claimed a major barrage (Wave 15 of True Promise 4) targeting Isa Air Base with 20 drones and 3 missiles, claiming the main US command building and fuel tanks were destroyed. Upgraded to CRITICAL based on IRGC official statement of confirmed projectile impacts; independent verification pending. On March 4, IRGC confirmed a dawn drone/missile attack on the US air base in Sheikh Isa/Sakhir area. This follows prior waves of attacks on the facility. Ongoing March 4 attacks: Iranian drones continue targeting Bahraini military infrastructure in the Sakhir area as IRGC announces 17th wave of True Promise IV. Bahrain Defence Force reports 73 missiles and 91 drones destroyed since conflict began. IRGC claimed large-scale attack with 20 drones and 3 missiles targeting the Sheikh Isa area US air base (IRNA). Al Jazeera published eyewitness video of the suspected attack. March 4: IRGC claims waves 14, 15, and 17 of True Promise 4 struck Isa Air Base with 20+ drones and 3+ missiles, claiming destruction of command centre and fuel tanks. Bahrain has not independently confirmed extent of damage.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Base placed on highest alert during Iranian missile barrage. Air defense activity reported over Bahrain."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Bahrain's air defenses responded from Isa Air Base overnight to hostile Iranian missile attacks, intercepting 45 missiles and 9 drones. Bahraini state media confirmed limited debris across several areas."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "IRGC announced a 'large-scale drone and missile attack at dawn' on the US air base in the Sheikh Isa area of Bahrain, claiming 20 drones and 3 missiles were launched. IRGC claimed destruction of the base's main command headquarters (unverified). Bahrain Interior Ministry activated air raid alerts early Tuesday."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Bahrain sirens activated again on Tuesday morning (March 3); air raid alerts continue per Interior Ministry"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Bahrain air-raid sirens sounded again Tuesday morning (March 3). Bahrain Defence Force updated total interceptions to 70 missiles and 76 drones since start of conflict, a significant increase from earlier count of 45 missiles and 9 drones, indicating sustained targeting through March 2-3."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Sirens continued sounding across Bahrain on Tuesday morning. Bahrain Defence Force reports total interceptions to date: 70 ballistic missiles and 76 drones (updated from earlier figures)."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Sirens sounded across Bahrain early Tuesday (March 3); Bahrain Defence Force reports intercepting 70 missiles and 76 drones total since conflict began — a significant increase from earlier tallies (CNN, Bahrain state media)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Bahrain Defence Force reports updated total interceptions: 73 missiles and 91 drones destroyed since start of conflict (Al Jazeera, ARN News)."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Bahrain Defence Force updated interception totals: 73 missiles and 91 drones intercepted since start of conflict (up from 70 missiles and 76 drones reported earlier)."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "US Embassy in Bahrain ordered non-emergency personnel and family members to depart, upgrading from previous 'authorized departure' status, citing continuing drone and missile threat from Iran."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC claimed 'Wave 15 of True Promise 4' struck Isa Air Base with 20 drones and 3 missiles, claiming destruction of the main command HQ building and fuel tanks (IRNA). Bahrain/US have not independently confirmed the extent of damage. Kurdistan24 and The New Region reported the IRGC claim."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announced its naval forces carried out a large-scale drone and missile attack at dawn on the US air base in the Sheikh Isa/Sakhir area of Bahrain (IRNA via Al Jazeera)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Iranian drone reported targeting the US-Bahraini military base in the Sakhir area (where Isa Air Base is located) on the morning of March 4, as part of IRGC's ongoing 17th wave of Operation True Promise IV."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Bahrain said its air defence systems have destroyed 73 missiles and 91 drones launched by Iran since the start of the conflict (updated figures as of March 3). Sirens continued sounding across Bahrain."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC claimed its naval forces carried out a large-scale drone and missile attack on the US air base in the Sheikh Isa area of Bahrain, launching 20 drones and 3 missiles (IRNA via Al Jazeera). Eyewitness video published by Al Jazeera shows suspected Iranian drone attack on the base."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC claimed 17th wave (True Promise 4) struck Isa Air Base with drones and missiles, claiming destruction of command centres. IRGC also claimed earlier waves (14th/15th) used 20 drones and 3 missiles on the base. Bahrain Defense Force has not independently confirmed extent of damage."
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
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/3/us-embassy-in-saudi-capital-riyadh-hit-by-drones-fire-reported-ministry"
                    },
                    {
                            "name": "CNN (Day 3 Live Updates)",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/3/is-iran-expanding-attacks-to-target-energy-and-civilian-sites-in-the-gulf"
                    },
                    {
                            "name": "ARN News Centre",
                            "url": "https://www.arnnewscentre.ae/news/international/two-drones-target-us-embassy-in-saudi-arabia/"
                    },
                    {
                            "name": "ABC7/AP",
                            "url": "https://abc7news.com/live-updates/iran-live-updates-trump-says-major-combat-operations-have-begun/18660347/entry/18670232/"
                    },
                    {
                            "name": "Kurdistan24",
                            "url": "https://www.kurdistan24.net/en/story/897578/irans-revolutionary-guard-claims-missile-and-drone-strike-destroyed-us-command-building-in-bahrain"
                    },
                    {
                            "name": "The New Region",
                            "url": "https://thenewregion.com/posts/4736"
                    },
                    {
                            "name": "Al Jazeera Live Blog (March 4)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/4/iran-live-news-us-embassy-in-dubai-hit-israel-pounds-tehran-beirut"
                    },
                    {
                            "name": "Al Jazeera (Video)",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/3/4/drone-targets-military-base-in-bahrain"
                    },
                    {
                            "name": "ANI / Press TV",
                            "url": "https://aninews.in/news/world/middle-east/irans-irgc-says-17th-wave-of-strikes-against-us-israel-launched-claims-major-damage-to-us-base-in-bahrain20260304130003/"
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
            "detail": "Bahrain's Interior Ministry confirmed that falling debris from an intercepted Iranian missile caused a fire on a foreign vessel in the industrial zone near Mina Salman port. One Asian worker was killed and two others were seriously injured in what Bahrain described as 'Iranian aggression.' UPGRADED TO CRITICAL: Bahrain MOI confirmed 1 Asian worker killed and 2 seriously injured when intercepted missile debris struck a foreign vessel, causing fire. First confirmed death in Bahrain. Bahrain MOI confirmed first fatality in Bahrain: an Asian worker killed when intercepted missile debris fell onto a vessel in Salman Industrial City. Two others seriously injured. Fire brought under control. March 2: 1 worker killed and 2 seriously injured by debris from intercepted missile on foreign ship. US-flagged tanker Stena Imperative (Navy TSP vessel) also struck by projectiles while berthed, causing onboard fire. Bahrain confirmed one Asian worker killed by interceptor debris on a vessel in Salman Industrial City; two others seriously injured. On March 2, interceptor debris struck a foreign vessel in the Salman industrial zone, killing one worker and seriously injuring two. UKMTO reported a separate vessel struck by two projectiles at the port. On March 2, UKMTO reported a vessel struck by two projectiles at Bahrain port. Interceptor debris struck a foreign ship in Salman industrial zone, killing 1 worker and seriously injuring 2. Mar 2: UKMTO confirmed vessel struck by 2 projectiles. Bahrain Interior Ministry: 1 Asian worker killed, 2 seriously injured from interceptor debris falling on foreign ship at Salman Industrial City. On March 2, Bahrain's Ministry of Interior confirmed 1 Asian worker killed and 2 seriously injured from intercepted missile debris falling on a foreign vessel. Bahrain Defence Force reports total of 61 missiles and 34 drones intercepted since the start of the conflict. March 2: US-flagged tanker Stena Imperative struck by two projectiles in Port of Bahrain per Reuters/Vanguard Tech. Fire broke out and was extinguished; crew evacuated. UKMTO confirmed the vessel fire incident. US-flagged tanker Stena Imperative (part of US MARAD Tanker Security Program) struck by 2 projectiles at Bahrain port shipyard on Mar 2. One shoreside shipyard worker killed, two others injured. Ship crew unharmed. First US-flagged vessel attacked in the conflict. Vessel had previously been harassed by IRGC fast boats in Feb 2026. On March 2, US-flagged tanker MT Stena Imperative (part of US MARAD Tanker Security Program) was struck by two projectiles at Salman Industrial City. One shipyard worker killed, two injured. Fire extinguished; crew evacuated unharmed. On March 3, Bahrain MOI confirmed one worker killed and two seriously injured by intercepted missile debris falling on a vessel in Salman Industrial City.",
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
                    },
                    {
                            "date": "2026-03-02",
                            "text": "US-flagged tanker Stena Imperative (MARAD Tanker Security Program vessel) struck by 2 projectiles at ~0300 local time while in Bahrain shipyard; fire broke out and was extinguished; 1 shipyard worker killed, 2 others injured; ship crew unharmed — first US-flagged vessel attacked in the conflict"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "US-flagged tanker MT Stena Imperative struck by two aerial projectiles while berthed at Salman Industrial City. Fire broke out on board and was extinguished. One shipyard worker killed, two seriously injured. Crew safely evacuated. Bahrain Interior Ministry confirmed death of Asian worker from intercepted missile debris falling on vessel. (USNI News, Reuters, Crowley statement)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "An Asian worker killed when debris from an intercepted missile fell onto a foreign vessel undergoing maintenance in Salman Industrial City. Two others seriously injured."
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
                    },
                    {
                            "name": "USNI News",
                            "url": "https://news.usni.org/2026/03/02/shipyard-worker-dead-fire-breaks-out-on-u-s-flagged-tanker-after-iranian-attack-on-bahrain-port"
                    },
                    {
                            "name": "gCaptain",
                            "url": "https://gcaptain.com/u-s-flagged-tanker-security-program-ship-stena-imperative-hit-in-bahrain-shipyard-worker-killed/"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2795180-us-flagged-tanker-hit-in-bahrain"
                    },
                    {
                            "name": "Reuters via Yahoo News (tanker hit confirmation)",
                            "url": "https://www.yahoo.com/news/articles/us-flagged-tanker-hit-bahrain-131900134.html"
                    },
                    {
                            "name": "Maritime Executive (detailed report)",
                            "url": "https://maritime-executive.com/article/u-s-flagged-stena-tanker-hit-by-iranian-missiles-during-attack-on-bahrain"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "AWS ME-SOUTH-1 Data Center (mes1-az2), Bahrain",
            "lat": 26.22,
            "lng": 50.55,
            "country": "Bahrain",
            "city": "Bahrain",
            "severity": "high",
            "icon": "⚡",
            "type": "Data Center / Infrastructure Damage",
            "detail": "AWS confirmed that a drone strike in close proximity to one of its Bahrain facilities caused physical impacts to infrastructure, including structural damage and disrupted power delivery. The facility (mes1-az2) remains impaired. AWS warned of prolonged disruptions and advised customers to migrate workloads to unaffected regions.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "AWS reported investigating connectivity and power issues in Bahrain ME-SOUTH-1 region"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "AWS officially confirmed drone strike in close proximity to Bahrain facility caused physical impacts, structural damage, and power disruption"
                    }
            ],
            "sources": [
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/02/amazon-says-drone-strikes-damaged-3-facilities-in-uae-and-bahrain.html"
                    },
                    {
                            "name": "The Register",
                            "url": "https://www.theregister.com/2026/03/02/amazon_outages_middle_east/"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/news/amazon-drone-strike-aws-data-center-uae-bahrain-iran/"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-03/drone-strikes-damage-amazon-data-centers-in-the-uae-and-bahrain"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/business/2026/03/03/drone-strikes-damage-amazon-data-centres-in-uae-and-bahrain-disrupting-services/"
                    }
            ],
            "dateAdded": "2026-03-03"
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
            "detail": "Largest US military installation in the Middle East. Hosts ~10,000 US personnel, CENTCOM forward HQ, Combined Air Operations Center (CAOC). Two Iranian ballistic missiles struck the base directly. An Iranian drone destroyed the AN/FPS-132 early warning radar ($1.1B asset, 5,000 km range). Qatar intercepted 65 missiles and 12 drones total. 8 injured. Qatar confirmed 66 missiles and 12 drones fired at the country, 114 reports of falling shrapnel nationwide, 16 injured (one serious). Day 3 (March 2): Explosions continued in Doha with CNN team filming apparent interceptions overhead. Al Jazeera reports third consecutive day of Iranian retaliatory strikes targeting Qatar. March 2: Explosions heard in Doha for third day. Qatar FM spokesperson: 'Iran has to pay a price for this blatant attack on our people. An attack like this cannot be left without retaliation.' On March 2, Qatar shot down two Iranian Su-24 fighter jets — the first shoot-down of manned aircraft in the conflict — and intercepted 7 missiles and 5 drones. Qatar MoD stated its armed forces possess 'full capabilities to safeguard the state's sovereignty.' March 2: Qatar Emiri Air Force shot down two Iranian Su-24 fighter jets and intercepted 7 ballistic missiles + 5 drones — the first confirmed air-to-air engagement of the conflict. Qatar MOD stated threats were addressed immediately upon detection per operational plans. On March 2, Qatar Emiri Air Force shot down two Iranian Su-24 fighter-bombers — the first manned aircraft destroyed in combat during the conflict. Qatar also intercepted 7 ballistic missiles and 5 drones in the same engagement. Qatar MOD stressed armed forces possess 'full capabilities to safeguard the state's sovereignty.' March 2: Qatar shot down two Iranian Su-24 bombers — the first manned Iranian aircraft downed since the conflict began — while intercepting 7 ballistic missiles and 5 drones. IRGC has claimed 12 waves of attacks since war began. Mar 2: Qatar Air Force shot down 2 Iranian Su-24 Fencer tactical bombers and intercepted 7 ballistic missiles and 5 drones — first confirmed aerial kill of Iranian aircraft by a Gulf state. QatarEnergy suspends all LNG production following drone strikes on Ras Laffan and Mesaieed facilities. March 2: Qatar Emiri Air Force confirmed shoot-down of two Iranian Su-24 Fencer bombers incoming from Iran — the first Gulf state to down Iranian manned aircraft. QEAF also intercepted 7 ballistic missiles and 5 drones on the same day. Qatar MOD now deploying fighter jets over Gulf waters rather than relying solely on ground-based Patriot systems. On March 3, Qatar's Emiri Air Force shot down two Iranian SU-24 aircraft approaching from Iran — the first confirmed shootdown of manned Iranian military aircraft by a Gulf state. Qatar also intercepted multiple additional missiles and drones. Updated totals: Qatar has intercepted 101 of 104 missiles, 24 of 39 drones, and shot down 2 Iranian Su-24 bomber aircraft per Qatar News Agency (via CNN). On March 3, Qatar's defence ministry reported intercepting two ballistic missiles early Tuesday morning. March 4: Qatar Defence Ministry intercepted 10 drones and 2 cruise missiles. Al Jazeera reports volume/frequency of attacks on Qatar decreasing but disruption continues with airspace still closed. Qatari Defense Ministry confirmed a ballistic missile struck the base in the latest wave; no casualties reported. Qatar also arrested 10 suspected IRGC spies on espionage and drone-sabotage charges.",
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
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Qatar Ministry of Defence announced Qatari Emiri Air Force shot down two Iranian SU-24 aircraft approaching from Iran, in addition to intercepting multiple missiles and drones (Qatar News Agency via Gulf News, Peninsula Qatar, Dubai Eye)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Qatar military intercepted two ballistic missiles early Tuesday morning (Qatar Defence Ministry via Peninsula Qatar, AFP)."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Qatar Defence Ministry reports intercepting 10 drones and 2 cruise missiles launched from Iran on Day 5 of conflict (Al Jazeera)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Qatari MoD confirms one Iranian ballistic missile intercepted, another struck Al Udeid Air Base with no casualties reported"
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
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-with-iran-enters-day-3-as-tensions-escalate-uae-stays-alert-1.500460317"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/02/03/2026/live-updates:-rising-concerns-as-missiles-continue-to-be-intercepted-across-gulf-"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/03/03/2026/live-updates-attack-by-two-drones-on-us-embassy-in-saudi-capital-sparks-limited-fire"
                    },
                    {
                            "name": "AFP (via Tribune)",
                            "url": "https://tribune.com.pk/story/2595550/us-embassy-attack-in-riyadh-sparks-fire-as-saudi-arabia-intercepts-iran-drones"
                    },
                    {
                            "name": "Al Jazeera (March 4)",
                            "url": "https://www.aljazeera.com/news/2026/3/4/hundreds-of-drones-target-kuwait-iraq-saudi-arabia-uae-amid-iran-war"
                    },
                    {
                            "name": "NCRI (citing QNA/Qatari MoD)",
                            "url": "https://www.ncr-iran.org/en/news/iran-news-in-brief-news/iran-news-in-brief-march-4-2026/"
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
            "detail": "Qatar's Foreign Ministry spokesperson confirmed that Iran targeted civilian infrastructure including the international airport. All attacks were intercepted by Qatari armed forces; no confirmed ground impact at the airport. All aircraft movements suspended; 2,000+ flights cancelled. Qatar Airways operations remain grounded. March 2: Qatar FM confirmed airport was directly targeted by Iranian attacks; all intercepted. Qatar warned Iran must 'pay a price' and retaliation cannot be ruled out. Qatar FM spokesman confirmed on March 2 that Iranian attacks targeted civilian infrastructure including the international airport. Attacks intercepted but severity elevated given confirmed targeting. Flights remain suspended pending airspace reopening. On March 2, Qatar MOD confirmed shooting down 2 Iranian SU-24 Fencer bombers — the first time Qatar has downed manned aircraft. Also intercepted 7 ballistic missiles and 5 drones on the same day. All projectiles neutralized before reaching targets. On March 3, Qatar confirmed intercepting Iranian missiles targeting Hamad airport. National totals updated: 101/104 missiles, 24/39 drones intercepted, 2 Iranian SU-24 jets shot down. On March 4, Qatar intercepted 10 drones and 2 cruise missiles from Iran. Qatar Airways flights remain suspended. Al Jazeera reports attack volume is decreasing.",
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
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Qatar confirmed it intercepted Iranian missiles specifically targeting Hamad International Airport. Updated national figures: 101 of 104 missiles and 24 of 39 drones intercepted; 2 Iranian SU-24 bomber aircraft shot down."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Qatar Defence Ministry said it intercepted 10 drones and 2 cruise missiles launched from Iran on March 4. Qatar Airways confirmed flights remain suspended due to closure of Qatari airspace."
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
                    },
                    {
                            "name": "Al Jazeera (March 3 Live)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/3/iran-live-news-israel-bombs-tehran-beirut-trump-says-war-to-last-4-weeks"
                    },
                    {
                            "name": "CNN (Day 4 Live)",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/4/hundreds-of-drones-target-kuwait-iraq-saudi-arabia-uae-amid-iran-war"
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
            "detail": "Coalition air base hosting US, Kuwaiti, and Italian forces. Suffered the most visually confirmed damage outside the UAE. Chinese satellite imagery showed at least 4 direct impact sites, massive smoke plume visible from space. Hangars, runway, fuel depots extensively destroyed. Italy confirmed 'significant damage to the runway.' 3 Kuwaiti soldiers injured. Kuwait defense ministry confirmed 3 soldiers injured with minimal material damage. Kuwait intercepted 97 ballistic missiles and 283 drones total. On March 2, Kuwait air defenses engaged a new wave of hostile drones approaching from maritime routes. The majority were shot down per state media. Early March 2: Kuwait state media reported new drone interceptions approaching via maritime routes, suggesting evolving Iranian tactics. On March 2, a fighter jet crashed within 10km of the base (pilot ejected safely). Kuwait air defenses intercepted hostile drones at dawn approaching via maritime routes. March 2 dawn: Kuwait Army confirmed air defense forces intercepted hostile drones approaching centrally via maritime routes. Multiple US F-15E aircraft crashed nearby (cause under investigation). March 2: CENTCOM confirmed 4th US service member died from injuries sustained in Iran's initial attacks on Kuwait. 'Major combat operations continue.' New wave of missiles and drones targeted Kuwait airspace early March 3. Kuwait total interceptions: 178 ballistic missiles and 384 drones. March 4: IRGC claims 230-drone barrage targeted Ali Al Salem among other US bases. Kuwait defenses continue interceptions. Volume of attacks reportedly decreasing but disruption continues. March 4: IRGC claimed 230-drone operation (17th wave) targeted Ali Al Salem and Camp Arifjan in Kuwait alongside bases in Erbil, Iraq.",
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
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Kuwait armed forces responding to 'wave of missiles and drones' detected in airspace early Tuesday. Updated totals since conflict began: 178 ballistic missiles and 384 drones intercepted (CNN, Kuwait News Agency)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announces 230-drone barrage targeting US facilities including Ali Al Salem Air Base as part of continuing Operation True Promise IV on Day 5 of conflict (Al Jazeera)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announced firing 230 drones at multiple US troop facilities including Ali Al Salem Air Base, calling attacks its 'first powerful steps' in the war"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announced 230-drone operation (17th wave of True Promise 4) specifically targeting Ali Al Salem Air Base and Camp Arifjan in Kuwait and Erbil in Iraq (IRGC statement via Press TV, confirmed by Al Jazeera)"
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
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera (March 4)",
                            "url": "https://www.aljazeera.com/news/2026/3/4/hundreds-of-drones-target-kuwait-iraq-saudi-arabia-uae-amid-iran-war"
                    },
                    {
                            "name": "GlobalSecurity / Press TV",
                            "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/03/iran-260304-presstv01.htm"
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
            "detail": "AFP photos show smoke rising from the area near the US Embassy in Kuwait City on March 2. Kuwait's air defenses intercepted hostile drones near Rumaithiya and Salwa neighborhoods in Hawalli Governorate where the embassy is located. US Embassy issued security alert urging people to stay away. Firefighters and ambulances were seen in the area. March 2: Reuters witness and AFP photos confirm smoke rising near US Embassy area. Active air defense interceptions ongoing over central Kuwait. March 2: Smoke seen near US Embassy. Kuwaiti air defenses intercepted hostile drones at dawn near Rumaithiya and Salwa neighborhoods in Hawalli Governorate. Kuwait Civil Defense confirmed explosions heard in residential areas were from successful interceptions. March 2: AP confirmed fire and smoke inside embassy compound after Iranian attack. No confirmed casualties. Embassy warned of continuing threat and ordered shelter-in-place. March 2: Fire and black smoke from inside US Embassy compound. CBS News reported 'apparent Iranian missile strike.' Embassy closed and issued emergency shelter-in-place. No immediate casualty reports but compound visibly damaged. March 2: Smoke confirmed near US Embassy compound. Embassy closed. US warned of 'continuing threat of missile and UAV attacks' and urged Americans to take cover. Mar 2: Large fire confirmed inside US Embassy compound from suspected Iranian drone. No injuries. Embassy had pre-emptively ordered staff to residences. All appointments canceled until further notice. On March 3, Iran struck the US Embassy compound in Kuwait directly. Kuwait state media condemned the attack. Embassy closed indefinitely; all visa and citizen services suspended.",
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
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Iran attacked the US Embassy compound in Kuwait. Smoke and fire rose from embassy area per AP/PBS. Kuwait News Agency condemned the 'brutal Iranian attack' on the embassy as 'a flagrant violation of all international norms.' Embassy closed indefinitely; non-emergency personnel ordered to depart."
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
                    },
                    {
                            "name": "PBS/AP",
                            "url": "https://www.pbs.org/newshour/world/iranian-drones-strike-u-s-embassy-in-saudi-arabia-as-war-widens"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/iran-israel-us-attack-trump-live-updates-rcna261438"
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
            "detail": "Kuwait's Ministry of Defense confirmed 'several United States military aircraft crashed' on Monday March 2 with all crew surviving. CNN geolocated video of an F-15E Strike Eagle crashing within 10km of Ali Al Salem Air Base near Al Jahra. Crew ejected safely and were recovered by Kuwaiti forces. Cause remains under investigation — Iran claims shootdown, some analysts suspect friendly fire. Kuwait's Defence Ministry later confirmed 'several' US warplanes crashed in the country, with all crew surviving. This is an escalation from the initial single F-15E crash report. Kuwait MOD confirmed 'several' US warplanes crashed (not just one), all crew survived. Friendly fire confirmed for at least one F-15. Crews stable after hospital evaluation. CENTCOM confirmed 3 F-15E Strike Eagles (not 1) were shot down by Kuwaiti air defenses in friendly fire incident. Confirmed crash debris in Al Jahra district. All 6 crew survived. First confirmed air-to-air friendly fire incident of the conflict. CENTCOM officially confirmed 3 F-15Es downed by Kuwaiti air defenses in friendly fire at 11:03 PM ET Mar 1. All 6 crew ejected safely. Investigation underway. Mar 2: CENTCOM confirmed friendly fire — 3 F-15Es shot down by Kuwaiti air defenses during active combat. All 6 aircrew safe. Kuwait acknowledged incident. Shows chaotic nature of air defense operations under sustained Iranian barrage. CENTCOM and Kuwait Defence Ministry confirmed 3 US fighter jets were mistakenly downed by Kuwaiti air defenses during Iranian attack on Sunday night. All 6 aircrew ejected safely and are in stable condition.",
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
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirmed 3 US fighter jets supporting Operation Epic Fury were mistakenly shot down by Kuwaiti air defenses Sunday night; all 6 aircrew ejected safely and are in stable condition"
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
            "detail": "Six US service members killed when an Iranian projectile scored a direct hit on a makeshift tactical operations center at the civilian port of Shuaiba on Sunday morning local time. Defense Secretary Hegseth confirmed one projectile penetrated air defenses and struck a fortified triple-wide trailer used as an operations center. No warning or siren preceded the strike. CENTCOM confirmed the death toll rose to 6 on Monday afternoon after two additional remains were recovered. CENTCOM confirmed on Mar 2 that the death toll from the Mar 1 drone strike at Shuaiba Port has risen to 6 US service members killed. Remains of 2 additional personnel were recovered from the struck makeshift tactical operations center. 18 US troops seriously wounded total across Operation Epic Fury. US death toll confirmed at 6 after CENTCOM recovered remains of two additional service members. A CENTCOM spokesperson confirmed 18 troops seriously wounded across Operation Epic Fury. CBS News (Mar 3) reported the strike was a one-way Shahed-type drone direct hit dead-center on a triple-wide trailer used as a makeshift ops center. Sources said no counter-drone capability was present and no warning sirens sounded. 18 US service members total seriously wounded across Operation Epic Fury as of Monday per CENTCOM.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Iranian projectile (suspected drone) directly struck a US Army sustainment unit's makeshift tactical operations center at Shuaiba Port. 6 US service members killed. Defense Secretary Hegseth confirmed one projectile got through air defenses."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirmed US death toll at Shuaiba rose to 6 after recovering remains of 2 additional previously unaccounted-for service members; total 18 US troops seriously wounded across Operation Epic Fury; Defense Secretary Hegseth confirmed a single projectile penetrated air defenses in direct hit on triple-wide trailer operations center"
                    },
                    {
                            "date": "2026-03-02",
                            "text": "CENTCOM confirms US death toll from Shuaiba port strike rises to 6 after remains of two previously unaccounted-for service members recovered. All 6 were Army soldiers from the same logistics unit. CENTCOM also reports 18 troops seriously wounded across the operation."
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
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/news/iran-military-operation-american-service-members-killed-centcom/"
                    },
                    {
                            "name": "Axios",
                            "url": "https://www.axios.com/2026/03/02/3-us-fighter-jets-friendly-fire-kuwait"
                    },
                    {
                            "name": "AP / OPB",
                            "url": "https://www.opb.org/article/2026/03/02/as-mideast-conflict-widens-us-says-attacks-on-iran-will-last-weeks-and-intensify/"
                    },
                    {
                            "name": "CBS News — Makeshift Office Inadequacy Report",
                            "url": "https://www.cbsnews.com/news/iran-strike-kuwait-officials-question-fortifications/"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "Camp Arifjan (US Army Base), Kuwait",
            "lat": 29.0619,
            "lng": 48.1003,
            "country": "Kuwait",
            "city": "Al Ahmadi Governorate",
            "severity": "critical",
            "icon": "🎯",
            "type": "US Military Base Strike",
            "detail": "Camp Arifjan, a major US Army base in southern Kuwait housing logistics and sustainment troops, was targeted by Iranian drones. Anadolu Agency reported US officials confirmed a strike with casualties. IRGC claimed 12 drone strikes on the base as part of Operation True Promise 4 Wave 12. A halt-to-movement order was issued for Camp Arifjan along with other Kuwait bases. March 4: IRGC claims Camp Arifjan targeted in 230-drone barrage aimed at US facilities across the region.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Anadolu Agency reported US officials confirmed an Iranian strike on Camp Arifjan with casualties (3 killed, 5 seriously injured initially reported). Halt-to-movement ordered at Camp Arifjan and other Kuwait bases."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "IRGC claimed 12 drone strikes on Camp Arifjan as part of Wave 12 of Operation True Promise 4, per TASS citing IRGC statement."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announces 230-drone barrage targeting US facilities including Camp Arifjan on Day 5 of conflict (Al Jazeera)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC claimed 230-drone barrage targeting US facilities including Camp Arifjan"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announced 230-drone operation (17th wave) specifically named Camp Arifjan as a target alongside Ali Al Salem and Erbil (IRGC statement via Press TV)"
                    }
            ],
            "sources": [
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/iran-hits-6-us-military-sites-across-gulf-report/3846334"
                    },
                    {
                            "name": "CNN (Shuaiba/Kuwait casualties context)",
                            "url": "https://www.cnn.com/2026/03/02/politics/six-soldiers-killed-in-iranian-strike-kuwait"
                    },
                    {
                            "name": "CBS News (halt to movement)",
                            "url": "https://www.cbs17.com/news/national-news/us-service-members-in-kuwait-were-killed-in-military-operation-against-iran/"
                    },
                    {
                            "name": "Al Jazeera (March 4)",
                            "url": "https://www.aljazeera.com/news/2026/3/4/hundreds-of-drones-target-kuwait-iraq-saudi-arabia-uae-amid-iran-war"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Southern Kuwait Power Lines (Shrapnel Damage)",
            "lat": 29.05,
            "lng": 48.08,
            "country": "Kuwait",
            "city": "Southern Kuwait",
            "severity": "high",
            "icon": "⚡",
            "type": "Infrastructure — Interceptor Debris Damage",
            "detail": "Kuwait's Ministry of Electricity, Water and Renewable Energy announced on March 3 that two overhead electricity transmission lines in the south of the country were taken out of service after shrapnel fell as a result of intercepting Iranian drones. The damage disrupted power delivery in the area.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "Two overhead electricity transmission lines in southern Kuwait knocked out of service by shrapnel from drone interceptions (Kuwait Ministry of Electricity via Peninsula Qatar)."
                    }
            ],
            "sources": [
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/03/03/2026/live-updates-attack-by-two-drones-on-us-embassy-in-saudi-capital-sparks-limited-fire"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Kuwait City Residential Area (Child Shrapnel Fatality)",
            "lat": 29.3759,
            "lng": 47.9774,
            "country": "Kuwait",
            "city": "Kuwait City",
            "severity": "critical",
            "icon": "💥",
            "type": "Interceptor Debris Fatality",
            "detail": "An 11-year-old girl died on March 4 after shrapnel from an intercepted projectile fell on a residential area in Kuwait City. Kuwait's Ministry of Health announced the death on Wednesday. Four of her family members are undergoing medical evaluation. This is the second confirmed civilian fatality in Kuwait from the conflict.",
            "incidents": [
                    {
                            "date": "2026-03-04",
                            "text": "11-year-old girl killed by falling shrapnel in residential area; 4 family members injured. Kuwait Ministry of Health confirmed."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-03-26"
                    },
                    {
                            "name": "WorldNews",
                            "url": "https://article.wn.com/view/2026/03/04/11yearold_girl_killed_in_Kuwait_after_drone_shrapnel_falls_i/"
                    }
            ],
            "dateAdded": "2026-03-04"
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
            "detail": "Major US military air base ~60 km south of Riyadh. Hosts US THAAD, Patriot, KC-135 tankers, E-3G AWACS. IRGC claimed they 'precisely hit' the base. Saudi Arabia said air defenses intercepted missiles near the base. Reports confirm impacts on base infrastructure. On March 3, Saudi Defense Ministry reported intercepting 8 drones near Riyadh and Al-Kharj, in the vicinity of PSAB. On March 3, 8 drones intercepted and destroyed near Riyadh and Al-Kharj per Saudi MoD spokesman Maj-Gen Turki Al-Maliki. No damage or casualties reported from interceptions. On March 3, Saudi defense ministry confirmed 8 drones intercepted near Riyadh and Al-Kharj (near PSAB). CNN noted Prince Sultan Air Base is located close to Al-Kharj.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "IRGC launched ballistic missiles and drones at the base. Iran state media confirmed targeting PSAB."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Saudi air defenses intercepted Iranian missiles near Prince Sultan Airbase in second wave."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Saudi military intercepted and destroyed 8 drones near Riyadh and Al-Kharj early Tuesday, per the Defense Ministry. Al-Kharj is near PSAB."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Saudi defense ministry intercepted and destroyed 8 drones near Riyadh and Al-Kharj (near PSAB). No damage or casualties reported (Al Arabiya, CNN, Saudi Gazette)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Saudi defense ministry reports 8 drones intercepted and destroyed near Riyadh and Al-Kharj (near PSAB). No damage or casualties reported from the interceptions (Saudi MoD, CNN, Al Arabiya)."
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
                    },
                    {
                            "name": "CNN Live Blog (Mar 3)",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/03/saudi-arabia-intercepts-destroys-eight-drones-near-riyadh-and-alkharj"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659391/saudi-arabia/saudi-arabia-intercepts-8-drones-near-riyadh-and-al-kharj"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "Qatar News Agency",
                            "url": "https://qna.org.qa/en/news/news-details?id=saudi-defense-ministry-intercepts-destroys-8-drones-near-riyadh-and-al-kharj&date=3/03/2026"
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
            "detail": "Riyadh's main international airport. Saudi Arabia confirmed Iranian missiles targeted the capital region. Air defenses intercepted projectiles near the airport. No disruption to navigation or casualties reported. On March 3, Saudi Arabia intercepted 8 drones near Riyadh and Al Kharj (55 miles SE of Riyadh, near Prince Sultan Air Base). No damage or casualties reported.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian missiles targeted Riyadh region. Saudi air defenses intercepted projectiles near King Khalid International Airport."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Saudi military intercepted and destroyed 8 Iranian drones near Riyadh and Al Kharj early Tuesday local time, per Saudi Defense Ministry spokesman Maj-Gen Turki Al-Maliki. No damage or casualties reported."
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
                    },
                    {
                            "name": "CNN (Day 3 liveblog)",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
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
            "detail": "Home to virtually all major Aramco facilities. A Saudi official stated: 'missiles targeting Aramco come from the north, not Yemen' — directly attributing to Iran. Saudi MOD said air defenses intercepted the projectiles. On March 4, Saudi defense ministry confirmed interception and destruction of a drone over the Eastern Province. Saudi defence ministry confirmed March 4 interception of a drone in the Eastern Province.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iran launched missiles at Saudi Eastern Province. Saudi official attributed Aramco attacks to Iran. Air defenses engaged."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Saudi defense ministry said it intercepted and destroyed a drone in the Eastern Province. No further details on origin or damage provided."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Saudi Arabia's defence ministry said it intercepted and destroyed a drone in the Eastern Province. No further details on origin, damage, or casualties were immediately provided."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Saudi defence ministry intercepted and destroyed a drone in the Eastern Province; no further details on origin or damage provided"
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
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/4/hundreds-of-drones-target-kuwait-iraq-saudi-arabia-uae-amid-iran-war"
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
            "detail": "Processes ~7 million bpd — roughly 7% of global supply. Previously attacked by Iran-linked drones in Sept 2019, temporarily halving Saudi oil output. A prime escalation target. March 3: IRGC general threatened to hit 'all economic hubs in the Middle East' if US-Israeli attacks continue. Abqaiq remains on elevated alert. IRGC general explicitly threatened all economic hubs in the Middle East on March 3. Abqaiq remains at elevated risk.",
            "incidents": [
                    {
                            "date": "2019-09-14",
                            "text": "Iran-linked drone and cruise missile strike knocked out 5.7 million bpd of Saudi production."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Saudi placed all critical energy infrastructure on highest alert."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "IRGC general stated on March 3 that if joint US-Israeli attacks continue, Iran will hit 'all economic hubs in the Middle East.' Abqaiq remains a high-value target given 2019 precedent and proximity to ongoing Ras Tanura strikes. Elevated watchlist threat. (Wikipedia citing IRGC statement)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "IRGC general threatened to 'hit all economic hubs in the Middle East' if US-Israeli attacks continue, per Iranian state media. Abqaiq remains a high-value energy target under elevated threat."
                    }
            ],
            "sources": [
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/02/28/nx-s1-5678603/iran-strikes-oil-energy-markets"
                    },
                    {
                            "name": "Wikipedia (IRGC economic hubs threat, March 3)",
                            "url": "https://en.wikipedia.org/wiki/2026_Israeli%E2%80%93United_States_strikes_on_Iran"
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
            "detail": "An Iranian Shahed-136 drone struck Saudi Aramco's Ras Tanura refining facility on March 2 morning, sparking a fire that was described as small and contained. Aramco halted refinery operations as a precautionary measure. No casualties reported. Refinery shut down as precautionary measure Monday. Saudi MOD says two drones intercepted; debris caused small, contained fire. 550,000 bpd facility halted, impacting crude exports. Analysts call this a 'significant escalation' targeting Gulf energy infrastructure. March 2: Two drones intercepted targeting refinery; debris fire. Saudi Arabia shut down some operational units. Saudi state TV confirmed temporary refinery shutdown. March 2: Saudi energy ministry confirmed partial shutdown of refinery operations. Officials clarified the fire was caused by debris from an intercepted Iranian missile, not a direct drone strike as initially reported. Saudi state TV confirmed temporary shutdown of Ras Tanura refinery on March 2 after drone debris from interception caused a contained fire. Mar 2: Saudi state TV confirmed temporary shutdown of refinery following drone attack. MOD: 2 drones intercepted, debris caused small fire, no casualties. Saudi state TV confirmed Ras Tanura refinery (550,000 bpd capacity) temporarily shut down on March 2 after drone interception debris caused a fire. Saudi MOD confirmed 2 drones intercepted. On March 4, a drone struck the already-shuttered Ras Tanura complex again per Reuters (4 sources). Saudi MOD confirmed the attack but said no damage resulted. The refinery (550,000 bpd capacity) has remained shut since the March 2 drone attack that caused a fire. On March 4, a projectile hit the refinery directly (Reuters), after the plant had already been shut down from an earlier debris-induced fire. March 4: Reuters sources report a projectile directly hit the refinery, which had already been shut down after earlier debris fire from intercepted drones.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Ras Tanura struck again by unknown projectile (identified as drone by Saudi MOD). Four sources confirmed to Reuters the complex was hit. Saudi defense ministry said initial evaluation shows attack carried out by drone with no reported damage. Refinery already shut since March 2 drone attack."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Projectile hit Ras Tanura refinery later on March 4, according to two sources cited by Reuters. Plant had already been shut down days earlier after a fire caused by debris from interception of two Iranian drones."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "A projectile directly hit the Ras Tanura refinery, Saudi Aramco's biggest domestic facility, according to two sources cited by Reuters. Operations had already been shut down after earlier drone debris fire."
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
                    },
                    {
                            "name": "Reuters (via Yahoo News)",
                            "url": "https://ca.news.yahoo.com/saudi-aramcos-ras-tanura-struck-095152444.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/4/hundreds-of-drones-target-kuwait-iraq-saudi-arabia-uae-amid-iran-war"
                    },
                    {
                            "name": "Republic World / Reuters",
                            "url": "https://www.republicworld.com/world-news/saudi-aramco-s-key-refinery-ras-tanura-struck-again-by-drone-report"
                    }
            ],
            "dateAdded": "2026-03-02"
    },
    {
            "name": "US Embassy in Riyadh (Diplomatic Quarter), Saudi Arabia",
            "lat": 24.653,
            "lng": 46.625,
            "country": "Saudi Arabia",
            "city": "Riyadh",
            "severity": "critical",
            "icon": "🏛️",
            "type": "Drone Strike on US Embassy",
            "detail": "Two Iranian Shahed-136 kamikaze drones struck the US Embassy in Riyadh, hitting the roof and perimeter of the chancery building. Saudi Defense Ministry confirmed the attack caused a limited fire and minor material damage. The embassy was empty at the time with no casualties reported (Fox News). IRGC claimed the strike as part of efforts to destroy 'American political centers' in the region. On March 3, two Iranian drones struck the embassy roof and building, causing a limited fire. The IRGC stated it had begun targeting 'American political centers,' naming the Riyadh embassy specifically. A third drone was reported en route. Saudi air defenses intercepted additional drones over the Diplomatic Quarter. Follow-up drones targeted the embassy area after the initial strike. IRGC claimed it began destroying 'American political centers,' naming the Riyadh embassy. Embassy building reportedly empty at time of attack with no casualties. US Mission issued shelter-in-place for Riyadh, Jeddah, and Dhahran. Embassy closed indefinitely. Saudi MoD intercepted 8 more drones near Riyadh/Al-Kharj. US shelter-in-place alert issued for Riyadh, Jeddah & Dhahran. On morning of March 3: After initial 2 drones hit US Embassy, 2 more drones struck the Diplomatic Quarter per Reuters sources. Saudi MoD confirmed.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Two Iranian Shahed-136 drones struck the US Embassy roof and perimeter; limited fire and minor material damage; no casualties (embassy had been evacuated); IRGC claimed responsibility"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Two Iranian drones struck the US Embassy compound early Tuesday, causing a 'limited fire' and 'minor material damage' per Saudi MOD. Embassy was empty; no casualties. Additional drones targeted Riyadh's Diplomatic Quarter with two more explosions heard. IRGC claimed the attack as part of campaign to destroy 'American political centers' in the region."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Additional suspected Iranian drones struck 'at or near' the embassy after initial two-drone hit. IRGC declared intent to destroy 'American political centers,' naming Riyadh embassy specifically. US Mission issued shelter-in-place for Riyadh, Jeddah and Dhahran (CNN, Al Jazeera, The Hill)"
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Embassy closed indefinitely following the drone strike. Saudi MoD intercepted and destroyed 8 additional drones near Riyadh and Al-Kharj after the embassy attack. US Mission issued shelter-in-place for Riyadh, Jeddah and Dhahran. Trump vowed retaliation."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Reuters reported a second wave: shortly after initial two drones struck the US Embassy, two more drones struck the Diplomatic Quarter area. Saudi MoD confirmed strikes."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN Live Blog",
                            "url": "https://edition.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "BNO News (citing WSJ/State Dept)",
                            "url": "https://bnonews.com/index.php/2026/03/fire-breaks-out-at-u-s-embassy-in-riyadh-following-reports-of-explosions/"
                    },
                    {
                            "name": "Axios",
                            "url": "https://www.axios.com/2026/03/03/iran-us-embassy-riyadh-saudi-arabia-drones"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/3/us-embassy-in-saudi-capital-riyadh-hit-by-drones-fire-reported-ministry"
                    },
                    {
                            "name": "CNN Live Blog",
                            "url": "https://www.cnn.com/world/live-news/iran-israel-us-attack-03-02-26-intl-hnk"
                    },
                    {
                            "name": "The Hill",
                            "url": "https://thehill.com/policy/international/5764037-riyadh-embassy-drone-strikes/"
                    },
                    {
                            "name": "ABC News",
                            "url": "https://abcnews.com/International/live-updates/iran-live-updates-israel-launches-preemptive-strike-iran/?id=130301492"
                    },
                    {
                            "name": "Jerusalem Post",
                            "url": "https://www.jpost.com/middle-east/article-888595"
                    },
                    {
                            "name": "Wikipedia (citing Reuters)",
                            "url": "https://en.wikipedia.org/wiki/2026_Iran_conflict"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Dhahran (US Embassy Imminent Attack Warning), Eastern Saudi Arabia",
            "lat": 26.2743,
            "lng": 50.2083,
            "country": "Saudi Arabia",
            "city": "Dhahran",
            "severity": "watchlist",
            "icon": "🛢️",
            "type": "Energy Hub — Imminent Attack Warning",
            "detail": "The US Embassy in Riyadh issued a warning on March 3 of an imminent attack in the eastern Saudi city of Dhahran, home to major energy installations along the Gulf coast. Dhahran is the headquarters of Saudi Aramco and a critical hub for the kingdom's oil industry. The warning came amid escalating Iranian targeting of energy infrastructure across the Gulf. US Embassy Riyadh issued a specific imminent attack warning for Dhahran on March 3, indicating continued elevated threat to eastern Saudi energy infrastructure.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "US Embassy in Riyadh warns of imminent attack in Dhahran; residents advised to shelter in place (Peninsula Qatar live updates)."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "US Embassy Riyadh issues 'Threat of Imminent Missile / UAV Attacks Over Dhahran' security alert"
                    }
            ],
            "sources": [
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/03/03/2026/live-updates-attack-by-two-drones-on-us-embassy-in-saudi-capital-sparks-limited-fire"
                    },
                    {
                            "name": "Euronews (US Embassy tweet cited)",
                            "url": "https://www.euronews.com/2026/03/03/trump-says-iran-war-could-last-weeks-but-could-go-far-longer"
                    }
            ],
            "dateAdded": "2026-03-03"
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
            "detail": "Major Omani port on the Arabian Sea coast. Targeted by 2 Iranian drones on Mar 1. One struck foreign workers' residences, injuring 1. Iran FM claimed 'not our choice.' This shatters Oman's traditional neutrality. Oman News Agency confirmed two drones hit Duqm port on March 1, injuring one expatriate worker. First attack on Oman. GCC condemned the strike on the mediator state. March 3: Second drone attack in three days. Multiple drones targeted fuel storage tanks; one hit a fuel tank with damage contained and no casualties (Oman News Agency via AFP). On March 3, a second wave of drones targeted Duqm port, hitting a fuel storage tank. ONA confirmed damage was contained with no casualties. On March 3, a fuel tank at the port was hit in a drone attack. No casualties; damage contained per Oman News Agency. Second attack on March 3: Iranian drones hit fuel storage tank at Duqm Port. Port and drydock operations suspended until further notice.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "2 Iranian drones targeted Duqm Port. One struck foreign workers' residences — 1 injured. Oman neutrality compromised."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Oman News Agency confirmed Duqm commercial port was struck by two drones. One expatriate worker injured. First attack on Oman, which had been mediating US-Iran talks. Condemned by the Gulf Cooperation Council."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Second drone attack on Duqm Port. Multiple drones targeted fuel tanks; one drone hit a fuel tank causing contained damage. No casualties reported. Oman condemned the attack. This is the second strike on the port in three days."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Second attack on Duqm port: several Iranian drones targeted the port on Tuesday, one hitting a fuel storage tank. Damage contained and no casualties reported per Oman state news agency ONA. This is the second attack on the port since conflict began Feb 28."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Fuel tank at Duqm commercial port hit in a new drone attack. No casualties reported; material damage contained (Oman News Agency)."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Second wave: several drones targeted Duqm Port; one struck a fuel storage tank. Damage contained, no casualties reported per Oman News Agency. Port operations at Duqm, Asyad Drydock suspended until further notice."
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
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/drones-hit-fuel-tank-at-oman-s-duqm-port-amid-us-iran-war/3847774"
                    },
                    {
                            "name": "AFP/BSS",
                            "url": "https://www.bssnews.net/international/365498"
                    },
                    {
                            "name": "Marine Link (Reuters)",
                            "url": "https://www.marinelink.com/news/drone-attack-damages-fuel-tank-omans-duqm-536399"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2795389-duqm-port-struck-in-latest-mideast-gulf-drone-attack"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2795400-uae-s-fujairah-storage-tanks-hit-by-drones"
                    },
                    {
                            "name": "The Peninsula Qatar (ONA)",
                            "url": "https://thepeninsulaqatar.com/article/03/03/2026/live-updates-attack-by-two-drones-on-us-embassy-in-saudi-capital-sparks-limited-fire"
                    },
                    {
                            "name": "Argus Media (citing ONA)",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2794546-oman-reports-first-drone-attack-amid-regional-tensions"
                    },
                    {
                            "name": "The War Zone",
                            "url": "https://www.twz.com/news-features/gulf-arab-states-under-pressure-as-iranian-attacks-grind-on"
                    },
                    {
                            "name": "Seatrade Maritime",
                            "url": "https://www.seatrade-maritime.com/security/oman-ports-targeted-by-drone-attacks"
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
    {
            "name": "Port of Salalah (Drone Crash), Dhofar, Oman",
            "lat": 16.9386,
            "lng": 54.0069,
            "country": "Oman",
            "city": "Salalah",
            "severity": "high",
            "icon": "⚓",
            "type": "Drone crash near major port",
            "detail": "Oman News Agency confirmed that two drones were shot down over the Dhofar Governorate and a third crashed near the Port of Salalah on March 3. Video footage captured the moment of impact. Oman reported no casualties or material damage, but port operations at the Salalah General Cargo Terminal were suspended until further notice per Inchcape Shipping Services.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "Iranian drone crashed near Port of Salalah; two additional drones shot down over Dhofar Governorate. No casualties reported. Port General Cargo Terminal operations suspended."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Arabiya (citing Oman News Agency)",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/03/drone-crashes-near-omani-port-two-others-downed-state-media-"
                    },
                    {
                            "name": "Seatrade Maritime",
                            "url": "https://www.seatrade-maritime.com/security/oman-ports-targeted-by-drone-attacks"
                    },
                    {
                            "name": "The War Zone",
                            "url": "https://www.twz.com/news-features/gulf-arab-states-under-pressure-as-iranian-attacks-grind-on"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Vessel Struck 50nm North of Muscat (Projectile Attack, Gulf of Oman)",
            "lat": 24.3,
            "lng": 58.6,
            "country": "Oman",
            "city": "Off Muscat Coast",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Projectile Strike",
            "detail": "UKMTO reported on the night of March 3 that a vessel 50 nautical miles north of Muscat, Oman was struck by an unknown projectile above the waterline. The strike was broadcast over VHF Channel 16. An engine room fire broke out but was brought under control. This is a separate incident from the MKD VYOM attack on March 1-2.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "UKMTO reported a vessel struck by unknown projectile above the waterline 50nm north of Muscat; engine room fire brought under control"
                    }
            ],
            "sources": [
                    {
                            "name": "Marine Insight (UKMTO warning)",
                            "url": "https://www.marineinsight.com/shipping-news/unknown-projectiles-strike-ships-near-oman-and-uae-ukmto-issues-urgent-strait-of-hormuz-warning/"
                    }
            ],
            "dateAdded": "2026-03-04"
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

    // ═══════════════════════════════════════════════════════════
    // Jordan
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Muwaffaq al-Salti Air Base, Azraq, Jordan",
            "lat": 31.8266,
            "lng": 36.782,
            "country": "Jordan",
            "city": "Azraq",
            "severity": "high",
            "icon": "🎯",
            "type": "US/Jordanian Air Base — Targeted, Intercepted",
            "detail": "Key US air power hub in Jordan targeted repeatedly by Iranian missiles. Jordan's armed forces reported intercepting 49 drones and ballistic missiles since Feb 28. The US deployed dozens of attack aircraft and THAAD systems here prior to the strikes. Iranian media claimed the base as an intended target. All attacks on the base reported intercepted by Jordanian forces, though a missile reportedly fell on Al-Hashemi Street in Irbid. Jordan reported five injured and homes damaged across the kingdom. Jordan has now intercepted 49 drones and 13 ballistic missiles. Iranian media identified Muwaffaq al-Salti as an intended target. Fragments caused localized property damage. Jordan confirmed intercepting 13 ballistic missiles and 49 drones. German troops in Jordan were also reportedly shelled by Iran. German military confirmed the multinational base at Al-Azraq was targeted by Iran over the weekend. US Embassy in Amman fully evacuated March 3 due to threats. Non-emergency US personnel in Jordan ordered to depart March 4.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Jordanian forces intercept two ballistic missiles targeting the country's territory; explosions reported near Muwaffaq al-Salti Air Base (France 24, Al Jazeera)."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Reports of continued strikes near the air base area; Jordan total interceptions reach 49 drones and ballistic missiles. Five injured, homes damaged across Jordan (CBS News)."
                    },
                    {
                            "date": "2026-03-02",
                            "text": "Jordan confirmed intercepting 49 drones and 13 ballistic missiles entering Jordanian airspace since Feb 28. Fragments caused localized property damage. Muwaffaq al-Salti was an intended Iranian target per Iranian media."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Jordan reports intercepting 13 ballistic missiles and 49 drones entering its airspace; German troops in Jordan also shelled by Iran per Wikipedia timeline"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "US Embassy in Jordan ordered non-emergency personnel and family members to depart. German military confirmed the base was targeted over the weekend. US Embassy in Amman evacuated on March 3 due to threats."
                    }
            ],
            "sources": [
                    {
                            "name": "France 24",
                            "url": "https://www.france24.com/en/middle-east/20260228-what-we-know-about-us-military-bases-mideast-gulf-targeted-iran-retaliatory-strikes"
                    },
                    {
                            "name": "FDD Long War Journal",
                            "url": "https://www.longwarjournal.org/archives/2026/03/iran-expands-retaliation-for-us-israel-campaign-across-arab-states-february-28-march-2.php"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-day-3-american-deaths-israel-gulf-allies-hit-missile-strikes/"
                    },
                    {
                            "name": "Alma Center",
                            "url": "https://israel-alma.org/irans-multi-front-missile-and-uav-offensive-across-the-middle-east-feb-28-mar-1-2026/"
                    },
                    {
                            "name": "Al Jazeera (Casualty Tracker)",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    },
                    {
                            "name": "Breaking Defense",
                            "url": "https://breakingdefense.com/2026/03/iran-attacks-uae-saudi-missiles-drones-gcc-air-defense/"
                    },
                    {
                            "name": "ABC7/AP",
                            "url": "https://abc7news.com/live-updates/iran-live-updates-trump-says-major-combat-operations-have-begun/18660347/entry/18670232/"
                    }
            ],
            "dateAdded": "2026-03-03"
    },

    // ═══════════════════════════════════════════════════════════
    // Iraq
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Jurf al-Sakhar (Jurf al-Nasr) — PMF Base, South of Baghdad, Iraq",
            "lat": 32.95,
            "lng": 44.1,
            "country": "Iraq",
            "city": "Jurf al-Sakhar",
            "severity": "critical",
            "icon": "💥",
            "type": "US-Israeli Strike on Pro-Iran Militia Base",
            "detail": "US-Israeli strikes targeted the Jurf al-Sakhar base housing Popular Mobilization Forces and Kataib Hezbollah. Iraqi state media and PMF confirmed two fighters killed and five wounded. Kataib Hezbollah warned it would 'soon begin attacking American bases in response.' Additional airstrike on March 3 caused material damage (AFP). Total Iraqi militant casualties across all sites now exceed 10 killed since Feb 28. March 4: Another strike confirmed at the base; Kataib Hezbollah source says material damage only. Total fighter deaths across Iraq now exceeds 10 since Feb 28.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "US-Israeli airstrikes hit Jurf al-Sakhar area, targeting Kataib Hezbollah and PMF positions. Two PMF fighters killed, five wounded per Iraqi state media and PMF spokesperson."
                    },
                    {
                            "date": "2026-03-01",
                            "text": "Additional strikes reported at Jurf al-Nasr. Iraqi government security media cell confirmed targeting at 7:25 PM local time. Kataib Hezbollah warned of retaliatory attacks on US bases."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "New airstrike hit the Jurf al-Nasr base on Tuesday (March 3). A Kataib Hezbollah source said the strike caused only material damage. AFP reports more than 10 fighters killed across Iraq since Saturday, mostly from Kataib Hezbollah."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "AFP/BSS reported another airstrike hit the Jurf al-Nasr base on Tuesday (March 4), with a Kataib Hezbollah source saying the strike caused material damage only. More than 10 fighters from Kataib Hezbollah have been killed across Iraq since the conflict began."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation"
                    },
                    {
                            "name": "Al Jazeera Death Toll Tracker",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    },
                    {
                            "name": "Wikipedia (2026 Iran conflict)",
                            "url": "https://en.wikipedia.org/wiki/2026_Iran_conflict"
                    },
                    {
                            "name": "AFP (via BSS News)",
                            "url": "https://www.bssnews.net/international/365696"
                    }
            ],
            "dateAdded": "2026-03-04"
    },

];
