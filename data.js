// ═══════════════════════════════════════════════════════════════
// Gulf Region — Iranian Strikes & Threats — Data
// Sources: UAE MOD/WAM, CENTCOM, Reuters, Al Arabiya, Gulf News,
//          CNN, Al Jazeera, France24, AP, Stars and Stripes,
//          Anadolu Agency, Breaking Defense, Military Watch Magazine
// Auto-updated by gulf-map-bot
// ═══════════════════════════════════════════════════════════════

const MAP_META = {
    "title": "Gulf Region — Iranian Strikes & Threats",
    "lastUpdated": "2026-03-10T22:22:21.797Z",
    "casualties": {
        "killed": 60,
        "injured": 757
    },
    "conflict": "Iran strikes on Gulf states, Feb 28 – Mar 2, 2026",
    "summary": "Day 11 (March 10): Iran continued drone/missile strikes across the Gulf. Bahrain reported 3 missiles and 1 drone (1 woman killed, 8 injured in Manama residential building). UAE intercepted 8 of 9 ballistic missiles and 26 of 35 drones; 9 drones impacted, 2 additional deaths reported. Saudi Arabia destroyed 2 drones over Eastern Province. Kuwait shot down 6 drones. Qatar intercepted 5 ballistic missiles. Drone debris damaged UAE Consulate in Erbil, Iraq. US Embassy in Riyadh hit by 2 drones and closed. ADNOC shut Ruwais refinery after drone-caused fire. US Defense Secretary Hegseth warned of 'most intense day of strikes inside Iran.' Iran's IRGC vowed 'not a single liter of oil' would leave the Persian Gulf.",
    "totalBarrage": "UAE cumulative since Feb 28: 262 ballistic missiles detected (241 destroyed, 19 fell in sea, 2 impacted), 1,475 drones detected (1,385 intercepted, 90 impacted), 8 cruise missiles destroyed. Kuwait: 6 drones intercepted on March 10. Qatar: 5 ballistic missiles intercepted on March 10.",
    "intercepted": "UAE: 241 of 262 ballistic missiles destroyed (92%), 1,385 of 1,475 drones intercepted (94%). Bahrain: 105 missiles, 176 drones intercepted total. Hegseth noted Iran's ballistic missile launch rate is now down ~90% from Day 1 of the war."
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
            "detail": "Primary US military air base in the UAE. Hosts ~5,000 US troops, THAAD & Patriot batteries, F-22s, RQ-4 Global Hawks, U-2s, E-3 AWACS. Iran's explicit primary target — they conducted a full-scale simulation attack on a replica of this base on Feb 24, days before the real strike. On March 6, the IRGC claimed a new retaliatory strike on Al Dhafra using drones and precision missiles, citing the US strike on Minab school as justification. On March 7, IRGC Navy claimed drone attack hit US satellite communications and radars at the base (unverified by independent sources). UAE confirmed air defenses responding to incoming threats. On March 7, IRGC Navy claimed via Tasnim a drone attack on al-Dhafra targeting US satellite comms and fire control radars. UAE has not confirmed the claim. IRGC publicly claimed targeting Al Dhafra with drones and precision missiles in retaliation for Minab school strike, claiming hits on US radar and MQ-9/U-2 hangars. UAE confirmed air defense interceptions ongoing. IRGC damage claims not independently verified. March 7: IRGC Navy claims drone attack struck US satellite comm centre and radars at Al Dhafra (Tasnim). Unverified by UAE or Al Jazeera. UAE MOD confirms air defenses responded to incoming missile and drone threats Saturday. March 7: IRGC claims fresh drone/missile attack on Al Dhafra as retaliation for Minab school strike. UAE MOD detected 16 ballistic missiles and 121 drones on Saturday. UAE has not confirmed IRGC damage claims. March 7: IRGC navy drone unit claimed attack (Tasnim); UAE MOD confirmed 121 drones detected Saturday with 119 intercepted and 2 landing in UAE territory. Mar 7 dawn: IRGC claims mass drone swarm hit satellite comms, early warning & fire control radars. UAE confirmed 15/16 missiles and 119/121 drones intercepted on Saturday. 2 drones fell within UAE. On March 7, IRGC navy drone unit claimed strike on Al Dhafra, alleging hits on US satellite comms and radar systems (per Tasnim; not independently verified). UAE MoD confirmed detecting 121 UAVs Saturday, intercepting 119 with 2 falling within UAE. All 16 ballistic missiles intercepted (one fell to sea). March 7: IRGC navy claimed drone attack hitting US SATCOM center and radars (unverified by UAE). UAE MOD detected 121 drones Saturday, intercepted 119; 2 fell within UAE. On March 7, IRGC Navy drone unit claimed strike hitting US satellite communication centre and radar systems. UAE detected 16 ballistic missiles (15 intercepted) and 121 drones (119 intercepted) on Saturday. On March 7, IRGC Navy claimed a massive drone swarm attack hit US satellite comms, early warning radars, and fire control radars at the base. UAE confirmed responding to incoming threats but did not confirm specific damage. Attack came hours after Pezeshkian's apology to Gulf neighbors, underscoring IRGC's independent operational authority. March 8: UAE reports continued incoming threats. CNBC reports Iran struck a US air base in UAE shortly after Pezeshkian's apology. Iran said it struck a US air base in the UAE on March 7-8, shortly after President Pezeshkian's apology to Gulf states. On March 8, IRGC Navy claimed a drone attack on Al Dhafra hitting US satellite comms and radar systems (per Tasnim). UAE MOD reported intercepting 16/17 ballistic missiles and 113/117 drones on March 8. Cumulative UAE totals since Feb 28: 238 ballistic missiles detected (221 destroyed, 15 into sea, 2 landed), 1,342 drones (80 fell within territory).",
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
                    },
                    {
                            "date": "2026-03-06",
                            "text": "IRGC claimed retaliatory strike on Al Dhafra Air Base 'using drones and precision missiles' in response to US strike on Minab girls' school. IRGC stated on state TV: 'Al-Dhafra air base, belonging to American terrorists in the region, was targeted.'"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC Navy claimed via Tasnim news agency that drones hit US satellite communication centre and fire control radars at Al Dhafra. Al Jazeera could not immediately verify; UAE has not commented. UAE Defence Ministry confirmed air defenses were responding to incoming threats from Iran."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC Navy claimed new drone attack on al-Dhafra airbase (per Tasnim). UAE Defence Ministry said air defences were responding to incoming missile and drone threats from Iran on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC publicly claimed drone and precision missile attack on Al Dhafra, stating it targeted US satellite communications, early warning and fire control radars, and drone/reconnaissance aircraft hangars, in retaliation for Minab school strike. UAE Defence Ministry confirmed air defenses responding to incoming missile and drone threats."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC Navy claims drone attack hit US satellite communications centre, early warning and fire control radars at Al Dhafra (via Tasnim news agency). UAE has not confirmed. Al Jazeera could not independently verify the claim."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC navy drone unit claimed a targeted attack on Al Dhafra using drones and precision missiles, claiming to have hit US satellite comms, early warning radars, and fire control systems. IRGC framed attack as retaliation for Minab school strike. UAE MOD reported detecting 16 ballistic missiles on Saturday (15 intercepted, 1 fell in sea) and 121 drones (119 intercepted, 2 fell in UAE). UAE has not confirmed IRGC damage claims."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC navy drone unit claimed attack on Al Dhafra per Tasnim; claimed hitting US satellite communication center, early warning and fire control radars. UAE MOD confirmed detecting 121 drones Saturday (119 intercepted, 2 fell in UAE). UAE has not confirmed the specific IRGC damage claims."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC Navy claimed 'mass drone swarm attack' at dawn hitting US satellite communication center, early warning radars, and fire control radars. UAE MOD confirmed detecting 16 ballistic missiles (15 intercepted, 1 fell in sea) and 121 drones (119 intercepted, 2 fell in UAE) on Saturday. Chinese MizarVision satellite imagery reportedly shows multiple impact points."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC Navy drone unit claimed strike on Al Dhafra; Tasnim reported US satellite communication centre, early warning and fire control radars were hit. UAE MoD reported detecting 121 UAVs on Saturday, intercepting 119, with two falling within UAE territory."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC Navy claimed 'massive drone swarm attack' on Al Dhafra Air Base targeting US satellite communications center, early warning radars, and fire control radars. Tasnim/Mehr News reported targets 'successfully hit.' UAE Defence Ministry confirmed responding to incoming missile and drone threats but did not confirm specific damage claims. CNBC confirmed the attack came shortly after Pezeshkian's apology to Gulf neighbors."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "UAE Defence Ministry confirmed air defences responding to incoming missile and drone threats from Iran on March 8 (Al Jazeera live blog). IRGC Navy had claimed drone attack hit US satellite communication centre and radars at Al Dhafra on March 7 (Tasnim via Al Jazeera — unverified by UAE)."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "CNBC/Iran state media reported Iran struck a US air base in the UAE shortly after Pezeshkian's apology to Gulf neighbors on March 7-8."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Countries across the Gulf reported further aerial attacks and interceptions early Sunday morning (March 8). UAE Defence Ministry continued reporting interceptions of Iranian drones and missiles."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "IRGC Navy claimed a drone attack on Al Dhafra airbase, stating a US satellite communication centre, early warning and fire control radars were hit (per Tasnim). UAE has not confirmed. UAE MOD reported intercepting 16 of 17 ballistic missiles and 113 of 117 drones detected March 8."
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
                    },
                    {
                            "name": "Times of Israel (citing IRGC state TV)",
                            "url": "https://www.timesofisrael.com/liveblog_entry/irgc-claims-it-targeted-us-base-in-uae-over-school-strike/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/07/not-slowing-down-one-week-on-us-israeli-strikes-on-iran-continue.html"
                    },
                    {
                            "name": "IRGC via Tasnim News Agency",
                            "url": "https://www.tasnimnews.ir/en/news/2026/03/07/3533952/irgc-conducts-drone-swarm-attack-on-al-dhafra-air-base"
                    },
                    {
                            "name": "RFE/RL",
                            "url": "https://www.rferl.org/a/azerbaijan-iran-plot-oil-pipeline-energy-attack-middle-east/33698209.html"
                    },
                    {
                            "name": "Mehr News Agency",
                            "url": "https://en.mehrnews.com/news/242420/IRGC-conducts-drone-swarm-attack-on-Al-Dhafra-Air-Base"
                    },
                    {
                            "name": "Al Jazeera (March 8 Live Blog)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/8/iran-live-israel-bombs-tehran-oil-depots-attacks-on-gulf-states-continue"
                    },
                    {
                            "name": "CNN (Day 8 Live)",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-07-26"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
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
            "detail": "Abu Dhabi's primary airport. Directly targeted by Iranian drones during the Feb 28 barrage. 1 killed, 7 injured from debris of intercepted drone. UAE airspace remains CLOSED as of Mar 2. All Etihad flights cancelled. March 5: Six Pakistani and Nepali nationals injured in Iranian strike on Abu Dhabi (CNN/Abu Dhabi media office). UAE MoD reports 1 of 7 ballistic missiles detected on March 5 fell inside the country; 6 intercepted along with 125 drones. Mar 5: UAE MOD confirms 1 of 7 ballistic missiles fell inside UAE territory. 6 drones also penetrated defenses. Six Pakistani and Nepali nationals sustained minor-moderate injuries from debris at two Abu Dhabi locations. On March 5, UAE MoD reported detecting 7 ballistic missiles (6 intercepted, 1 fell inside UAE) and 131 drones (125 intercepted, 6 fell inside UAE). Cumulative totals since Feb 28: 196 ballistic missiles detected (181 destroyed, 13 fell to sea, 2 landed on territory), 1,072 drones detected (1,001 intercepted), 8 cruise missiles destroyed. Limited flight operations resumed March 6 in coordination with emergency authorities. Limited flight operations resumed March 6 in coordination with crisis management authorities.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian drone targeted airport. Interception debris killed 1 person (Asian national) and injured 7. Airport evacuated and all operations suspended indefinitely."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Abu Dhabi's emirate media office confirmed six Pakistani and Nepali nationals were injured in an Iranian strike on Abu Dhabi on Thursday March 5. UAE MoD reported that of 7 ballistic missiles detected on March 5, one fell inside the country."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "UAE MOD reports 7 ballistic missiles detected on Mar 5; 6 intercepted, 1 fell inside UAE territory. 131 drones detected, 125 intercepted. Haaretz reported explosions near Abu Dhabi Airport. Six people (Pakistani and Nepali nationals) injured by falling debris from intercepted drones at two Abu Dhabi locations."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "UAE MoD confirmed one of seven ballistic missiles fell inside UAE territory on March 5; six drones also penetrated defenses. Limited flight operations resumed at Zayed International Airport in coordination with emergency management (Gulf News, CBS News, Emirates247)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Limited flight operations resumed at Zayed International Airport in coordination with the Emergencies, Crises and Disasters Management Center."
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
                    },
                    {
                            "name": "CNN (Day 6 Live Blog)",
                            "url": "https://us.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/americas/us-israel-iran-war-day-6-iran-israel-strikes-continue-uae-extends-limited-flights-1.500463753"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-spreads-azerbaijan-israel-strikes-tehran-lebanon/"
                    },
                    {
                            "name": "Haaretz",
                            "url": "https://www.haaretz.com/israel-news/israel-security/2026-03-05/ty-article-live/idf-launches-second-wave-of-strikes-on-regime-targets-in-tehran/0000019c-bb20-df64-a59c-fb765d040000"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/uae-air-defences-intercept-six-ballistic-missiles-125-drones-on-thursday-1.500464373"
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
            "detail": "World's busiest airport by international passengers. Terminal 3 directly hit by an Iranian drone. 4 staff injured. Hit again in a SECOND attack early Mar 1. Fully evacuated, all 3,400+ flights cancelled. Emirates, Flydubai suspended all operations. Day 3 (March 2): Fresh explosions heard in Dubai for third consecutive day. CNN team reported back-to-back blasts and jets overhead. March 2: Third consecutive day of explosions in Dubai. Airport remains closed; Flightradar24 reports 2,000+ flights cancelled across seven key Gulf airports. March 2: Third day of explosions heard across Dubai. UAE airspace remains closed. Etihad flights suspended until March 3. Dubai Airports announced limited flight resumption from DXB and DWC starting evening of March 2, three days after initial shutdown. Mar 2: Dubai Airports announced limited resumption of flights from DXB and DWC starting Monday evening after 3 days shutdown. Thousands of passengers remain stranded. March 2 evening: Dubai Airports announced limited flight resumption at DXB and DWC after 3 days of closure. Thousands of passengers remain stranded. March 7: Drone impact/debris incident near Concourse A. GDMO confirmed debris from interception. Emirates flights suspended again. Incident occurred shortly after Iran's President Pezeshkian apologized to neighboring countries and announced intent to stop attacks on Gulf states. On March 7, debris from an interception fell in Dubai (no injuries). Authorities denied airport incidents but flights briefly aborted landings. Emirates partially resumed operations from DXB and DWC. On Saturday March 7, DXB temporarily suspended, then partially resumed operations. GDMO confirmed debris from interception caused a minor incident. Emirates airline resumed flights Saturday afternoon. UAE MOD: 121 drones detected Saturday, 119 intercepted, 2 fell within UAE. March 7: Drone debris near Concourse A triggered shelter-in-place and brief suspension. No injuries. Operations partially resumed. March 7: Drone exploded next to Concourse A shortly after Iran's president apologized to neighbors. BBC-verified video shows explosion near terminal. Emirates suspended then resumed operations within 30 minutes. Mar 7 morning: Drone detonated adjacent to Concourse A. DXB suspended operations, diverted flights. Emirates resumed afternoon service. On March 7, a drone exploded next to Concourse A on the runway, narrowly missing the terminal and a parked aircraft. A fire was reported at Terminal 3. Flight operations were suspended and the airport evacuated. BBC verified video of the strike. No injuries reported. UAE MoD said 16 ballistic missiles were fired at the UAE on Saturday — all but one intercepted (one fell to sea). 121 drones were detected, 119 intercepted, 2 fell within UAE. March 7: DXB suspended operations Saturday morning after drone detonated near Concourse A. Emirates resumed limited flights in the afternoon. Dubai Media Office denied social media reports of direct airport strike, confirmed debris incident in the city. March 7: Drone exploded near Concourse A, forcing another suspension of operations. Airport partially resumed flights later in the day. Emirates suspended all flights until further notice before lifting it shortly afterward. On March 7, despite Pezeshkian's announced halt to Gulf strikes, DXB was attacked by Iranian drones. Emirates flights suspended then partially resumed. Wikipedia noted attacks occurred after Pezeshkian's statement, underscoring IRGC operational independence. On March 7-8, a drone approached near Concourse A, forcing a brief suspension of operations. AFP-verified footage showed an explosion and smoke near a terminal building. Passengers were evacuated to underground tunnels. Emirates resumed flights shortly after. Missile sirens activated in Dubai on Tuesday morning March 10; UAE MOD confirmed air defences responding to incoming Iranian threats. March 10: Air raid sirens again over Dubai; flights briefly suspended. UAE reported 15 ballistic missiles tracked (12 intercepted, 3 into coastline) and 18 drones (17 intercepted) in latest wave. UAE's National Emergency Authority lowered overnight alert volume (10:30 PM–9 AM) from klaxon to standard text chime after days of sleep disruption. March 10: Sirens at ~04:30 GMT forced passengers to bomb shelters; all incoming flights held. Emirates suspended and then partially resumed operations. March 10: Sirens and flight suspension recurred as UAE MOD reported 9 ballistic missiles and 35 drones fired at UAE today (8 missiles destroyed, 1 fell in sea; 26 of 35 drones intercepted, 9 fell within UAE territory).",
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
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Iranian drone appeared to impact DXB, barely missing Concourse A, per video evidence cited by Times of Israel/OSINT. AFP witness reported explosion heard near airport followed by cloud of smoke. GDMO described a 'minor incident resulting from the fall of debris after an interception' and denied further airport incidents. Emirates suspended then partially resumed all flights. No injuries reported."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Dubai Media Office confirmed a minor debris incident from an interception was successfully contained with no injuries. Authorities denied social media reports of any incident at the airport itself. Several Emirates flights aborted landings and entered holding patterns due to smoke near the airfield."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "DXB operations temporarily suspended Saturday morning due to incoming threats. GDMO reported 'minor incident from fall of debris after an interception.' Emirates flights briefly suspended then resumed. Two Iranian drones fell within UAE territory Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "At ~06:30 local time, air raid alerts sounded across Dubai. A drone exploded near Concourse A prompting shelter-in-place orders and brief suspension of all DXB operations. Dubai Media Office confirmed 'minor incident resulting from the fall of debris after an interception' with no injuries. Emirates suspended then resumed operations within ~30 minutes. DXB partially resumed with 106 daily return flights to 83 destinations."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Iranian Shahed-136 drone exploded next to Concourse A, narrowly missing the terminal building and a parked Emirates aircraft. Air raid alerts sounded across Dubai from ~06:30 local. Emirates temporarily suspended all flights; operations resumed ~30 min later. BBC verified video of the explosion. Dubai Media Office described it as debris from an interception but footage showed a drone impact. Despite Pezeshkian's apology broadcast shortly before, attacks continued."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Air raid alerts ~6:30am local. Drone exploded next to Concourse A, narrowly missing terminal building and parked aircraft. Black smoke seen rising near airfield. DXB operations suspended; flights diverted to Abu Dhabi, Al Ain, DWC, and Muscat. Dubai Media Office initially described 'minor incident from debris after interception,' then denied airport incident despite video evidence. Emirates resumed afternoon flights."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Iranian drone struck DXB runway near Concourse A on Saturday morning, barely missing terminal building and a parked aircraft. Fire reported at Terminal 3. All flights suspended; Emirates temporarily halted operations. BBC-verified video shows explosion and smoke rising from impact site. Operations partially resumed ~30 min later. Dubai government described it as 'minor incident from debris after interception' with no injuries."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "DXB briefly suspended operations Saturday morning after air raid alerts at ~6:30am local. A drone reportedly exploded near Concourse A. Dubai Media Office described a 'minor incident resulting from the fall of debris after an interception.' Emirates and flydubai resumed limited operations later Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Iranian drone exploded near Concourse A at DXB, narrowly missing the terminal and a parked aircraft. Operations temporarily suspended again. AFP witnesses reported loud explosion and smoke near a concourse. Flights partially resumed later."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Despite Pezeshkian's halt announcement, DXB was attacked by Iranian drones on March 7. All Emirates flights were suspended then partially resumed. Flights were in holding pattern. Dubai Media Office initially reported minor debris incident, denied airport incident, then flights were suspended again."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Dubai airport briefly suspended operations Saturday March 7 (continuing into March 8 UTC) after a drone was intercepted near Concourse A. AFP-authenticated footage showed explosion and smoke near a concourse. Passengers sheltered in tunnels. Operations resumed within an hour. No injuries reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Incoming missile sirens sounded in Dubai on Tuesday morning (March 10). UAE Ministry of Defence confirmed air defences responding to incoming threats from Iran."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Air raid sirens sounded over Dubai early Tuesday after UAE air defenses warned of incoming Iranian missiles and drones. Flights temporarily halted at DXB before resuming."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Air raid sirens sounded across Dubai early Tuesday (~04:30 GMT). Emirates temporarily halted all arriving flights. UAE lowered volume of overnight missile alerts after repeated disruptions."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Air raid sirens sounded early Tuesday morning; flights temporarily halted at ~04:30 GMT as passengers sent to bomb shelters. Emirates suspended all flights until further notice before partial resumption."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Air raid sirens sounded over Dubai airport; flights temporarily halted again as UAE air defenses warned of incoming Iranian missiles and drones. Emirates urged passengers not to travel to the airport without confirmed bookings."
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
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/iranian-drone-appears-to-hit-dubai-airport-shortly-after-pezeshkian-apologizes-to-neighboring-countries-for-attacks/"
                    },
                    {
                            "name": "Athens Times",
                            "url": "https://athens-times.com/dubai-airport-struck-by-iranian-drone-flights-suspended/"
                    },
                    {
                            "name": "Türkiye Today (AFP)",
                            "url": "https://www.turkiyetoday.com/region/explosion-over-dubai-airport-more-flight-cancellations-ahead-3215766"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/07/shrapnel-falls-after-interception-in-dubai"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/dubai-authorities-confirm-minor-debris-incident-contained-ensure-public-safety-1.500466228"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/07/dubai-officials-deny-reports-of-incident-at-airport/"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/07/uae-defences-iran-missile-attacks/"
                    },
                    {
                            "name": "ABC7 (AP)",
                            "url": "https://abc7.com/live-updates/iran-live-updates-trump-says-major-combat-operations-have-begun/18660347/"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635553/middle-east"
                    },
                    {
                            "name": "TravelPirates",
                            "url": "https://www.travelpirates.com/captains-log/dubai-airport-march-7-2026-flights-update-emirates-drone"
                    },
                    {
                            "name": "Newsweek",
                            "url": "https://www.newsweek.com/dubai-airport-drone-attack-video-explosion-travel-update-11638328"
                    },
                    {
                            "name": "AFP (via Al Jazeera)",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "Al Jazeera (Video)",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/3/7/moment-drone-strikes-dubai-international-airport"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/07/world/video/dubia-aiprort-strike-drone-iran-gulf"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/07/iranian-drone-attack-suspends-flights-at-dubai-international-airport"
                    },
                    {
                            "name": "Times of Israel / AFP",
                            "url": "https://www.timesofisrael.com/israel-said-to-pause-uae-repatriation-efforts-as-dubai-airport-hit-by-drone-attack/"
                    },
                    {
                            "name": "KNEWS Media",
                            "url": "https://knews.media/2026/03/07/video-famous-skyscraper-in-dubai-hit-by-the-fragments-of-an-intercepted-projectile/"
                    },
                    {
                            "name": "The Irish Times",
                            "url": "https://www.irishtimes.com/world/middle-east/2026/03/07/iran-latest-live-updates-us-israel-trump-netanyahu-dubai/"
                    },
                    {
                            "name": "Wikipedia — 2026 Iran war",
                            "url": "https://en.wikipedia.org/wiki/2026_Iran_war"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/07/euronews-journalist-seeks-shelter-at-dubai-airport-during-iranian-drone-attack"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/dubai-airport-partially-resumes-services-after-drone-attack"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
                    },
                    {
                            "name": "Express & Star (AP)",
                            "url": "https://www.expressandstar.com/news/2026/03/10/flights-temporarily-halted-at-dubai-airport-as-air-raid-sirens-sound-amid-missile-threat/"
                    },
                    {
                            "name": "AP (via 1011now)",
                            "url": "https://www.1011now.com/2026/03/10/iran-launches-new-attacks-israel-gulf-countries-it-keeps-up-pressure-middle-east/"
                    },
                    {
                            "name": "1News (AP)",
                            "url": "https://www.1news.co.nz/2026/03/10/sirens-in-dubai-iran-launches-new-attacks-at-gulf-arab-countries/"
                    },
                    {
                            "name": "Lokmat Times (NDTV video)",
                            "url": "https://www.lokmattimes.com/international/missile-attack-at-dubai-airport-passengers-rush-to-bomb-shelters-after-uae-air-defences-warn-of-iranian-missiles-watch-video-a517/"
                    },
                    {
                            "name": "Military.com / AP",
                            "url": "https://www.military.com/daily-news/2026/03/10/iran-launches-new-attacks-targeting-israel-and-gulf-countries-it-seeks-ramp-pressure-us.html"
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
            "detail": "Abu Dhabi's main city port, cruise terminal, AND Al Salam Naval Base (French military). Directly struck by at least 2 Shahed-136 drones targeting the French naval base. A missile also landed in the water meters from the German cruise ship Mein Schiff 4 (2,500 passengers). Two Iranian drones struck warehouse at Al Salam Naval Base. French Defense Minister confirmed hangar hosting French forces was hit with limited damage. No casualties. On March 1, UAE MOD confirmed two Iranian drones hit a warehouse at the Al Salam Naval Base (Camp de la Paix), which hosts French forces. Fire in two containers; no casualties. French Defence Minister confirmed limited material damage. French Camp de la Paix near the port was also struck; France deployed Rafale jets in response. French naval air base Camp de la Paix near Zayed Port was also struck by Iranian drones, prompting France to deploy Rafale jets for base defense.",
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
                    },
                    {
                            "date": "2026-02-28",
                            "text": "French naval air base Camp de la Paix near Zayed Port was struck by drones on Feb 28. France deployed Rafale jets to protect its bases following the attacks (Wikipedia, Al Jazeera)."
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
            "detail": "Major residential suburb between Abu Dhabi city and the airport — directly under the flight path of missiles targeting Al Dhafra and AUH Airport. Interceptor debris confirmed by UAE MOD. On March 9, two more debris injuries confirmed in Abu Dhabi following fresh interceptions. A Jordanian and an Egyptian national injured. UAE MoD reported intercepting 12 ballistic missiles and 17 drones on Monday. March 9: Two people injured from debris at two Abu Dhabi locations. UAE intercepted 12 BMs and 17 drones on Monday alone. Total since Feb 28: 233+ BMs, 1,359+ drones, 8 cruise missiles intercepted. March 9: Two debris injuries in Abu Dhabi confirmed — a Jordanian national (minor) and an Egyptian national (moderate). UAE intercepted 12 of 15 ballistic missiles and 17 of 18 drones on Monday. Cumulative since Feb 28: 233 of 253 missiles and 1,359 of 1,440 drones destroyed. March 9: UAE intercepted 12 ballistic missiles and 17 drones. Two injured from falling debris in Abu Dhabi. Cumulative UAE totals: 233 ballistic missiles, 1,359 drones, 8 cruise missiles intercepted since Feb 28.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Shrapnel and interceptor debris fell in residential neighborhoods during multiple waves of Iranian attack. Confirmed by UAE MOD."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Abu Dhabi Media Office confirmed debris fell in two Abu Dhabi locations after successful air defense interceptions. A Jordanian national sustained minor injuries and an Egyptian national sustained moderate injuries. Emergency services responded. UAE MoD confirmed intercepting 12 ballistic missiles and 17 drones on March 9."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Two people injured in Abu Dhabi after fallen debris from missile interceptions fell across two locations. UAE MoD reported intercepting 12 ballistic missiles and 17 drones on Monday. Total since Feb 28: 233+ BMs and 1,359+ drones intercepted."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Abu Dhabi Media Office confirmed debris fell at two locations in Abu Dhabi following successful interceptions. A Jordanian national sustained minor injuries; an Egyptian national sustained moderate injuries."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "UAE MOD confirmed air defences intercepted 12 ballistic missiles and 17 drones on Monday. Two people injured by falling debris in Abu Dhabi. Total UAE casualties since Feb 28: 4 killed, 117 injured."
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
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/uae-air-defence-intercepts-threats-debris-injures-two-in-abu-dhabi-1.500468237"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/uae/emergencies/abu-dhabi-drone-debris-2-locations-2-injured"
                    },
                    {
                            "name": "ARN News Centre",
                            "url": "https://www.arnnewscentre.ae/en/news/uae/two-injured-from-fallen-debris-in-abu-dhabi/"
                    },
                    {
                            "name": "Dubai Eye 103.8 / ARN",
                            "url": "https://www.dubaieye1038.com/news/local/two-injured-from-fallen-debris-in-abu-dhabi/"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/09/missile-threat-alert-issued-as-loud-bangs-heard-in-abu-dhabi/"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/09/two-members-of-uae-armed-forces-killed-in-helicopter-crash-caused-by-technical-malfunction/"
                    },
                    {
                            "name": "Khaleej Times (Day 10 Live)",
                            "url": "https://www.khaleejtimes.com/world/mena/day-10-us-israel-iran-war-live-updates"
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
            "detail": "UK Maritime Trade Operations (UKMTO) reported multiple maritime incidents on March 1: one vessel west of Sharjah rocked by explosion from unknown projectile; another tanker north of Muscat struck above the waterline sparking a fire; a third vessel northwest of Mina Saqr hit by projectile igniting a blaze aboard. Widespread GPS jamming also reported across Emirati, Qatari, Omani and Iranian waters. On March 2, IRGC commander General Jabbari declared the Strait closed and threatened to set passing vessels on fire. Maritime traffic has effectively ceased. IRGC struck tanker ATHE NOVA with drones. JMIC elevated regional maritime threat level to CRITICAL. HERCULES STAR struck 17nm NW of Mina Saqr (fire extinguished, no injuries). OCEAN ELECTRA near-miss 35nm W of Sharjah. Total 5+ commercial vessels now struck/targeted. 150+ ships stranded. Major insurers cancelling war-risk coverage. Norwegian Maritime Authority raised to MARSEC/ISPS Level 3. On March 3, IRGC senior adviser Jabari declared 'the strait is closed' and threatened to set ablaze any ship attempting passage. IRGC also threatened to attack oil pipelines. Tanker traffic through the strait has dropped approximately 70% with over 150 ships anchoring outside to avoid risks. IRGC senior adviser Ebrahim Jabari declared Strait closed: 'If anyone tries to pass, the heroes of the Revolutionary Guard will set those ships ablaze.' At least 5 tankers damaged, 2 personnel killed, ~150 ships stranded. All major shipping lines (Maersk, MSC, Hapag-Lloyd, CMA CGM) suspended Hormuz transit. JMIC elevated regional maritime threat level to 'critical' on March 1. At least five commercial vessels struck or targeted in 24 hours. Oil tanker Hercules Star struck near Mina Saqr; bulk carrier Ocean Electra near-miss off Sharjah. As of March 3, the Strait of Hormuz remains effectively closed to commercial shipping. JMIC upgraded risk assessment to Critical. P&I insurance withdrawn from March 5, making transit economically unviable. At least 5 tankers damaged, ~150 ships stranded. March 4: IRGC Navy claims complete control of the strait. Deputy commander says 10+ tankers struck. UKMTO also reported a container ship struck in the strait. CENTCOM says no Iranian ships remain operational in the Arabian Gulf, Strait of Hormuz, or Gulf of Oman after US forces destroyed 17 Iranian vessels including a submarine. On March 4, IRGC claimed 'complete control' of the strait. Trump ordered US Navy to escort tankers 'as soon as possible'. Only one tanker (Pola) managed a rare transit by switching off its AIS tracker. About 3,200 ships idle in the Gulf per Clarksons Research. As of March 5, P&I insurance has been withdrawn for the strait, making commercial shipping economically impossible even if physically attempted. Effective March 5, major P&I insurers cancelled war-risk coverage, making the strait economically unviable. War-risk premiums spiked to ~1% of ship value (from 0.2% pre-conflict). Over 150 vessels stranded; tanker traffic near zero. As of March 5, P&I insurance cancellation notices took effect, making the strait economically impassable. War-risk premiums surged to 1% of ship value (from 0.2% pre-conflict). The strait remains technically open but is functionally closed to commercial traffic. P&I insurance removed for March 5 transit. IRGC Navy official Mohammad Akbarzadeh declared strait under 'complete control of the Islamic Republic's Navy.' Approximately 3,200 ships idle in the Gulf. P&I insurance removed for March 5, effectively making commercial transit economically unviable. IRGC Navy official Mohammad Akbarzadeh declared Strait under 'complete control of the Islamic Republic's Navy.' Trump pledged US Navy would escort tankers 'as soon as possible.' On March 5, P&I insurance was formally withdrawn for strait transits, effectively shutting down all remaining commercial traffic. Strait remains technically open but functionally closed. On March 5, IRGC revised its Strait closure policy to target only Western-allied shipping. P&I insurance coverage removed for March 5, effectively shutting down commercial transit. Italy announced plans to send air defense aid to Gulf countries.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC Navy official Mohammad Akbarzadeh declared 'complete control' of Strait of Hormuz via Fars news agency; warned any vessel attempting transit risks damage from missiles or stray drones"
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Protection & Indemnity (P&I) insurance coverage withdrawn for vessels transiting Strait of Hormuz effective March 5, making commercial transit economically unviable. Maritime traffic effectively at zero."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "War-risk insurance cancellation notices from major P&I clubs (Gard, Skuld, NorthStandard, London P&I Club, American Club) take effect March 5, making the strait economically unviable for commercial shipping. Strait remains technically open but effectively closed with near-zero traffic."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "War-risk insurance cancellation notices from Gard, Skuld, NorthStandard, London P&I Club, and American Club took effect March 5, making the strait economically impassable for commercial shipping. Strait remains technically open but effectively closed."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "P&I insurance cover removed for Strait of Hormuz transit effective March 5, making economic risk prohibitive for ship owners. IRGC claims 'complete control' of the strait; ~3,200 ships (4% of global tonnage) idled in the Gulf; 200+ ships anchored off producer coasts."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "P&I insurance withdrawn for Strait of Hormuz effective March 5, making economic risk too high for ship owners to transit. IRGC claims complete control of strait. JMIC maintains CRITICAL maritime threat level."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Protection and indemnity insurance formally removed for March 5, making economic risk too high for ship owners to transit. IRGC claimed 'complete control' of the strait on March 4. Strait declared a high-risk zone with extra pay and right of refusal for crew."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "IRGC announced Strait of Hormuz is only closed to ships from US, Israel, Europe and other Western allies — effectively modifying its previous total closure threat. Protection and indemnity insurance was removed for March 5, making economic risk too high for most ship owners. Strait remains technically open but effectively closed to commercial traffic."
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
                    },
                    {
                            "name": "Al Arabiya / AFP",
                            "url": "https://english.alarabiya.net/News/middle-east/2026/03/04/irgc-says-that-has-complete-control-of-hormuz-strait"
                    },
                    {
                            "name": "Wikipedia — 2026 Strait of Hormuz crisis",
                            "url": "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/economy/2026/3/3/maritime-insurers-cancel-war-risk-cover-in-gulf-will-it-spike-energy-cost"
                    },
                    {
                            "name": "Atlas Institute",
                            "url": "https://atlasinstitute.org/the-strait-that-moves-the-market-the-2026-strait-of-hormuz-crisis-and-the-anatomy-of-a-global-energy-shock/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
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
            "detail": "A major fire broke out at the Fujairah Oil Industry Zone on Tuesday March 3 after debris from a successfully intercepted Iranian drone fell inside the facility. The Fujairah Media Office confirmed no injuries were reported, the fire was contained, and normal operations resumed. Fujairah is the world's third-largest oil storage hub and a key bunker fuel supplier for ships transiting the Strait of Hormuz. On March 3, Fujairah authorities confirmed sounds heard were from successful air defense interceptions. On March 3, a new debris fire from a drone interception prompted the suspension of an ATP Challenger tennis tournament in Fujairah. The Fujairah press office confirmed ongoing interception operations. Al Jazeera reported on March 4 that Fujairah port was again targeted overnight as Tehran continued retaliatory strikes for a fourth night. Second interception-debris fire reported at Fujairah oil tanks on Day 9 of conflict. No injuries. Authorities responding. Fujairah authorities confirmed a fire broke out in the Fujairah Oil Tanks area after debris from successful air defence interceptions fell in the vicinity. No injuries reported. On March 9, Fujairah authorities confirmed a new fire in the Oil Tanks area from air defence interception debris. No injuries reported. March 9: Second fire at FOIZ from interception debris. Brought under control, no injuries. New fire from intercepted drone debris hit the manifold and berth area overnight Mar 8-9. FOTT loading operations halted. Some Fujairah suppliers declared force majeure on bunker deliveries. March 9: Renewed debris fire at oil facility after overnight interceptions. Contained, no injuries. New fire at Fujairah Oil Tanks area on March 9 from interceptor debris. No injuries. Contained by authorities.",
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
                    },
                    {
                            "date": "2026-03-09",
                            "text": "New fire broke out in Fujairah Oil Tanks area after debris from successful air defence interceptions fell in the vicinity. No injuries reported. Authorities responding."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Fujairah authorities confirm fire in Fujairah Oil Tanks area after debris from air defence interceptions fell in the vicinity. No injuries reported. Emergency teams responding."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "New fire broke out in Fujairah Oil Tanks (FOIZ Petroleum) area after debris from successful air defense interceptions fell in vicinity. Fire brought under control, no injuries reported. Xinhua and Khaleej Times confirmed. This is the second major fire at FOIZ since the conflict began."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "New fire at Fujairah Oil Tanks area from intercepted drone debris overnight (March 8-9). Fujairah Media Office confirmed fire brought under control with no injuries. Product loading at Fujairah Oil Tanker Terminal (FOTT) stopped following the attack. Some suppliers declared force majeure."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Authorities in Fujairah confirmed a fire broke out at an oil facility in the Fujairah Oil Tanks area after debris from overnight air defence interceptions fell in the vicinity. Fire was contained. No injuries reported."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Fujairah authorities confirmed new fire at oil tanks area after debris from successful air defense interceptions fell in the vicinity. No injuries reported. Fire brought under control."
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
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-on-iran-day-9-new-strikes-hit-tehran-as-attacks-hit-gulf-nations-uae-president-warns-enemies-1.500467141"
                    },
                    {
                            "name": "Xinhua",
                            "url": "https://english.news.cn/20260309/a410736443664e87bc21f1f53fd475f7/c.html"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/uae/emergencies/fujairah-oil-industry-zone-fire-drone-shrapnel-interception"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/futhorities-responding-to-a-fire-that-broke-out-in-the-fujairah-oil-tanks-area-no-injuries-1.500467919"
                    },
                    {
                            "name": "Ship & Bunker",
                            "url": "https://shipandbunker.com/news/emea/899472-new-fujairah-attack-adds-more-turmoil-to-bunker-market"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/mena/usisrael-war-on-iran-day-10-mojtaba-khamenei-named-supreme-leader-gulf-states-face-new-attacks-1.500467987"
                    },
                    {
                            "name": "ARN News Centre",
                            "url": "https://www.arnnewscentre.ae/en/news/uae/two-injured-from-fallen-debris-in-abu-dhabi/"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
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
    {
            "name": "ICAD-2, Musaffah Industrial City, Abu Dhabi (Interceptor Debris Injuries)",
            "lat": 24.3607,
            "lng": 54.5192,
            "country": "UAE",
            "city": "Abu Dhabi",
            "severity": "high",
            "icon": "💥",
            "type": "Interceptor Debris Zone",
            "detail": "Six people were injured by falling debris from drones successfully intercepted by air defence systems over Abu Dhabi. The Abu Dhabi media office confirmed debris fell in two locations in the ICAD-2 industrial district. The affected individuals were Pakistani and Nepalese nationals who sustained minor to moderate injuries. On March 5, six additional Pakistani and Nepali nationals were injured by debris from an intercepted drone in Abu Dhabi. UAE MOD cumulative totals now show 189 ballistic missiles detected (175 destroyed, 13 into sea, 1 landed), 941 drones detected (876 intercepted, 65 fell within country), and 8 cruise missiles destroyed. Total UAE casualties now 3 killed, 78+ injured. March 5: 6 Pakistani and Nepali nationals injured by interceptor debris in ICAD-2 district. Khaleej Times reports 94 UAE residents have been injured since the start of Iranian attacks (up from 78 previously reported), with 6 new injuries on March 5 from interceptor debris in Abu Dhabi. Abu Dhabi Media Office confirmed debris fell at two locations on March 5; 6 Pakistani and Nepali nationals injured. UAE MoD: 7 ballistic missiles detected (6 intercepted, 1 landed), 131 drones detected (125 intercepted, 6 landed) on March 5. On March 5, Abu Dhabi authorities responded to debris falling incidents in two areas of ICAD-2 after successful drone interceptions. Six Pakistani and Nepalese nationals sustained minor-to-moderate injuries. UAE total injured stands at 94 as of March 5.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "Six Pakistani and Nepalese nationals injured by falling debris from intercepted drones in two locations in ICAD-2 district, Abu Dhabi."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Six Pakistani and Nepali nationals injured by debris from intercepted Iranian drone in Abu Dhabi, the emirate's media office confirmed Thursday."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Six Pakistani and Nepali nationals sustained minor to moderate injuries from falling debris after successful drone interceptions over Abu Dhabi. Abu Dhabi media office confirmed debris fell in two locations in ICAD-2 district."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Abu Dhabi Media Office confirmed debris falling in two locations following successful drone interceptions; 6 Pakistani and Nepali nationals sustained minor/moderate injuries. UAE MoD reported intercepting 6 of 7 ballistic missiles and 125 of 131 drones detected on March 5."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Abu Dhabi Media Office confirmed six Pakistani and Nepalese nationals sustained minor-to-moderate injuries from falling debris after drones were intercepted over ICAD-2 in Musaffah."
                    }
            ],
            "sources": [
                    {
                            "name": "The Peninsula Qatar (Live Updates, citing Abu Dhabi Media Office)",
                            "url": "https://thepeninsulaqatar.com/article/05/03/2026/live-updates-qatar-evacuates-near-us-embassy-oil-spill-near-kuwait"
                    },
                    {
                            "name": "CNN Live Updates March 5",
                            "url": "https://edition.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5247804-6-injured-abu-dhabi-debris-intercepted-drone"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-spreads-azerbaijan-israel-strikes-tehran-lebanon/"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/world/mena/us-iran-tensions-israel-strikes-tehran-live-updates-day-6"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/middle-east/live-blog/live-updates-iran-war-trump-israel-warship-attack-middle-east-rcna261866"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/iran-us-war-spreads-azerbaijan-israel-strikes-tehran-lebanon/"
                    },
                    {
                            "name": "The National (UAE)",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/05/six-injured-in-abu-dhabi-by-debris-after-drones-intercepted/"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/live-updates-iran-war-trump-israel-warship-attack-middle-east-rcna261866"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "THAAD Battery Site (Al Ruwais Industrial City), Western Abu Dhabi, UAE",
            "lat": 24.0623,
            "lng": 52.7176,
            "country": "UAE",
            "city": "Al Ruwais",
            "severity": "critical",
            "icon": "🎯",
            "type": "THAAD Radar / Air Defense Strike",
            "detail": "CNN satellite imagery published March 6 confirms at least 3 buildings struck at this THAAD battery installation between Feb 28–Mar 1, including pull-through vehicle sheds used to store AN/TPY-2 radar systems. IRGC separately claimed destruction of the radar component (~$500M). It remains unclear whether the radar was inside at time of strike.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Satellite imagery confirms apparent strikes on three buildings at THAAD battery site including radar storage sheds; IRGC claims AN/TPY-2 radar destroyed"
                    }
            ],
            "sources": [
                    {
                            "name": "CNN Investigation (Satellite Imagery)",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/radar-bases-us-missile-defense-iran-war-intl-invs"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/americas/us-lost-nearly-2b-worth-of-military-equipment-in-first-4-days-of-strikes-against-iran/3849091"
                    },
                    {
                            "name": "Al Mayadeen English",
                            "url": "https://english.almayadeen.net/news/politics/iranian-strikes-damage-us-missile-defense-radars-in-jordan"
                    }
            ],
            "dateAdded": "2026-03-06"
    },
    {
            "name": "THAAD Battery Site (Al Sader), Abu Dhabi Emirate, UAE",
            "lat": 23.95,
            "lng": 54.25,
            "country": "UAE",
            "city": "Al Sader",
            "severity": "critical",
            "icon": "🎯",
            "type": "THAAD Radar / Air Defense Strike",
            "detail": "CNN satellite imagery published March 6 confirms at least 4 buildings struck at a second THAAD battery site in the UAE between Feb 28–Mar 1, including a pair of pull-through vehicle sheds used to store radar systems. Strike pattern described as 'nearly identical' to Al Ruwais site, suggesting a coordinated Iranian campaign to degrade US missile defense radars.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Satellite imagery confirms apparent strikes on four buildings at THAAD battery site including two radar storage sheds; coordinated with similar strike at Al Ruwais"
                    }
            ],
            "sources": [
                    {
                            "name": "CNN Investigation (Satellite Imagery)",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/radar-bases-us-missile-defense-iran-war-intl-invs"
                    },
                    {
                            "name": "Defence Industry EU (CNN summary)",
                            "url": "https://defence-industry.eu/satellite-images-indicate-damage-to-radar-facilities-tied-to-thaad-missile-defense-systems-in-jordan-and-uae-cnn/"
                    }
            ],
            "dateAdded": "2026-03-06"
    },
    {
            "name": "Al Barsha, Dubai (Interceptor Debris Fatality)",
            "lat": 25.1126,
            "lng": 55.2006,
            "country": "UAE",
            "city": "Dubai",
            "severity": "high",
            "icon": "💥",
            "type": "Interceptor Debris Fatality",
            "detail": "Debris from an aerial interception fell onto a vehicle in the Al Barsha area, killing an Asian driver. This raises the UAE's total death toll from Iranian strikes to four. Dubai authorities confirmed the incident via their official media office.",
            "incidents": [
                    {
                            "date": "2026-03-07",
                            "text": "Interceptor debris fell onto a vehicle in Al Barsha, killing an Asian (reported as Pakistani) driver. UAE death toll now at 4."
                    }
            ],
            "sources": [
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/07/uae-defences-iran-missile-attacks/"
                    },
                    {
                            "name": "Dubai Eye 103.8",
                            "url": "https://www.dubaieye1038.com/news/local/debris-incident-kills-one-in-al-barsha/"
                    },
                    {
                            "name": "Dubai Media Office (X)",
                            "url": "https://x.com/DXBMediaOffice/status/2030352998765858988"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Dubai Marina Tower (Debris Facade Damage)",
            "lat": 25.077,
            "lng": 55.134,
            "country": "UAE",
            "city": "Dubai",
            "severity": "high",
            "icon": "💥",
            "type": "Interceptor Debris — Building Damage",
            "detail": "Fallen debris from a successful aerial interception damaged the facade of a tower in Dubai Marina. No injuries were reported. Dubai Media Office confirmed the incident on Saturday.",
            "incidents": [
                    {
                            "date": "2026-03-07",
                            "text": "Debris from aerial interception damaged facade of a tower in Dubai Marina. No injuries reported."
                    }
            ],
            "sources": [
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/uae/2026/03/07/uae-defences-iran-missile-attacks/"
                    },
                    {
                            "name": "Dubai Eye 103.8",
                            "url": "https://www.dubaieye1038.com/news/local/dubai-authorities-handle-debris-incident-at-dubai-marina/"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "ADNOC Ruwais Refinery Complex (Drone Strike Fire), Al Dhafra Region, Abu Dhabi, UAE",
            "lat": 24.0865,
            "lng": 52.68,
            "country": "UAE",
            "city": "Ruwais (Al Dhafra Region)",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Oil/Energy Infrastructure Drone Strike",
            "detail": "Iranian drone strike caused fire at a facility within the ADNOC Ruwais Industrial Complex on March 10. ADNOC precautionarily shut its Ruwais refinery — the largest in the Middle East at 922,000 bpd capacity. No injuries reported. UAE MoFA and Abu Dhabi Media Office confirmed the drone attack. Reuters source confirmed ADNOC shut its 922,000-bpd Ruwais refinery as a precautionary measure following the drone attack fire. No injuries reported.",
            "incidents": [
                    {
                            "date": "2026-03-10",
                            "text": "Iranian drone strike caused fire at facility within ADNOC Ruwais Industrial Complex. Refinery shut as precautionary measure. No injuries."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Reuters source confirmed ADNOC shut its Ruwais refinery as a precautionary measure after a fire broke out within the compound from a drone attack. All other complex operations continued normally. Refinery capacity exceeds 900,000 bpd."
                    }
            ],
            "sources": [
                    {
                            "name": "Associated Press / PBS NewsHour",
                            "url": "https://www.pbs.org/newshour/world/iranian-barrages-target-israel-and-gulf-countries-as-hegseth-warns-iran-of-most-intense-day-of-strikes"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/fire-breaks-out-in-ruwais-complex-in-abu-dhabi-after-drone-attack-1.500469721"
                    },
                    {
                            "name": "The National (UAE)",
                            "url": "https://www.thenationalnews.com/business/energy/2026/03/10/fire-breaks-out-at-al-ruwais-refinery-in-uae-after-drone-strike/"
                    },
                    {
                            "name": "Reuters via bdnews24",
                            "url": "https://bdnews24.com/world/99d9f5966274"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-10/uae-says-drone-attack-causes-fire-in-zone-that-houses-refinery"
                    },
                    {
                            "name": "Times of Israel / Reuters",
                            "url": "https://www.timesofisrael.com/iran-keeps-up-attacks-on-gulf-states-says-not-a-single-liter-of-oil-will-ship-out/"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/10/tehran-fires-barrage-of-drones-at-neighbouring-saudi-arabia-and-kuwait-as-iran-war-enters-"
                    }
            ],
            "dateAdded": "2026-03-10"
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
            "detail": "Naval Support Activity Bahrain — HQ of US Naval Forces Central Command (NAVCENT) and US 5th Fleet. Hosts ~9,000 US military personnel. Iran struck with ballistic missiles and Shahed drones. Radar/satcom dome destroyed, warehouse damaged. NAVCENT concluded Juffair is 'no longer safe for US personnel.' US Embassy issued security alert. Bahrain Defense Force confirmed intercepting 45 missiles and 9 drones. Base sustained damage to large building. Sirens continued into Sunday afternoon. Bahrain intercepted 45 missiles and 9 drones. Satellite imagery published by WaPo showed smoke rising from damage at the US naval base. Breaking Defense confirmed video showing parts of 5th Fleet HQ were hit in initial attack. CNN verified video of Shahed drone directly hitting radar dome at the base. Bahrain confirmed intercepting 45 missiles and 9 drones total. DoDEA school on base canceled in-person classes for the week. On March 2, sirens sounded again over Bahrain. Al Jazeera reports 1 person killed in Bahrain from Iranian attacks — the first confirmed death in the country. Reports of new drone strikes overnight against the base. March 2: Bahrain Defence Force updated total interceptions to 61 missiles and 34 drones (up from 45/9). Ongoing Iranian targeting of the area. March 2: Bahrain MOI activated air raid alerts, closed Shaikh Khalifa bridge, and urged residents to shelter. US Embassy warned hotels in Manama could be targeted. March 2: Bahrain activated new air raid alerts, closed Shaikh Khalifa bridge. US Embassy closed, warned Americans to avoid Manama hotels. Bahrain repelled new wave of attacks on March 3. Total interceptions now 70 ballistic missiles and 76 drones (up from 45 missiles and 9 drones on Day 1). Sirens activated early Tuesday. On March 5, Bahrain Defence Force updated its interception tally to 75 missiles and 123 drones destroyed since the start of the conflict, up from 73 missiles and 91 drones reported on March 3. Bahrain Defence Force cumulative interception total updated to 75 missiles and 123 drones destroyed. Loud explosions continued on March 5, described by residents as the 'loudest so far during the war.' March 5: BDF reports total 75 missiles and 123 drones destroyed since start of conflict. New explosions heard. Mar 5: Bahrain Defence Force updates total interceptions to 75 missiles and 123 drones since conflict began. New explosions heard across the country. Bahrain Defence Force reports cumulative interception of 75 missiles and 123 drones since the start of Iranian aggression. UK temporarily withdrawing some Bahrain embassy staff citing serious security situation. Bahrain Defence Force cumulative interception total: 75 missiles and 123 drones destroyed since start of conflict. Bahrain Defence Force reports cumulative intercepts of 75 missiles and 123 drones since conflict began. Bahrain Defence Force updated cumulative interception figures to 78 missiles and 143 drones destroyed as of March 6. Public urged to remain sheltered. Sirens sounded in Manama on March 6 with multiple explosions heard. CENTCOM head Cooper warned Iran's targeting of Bahrain civilians 'will not go unanswered.' March 7: Bahrain sirens sounded again early Saturday. BDF total interceptions now 84 missiles, 147 drones. IRGC claims Juffair targeted in 23rd wave. March 7: Bahrain Defense Force cumulative tally: 84 missiles and 147 drones intercepted since Feb 28. Sirens sounded again early Saturday. March 7: Sirens sounded early Saturday. Bahrain Defence Force total intercepts now 84 missiles and 147 drones. Sirens sounded again Saturday March 7. Bahrain Defence Force reports cumulative interceptions of 84 missiles and 147 drones—up 6 missiles and 4 drones in 12 hours. March 7: Multiple air raid sirens in Manama; Bahrain MOI urged shelter. AFP reported explosions. Bahrain total interceptions: 78 missiles, 143 drones. Mar 7 evening: Fresh explosions across Bahrain despite Iran's ceasefire pledge. Fars claims hits on US bases. Bahrain MOI issued second shelter warning. Strikes continue despite Pezeshkian apology. On the evening of March 7, IRGC claimed fresh targeting of US forces at Juffair. AFP journalists reported loud explosions and warning sirens in Manama. Bahrain's Ministry of Interior confirmed fire and material damage to a house and surrounding buildings from Iranian aggression. This occurred despite Iran's President Pezeshkian announcing earlier Saturday that Gulf neighbors would no longer be targeted. On Saturday evening March 7, CNN confirmed fresh explosions in Bahrain. Bahrain MOI stated Iranian aggression caused fire and material damage to a house and surrounding buildings in Manama. Sirens sounded at least twice. On March 8, senior Bahraini official confirmed attacks continue despite Pezeshkian's apology, stating drones and missiles are still being launched toward Bahrain. IRGC claimed on March 8 it struck the Juffair base, alleging it was used to attack an Iranian desalination plant.",
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
                    },
                    {
                            "date": "2026-03-05",
                            "text": "New explosions heard in Bahrain. Bahrain Defence Force updated cumulative interception count: 75 missiles and 123 drones destroyed since start of Iranian aggression."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "New explosions heard across Bahrain on March 5. Bahrain Defence Force updated cumulative interception totals to 75 missiles and 123 drones destroyed since the start of Iranian aggression."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "New explosions heard across Bahrain. Bahrain Defence Force updated total interception figures: 75 missiles and 123 drones destroyed since start of Iranian aggression."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Bahrain Defence Force says it has now destroyed 75 missiles and 123 drones 'targeting the Kingdom since the start of the brutal Iranian aggression.' New explosions heard across Bahrain on March 5."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Bahrain Defence Force updated cumulative totals: 75 missiles and 123 drones destroyed since start of Iranian aggression. UK announced temporary withdrawal of some embassy staff from Bahrain (Al Jazeera, Gulf News)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Bahrain Defence Force cumulative update: 75 missiles and 123 drones destroyed targeting the Kingdom since start of Iranian aggression. Stars and Stripes reports continued Iranian missiles raining down on Manama on March 5-6; unconfirmed reports of explosions in Riffa."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Bahrain Defence Force cumulative tally: 75 missiles and 123 drones destroyed targeting the Kingdom since the start of the conflict"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Bahrain Defence Force updated total interceptions to 78 missiles and 143 drones destroyed since start of Iranian attacks. Military urged public to shelter at home except in extreme necessity."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Air raid sirens sounded in Manama; multiple explosions heard. Interior ministry urged residents to shelter. CENTCOM warned Iran's actions 'will not go unanswered.'"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Air-raid sirens sounded again early Saturday morning across Bahrain. Interior Ministry urged residents to head to nearest safe place. IRGC 23rd wave of Operation True Promise 4 claimed targeting Juffair and Isa AB. BDF reports cumulative interceptions now at 84 missiles and 147 drones since the war began (up from 78 missiles/143 drones on March 6)."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Air raid sirens sounded again in Bahrain early Saturday; Bahrain Defense Force updated total interceptions to 84 missiles and 147 drones since war began, +6 missiles and +4 drones in past 12 hours (CNN, Bahrain MOI via X)"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Sirens sounded again Saturday morning in Bahrain. Bahrain Defence Force cumulative tally now 84 missiles and 147 drones intercepted since war began (up from 78 missiles/143 drones reported March 6)."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Air raid sirens sounded multiple times in Manama on Saturday morning. Bahrain Ministry of Interior warned citizens and residents to 'head to nearest safe space.' AFP journalists heard explosions in Manama. Bahrain Defence Force cumulative total: 78 missiles and 143 drones intercepted since start of conflict."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saturday evening (~21:00 local): Fresh series of loud explosions across Bahrain reported by CNN and AFP. Iran's Fars news agency claimed 'massive explosions at US bases in Bahrain.' Bahrain MOI issued second shelter-in-place warning of the day. Cause (impact vs. interception) not yet confirmed."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saturday evening: IRGC claimed targeting US forces at Juffair base. Series of loud explosions heard across Manama (AFP, CNN witnesses). Bahrain Ministry of Interior confirmed 'Iranian aggression caused a fire and material damage to a house and several surrounding buildings in Manama.'"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saturday evening: Multiple explosions heard in Bahrain capital. Bahrain MOI confirmed 'Iranian aggression caused a fire and material damage to a house and several surrounding buildings in Manama.' Air raid sirens sounded multiple times."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Senior Bahraini official confirms drones and missiles are still being launched toward Bahrain and Arab Gulf states despite Iranian president's apology; sirens sounded multiple times."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "IRGC claimed it struck the US Juffair base in Bahrain on Saturday, stating it had been used to attack an Iranian desalination plant earlier that day."
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
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/americas/us-israel-iran-war-day-6-iran-israel-strikes-continue-uae-extends-limited-flights-1.500463753"
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/branches/navy/2026-03-05/missile-attack-iran-bahrain-sailors-navy-20961661.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/06/israel-launches-new-strikes-on-iran-and-lebanon-as-the-us-warns-of-intensifying-attacks"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-war-what-is-happening-on-day-seven-of-us-israel-attacks"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-06-26"
                    },
                    {
                            "name": "ANI (citing Press TV/IRGC)",
                            "url": "https://aninews.in/news/world/middle-east/flawless-execution-irgc-launches-23rd-wave-of-strikes-against-us-bases-and-occupied-territories20260307085645/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635553/middle-east"
                    },
                    {
                            "name": "AFP (via Douglas Budget)",
                            "url": "https://www.douglas-budget.com/news/national/article_c6538b33-a353-5e75-9d32-fe20e735b482.html"
                    },
                    {
                            "name": "CNN Live Updates",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-07-26"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
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
            "detail": "Royal Bahraini Air Force headquarters. Hosts US military operations supporting 5th Fleet. Air defense activity reported during Iranian barrage. Bahrain air defenses actively engaged from Isa Air Base intercepting 45 missiles and 9 drones. Confirmed debris fell across multiple areas. Upgraded to FALLING DEBRIS. March 3: IRGC via IRNA claimed large-scale dawn attack (20 drones, 3 missiles) targeting the US air base. Bahrain sirens activated early Tuesday. Damage claims unverified independently. CNN reports sirens sounding over Bahrain early Tuesday March 3, with Interior Ministry activating air raid alerts. Updated Bahrain interception count: 70 missiles and 76 drones intercepted as of March 3, per Bahrain Defence Force via CNN. Bahrain Defence Force updated total interceptions to 70 ballistic missiles and 76 drones as of March 3. Updated Bahrain interception totals as of March 3: 70 missiles and 76 drones intercepted per Bahrain Defence Force (via CNN). Sirens continued Tuesday morning. Bahrain Defence Force updated interception tally on March 3: 73 missiles and 91 drones destroyed since conflict began. Bahrain's updated interception figures as of March 3: 73 missiles and 91 drones destroyed since Feb 28. Bahrain Defence Force updated interception figures: 73 missiles and 91 drones destroyed since start of conflict (Al Jazeera, March 3). March 4: US ordered non-emergency departure from Bahrain, upgrading from authorized departure. Embassy warned US citizens that hotels in Manama may be targeted. On March 4, the IRGC claimed a major barrage (Wave 15 of True Promise 4) targeting Isa Air Base with 20 drones and 3 missiles, claiming the main US command building and fuel tanks were destroyed. Upgraded to CRITICAL based on IRGC official statement of confirmed projectile impacts; independent verification pending. On March 4, IRGC confirmed a dawn drone/missile attack on the US air base in Sheikh Isa/Sakhir area. This follows prior waves of attacks on the facility. Ongoing March 4 attacks: Iranian drones continue targeting Bahraini military infrastructure in the Sakhir area as IRGC announces 17th wave of True Promise IV. Bahrain Defence Force reports 73 missiles and 91 drones destroyed since conflict began. IRGC claimed large-scale attack with 20 drones and 3 missiles targeting the Sheikh Isa area US air base (IRNA). Al Jazeera published eyewitness video of the suspected attack. March 4: IRGC claims waves 14, 15, and 17 of True Promise 4 struck Isa Air Base with 20+ drones and 3+ missiles, claiming destruction of command centre and fuel tanks. Bahrain has not independently confirmed extent of damage. March 7: IRGC 23rd wave of strikes claimed targeting Isa Air Base. Bahrain-wide sirens sounded early Saturday. CENTCOM accused Iran of deliberately targeting civilian areas in Bahrain with seven attack drones.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "US air base at Sheikh Isa attacked again using drones and missiles per Alma Research Center day 4 report."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC announced 23rd wave of Operation True Promise 4 claiming strikes on 'Sheikh Isa' base in Bahrain using new-generation solid-fuel and liquid-fuel missiles. Bahrain sirens sounded early Saturday and BDF interception tally increased."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "CENTCOM head Brad Cooper accused Iran of deliberately firing seven attack drones at civilian neighborhoods in Bahrain; warned actions 'will not go unanswered' (Al Jazeera Day 7 summary)"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Bahrain continued to intercept incoming threats Saturday morning; nationwide sirens activated."
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
                    },
                    {
                            "name": "Alma Research Center",
                            "url": "https://israel-alma.org/daily-report-the-second-iran-war-march-4-2026/"
                    },
                    {
                            "name": "Tribune India (ANI)",
                            "url": "https://www.tribuneindia.com/news/world/flawless-execution-irgc-launches-23rd-wave-of-strikes-against-us-bases-and-occupied-territories/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-06-26"
                    },
                    {
                            "name": "Al Jazeera (Day 7 recap)",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-war-what-is-happening-on-day-seven-of-us-israel-attacks"
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
            "detail": "US Embassy in Bahrain confirmed the Crowne Plaza Hotel in Manama was struck on March 1, 2026, resulting in injuries. The hotel was hosting diplomats and US embassy personnel. Bahrain Interior Ministry confirmed material damage. US Embassy warned Americans to avoid all hotels in Manama. Struck again on March 6 by IRGC missile and drone attack. Bahrain MOI confirmed material damage, no casualties. Bahrain Defence Force total interceptions now at 78 missiles and 143 drones destroyed since war began.",
            "incidents": [
                    {
                            "date": "2026-03-01",
                            "text": "Iranian drone struck Crowne Plaza Hotel. US Embassy confirmed strike resulting in injuries. Bahrain Interior Ministry confirmed material damage, no fatalities."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "IRGC launched missile and drone attack against Crowne Plaza Manama in early hours of March 6. Bahrain MOI confirmed a hotel and two residential buildings in Manama struck; material damage sustained but no loss of life reported."
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
                    },
                    {
                            "name": "IranWire",
                            "url": "https://iranwire.com/en/news/149968-irgc-strikes-hotel-and-residential-buildings-in-manama/"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/gulf/2026/03/06/iran-strikes-hotel-and-residential-buildings-in-manama-widening-gulf-retaliation-campaign/"
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-06/drone-strike-hotel-20969780.html"
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
            "severity": "critical",
            "icon": "💥",
            "type": "Residential Tower — Drone/Debris Strike Under Investigation",
            "detail": "The Breaker residential tower in Manama's Seef district sustained heavy damage and fire on Feb 28 from an aerial attack. Stars and Stripes confirmed a section of the building's exterior collapsed inward across two to three floors. Bahrain police said the incident remains under investigation as to whether the cause was a direct drone strike or falling debris from a missile intercept. March 10: AFP confirmed a drone strike damaged a building in the Seef district. Bahrain total interceptions since war began: 105 missiles and 176 drones.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Aerial attack set fire to Breaker tower. Exterior collapsed across 2-3 floors. Investigation ongoing into whether drone strike or interception debris."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "AFP-confirmed drone strike caused building damage in the Seef district of Manama. Separate from the Manama residential building strike that killed a 29-year-old woman. Bahrain reported 3 missiles and 1 drone targeting the country on Tuesday."
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
                    },
                    {
                            "name": "Times of Israel (AFP photos)",
                            "url": "https://www.timesofisrael.com/iran-keeps-up-attacks-on-gulf-states-says-not-a-single-liter-of-oil-will-ship-out/"
                    },
                    {
                            "name": "Al Jazeera (Reuters photo)",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
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
            "detail": "Bahrain's Interior Ministry confirmed that falling debris from an intercepted Iranian missile caused a fire on a foreign vessel in the industrial zone near Mina Salman port. One Asian worker was killed and two others were seriously injured in what Bahrain described as 'Iranian aggression.' UPGRADED TO CRITICAL: Bahrain MOI confirmed 1 Asian worker killed and 2 seriously injured when intercepted missile debris struck a foreign vessel, causing fire. First confirmed death in Bahrain. Bahrain MOI confirmed first fatality in Bahrain: an Asian worker killed when intercepted missile debris fell onto a vessel in Salman Industrial City. Two others seriously injured. Fire brought under control. March 2: 1 worker killed and 2 seriously injured by debris from intercepted missile on foreign ship. US-flagged tanker Stena Imperative (Navy TSP vessel) also struck by projectiles while berthed, causing onboard fire. Bahrain confirmed one Asian worker killed by interceptor debris on a vessel in Salman Industrial City; two others seriously injured. On March 2, interceptor debris struck a foreign vessel in the Salman industrial zone, killing one worker and seriously injuring two. UKMTO reported a separate vessel struck by two projectiles at the port. On March 2, UKMTO reported a vessel struck by two projectiles at Bahrain port. Interceptor debris struck a foreign ship in Salman industrial zone, killing 1 worker and seriously injuring 2. Mar 2: UKMTO confirmed vessel struck by 2 projectiles. Bahrain Interior Ministry: 1 Asian worker killed, 2 seriously injured from interceptor debris falling on foreign ship at Salman Industrial City. On March 2, Bahrain's Ministry of Interior confirmed 1 Asian worker killed and 2 seriously injured from intercepted missile debris falling on a foreign vessel. Bahrain Defence Force reports total of 61 missiles and 34 drones intercepted since the start of the conflict. March 2: US-flagged tanker Stena Imperative struck by two projectiles in Port of Bahrain per Reuters/Vanguard Tech. Fire broke out and was extinguished; crew evacuated. UKMTO confirmed the vessel fire incident. US-flagged tanker Stena Imperative (part of US MARAD Tanker Security Program) struck by 2 projectiles at Bahrain port shipyard on Mar 2. One shoreside shipyard worker killed, two others injured. Ship crew unharmed. First US-flagged vessel attacked in the conflict. Vessel had previously been harassed by IRGC fast boats in Feb 2026. On March 2, US-flagged tanker MT Stena Imperative (part of US MARAD Tanker Security Program) was struck by two projectiles at Salman Industrial City. One shipyard worker killed, two injured. Fire extinguished; crew evacuated unharmed. On March 3, Bahrain MOI confirmed one worker killed and two seriously injured by intercepted missile debris falling on a vessel in Salman Industrial City. On March 8, a new fire erupted at a maritime facility near Mina Salman Port after what Bahrain's Interior Ministry described as 'Iranian aggression.' Civil defence teams worked to control the blaze.",
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
                    },
                    {
                            "date": "2026-03-08",
                            "text": "New fire at maritime facility near Mina Salman Port attributed to 'Iranian aggression' by Bahrain Interior Ministry. Civil defence teams deployed to control the blaze. Separate from the March 1/3 incidents."
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
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-07-26"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659551/world/iranian-strike-hits-facility-near-salman-port-in-bahrain-capital"
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
    {
            "name": "BAPCO Sitra Refinery (Ma'ameer Industrial Zone), Bahrain",
            "lat": 26.15,
            "lng": 50.62,
            "country": "Bahrain",
            "city": "Sitra / Ma'ameer",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Missile Strike on Oil Refinery",
            "detail": "An Iranian ballistic missile struck Bahrain's BAPCO Sitra refinery on March 5, triggering large fires at the 400k b/d facility. Bahrain's Interior Ministry confirmed the fire was contained with limited material damage and no casualties. BAPCO confirmed refinery operations continue. Thursday night: Iranian missile confirmed to have directly struck the refinery in a separate incident. Bahrain authorities say fire extinguished, refinery operational, no casualties. Bahrain Defence Force total interceptions since Feb 28: 75 missiles and 123 drones. Second confirmed missile impact on Bapco refinery on March 5. Fire extinguished, no casualties. March 9: Smoke reported rising from BAPCO refinery following renewed Iranian strike, concurrent with mass-casualty drone attack on nearby Sitra residential areas. On March 9, BAPCO declared force majeure on group operations after a new Iranian drone/missile strike caused fire at the refinery. Fire contained, no fatalities at the facility. Bahrain becomes second Gulf state to invoke force majeure after Qatar's LNG operations. March 9: BAPCO declares force majeure on all oil shipments after new Iranian drone strikes set refinery ablaze. Over 80% of BAPCO refined products and crude are exported globally. Fire contained with material damage, no casualties per BNA. On March 9, a new Iranian missile strike ignited a fire at a BAPCO refinery unit. The company declared force majeure on all group operations — a significant economic escalation for Bahrain's main energy asset. On March 9, Bapco Energies declared force majeure on group operations after the latest Iranian attack set the refinery ablaze. Thick smoke was visible from across Sitra Island. Bapco joins QatarEnergy and Kuwait Petroleum Corp in invoking force majeure due to the conflict. Bapco Energies declared force majeure on March 9 after a fresh Iranian attack set the refinery ablaze. Bahrain joins Qatar and Kuwait in invoking force majeure on energy operations due to the conflict. March 9: Bapco Energies declared force majeure, suspending contractual shipment obligations. Bahrain's only oil refinery set ablaze by Iranian strike. Bapco Energies declared force majeure on March 9, suspending contractual shipment obligations. This marks the second confirmed attack affecting the Sitra refinery complex since the war began. BAPCO declared force majeure on March 9 following the strike, suspending all contractual obligations. The attack targeted the Bapco Energies refinery complex with thick plumes of smoke visible from Sitra Island. March 9: BAPCO Energies declares force majeure on all group operations following Iranian strike on refinery complex. Fire at refinery unit contained. Bapco Energies declared force majeure on all group operations on March 9 due to ongoing regional conflict and attack on refinery complex. Fire at refinery unit contained. Thick smoke seen billowing from facility. Bapco Energies declared force majeure on March 9, suspending contractual obligations. The 267,000 bpd refinery and 14-million-barrel storage facility are affected. Bahrain Civil Defence confirmed fire at Ma'ameer facility brought under control with no injuries. On March 9, Bapco Energies declared force majeure after Iranian drone swarm struck the Al Ma'ameer facility, setting the 405,000 bpd refinery ablaze. International exports halted indefinitely. Bapco Energies declared force majeure on Monday March 9, stating operations disrupted by regional conflict and recent Iranian strikes on refinery complex. Bahrain Civil Defence confirmed fire at Ma'ameer facility was brought under control. Bapco declared force majeure on March 10 due to damage from Iranian strikes on its refinery. A fire at a Maameer facility was contained with no casualties. Bapco Energies declared force majeure on March 10 on all group operations due to the ongoing conflict and the recent attack on its refinery complex, disrupting Bahraini oil exports. On March 10, Bapco Energies declared force majeure on its operations, the first such declaration by a Gulf state oil company in this conflict, citing disruption from Iranian strikes on its Sitra refinery complex. On March 10, Bahrain Civil Defence confirmed a fire at the Maameer facility caused by Iranian aggression was brought under control with no injuries. Bapco Energies declared force majeure on all group operations. Bapco Energies declared force majeure on March 9, effectively halting international oil export commitments. The 405,000 bpd Sitra refinery — Bahrain's only refinery — is offline indefinitely as engineers assess structural damage from repeated Iranian drone strikes. Bapco declared force majeure on March 10, suspending contractual supply obligations due to ongoing Iranian attacks on its refinery complex. Bapco Energies declared force majeure on Monday, suspending contractual obligations due to Iranian strikes on refinery complex. The 405,000 bbl/day Sitra refinery had been hit by Iranian attacks causing fires. March 10: Bapco officially declared force majeure on all shipments. Bahrain total interceptions since Feb 28: 102 missiles, 173 drones. Bapco declared force majeure on shipments after waves of Iranian strikes disrupted refinery operations. Bahrain reports total 105 missiles and 176 drones intercepted since start of war. Bapco Energies officially declared force majeure on Monday, suspending contractual supply obligations due to Iranian strikes on refinery complex. March 10: Bapco Energies declared force majeure on all group operations due to Iranian strikes on its refinery complex, unable to meet supply contractual obligations.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "Iranian ballistic missile struck BAPCO Sitra refinery in Ma'ameer industrial zone. Fire broke out at one unit; contained by emergency crews. No casualties. BAPCO confirms operations ongoing. Bahrain Interior Ministry confirmed the strike on X."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Iranian missile directly struck BAPCO state-run oil refinery on Thursday night. Bahrain confirmed fire was extinguished and refinery remained operational with no casualties reported."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Iranian missile struck Bapco Energies refinery on Sitra island, sparking a fire that was quickly brought under control. No injuries reported; operations continued while damage was assessed."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Smoke seen rising from BAPCO Sitra refinery on Monday March 9 following renewed Iranian strike, concurrent with drone attacks on nearby Sitra residential areas that injured 32 civilians."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "BAPCO declares force majeure on group operations after new Iranian drone/missile strike causes fire at refinery unit. Fire contained, no fatalities at refinery. Domestic fuel supply secured via contingency plans. BAPCO confirms refinery still operational but suspends supply obligations."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Fresh Iranian drone strikes set BAPCO refinery ablaze on Monday morning. BAPCO declares force majeure on all oil shipments, citing the 'ongoing regional conflict and recent attack on its refinery complex.' Videos geolocated by CNN show large fire and thick smoke from the Al Ma'ameer industrial zone. BNA confirmed material damage but no casualties. BAPCO refinery produces over 350,000 bpd."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Iranian missile strike caused fire at refinery unit on Monday morning. Bahrain's National Communication Centre confirmed blaze was contained. BAPCO Energies declared force majeure on all group operations following the attack, a major economic escalation."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bapco Energies declares force majeure on group operations following attack on refinery complex. Reuters photographs show thick smoke rising from Bapco refinery on Sitra Island. Bahrain News Agency reports fire at Al-Ma'ameer oil facility with material damage. Bapco says domestic fuel supply remains secured through contingency plans."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Fresh Iranian drone/missile attack set Bapco refinery ablaze early Monday; thick smoke seen rising from facility. Bapco Energies declared force majeure on all group operations citing ongoing conflict and attack on refinery complex. Domestic fuel supply reportedly secured under contingency plans (Bloomberg, Reuters, Euronews, Daily Sabah)."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bapco Energies declared force majeure on Monday, suspending contractual shipment obligations due to ongoing conflict and damage from Iranian drone attack on refinery complex. Fire set at Bahrain's only oil refinery following Iranian strike."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "BAPCO Energies declared force majeure on group operations citing ongoing regional conflict and attack on refinery complex. Fire broke out at refinery unit following Iranian strike; Bahrain National Communication Centre confirmed fire contained. Thick black smoke seen billowing from facility."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bapco Energies declares force majeure on all group operations citing Iranian attack on refinery complex and ongoing regional conflict. Fire at refinery brought under control by Civil Defence."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Shahed-136 drone swarm struck Al Ma'ameer facility in early hours, hitting the Residue Hydrocracking Unit and causing a massive fire visible from Manama. Bapco Energies declared force majeure on all group operations, halting international export commitments. Bahrain Civil Defence brought fire under control. No casualties. Bapco said domestic supply remains secured."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bahrain's state-owned energy company Bapco declared force majeure on group operations, citing the ongoing regional conflict and recent attack on its refinery complex. Bahrain Civil Defence confirmed a fire at a Maameer facility caused by Iranian aggression was brought under control with no injuries."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bapco Energies declared force majeure on all operations citing ongoing conflict and recent attack on refinery complex. Bahrain Civil Defence confirmed fire at Ma'ameer area facility brought under control with no additional injuries."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bapco Energies declared force majeure on all group operations, citing ongoing regional conflict and recent Iranian drone strikes on its 405,000 b/d Sitra refinery. Bahrain Civil Defence confirmed the fire at the Ma'ameer facility was brought under control with no additional casualties."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bahrain Civil Defence confirmed a fire at a facility in the Maameer area caused by Iranian aggression has been brought under control. No injuries reported. Bapco Energies declared force majeure on group operations citing ongoing conflict and recent attacks on its refinery complex."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bapco Energies officially declared force majeure on group operations, citing the ongoing regional conflict and the recent Iranian attack on its refinery complex. Iranian attack on a facility in the village of Maameer caused a fire (no casualties reported)."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bapco declared force majeure on all group operations due to ongoing Iranian strikes on refinery complex. Bahrain air defenses have intercepted 102 missiles and 173 drones since start of conflict."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bapco Energies confirmed force majeure declaration on Monday due to ongoing regional conflict and attacks on its refinery complex, stating it cannot meet contractual supply obligations."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Bapco Energies formally declared force majeure on all group operations citing ongoing regional conflict and recent attacks on its refinery complex, meaning it cannot meet contractual supply obligations."
                    }
            ],
            "sources": [
                    {
                            "name": "Associated Press (via WTOP)",
                            "url": "https://wtop.com/world/2026/03/bahrain-says-an-iranian-missile-hit-a-state-run-oil-refinery/"
                    },
                    {
                            "name": "Reuters (via Times of Israel)",
                            "url": "https://www.timesofisrael.com/liveblog_entry/bahrain-says-fire-at-bapco-energies-refinery-after-iranian-missile-strike-contained-operations-continue/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "Haaretz",
                            "url": "https://www.haaretz.com/israel-news/israel-security/2026-03-05/ty-article-live/idf-launches-second-wave-of-strikes-on-regime-targets-in-tehran/0000019c-bb20-df64-a59c-fb765d040000"
                    },
                    {
                            "name": "OilPrice.com",
                            "url": "https://oilprice.com/Latest-Energy-News/World-News/Drone-Strike-Hits-Bahrain-Refinery-as-Crack-Spreads-Surge.html"
                    },
                    {
                            "name": "Military.com / AP",
                            "url": "https://www.military.com/daily-news/2026/03/05/state-department-announces-closure-of-us-embassy-kuwait-after-iranian-strikes.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/iran-fires-more-missiles-drones-across-gulf-region-amid-us-israeli-attacks"
                    },
                    {
                            "name": "Gulf Today",
                            "url": "https://www.gulftoday.ae/news/2026/03/09/32-citizens-injured-in-iranian-drone-attack-bahrain"
                    },
                    {
                            "name": "Türkiye Today",
                            "url": "https://www.turkiyetoday.com/region/bahrains-bapco-refinery-hit-by-iranian-strikes-declares-force-majeure-3215869"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/video-drones-hit-bahrains-bapco-refinery"
                    },
                    {
                            "name": "Al Bawaba",
                            "url": "https://www.albawaba.com/news/fire-erupts-bapco-oil-refinery-bahrain-1623460"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/09/bahrain-says-iranian-strike-on-oil-complex-causes-fire-damage"
                    },
                    {
                            "name": "The Week",
                            "url": "https://www.theweek.in/news/middle-east/2026/03/09/bahrains-only-state-oil-company-bapco-has-declared-force-majeure-after-iran-strike-cause-fire-on-refinery.html"
                    },
                    {
                            "name": "News of Bahrain / Daily Tribune",
                            "url": "https://www.newsofbahrain.com/bahrain/128117.html"
                    },
                    {
                            "name": "Republic World",
                            "url": "https://www.republicworld.com/world-news/iran-targets-bahrain-s-biggest-oil-refinery-bapco-company-declares-force-majeure-watch"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/business/2026/03/09/bapco-declares-force-majeure-as-iran-sets-bahrains-only-refinery-ablaze"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-09/bahrain-s-bapco-energies-declares-force-majeure-on-operations-mmitmqq7"
                    },
                    {
                            "name": "Reuters via MarineLink",
                            "url": "https://www.marinelink.com/news/bahrains-bapco-declares-force-majeure-536693"
                    },
                    {
                            "name": "Xinhua",
                            "url": "https://english.news.cn/20260309/124f5b846cd5406ea777a18d2aca12f8/c.html"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/gulf/2026/03/09/bahrain-s-bapco-declares-force-majeure-after-iran-strikes-statement"
                    },
                    {
                            "name": "Daily Sabah (Reuters)",
                            "url": "https://www.dailysabah.com/business/energy/bahrains-state-oil-firm-declares-force-majeure-after-iran-strikes"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/bahrains-state-oil-company-declares-force-majeure-after-iran-strikes-refinery/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/2026/03/09/world/video/aftermath-of-iranian-drone-strikes-in-bahrain-vrtc"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2798255-bahrain-s-bapco-issues-force-majeure-after-refinery-hit"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/09/world/video/aftermath-of-iranian-drone-strikes-in-bahrain-digvid"
                    },
                    {
                            "name": "UPI",
                            "url": "https://www.upi.com/Top_News/World-News/2026/03/09/Bahrain-Iran-drone-strike-injures-32/8601773048541/"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635757/business-economy"
                    },
                    {
                            "name": "OPB/AP",
                            "url": "https://www.opb.org/article/2026/03/09/iran-attacks-israel-gulf-states-after-naming-new-leader-on-day-10-of-war/"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2794522-airports-in-uae-kuwait-bahrain-targeted-by-drones"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/mena/usisrael-war-on-iran-day-10-mojtaba-khamenei-named-supreme-leader-gulf-states-face-new-attacks-1.500467987"
                    },
                    {
                            "name": "Xinhua",
                            "url": "https://english.news.cn/20260309/0ede1c4435604aa19ff1bdc947462599/c.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "Bahrain Financial Harbour (Israeli Embassy Area), Manama",
            "lat": 26.238,
            "lng": 50.553,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "high",
            "icon": "🏛️",
            "type": "Drone Interception Over High-Value Target",
            "detail": "An Iranian drone was intercepted directly over the Bahrain Financial Harbour towers, which houses the Israeli Embassy, on March 6. Smoke was observed rising from the interception. No confirmed debris damage or casualties at this location reported. The area remains on elevated alert as a high-value diplomatic target. On March 6, Reuters confirmed an Iranian drone was intercepted over the Financial Harbour complex housing the Israeli embassy. Iran's Fars News confirmed it was an intentional target. Smoke observed but no confirmed ground impact or debris damage at this location. On March 6, Reuters confirmed an Iranian drone was intercepted and destroyed directly over the Financial Harbour Towers complex housing the Israeli embassy. Smoke was visible above the towers. Iran's semi-official Fars News Agency reported the complex was specifically targeted, marking a deliberate attempt to strike the Israeli diplomatic mission. Iran's Fars News Agency confirmed overnight attacks on March 6 specifically targeted the Financial Harbour Towers complex due to the Israeli embassy located there. Reuters confirmed a drone was intercepted and destroyed in the vicinity. Bahrain Defence Force updated totals: 78 missiles and 143 drones destroyed since start of Iranian attacks. Bahrain Defence Force updated total interceptions to 78 missiles and 143 drones destroyed since start of conflict, described as 'treacherous' attacks by Iran. Reuters confirmed the drone targeting Financial Harbour Towers was intercepted and destroyed. CENTCOM Commander Brad Cooper condemned Iran for firing 7 attack drones at civilian residential neighborhoods in Bahrain on Thursday night. Reuters confirmed Iranian drone intercepted near the complex on March 6. CENTCOM head Brad Cooper accused Iran of deliberately targeting 7 attack drones at civilian neighborhoods in Bahrain. Bahrain cumulative interceptions: 78 missiles and 143 drones. Iran's Fars News confirmed the Financial Harbour Towers (Israeli embassy location) were specifically targeted. Reuters confirmed drone interception near the complex on March 6. CENTCOM head Brad Cooper specifically accused Iran of deliberately targeting civilian neighborhoods in Bahrain with seven attack drones. Reuters reported one drone intercepted near Israeli Embassy tower. Reuters photo from March 7 shows smoke rising after an Iranian drone was intercepted over the Bahrain Financial Harbour towers housing the Israeli embassy. March 7: Bahrain sirens sounded again; MOI issued second shelter-in-place warning Saturday. BDF cumulative: 78 missiles, 143 drones destroyed.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Iranian drone intercepted over the Bahrain Financial Harbour towers (Israeli Embassy location). Smoke observed from the mid-air interception. No confirmed ground impact or casualties."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's Fars News reported overnight attacks targeted Bahrain Financial Harbour Towers, location of the Israeli embassy. Reuters confirmed an Iranian drone was intercepted and destroyed in the vicinity. Smoke visible over the complex."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iranian drone intercepted and destroyed directly over the Bahrain Financial Harbour Towers complex housing the Israeli embassy. Fars News Agency reported the complex was specifically targeted overnight. Reuters confirmed interception with smoke visible over towers."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Bahrain Defence Force cumulative total updated: 78 missiles and 143 drones destroyed targeting Bahraini territory since start of conflict (up from 73 missiles and 91 drones previously reported)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iranian drone targeting Bahrain Financial Harbour Towers (Israeli embassy location) intercepted and destroyed per Reuters; CENTCOM confirms 7 attack drones fired at Bahrain residential neighborhoods Thursday night"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Reuters confirmed Iranian drone intercepted and destroyed near Financial Harbour Towers housing Israel's embassy. CENTCOM accused Iran of deliberately firing 7 attack drones at Bahrain residential neighborhoods. Bahrain Defence Force cumulative total: 78 missiles and 143 drones destroyed."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's Fars News Agency reported overnight attacks on the Financial Harbour Towers complex — location of the Israeli embassy. Reuters confirmed an Iranian drone was intercepted and destroyed in the vicinity of the complex (Al Jazeera, Reuters)."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "CENTCOM accused Iran of deliberately firing seven attack drones at civilian neighborhoods in Bahrain. Reuters reported one drone was intercepted near a tower where Israel's Embassy in Bahrain is located."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Iranian drone intercepted over Bahrain Financial Harbour towers housing Israeli embassy (Reuters photo confirms smoke rising over towers). Bahrain Defence Force total interceptions now at 78 missiles and 143 drones since conflict began."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Bahrain Ministry of Interior issued second shelter warning Saturday as sirens sounded again. AFP journalists heard blast in Manama. Bahrain Defence Force cumulative total: 78 missiles and 143 drones destroyed targeting Bahrain."
                    }
            ],
            "sources": [
                    {
                            "name": "ABC News",
                            "url": "https://abcnews.com/International/live-updates/iran-live-updates-idf-targets-iranian-internal-security/?id=130743836"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/gulf/2026/03/06/iran-strikes-hotel-and-residential-buildings-in-manama-widening-gulf-retaliation-campaign/"
                    },
                    {
                            "name": "Reuters via US News",
                            "url": "https://www.usnews.com/news/world/articles/2026-03-06/iranian-attacks-on-civilians-wont-go-unanswered-centcom-commander-says"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/06/nx-s1-5738448/iran-us-israel-war"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iran-to-halt-strikes-on-neighbours-unless-attacks-from-there-pezeshkian"
                    },
                    {
                            "name": "Arab News / Reuters",
                            "url": "https://www.arabnews.com/node/2635553/middle-east"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/07/russia-allegedly-provided-iran-with-intel-to-help-it-strike-us-military-sources-say"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    }
            ],
            "dateAdded": "2026-03-06"
    },
    {
            "name": "Fontana Towers & Hilton Hotel (Drone Strike), Juffair/Diplomatic Area, Manama, Bahrain",
            "lat": 26.215,
            "lng": 50.596,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "💥",
            "type": "Drone strike on residential & hotel",
            "detail": "Iranian drones struck Fontana Towers residential buildings and the nearby Hilton hotel at approximately 2:32 AM local time on March 6. Bahrain's Ministry of Interior confirmed one hotel and two residential buildings were hit, with material damage but no loss of life. A fire broke out in one of the residential buildings and was extinguished. March 6: Bahrain Interior Ministry confirmed 'Iranian aggression targeted a hotel & 2 residential buildings in Manama' with no loss of life. Fire in one residential building was extinguished. This followed the March 5 BAPCO refinery strike. CENTCOM accused Iran on March 6 of deliberately targeting civilian neighborhoods in Bahrain with 7 attack drones.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Iranian drones struck Fontana Towers (2 residential buildings) and Hilton hotel in Manama at 2:32 AM local time. Bahrain MoI confirmed material damage, no casualties. Fire in one building extinguished."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "CENTCOM head Brad Cooper accused Iran of deliberately firing seven attack drones at civilian neighbourhoods in Bahrain, warning Iran's actions are 'unacceptable and will not go unanswered'."
                    }
            ],
            "sources": [
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-06/drone-strike-hotel-20969780.html"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/gulf/2026/03/06/iran-strikes-hotel-and-residential-buildings-in-manama-widening-gulf-retaliation-campaign/"
                    },
                    {
                            "name": "BSS/AFP",
                            "url": "https://www.bssnews.net/news/366320"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/americas/us-israel-iran-war-day-6-iran-israel-strikes-continue-uae-extends-limited-flights-1.500463753"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-war-what-is-happening-on-day-seven-of-us-israel-attacks"
                    }
            ],
            "dateAdded": "2026-03-06"
    },
    {
            "name": "Water Desalination Plant (Drone Strike), Bahrain",
            "lat": 26.2239,
            "lng": 50.6744,
            "country": "Bahrain",
            "city": "Bahrain",
            "severity": "critical",
            "icon": "⚡",
            "type": "Infrastructure Drone Strike",
            "detail": "An Iranian drone attack caused material damage to a water desalination plant in Bahrain, the first time a desalination facility has been targeted during the conflict. Bahrain's water authority said water supplies were unaffected. The Interior Ministry described it as Iran randomly bombing civilian targets. Bahrain confirms no impact on water supplies or network capacity from the drone strike. IRGC claimed it struck US Juffair base in retaliation for alleged US strike on Iranian desalination plant.",
            "incidents": [
                    {
                            "date": "2026-03-08",
                            "text": "Iranian drone struck a water desalination plant causing structural/material damage. First desalination plant targeted in the war. No impact on water supply reported."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Bahrain's national communication office confirmed that the Iranian drone attack on the water desalination facility has had no impact on water supplies or network capacity. Interior ministry accused Tehran of 'randomly' targeting civilian infrastructure."
                    }
            ],
            "sources": [
                    {
                            "name": "AFP via France24",
                            "url": "https://www.france24.com/en/middle-east/20260308-middle-east-war-live-deadly-strike-on-ramada-hotel-in-central-beirut-israel-bombs-iran-oil-facilities"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/8/iran-live-israel-bombs-tehran-oil-depots-attacks-on-gulf-states-continue"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/iranian-attack-damages-water-desalination-plant-bahrain-ministry-says"
                    },
                    {
                            "name": "News of Bahrain",
                            "url": "https://www.newsofbahrain.com/bahrain/128072.html"
                    },
                    {
                            "name": "GDN Online",
                            "url": "https://www.gdnonline.com/Details/1377913/Drone-attack-causes-material-damage-to-water-desalination-plant"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    }
            ],
            "dateAdded": "2026-03-08"
    },
    {
            "name": "University Building, Muharraq (Missile Fragment Debris), Bahrain",
            "lat": 26.2569,
            "lng": 50.6136,
            "country": "Bahrain",
            "city": "Muharraq",
            "severity": "high",
            "icon": "💥",
            "type": "Interceptor Debris / Missile Fragments",
            "detail": "Three people were injured and a university building in the Muharraq area sustained material damage after missile fragments fell as a result of aerial interceptions during Iranian aggression. Muharraq is an island area northwest of Manama. March 8: 3 people injured by falling missile debris in Muharraq area. University building damaged.",
            "incidents": [
                    {
                            "date": "2026-03-08",
                            "text": "Missile fragments from interception fell on a university building in Muharraq, injuring 3 people and causing material damage."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Falling missile debris injured three people and damaged a university building in the Muharraq area, Bahrain's interior ministry confirmed."
                    }
            ],
            "sources": [
                    {
                            "name": "Bahrain Interior Ministry (via Arab News)",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "France24",
                            "url": "https://www.france24.com/en/middle-east/20260308-middle-east-war-live-deadly-strike-on-ramada-hotel-in-central-beirut-israel-bombs-iran-oil-facilities"
                    },
                    {
                            "name": "Oman Observer",
                            "url": "https://www.omanobserver.om/article/1185694/world/region/university-building-desalination-plant-attacked-in-bahrain"
                    },
                    {
                            "name": "GDN Online",
                            "url": "https://www.gdnonline.com/Details/1377912/Three-injured-after-missile-fragments-fall-on-university-building-in-Muharraq"
                    },
                    {
                            "name": "Arab Times",
                            "url": "https://www.arabtimesonline.com/news/three-injured-as-missile-fragments-strike-university-building-in-bahrain/"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    }
            ],
            "dateAdded": "2026-03-08"
    },
    {
            "name": "Manama Central Public Road (Missile Fragment Debris), Bahrain",
            "lat": 26.22,
            "lng": 50.5875,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "high",
            "icon": "💥",
            "type": "Missile Fragment Debris",
            "detail": "Bahrain's Interior Ministry confirmed missile fragments fell on a public road in central Manama, injuring one person and causing damage to several shops. Civil Defence teams secured and evacuated the affected areas.",
            "incidents": [
                    {
                            "date": "2026-03-08",
                            "text": "Missile fragments fell on public road in Manama, injuring 1 person and damaging several shops. Civil Defense evacuated the area."
                    }
            ],
            "sources": [
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-08/bahrain-desalination-plant-water-20995370.html"
                    },
                    {
                            "name": "Bernama / Anadolu Agency",
                            "url": "https://www.bernama.com/en/news.php?id=2531684"
                    },
                    {
                            "name": "The Week",
                            "url": "https://www.theweek.in/news/middle-east/2026/03/08/bahrain-struck-by-iranian-missiles-after-manama-desalination-plant-three-injured-in-muharraq.html"
                    },
                    {
                            "name": "Gulf Daily News",
                            "url": "https://www.gdnonline.com/Details/1377891"
                    }
            ],
            "dateAdded": "2026-03-08"
    },
    {
            "name": "GCC Unified Maritime Operations Center (Naval Quarters Strike), Bahrain",
            "lat": 26.218,
            "lng": 50.601,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "🎯",
            "type": "Iranian strike on GCC naval quarters",
            "detail": "Iranian attack struck buildings in various areas of Bahrain housing Qatari Amiri Naval Forces and Emirati naval personnel participating in the GCC Unified Maritime Operations Center. Qatar MFA confirmed all Qatari naval personnel were safe with no injuries. The GCC Secretary General condemned it as a 'treacherous Iranian aggression,' and Syria's MFA also condemned the attack.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Iranian strike hit buildings in Bahrain housing Qatari and Emirati naval forces operating under GCC Unified Military Command. No GCC personnel injured. Condemned by Qatar MFA, GCC SG, and Syria MFA."
                    }
            ],
            "sources": [
                    {
                            "name": "Qatar News Agency (QNA)",
                            "url": "https://qna.org.qa/en/News-Area/News/2026-3/6/qatar-condemns-iranian-attack-on-buildings-in-bahrain-housing-qatari-amiri-naval-forces-personnel"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/06/03/2026/qatar-condemns-iranian-strike-on-bahrain-buildings-housing-elements-of-qatar-emiri-naval-forces"
                    },
                    {
                            "name": "Iran International",
                            "url": "https://www.iranintl.com/en/202603062903"
                    },
                    {
                            "name": "GCC Secretary General (via GlobalSecurity)",
                            "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/03/iran-260307-gcc01.htm"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/usisrael-war-on-iran-enters-day-7-limited-gcc-flights-warning-over-sensitive-videos-1.500465016"
                    }
            ],
            "dateAdded": "2026-03-08"
    },
    {
            "name": "Sitra Island Residential Area (Iranian Drone Strike Injuries), Bahrain",
            "lat": 26.1503,
            "lng": 50.5822,
            "country": "Bahrain",
            "city": "Sitra",
            "severity": "critical",
            "icon": "💥",
            "type": "Drone Strike — Residential Casualties",
            "detail": "Overnight Iranian drone attack on Sitra Island injured 32 Bahraini civilians, with 4 in critical condition including a 17-year-old girl with severe head and eye injuries and a 2-month-old infant. All casualties are Bahraini nationals. This is separate from the BAPCO refinery fire nearby. March 9: At least 32 people injured, including children, in Iranian drone strike on residential areas of Sitra island per Bahrain state news agency and NPR. Bahrain Health Ministry confirmed 32 Bahraini citizens injured, 4 in serious/critical condition including children needing surgery. Youngest victim is a 2-month-old infant. Continued Iranian drone attacks on Sitra Island on March 9 caused injuries and damage in the residential area near the Bapco refinery. Bahrain's Ministry of Health confirmed 4 of the 32 injured are in critical condition and include children requiring surgery (Bahrain News Agency via Al Jazeera, NPR). March 9 update: 32 Bahraini civilians injured (4 critical including children, youngest a 2-month-old). UPI called it the largest single casualty toll for a Gulf nation since Iran began attacks. Bahrain MOH confirmed all 32 injured are Bahraini citizens, with 4 in serious condition including children requiring surgery. Youngest victim is a 2-month-old infant. March 9: 32 Bahraini civilians injured including 4 children in serious condition. Largest single casualty event from Iranian strikes on a Gulf nation. March 9: 32 Bahraini civilians injured in largest single-event casualty toll for a Gulf nation. 4 critical including children. All injured are Bahraini citizens. Bahrain Interior Ministry called it 'blatant Iranian aggression'. Bahrain Health Ministry confirmed 32 Bahraini civilians injured (4 serious), including a 17-year-old girl with head/eye injuries, two children aged 7 and 8 with limb injuries, and a 2-month-old infant. Multiple homes in Sitra damaged. Interior Ministry called it 'blatant Iranian aggression.' Bahrain Health Ministry confirmed 32 injured including 4 critical: a 17-year-old girl with severe head/eye injuries, two children aged 7-8 with serious limb injuries, and a 2-month-old infant. All victims are Bahraini citizens. Multiple homes damaged. Described as the largest single civilian casualty toll in the Gulf since the war began. Bahrain Health Ministry confirmed 4 of 32 injured are in critical condition, including children requiring surgery. Bahrain Health Ministry confirmed 32 injured including children, with four in critical condition requiring surgery. Bahrain Interior Ministry activated nationwide sirens. March 9: At least 32 Bahraini citizens including children injured in drone attack. Four in critical condition requiring surgery. Bahrain MOH confirmed 32 civilians injured including children (ages 7-8 with serious leg injuries, 17-year-old with head/eye injuries). Four victims in critical condition requiring surgery.",
            "incidents": [
                    {
                            "date": "2026-03-09",
                            "text": "Iranian drone attack on Sitra residential area injures 32 Bahraini civilians (4 critical, including children). Bahrain Health Ministry confirms casualties; government attributes attack to 'Iranian aggression'."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "NPR and Al Bawaba report at least 32 people injured, including children, in an Iranian drone strike on the island of Sitra south of Manama on Monday. Additional explosions heard in Bahrain following the attack."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain Health Ministry confirmed 32 Bahraini civilians injured including 4 in serious condition requiring surgery. Children among critically injured: 17-year-old girl (head/eye injuries), children aged 7 and 8 (lower limb injuries), and a 2-month-old infant. All injured are Bahraini citizens."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Authorities reported injuries and damage in the Sitra area resulting from an Iranian drone attack on Monday. Thick smoke was seen surrounding the area near the Bapco refinery complex (Marine Link, Reuters witnesses)."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain Ministry of Health confirmed 32 civilians injured in early morning Iranian drone strike on Sitra. Four in critical condition requiring surgery: a 17-year-old girl with severe head/eye injuries, two children aged 7 and 8 with serious lower-limb injuries. Youngest victim is a 2-month-old infant. All injured are Bahraini nationals. Described as largest single-incident casualty toll for a Gulf nation in this conflict."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain Ministry of Health confirmed 32 Bahraini civilians injured (all nationals) in early-morning Iranian drone attack on Sitra, including 4 in serious condition: a 17-year-old girl with head and eye injuries, two children aged 7 and 8 with serious lower-limb injuries, and the youngest victim a 2-month-old infant. All receiving medical care from specialized teams."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain MOH confirmed 32 Bahraini civilians injured in overnight drone strike on Sitra; 4 in serious condition including a 17-year-old girl (head/eye injuries), two children aged 7 and 8 (lower limb injuries), and a 2-month-old infant. Interior Ministry reports homes damaged."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain Health Ministry confirmed 4 of the 32 drone strike victims are in critical condition, including children who require surgery. Several homes damaged."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain Health Ministry confirmed 32 injured including children in Iranian drone attack on Sitra. Four victims in critical condition requiring surgery. Bahrain Interior Ministry activated sirens urging people to head to nearest safe places."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Bahrain state media confirmed at least 32 citizens including children were injured in an Iranian drone attack on Sitra. Four victims were in critical condition requiring surgery per the Ministry of Health."
                    }
            ],
            "sources": [
                    {
                            "name": "Reuters (via Times of Israel)",
                            "url": "https://www.timesofisrael.com/liveblog_entry/smoke-rises-from-bahrains-bapco-oil-refinery-after-iranian-drone-attack/"
                    },
                    {
                            "name": "Republic World",
                            "url": "https://www.republicworld.com/world-news/iran-targets-bahrain-s-biggest-oil-refinery-bapco-company-declares-force-majeure-watch"
                    },
                    {
                            "name": "Indrastra",
                            "url": "https://www.indrastra.com/2026/03/bahrain-oil-firm-declares-force-majeure.html"
                    },
                    {
                            "name": "The Diplomatic Insight",
                            "url": "https://thediplomaticinsight.com/bahrains-bapco-oil-refinery-iran-drone-strike/"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
                    },
                    {
                            "name": "Al Bawaba",
                            "url": "https://www.albawaba.com/news/fire-erupts-bapco-oil-refinery-bahrain-1623460"
                    },
                    {
                            "name": "Gulf Today",
                            "url": "https://www.gulftoday.ae/news/2026/03/09/32-citizens-injured-in-iranian-drone-attack-bahrain"
                    },
                    {
                            "name": "Bernama (BNA)",
                            "url": "https://www.bernama.com/en/news.php/world/news.php?id=2532137"
                    },
                    {
                            "name": "Dubai Eye 103.8",
                            "url": "https://www.dubaieye1038.com/news/international/32-injured-in-iranian-attack-on-bahrain/"
                    },
                    {
                            "name": "Marine Link",
                            "url": "https://www.marinelink.com/news/bahrains-bapco-declares-force-majeure-536693"
                    },
                    {
                            "name": "Al Jazeera Death Toll Tracker",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    },
                    {
                            "name": "UPI",
                            "url": "https://www.upi.com/Top_News/World-News/2026/03/09/Bahrain-Iran-drone-strike-injures-32/8601773048541/"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/gulf/bahrain/32-injured-including-children-in-bahrain-after-iranian-drone-attack-1.500468114"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/2026/03/09/world/video/aftermath-of-iranian-drone-strikes-in-bahrain-vrtc"
                    },
                    {
                            "name": "Xinhua",
                            "url": "https://english.news.cn/20260309/0ede1c4435604aa19ff1bdc947462599/c.html"
                    },
                    {
                            "name": "RTHK (AFP)",
                            "url": "https://news.rthk.hk/rthk/en/component/k2/1846567-20260309.htm"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/09/world/video/aftermath-of-iranian-drone-strikes-in-bahrain-digvid"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-israel-strikes-regime-targets/"
                    },
                    {
                            "name": "Al Jazeera (Day 10 Liveblog)",
                            "url": "https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations"
                    },
                    {
                            "name": "Fortune/AP",
                            "url": "https://fortune.com/2026/03/09/saudi-arabia-tells-iran-it-will-be-the-biggest-loser-as-drone-strikes-spray-arab-states/"
                    }
            ],
            "dateAdded": "2026-03-09"
    },
    {
            "name": "Manama Residential High-Rise (Iranian Strike Fatality)",
            "lat": 26.225,
            "lng": 50.58,
            "country": "Bahrain",
            "city": "Manama",
            "severity": "critical",
            "icon": "💥",
            "type": "Residential Strike / Civilian Fatality",
            "detail": "A 29-year-old Bahraini woman was killed and eight others injured when an Iranian attack struck a high-rise residential building in Manama early on Tuesday March 10. The Bahrain Defence Force described the attack as a 'sinful Iranian aggression.' The building is located approximately 3km from the US Fifth Fleet headquarters in Juffair.",
            "incidents": [
                    {
                            "date": "2026-03-10",
                            "text": "Iranian strike on a high-rise residential building in Manama killed a 29-year-old Bahraini woman and injured 8 others. Bahrain Interior Ministry confirmed on X. BDF described it as 'sinful Iranian aggression.'"
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/bahrain-reports-1-dead-in-iranian-attack-on-residential-building-in-capital/3857389"
                    },
                    {
                            "name": "Al Jazeera Video",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/3/10/iranian-strike-kills-bahraini-woman-after-hitting-residential-building"
                    }
            ],
            "dateAdded": "2026-03-10"
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
            "detail": "Largest US military installation in the Middle East. Hosts ~10,000 US personnel, CENTCOM forward HQ, Combined Air Operations Center (CAOC). Two Iranian ballistic missiles struck the base directly. An Iranian drone destroyed the AN/FPS-132 early warning radar ($1.1B asset, 5,000 km range). Qatar intercepted 65 missiles and 12 drones total. 8 injured. Qatar confirmed 66 missiles and 12 drones fired at the country, 114 reports of falling shrapnel nationwide, 16 injured (one serious). Day 3 (March 2): Explosions continued in Doha with CNN team filming apparent interceptions overhead. Al Jazeera reports third consecutive day of Iranian retaliatory strikes targeting Qatar. March 2: Explosions heard in Doha for third day. Qatar FM spokesperson: 'Iran has to pay a price for this blatant attack on our people. An attack like this cannot be left without retaliation.' On March 2, Qatar shot down two Iranian Su-24 fighter jets — the first shoot-down of manned aircraft in the conflict — and intercepted 7 missiles and 5 drones. Qatar MoD stated its armed forces possess 'full capabilities to safeguard the state's sovereignty.' March 2: Qatar Emiri Air Force shot down two Iranian Su-24 fighter jets and intercepted 7 ballistic missiles + 5 drones — the first confirmed air-to-air engagement of the conflict. Qatar MOD stated threats were addressed immediately upon detection per operational plans. On March 2, Qatar Emiri Air Force shot down two Iranian Su-24 fighter-bombers — the first manned aircraft destroyed in combat during the conflict. Qatar also intercepted 7 ballistic missiles and 5 drones in the same engagement. Qatar MOD stressed armed forces possess 'full capabilities to safeguard the state's sovereignty.' March 2: Qatar shot down two Iranian Su-24 bombers — the first manned Iranian aircraft downed since the conflict began — while intercepting 7 ballistic missiles and 5 drones. IRGC has claimed 12 waves of attacks since war began. Mar 2: Qatar Air Force shot down 2 Iranian Su-24 Fencer tactical bombers and intercepted 7 ballistic missiles and 5 drones — first confirmed aerial kill of Iranian aircraft by a Gulf state. QatarEnergy suspends all LNG production following drone strikes on Ras Laffan and Mesaieed facilities. March 2: Qatar Emiri Air Force confirmed shoot-down of two Iranian Su-24 Fencer bombers incoming from Iran — the first Gulf state to down Iranian manned aircraft. QEAF also intercepted 7 ballistic missiles and 5 drones on the same day. Qatar MOD now deploying fighter jets over Gulf waters rather than relying solely on ground-based Patriot systems. On March 3, Qatar's Emiri Air Force shot down two Iranian SU-24 aircraft approaching from Iran — the first confirmed shootdown of manned Iranian military aircraft by a Gulf state. Qatar also intercepted multiple additional missiles and drones. Updated totals: Qatar has intercepted 101 of 104 missiles, 24 of 39 drones, and shot down 2 Iranian Su-24 bomber aircraft per Qatar News Agency (via CNN). On March 3, Qatar's defence ministry reported intercepting two ballistic missiles early Tuesday morning. March 4: Qatar Defence Ministry intercepted 10 drones and 2 cruise missiles. Al Jazeera reports volume/frequency of attacks on Qatar decreasing but disruption continues with airspace still closed. Qatari Defense Ministry confirmed a ballistic missile struck the base in the latest wave; no casualties reported. Qatar also arrested 10 suspected IRGC spies on espionage and drone-sabotage charges. Additional March 4 ballistic missile impact confirmed by Qatari officials. Qatar targeted by two ballistic missiles; one successfully intercepted. On March 6, Qatar MoD confirmed interception of a drone attack targeting the base. No damage or casualties. Qatari jets shot down two Iranian bombers approaching Al Udeid in Qatar's first aerial combat operation, per CNN exclusive citing two briefed sources. On March 6 (Day 7), Qatari air defenses intercepted another drone attack targeting Al Udeid Air Base, according to the Qatari MOD. CENTCOM reports Iran's ballistic missile attacks are down 90% and drone attacks down 83% since day one. On March 6, Qatar MOD confirmed interception of drone attack targeting Al Udeid. Iran's army warned more attacks on Kuwait and regional US bases will follow. On March 6 overnight, Qatar MOD intercepted another drone attack targeting Al Udeid. Al Jazeera's Basravi reported explosions at ~01:00 GMT. Qatar Interior Ministry confirmed Al Udeid was the target. Daily pattern of drone attempts continues. Day 7: Overnight drone attack on Al Udeid intercepted by Qatar Emiri Air Defense Forces. Interior Ministry confirmed the base was the target. On Day 5, two ballistic missiles targeted the base (one hit, one intercepted). Overnight March 5-6: Qatari air defences intercepted drone attack targeting Al Udeid. On day 5, two ballistic missiles targeted the base (one hit, one intercepted). Qatar MOD confirmed overnight drone interception targeting Al Udeid. Two ballistic missiles targeted the base on day five, with one hitting and one intercepted per Al Jazeera correspondent. Qatar MoD confirmed intercepted drone attack on Al Udeid overnight March 5-6. IRGC announced start of 23rd wave of strikes on March 6. Iran continues missile and drone attacks across the Gulf though at significantly diminished rates per CENTCOM. March 7: Qatar Defence Ministry confirmed intercepting a missile attack targeting the country. Eighth consecutive day of Iranian aerial attacks on Qatar. On March 7, Qatar intercepted missile attack. Interior Ministry ordered residents to stay home, threat level high. Saturday March 7: Qatar MOD confirms new missile attack intercepted. On Friday, 10 Iranian drones fired at Qatar—9 intercepted, 1 landed in remote area. Qatar's Interior Ministry urged residents to stay home; security threat level elevated to high. March 7: Qatar intercepted missile attack. March 6: 10 drones fired from Iran, 9 intercepted, 1 landed in remote area. March 7: Qatar MOD confirmed intercepting another missile attack on Saturday. Interior Ministry had confirmed Al Udeid was the target of earlier March 6 barrage. Mar 7: Qatar MOD confirmed missile interception. Evening: fresh blasts reported across Qatar. IRGC lists Al Udeid among targeted bases. Qatar Defence Ministry confirmed March 7 missile interception. On Friday, Qatar had reported 10 drones fired from Iran with 9 intercepted. CNN and AFP reported evening explosions and sirens in Doha on Saturday. March 7: Qatar MOD announced armed forces intercepted missile attack targeting the country. Loud interception blasts heard across Doha. Qatar partially resumed air navigation via contingency routes for evacuation flights. On March 8, Qatar reported continued attacks despite Iran's presidential pledge to halt strikes on neighbors. Qatar Defence Ministry confirmed missile intercept. On March 8, Qatar MOD confirmed intercepting another missile attack targeting the country. CBS reported Qatari military successfully intercepted drone attack targeting Al Udeid on Friday (March 7). March 7-8: Qatar targeted by 10 ballistic missiles and 2 cruise missiles; most intercepted. Qatar Defense Ministry disclosed on March 8 that the country was targeted March 7 by 10 ballistic missiles and 2 cruise missiles. Six BMs intercepted; 2 fell in territorial waters and 2 in uninhabited areas. No casualties. March 7-8: Qatar targeted by 10 ballistic missiles and 2 cruise missiles Saturday. 6 intercepted; 2 fell in territorial waters, 2 in uninhabited areas (4 confirmed impacts). No casualties. On March 8, Qatar MoD intercepted 6 ballistic missiles; 2 fell in territorial waters, 2 in uninhabited areas. No casualties. Qatar also reported Saturday's barrage included 10 BM and 2 cruise missiles. March 9: Qatar MOD confirmed intercepting a new missile attack early Monday, with AFP reporting loud explosions in Doha. Cumulative totals: 129+ ballistic missiles, 63+ drones, and 2 Iranian aircraft detected targeting Qatar since Feb 28. March 9 early morning: Qatar MoD confirmed missile interception. About a dozen explosions heard in Doha. Interior Ministry issued elevated threat alert, later confirmed threat eliminated. March 9: Qatar intercepted 17 BMs and 6 drones from Iran. All neutralized, zero casualties. Qatar MOD confirmed cumulative 17 BMs and 6 drones intercepted on March 9, all neutralized. Afternoon alert at 3:00 PM local time confirmed a new interception event. March 9: Qatar Defence Ministry confirmed all 17 ballistic missiles and 6 drones intercepted. Loud explosions heard across Doha at ~3:15am local time from interceptor fire. No casualties. Qatar reported being attacked by 17 ballistic missiles and 6 drones on March 9. AFP reported loud explosions in Doha. Iran's state broadcaster IRIB confirmed these were the first strikes under new Supreme Leader Mojtaba Khamenei. March 10: Qatar MOD confirmed interception of new Iranian missile wave targeting the state at ~00:00 GMT. Approximately a dozen explosions heard across Doha before threat was declared eliminated. On March 10, Qatar MOD reported intercepting 17 ballistic missiles and 6 drones launched from Iran. No casualties or damage. Qatar MOD reported 17 ballistic missiles and 6 drones intercepted on March 9-10, the largest single wave targeting Qatar since the conflict began. On March 10, Qatar MOD reported 17 ballistic missiles and 6 drones launched from Iran were all intercepted. Total Bahrain interception count now at 102 missiles and 173 drones since start of conflict. March 10: Qatar MOD confirmed interception of missile attack. Al Jazeera reported 17 BMs and 7 drones intercepted and destroyed. Qatar intercepted two separate missile attacks on March 10: 5 ballistic missiles in the afternoon and another missile attack in the evening (~21:46 local). Total for the day: 17 ballistic missiles and 7 drones intercepted. No casualties or damage reported.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Two additional ballistic missiles fired toward Al Udeid base per Alma Research Center day 4 report. Qatar Defence Ministry confirmed interception of 10 drones and 2 cruise missiles from latest barrage."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Al Udeid struck again by Iranian ballistic missile per Qatari officials; one missile intercepted, one impacted base; no casualties reported (CBS News)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatar's Ministry of Defence announced on Friday morning that its air defence forces successfully intercepted a drone attack targeting Al Udeid Air Base. No damage or casualties reported from the interception."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "CNN exclusive: Iranian bombers came within minutes of striking Al Udeid before Qatari fighter jets shot them down in Qatar's first aerial combat operation — two sources briefed on the operation confirmed (CNN)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatari Ministry of Defense reported air defenses 'successfully intercepted' a drone attack targeting Al Udeid Air Base early Friday morning (March 6)."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatari Ministry of Defence announced overnight that air defence forces successfully intercepted a drone attack targeting Al Udeid Air Base. No casualties or damage reported."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatar MOD announced air defenses successfully intercepted a drone attack targeting Al Udeid Air Base overnight (~01:00 GMT March 6). Loud explosions heard in Doha from interceptions. Al Jazeera reporter noted continued pattern of daily drone attempts on the base."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatar Interior Ministry confirmed overnight drone attack targeted Al Udeid; Qatar Emiri Air Defense Forces successfully intercepted all drones. Al Jazeera reporter noted loud explosions at ~4am local time (01:00 GMT). Security tight around all sensitive areas. (Al Jazeera, Gulf News)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatari MOD announced overnight its air defence forces intercepted a drone attack targeting Al Udeid Air Base. Explosions heard in Doha at ~4am local time (01:00 GMT). Interior Ministry confirmed Al Udeid was the target."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatar MOD announced overnight interception of drone attack targeting Al Udeid; Stars and Stripes reported pair of low-flying Iranian bombers came within 2 minutes of hitting the base"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatar MoD confirmed air defence forces successfully intercepted a drone attack targeting Al Udeid Air Base overnight on March 5-6."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Qatar Defence Ministry confirmed armed forces intercepted a missile attack targeting the country on Saturday March 7. Target not specified but Al Udeid has been the primary target in previous waves."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Qatar Defence Ministry said armed forces intercepted a missile attack targeting the country on Saturday. Qatar Interior Ministry issued stay-at-home order citing high security threat level."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Qatar Defence Ministry confirms armed forces intercepted missile attack targeting the country on Saturday. On Friday, 10 Iranian drones fired at Qatar; 9 intercepted, 1 landed in a remote area."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Qatar Defence Ministry announced armed forces intercepted missile attack targeting the country on March 8 (Al Jazeera live blog confirms Qatar reports more attacks despite Iran's pledge to stop strikes)."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Qatar's Defence Ministry announced armed forces intercepted a missile attack targeting the country on Saturday March 8; specific target not disclosed but Al Udeid remains primary US target."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Qatar Defence Ministry confirmed country was targeted on March 7 by 10 ballistic missiles and 2 cruise missiles from Iran; most intercepted with no casualties."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Qatar's Defense Ministry confirmed the country was targeted on Saturday (March 7) by 10 ballistic missiles and 2 cruise missiles from Iran. Six ballistic missiles were intercepted; 2 fell in territorial waters and 2 in uninhabited areas without casualties."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Qatar Defense Ministry announced it intercepted a missile attack targeting Qatar on March 8. Qatar intercepted 6 ballistic missiles; 2 fell in territorial waters and 2 in uninhabited areas without casualties. Separately, Qatar reported Saturday's barrage included 10 ballistic missiles and 2 cruise missiles, most intercepted."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Qatar MOD confirmed intercepting a new missile attack early Monday March 9. AFP reported loud explosions heard in Doha as the attack unfolded. No casualties reported. This followed 10 ballistic missiles and 2 cruise missiles intercepted on March 8."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "NPR reports Iran launched fresh missiles and drone attacks overnight into Monday targeting several Gulf states. Qatar confirmed continued incoming threats. Attacks ongoing on Day 10 of the war."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "At approx 3am local (00:00 GMT) Monday, Qatar issued elevated threat alert. About a dozen explosions heard across Doha. Qatar Ministry of Defence confirmed armed forces intercepted missiles targeting the state. Threat subsided within minutes."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Qatar MoD confirmed that on Monday, Qatar was targeted by 17 ballistic missiles and 6 drones from Iran. All were successfully intercepted by Qatar's armed forces with no casualties reported. Explosions were heard across Doha at ~3:00 AM local time following National Emergency Alert. Qatar released video footage of interceptions."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Qatar MOD confirmed cumulative 17 ballistic missiles and 6 drones from Iran intercepted as of Monday afternoon, all neutralized with no casualties. National Emergency Alert issued at 3:00 PM local time (12:00 UTC) after fresh missile attack; threat eliminated within 30 minutes."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Qatar MOD confirmed 17 ballistic missiles and 6 drones launched from Iran at Qatar on March 9; all successfully intercepted with no casualties or damage reported."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Qatar MoD confirmed country was attacked by 17 ballistic missiles and 6 drones from Iran on March 9. Forces intercepted a new missile attack early Monday with loud explosions heard in Doha. Iran launched its first wave of missiles under newly appointed Supreme Leader Mojtaba Khamenei."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Qatar MOD confirmed missile interception at ~00:00 GMT (3am local). Alert issued advising elevated threat level; ~12 explosions heard. Threat declared 'eliminated' shortly after. Part of new overnight wave of Iranian attacks following appointment of Mojtaba Khamenei as supreme leader."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Qatar MOD announced the country was targeted on Monday by 17 ballistic missiles and 6 drones launched from Iran. Armed forces successfully intercepted all missiles and drones with no casualties or damage reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Qatar's Ministry of Defence announced the country was targeted on Monday by 17 ballistic missiles and 6 drones launched from Iran. Armed forces successfully intercepted all projectiles with no casualties or damage reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Qatar's Ministry of Defense confirmed armed forces intercepted a missile attack targeting the country on Tuesday. Al Jazeera reported 17 ballistic missiles and 7 drones were intercepted and destroyed."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Qatar MoD announced a second missile attack intercepted on Tuesday evening (~21:46 local / 18:46 UTC). Explosions heard across Doha. National Alert System confirmed threat neutralised. Tuesday total: 17 ballistic missiles and 7 drones intercepted and destroyed, per Al Jazeera."
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
                    },
                    {
                            "name": "Alma Research Center",
                            "url": "https://israel-alma.org/daily-report-the-second-iran-war-march-4-2026/"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-israel-strikes-tehran-lebanon-day-5-al-udeid-targeted/"
                    },
                    {
                            "name": "Jerusalem Post",
                            "url": "https://www.jpost.com/middle-east/iran-news/article-889040"
                    },
                    {
                            "name": "Siasat (citing Qatar MoD)",
                            "url": "https://www.siasat.com/live-us-israel-attack-iran-day-7-missiles-intercepted-in-saudi-arabia-kuwait-qatar-on-alert-3425041/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/04/middleeast/qatar-downs-iran-bombers-us-base-intl"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-06/drone-strike-hotel-20969780.html"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/americas/us-israel-iran-war-day-6-iran-israel-strikes-continue-uae-extends-limited-flights-1.500463753"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/06/nx-s1-5738448/iran-us-israel-war"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/live-updates-iran-war-trump-dignified-transfer-us-soldiers-rcna262207"
                    },
                    {
                            "name": "CNN Live Updates",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-07-26"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/07/nx-s1-5739242/iran-war-oil-trump-israel-spain-economy-one-week"
                    },
                    {
                            "name": "Gulf Times",
                            "url": "https://www.gulf-times.com/article/722025/qatar/ministry-of-defence-announces-interception-of-missile-attack"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/07/03/2026/live-updates-qatar-intercepts-9-drones1-struck-uninhabited-area-mod"
                    },
                    {
                            "name": "Al Jazeera (March 8 Live Blog)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/8/iran-live-israel-bombs-tehran-oil-depots-attacks-on-gulf-states-continue"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-israel-strikes-regime-targets/"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "Dubai Eye 103.8",
                            "url": "https://www.dubaieye1038.com/news/international/drone-attacks-cause-major-fire-at-kuwait-international-airport/"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "http://thepeninsulaqatar.com/article/08/03/2026/live-updates-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/8/iran-war-what-is-happening-on-day-nine-of-us-israel-attacks"
                    },
                    {
                            "name": "SANA (citing AFP / Qatar MOD)",
                            "url": "https://sana.sy/en/international/2301300/"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/08/03/2026/qatar-targeted-by-10-ballistic-missiles-2-cruise-missiles-from-iran-on-saturday-mod-1"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/9/iran-war-what-is-happening-on-day-10-of-us-israel-attacks"
                    },
                    {
                            "name": "Gulf News (AFP)",
                            "url": "https://gulfnews.com/world/gulf/explosions-heard-in-doha-following-missile-interception-as-gulf-nations-report-new-attacks-1.500467954"
                    },
                    {
                            "name": "Qatar Tribune",
                            "url": "https://www.qatar-tribune.com/article/223369/latest-news/defence-ministry-announces-successful-interception-of-17-ballistic-missiles-6-drones-without-any-casualties"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "http://thepeninsulaqatar.com/article/09/03/2026/qatar-intercepts-17-ballistic-missiles-6-drones"
                    },
                    {
                            "name": "Doha News",
                            "url": "https://dohanews.co/live-qatar-releases-footage-of-iranian-missiles-intercepted-by-air-defence/"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/iran-fired-17-missiles-and-6-drones-at-qatar-today-all-of-them-intercepted-says-doha/"
                    },
                    {
                            "name": "Gulf News (Live Updates)",
                            "url": "https://gulfnews.com/world/mena/usisrael-war-on-iran-day-10-mojtaba-khamenei-named-supreme-leader-gulf-states-face-new-attacks-1.500467987"
                    },
                    {
                            "name": "QNA (Qatar News Agency)",
                            "url": "https://qna.org.qa/en/news/news-details?id=qatars-defense-ministry-armed-forces-intercept-missile-attack&date=10/03/2026"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
                    },
                    {
                            "name": "Doha News",
                            "url": "https://dohanews.co/live-qatar-foils-second-missile-strike-in-a-day-attacks-on-qatar-infrastructure-could-impact-global-economy-says-mofa/"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/10/03/2026/qatar-successfully-intercepts-5-ballistic-missiles-defense-ministry"
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
            "detail": "A long-range early warning radar in northern Qatar was targeted by an Iranian missile, according to sources who spoke to Al Jazeera on Feb 28. No injuries were reported. The IRGC separately claimed destruction of the AN/FPS-132 Block 5 US missile warning radar in Qatar, though this claim has not been independently verified. UPGRADE: Qatari officials confirmed in joint briefing that 'a drone targeted an early warning radar system.' Reuters confirmed the $1B AN/FPS-132 Block 5 radar was struck and damaged. Satellite imagery analyzed by NPR shows possible burn scarring near the radar installation. Iran claimed the radar was destroyed; US has not publicly confirmed extent of damage. Satellite imagery on March 4 confirmed structural damage to the $1B+ AN/FPS-132 long-range early warning radar at Umm Dahal. Debris fell from one of the radar faces. CNN satellite imagery confirms damage to $1.1B AN/FPS-132 Block 5 Upgraded Early Warning Radar at Umm Dahal. Qatar MOD publicly confirmed the radar's destruction, a rare acknowledgment.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian missile reportedly targeted long-range early warning radar in northern Qatar. No confirmed injuries or damage assessment available from Qatari authorities."
                    },
                    {
                            "date": "2026-02-28",
                            "text": "Qatari officials confirmed in joint defense/interior/foreign affairs briefing that a drone struck the AN/FPS-132 early warning radar system; Reuters source confirmed radar struck and damaged"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "CNN reports satellite imagery analyzed by James Martin Center shows confirmed structural damage to the AN/FPS-132 phased array radar at Umm Dahal; debris fell from radar face, water runoff from firefighting visible. System cost Qatar over $1 billion."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "CNN satellite imagery indicates damage to US-made AN/FPS-132 Block 5 early-warning radar system at Umm Dahal facility; Qatar MOD confirmed destruction of the $1.1B radar"
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
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-04-26"
                    },
                    {
                            "name": "CNN (Satellite Imagery Investigation)",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/radar-bases-us-missile-defense-iran-war-intl-invs"
                    },
                    {
                            "name": "Defence Industry EU",
                            "url": "https://defence-industry.eu/satellite-images-indicate-damage-to-radar-facilities-tied-to-thaad-missile-defense-systems-in-jordan-and-uae-cnn/"
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
            "severity": "critical",
            "icon": "✈️",
            "type": "Airport — Targeted, Attacks Intercepted",
            "detail": "Qatar's Foreign Ministry spokesperson confirmed that Iran targeted civilian infrastructure including the international airport. All attacks were intercepted by Qatari armed forces; no confirmed ground impact at the airport. All aircraft movements suspended; 2,000+ flights cancelled. Qatar Airways operations remain grounded. March 2: Qatar FM confirmed airport was directly targeted by Iranian attacks; all intercepted. Qatar warned Iran must 'pay a price' and retaliation cannot be ruled out. Qatar FM spokesman confirmed on March 2 that Iranian attacks targeted civilian infrastructure including the international airport. Attacks intercepted but severity elevated given confirmed targeting. Flights remain suspended pending airspace reopening. On March 2, Qatar MOD confirmed shooting down 2 Iranian SU-24 Fencer bombers — the first time Qatar has downed manned aircraft. Also intercepted 7 ballistic missiles and 5 drones on the same day. All projectiles neutralized before reaching targets. On March 3, Qatar confirmed intercepting Iranian missiles targeting Hamad airport. National totals updated: 101/104 missiles, 24/39 drones intercepted, 2 Iranian SU-24 jets shot down. On March 4, Qatar intercepted 10 drones and 2 cruise missiles from Iran. Qatar Airways flights remain suspended. Al Jazeera reports attack volume is decreasing. March 5: Multiple rounds of missile interceptions over Doha confirmed by CNN journalists on the ground. Qatar Airways remains grounded; airspace remains closed. On March 5, Qatar MOD confirmed another missile attack with air defense systems actively intercepting. AFP journalists reported smoke rising over Doha after loud explosions. On March 5, Qatar's MOD confirmed 14 ballistic missiles and 4 drones targeted the country. 13 BMs intercepted, 1 fell in territorial waters, all drones intercepted. Elevated emergency alert issued to residents. Qatar's interior ministry ordered evacuation of residents near the US Embassy in Doha as a precautionary measure. March 5: Qatar MoD confirmed 14 ballistic missiles and 4 drones intercepted. One missile fell in territorial waters. Doha rocked by explosion sounds from interceptions. Mar 5: Iran's biggest barrage against Qatar to date — 14 BMs + 4 drones over ~90 minutes. 13 of 14 missiles intercepted; 1 fell in territorial waters. All drones neutralized. March 5: Qatar Defence Ministry confirmed most intense barrage yet — 14 ballistic missiles and 4 drones from Iran. 13 BMs intercepted, 1 fell in territorial waters. All 4 drones intercepted. Elevated emergency alert issued. AFP journalists described blasts as most intense since conflict began. March 5 saw Iran's largest barrage on Qatar to date: 14 ballistic missiles and 4 drones. AFP journalists in Doha described the blasts as the most intense since the conflict began. A column of black smoke was seen on the Doha horizon. Qatar Defence Ministry confirmed 13 missiles intercepted, 1 fell in territorial waters. Qatar Airways began limited relief flights.",
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
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatari air defense systems intercepted Iranian missiles over Doha at ~11:55 AM local time (07:55 UTC). CNN journalists on the ground reported intercepts rattled buildings as booms rang out; at least two additional rounds of interceptions followed shortly after. No confirmed debris/damage at airport."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar MOD confirmed new missile attack at ~12:25pm Doha time. Air defense systems intercepting incoming missiles; multiple explosions heard over Doha with smoke rising over the city."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar's defence ministry confirmed the country was targeted by 14 ballistic missiles and 4 drones from Iran on March 5. Thirteen missiles were intercepted and one fell in territorial waters. All 4 drones were intercepted. No casualties reported. Elevated emergency alert sent to residents; evacuation ordered near US Embassy in Doha."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar Defense Ministry confirmed new missile barrage: 14 ballistic missiles and 4 drones from Iran. 13 missiles intercepted; 1 fell in Qatar's territorial waters. All 4 drones intercepted. No casualties. Loud explosions heard across Doha from interceptions. Elevated emergency alert sent to residents."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar defense ministry reports largest Iranian barrage yet: 14 ballistic missiles and 4 drones targeted the country. 13 missiles intercepted, 1 fell in territorial waters. All 4 drones intercepted. No casualties. Elevated emergency alert sent to all residents."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar targeted by 14 ballistic missiles and 4 drones — AFP described blasts as most intense since conflict began. 13 missiles intercepted, 1 fell in territorial waters. All 4 drones intercepted. Elevated emergency alert issued to residents. Black smoke column visible on Doha horizon."
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
                    },
                    {
                            "name": "CNN (Day 6 Live Blog)",
                            "url": "https://us.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "France 24",
                            "url": "https://www.france24.com/en/middle-east/20260305-iran-launches-missiles-at-israel-as-middle-east-conflict-escalates"
                    },
                    {
                            "name": "The Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/05/03/2026/live-updates-qatar-evacuates-near-us-embassy-oil-spill-near-kuwait"
                    },
                    {
                            "name": "AFP via Arab News PK",
                            "url": "https://www.arabnews.pk/node/2635346/middle-east"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/05/iran-claims-it-hit-us-tanker-as-israel-launches-fresh-strikes-on-tehran"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/americas/us-israel-iran-war-day-6-iran-israel-strikes-continue-uae-extends-limited-flights-1.500463753"
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
            "detail": "Iranian drone struck QatarEnergy facility in Ras Laffan Industrial City on March 2, causing QatarEnergy to halt all LNG production. Ras Laffan supplies roughly 20% of global LNG exports. No human casualties reported but damage assessment is underway. March 2: Iranian drone confirmed struck QatarEnergy facility in Ras Laffan. QatarEnergy halted all LNG production — an unprecedented shutdown affecting ~20% of global LNG supply. European gas prices surged ~45–50%. March 2: QatarEnergy halted all natural gas production. Ras Laffan supplies approximately one-fifth of global LNG exports. Combined with Strait of Hormuz closure, this represents a major disruption to global energy markets. QatarEnergy confirmed full halt of LNG production on March 2, citing military attacks on operating facilities. European gas prices surged ~45%. Qatar is one of the world's top LNG producers. QatarEnergy announced a full halt to LNG and associated products production citing military attacks. European TTF gas benchmark jumped ~45% to over €46. Mar 2: QatarEnergy halted all LNG production — one of the world's largest LNG exporters. European gas prices surged 50%+. Qatar MOD confirmed Iranian missile hit energy facility at Ras Laffan. QatarEnergy ceased all LNG production on March 2 after Iranian drone struck the facility, affecting ~20% of global LNG supply. European benchmark gas prices surged nearly 50%. QatarEnergy's Ras Laffan plant operates 14 LNG trains with 77M tonnes annual capacity. March 2: QatarEnergy halted ALL LNG production across Ras Laffan and Mesaieed — unprecedented shutdown of the world's largest LNG export facility (~20% of global supply). European gas prices surged 50%+. No human casualties confirmed from the drone strikes. QatarEnergy declared force majeure on LNG operations around March 5, halting production at Ras Laffan, the world's largest LNG liquefaction complex. European and Asian gas prices soared to levels last seen during the 2022-2023 energy crisis.",
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
                    },
                    {
                            "date": "2026-03-05",
                            "text": "QatarEnergy declared force majeure on LNG shipments after facilities were struck, halting approximately 20% of global daily LNG supply. Strait of Hormuz closure prevents tanker traffic from departing (Euronews, OilPrice.com)."
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
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/business/2026/03/09/bapco-declares-force-majeure-as-iran-sets-bahrains-only-refinery-ablaze"
                    },
                    {
                            "name": "OilPrice.com",
                            "url": "https://oilprice.com/Latest-Energy-News/World-News/Bahrains-Bapco-Energies-Declares-Force-Majeure-as-War-Escalates.html"
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
    {
            "name": "US Embassy Area, Doha (Precautionary Evacuation), Qatar",
            "lat": 25.3197,
            "lng": 51.4857,
            "country": "Qatar",
            "city": "Doha",
            "severity": "watchlist",
            "icon": "🏛️",
            "type": "Diplomatic Compound / Evacuation Zone",
            "detail": "On March 5, Qatar's Ministry of Interior announced evacuation of residents living near the US Embassy in Doha as a precautionary measure. The US authorized non-emergency staff and families to depart several Middle Eastern countries. Iranian strikes this week have targeted US diplomatic compounds in the Gulf, including the US Consulate in Dubai and US Embassy in Riyadh. March 5: Qatar MoI ordered precautionary evacuation of residents near US Embassy compound as new Iranian missile barrage hit. Mar 5: Qatar interior ministry ordered evacuation of residents near the US Embassy following the largest single barrage yet from Iran. Qatar Interior Ministry raised national security alert to 'high' on March 6, ordering all residents indoors.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "Qatar Ministry of Interior evacuating residents near US Embassy in Doha as precautionary measure. US authorizes non-emergency staff departure from Gulf posts."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar's Interior Ministry ordered precautionary evacuation of residents living near the US Embassy in Doha early Thursday morning amid ongoing Iranian missile barrage."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Qatar's interior ministry ordered evacuation of residents living near the US Embassy in Doha as a precautionary measure amid the largest Iranian missile barrage on Qatar to date."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Qatar Interior Ministry raised national security level to 'high'; ordered all residents to stay indoors, away from windows and open areas."
                    }
            ],
            "sources": [
                    {
                            "name": "CNN (Day 6 Live Blog)",
                            "url": "https://us.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "France 24",
                            "url": "https://www.france24.com/en/middle-east/20260305-iran-launches-missiles-at-israel-as-middle-east-conflict-escalates"
                    },
                    {
                            "name": "Peninsula Qatar",
                            "url": "https://thepeninsulaqatar.com/article/05/03/2026/live-updates-qatar-evacuates-near-us-embassy-oil-spill-near-kuwait"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/iran-war-what-is-happening-on-day-six-of-us-israel-attacks"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/middle-east/live-blog/live-updates-iran-war-trump-israel-warship-attack-middle-east-rcna261866"
                    }
            ],
            "dateAdded": "2026-03-05"
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
            "detail": "Coalition air base hosting US, Kuwaiti, and Italian forces. Suffered the most visually confirmed damage outside the UAE. Chinese satellite imagery showed at least 4 direct impact sites, massive smoke plume visible from space. Hangars, runway, fuel depots extensively destroyed. Italy confirmed 'significant damage to the runway.' 3 Kuwaiti soldiers injured. Kuwait defense ministry confirmed 3 soldiers injured with minimal material damage. Kuwait intercepted 97 ballistic missiles and 283 drones total. On March 2, Kuwait air defenses engaged a new wave of hostile drones approaching from maritime routes. The majority were shot down per state media. Early March 2: Kuwait state media reported new drone interceptions approaching via maritime routes, suggesting evolving Iranian tactics. On March 2, a fighter jet crashed within 10km of the base (pilot ejected safely). Kuwait air defenses intercepted hostile drones at dawn approaching via maritime routes. March 2 dawn: Kuwait Army confirmed air defense forces intercepted hostile drones approaching centrally via maritime routes. Multiple US F-15E aircraft crashed nearby (cause under investigation). March 2: CENTCOM confirmed 4th US service member died from injuries sustained in Iran's initial attacks on Kuwait. 'Major combat operations continue.' New wave of missiles and drones targeted Kuwait airspace early March 3. Kuwait total interceptions: 178 ballistic missiles and 384 drones. March 4: IRGC claims 230-drone barrage targeted Ali Al Salem among other US bases. Kuwait defenses continue interceptions. Volume of attacks reportedly decreasing but disruption continues. March 4: IRGC claimed 230-drone operation (17th wave) targeted Ali Al Salem and Camp Arifjan in Kuwait alongside bases in Erbil, Iraq. On March 4, the IRGC confirmed it had fired 230 drones at US facilities including Ali Al Salem, describing the attacks as its 'first powerful steps.' On March 4, IRGC claimed firing 230 drones at multiple US facilities including Ali Al Salem. Kuwait military confirmed intercepting an active new wave of missiles and drones in its airspace late on March 4. IRGC on March 4 specifically named Ali Al Salem as a target in its 230-drone launch. Kuwait military confirmed ongoing interceptions of a wave of missiles and drones. On March 4, the IRGC confirmed it fired 230 drones at several US facilities including Ali Al Salem, describing the attacks as among its 'first powerful steps' in the war. Late March 5 / early March 6: Kuwait faced continued barrage of Iranian attacks, with Kuwaiti army confirming air defenses intercepting projectiles in its airspace. Videos circulated showing a southern Kuwaiti air base in flames. On March 6, Al Jazeera verified video of a projectile exploding near the base. Continued waves of Iranian missiles and drones targeting the installation. Kuwait MoD reported cumulative interceptions of 212 ballistic missiles and 394 drones as of March 6. On March 6, Iran's army explicitly confirmed ongoing large-scale drone attacks on US bases in Kuwait and vowed continued strikes 'in the coming hours.' On March 6, Iran's army announced further drone attacks on US bases in Kuwait, vowing continuation. Kuwait army confirmed ongoing interceptions of hostile attacks in national airspace. On March 6, Iran announced another wave of drones targeting US bases in Kuwait. Kuwait's army confirmed air defences engaging hostile attacks in its airspace. March 6: Iran army announced ongoing drone attacks on US bases in Kuwait. Kuwait army confirmed interceptions of hostile attacks breaching airspace. Kuwait MOD cumulative totals as of Day 6: 212 ballistic missiles and 394 drones detected and intercepted. On March 6, Iran's army confirmed via state TV launching 'various types of destructive drones' at US military bases in Kuwait 'in large numbers,' warning 'these attacks will continue in the coming hours.' Kuwait army confirmed active interceptions. Iran's army publicly confirmed ongoing large-scale drone attacks on US bases in Kuwait on March 6, with state TV warning attacks will continue. Iran's army confirmed on March 6 that it launched large-scale drone attacks on US bases in Kuwait, with the Kuwaiti army confirming ongoing interceptions. Kuwait's army confirmed ongoing interception of hostile attacks on March 6. Iran's army warned via state TV that large-scale drone attacks on US bases in Kuwait will continue in coming hours. Iran's army confirmed launching new wave of drones at US bases in Kuwait on March 6, vowing continued attacks. Kuwait reports 67 soldiers injured over the past week. On March 6, Iran's army announced continued drone strikes targeting US bases in Kuwait. Kuwait's army confirmed air defences were dealing with hostile missile and drone attacks breaching its airspace. IRGC confirmed Ali Al Salem was among targets in its 230-drone barrage on March 5. Iran announced another wave of drones targeting US bases in Kuwait on March 6. March 7: IRGC 23rd wave claimed targeting Ali al-Salem with new-generation missiles and drones. Kuwait MOD cumulative: 212 ballistic missiles and 394 drones intercepted. 2 military personnel + 1 child killed, 67 personnel injured across Kuwait operations. March 8: Kuwait armed forces responding to new wave of hostile drones; ballistic missiles also intercepted. Kuwaiti interior ministry reported 2 border guards killed 'while performing national duty' (cause unconfirmed). Kuwait defence ministry confirmed March 9 air defence interceptions of new missile and drone attacks. Kuwait declared force majeure on oil sales amid production cuts due to Iranian threats against Strait of Hormuz shipping and continued attacks on Kuwaiti infrastructure. March 9: Kuwait air defenses responded to continued missile and drone attacks as part of Iran's Day 10 strikes under newly appointed Supreme Leader Mojtaba Khamenei. Kuwait defence ministry confirmed forces intercepting new missile and drone attacks on March 9. March 10: Kuwait intercepted 2 ballistic missiles detected in southern Kuwait and destroyed 1 drone. MOD spokesman confirmed forces confronted hostile targets from dawn until midnight. March 10: Kuwait National Guard shot down 6 drones targeting northern and southern Kuwait. March 10: Kuwait National Guard downed six drones at security sites in north and south. Kuwait's Emir confirmed 12 total killed in the country from Iranian attacks. March 10: Kuwait National Guard intercepted six more drones over northern and southern security zones. No ground impacts reported.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC claimed firing 230 drones at several US facilities including Ali Al Salem Air Base as part of its 'first powerful steps' in the war, per Al Jazeera."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC confirmed it fired 230 drones at US facilities including Ali Al Salem Air Base as part of its 'first powerful steps' in the war (Al Jazeera, IRGC statement)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC announced it fired 230 drones at multiple US facilities including Ali Al Salem Air Base (Al Jazeera). Kuwait military confirmed it is actively intercepting a new wave of missiles and drones in its airspace (CNBC, citing Kuwait General Staff social media post)."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC specifically claimed Ali Al Salem Air Base among targets in its 230-drone wave announced Wednesday; Kuwait military confirmed dealing with new wave of missiles and drones in airspace (CNBC, Al Jazeera)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC confirmed Ali Al Salem was among targets of 230-drone wave; attacks continuing with declining frequency."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "IRGC confirmed it fired 230 drones at US facilities including Ali Al Salem Air Base on March 4 (Al Jazeera, March 5 report)."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Continued Iranian drone and missile barrage targeting Kuwait; videos showed a southern Kuwaiti air base in flames (multiple reports)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Al Jazeera published verified video showing a projectile exploding near Ali Al Salem Air Base. Continued Iranian targeting of the base, with reports of a southern Kuwaiti air base in flames circulating online."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Kuwait MoD cumulative update: 212 ballistic missiles and 394 drones detected and intercepted since start of operations targeting Kuwaiti airspace."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army stated on Friday via state TV that 'various types of destructive drones' targeted American military bases in Kuwait 'in large numbers' and that 'these attacks will continue in the coming hours.'"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army announced it targeted 'American military bases in Kuwait in large numbers' with destructive drones, vowing more attacks. Kuwait army confirmed air defenses dealing with hostile missile and drone attacks in national airspace."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's armed forces announced Friday they launched another wave of drones specifically targeting US bases in Kuwait, including Ali Al Salem. Kuwait's army confirmed air defences actively engaging hostile missile and drone attacks in its airspace."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army announced it has targeted 'American military bases in Kuwait in large numbers' with drones and that attacks 'will continue in the coming hours'. Kuwait army confirmed air defences currently dealing with hostile missile and drone attacks breaching airspace. (Al Jazeera, Iran state TV)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army announced new wave of destructive drones targeting US military bases in Kuwait 'in large numbers'; Kuwait army confirmed air defenses are 'dealing with hostile missile and drone attacks' breaching airspace"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army confirmed via state TV that 'various types of destructive drones' targeted American military bases in Kuwait 'in large numbers' and warned attacks would continue in coming hours"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army announced Friday it launched another wave of destructive drones targeting US military bases in Kuwait. Kuwait army confirmed air defences 'currently dealing with hostile missile and drone attacks' breaching airspace."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Kuwait's army confirmed air defenses are 'dealing with hostile missile and drone attacks' breaching airspace; Iran's army stated it targeted US bases in Kuwait with 'destructive drones in large numbers' and warned more attacks will follow"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's army announced a new wave of 'destructive drones' targeting US bases in Kuwait 'in large numbers,' vowing more attacks 'in the coming hours.' Kuwait's army confirmed air defences engaging hostile attacks breaching airspace. Kuwait reports 67 soldiers injured in Iranian strikes over the past week."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Iran's armed forces announced on Friday a new wave of drones targeting US bases in Kuwait including Ali Al Salem, stating 'these attacks will continue in the coming hours' (Iranian state TV via Al Jazeera)."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC announced 23rd wave of Operation True Promise 4 claiming strikes on Ali al-Salem Air Base in Kuwait using combined drone and missile attacks."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Kuwait armed forces downed 12 Iranian drones and 14 missiles on Friday per state-run KUNA; Kuwait MOD cumulative tally: 212 ballistic missiles and 394 drones detected/intercepted (CNN, Gulf News)"
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Kuwait military confirmed responding to 'a wave of hostile drones that penetrated the country's airspace' on Sunday morning. Air defences engaging hostile missile and drone attacks. Some civilian facilities sustained material damage from falling fragments and debris."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Kuwait defence ministry confirmed air defences intercepting missile and drone attacks on Monday March 9, marking continued Iranian aerial targeting of Kuwait military infrastructure on Day 10 of war."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Iran continued drone/missile attacks on Ali Al Salem and other Kuwait targets despite Iranian President Pezeshkian's assurance of stopping strikes on neighbors. Kuwait declared force majeure on oil sales as export flows disrupted (Euronews, Al Jazeera, CNBC)."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Kuwait Defence Ministry confirmed air defenses intercepting missile and drone attacks on Monday. Iranian attacks continued targeting Kuwait alongside new supreme leader Mojtaba Khamenei's first ordered strikes."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Kuwait defence ministry said forces intercepting missile and drone attacks on Monday March 9. Areas near Kuwait International Airport were also hit on Sunday. Kuwait continues to face daily barrage of Iranian drones and missiles."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Kuwait MOD confirmed interception of 2 ballistic missiles in southern Kuwait and destruction of 1 hostile drone. Kuwaiti Armed Forces confronted a wave of hostile aerial targets from dawn Monday until midnight. Explosions heard across the country from interception operations."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Kuwait's National Guard shot down six drones attacking northern and southern areas of the country. Drone threats continue on Day 11 of war."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Kuwait National Guard shot down six drones targeting northern and southern regions of the country early Tuesday, part of ongoing Iranian drone campaign. Kuwait Defense Ministry also reported intercepting two ballistic missiles the prior day."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Kuwait National Guard shot down six drones at security sites in northern and southern areas of the country. No impacts or damage reported at specific locations."
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
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/04/us-iran-war-live-updates.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/iran-fires-more-missiles-drones-across-gulf-region-amid-us-israeli-attacks"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/video/newsfeed/2026/3/6/video-shows-projectile-exploding-near-ali-al-salem-air-base-in-kuwait"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/americas/us-israel-iran-war-day-6-iran-israel-strikes-continue-uae-extends-limited-flights-1.500463753"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/us-israel-iran-war-what-we-know-intl-hnk"
                    },
                    {
                            "name": "Reuters via Al Arabiya",
                            "url": "https://english.alarabiya.net/News/middle-east/2026/03/06/iranian-attacks-on-civilians-wont-go-unanswered-centcom-commander-says"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/06/israel-launches-new-strikes-on-iran-and-lebanon-as-the-us-warns-of-intensifying-attacks"
                    },
                    {
                            "name": "Tribune India (ANI)",
                            "url": "https://www.tribuneindia.com/news/world/flawless-execution-irgc-launches-23rd-wave-of-strikes-against-us-bases-and-occupied-territories/"
                    },
                    {
                            "name": "CNN (Day 7 live)",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-06-26"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/08/kuwait-city-tower-on-fire-as-iranian-air-strikes-continue-across-gulf-countries"
                    },
                    {
                            "name": "Times Kuwait",
                            "url": "https://timeskuwait.com/breaking-kuwait-security-update-march-8-2026/"
                    },
                    {
                            "name": "Gulf News (AFP)",
                            "url": "https://gulfnews.com/world/gulf/explosions-heard-in-doha-following-missile-interception-as-gulf-nations-report-new-attacks-1.500467954"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/08/iranian-projectiles-continue-to-strike-gulf-countries-infrastructure.html"
                    },
                    {
                            "name": "Times Kuwait",
                            "url": "https://timeskuwait.com/kuwaiti-air-defenses-intercept-two-ballistic-missiles-and-destroy-drone/"
                    },
                    {
                            "name": "AP / CBS News",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-israel-stock-prices-down-oil-prices-up-despite-trump-reassurance/"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5249457-kuwait-downs-6-drones"
                    },
                    {
                            "name": "AP (via ClickOnDetroit)",
                            "url": "https://www.clickondetroit.com/news/world/2026/03/10/iran-fires-drones-toward-saudi-arabia-and-kuwait/"
                    },
                    {
                            "name": "SANA",
                            "url": "https://sana.sy/en/international/2301632/"
                    },
                    {
                            "name": "Arab Times",
                            "url": "https://www.arabtimesonline.com/news/kuwait-national-guard-downs-six-drones-at-key-locations/"
                    },
                    {
                            "name": "KUNA via Alwast News",
                            "url": "https://en.alwast.net/arab/kuwait-national-guard-downs-6/"
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
            "detail": "Kuwait's primary international airport. Struck by Iranian Shahed drone causing injuries to 12 people and material damage to Terminal 1. A second drone also hit the Terminal 2 construction project. Airport operations suspended. Terminal 1 sustained damage. Kuwait Health Ministry reported 1 killed and 32 wounded nationwide from Iranian attacks. March 8: Two fuel depots struck by drone attack causing large fire; fire brought under control with no significant injuries. Kuwait national oil company announced precautionary crude production cut. March 8: Drone wave hit fuel tank depots at airport, sparking large fire. Two border guards killed. Kuwait National Oil Company announced precautionary crude production cut. On March 8 at dawn, drones directly targeted fuel storage tanks at the airport, causing a huge fire at one depot. Fire brought under control. Kuwait's national oil company announced a precautionary crude oil production cut. March 8 dawn: Drone attack hit two KAFCO fuel storage tanks causing major fire. Contained, no significant injuries. Kuwait cut crude oil production as precaution. On March 8, drones struck two fuel depots at KWI, causing a major fire at one tank. Kuwait PACA confirmed the strikes. Fire controlled after hours; no casualties. On March 8, Kuwait confirmed two fuel depots at the airport were hit by Iranian drones, causing a major fire at one facility. On March 8, hostile drones targeted fuel storage tanks at the airport. The resulting fire was brought under control with no significant injuries per Kuwait News Agency. Military described the attack as a direct strike on vital infrastructure. On March 8, drones directly targeted fuel storage tanks at the airport, causing a major fire at one of two fuel depots. Kuwait described it as 'a direct targeting of vital infrastructure.' Fire was brought under control. March 8: Two fuel depots targeted by drone attack; large fire at one depot. Fire brought under control. No significant casualties. Kuwait national oil company announced precautionary crude production cuts.",
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
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Two fuel depots at Kuwait International Airport targeted by Iranian drone attack, causing a huge fire at one facility. Fire brought under control. No significant injuries. Military called it 'a direct targeting of vital infrastructure'. Civilian facilities also sustained debris damage from interception operations."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Dawn drone wave targeted fuel tank depots at Kuwait International Airport, causing a large fire at one depot. Kuwait Armed Forces confirmed intercepting wave of hostile drones breaching airspace. Two border guards killed. Kuwait National Oil Company announced precautionary crude production cut. Fire brought under control with no 'significant injuries' per KUNA."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Hostile drones directly targeted fuel storage tanks at Kuwait International Airport at dawn. A huge fire broke out at one of two targeted fuel depots. Kuwait Fire Force brought the airport fuel tank fire under control; no significant injuries. Kuwait Defense Ministry called the attack 'a direct targeting of vital infrastructure.' Kuwait National Oil Company announced a precautionary crude production cut."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Drone attack at dawn targeted two KAFCO fuel storage tanks at the airport, sparking a major fire at one depot. Fire brought under control with no significant injuries. Military called it 'a direct targeting of vital infrastructure.' Kuwait National Oil Company announced precautionary crude production cut."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "CNBC reports two fuel depots at the international airport were hit by drones, causing a 'huge fire at one of them.' Fire response ongoing."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Drones targeted fuel storage tanks at Kuwait International Airport at dawn on Sunday March 8. Kuwait military described it as 'a direct targeting of vital infrastructure.' A fire broke out and was brought under control with no significant injuries. Kuwait News Agency confirmed."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Drone attack directly targeted fuel storage tanks at Kuwait International Airport, sparking a major fire at one of two fuel depots. Kuwait's Public Authority for Civil Aviation confirmed the attack. Fire was brought under control. Kuwait's defense ministry described it as 'a direct targeting of vital infrastructure.'"
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Kuwait PACA confirmed two fuel depots at the airport were struck in a drone attack Saturday night/Sunday morning, triggering a huge fire at one depot. Firefighters deployed; no significant casualties reported. Military called it 'a direct targeting of vital infrastructure.' Kuwait's national oil company announced precautionary crude production cuts."
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
                    },
                    {
                            "name": "Arab News / KUNA",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "France24 / AFP",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-attack-targets-fuel-tanks-kuwait-airport-officials-say"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-07-26"
                    },
                    {
                            "name": "Times Kuwait",
                            "url": "https://timeskuwait.com/breaking-kuwait-security-update-march-8-2026/"
                    },
                    {
                            "name": "CNN Live",
                            "url": "https://us.cnn.com/world/live-news/iran-war-us-israel-trump-03-08-26"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/kuwait-says-international-airport-targeted-in-drone-attack/"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/drone-attack-targets-fuel-tanks-at-kuwait-international-airport/3854660"
                    },
                    {
                            "name": "Republic World",
                            "url": "https://www.republicworld.com/world-news/iranian-drone-strike-kuwait-airport-fuel-depot-social-security-hq-army-says-vital-infrastructure-targeted"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/08/kuwait-city-tower-on-fire-as-iranian-air-strikes-continue-across-gulf-countries"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-08/kuwait-pension-fund-hq-airport-hit-in-overnight-drone-attacks"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/08/iranian-projectiles-continue-to-strike-gulf-countries-infrastructure.html"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/mena/kuwait-airport-bahrain-desalination-plant-hit-as-iran-strikesgukf-infrastructure-1.500467526"
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
            "detail": "AFP photos show smoke rising from the area near the US Embassy in Kuwait City on March 2. Kuwait's air defenses intercepted hostile drones near Rumaithiya and Salwa neighborhoods in Hawalli Governorate where the embassy is located. US Embassy issued security alert urging people to stay away. Firefighters and ambulances were seen in the area. March 2: Reuters witness and AFP photos confirm smoke rising near US Embassy area. Active air defense interceptions ongoing over central Kuwait. March 2: Smoke seen near US Embassy. Kuwaiti air defenses intercepted hostile drones at dawn near Rumaithiya and Salwa neighborhoods in Hawalli Governorate. Kuwait Civil Defense confirmed explosions heard in residential areas were from successful interceptions. March 2: AP confirmed fire and smoke inside embassy compound after Iranian attack. No confirmed casualties. Embassy warned of continuing threat and ordered shelter-in-place. March 2: Fire and black smoke from inside US Embassy compound. CBS News reported 'apparent Iranian missile strike.' Embassy closed and issued emergency shelter-in-place. No immediate casualty reports but compound visibly damaged. March 2: Smoke confirmed near US Embassy compound. Embassy closed. US warned of 'continuing threat of missile and UAV attacks' and urged Americans to take cover. Mar 2: Large fire confirmed inside US Embassy compound from suspected Iranian drone. No injuries. Embassy had pre-emptively ordered staff to residences. All appointments canceled until further notice. On March 3, Iran struck the US Embassy compound in Kuwait directly. Kuwait state media condemned the attack. Embassy closed indefinitely; all visa and citizen services suspended. March 5: US State Department formally suspended all embassy operations. No US personnel injuries reported. Commercial flights remain grounded; Americans told to depart overland to Saudi Arabia or shelter in place. US Embassy in Kuwait fully suspended operations on March 5 — the second US diplomatic mission to do so since the start of the war. State Dept confirmed no US personnel injuries. Rubio called Kuwaiti FM to express condolences for at least 2 Kuwaiti troops killed in Iranian strikes. US Embassy formally suspended all operations on March 5. Secretary Rubio confirmed at least two Kuwaiti troops killed in Iranian strikes.",
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
                    },
                    {
                            "date": "2026-03-05",
                            "text": "US State Department formally announced full suspension of operations at US Embassy Kuwait City, citing ongoing Iranian strike risk. Embassy had been hit multiple times by suspected Iranian drones. Americans urged to depart overland via Saudi Arabia or shelter in place."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "US Embassy in Kuwait fully suspended operations until further notice — only second US diplomatic mission to do so since start of war. Secretary Rubio expressed condolences for deaths of at least 2 Kuwaiti troops in Iranian strikes (AP, Fox News, Al Jazeera)"
                    },
                    {
                            "date": "2026-03-05",
                            "text": "US State Department formally suspends all operations at Kuwait City embassy — second US diplomatic mission to fully halt work since the war began. Sec. Rubio called Kuwaiti FM to express condolences for at least two Kuwaiti troops killed in Iranian retaliatory strikes (AP, Reuters)"
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
                    },
                    {
                            "name": "US State Department",
                            "url": "https://www.state.gov/releases/office-of-the-spokesperson/2026/03/status-of-u-s-embassy-kuwait-city"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "Military.com / AP",
                            "url": "https://www.military.com/daily-news/2026/03/05/state-department-announces-closure-of-us-embassy-kuwait-after-iranian-strikes.html"
                    },
                    {
                            "name": "LiveNOW from FOX / AP",
                            "url": "https://www.livenowfox.com/news/iran-war-continues-strikes-israel-us-march-5-2026"
                    },
                    {
                            "name": "Reuters (via US News)",
                            "url": "https://www.usnews.com/news/world/articles/2026-03-05/us-suspending-operations-at-embassy-in-kuwait"
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
            "detail": "On March 2, Kuwait's civil defense confirmed that air defense forces intercepted the majority of hostile drones approaching the country via maritime routes near the Rumaithiya and Salwa areas in Hawalli Governorate. No injuries reported. Residents heard loud explosions from successful interception operations. March 10: Kuwait National Guard intercepted 6 more drones over northern and southern regions. Kuwait previously summoned Iran's ambassador for the second time on March 9. March 10: Kuwait National Guard confirmed intercepting 6 drones in northern and southern regions. Kuwait summoned Iran's ambassador for the second time.",
            "incidents": [
                    {
                            "date": "2026-03-02",
                            "text": "Kuwaiti air defenses intercepted majority of hostile sea-launched drones near Rumaithiya and Salwa neighborhoods; no injuries; explosions heard in residential areas from intercepts"
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Kuwait National Guard downed six drones detected in protected zones in northern and southern Kuwait. Brigadier General Jadaan Fadel Jadaan confirmed the interceptions as part of ongoing efforts to secure vital national infrastructure. No ground impacts or casualties reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Kuwait National Guard confirmed downing of 6 drones in northern and southern regions early Tuesday. Drones detected in protected zones under National Guard's Task Force jurisdiction."
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
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5249457-kuwait-downs-6-drones"
                    },
                    {
                            "name": "Al Wast News",
                            "url": "https://en.alwast.net/arab/kuwait-national-guard-downs-6/"
                    },
                    {
                            "name": "SANA (citing KUNA)",
                            "url": "https://sana.sy/en/international/2301632/"
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
            "detail": "Six US service members killed when an Iranian projectile scored a direct hit on a makeshift tactical operations center at the civilian port of Shuaiba on Sunday morning local time. Defense Secretary Hegseth confirmed one projectile penetrated air defenses and struck a fortified triple-wide trailer used as an operations center. No warning or siren preceded the strike. CENTCOM confirmed the death toll rose to 6 on Monday afternoon after two additional remains were recovered. CENTCOM confirmed on Mar 2 that the death toll from the Mar 1 drone strike at Shuaiba Port has risen to 6 US service members killed. Remains of 2 additional personnel were recovered from the struck makeshift tactical operations center. 18 US troops seriously wounded total across Operation Epic Fury. US death toll confirmed at 6 after CENTCOM recovered remains of two additional service members. A CENTCOM spokesperson confirmed 18 troops seriously wounded across Operation Epic Fury. CBS News (Mar 3) reported the strike was a one-way Shahed-type drone direct hit dead-center on a triple-wide trailer used as a makeshift ops center. Sources said no counter-drone capability was present and no warning sirens sounded. 18 US service members total seriously wounded across Operation Epic Fury as of Monday per CENTCOM. US death toll at Shuaiba confirmed at 6 service members (all Army Reserve, 103rd Sustainment Command). Pentagon released names of four on March 4.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Pentagon confirms total of 6 US service members killed in the drone strike on the tactical operations center at Port Shuaiba (up from earlier reports of 3-4). Four identified as members of 103rd Sustainment Command, Army Reserve. CNN and NBC confirm all deaths occurred at this single facility."
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
                    },
                    {
                            "name": "NBC Washington",
                            "url": "https://www.nbcwashington.com/news/national-international/iran-us-israel-middle-east-conflict-march-04-2026-live-updates/4070068/"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-04-26"
                    },
                    {
                            "name": "Fox DC / AP",
                            "url": "https://www.fox5dc.com/news/iran-war-continues-march-4-2026"
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
            "detail": "Camp Arifjan, a major US Army base in southern Kuwait housing logistics and sustainment troops, was targeted by Iranian drones. Anadolu Agency reported US officials confirmed a strike with casualties. IRGC claimed 12 drone strikes on the base as part of Operation True Promise 4 Wave 12. A halt-to-movement order was issued for Camp Arifjan along with other Kuwait bases. March 4: IRGC claims Camp Arifjan targeted in 230-drone barrage aimed at US facilities across the region. IRGC confirmed Camp Arifjan was among the targets of its 230-drone barrage fired on Wednesday March 4. IRGC claimed Camp Arifjan as a target in a 230-drone barrage on March 4. Kuwait military confirmed ongoing intercept operations. IRGC on March 4 specifically named Camp Arifjan as a target, calling the attacks among its 'first powerful steps' in the war. IRGC claimed Camp Arifjan was among US facilities targeted in its 230-drone barrage on March 4. IRGC confirmed on March 5 that Camp Arifjan was among targets in its 230-drone barrage against US facilities. Iran's armed forces said Friday (March 6) it launched another wave of drones targeting US bases in Kuwait.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC claimed firing 230 drones at several US facilities including Camp Arifjan as part of its 'first powerful steps', per Al Jazeera."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC confirmed Camp Arifjan among targets of its 230-drone barrage on Wednesday (Al Jazeera, IRGC statement)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Named as a target in IRGC's claimed 230-drone barrage against US troop facilities (Al Jazeera). Kuwait General Staff affirmed full readiness to deal with all threats (CNBC)."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC specifically claimed Camp Arifjan among targets in its 230-drone wave, calling the attacks its 'first powerful steps' (Al Jazeera, IRGC statement)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "IRGC confirmed Camp Arifjan among targets of 230-drone barrage described as 'first powerful steps' in war."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "IRGC confirmed Camp Arifjan was among facilities targeted in a 230-drone barrage on March 4 (Al Jazeera, March 5 report)."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "IRGC confirmed Camp Arifjan among targets of ongoing drone waves launched at US facilities in Kuwait on Friday."
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
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/04/us-iran-war-live-updates.html"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
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
    {
            "name": "Oil Tanker SONANGOL NAMIBE (Projectile Strike, Northern Persian Gulf off Kuwait)",
            "lat": 28.65,
            "lng": 48.75,
            "country": "Kuwait",
            "city": "Off Mubarak al Kabeer (30nm SE)",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Vessel Strike",
            "detail": "On March 5, the IRGC claimed it struck a 'US oil tanker' in the northern Persian Gulf. Maritime security agency Vanguard confirmed the attack hit the Bahamas-flagged tanker Sonangol Namibe off the coast of Kuwait. UKMTO confirmed an explosion on the port side causing an oil leak from its cargo tank. IRGC claimed strike on vessel via state media on March 5. British marine tracking agency confirmed crew observed large explosion on port side and a small craft departing. IRGC misidentified the vessel as a 'US oil tanker.' Seatrade Maritime confirmed the vessel is the Suezmax tanker Sonangol Namibe. The tanker was anchored in the Khor al-Zubair lightering zone (Iraq oil export corridor) when a small craft approached and a large explosion struck its port side, causing an oil spill. Crew is safe. IRGC Navy officially claimed missile strike, reporting vessel on fire. NBC confirmed hull likely breached with oil spill. UKMTO reported massive explosion at 22:40 GMT March 4. IRGC declared Strait of Hormuz a restricted military zone, warning all US/Israeli/European vessels would be targeted.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "IRGC projectile struck the Bahamas-flagged tanker Sonangol Namibe approximately 30nm SE of Mubarak al Kabeer, Kuwait. UKMTO confirmed explosion on port side and oil leak from cargo tank."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "IRGC claimed via state media it struck a 'US oil tanker' in the northern Persian Gulf that was on fire. Maritime security agency Vanguard confirmed the attack actually hit the Bahamas-flagged Sonangol Namibe off the coast of Kuwait. Crew reported seeing a large explosion on the vessel's port side before a small craft left the area."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "IRGC Navy claimed missile strike on 'American oil tanker' in northern Persian Gulf, reporting vessel on fire. NBC News reported the Sonangol Namibe's hull was likely breached. UKMTO reported massive explosion at 22:40 GMT on March 4 involving tanker 30nm SE of Kuwait's Mubarak al-Kabeer (Euronews, IranWire, NBC News, UKMTO)"
                    }
            ],
            "sources": [
                    {
                            "name": "CBS News (Live Updates)",
                            "url": "https://www.cbsnews.com/live-updates/us-iran-war-israel-strikes-tehran-lebanon-day-5-al-udeid-targeted/"
                    },
                    {
                            "name": "Al Arabiya English",
                            "url": "https://english.alarabiya.net/News/middle-east/2026/03/05/passage-through-the-strait-of-hormuz-during-war-will-be-under-iran-s-control-irgc"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-04-26"
                    },
                    {
                            "name": "Seatrade Maritime News",
                            "url": "https://www.seatrade-maritime.com/security/tanker-struck-off-kuwait-spilling-oil"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/05/iran-claims-it-hit-us-tanker-as-israel-launches-fresh-strikes-on-tehran"
                    },
                    {
                            "name": "IranWire",
                            "url": "https://iranwire.com/en/news/149930-irgc-claims-responsibility-for-attack-on-american-tanker-in-persian-gulf/"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/live-updates-iran-war-trump-israel-warship-attack-middle-east-rcna261866"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "PIFSS HQ (Public Institution for Social Security), Al Soor, Kuwait City",
            "lat": 29.3765,
            "lng": 47.991,
            "country": "Kuwait",
            "city": "Kuwait City",
            "severity": "critical",
            "icon": "🏛️",
            "type": "Government Building Drone Strike",
            "detail": "A suspected Iranian drone struck Kuwait's Public Institution for Social Security headquarters, a roughly 22-story government office tower in the upscale Al Soor district of Kuwait City, causing a massive fire engulfing multiple floors. KUNA reported the building sustained material damage; security guards were safely evacuated with no injuries. Bloomberg reported the building was on fire after an overnight Iranian attack. Kuwait Fire Force crews battled the blaze.",
            "incidents": [
                    {
                            "date": "2026-03-08",
                            "text": "Iranian drone struck the PIFSS headquarters skyscraper in Al Soor district, Kuwait City, triggering a massive multi-floor fire. No injuries reported. Building operations suspended; data backed up per KUNA. Firefighters battled the blaze through Sunday morning."
                    }
            ],
            "sources": [
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-08/kuwait-pension-fund-hq-airport-hit-in-overnight-drone-attacks"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-07-26"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/drone-attack-targets-fuel-tanks-at-kuwait-international-airport/3854660"
                    },
                    {
                            "name": "Times Kuwait",
                            "url": "https://timeskuwait.com/pifss-hit-services-shift-to-alternative-locations-no-injuries-reported/"
                    }
            ],
            "dateAdded": "2026-03-08"
    },
    {
            "name": "Kuwait Border Post (2 Border Guards Killed), Kuwait",
            "lat": 29.4,
            "lng": 47.69,
            "country": "Kuwait",
            "city": "Kuwait (Border Area)",
            "severity": "critical",
            "icon": "🛂",
            "type": "Border Guard Fatalities (Circumstances Unclear)",
            "detail": "Kuwait's Interior Ministry announced on March 8 that two officers from the General Directorate of Land Border Security were killed 'while performing their national duty.' Authorities did not elaborate on the circumstances. Multiple outlets including AFP, Arab News, and France24 note it was not confirmed whether the deaths resulted directly from an Iranian attack, though they are counted in broader Gulf conflict tallies. Kuwait Fire Force confirmed on X that two of its officers were killed 'while performing duties.' Al Jazeera Day 9 summary confirms two border security personnel killed. Upgraded to CRITICAL per rubric (confirmed fatalities at this location).",
            "incidents": [
                    {
                            "date": "2026-03-08",
                            "text": "Two Kuwaiti border guards killed 'while performing their national duty' per Interior Ministry. Circumstances not elaborated; unclear link to Iranian strikes."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Al Jazeera and Kuwait Fire Force confirm two officers killed while performing duties during the conflict. Wikipedia corroborates."
                    }
            ],
            "sources": [
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248773-2-kuwaiti-border-guards-killed-while-performing-duties"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "Al Jazeera (Day 9 Summary)",
                            "url": "https://www.aljazeera.com/news/2026/3/8/iran-war-what-is-happening-on-day-nine-of-us-israel-attacks"
                    },
                    {
                            "name": "Al Jazeera (Casualty Tracker)",
                            "url": "https://www.aljazeera.com/news/2026/3/1/us-israel-attacks-on-iran-death-toll-and-injuries-live-tracker"
                    }
            ],
            "dateAdded": "2026-03-08"
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
            "detail": "Major US military air base ~60 km south of Riyadh. Hosts US THAAD, Patriot, KC-135 tankers, E-3G AWACS. IRGC claimed they 'precisely hit' the base. Saudi Arabia said air defenses intercepted missiles near the base. Reports confirm impacts on base infrastructure. On March 3, Saudi Defense Ministry reported intercepting 8 drones near Riyadh and Al-Kharj, in the vicinity of PSAB. On March 3, 8 drones intercepted and destroyed near Riyadh and Al-Kharj per Saudi MoD spokesman Maj-Gen Turki Al-Maliki. No damage or casualties reported from interceptions. On March 3, Saudi defense ministry confirmed 8 drones intercepted near Riyadh and Al-Kharj (near PSAB). CNN noted Prince Sultan Air Base is located close to Al-Kharj. On March 5, Saudi air defenses intercepted 3 cruise missiles and 3 drones targeting the Al-Kharj industrial area near PSAB, according to MoD spokesperson Turki Al-Maliki via SPA. On March 5, Saudi air defenses intercepted 3 cruise missiles and 3 drones targeting the Al-Kharj industrial/military area where PSAB is located. Saudi MOD spokesperson Maj. Gen. Turki Al-Maliki confirmed all threats were neutralized. March 5: 3 cruise missiles and 3 drones intercepted near Al-Kharj. March 4: 9 drones and 2 additional cruise missiles neutralized near Riyadh/Al-Kharj. On Mar 5, Saudi air defenses intercepted 3 cruise missiles and 3 drones near Al-Kharj, defending PSAB and surrounding infrastructure. On March 6, three ballistic missiles targeting the base were intercepted before landing as part of a wider Iranian campaign against Gulf states. Three ballistic missiles targeting PSAB intercepted on March 6 as Iran widened its campaign. On March 6, Saudi MOD announced interception of 3 ballistic missiles targeting PSAB plus additional drone and cruise missile interceptions east of Al-Kharj. This is the continued targeting of the key US military installation. CNN satellite imagery from March 1 shows smoke rising from compound near PSAB where THAAD radar was previously stationed. Saudi MOD confirmed intercepting cruise missile and three drones on March 6. On March 7, Saudi air defenses intercepted a ballistic missile and a cruise missile targeting PSAB. On March 7, Saudi MOD confirmed intercepting a ballistic missile targeting PSAB. On March 7, Saudi air defenses intercepted a ballistic missile and a cruise missile targeting PSAB. Third consecutive day of strikes on Al-Kharj area. March 7: Ballistic missile and cruise missile targeting PSAB intercepted and destroyed. Ninth consecutive day of attacks on this base. On March 7, Saudi defenses intercepted an additional ballistic missile and cruise missile targeting the base, bringing total missiles intercepted at PSAB to at least 6 this week. On March 7, another ballistic missile was intercepted toward PSAB. Saudi MOD reports five missiles were intercepted toward PSAB on March 6 alone. Saturday March 7: Saudi MOD intercepted two ballistic missiles aimed at Prince Sultan Air Base. March 7: Two ballistic missiles and one cruise missile intercepted heading toward PSAB area. Saudi defence minister urges Iran to 'avoid miscalculation.' Mar 7: Saudi MOD confirmed intercepting 2 ballistic missiles targeting PSAB. Saudi MoD confirmed interception of two ballistic missiles aimed at PSAB on March 7. March 7: Saudi MOD intercepted 2 ballistic missiles plus 1 additional ballistic and 1 cruise missile targeting PSAB. March 7: One ballistic missile fell in uninhabited area after targeting PSAB; two additional BMs and one cruise missile intercepted. Saudi Defence Minister met Pakistan army chief to discuss measures to halt Iranian attacks. March 8: Saudi Arabia reports continued Iranian attacks despite ceasefire pledge. Saudi MOD confirmed intercepting two ballistic missiles launched toward PSAB on March 7-8. March 8: Ballistic missile aimed at PSAB fell in uninhabited area. Additional missiles intercepted near al-Kharj. March 7-8: 5 ballistic missiles intercepted Saturday, 3 more Sunday. One missile fell in uninhabited area (confirmed Saudi MOD). Third consecutive day targeting PSAB. On March 7-8, 5 ballistic missiles intercepted targeting PSAB; one fell in uninhabited area. Third consecutive day of attempted strikes on the base. CENTCOM confirmed March 8 that a 7th US service member (Army soldier) died Saturday night from injuries sustained during Iran's initial March 1 attacks in Saudi Arabia. Total US KIA in Operation Epic Fury now 7. On March 8, CENTCOM confirmed a 7th US service member has died from injuries sustained during Iran's initial attack on US troops in Saudi Arabia on March 1. All seven US fatalities in Operation Epic Fury were Army soldiers. Nine additional US service members have been seriously wounded across the region. CENTCOM announced March 9 that a 7th US service member died March 8 from wounds sustained in Iranian attack at this location on March 1. Total US KIA in Operation Epic Fury now seven. March 8: 7th US service member KIA — wounded March 1, died March 8 night. CENTCOM confirmed this is the first US combat death from the Saudi Arabia theater. Saudi MOD also intercepted 5 ballistic missiles and continued drone waves targeting PSAB. March 9: Pentagon confirmed 7th US soldier death. Sgt. Benjamin Pennington (1st Space Brigade) died March 8 from injuries sustained during March 1 Iranian strike on PSAB. Sgt. Benjamin N. Pennington (1st Space Brigade) became the 7th US combat death in the Iran war, dying March 8 from wounds sustained in the March 1 attack on PSAB. 7th US KIA: Sgt. Benjamin N. Pennington, 26, died March 8 from injuries sustained in the March 1 Iranian attack. 8th US death (National Guard soldier, Kuwait, March 6) attributed to medical emergency under investigation. March 9: 7th US soldier Sgt. Pennington (1st Space Brigade) died from March 1 attack injuries. 7th US combat death confirmed: Sgt. Benjamin N. Pennington, 26, died March 8 from wounds sustained in March 1 Iranian attack at PSAB. Assigned to 1st Space Battalion, 1st Space Brigade, Fort Carson, CO. 7th confirmed US combat death: Sgt. Benjamin N. Pennington (26, KY), 1st Space Battalion, died March 8 from injuries at PSAB on March 1. An 8th US military death (National Guard member, medical emergency in Kuwait on March 6) was also confirmed by CENTCOM. Sgt. Benjamin N. Pennington (8th US soldier killed in the war) died March 9 from injuries sustained during the March 1 attack. Pentagon investigation ongoing. Sgt. Benjamin N. Pennington, 26, 1st Space Battalion, died March 8 from injuries sustained in the March 1 Iranian attack — the 7th US combat death in the war. Sgt. Benjamin N. Pennington, 26, died March 9 from injuries sustained at PSAB on March 1, becoming the 7th US service member killed in the Iran war. Two additional ballistic missiles targeting PSAB intercepted and destroyed on March 9.",
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
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi air defenses intercepted three cruise missiles and three drones targeting the Al-Kharj governorate area (where PSAB is located). All projectiles destroyed before impact; no damage to critical infrastructure."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi air defenses intercepted and destroyed 3 cruise missiles and 3 drones near Al-Kharj governorate (location of PSAB), approximately 80km southeast of Riyadh. No damage reported."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi MoD intercepted and destroyed 3 cruise missiles and 3 drones near Al-Kharj Governorate (where PSAB is located), 80km southeast of Riyadh. Earlier on March 4, 9 drones and 2 cruise missiles were also intercepted near Riyadh and Al-Kharj."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi MOD confirmed interception and destruction of 3 cruise missiles and 3 drones near Al-Kharj governorate (where PSAB is located), via SPA. Spokesman Maj. Gen. Turki Al-Maliki confirmed in two separate statements. No damage reported."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Three ballistic missiles targeting PSAB intercepted before landing in early March 6 wider Iranian campaign (multiple reports)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD announced interception of 3 ballistic missiles fired at PSAB in Al-Kharj governorate early Friday. Additional drone and cruise missile intercepted east of Al-Kharj."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "CNN satellite imagery shows smoke rising from THAAD radar compound near PSAB on March 1; Saudi MOD confirmed intercepting cruise missile east of al-Kharj and 3 drones east of Riyadh on March 6"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD confirmed interception and destruction of a ballistic missile and a cruise missile aimed at Prince Sultan Air Base in Al-Kharj early Saturday. Fifth consecutive missile intercepted heading toward PSAB in recent days."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Ballistic missile heading toward PSAB intercepted and destroyed by Saudi air defenses early Saturday morning (CNN, Saudi MOD via X)"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "One ballistic missile and one cruise missile targeting PSAB intercepted and destroyed by Saudi air defenses on Saturday morning. Third consecutive day of attempted strikes on Al-Kharj area."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MoD announced interception and destruction of an additional ballistic missile and a cruise missile launched toward Prince Sultan Air Base in al-Kharj on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi air defenses intercepted and destroyed a ballistic missile launched toward Prince Sultan Air Base, per Defense Ministry spokesperson Maj. Gen. Turki Al-Maliki"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD intercepted and destroyed two ballistic missiles launched towards Prince Sultan Air Base in al-Kharj on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi Arabia's Ministry of Defense intercepted and destroyed two ballistic missiles launched towards Prince Sultan Air Base in al-Kharj. A cruise missile was also intercepted east of al-Kharj governorate. Saudi Defence Minister Prince Khalid bin Salman urged Iran to 'avoid miscalculation.'"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Ballistic missile aimed at PSAB fell in uninhabited area nearby (not intercepted). Two additional ballistic missiles and one cruise missile targeting PSAB were successfully intercepted earlier. Attacks continued despite Iran president's announced halt to Gulf strikes."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Al Jazeera live blog confirms Saudi Arabia reports more attacks on March 8 despite Iran's pledge to stop. Saudi MOD had intercepted two ballistic missiles targeting PSAB and six drones heading to Shaybah on March 7."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi MOD confirmed intercepting and destroying two ballistic missiles launched towards Prince Sultan Air Base (reported March 7-8 timeframe per CNBC/Al Jazeera)."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi MoD reported intercepting and destroying ballistic missiles launched toward Prince Sultan Air Base in al-Kharj. One ballistic missile fell in an uninhabited area near the base."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi air defenses intercepted 5 ballistic missiles targeting PSAB on Saturday and 3 more on Sunday. Saudi MOD spokesman confirmed one ballistic missile fell in an uninhabited area near the base — a confirmed ground impact. Third consecutive day of attempted strikes on PSAB."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi Arabia intercepted 5 ballistic missiles heading toward Prince Sultan Air Base on Saturday. One missile fell in an uninhabited area. It was the third consecutive day of attempted strikes on PSAB."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "CENTCOM announced Sunday that a 7th US service member died Saturday night (March 7) from injuries sustained during an Iranian attack on US troops at a military base in Saudi Arabia on March 1. The service member died while being prepared for medical evacuation to Germany. CENTCOM did not identify the specific base; PSAB is the primary US installation in the Al-Kharj area of Saudi Arabia. Total US KIA in Operation Epic Fury: 7."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "CENTCOM announces 7th US service member killed in Operation Epic Fury — Army soldier wounded during Iranian attack on US troops in Saudi Arabia on March 1 has died from injuries"
                    },
                    {
                            "date": "2026-03-09",
                            "text": "CENTCOM announces 7th US service member killed in action during Operation Epic Fury. Service member died March 8 from injuries sustained in Iranian attack on US troops in Saudi Arabia on March 1. Identity withheld pending next-of-kin notification. All seven US KIA in the war were Army soldiers."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "CENTCOM announced 7th US service member KIA — seriously wounded at scene of Iranian attack on US troops in Saudi Arabia on March 1, succumbed to injuries the night of March 8. First US combat death from Saudi theater. Saudi MOD also intercepted 5 ballistic missiles toward PSAB on March 8."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Pentagon confirmed 7th US soldier killed in war: Sgt. Benjamin N. Pennington, 26, of Glendale, KY, assigned to 1st Space Battalion, 1st Space Brigade, died March 8 from injuries sustained during March 1 Iranian strike on PSAB. Six other US troops were killed in Kuwait drone attack."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "7th US combat death confirmed: Sgt. Benjamin N. Pennington, 26, of Glendale, Kentucky (1st Space Battalion, 1st Space Brigade, Fort Carson, CO), died March 8 from wounds sustained in the March 1 Iranian attack on PSAB. Pentagon officially identified him on March 9."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "CENTCOM confirmed Sgt. Benjamin N. Pennington, 26, of Glendale, KY (1st Space Battalion, 1st Space Brigade) died March 8 from injuries sustained in the March 1 Iranian attack on a military base in Saudi Arabia. He is the 7th US service member killed in the conflict."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Pentagon confirmed Sgt. Benjamin N. Pennington, 26, of Glendale, KY (1st Space Battalion, 1st Space Brigade) died March 8 from injuries sustained in Iranian attack on PSAB on March 1. He is the 7th US combat death of the war."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Pentagon identifies Sgt. Benjamin N. Pennington, 26, of Glendale, KY (1st Space Battalion, 1st Space Brigade) as the US soldier killed from injuries sustained during the March 1 Iranian attack on PSAB. He died March 8."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Pentagon confirmed 7th US combat death: Sgt. Benjamin N. Pennington, 26, of Glendale, KY, died March 8 from injuries sustained in March 1 Iranian attack on PSAB. Assigned to 1st Space Battalion, 1st Space Brigade."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Pentagon confirmed 7th US service member killed: Army Sgt. Benjamin N. Pennington, 26, of Glendale, KY, died from injuries sustained during the March 1 Iranian attack at PSAB. Assigned to 1st Space Battalion, 1st Space Brigade."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi MOD intercepted and destroyed two ballistic missiles launched towards Prince Sultan Air Base on Monday March 9."
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
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635226/saudi-arabia"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659460/saudi-arabia/saudi-air-defenses-intercept-3-cruise-missiles-3-drones-near-al-kharj"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/05/saudi-arabia-intercepts-destroys-three-cruise-missiles-several-drones-"
                    },
                    {
                            "name": "Al Jazeera Live Blog (March 6)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/6/iran-live-trump-says-iran-being-demolished-tehran-keeps-up-gulf-attacks"
                    },
                    {
                            "name": "Wikipedia Timeline (citing multiple sources)",
                            "url": "https://en.wikipedia.org/wiki/Timeline_of_the_2026_Iran_conflict"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635432/saudi-arabia"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659499/saudi-arabia/saudi-intercepts-4-drones-over-riyadh-region-foils-missile-attacks"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248108-saudi-arabia-destroys-4-rockets-2-drones-al-kharj-eastern-region"
                    },
                    {
                            "name": "CNN (Satellite Imagery Investigation)",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/radar-bases-us-missile-defense-iran-war-intl-invs"
                    },
                    {
                            "name": "CNN (Day 7 Summary)",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/us-israel-iran-war-what-we-know-intl-hnk"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635545/saudi-arabia"
                    },
                    {
                            "name": "CNN (Day 7 live)",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-06-26"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659514/saudi-arabia/saudi-intercepts-16-drones-targeting-shaybah-field-missile-toward-prince-sultan-air-base"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "BSS/AFP",
                            "url": "https://www.bssnews.net/international/366556"
                    },
                    {
                            "name": "SANA (Syrian Arab News Agency)",
                            "url": "https://sana.sy/en/international/2300919/"
                    },
                    {
                            "name": "AP (via ABC News)",
                            "url": "https://abcnews.com/US/wireStory/iranian-attacks-target-gulf-states-us-warns-bombing-130851335"
                    },
                    {
                            "name": "ANI (citing Arab News/Saudi MOD)",
                            "url": "https://aninews.in/news/world/middle-east/dubai-authorities-confirm-minor-incident-successfully-contained-after-debris-falls-from-interception20260307110607/"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248432-saudi-arabia-ballistic-missile-targeting-prince-sultan-base-falls-uninhabited-area"
                    },
                    {
                            "name": "Saudi MOD via SPA (2 BM intercepts)",
                            "url": "https://www.globalsecurity.org/wmd/library/news/saudi/2026/saudi-260307-spa01.htm"
                    },
                    {
                            "name": "Al Jazeera (March 8 Live Blog)",
                            "url": "https://www.aljazeera.com/news/liveblog/2026/3/8/iran-live-israel-bombs-tehran-oil-depots-attacks-on-gulf-states-continue"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/07/not-slowing-down-one-week-on-us-israeli-strikes-on-iran-continue.html"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635639/saudi-arabia"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/08/politics/us-service-member-killed-iran-war"
                    },
                    {
                            "name": "Task and Purpose",
                            "url": "https://taskandpurpose.com/news/7th-us-death-saudi-arabia-iran/"
                    },
                    {
                            "name": "The Hill",
                            "url": "https://thehill.com/policy/defense/5774063-seventh-us-service-member-dies/"
                    },
                    {
                            "name": "Fortune / AP",
                            "url": "https://fortune.com/2026/03/08/us-iran-war-casualties-seventh-army-solidier-attack-saudi-arabia/"
                    },
                    {
                            "name": "AP (via Live5 News)",
                            "url": "https://www.live5news.com/2026/03/08/7th-american-is-killed-iran-operations-military-confirms/"
                    },
                    {
                            "name": "CENTCOM (via Mediaite)",
                            "url": "https://www.mediaite.com/politics/just-in-7th-us-service-member-killed-in-iran-conflict-centcom-says/"
                    },
                    {
                            "name": "Army Times",
                            "url": "https://www.armytimes.com/news/your-military/2026/03/08/seventh-us-service-member-killed-in-action-during-operation-epic-fury/"
                    },
                    {
                            "name": "CENTCOM via APA",
                            "url": "https://en.apa.az/america/seventh-us-service-member-killed-in-iran-war-after-being-wounded-in-attack-in-saudi-arabia-495673"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
                    },
                    {
                            "name": "OPB/AP",
                            "url": "https://www.opb.org/article/2026/03/09/iran-attacks-israel-gulf-states-after-naming-new-leader-on-day-10-of-war/"
                    },
                    {
                            "name": "The Hill",
                            "url": "https://thehill.com/policy/defense/5774881-us-soldier-identified-killed-iran-saudi-arabia/"
                    },
                    {
                            "name": "SANA/Anadolu",
                            "url": "https://sana.sy/en/international/2301385/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/9/iran-war-what-is-happening-on-day-10-of-us-israel-attacks"
                    },
                    {
                            "name": "Newsweek",
                            "url": "https://www.newsweek.com/pentagon-names-seventh-us-military-death-iran-war-11645857"
                    },
                    {
                            "name": "CBS News",
                            "url": "https://www.cbsnews.com/news/us-service-members-killed-iran-war-what-we-know/"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/09/saudi-arabia-intercepts-several-drones-targeting-oil-field-"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-07/saudi-arabia-intercepts-drones-heading-toward-shaybah-oil-field"
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
            "detail": "Riyadh's main international airport. Saudi Arabia confirmed Iranian missiles targeted the capital region. Air defenses intercepted projectiles near the airport. No disruption to navigation or casualties reported. On March 3, Saudi Arabia intercepted 8 drones near Riyadh and Al Kharj (55 miles SE of Riyadh, near Prince Sultan Air Base). No damage or casualties reported. On March 6, Saudi MOD confirmed interception of three additional drones east of the Riyadh region. Saudi MoD confirmed intercepting a total of 4 Iranian drones targeting Riyadh area on March 6 (3 east, 1 northeast of capital). Three drones intercepted east of Riyadh on March 6 per Saudi MOD. On March 7, one drone was intercepted and destroyed east of Riyadh. March 7: Iranian missiles intercepted near Riyadh airport per AFP Gulf source. Drone also intercepted east of Riyadh. No disruption or losses. March 7: Saudi MOD intercepted drone east of Riyadh. Ongoing interception activity in Riyadh vicinity. March 7: Drone intercepted and destroyed east of Riyadh city. Mar 7: Saudi MOD intercepted drone east of Riyadh. Saudi MoD confirmed interception and destruction of a drone east of Riyadh city on March 7. March 7: Saudi MOD intercepted and destroyed a drone east of Riyadh. March 8: Saudi MoD intercepted 21 drones, 13 near Riyadh city. March 8: 13 drones intercepted east of Riyadh, 8 more entering airspace. Diplomatic quarter drone thwarted. 33 drones total intercepted Sunday across Saudi Arabia. On March 8, Saudi MoD reported 13 drones intercepted east of Riyadh and 8 more shot down entering Saudi airspace — 21 drones total in a single day. On March 9, Saudi air defenses intercepted and destroyed two drones north of Riyadh, continuing a pattern of daily Iranian drone incursions toward the capital area. Saudi defense ministry intercepted 33 drones on March 8, including 26 targeting Riyadh and surrounding areas. A drone aimed at the Diplomatic Quarter was also intercepted. March 8-9: Saudi MoD intercepted 12+ drones targeting Riyadh area in multiple waves. Saudi FM reiterated right to self-defense.",
            "incidents": [
                    {
                            "date": "2026-02-28",
                            "text": "Iranian missiles targeted Riyadh region. Saudi air defenses intercepted projectiles near King Khalid International Airport."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "Saudi military intercepted and destroyed 8 Iranian drones near Riyadh and Al Kharj early Tuesday local time, per Saudi Defense Ministry spokesman Maj-Gen Turki Al-Maliki. No damage or casualties reported."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi Ministry of Defence intercepted three drones east of the Riyadh region on Friday, March 6. No damage or casualties reported."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi Defence Ministry intercepted 3 drones east of Riyadh plus 1 additional drone northeast of Riyadh on March 6."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD intercepted and destroyed three drones to the east of the Riyadh region on Friday (Al Jazeera)."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "One drone intercepted and destroyed east of Riyadh, per Saudi Defense Ministry spokesman Maj. Gen. Al-Maliki."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MoD confirmed a drone was intercepted and destroyed east of Riyadh city. AFP correspondents and a Gulf source reported intercepted Iranian missiles near Riyadh airport. No navigation disruption or material losses."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MoD confirmed interception and destruction of a drone east of Riyadh city on Saturday morning."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD announced interception of one drone east of Riyadh city on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi air defenses intercepted and destroyed one drone east of Riyadh, per Defense Ministry spokesperson"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD intercepted and destroyed a drone east of Riyadh city on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MoD reported interception and destruction of a drone east of Riyadh city on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD reported intercepting and destroying a drone east of Riyadh city (Al Jazeera)."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi MoD intercepted and destroyed 13 drones east of Riyadh city, with 8 additional drones shot down upon entering Saudi airspace, totaling 21 drone interceptions on March 8."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defense ministry intercepted 13 drones east of Riyadh and 8 more entering Saudi airspace on Sunday morning. A drone targeting Riyadh's diplomatic quarter was also thwarted with no material damage or casualties. Saudi MOD confirms 33 total drones intercepted on Sunday."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi air defenses intercepted 21 drones targeting the Riyadh area on Sunday: 13 destroyed east of Riyadh city, 8 shot down shortly after entering Saudi airspace. Saudi MoD spokesman Maj. Gen. Turki Al-Maliki confirmed on X."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Ministry of Defense announced two drone attacks were foiled after being shot down north of Riyadh, per Saudi Press Agency (SPA). No damage or casualties reported."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi MoD reported intercepting multiple waves of drones targeting Riyadh area on March 8-9: three drones downed east of Riyadh, six more intercepted further east, and three attempted attacks thwarted within the city. Saudi Foreign Ministry reiterated firm condemnation of Iranian attacks and warned it retains full right to take measures to safeguard security."
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
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/06/israel-launches-new-strikes-on-iran-and-lebanon-as-the-us-warns-of-intensifying-attacks"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/us-israel-iran-war-what-we-know-intl-hnk"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635545/saudi-arabia"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659514/saudi-arabia/saudi-intercepts-16-drones-targeting-shaybah-field-missile-toward-prince-sultan-air-base"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/saudi-arabia-downs-drones-near-riyadh"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/07/not-slowing-down-one-week-on-us-israeli-strikes-on-iran-continue.html"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635639/saudi-arabia"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659548/saudi-arabia/saudi-air-defenses-intercept-drones-targeting-riyadh"
                    },
                    {
                            "name": "The Peninsula Qatar (SPA)",
                            "url": "http://thepeninsulaqatar.com/article/09/03/2026/saudi-ministry-of-defense-two-drone-attacks-foiled-north-of-riyadh"
                    },
                    {
                            "name": "FDD Long War Journal",
                            "url": "https://www.longwarjournal.org/archives/2026/03/iran-continues-striking-civilian-infrastructure-and-us-bases-in-the-gulf-march-7-8-updates.php"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-on-iran-day-9-new-strikes-hit-tehran-as-attacks-hit-gulf-nations-uae-president-warns-enemies-1.500467141"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
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
            "detail": "Home to virtually all major Aramco facilities. A Saudi official stated: 'missiles targeting Aramco come from the north, not Yemen' — directly attributing to Iran. Saudi MOD said air defenses intercepted the projectiles. On March 4, Saudi defense ministry confirmed interception and destruction of a drone over the Eastern Province. Saudi defence ministry confirmed March 4 interception of a drone in the Eastern Province. On March 4, the Saudi defence ministry confirmed intercepting and destroying a drone in the Eastern Province. On March 6, Saudi defence ministry confirmed one drone intercepted and destroyed in the Eastern Province. On March 10, Saudi air defenses intercepted a ballistic missile targeting the Eastern Region. On March 10, Saudi MOD confirmed interception and destruction of a ballistic missile targeting the Eastern Region. On March 10, Saudi MOD intercepted a ballistic missile targeting the Eastern Region. Saudi Defense Ministry confirmed interception of a ballistic missile targeting the Eastern Province early on March 10, alongside drone interceptions east of Al-Kharj. On March 10, Saudi MoD confirmed intercepting a ballistic missile and additional drones over the Eastern Province. Total Saudi interceptions now exceed 95 missiles and 164 drones since the war began. March 10: Saudi MoD intercepted ballistic missile targeting Eastern Region; destroyed two drones east of Al-Kharj. March 10: Saudi MOD destroyed two more drones over eastern region. March 10: Saudi MOD confirmed two more Iranian drones destroyed over the eastern region. March 10: Saudi defense ministry destroyed two more drones over eastern region. March 10: Saudi MOD confirmed destroying 2 additional drones over eastern region.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Saudi defence ministry confirmed it intercepted and destroyed a drone in the Eastern Province; no further details on damage or casualties provided (Al Jazeera)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi defence ministry announced one drone intercepted and destroyed in the Eastern Province on March 6."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD air defense systems intercepted a ballistic missile targeting the Kingdom's Eastern Region. The missile was detected and successfully destroyed before reaching its target."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD confirmed interception and destruction of a ballistic missile targeting the Eastern Region. No casualties or damage reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD confirmed interception of a ballistic missile targeting the Kingdom's Eastern Region."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD confirmed it shot down a ballistic missile targeting the Eastern Province and destroyed drones east of Al-Kharj Governorate early Tuesday March 10."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Defence Ministry announced early Tuesday that a ballistic missile and drones launched toward the Eastern Province were shot down. Two drones destroyed over the oil-rich eastern region."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MoD intercepted a ballistic missile targeting the Eastern Region and destroyed two drones east of Al-Kharj Governorate. Kuwait and UAE also reported incoming fire."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Defense Ministry destroyed two drones over the kingdom's oil-rich eastern region on Tuesday, continuing the pattern of Iranian drone attacks on Saudi energy infrastructure."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Defense Ministry confirmed destruction of two Iranian drones over the oil-rich eastern region on Tuesday."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Arabia's defense ministry confirmed it intercepted and destroyed two drones over the kingdom's oil-rich eastern region on Tuesday. No ground damage or casualties reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Ministry of Defence confirmed destruction of two drones over the kingdom's oil-rich eastern region on Tuesday."
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
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635432/saudi-arabia"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/06/saudi-arabia-thwarts-multiple-iranian-drone-missile-attacks-in-riyadh-across-kingdom"
                    },
                    {
                            "name": "Gulf News (Live Updates)",
                            "url": "https://gulfnews.com/world/mena/usisrael-war-on-iran-day-10-mojtaba-khamenei-named-supreme-leader-gulf-states-face-new-attacks-1.500467987"
                    },
                    {
                            "name": "SANA",
                            "url": "https://sana.sy/en/international/2301591/"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635841/saudi-arabia"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
                    },
                    {
                            "name": "AP (via Military.com)",
                            "url": "https://www.military.com/daily-news/2026/03/10/iran-launches-new-attacks-targeting-israel-and-gulf-countries-it-seeks-ramp-pressure-us.html"
                    },
                    {
                            "name": "1News (AP wire)",
                            "url": "https://www.1news.co.nz/2026/03/10/sirens-in-dubai-iran-launches-new-attacks-at-gulf-arab-countries/"
                    },
                    {
                            "name": "AP / PBS",
                            "url": "https://www.pbs.org/newshour/world/iranian-barrages-target-israel-and-gulf-countries-as-hegseth-warns-iran-of-most-intense-day-of-strikes"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/10/nx-s1-5742828/iran-war-us-trump"
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
            "detail": "An Iranian Shahed-136 drone struck Saudi Aramco's Ras Tanura refining facility on March 2 morning, sparking a fire that was described as small and contained. Aramco halted refinery operations as a precautionary measure. No casualties reported. Refinery shut down as precautionary measure Monday. Saudi MOD says two drones intercepted; debris caused small, contained fire. 550,000 bpd facility halted, impacting crude exports. Analysts call this a 'significant escalation' targeting Gulf energy infrastructure. March 2: Two drones intercepted targeting refinery; debris fire. Saudi Arabia shut down some operational units. Saudi state TV confirmed temporary refinery shutdown. March 2: Saudi energy ministry confirmed partial shutdown of refinery operations. Officials clarified the fire was caused by debris from an intercepted Iranian missile, not a direct drone strike as initially reported. Saudi state TV confirmed temporary shutdown of Ras Tanura refinery on March 2 after drone debris from interception caused a contained fire. Mar 2: Saudi state TV confirmed temporary shutdown of refinery following drone attack. MOD: 2 drones intercepted, debris caused small fire, no casualties. Saudi state TV confirmed Ras Tanura refinery (550,000 bpd capacity) temporarily shut down on March 2 after drone interception debris caused a fire. Saudi MOD confirmed 2 drones intercepted. On March 4, a drone struck the already-shuttered Ras Tanura complex again per Reuters (4 sources). Saudi MOD confirmed the attack but said no damage resulted. The refinery (550,000 bpd capacity) has remained shut since the March 2 drone attack that caused a fire. On March 4, a projectile hit the refinery directly (Reuters), after the plant had already been shut down from an earlier debris-induced fire. March 4: Reuters sources report a projectile directly hit the refinery, which had already been shut down after earlier debris fire from intercepted drones. On March 4, a projectile directly hit the refinery per two Reuters sources. Operations had already been shut down as a precaution after an earlier debris-induced fire. Reuters sources report a new projectile hit the already-shuttered refinery later on March 4, beyond the earlier debris fire. On March 4, a projectile directly hit the refinery per two Reuters-cited sources, beyond the earlier debris fire that had already prompted a shutdown. On March 4, Reuters (via two sources) reported a projectile hit the refinery again, after the plant had already been shut down following the initial drone debris fire earlier in the week. March 4: Reuters reports projectile hit refinery; operations remain suspended since earlier precautionary shutdown. On March 4, a projectile reportedly struck the refinery again according to Reuters sources, compounding earlier damage from drone debris fire that forced shutdown. On March 5, Saudi forces intercepted another drone targeting Ras Tanura. The refinery remains shut down since earlier attacks this week. On March 5, Saudi air defenses thwarted another drone targeting Ras Tanura. Ministry of Energy confirmed no damage or supply disruption from the latest attempt. March 5: Latest drone attack on Ras Tanura thwarted by Saudi air defenses. No damage or supply disruption. Mar 5: Latest drone targeting Ras Tanura intercepted with no damage. Saudi MoE confirms no supply disruption. March 5: Saudi MoD confirmed another drone attack attempt on Ras Tanura refinery was intercepted. Ministry of Energy stated no damage or disruption to supplies.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "A projectile hit the Ras Tanura refinery according to two sources cited by Reuters, following earlier shutdown of operations after debris fire from interception of two Iranian drones"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "A projectile hit Ras Tanura refinery according to two sources cited by Reuters, after the plant had already been shut down from an earlier drone debris fire. Saudi defense ministry also intercepted a drone in the Eastern Province."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Aramco oil facility attacked again per Alma Research Center day 4 report."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Projectile hit Ras Tanura refinery per two Reuters sources; refinery had been shut down since earlier drone interception debris fire. Operations remain suspended."
                    },
                    {
                            "date": "2026-03-04",
                            "text": "A projectile hit Saudi Arabia's Ras Tanura refinery according to two sources cited by Reuters, days after it was shut down from earlier drone debris fire (Al Jazeera/Reuters)"
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi air defenses stopped a new drone attack targeting Ras Tanura refinery. Latest attempts thwarted without impact on critical infrastructure per Saudi MoD."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi air defenses stopped another drone attack targeting Ras Tanura refinery. Ministry of Energy confirmed the attack 'did not result in any damage or disruption to supplies.'"
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi MoD stopped latest drone attack targeting Ras Tanura refinery in Eastern Province. Ministry of Energy confirmed no damage or supply disruption from the latest attempt."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "Saudi MOD confirmed latest drone attack targeting Ras Tanura was thwarted. Ministry of Energy says no damage or disruption to supplies from latest attempt."
                    },
                    {
                            "date": "2026-03-05",
                            "text": "New drone attack attempt on Ras Tanura refinery intercepted by Saudi air defenses. Saudi Ministry of Energy confirmed no damage or disruption to supplies."
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
                    },
                    {
                            "name": "Alma Research Center",
                            "url": "https://israel-alma.org/daily-report-the-second-iran-war-march-4-2026/"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635226/saudi-arabia"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659460/saudi-arabia/saudi-air-defenses-intercept-3-cruise-missiles-3-drones-near-al-kharj"
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
            "detail": "Two Iranian Shahed-136 kamikaze drones struck the US Embassy in Riyadh, hitting the roof and perimeter of the chancery building. Saudi Defense Ministry confirmed the attack caused a limited fire and minor material damage. The embassy was empty at the time with no casualties reported (Fox News). IRGC claimed the strike as part of efforts to destroy 'American political centers' in the region. On March 3, two Iranian drones struck the embassy roof and building, causing a limited fire. The IRGC stated it had begun targeting 'American political centers,' naming the Riyadh embassy specifically. A third drone was reported en route. Saudi air defenses intercepted additional drones over the Diplomatic Quarter. Follow-up drones targeted the embassy area after the initial strike. IRGC claimed it began destroying 'American political centers,' naming the Riyadh embassy. Embassy building reportedly empty at time of attack with no casualties. US Mission issued shelter-in-place for Riyadh, Jeddah, and Dhahran. Embassy closed indefinitely. Saudi MoD intercepted 8 more drones near Riyadh/Al-Kharj. US shelter-in-place alert issued for Riyadh, Jeddah & Dhahran. On morning of March 3: After initial 2 drones hit US Embassy, 2 more drones struck the Diplomatic Quarter per Reuters sources. Saudi MoD confirmed. Washington Post confirmed the drone struck the CIA station within the embassy compound, causing structural damage and partial roof collapse. No CIA casualties reported. March 8: Second attempted drone attack on Diplomatic Quarter thwarted; Saudi MoD intercepted 21 drones total including 13 east of Riyadh. On March 8, Saudi air defenses thwarted a drone attack targeting the Diplomatic Quarter — the second attempted strike on this area. No damage or casualties. Saudi Defense Ministry reported intercepting a total of 21+ drones in the Riyadh area on March 8. March 8: Drone targeting diplomatic quarter intercepted with no damage or casualties. On March 8, Saudi air defenses foiled a second drone attack on the Diplomatic Quarter (first was the March 3 US Embassy drone strike). No damage or casualties. On March 8 overnight, Saudi defense ministry foiled another drone attack targeting the Diplomatic Quarter. Three drones also shot down over Riyadh city. On March 8, a drone aimed at Riyadh's diplomatic quarter was thwarted with no damage. Saudi MOD reported 26 drones targeted the capital area with 13 intercepted east of Riyadh. March 8: Saudi intercepted drone targeting diplomatic quarter. No damage. Riyadh and surroundings targeted by 26 drones total on Sunday, all intercepted. March 9: State Dept issued fresh security alert ordering non-emergency staff departure. Americans urged to depart on available commercial flights from Riyadh, Jeddah, or Dhahran. March 9: Saudi defense ministry foiled drone attack on Diplomatic Quarter; no damage or injuries. At least 8 drones intercepted and destroyed near Riyadh and Al-Kharj. March 8-9: State Dept ordered (not merely authorized) departure of non-emergency staff — first such departure order for Saudi Arabia since war began. All routine consular services suspended. Americans advised to shelter in place and avoid embassy/consulate facilities. On March 9, the State Department announced ordered departure (mandatory evacuation) of non-emergency personnel, escalating from authorized departure on March 3. Embassy warns all Americans in Kingdom to shelter in place and avoid embassy/consulate buildings. On March 8-9, the US State Department ordered mandatory departure of non-emergency personnel from Saudi Arabia, citing heightened risks. Saudi Arabia Travel Advisory elevated with language about Iranian drone/missile targeting of American interests. US State Dept issued ordered departure March 8 for non-emergency personnel — first mandatory departure from Saudi Arabia since war began. Saudi forces intercepted drone targeting diplomatic quarter early March 9. All consular services suspended. March 9: US ordered non-emergency staff departure from Saudi Arabia. Saudi MoD thwarted drone attack on Diplomatic Quarter. March 8-9: US State Department ordered mandatory departure of non-emergency personnel from Saudi Arabia. First such order since war began. Travel advisory Level 3. March 9: Ordered departure (upgraded from voluntary). All consular services suspended. Americans advised to shelter in place and avoid Embassy/Consulate Dhahran. On March 8-9, the US State Department ordered non-emergency personnel and families to leave Saudi Arabia — the first such order since the war began. Remaining essential staff under shelter-in-place. US State Department ordered non-emergency staff to leave Saudi Arabia on March 9, citing heightened risks. First such departure order since war began. On March 10, two Iranian drones struck the embassy compound causing a small fire. The embassy was closed for the day. The US State Department had previously ordered non-emergency personnel to leave Saudi Arabia on March 8.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Washington Post reports that the Monday drone strike specifically hit the CIA station within the US Embassy compound in Riyadh, causing structural damage including partial roof collapse. No CIA personnel injured. Saudi Arabia also announced interception of two ballistic missiles in the nearby Al-Kharj area on Wednesday."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defence ministry foiled a drone attack targeting Riyadh's Diplomatic Quarter. Drone intercepted; no damage or civilian casualties reported. Additionally, 13 drones intercepted east of Riyadh and 8 more shot down entering Saudi airspace."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi Defense Ministry reported thwarting a drone attack targeting the Diplomatic Quarter in Riyadh on March 8. The drone was shot down with no material damage or civilian injuries. Separately, 13 drones were intercepted and destroyed east of Riyadh, and 6 more drones were intercepted over the city."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "A drone targeting Riyadh's diplomatic quarter was intercepted and thwarted on Sunday with no material damage or civilian injuries, per Saudi MOD spokesman."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi air defenses foiled a second drone attack targeting the Diplomatic Quarter in Riyadh. The drone was shot down with no material damage or civilian injuries reported. Saudi MoD spokesman confirmed."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defense ministry foiled drone attack targeting the Diplomatic Quarter in Riyadh. Drone intercepted with no material damage or civilian injuries. Three additional drones shot down over Riyadh."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi Defence Ministry reported intercepting a drone aimed at Riyadh's diplomatic quarter on Sunday March 8; no material damage or injuries. A total of 26 drones targeted the capital and surrounding areas, of which 13 were intercepted east of Riyadh."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defence ministry confirmed a drone aimed at Riyadh's diplomatic quarter was intercepted and thwarted on March 8, with no material damage or civilian injuries. Capital and surrounding areas were targeted by 26 drones total on Sunday."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department issued updated security alert March 9 urging Americans to depart. On March 8, non-emergency US government employees ordered to leave due to sustained missile and drone threats targeting American and diplomatic interests."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi defense ministry foiled a drone attack targeting the Diplomatic Quarter. Spokesperson Maj. Gen. Turki Al-Maliki confirmed no material damage or civilian injuries. Separately, Saudi forces intercepted and destroyed at least 8 drones that entered Saudi airspace, including 3 shot down over Riyadh city and several east of Riyadh."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department ORDERED (upgraded from prior March 3 authorization) non-emergency government employees and family members to leave Saudi Arabia. Embassy and Consulate Dhahran suspended routine consular services. Remaining essential staff under modified shelter-in-place. Americans advised to avoid embassy and consulate facilities."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department escalates from authorized to ORDERED departure of non-emergency personnel and family members from Saudi Arabia, citing sustained missile and drone threats. Essential staff under modified shelter-in-place. Embassy and Consulate Dhahran suspend routine consular services. First mandatory evacuation order for Saudi Arabia since war began."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department ordered (upgraded from authorized) non-emergency US government employees and family members to leave Saudi Arabia due to safety risks, the first mandatory departure order for Saudi Arabia since the war began. US Embassy issued updated Security Alert citing heightened risks from armed conflict, terrorism, and missile/drone attacks from Iran and Yemen (Bloomberg, CNBC, US State Dept)."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Defense Ministry shot down drone aimed at Riyadh diplomatic quarter early Sunday. US State Department issued ordered departure on March 8 for non-emergency government employees and families — first mandatory departure order in Saudi Arabia since the war began. Embassy and consular services suspended. Essential staff under modified shelter-in-place."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US government ordered non-emergency employees to leave Saudi Arabia — first such departure order since war began. Embassy cited heightened risks from armed conflict, terrorism, and missile/drone attacks from Yemen and Iran. Saudi MoD also reported thwarting an attempted drone attack on the Diplomatic Quarter with no damage."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department upgraded from voluntary to mandatory ordered departure for non-emergency US government employees and families from Saudi Arabia, citing sustained missile and drone threats. Order covers Riyadh embassy and consulates in Jeddah and Dhahran. First mandatory evacuation order for Saudi Arabia since war began. Travel advisory raised to Level 3."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department issues ordered departure for non-emergency staff and families from Saudi Arabia, citing sustained missile/drone threats. Essential staff under modified shelter-in-place. All routine consular services suspended."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department ordered non-emergency government employees to leave Saudi Arabia, citing heightened risks from armed conflict, terrorism and missile/drone attacks from Iran and Yemen. First such departure order issued for Saudi Arabia since war began."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Two Iranian drones struck the US Embassy compound in Riyadh overnight, sparking a small fire. The embassy was closed for the day on Tuesday. Saudi Defense Ministry confirmed the attack. Saudi Arabia also reported shooting down another drone aimed at the diplomatic quarter."
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
                    },
                    {
                            "name": "Washington Post",
                            "url": "https://www.washingtonpost.com/national-security/2026/03/03/cia-saudi-arabia-drone-attack-iran/"
                    },
                    {
                            "name": "Reuters via TRT World",
                            "url": "https://www.trtworld.com/article/73652619962d/amp"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659548/saudi-arabia/saudi-air-defenses-intercept-drones-targeting-riyadh"
                    },
                    {
                            "name": "Middle East Eye",
                            "url": "https://www.middleeasteye.net/live-blog/live-blog-update/drone-attacks-saudi-arabia-continue-riyadhs-diplomatic-quarter-targeted"
                    },
                    {
                            "name": "France24 / AFP",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/08/saudi-arabia-thwart-attempt-to-attack-diplomatic-quarter-area-in-riyadh-"
                    },
                    {
                            "name": "NBC News",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/live-updates-iran-war-trump-dignified-transfer-us-soldiers-rcna262207"
                    },
                    {
                            "name": "US Embassy Riyadh Security Alert (March 9, 2026)",
                            "url": "https://sa.usembassy.gov/security-alert-u-s-embassy-riyadh-saudi-arabia-march-9-2026-update-1/"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659548"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-08/us-said-to-order-us-diplomats-in-saudi-arabia-to-leave-nyt-says"
                    },
                    {
                            "name": "CNBC",
                            "url": "https://www.cnbc.com/2026/03/09/iran-war-updates-oil-brent-wti-crude-110-gulf-gcc-uae-iraq-saudi-arabia-kurds.html"
                    },
                    {
                            "name": "Reuters via Business Standard",
                            "url": "https://www.business-standard.com/world-news/us-orders-non-essential-diplomats-to-leave-saudi-arabia-amid-iran-war-126030900086_1.html"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-on-iran-day-9-new-strikes-hit-tehran-as-attacks-hit-gulf-nations-uae-president-warns-enemies-1.500467141"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations"
                    },
                    {
                            "name": "6ABC / ABC News",
                            "url": "https://6abc.com/live-updates/iran-live-updates-trump-says-major-combat-operations-have-begun/18660347/entry/18670879/"
                    },
                    {
                            "name": "Times of Israel (liveblog)",
                            "url": "https://www.timesofisrael.com/liveblog_entry/us-said-to-order-diplomats-in-saudi-arabia-to-exit-the-country-nyt/"
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
            "detail": "The US Embassy in Riyadh issued a warning on March 3 of an imminent attack in the eastern Saudi city of Dhahran, home to major energy installations along the Gulf coast. Dhahran is the headquarters of Saudi Aramco and a critical hub for the kingdom's oil industry. The warning came amid escalating Iranian targeting of energy infrastructure across the Gulf. US Embassy Riyadh issued a specific imminent attack warning for Dhahran on March 3, indicating continued elevated threat to eastern Saudi energy infrastructure. March 9: US Consulate Dhahran added to explicit avoidance advisory. All routine consular services suspended. March 9 security alert explicitly warns staff to avoid US Consulate Dhahran building. All routine consular services suspended until further notice. US State Dept updated Saudi Arabia Travel Advisory to Level 3 on March 9, explicitly citing risk of Iranian drone/missile targeting of American interests and armed conflict. US Consulate Dhahran employees instructed to prepare for possible ordered departures. Essential staff advised to avoid consulate. All routine consular services suspended. March 9: Mandatory departure order extended to Dhahran consulate personnel. March 9: US Embassy explicitly warns Americans to avoid US Consulate Dhahran. Ordered departure now covers Dhahran consulate staff. US Consulate Dhahran under modified shelter-in-place as of March 9. Essential employees advised to avoid the consulate. Non-emergency staff ordered to depart.",
            "incidents": [
                    {
                            "date": "2026-03-03",
                            "text": "US Embassy in Riyadh warns of imminent attack in Dhahran; residents advised to shelter in place (Peninsula Qatar live updates)."
                    },
                    {
                            "date": "2026-03-03",
                            "text": "US Embassy Riyadh issues 'Threat of Imminent Missile / UAV Attacks Over Dhahran' security alert"
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US Embassy March 9 security alert explicitly warned Americans to avoid US Consulate Dhahran until further notice, alongside the embassy in Riyadh. All routine consular services suspended at Dhahran consulate."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US Embassy security alert advises remaining essential employees to avoid US Consulate Dhahran. All routine consular services suspended at Consulate Dhahran until further notice."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department Travel Advisory for Saudi Arabia updated to Level 3 (Reconsider Travel) citing risk of Iranian drone and missile targeting of American interests. Commercial flights operating out of Dhahran but with significant cancellations (US State Dept)."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US Consulate Dhahran employees instructed to prepare for possible ordered departures per US Embassy Riyadh security alert. Consulate employees advised to avoid the building. Consular services suspended."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US State Department ordered departure order extended to cover US consulate staff in Dhahran and Jeddah. Personnel instructed to prepare for mandatory departure."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US Embassy Riyadh Security Alert Update specifically advises all Americans to avoid US Consulate Dhahran until further notice. Ordered departure applies to Dhahran consulate staff and families. State Department order covers Riyadh, Jeddah, and Dhahran."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "US Consulate Dhahran placed under modified shelter-in-place; staff advised to avoid the consulate. Part of broader ordered departure directive for Saudi Arabia."
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
                    },
                    {
                            "name": "US Embassy Riyadh Security Alert",
                            "url": "https://sa.usembassy.gov/security-alert-u-s-embassy-riyadh-saudi-arabia-march-9-2026-update-1/"
                    },
                    {
                            "name": "US State Dept Travel Advisory",
                            "url": "https://sa.usembassy.gov/travel-advisory-update-saudi-arabia-travel-advisory-level-3/"
                    },
                    {
                            "name": "Israel National News",
                            "url": "https://www.israelnationalnews.com/news/423602"
                    },
                    {
                            "name": "AzerNEWS",
                            "url": "https://www.azernews.az/region/255446.html"
                    },
                    {
                            "name": "IOL (Reuters)",
                            "url": "https://iol.co.za/news/world/2026-03-09-us-state-department-orders-us-diplomats-to-leave-saudi-arabia-immediately-reports/"
                    }
            ],
            "dateAdded": "2026-03-03"
    },
    {
            "name": "Al-Jawf Region (Drone Interception), Northern Saudi Arabia",
            "lat": 29.817,
            "lng": 40.1,
            "country": "Saudi Arabia",
            "city": "Al-Jawf",
            "severity": "watchlist",
            "icon": "🎯",
            "type": "Drone Intercepted",
            "detail": "The Saudi Ministry of Defence announced that a drone sent into Saudi territory was intercepted and destroyed near the al-Jawf region in the north of the country on March 5. This represents a new vector of Iranian drone attacks targeting northern Saudi Arabia, far from previous strike zones in the Eastern Province and Riyadh area.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "Saudi MOD announced an Iranian drone was intercepted and destroyed near al-Jawf region in northern Saudi Arabia."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "Al-Kharj Governorate (Cruise Missile & Drone Interceptions), Saudi Arabia",
            "lat": 24.15,
            "lng": 47.3,
            "country": "Saudi Arabia",
            "city": "Al-Kharj",
            "severity": "critical",
            "icon": "🎯",
            "type": "Industrial Area — Cruise Missile & Drone Interceptions",
            "detail": "Saudi air defenses intercepted and destroyed 3 cruise missiles and 3 drones outside Al-Kharj governorate, a major industrial center ~80km southeast of Riyadh. Saudi Defense Ministry spokesperson Maj. Gen. Turki Al-Maliki confirmed the interceptions in statements via SPA. No confirmed debris impacts or damage at this location. Additional drone interceptions reported March 6 in Al-Kharj area. On March 6, continued interceptions of cruise missiles and drones in Al-Kharj area. Saudi air defenses reported destroying 4 drones over Riyadh region and a cruise missile east of Al-Kharj. On March 6, Saudi Defense Ministry confirmed intercepting three ballistic missiles targeting a base south of Riyadh and three drones east of Riyadh, confirming continued Iranian targeting of this area. March 6: Saudi MOD confirmed cruise missile intercepted east of al-Kharj and three drones intercepted east of Riyadh region. On March 6, Saudi MOD confirmed intercepting a cruise missile east of al-Kharj and three ballistic missiles targeting a base south of Riyadh overnight, plus three drones east of the Riyadh region. Saudi MOD on Friday confirmed cruise missile intercepted east of al-Kharj and three drones intercepted east of Riyadh. Saudi MoD confirmed intercepting a cruise missile east of al-Kharj on March 6. Saudi MOD confirmed cruise missile and three ballistic missiles intercepted near al-Kharj on March 6. On March 7, third straight day of strike attempts on Al-Kharj. Saudi MOD confirmed intercepts of missiles and a drone east of Riyadh. On March 7 evening, Saudi MOD spokesperson confirmed a ballistic missile launched toward PSAB fell in an uninhabited area within the governorate — the first confirmed ground impact near the base. Earlier, two ballistic missiles and a cruise missile targeting PSAB were intercepted and destroyed. On March 8, a military projectile struck a residential compound in Al-Kharj, killing 2 foreign nationals and injuring 12. IRGC claimed targeting radar systems in the area. On March 8, a military projectile struck a residential compound in Al-Kharj, killing an Indian and a Bangladeshi national, and injuring 12 Bangladeshi residents. IRGC earlier claimed targeting radar systems in the governorate. Saudi Defence Ministry also reported intercepting 33 drones on Sunday. March 8: Saudi MOD intercepted 5 ballistic missiles toward PSAB and continued interceptions in Al-Kharj area. On March 10, Saudi air defenses destroyed 2 drones east of Al-Kharj. On March 10, two additional drones destroyed east of Al Kharj Governorate. On March 10, Saudi MOD confirmed destruction of two drones east of Al Kharj and interception of a ballistic missile targeting the Eastern Region. Drone intercepted east of al-Kharj on March 10. Area remains under sustained Iranian targeting due to proximity to Prince Sultan Air Base.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "3 cruise missiles intercepted and destroyed outside Al-Kharj city; 3 drones intercepted and destroyed east of Al-Kharj governorate (Saudi MoD via SPA)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi Arabia intercepted at least two drone attacks in the Al Kharj Governorate area; three drones intercepted east of Riyadh"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD reported 4 drones intercepted over Riyadh region and 1 cruise missile destroyed east of Al-Kharj governorate on March 6. Earlier 3 ballistic missiles also intercepted targeting PSAB in the governorate."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi Arabia's Defense Ministry said Friday its air defenses intercepted three ballistic missiles targeting a base south of Riyadh (Prince Sultan Air Base area) the night before, and three drones east of Riyadh."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD announced interception of a cruise missile east of al-Kharj governorate and three additional drones east of the Riyadh region on Friday (Al Jazeera)"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD confirmed cruise missile intercepted and destroyed east of al-Kharj governorate; separately intercepted three drones east of the Riyadh region; Saudi MOD also said three ballistic missiles were intercepted targeting a base south of the capital overnight"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD confirmed a cruise missile was intercepted and destroyed east of al-Kharj governorate; separately intercepted three drones east of Riyadh region"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Saudi MOD intercepted a cruise missile east of al-Kharj governorate on Friday. Separately, three ballistic missiles targeting a base south of the capital were intercepted the night before (CNN, Al Jazeera)."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Third consecutive day of attempted strikes on Al-Kharj area. Saudi MOD confirmed interception and destruction of missiles targeting the industrial zone southeast of Riyadh. Also one additional drone intercepted east of Riyadh city."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Ballistic missile and cruise missile targeting Prince Sultan Air Base (Al-Kharj) intercepted. Third consecutive day of attempted strikes on this area."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MoD confirmed interception of a cruise missile east of al-Kharj governorate on Saturday, in addition to the ballistic missile targeting PSAB in the same area."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD announced interception of a cruise missile east of Al-Kharj on Friday evening, plus additional drone interception east of Riyadh on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Continued interceptions east of Al-Kharj; Arab News reports Saudi defenses shot down one drone in Al-Kharj on Friday in addition to five missiles toward PSAB"
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Military projectile struck a residential compound belonging to a maintenance company in Al-Kharj, killing 2 (Indian and Bangladeshi nationals) and injuring 12 Bangladeshi residents. IRGC claimed targeting radar systems in Al-Kharj. Saudi Civil Defense condemned targeting of civilian objects as a violation of international humanitarian law."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi Defence Ministry reported intercepting 33 drones Sunday including attempted attacks on Riyadh diplomatic quarter and Shaybah oil field."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi MOD intercepted and destroyed 5 ballistic missiles launched toward Prince Sultan Air Base in Al-Kharj and additional cruise missiles in the Al-Kharj area on March 8."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD intercepted and destroyed 2 drones east of Al-Kharj Governorate as part of ongoing defensive operations."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi air defence units intercepted and destroyed two drones east of Al Kharj Governorate as part of ongoing defensive operations."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Arabia's Ministry of Defence said air defence systems destroyed two drones east of Al Kharj Governorate and intercepted a ballistic missile targeting the Eastern Region."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Defence Ministry intercepted and destroyed a drone east of al-Kharj governorate on Tuesday. This follows Sunday's projectile strike on a residential compound that killed 2 and injured 12."
                    }
            ],
            "sources": [
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635226/saudi-arabia"
                    },
                    {
                            "name": "Al Arabiya English",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/05/saudi-arabia-intercepts-destroys-three-cruise-missiles-several-drones-"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659460/saudi-arabia/saudi-air-defenses-intercept-3-cruise-missiles-3-drones-near-al-kharj"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/bahrain-reports-damage-but-no-injuries-after-iran-targets-hotels-residential-building/"
                    },
                    {
                            "name": "Khaleej Times",
                            "url": "https://www.khaleejtimes.com/world/gulf/saudi-arabia-intercepts-drones-riyadh-march-6"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659499/saudi-arabia/saudi-intercepts-4-drones-over-riyadh-region-foils-missile-attacks"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/us-israel-iran-war-what-we-know-intl-hnk"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/6/iran-targets-israeli-embassy-in-bahrain-saudi-arabia-intercepts-missile"
                    },
                    {
                            "name": "Euronews",
                            "url": "https://www.euronews.com/2026/03/05/iran-claims-it-hit-us-tanker-as-israel-launches-fresh-strikes-on-tehran"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635545/saudi-arabia"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248449-uae-defenses-destroy-109-drones-9-ballistic-missiles-iran"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659514/saudi-arabia/saudi-intercepts-16-drones-targeting-shaybah-field-missile-toward-prince-sultan-air-base"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635432/saudi-arabia"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248432-saudi-arabia-ballistic-missile-targeting-prince-sultan-base-falls-uninhabited-area"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/07/missile-targeting-saudi-base-falls-in-uninhabited-area-defense-ministry-says"
                    },
                    {
                            "name": "Saudi MOD via SPA / GlobalSecurity",
                            "url": "https://www.globalsecurity.org/wmd/library/news/saudi/2026/saudi-260307-spa06.htm"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659572/saudi-arabia/military-projectile-hits-residential-site-in-al-kharj-two-dead"
                    },
                    {
                            "name": "France24 / AFP",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.pk/node/2635699/saudi-arabia"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/08/two-killed-12-injured-after-projectile-falls-on-residential-location-in-saudi-arabia"
                    },
                    {
                            "name": "Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/2-killed-12-injured-after-projectile-falls-on-saudi-residential-location-civil-defense/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/8/two-killed-in-saudi-arabia-after-projectile-falls-on-residential-building"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/07/saudi-arabia-destroys-drones-missiles-including-2-launched-toward-prince-sultan-air-base"
                    },
                    {
                            "name": "Gulf News (Live Updates)",
                            "url": "https://gulfnews.com/world/mena/usisrael-war-on-iran-day-10-mojtaba-khamenei-named-supreme-leader-gulf-states-face-new-attacks-1.500467987"
                    },
                    {
                            "name": "SANA",
                            "url": "https://sana.sy/en/international/2301591/"
                    },
                    {
                            "name": "Al Jazeera (Day 11 recap)",
                            "url": "https://www.aljazeera.com/news/2026/3/10/iran-war-what-is-happening-on-day-11-of-us-israel-attacks"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "Aramco Shaybah Oil Field (Drone Interceptions), Empty Quarter, Saudi Arabia",
            "lat": 22.5253,
            "lng": 54.1019,
            "country": "Saudi Arabia",
            "city": "Shaybah (Empty Quarter)",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Oil field — drone interception",
            "detail": "Saudi air defenses intercepted and destroyed 16 drones in four waves targeting the strategic Shaybah oil field early Saturday March 7. This is the first attempted attack on Shaybah since the war began Feb 28. All drones were neutralized over the Empty Quarter with no confirmed damage to the facility. On March 7, Saudi MOD confirmed intercepting and destroying 16 drones heading toward Shaybah, the largest single wave targeting the oil field. On March 7, 16 drones were launched in four waves toward Shaybah — the first attack on the field since the war began. All 16 intercepted and destroyed in the Empty Quarter. March 7: Saudi air defenses intercepted 16 drones in four waves targeting Shaybah, the largest single-day drone barrage against this facility. On March 7, Saudi air defenses intercepted and destroyed 16-20 drones in 4-5 waves heading toward the strategic Shaybah field, the first direct attempted attack on this 1 million bpd upstream asset since the war began. On March 7, Saudi MOD reported intercepting 16 drones in four separate waves targeting Shaybah, a significant escalation in targeting of this field. On March 7, Saudi air defenses intercepted 16 drones in four waves targeting Shaybah, the most sustained aerial assault on the field to date. All drones destroyed before reaching the facility. March 7: Saudi MOD intercepted 6 drones heading towards Shaybah. Three separate attempts made despite Pezeshkian's announced halt. Facility under sustained targeting—remains under interception protection. March 7: Six drones intercepted heading towards Shaybah oilfield. Mar 7: Saudi MOD intercepted 6 drones heading toward Shaybah oilfield. Six drones intercepted heading toward Shaybah oilfield on March 7 per Saudi MoD. March 7: Saudi MOD Maj. Gen. Al-Maliki confirmed 16 drones in 4 waves intercepted heading toward Shaybah. March 7: First confirmed targeting of Shaybah in the conflict. Saudi MOD intercepted 16+ drones in multiple waves in the Empty Quarter. Iran attempting to stretch Saudi air defenses across 800km by simultaneously targeting Shaybah and PSAB. Saudi MOD confirmed intercepting six Iranian drones heading toward Shaybah on March 7. March 8: Additional drone interceptions over Shaybah as Saudi air defences continue to engage incoming Iranian UAVs. March 7-8: Up to 22 drones intercepted heading toward Shaybah oilfield over two days. On March 8, a drone heading toward Shaybah was intercepted and destroyed by Saudi air defenses. March 7-8: Massive escalation — 21 drones intercepted Saturday, 17+ Sunday, all destroyed in Empty Quarter. Shaybah remains a primary Iranian target but all attacks intercepted. On March 8, Saudi MoD confirmed 17 drones intercepted and destroyed over Shaybah, the largest single interception event at this location since the war began. Saudi defense ministry confirmed intercepting a drone targeting Shaybah on March 8. Saudi Defence Ministry confirmed on March 8 that one drone targeting Shaybah was intercepted as part of a 33-drone interception wave. March 8: Saudi MoD confirmed one drone targeting Shaybah was intercepted and destroyed. No damage. March 8: Saudi MOD intercepted 21 drones in multiple waves targeting Shaybah in the Empty Quarter. March 9: Saudi MOD reported 33 total drones intercepted across the Kingdom with no damage or casualties. March 9: Another drone heading toward Shaybah intercepted and destroyed in the Empty Quarter per Saudi MoD. March 9: Saudi MoD confirmed destruction of 4 drones targeting Shaybah over Rub al-Khali desert. March 9: Saudi MoD confirmed intercepting several drones targeting Shaybah. March 9: Saudi Arabia intercepted several drones targeting Shaybah. March 9: Saudi forces intercepted 4 drones targeting Shaybah under Mojtaba Khamenei's first wave of attacks as new supreme leader. Saudi forces intercepted four more drones targeting Shaybah on March 9. Saudi MoD also reported destroying 16 Iranian drones entering the kingdom's airspace on Sunday. Saudi Arabia intercepted 4 drones targeting Shaybah on March 9. All interceptions successful per Saudi authorities. Saudi Arabia intercepted several drones targeting Shaybah on March 9. Saudi Foreign Ministry warned it retains full right to take all necessary measures to defend sovereignty. March 10: Saudi air forces intercepted and destroyed a drone over the Empty Quarter heading towards Shaybah. Continued targeting of Saudi energy infrastructure by Iran. 9 drones intercepted heading to Shaybah on March 9–10, marking the third straight day the 14.3-billion-barrel strategic oil field has been targeted. Saudi MOD intercepted 9 drones targeting Shaybah on Monday March 9 and additional drones on Tuesday March 10. Al Jazeera reports sustained Iranian drone swarms targeting the 1 million bpd facility. Al Jazeera reports 'large numbers' of drones have hit the Shaybah oilfield, which produces ~1 million barrels/day. Saudi authorities confirmed intercepting drones but Al Jazeera reporting indicates some impacts reached the facility. Shaybah (1M bbl/day capacity) has come under relentless Iranian drone attacks. Saudi MoD intercepted 9 drones on March 9 and continued interceptions on March 10. All drones destroyed before reaching the facility per Saudi authorities. March 10: Al Jazeera correspondent reports 'large numbers' of drones have hit Shaybah. Production of 1M bbl/day under threat from relentless attacks. Severity upgraded from DEBRIS to HIT based on confirmed drone impacts.",
            "incidents": [
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD confirmed 16 drones in four waves targeting Shaybah oil field intercepted and destroyed over the Empty Quarter. First attack on Shaybah since war began."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD announced 16 drones approaching Shaybah oil field were intercepted and destroyed early Saturday morning (CNN, Saudi MOD via X)"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "16 drones launched in four separate waves toward Shaybah oil field, all intercepted and destroyed in the Empty Quarter by Saudi air defenses. First attempted strike on Shaybah since Feb 28. Saudi Defense Ministry spokesman Maj. Gen. Al-Maliki confirmed in series of X posts."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MoD spokesman Maj. Gen. Turki Al-Maliki confirmed 16 drones heading toward Shaybah field were intercepted and destroyed in four separate waves over the Empty Quarter."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi air defenses intercepted and destroyed 16-20 drones in 4-5 separate waves heading toward Shaybah oil field over the Empty Quarter, announced by MoD spokesperson Maj. Gen. Turki Al-Maliki. No impacts at the field. First direct attempted attack on a key upstream Saudi oil asset since the war began."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD announced interception of 16 drones in multiple waves (4+6+4+2) heading toward Shaybah oil field in the Empty Quarter throughout Saturday. All destroyed before reaching the facility."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD intercepted six drones heading towards Shaybah oilfield on Saturday. The National reports three separate attempts to strike the facility despite Iran President's announced halt to Gulf attacks."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD intercepted and destroyed six drones heading towards the Shaybah oilfield on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD confirmed interception of six drones heading towards the Shaybah oilfield on Saturday."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD intercepted 16 drones in 4 waves targeting Shaybah oil field plus 6 additional drones in a subsequent wave. First confirmed targeting of Shaybah in the current conflict. CGTN reported explosion and fire, but Saudi authorities did not confirm ground impact. Argus Media confirmed 1M bpd production preserved."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Saudi MOD confirmed intercepting six drones heading towards Shaybah oilfield."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defence ministry reported intercepting and destroying drones targeting the Shaybah oil field as part of a continued wave of Iranian aerial attacks."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi MoD intercepted 6 drones heading toward Shaybah oilfield. Previously on March 7, 16 drones heading toward Shaybah were also intercepted."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi air defenses intercepted and destroyed a drone heading toward Shaybah oil field on March 8, per the Saudi Defense Ministry and AP reports."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Massive drone escalation: Saudi defense ministry intercepted 21 drones heading toward Shaybah on Saturday in multiple waves, and 17+ more on Sunday. All drones destroyed in the Empty Quarter before reaching the 1M barrel/day facility. Saudi MOD spokesman confirmed interceptions in successive posts."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi air defenses intercepted and destroyed 17 drones targeting the Shaybah oil field on Saturday. The Saudi Ministry of Defense confirmed the interceptions. No damage was reported to the facility."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defense ministry intercepted and destroyed a drone heading toward the Shaybah field in the Empty Quarter."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi Defence Ministry confirmed intercepting one drone targeting the Shaybah oil field in southeastern Saudi Arabia as part of broader March 8 interception wave of 33 drones."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi defence ministry confirmed one drone targeted Shaybah oil field on Sunday March 8, intercepted and destroyed. No damage or casualties reported."
                    },
                    {
                            "date": "2026-03-08",
                            "text": "Saudi MOD reported intercepting 21 drones in several waves heading toward Shaybah field in the Empty Quarter on Saturday March 8. On Sunday, Saudi Arabia intercepted an additional 33 drones across the Kingdom with no reported damage or casualties."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi defense ministry intercepted and destroyed a drone heading toward the Shaybah oil field in the Empty Quarter, per Al Arabiya reporting the Saudi MoD announcement."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Ministry of Defence confirmed on Monday that air forces intercepted and destroyed four drones heading towards the Shaybah oilfield over the Rub al-Khali desert."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Arabia confirmed intercepting several drones targeting Shaybah oil field on Sunday/Monday. Saudi MoD also reported intercepting drones east of Riyadh and in multiple other locations."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Arabia said it intercepted several drones targeting the Shaybah oil field on Monday. Iranian officials claimed their forces had targeted the facility."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Arabia intercepted four drones targeting Shaybah oil field on March 9. Saudi Foreign Ministry reiterated 'firm condemnation' of Iranian attacks and affirmed right to self-defense."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi air defenses intercept four drones targeting Shaybah oil field. Saudi MoD also reported destroying 16 Iranian drones entering Saudi airspace on Sunday morning."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Arabia intercepted four drones headed for Shaybah oilfield. All strikes intercepted, Saudi authorities confirmed."
                    },
                    {
                            "date": "2026-03-09",
                            "text": "Saudi Arabia intercepted several drones attacking Shaybah oil field on March 9. Saudi Foreign Ministry reiterated firm condemnation of Iranian attacks and warned it retains full right to take all necessary measures to safeguard security."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD confirmed air forces intercepted and destroyed a drone over the Rub al-Khali desert heading towards the Shaybah oilfield on Monday."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD confirmed interception and destruction of a drone heading towards the Shaybah oil field. No damage or casualties reported."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi Defense Ministry reported intercepting and destroying 9 drones in the Empty Quarter heading towards Shaybah oil field, the third consecutive day of drone attacks targeting the strategic facility."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Saudi MOD reported intercepting additional drones heading toward Shaybah on Tuesday, after destroying 9 drones on Monday targeting the 1 million bpd facility. Al Jazeera reports 'large numbers' of drones have targeted the field in recent days."
                    },
                    {
                            "date": "2026-03-10",
                            "text": "Continued drone attacks targeting Shaybah. On Monday, Saudi MoD reported intercepting and destroying 9 drones heading toward the facility in multiple waves. Al Jazeera correspondent described 'relentless attacks in the past couple of days.' Saudi MoD confirms all intercepted with no damage to the facility."
                    }
            ],
            "sources": [
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635545/saudi-arabia"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659514/saudi-arabia/saudi-intercepts-16-drones-targeting-shaybah-field-missile-toward-prince-sultan-air-base"
                    },
                    {
                            "name": "Free Malaysia Today (AFP)",
                            "url": "https://www.freemalaysiatoday.com/category/world/2026/03/07/saudi-arabia-says-intercepted-attacks-at-airbase-oil-field"
                    },
                    {
                            "name": "CNN (Day 7 live)",
                            "url": "https://www.cnn.com/world/live-news/iran-war-us-israel-trump-03-06-26"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248432-saudi-arabia-destroys-21-drones-3-ballistic-missiles-empty-quarter-riyadh-al-kharj"
                    },
                    {
                            "name": "Bloomberg",
                            "url": "https://www.bloomberg.com/news/articles/2026-03-07/saudi-arabia-intercepts-drones-heading-toward-shaybah-oil-field"
                    },
                    {
                            "name": "BSS/AFP",
                            "url": "https://www.bssnews.net/international/366556"
                    },
                    {
                            "name": "SANA",
                            "url": "https://sana.sy/en/international/2300919/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
                    },
                    {
                            "name": "ANI",
                            "url": "https://aninews.in/news/world/middle-east/saudi-air-defences-neutralise-16-drones-targeting-shaybah-oil-field-in-fresh-wave-of-attacks20260307084206/"
                    },
                    {
                            "name": "The National",
                            "url": "https://www.thenationalnews.com/news/mena/2026/03/07/irans-president-says-forces-ordered-to-stop-gulf-attacks-but-authority-to-enforce-halt-unclear/"
                    },
                    {
                            "name": "AP (via ABC News)",
                            "url": "https://abcnews.com/US/wireStory/iranian-attacks-target-gulf-states-us-warns-bombing-130851335"
                    },
                    {
                            "name": "ANI (citing Arab News/Saudi MOD)",
                            "url": "https://aninews.in/news/world/middle-east/dubai-authorities-confirm-minor-incident-successfully-contained-after-debris-falls-from-interception20260307110607/"
                    },
                    {
                            "name": "Asharq Al-Awsat",
                            "url": "https://english.aawsat.com/gulf/5248432-saudi-arabia-ballistic-missile-targeting-prince-sultan-base-falls-uninhabited-area"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659548/saudi-arabia/saudi-air-defenses-intercept-drones-targeting-riyadh"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635645/middle-east"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/06/middleeast/us-israel-iran-war-what-we-know-intl-hnk"
                    },
                    {
                            "name": "AP (via Manila Bulletin)",
                            "url": "https://mb.com.ph/2026/03/08/iranian-drone-damages-desalination-plant-in-bahrain"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635639/saudi-arabia"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/08/saudi-arabia-thwart-attempt-to-attack-diplomatic-quarter-area-in-riyadh-"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/9/iran-war-what-is-happening-on-day-10-of-us-israel-attacks"
                    },
                    {
                            "name": "NPR",
                            "url": "https://www.npr.org/2026/03/09/nx-s1-5742327/us-israel-iran-war-new-supreme-leader"
                    },
                    {
                            "name": "NPR/AP",
                            "url": "https://www.opb.org/article/2026/03/09/iran-attacks-israel-gulf-states-after-naming-new-leader-on-day-10-of-war/"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/uae/us-israel-war-on-iran-day-9-new-strikes-hit-tehran-as-attacks-hit-gulf-nations-uae-president-warns-enemies-1.500467141"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/9/reprehensible-new-wave-of-iranian-missiles-drones-target-gulf-nations"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/mena/usisrael-war-on-iran-day-10-mojtaba-khamenei-named-supreme-leader-gulf-states-face-new-attacks-1.500467987"
                    },
                    {
                            "name": "Alma Research (Daily Report March 9)",
                            "url": "https://israel-alma.org/daily-report-the-second-iran-war-march-9-2026-1800/"
                    },
                    {
                            "name": "Argus Media",
                            "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2794522-airports-in-uae-kuwait-bahrain-targeted-by-drones"
                    },
                    {
                            "name": "Arab News",
                            "url": "https://www.arabnews.com/node/2635841/saudi-arabia"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/10/woman-killed-in-bahrain-as-other-gulf-states-intercept-iranian-missiles"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/amp/News/gulf/2026/03/10/more-attacks-on-shaybah-oil-field-despite-saudi-warnings-to-iran"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Vessel Struck 10nm North of Jubail (IRGC Drone Strike, Persian Gulf off Saudi Arabia)",
            "lat": 27.17,
            "lng": 49.62,
            "country": "Saudi Arabia",
            "city": "Jubail (offshore)",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Drone Strike",
            "detail": "Iranian drones struck a vessel in the Persian Gulf approximately 10 nautical miles north of Jubail, Saudi Arabia. The vessel's crew has mostly evacuated. UKMTO issued a warning regarding the incident.",
            "incidents": [
                    {
                            "date": "2026-03-07",
                            "text": "IRGC drones struck a vessel 10nm north of Saudi port of Jubail. Crew mostly evacuated. UKMTO issued incident warning for the area."
                    }
            ],
            "sources": [
                    {
                            "name": "UKMTO Warning via Liveuamap",
                            "url": "https://iran.liveuamap.com/en/2026/7-march-13-the-united-kingdom-maritime-trade-operations-center"
                    },
                    {
                            "name": "Liveuamap (IRGC drone strike confirmed)",
                            "url": "https://iran.liveuamap.com/en/2026/7-march-16-iranian-drones-hit-another-ship-in-the-persian"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Al-Kharj Residential Compound (Projectile Strike — First Saudi Civilian Deaths)",
            "lat": 24.15,
            "lng": 47.31,
            "country": "Saudi Arabia",
            "city": "Al-Kharj",
            "severity": "critical",
            "icon": "💥",
            "type": "Military Projectile Strike on Residential Area",
            "detail": "A military projectile struck a residential compound belonging to a maintenance and cleaning company in Al-Kharj on Sunday March 8, killing 2 people (one Indian and one Bangladeshi national) and injuring 12 Bangladeshi residents. These are the first reported civilian fatalities in Saudi Arabia since the war began. IRGC earlier claimed targeting radar systems in the Al-Kharj area. Correction: Saudi Civil Defense confirmed both fatalities were Bangladeshi nationals (initially reported as one Indian and one Bangladeshi). 12 injured — 11 Bangladeshi and 1 Indian.",
            "incidents": [
                    {
                            "date": "2026-03-08",
                            "text": "Military projectile struck residential compound in Al-Kharj, killing 2 (Indian and Bangladeshi nationals) and injuring 12 Bangladeshi residents. Saudi Civil Defense confirmed."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/8/two-killed-in-saudi-arabia-after-projectile-falls-on-residential-building"
                    },
                    {
                            "name": "France24 (AFP)",
                            "url": "https://www.france24.com/en/live-news/20260308-kuwait-airport-saudi-arabia-targeted-as-iran-presses-gulf-attacks"
                    },
                    {
                            "name": "Al Arabiya",
                            "url": "https://english.alarabiya.net/News/saudi-arabia/2026/03/08/two-killed-12-injured-after-projectile-falls-on-residential-location-in-saudi-arabia"
                    },
                    {
                            "name": "Gulf News",
                            "url": "https://gulfnews.com/world/gulf/saudi/2-dead-12-hurt-after-projectile-hits-building-in-saudi-arabia-1.500467712"
                    },
                    {
                            "name": "Saudi Gazette",
                            "url": "https://saudigazette.com.sa/article/659572/saudi-arabia/military-projectile-hits-residential-site-in-al-kharj-two-dead"
                    },
                    {
                            "name": "NBC News Live Updates",
                            "url": "https://www.nbcnews.com/world/iran/live-blog/live-updates-iran-president-must-respond-attacks-strikes-hit-rcna262269"
                    }
            ],
            "dateAdded": "2026-03-08"
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
    {
            "name": "Container Ship SAFEEN PRESTIGE (Projectile Strike, Strait of Hormuz off Oman)",
            "lat": 26.35,
            "lng": 56.4,
            "country": "Oman",
            "city": "Strait of Hormuz (2nm North of Oman)",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Projectile Attack",
            "detail": "Malta-flagged container ship Safeen Prestige (AD Ports Group/Safeen Feeders, UAE) struck by unknown projectile at 1109 UTC on March 4 while transiting eastbound in the Strait of Hormuz, 2nm north of Oman. Projectile hit just above the waterline causing engine room fire. Crew abandoned ship; no injuries or environmental damage reported. UKMTO confirmed the incident. Reported as the fourth commercial vessel attack in the region within 24 hours.",
            "incidents": [
                    {
                            "date": "2026-03-04",
                            "text": "Safeen Prestige struck by projectile 2nm north of Oman in Strait of Hormuz at 1109 UTC; engine room fire; crew abandoned ship (Reuters/UKMTO)"
                    }
            ],
            "sources": [
                    {
                            "name": "Reuters (via US News)",
                            "url": "https://www.usnews.com/news/world/articles/2026-03-04/malta-flagged-container-ship-hit-by-projectile-in-hormuz-vessel-abandoned-sources-say"
                    },
                    {
                            "name": "Container News",
                            "url": "https://container-news.com/malta-flagged-container-ship-struck-by-missile-in-strait-of-hormuz/"
                    },
                    {
                            "name": "gCaptain",
                            "url": "https://gcaptain.com/containership-hit-by-projectile-in-strait-of-hormuz-as-maritime-attacks-escalate/"
                    }
            ],
            "dateAdded": "2026-03-04"
    },
    {
            "name": "US Embassy Muscat (Shelter-in-Place), Oman",
            "lat": 23.6139,
            "lng": 58.5922,
            "country": "Oman",
            "city": "Muscat",
            "severity": "watchlist",
            "icon": "🏛️",
            "type": "Embassy Threat / Shelter-in-Place",
            "detail": "The US Embassy in Muscat instructed all staff and American citizens in Oman to shelter in place and find secure locations until further notice, citing 'ongoing activity.' This order came as Iranian strikes continued across the region targeting US diplomatic and military facilities.",
            "incidents": [
                    {
                            "date": "2026-03-04",
                            "text": "US Embassy Muscat ordered shelter-in-place for all Americans citing 'ongoing activity' (Al Jazeera, confirmed by State Department)"
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/4/what-we-know-on-day-five-of-us-israeli-attacks-on-iran"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "OOMCO Fuel Storage Facility (Muscat Area), Oman",
            "lat": 23.582,
            "lng": 58.422,
            "country": "Oman",
            "city": "Muscat",
            "severity": "high",
            "icon": "🛢️",
            "type": "Fuel Storage — Confirmed Damage (Incident)",
            "detail": "Oman Oil Marketing Company (OOMCO) disclosed to the Muscat Securities Exchange on March 4 that one of its fuel storage tanks sustained minor physical damage in an 'incident.' Operations at the affected site were temporarily suspended pending technical inspections. Reported by multiple credible outlets alongside Iranian strike reporting across Oman.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "OOMCO fuel storage tank damaged in 'incident'; minor physical damage confirmed, operations suspended pending safety evaluations (MSX filing March 4)"
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    },
                    {
                            "name": "Muscat Daily",
                            "url": "https://www.muscatdaily.com/2026/03/05/oomco-reports-minor-damage-following-storage-tank-attack/"
                    },
                    {
                            "name": "Oman Observer",
                            "url": "https://www.omanobserver.om/article/1185530/business/markets/a-fuel-tank-was-subject-to-an-incident-oomco"
                    }
            ],
            "dateAdded": "2026-03-05"
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
    {
            "name": "Salvage Tug MUSSAFAH 2 (UAE-flagged, Missile Strike, 18nm off Khasab, Strait of Hormuz)",
            "lat": 26.35,
            "lng": 56.35,
            "country": "International Waters (Strait of Hormuz)",
            "city": "Off Khasab, Oman",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Missile Strike — Fatalities",
            "detail": "On March 6, the UAE-flagged salvage tug MUSSAFAH 2 was struck by two missiles approximately 18nm off Khasab, Oman, while en route to assist the abandoned container ship Safeen Prestige. The IMO confirmed at least 4 seafarers killed and 3 severely injured; some sources report up to 8 crew feared dead. The vessel sank after being struck by two missiles (per Vanguard security firm). 3 Indonesian crew remain missing and presumed dead. One Indonesian survivor was treated for burns at a hospital in Khasab, Oman.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Salvage tug MUSSAFAH 2 struck by two missiles 18nm off Khasab while attempting to assist drifting Safeen Prestige; IMO confirmed 4 seafarers killed, 3 severely injured."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "MUSSAFAH 2 confirmed sunk after missile strike. Indonesian Foreign Ministry confirmed 3 Indonesian crew members missing; 1 Indonesian survivor with burn injuries treated in Khasab, Oman. Security firm Vanguard said tugboat was struck by two missiles while attempting to assist Malta-flagged Safeen Prestige. Vessel had 7 crew (Indonesian, Indian, Filipino nationals); 4 survived."
                    }
            ],
            "sources": [
                    {
                            "name": "Marine Insight",
                            "url": "https://www.marineinsight.com/shipping-news/missile-hits-uae-salvage-tug-assisting-damaged-container-ship-in-strait-of-hormuz-4-seafarers-killed/"
                    },
                    {
                            "name": "Seatrade Maritime",
                            "url": "https://www.seatrade-maritime.com/security/tug-struck-assisting-abandoned-container-ship-in-strait-of-hormuz"
                    },
                    {
                            "name": "Lloyd's List",
                            "url": "https://www.lloydslist.com/LL1156545/Tug-hit-by-missile-while-assisting-stricken-boxship"
                    },
                    {
                            "name": "Wikipedia — 2026 Strait of Hormuz crisis",
                            "url": "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis"
                    },
                    {
                            "name": "Times of Israel / AFP",
                            "url": "https://www.timesofisrael.com/uae-tugboat-hit-by-explosion-sinks-in-strait-of-hormuz-3-indonesian-crew-missing/"
                    },
                    {
                            "name": "ANTARA News (Indonesian state news agency)",
                            "url": "https://en.antaranews.com/news/407583/three-indonesians-missing-after-tugboat-explodes-in-hormuz-strait"
                    },
                    {
                            "name": "Baird Maritime",
                            "url": "https://www.bairdmaritime.com/security/incidents/three-missing-after-tug-hit-by-explosion-sinks-in-strait-of-hormuz"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Oil Tanker PRIMA (Malta-flagged, IRGC Drone Strike, Strait of Hormuz)",
            "lat": 26.55,
            "lng": 56.3,
            "country": "International Waters (Strait of Hormuz)",
            "city": "Strait of Hormuz",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Maritime IRGC Drone Strike",
            "detail": "On March 7, the IRGC announced it struck the Malta-flagged oil tanker PRIMA with a kamikaze drone after it ignored repeated IRGC Navy warnings about the transit ban through the Strait of Hormuz. The IRGC stated the strait has been under its control for eight consecutive days. No casualty information available.",
            "incidents": [
                    {
                            "date": "2026-03-07",
                            "text": "IRGC kamikaze drone struck oil tanker PRIMA after vessel ignored transit ban warnings in Strait of Hormuz"
                    }
            ],
            "sources": [
                    {
                            "name": "IranWire",
                            "url": "https://iranwire.com/en/news/150043-irgc-claims-drone-strike-on-oil-tanker-prima-in-strait-of-hormuz/"
                    },
                    {
                            "name": "CGTN",
                            "url": "https://news.cgtn.com/news/2026-03-07/news-1LjLu2ro9uE/p.html"
                    },
                    {
                            "name": "Tasnim News Agency",
                            "url": "https://www.tasnimnews.ir/en/news/2026/03/07/3533783/violating-tanker-struck-at-hormuz-strait"
                    },
                    {
                            "name": "Türkiye Today",
                            "url": "https://www.turkiyetoday.com/region/iran-says-malta-flagged-tanker-struck-near-hormuz-3215773"
                    }
            ],
            "dateAdded": "2026-03-07"
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
            "severity": "critical",
            "icon": "🎯",
            "type": "US/Jordanian Air Base — Targeted, Intercepted",
            "detail": "Key US air power hub in Jordan targeted repeatedly by Iranian missiles. Jordan's armed forces reported intercepting 49 drones and ballistic missiles since Feb 28. The US deployed dozens of attack aircraft and THAAD systems here prior to the strikes. Iranian media claimed the base as an intended target. All attacks on the base reported intercepted by Jordanian forces, though a missile reportedly fell on Al-Hashemi Street in Irbid. Jordan reported five injured and homes damaged across the kingdom. Jordan has now intercepted 49 drones and 13 ballistic missiles. Iranian media identified Muwaffaq al-Salti as an intended target. Fragments caused localized property damage. Jordan confirmed intercepting 13 ballistic missiles and 49 drones. German troops in Jordan were also reportedly shelled by Iran. German military confirmed the multinational base at Al-Azraq was targeted by Iran over the weekend. US Embassy in Amman fully evacuated March 3 due to threats. Non-emergency US personnel in Jordan ordered to depart March 4. Stars and Stripes confirms US has deployed dozens of attack aircraft to the base, making it a key air power hub. Non-emergency US personnel ordered to depart Jordan. CNN satellite analysis confirms THAAD AN/TPY-2 radar was struck and apparently destroyed (image dated March 2). Iran assessed to be deliberately targeting US-made air defense radars across the Arabian Peninsula to degrade missile/drone interception capabilities. Buildings housing similar radar systems also hit at two UAE locations per CNN, though equipment status unclear. CNN satellite imagery investigation (March 5) confirmed a THAAD AN/TPY-2 radar was struck and damaged at this base, showing debris surrounding a blackened radar unit in March 2 post-strike imagery. Iran appears to be systematically targeting US air defense radars across the region. CNN satellite imagery published March 6 confirms the AN/TPY-2 THAAD radar (~$500M) at the base was struck and appears destroyed. Two large craters visible near the blackened radar installation, indicating multiple strike attempts. March 7: IRGC 23rd wave claimed targeting al-Azraq base in Jordan. March 7: Jordanian MOD press conference confirmed 119 projectiles detected total (108 intercepted, 11 evaded), 73 debris incidents in 8 governorates with property damage only. CNN satellite imagery analysis confirmed the AN/TPY-2 THAAD radar at the base appears severely damaged or destroyed, with multiple craters visible. Munitions specialist called it 'an operationally significant event.' A missile was also intercepted above Aqaba on March 7. Jordan has intercepted 49 drones and ballistic missiles total.",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Stars and Stripes reports US has sent 'dozens of attack aircraft' to Muwaffaq Salti, making it a key hub for US air power; US Embassy Amman ordered departure of non-emergency personnel; Jordan ended temporary airspace closure Wednesday (Stars and Stripes)"
                    },
                    {
                            "date": "2026-03-05",
                            "text": "CNN satellite imagery analysis (published March 5) confirms THAAD missile defense radar at the base was directly struck and apparently destroyed; March 2 satellite image shows debris field surrounding blackened AN/TPY-2 radar system"
                    },
                    {
                            "date": "2026-03-06",
                            "text": "CNN satellite imagery confirms AN/TPY-2 THAAD radar at the base was struck and likely destroyed; two large craters visible near installation with debris and burn marks"
                    },
                    {
                            "date": "2026-03-07",
                            "text": "IRGC announced 23rd wave of Operation True Promise 4 claiming strikes on al-Azraq base in Jordan as part of combined drone and missile attack on regional US facilities."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Jordanian Armed Forces press conference: 119 total missiles/drones detected since conflict began, 108 intercepted (90.8% rate), 11 evaded defenses. 73 falling-debris incidents recorded across 8 governorates including Amman, Zarqa, Madaba, Irbid, and Aqaba. Property damage only, no loss of life from debris."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "Continued targeting; IRGC attacks on Jordanian-hosted US assets ongoing. Satellite imagery (CNN) confirmed THAAD radar at the base was severely damaged or destroyed in earlier strikes, with multiple craters visible near the AN/TPY-2 radar system."
                    },
                    {
                            "date": "2026-03-07",
                            "text": "A missile was intercepted above the Jordanian city of Aqaba. Jordan reported intercepting 49 drones and ballistic missiles that entered its airspace during the conflict."
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
                    },
                    {
                            "name": "Stars and Stripes",
                            "url": "https://www.stripes.com/theaters/middle_east/2026-03-01/bases-damaged-iran-attacks-20916010.html"
                    },
                    {
                            "name": "CNN",
                            "url": "https://edition.cnn.com/world/live-news/iran-war-us-israel-trump-03-05-26"
                    },
                    {
                            "name": "CNN",
                            "url": "https://www.cnn.com/2026/03/05/middleeast/radar-bases-us-missile-defense-iran-war-intl-invs"
                    },
                    {
                            "name": "Al Mayadeen English",
                            "url": "https://english.almayadeen.net/news/politics/iranian-strikes-damage-us-missile-defense-radars-in-jordan"
                    },
                    {
                            "name": "Tribune India (ANI)",
                            "url": "https://www.tribuneindia.com/news/world/flawless-execution-irgc-launches-23rd-wave-of-strikes-against-us-bases-and-occupied-territories/"
                    },
                    {
                            "name": "Anadolu Agency",
                            "url": "https://www.aa.com.tr/en/middle-east/jordan-reports-73-falling-objects-amid-iran-us-israel-escalation/3844502"
                    },
                    {
                            "name": "World Today Journal",
                            "url": "https://www.world-today-journal.com/iran-attacks-jordan-119-missiles-drones-intercepted-by-jordanian-armed-forces/"
                    },
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/7/iranian-missiles-intercepted-over-saudi-jordan-drones-launched-at-qatar"
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
            "detail": "US-Israeli strikes targeted the Jurf al-Sakhar base housing Popular Mobilization Forces and Kataib Hezbollah. Iraqi state media and PMF confirmed two fighters killed and five wounded. Kataib Hezbollah warned it would 'soon begin attacking American bases in response.' Additional airstrike on March 3 caused material damage (AFP). Total Iraqi militant casualties across all sites now exceed 10 killed since Feb 28. March 4: Another strike confirmed at the base; Kataib Hezbollah source says material damage only. Total fighter deaths across Iraq now exceeds 10 since Feb 28. More than 10 Kataib Hezbollah fighters killed across Iraq since Feb 28 per AFP. Tuesday's strike at Jurf al-Nasr caused only material damage per a faction source. March 4: Another strike on base caused material damage. Over 10 pro-Iran militia fighters killed across Iraq since Feb 28 (AFP).",
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
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Another airstrike hit the Jurf al-Nasr base housing Kataib Hezbollah on Tuesday; a source from the group said it caused only material damage (AFP)"
                    },
                    {
                            "date": "2026-03-04",
                            "text": "Additional airstrike on Jurf al-Nasr base caused material damage only (Kataeb Hezbollah source to AFP). Over 10 fighters from mostly Kataeb Hezbollah killed across Iraq since conflict began."
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
                    },
                    {
                            "name": "Manila Times / AFP",
                            "url": "https://www.manilatimes.net/2026/03/04/world/air-strike-hits-iraq-base-housing-pro-iran-group-faction-source/2292625"
                    }
            ],
            "dateAdded": "2026-03-04"
    },
    {
            "name": "Oil Tanker Struck at Khor al-Zubair Port, Basra, Iraq (Boat Attack)",
            "lat": 30.19,
            "lng": 47.95,
            "country": "Iraq",
            "city": "Basra",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Boat Attack",
            "detail": "A boat struck a Bahamas-flagged oil tanker at the Iraqi port of Khor al-Zubair on March 5, causing damage and an oil spill. An Iraqi security source confirmed the incident to Al Jazeera. This represents a widening of maritime attacks into Iraqi port waters, a major oil export corridor.",
            "incidents": [
                    {
                            "date": "2026-03-05",
                            "text": "A boat struck a Bahamas-flagged oil tanker at Khor al-Zubair port, Iraq, causing structural damage and an oil spill. No casualties reported."
                    }
            ],
            "sources": [
                    {
                            "name": "Al Jazeera",
                            "url": "https://www.aljazeera.com/news/2026/3/5/drone-targets-us-base-in-iraq-as-iran-attacks-hit-region-amid-us-israel-war"
                    }
            ],
            "dateAdded": "2026-03-05"
    },
    {
            "name": "Halliburton/KBR Compound (Drone Attack Fire), Basra, Iraq",
            "lat": 30.5085,
            "lng": 47.7834,
            "country": "Iraq",
            "city": "Basra",
            "severity": "critical",
            "icon": "🔥",
            "type": "Oil company compound drone strike",
            "detail": "Fire broke out in offices and warehouses belonging to US firms Halliburton and KBR after a drone attack in Basra targeted a compound housing employees of foreign oil companies on March 6. The compound is in a separate location from the Khor al-Zubair port oil tanker strike already tracked. Additional drone attacks struck the broader Burjesia energy corridor on March 6. Reports indicate foreign oil company personnel evacuated the area.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Drone attack caused fire at Halliburton and KBR offices and warehouses in Basra compound housing foreign oil company employees."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Broader Burjesia area saw second round of drone attacks on same day. Two drones intercepted over complex but third penetrated defenses. Foreign oil company staff reportedly evacuated compound under cover of darkness."
                    }
            ],
            "sources": [
                    {
                            "name": "Yahoo News / CNN",
                            "url": "https://www.yahoo.com/news/articles/erbil-hotel-hit-drone-attack-033618727.html"
                    },
                    {
                            "name": "Wikipedia - 2026 Iran War",
                            "url": "https://en.wikipedia.org/wiki/2026_Iran_war"
                    },
                    {
                            "name": "Jerusalem Post (citing Reuters)",
                            "url": "https://www.jpost.com/middle-east/iran-news/article-889123"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Baker Hughes / Burjesia Energy City (Drone Strike), Zubair, Basra, Iraq",
            "lat": 30.383,
            "lng": 47.717,
            "country": "Iraq",
            "city": "Basra",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Energy Infrastructure Strike",
            "detail": "A drone struck the Baker Hughes Energy City complex in the Burjesia area of Zubair district, west of Basra, on March 6. Two drones were shot down over the facility but a third penetrated defenses and hit the site. The facility is a specialized hub for solar energy, gas processing, and oil pipeline technology. No casualties reported but material damage is being assessed. This was the second strike on the Burjesia complex on the same day.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "First drone attack on Burjesia oil complex struck Baker Hughes Energy City facility. Separate from Halliburton/KBR compound fire nearby."
                    },
                    {
                            "date": "2026-03-06",
                            "text": "Second drone attack: two drones intercepted over Burjesia complex, third penetrated defenses and struck the site. No casualties; damage under assessment."
                    }
            ],
            "sources": [
                    {
                            "name": "AFP via BSS/Free Malaysia Today",
                            "url": "https://www.freemalaysiatoday.com/category/world/2026/03/07/drones-hit-oil-sites-airports-in-iraq"
                    },
                    {
                            "name": "Iraqi News",
                            "url": "https://www.iraqinews.com/iraq/drone-strikes-target-u-s-energy-firm-and-international-airport-in-basra/"
                    },
                    {
                            "name": "FDD Long War Journal",
                            "url": "https://www.longwarjournal.org/archives/2026/03/iran-and-proxy-militias-strike-energy-infrastructure-us-bases-and-gulf-capitals-on-march-6.php"
                    },
                    {
                            "name": "Times of Israel (citing AFP)",
                            "url": "https://www.timesofisrael.com/liveblog_entry/drones-hit-oil-fields-airport-in-iraqs-basra-security-official-to-afp/"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Basra International Airport (Drone Strike on Cargo Terminal), Iraq",
            "lat": 30.5491,
            "lng": 47.6621,
            "country": "Iraq",
            "city": "Basra",
            "severity": "critical",
            "icon": "✈️",
            "type": "Airport Strike",
            "detail": "A drone crashed into the cargo terminal at Basra International Airport on March 6. The airport houses a military section which was also targeted. This was part of a broader pattern of drone strikes on Basra infrastructure including oil facilities on the same day.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Drone crashed into cargo terminal at Basra International Airport. Part of coordinated drone attacks on Basra infrastructure."
                    }
            ],
            "sources": [
                    {
                            "name": "AFP via Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/drones-hit-oil-fields-airport-in-iraqs-basra-security-official-to-afp/"
                    },
                    {
                            "name": "AFP via BSS",
                            "url": "https://www.bssnews.net/international/366535"
                    },
                    {
                            "name": "FDD Long War Journal",
                            "url": "https://www.longwarjournal.org/archives/2026/03/iran-and-proxy-militias-strike-energy-infrastructure-us-bases-and-gulf-capitals-on-march-6.php"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Rumaila Oil Field (Drone Strike), Basra, Iraq",
            "lat": 30.45,
            "lng": 47.33,
            "country": "Iraq",
            "city": "Basra",
            "severity": "critical",
            "icon": "🛢️",
            "type": "Oil Field Strike",
            "detail": "A drone struck the Rumaila oil field on March 6, one of Iraq's largest oil-producing sites operated by BP and Iraqi state oil agencies. The strike was part of a coordinated series of attacks by Iranian-backed militias on critical energy infrastructure in Basra province.",
            "incidents": [
                    {
                            "date": "2026-03-06",
                            "text": "Drone struck Rumaila oil field where BP operates. Part of coordinated militia drone attacks on Basra energy infrastructure."
                    }
            ],
            "sources": [
                    {
                            "name": "AFP via Times of Israel",
                            "url": "https://www.timesofisrael.com/liveblog_entry/drones-hit-oil-fields-airport-in-iraqs-basra-security-official-to-afp/"
                    },
                    {
                            "name": "AFP via New Arab",
                            "url": "https://www.newarab.com/news/drones-hit-oil-sites-target-militants-iraq"
                    },
                    {
                            "name": "FDD Long War Journal",
                            "url": "https://www.longwarjournal.org/archives/2026/03/iran-and-proxy-militias-strike-energy-infrastructure-us-bases-and-gulf-capitals-on-march-6.php"
                    }
            ],
            "dateAdded": "2026-03-07"
    },

    // ═══════════════════════════════════════════════════════════
    // International Waters (Persian Gulf)
    // ═══════════════════════════════════════════════════════════
    {
            "name": "Oil Tanker LOUISE P (Marshall Islands-flagged, IRGC Drone Strike, Central Persian Gulf)",
            "lat": 27.5,
            "lng": 51.5,
            "country": "International Waters (Persian Gulf)",
            "city": "Central Persian Gulf",
            "severity": "critical",
            "icon": "⚓",
            "type": "Maritime Drone Strike",
            "detail": "On March 7, the IRGC announced its naval forces conducted a kamikaze drone strike on the Marshall Islands-flagged oil tanker LOUISE P in the central Persian Gulf. The IRGC claimed the vessel was 'one of the assets of the terrorist America' and a legitimate target.",
            "incidents": [
                    {
                            "date": "2026-03-07",
                            "text": "IRGC suicide drone struck Marshall Islands-flagged oil tanker LOUISE P in central Persian Gulf; IRGC claimed it was a US-linked asset."
                    }
            ],
            "sources": [
                    {
                            "name": "IRGC Claims (via Alexa.ng)",
                            "url": "https://www.alexa.ng/2026/03/irgc-claims-drone-strikes-on-us-linked.html"
                    },
                    {
                            "name": "Caspian Post",
                            "url": "https://caspianpost.com/iran/iranian-drone-hits-oil-tanker-louise-p-in-persian-gulf"
                    },
                    {
                            "name": "Wikipedia — 2026 Strait of Hormuz crisis",
                            "url": "https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis"
                    }
            ],
            "dateAdded": "2026-03-07"
    },
    {
            "name": "Bulk Carrier Near-Miss (Persian Gulf off UAE coast, March 10)",
            "lat": 25.4,
            "lng": 54.2,
            "country": "International Waters (Persian Gulf)",
            "city": "Off UAE Coast",
            "severity": "watchlist",
            "icon": "⚓",
            "type": "Maritime Near-Miss",
            "detail": "A bulk carrier likely came under attack in the Persian Gulf on Tuesday off the coast of the UAE. The captain reported a splash and a loud bang nearby, according to the British military's UKMTO monitoring center. No damage or casualties confirmed. This adds to the ongoing pattern of maritime threats as ~1,000 vessels with 20,000 seafarers remain unable to transit the Strait of Hormuz.",
            "incidents": [
                    {
                            "date": "2026-03-10",
                            "text": "Bulk carrier captain reported splash and loud bang nearby off UAE coast. Reported by UKMTO via British military. No confirmed damage."
                    }
            ],
            "sources": [
                    {
                            "name": "AP (via Military.com)",
                            "url": "https://www.military.com/daily-news/2026/03/10/iran-launches-new-attacks-targeting-israel-and-gulf-countries-it-seeks-ramp-pressure-us.html"
                    }
            ],
            "dateAdded": "2026-03-10"
    },

];
