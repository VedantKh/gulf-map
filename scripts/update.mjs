// ═══════════════════════════════════════════════════════════════
// Gulf Map — Automated Update Script
// Calls Claude Opus 4.6 with web search to find new strike data,
// validates, deduplicates, merges into data.js, and outputs
// GitHub Actions metadata.
// ═══════════════════════════════════════════════════════════════

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, appendFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = join(__dirname, '..', 'data.js');
const DRY_RUN = process.env.DRY_RUN === 'true';

// ═══════════════════════════════════════════════════════════════
// RESEARCH RUBRIC — Severity Classification
// ═══════════════════════════════════════════════════════════════
const RESEARCH_RUBRIC = `
## SEVERITY CLASSIFICATION RUBRIC

You MUST classify every location into exactly ONE of these three severity levels.
Apply the HIGHEST applicable level. When in doubt, use the lower level.

### HIT (internal key: "critical") — Confirmed strike/impact
Assign HIT when ALL of these are true:
- A projectile (missile, drone, rocket) made PHYSICAL CONTACT with a structure, person, or ground at this location
- The impact is confirmed by at least ONE credible source (government statement, major wire service, verified video/photo)
- Examples: missile struck a runway, drone hit a building, warhead detonated at a base, debris from an intercepted projectile killed/injured someone at this specific location

### FALLING DEBRIS (internal key: "high") — Confirmed debris, minor damage from interceptions
Assign FALLING DEBRIS when:
- Interceptor debris (from THAAD, Patriot, Iron Dome, etc.) fell at this location causing damage or injuries
- OR a projectile was intercepted directly overhead and wreckage confirmed on the ground here
- OR the location is within a confirmed active strike zone with verified collateral damage
- Must have at least one source confirming debris/damage at this specific location
- Examples: shrapnel from intercept hit a car, missile casing fell on a residential area, secondary fire from debris

### WATCHLIST (internal key: "watchlist") — Credible threat, near-miss, elevated alert
Assign WATCHLIST when:
- The location is a high-value target that has been explicitly threatened or named by a belligerent
- OR interceptions occurred nearby but no confirmed debris/damage AT this specific location
- OR the location is on elevated security alert due to the conflict
- OR it was previously attacked in a related conflict and conditions suggest re-targeting
- Examples: oil facility on high alert, military base with no confirmed impacts, embassy issuing security warnings

### RULES
- Never DOWNGRADE: if a location is already HIT, it stays HIT even if no new strikes occur
- Never UPGRADE without evidence: don't escalate WATCHLIST to HIT without a confirmed strike source
- One source minimum: every new location or severity change requires at least 1 credible source URL
- Credible sources: Reuters, AP, AFP, Al Jazeera, BBC, CNN, Al Arabiya, Gulf News, WAM, CENTCOM, Stars and Stripes, France24, Anadolu Agency, government official statements
- Reject: social media posts without corroboration, anonymous Telegram channels, opinion pieces, speculation
`;

// ═══════════════════════════════════════════════════════════════
// Gulf bounding box for coordinate validation
// ═══════════════════════════════════════════════════════════════
const BOUNDS = { latMin: 12, latMax: 33, lngMin: 36, lngMax: 62 };

// ═══════════════════════════════════════════════════════════════
// Parse existing data.js
// ═══════════════════════════════════════════════════════════════
function parseDataFile() {
    const raw = readFileSync(DATA_PATH, 'utf-8');

    // Extract MAP_META and LOCATIONS using Function constructor
    const fn = new Function(`
        ${raw}
        return { MAP_META, LOCATIONS };
    `);
    return fn();
}

// ═══════════════════════════════════════════════════════════════
// Build summary of existing data for the prompt
// ═══════════════════════════════════════════════════════════════
function buildExistingSummary(locations) {
    const byCountry = {};
    for (const loc of locations) {
        if (!byCountry[loc.country]) byCountry[loc.country] = [];
        const latestIncident = loc.incidents?.length
            ? loc.incidents[loc.incidents.length - 1].date
            : 'none';
        byCountry[loc.country].push(
            `  - ${loc.name} [${loc.severity}] (latest incident: ${latestIncident})`
        );
    }
    let summary = '';
    for (const [country, locs] of Object.entries(byCountry)) {
        summary += `${country} (${locs.length} locations):\n${locs.join('\n')}\n\n`;
    }
    return summary;
}

// ═══════════════════════════════════════════════════════════════
// Build the Claude prompt
// ═══════════════════════════════════════════════════════════════
function buildPrompt(meta, locations) {
    const today = new Date().toISOString().split('T')[0];
    const existingSummary = buildExistingSummary(locations);

    return `You are a conflict intelligence analyst updating a live map of Iranian strikes and threats across the Gulf region.

TODAY'S DATE: ${today}
MAP LAST UPDATED: ${meta.lastUpdated}
CURRENT CASUALTY COUNT: ${meta.casualties.killed} killed, ${meta.casualties.injured} injured

${RESEARCH_RUBRIC}

## EXISTING LOCATIONS ON THE MAP
${existingSummary}

## YOUR TASK

Search for NEW verified reports of Iranian strikes, drone/missile attacks, debris impacts, or significant threat escalations in the Gulf region (UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Oman, Iraq, and surrounding areas) since ${meta.lastUpdated}.

For each finding, determine if it is:
1. A NEW location not already on the map
2. A NEW incident at an EXISTING location (add to its incidents array)
3. A casualty update (killed/injured count increase)

## OUTPUT FORMAT

Respond with ONLY valid JSON (no markdown, no explanation) in this exact schema:

{
  "hasNewData": boolean,
  "searchSummary": "Brief description of what you searched for and found",
  "newLocations": [
    {
      "name": "Location Name",
      "lat": 25.0000,
      "lng": 55.0000,
      "country": "Country Name",
      "city": "City Name",
      "severity": "critical|high|watchlist",
      "icon": "emoji",
      "type": "Short type description",
      "detail": "2-3 sentence description of what happened here",
      "incidents": [
        { "date": "YYYY-MM-DD", "text": "What happened" }
      ],
      "sources": [
        { "name": "Source Name", "url": "https://..." }
      ],
      "dateAdded": "${today}"
    }
  ],
  "updatedLocations": [
    {
      "name": "Exact existing location name",
      "newIncidents": [
        { "date": "YYYY-MM-DD", "text": "What happened" }
      ],
      "newSources": [
        { "name": "Source Name", "url": "https://..." }
      ],
      "severityChange": "critical|high|watchlist|null",
      "detailAppend": "Additional detail text to append, or null"
    }
  ],
  "casualtyUpdate": {
    "killed": ${meta.casualties.killed},
    "injured": ${meta.casualties.injured},
    "source": "Source for updated numbers or null"
  },
  "metaUpdates": {
    "summary": "Updated summary text or null",
    "totalBarrage": "Updated barrage numbers or null",
    "intercepted": "Updated interception numbers or null"
  }
}

If you find NO new verified information, return:
{ "hasNewData": false, "searchSummary": "Searched for... No new verified reports found.", "newLocations": [], "updatedLocations": [], "casualtyUpdate": { "killed": ${meta.casualties.killed}, "injured": ${meta.casualties.injured}, "source": null }, "metaUpdates": { "summary": null, "totalBarrage": null, "intercepted": null } }

CRITICAL RULES:
- Only include VERIFIED reports from credible sources
- Every new location MUST have at least 1 source with a working URL
- Coordinates must be accurate (use known coordinates for named locations)
- Do NOT re-report incidents already listed above
- Do NOT speculate or infer — only report what sources confirm
- Severity must follow the rubric exactly
- Icon choices: 🎯 military, ✈️ airport, ⚓ port, 💥 strike/debris, 🔥 fire, 🛢️ oil, ⚡ infrastructure, 🏛️ government, 🛂 border
`;
}

// ═══════════════════════════════════════════════════════════════
// Call Claude API with web search
// ═══════════════════════════════════════════════════════════════
async function callClaude(prompt) {
    const client = new Anthropic();

    const response = await client.messages.create({
        model: 'claude-opus-4-6',
        max_tokens: 16000,
        thinking: { type: 'adaptive' },
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{ role: 'user', content: prompt }]
    });

    // The response may require multiple turns if Claude uses web search
    // Handle the agentic loop for server-side tools
    let currentResponse = response;
    let messages = [{ role: 'user', content: prompt }];

    while (currentResponse.stop_reason === 'tool_use' || currentResponse.stop_reason === 'pause_turn') {
        messages.push({ role: 'assistant', content: currentResponse.content });

        // For server-side tools (web_search), we just send the response back
        // The API handles tool execution server-side
        messages.push({ role: 'user', content: [{ type: 'text', text: 'Continue.' }] });

        currentResponse = await client.messages.create({
            model: 'claude-opus-4-6',
            max_tokens: 16000,
            thinking: { type: 'adaptive' },
            tools: [{ type: 'web_search_20250305', name: 'web_search' }],
            messages
        });
    }

    // Extract text from the final response
    const textBlocks = currentResponse.content.filter(b => b.type === 'text');
    const fullText = textBlocks.map(b => b.text).join('\n');

    return fullText;
}

// ═══════════════════════════════════════════════════════════════
// Validate a location object
// ═══════════════════════════════════════════════════════════════
function validateLocation(loc) {
    const errors = [];

    if (!loc.name || typeof loc.name !== 'string') errors.push('missing name');
    if (typeof loc.lat !== 'number' || loc.lat < BOUNDS.latMin || loc.lat > BOUNDS.latMax)
        errors.push(`lat ${loc.lat} out of bounds [${BOUNDS.latMin}-${BOUNDS.latMax}]`);
    if (typeof loc.lng !== 'number' || loc.lng < BOUNDS.lngMin || loc.lng > BOUNDS.lngMax)
        errors.push(`lng ${loc.lng} out of bounds [${BOUNDS.lngMin}-${BOUNDS.lngMax}]`);
    if (!['critical', 'high', 'watchlist'].includes(loc.severity))
        errors.push(`invalid severity: ${loc.severity}`);
    if (!loc.sources || loc.sources.length === 0)
        errors.push('no sources');
    if (loc.sources) {
        for (const s of loc.sources) {
            if (!s.url || !s.url.startsWith('http')) errors.push(`invalid source URL: ${s.url}`);
        }
    }
    if (!loc.incidents || loc.incidents.length === 0)
        errors.push('no incidents');
    if (loc.incidents) {
        for (const inc of loc.incidents) {
            if (!inc.date || !/^\d{4}-\d{2}-\d{2}$/.test(inc.date))
                errors.push(`invalid date: ${inc.date}`);
        }
    }

    return errors;
}

// ═══════════════════════════════════════════════════════════════
// Deduplication: check if a new location matches an existing one
// ═══════════════════════════════════════════════════════════════
function isDuplicate(newLoc, existingLocations) {
    for (const existing of existingLocations) {
        // Name match (case-insensitive, fuzzy)
        const nameA = newLoc.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const nameB = existing.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (nameA === nameB || nameA.includes(nameB) || nameB.includes(nameA)) return existing.name;

        // Proximity match (<0.5 km using Haversine approximation)
        const dlat = (newLoc.lat - existing.lat) * 111;
        const dlng = (newLoc.lng - existing.lng) * 111 * Math.cos(newLoc.lat * Math.PI / 180);
        const dist = Math.sqrt(dlat * dlat + dlng * dlng);
        if (dist < 0.5) return existing.name;
    }
    return null;
}

// ═══════════════════════════════════════════════════════════════
// Dedup incidents: check if an incident already exists
// ═══════════════════════════════════════════════════════════════
function isIncidentDuplicate(newInc, existingIncidents) {
    for (const inc of existingIncidents) {
        if (inc.date === newInc.date) {
            const textA = newInc.text.toLowerCase().replace(/[^a-z0-9]/g, '');
            const textB = inc.text.toLowerCase().replace(/[^a-z0-9]/g, '');
            // If same date and texts are >60% similar (substring match), it's a dupe
            if (textA.includes(textB.substring(0, 40)) || textB.includes(textA.substring(0, 40)))
                return true;
        }
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════
// Severity ratchet: only allow escalation
// ═══════════════════════════════════════════════════════════════
const SEV_ORDER = { watchlist: 0, high: 1, critical: 2 };

function ratchetSeverity(current, proposed) {
    if (SEV_ORDER[proposed] > SEV_ORDER[current]) return proposed;
    return current;
}

// ═══════════════════════════════════════════════════════════════
// Regenerate data.js from objects
// ═══════════════════════════════════════════════════════════════
function generateDataJS(meta, locations) {
    const header = `// ═══════════════════════════════════════════════════════════════
// Gulf Region — Iranian Strikes & Threats — Data
// Sources: UAE MOD/WAM, CENTCOM, Reuters, Al Arabiya, Gulf News,
//          CNN, Al Jazeera, France24, AP, Stars and Stripes,
//          Anadolu Agency, Breaking Defense, Military Watch Magazine
// Auto-updated by gulf-map-bot
// ═══════════════════════════════════════════════════════════════

`;

    const metaStr = `const MAP_META = ${JSON.stringify(meta, null, 4)};\n\n`;

    // Group locations by country for readability
    const countries = {};
    for (const loc of locations) {
        if (!countries[loc.country]) countries[loc.country] = [];
        countries[loc.country].push(loc);
    }

    let locStr = 'const LOCATIONS = [\n';
    const countryOrder = ['UAE', 'Bahrain', 'Qatar', 'Kuwait', 'Saudi Arabia', 'Oman'];
    // Include any countries not in our predefined order
    for (const c of Object.keys(countries)) {
        if (!countryOrder.includes(c)) countryOrder.push(c);
    }

    for (const country of countryOrder) {
        if (!countries[country]) continue;
        locStr += `    // ═══════════════════════════════════════════════════════════\n`;
        locStr += `    // ${country}\n`;
        locStr += `    // ═══════════════════════════════════════════════════════════\n`;
        for (const loc of countries[country]) {
            locStr += `    ${JSON.stringify(loc, null, 8).replace(/\n/g, '\n    ')},\n`;
        }
        locStr += '\n';
    }

    locStr += '];\n';

    return header + metaStr + locStr;
}

// ═══════════════════════════════════════════════════════════════
// Set GitHub Actions outputs
// ═══════════════════════════════════════════════════════════════
function setOutput(key, value) {
    const outputFile = process.env.GITHUB_OUTPUT;
    if (outputFile) {
        appendFileSync(outputFile, `${key}=${value}\n`);
    }
}

// ═══════════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════════
async function main() {
    console.log('═══ Gulf Map Update Script ═══');
    console.log(`DRY_RUN: ${DRY_RUN}`);
    console.log(`Data file: ${DATA_PATH}`);

    // 1. Parse existing data
    console.log('\n[1/5] Parsing existing data.js...');
    const { MAP_META, LOCATIONS } = parseDataFile();
    console.log(`  Loaded ${LOCATIONS.length} locations across ${new Set(LOCATIONS.map(l => l.country)).size} countries`);
    console.log(`  Last updated: ${MAP_META.lastUpdated}`);

    // 2. Build prompt
    console.log('\n[2/5] Building Claude prompt...');
    const prompt = buildPrompt(MAP_META, LOCATIONS);

    // 3. Call Claude
    console.log('\n[3/5] Calling Claude Opus 4.6 with web search...');
    let responseText;
    try {
        responseText = await callClaude(prompt);
    } catch (err) {
        console.error(`  API error: ${err.message}`);
        setOutput('has_changes', 'false');
        process.exit(1);
    }

    // 4. Parse and validate response
    console.log('\n[4/5] Parsing and validating response...');

    // Extract JSON from response (handle possible markdown wrapping)
    let jsonStr = responseText;
    const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) jsonStr = jsonMatch[1];
    // Also try to find raw JSON object
    const rawJsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (rawJsonMatch) jsonStr = rawJsonMatch[0];

    let result;
    try {
        result = JSON.parse(jsonStr);
    } catch (err) {
        console.error(`  Failed to parse JSON: ${err.message}`);
        console.error(`  Response text (first 500 chars): ${responseText.substring(0, 500)}`);
        setOutput('has_changes', 'false');
        process.exit(1);
    }

    console.log(`  Search summary: ${result.searchSummary}`);
    console.log(`  New locations: ${result.newLocations?.length || 0}`);
    console.log(`  Updated locations: ${result.updatedLocations?.length || 0}`);

    if (!result.hasNewData && (!result.newLocations?.length) && (!result.updatedLocations?.length)) {
        console.log('\n  No new data found. Exiting.');
        setOutput('has_changes', 'false');
        return;
    }

    // 5. Merge data
    console.log('\n[5/5] Merging and validating...');
    let changeCount = 0;
    const changeDescriptions = [];
    const updatedLocations = [...LOCATIONS];
    const updatedMeta = { ...MAP_META };

    // Process new locations
    if (result.newLocations?.length) {
        for (const newLoc of result.newLocations) {
            // Validate
            const errors = validateLocation(newLoc);
            if (errors.length) {
                console.log(`  REJECTED "${newLoc.name}": ${errors.join(', ')}`);
                continue;
            }

            // Check for duplicates
            const dupName = isDuplicate(newLoc, updatedLocations);
            if (dupName) {
                console.log(`  DUPLICATE "${newLoc.name}" matches existing "${dupName}" — skipping`);
                continue;
            }

            // Ensure dateAdded
            if (!newLoc.dateAdded) {
                newLoc.dateAdded = new Date().toISOString().split('T')[0];
            }

            console.log(`  ADDING: ${newLoc.name} [${newLoc.severity}] in ${newLoc.country}`);
            updatedLocations.push(newLoc);
            changeCount++;
            changeDescriptions.push(`Add ${newLoc.name} (${newLoc.country})`);
        }
    }

    // Process updated locations
    if (result.updatedLocations?.length) {
        for (const update of result.updatedLocations) {
            const existing = updatedLocations.find(
                l => l.name.toLowerCase() === update.name.toLowerCase()
            );
            if (!existing) {
                console.log(`  UPDATE SKIPPED: "${update.name}" not found in existing data`);
                continue;
            }

            let changed = false;

            // Add new incidents (dedup)
            if (update.newIncidents?.length) {
                for (const inc of update.newIncidents) {
                    if (!isIncidentDuplicate(inc, existing.incidents || [])) {
                        if (!existing.incidents) existing.incidents = [];
                        existing.incidents.push(inc);
                        changed = true;
                    }
                }
            }

            // Add new sources (dedup by URL)
            if (update.newSources?.length) {
                const existingUrls = new Set((existing.sources || []).map(s => s.url));
                for (const src of update.newSources) {
                    if (src.url && !existingUrls.has(src.url)) {
                        if (!existing.sources) existing.sources = [];
                        existing.sources.push(src);
                        changed = true;
                    }
                }
            }

            // Severity ratchet
            if (update.severityChange && update.severityChange !== 'null') {
                const newSev = ratchetSeverity(existing.severity, update.severityChange);
                if (newSev !== existing.severity) {
                    console.log(`  ESCALATE: ${existing.name} ${existing.severity} → ${newSev}`);
                    existing.severity = newSev;
                    changed = true;
                }
            }

            // Append detail
            if (update.detailAppend && update.detailAppend !== 'null') {
                existing.detail += ' ' + update.detailAppend;
                changed = true;
            }

            if (changed) {
                console.log(`  UPDATED: ${existing.name}`);
                changeCount++;
                changeDescriptions.push(`Update ${existing.name}`);
            }
        }
    }

    // Process casualty updates (only accept increases)
    if (result.casualtyUpdate) {
        const cu = result.casualtyUpdate;
        if (typeof cu.killed === 'number' && cu.killed > updatedMeta.casualties.killed) {
            console.log(`  CASUALTIES: killed ${updatedMeta.casualties.killed} → ${cu.killed}`);
            updatedMeta.casualties.killed = cu.killed;
            changeCount++;
            changeDescriptions.push(`Killed count: ${cu.killed}`);
        }
        if (typeof cu.injured === 'number' && cu.injured > updatedMeta.casualties.injured) {
            console.log(`  CASUALTIES: injured ${updatedMeta.casualties.injured} → ${cu.injured}`);
            updatedMeta.casualties.injured = cu.injured;
            changeCount++;
            changeDescriptions.push(`Injured count: ${cu.injured}`);
        }
    }

    // Process meta updates
    if (result.metaUpdates) {
        if (result.metaUpdates.summary && result.metaUpdates.summary !== 'null') {
            updatedMeta.summary = result.metaUpdates.summary;
        }
        if (result.metaUpdates.totalBarrage && result.metaUpdates.totalBarrage !== 'null') {
            updatedMeta.totalBarrage = result.metaUpdates.totalBarrage;
        }
        if (result.metaUpdates.intercepted && result.metaUpdates.intercepted !== 'null') {
            updatedMeta.intercepted = result.metaUpdates.intercepted;
        }
    }

    // Update lastUpdated
    if (changeCount > 0) {
        updatedMeta.lastUpdated = new Date().toISOString().split('T')[0];
    }

    // Write or dry-run
    if (changeCount === 0) {
        console.log('\n  No validated changes to write.');
        setOutput('has_changes', 'false');
        return;
    }

    console.log(`\n  Total changes: ${changeCount}`);

    if (DRY_RUN) {
        console.log('\n  DRY RUN — not writing data.js');
        console.log('  Changes that would be made:');
        for (const desc of changeDescriptions) console.log(`    - ${desc}`);
        setOutput('has_changes', 'false');
        return;
    }

    // Write updated data.js
    const newDataJS = generateDataJS(updatedMeta, updatedLocations);
    writeFileSync(DATA_PATH, newDataJS, 'utf-8');
    console.log(`\n  Wrote updated data.js (${updatedLocations.length} locations)`);

    // Set GitHub Actions outputs
    const commitMsg = `Update map: ${changeDescriptions.slice(0, 3).join(', ')}${changeDescriptions.length > 3 ? ` (+${changeDescriptions.length - 3} more)` : ''}`;
    setOutput('has_changes', 'true');
    setOutput('commit_message', commitMsg);

    console.log(`\n  Commit message: ${commitMsg}`);
    console.log('═══ Done ═══');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
