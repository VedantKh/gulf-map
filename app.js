// ═══════════════════════════════════════════════════════════════
// Gulf Region — Iranian Strikes & Threats — Application Logic
// ═══════════════════════════════════════════════════════════════

(function() {
    'use strict';

    // ═══ Severity colors ═══
    const SEV_COLOR = {
        critical: '#dc2626',
        high: '#ea580c',
        watchlist: '#6b7280'
    };

    // ═══ Severity display labels ═══
    const SEV_LABEL = {
        critical: 'HIT',
        high: 'DEBRIS',
        watchlist: 'WATCH'
    };

    const SEV_LABEL_LONG = {
        critical: 'HIT — Confirmed strike/impact',
        high: 'FALLING DEBRIS — Minor damage',
        watchlist: 'WATCHLIST — Elevated threat'
    };

    // ═══ "Last day" helper — based on incident dates only ═══
    const RECENT_CUTOFF = (() => {
        const ref = new Date(MAP_META.lastUpdated);
        return new Date(Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate() - 1))
            .toISOString().slice(0, 10);
    })();

    function isRecentIncident(dateStr) {
        return dateStr && dateStr >= RECENT_CUTOFF;
    }

    function isRecent(loc) {
        return loc.incidents && loc.incidents.some(inc => isRecentIncident(inc.date));
    }

    // ═══ State ═══
    const state = {
        map: null,
        markerGroup: L.layerGroup(),
        pulseGroup: L.layerGroup(),
        countryLabelGroup: L.layerGroup(),
        allLocations: LOCATIONS,
        filteredLocations: LOCATIONS,
        legendToggles: { critical: true, high: true, watchlist: true },
        countryFilter: 'all',
        severityFilter: 'all'
    };

    // ═══ Init Map ═══
    function initMap() {
        state.map = L.map('map', {
            center: [25.5, 51.5],
            zoom: 6,
            zoomControl: false,
            attributionControl: true
        });

        L.control.zoom({ position: 'bottomleft' }).addTo(state.map);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(state.map);

        state.markerGroup.addTo(state.map);
        state.pulseGroup.addTo(state.map);
        state.countryLabelGroup.addTo(state.map);

        // Add country labels
        addCountryLabels();

        // Build controls
        buildIncidentPanel();
        buildLegend();
        buildSummaryPanel();

        // Render
        applyFilters();
        updateStats(state.filteredLocations);

        // Add pulse animation
        addPulseAnimation();
    }

    // ═══ Country labels on map ═══
    function addCountryLabels() {
        const labels = [
            { name: 'UAE', lat: 24.0, lng: 54.5 },
            { name: 'OMAN', lat: 21.5, lng: 57.0 },
            { name: 'BAHRAIN', lat: 26.05, lng: 50.55 },
            { name: 'QATAR', lat: 25.3, lng: 51.2 },
            { name: 'KUWAIT', lat: 29.5, lng: 47.8 },
            { name: 'SAUDI ARABIA', lat: 25.0, lng: 45.5 },
            { name: 'IRAN', lat: 29.5, lng: 53.0 }
        ];

        labels.forEach(l => {
            L.marker([l.lat, l.lng], {
                icon: L.divIcon({
                    className: '',
                    html: `<div style="color:rgba(0,0,0,0.15);font-size:13px;font-weight:700;letter-spacing:3px;white-space:nowrap;pointer-events:none">${l.name}</div>`,
                    iconAnchor: [30, 8]
                }),
                interactive: false
            }).addTo(state.countryLabelGroup);
        });
    }

    // ═══ Render markers ═══
    function renderMarkers(locations) {
        state.markerGroup.clearLayers();
        state.pulseGroup.clearLayers();

        locations.forEach(loc => {
            const color = SEV_COLOR[loc.severity];

            // Pulse ring (not for watchlist)
            if (loc.severity !== 'watchlist') {
                const pulseR = loc.severity === 'critical' ? 20 : 16;
                const pulse = L.circleMarker([loc.lat, loc.lng], {
                    radius: pulseR, color: color, fillColor: color,
                    fillOpacity: 0.15, weight: 1.5, opacity: 0.4,
                    className: 'pulse-ring'
                });
                state.pulseGroup.addLayer(pulse);
            }

            // Amber glow ring for recently updated locations
            if (isRecent(loc)) {
                const glowR = (loc.severity === 'critical' ? 11 : loc.severity === 'high' ? 9 : 6) + 8;
                const glow = L.circleMarker([loc.lat, loc.lng], {
                    radius: glowR, color: '#f59e0b', fillColor: '#f59e0b',
                    fillOpacity: 0.18, weight: 2, opacity: 0.5,
                    className: 'glow-recent'
                });
                state.pulseGroup.addLayer(glow);
            }

            // Main marker
            const markerR = loc.severity === 'critical' ? 11 : loc.severity === 'high' ? 9 : 6;
            const fillOp = loc.severity === 'watchlist' ? 0.6 : 0.9;
            const marker = L.circleMarker([loc.lat, loc.lng], {
                radius: markerR, color: color, fillColor: color,
                fillOpacity: fillOp, weight: 2, opacity: 1
            });

            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                // On mobile, use detail panel instead of Leaflet popup
                marker.on('click', () => showMobileDetail(loc));
            } else {
                marker.bindPopup(buildPopup(loc), {
                    maxWidth: 380,
                    autoPanPaddingTopLeft: L.point(10, 20),
                    autoPanPaddingBottomRight: L.point(10, 20)
                });
            }
            state.markerGroup.addLayer(marker);
        });
    }

    // ═══ Build popup HTML ═══
    function buildPopup(loc) {
        // ── Detail text: collapse if >200 chars ──
        let detailHtml = '';
        if (loc.detail) {
            if (loc.detail.length > 200) {
                const truncated = loc.detail.slice(0, 200).replace(/\s+\S*$/, '');
                const id = 'detail-' + Math.random().toString(36).slice(2, 9);
                detailHtml = `<div class="popup-detail" style="margin-top:6px">${truncated}<span id="${id}" style="display:none">${loc.detail.slice(truncated.length)}</span> <span class="popup-expand" onclick="var s=document.getElementById('${id}');if(s.style.display==='none'){s.style.display='inline';this.textContent='Show less'}else{s.style.display='none';this.textContent='Show more'}">Show more</span></div>`;
            } else {
                detailHtml = `<div class="popup-detail" style="margin-top:6px">${loc.detail}</div>`;
            }
        }

        // ── Incidents: group by date ──
        let incidentHtml = '';
        if (loc.incidents && loc.incidents.length > 0) {
            const sorted = [...loc.incidents].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
            // Group by date
            const groups = {};
            sorted.forEach(inc => {
                const d = inc.date || 'Unknown';
                if (!groups[d]) groups[d] = [];
                groups[d].push(inc);
            });
            const dateKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));
            const totalCount = loc.incidents.length;
            let groupsHtml = '';
            dateKeys.forEach(date => {
                const items = groups[date];
                const dateRecent = isRecentIncident(date);
                const groupClass = dateRecent ? ' popup-inc-new' : '';
                const countLabel = items.length > 1 ? ` <span class="report-count">(${items.length} reports)</span>` : '';
                // Show first 2 inline, rest behind toggle
                const visibleItems = items.slice(0, 2);
                const hiddenItems = items.slice(2);
                let listHtml = visibleItems.map(inc => {
                    const text = typeof inc === 'string' ? inc : inc.text;
                    return `<li>${text}</li>`;
                }).join('');
                if (hiddenItems.length > 0) {
                    const gid = 'inc-' + Math.random().toString(36).slice(2, 9);
                    listHtml += `<li style="list-style:none;margin-left:-14px"><span class="popup-expand" onclick="var s=document.getElementById('${gid}');if(s.style.display==='none'){s.style.display='block';this.textContent='Show less'}else{s.style.display='none';this.textContent='Show ${hiddenItems.length} more'}">Show ${hiddenItems.length} more</span></li>`;
                    listHtml += `<span id="${gid}" style="display:none">${hiddenItems.map(inc => {
                        const text = typeof inc === 'string' ? inc : inc.text;
                        return `<li>${text}</li>`;
                    }).join('')}</span>`;
                }
                groupsHtml += `<div class="popup-date-group${groupClass}"><div class="popup-date-heading">${date}${countLabel}</div><ul>${listHtml}</ul></div>`;
            });
            incidentHtml = `<div class="popup-incidents"><strong>Incidents (${totalCount}):</strong>${groupsHtml}</div>`;
        }

        // ── Sources: collapse after 5 ──
        let sourceHtml = '';
        if (loc.sources && loc.sources.length > 0) {
            const allLinks = loc.sources.map(s =>
                s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>` : s.name
            );
            const totalSources = allLinks.length;
            let linksHtml;
            if (totalSources <= 5) {
                linksHtml = allLinks.join(' · ');
            } else {
                const visible = allLinks.slice(0, 5).join(' · ');
                const hidden = allLinks.slice(5).join(' · ');
                const sid = 'src-' + Math.random().toString(36).slice(2, 9);
                linksHtml = `${visible}<span id="${sid}" style="display:none"> · ${hidden}</span> <span class="popup-expand" onclick="var s=document.getElementById('${sid}');if(s.style.display==='none'){s.style.display='inline';this.textContent='Show less'}else{s.style.display='none';this.textContent='+${totalSources - 5} more'}">+${totalSources - 5} more</span>`;
            }
            sourceHtml = `<div class="popup-sources">
                <div class="popup-sources-label">Verified Sources (${totalSources})</div>
                <div class="popup-sources-list">${linksHtml}</div>
            </div>`;
        }

        const newBadge = isRecent(loc) ? ' <span class="badge-new">NEW</span>' : '';

        return `
            <div>
                <div class="popup-title">${loc.icon} ${loc.name}${newBadge}</div>
                <span class="popup-category sev-${loc.severity}">${SEV_LABEL[loc.severity]}</span>
                <div class="popup-detail"><strong>Type:</strong> ${loc.type}</div>
                <div class="popup-detail"><strong>Country:</strong> ${loc.country}${loc.city ? ' — ' + loc.city : ''}</div>
                ${detailHtml}
                ${incidentHtml}
                ${sourceHtml}
            </div>
        `;
    }

    // ═══ Build Incident Panel (top-left) ═══
    function buildIncidentPanel() {
        const ctrl = L.control({ position: 'topleft' });
        ctrl.onAdd = function() {
            const div = L.DomUtil.create('div', 'incident-panel');
            div.id = 'incident-panel';

            // Header + filters
            div.innerHTML = `<h4>Incidents</h4>`;

            const filterRow = L.DomUtil.create('div', 'filter-row', div);

            // Country dropdown
            const countrySelect = document.createElement('select');
            countrySelect.id = 'filter-country';
            const countries = ['all', ...new Set(LOCATIONS.map(l => l.country))].sort((a, b) => {
                if (a === 'all') return -1;
                if (b === 'all') return 1;
                return a.localeCompare(b);
            });
            countries.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c;
                opt.textContent = c === 'all' ? 'All Countries' : c;
                countrySelect.appendChild(opt);
            });
            countrySelect.addEventListener('change', () => {
                state.countryFilter = countrySelect.value;
                applyFilters();
            });
            filterRow.appendChild(countrySelect);

            // Severity dropdown
            const sevSelect = document.createElement('select');
            sevSelect.id = 'filter-severity';
            [
                { value: 'all', label: 'All Severity' },
                { value: 'critical', label: 'Hit' },
                { value: 'high', label: 'Falling Debris' },
                { value: 'watchlist', label: 'Watchlist' }
            ].forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.value;
                opt.textContent = s.label;
                sevSelect.appendChild(opt);
            });
            sevSelect.addEventListener('change', () => {
                state.severityFilter = sevSelect.value;
                applyFilters();
            });
            filterRow.appendChild(sevSelect);

            // List container
            const listDiv = document.createElement('div');
            listDiv.id = 'incident-list';
            div.appendChild(listDiv);

            L.DomEvent.disableClickPropagation(div);
            L.DomEvent.disableScrollPropagation(div);
            return div;
        };
        ctrl.addTo(state.map);
    }

    // ═══ Update incident list ═══
    function getLatestDate(loc) {
        if (!loc.incidents || loc.incidents.length === 0) return loc.dateAdded || '2000-01-01';
        return loc.incidents.reduce((latest, inc) => inc.date > latest ? inc.date : latest, '2000-01-01');
    }

    function updateIncidentList(locations) {
        const listDiv = document.getElementById('incident-list');
        if (!listDiv) return;
        listDiv.innerHTML = '';

        // Sort all locations by most recent incident date, then severity
        const sevOrder = { critical: 0, high: 1, watchlist: 2 };
        const sorted = [...locations].sort((a, b) => {
            const dateA = getLatestDate(a);
            const dateB = getLatestDate(b);
            if (dateB !== dateA) return dateB.localeCompare(dateA);
            return (sevOrder[a.severity] - sevOrder[b.severity]) || a.name.localeCompare(b.name);
        });

        sorted.forEach(loc => {
            const color = SEV_COLOR[loc.severity];
            const latestDate = getLatestDate(loc);
            const recent = isRecent(loc);
            const item = document.createElement('div');
            item.className = 'inc-item' + (recent ? ' inc-item-recent' : '');
            const badge = recent ? ' <span class="badge-new badge-new-sm">NEW</span>' : '';
            item.innerHTML = `
                <div class="inc-dot" style="background:${color}"></div>
                <div class="inc-info">
                    <div class="inc-name" title="${loc.name}">${loc.icon} ${loc.name}${badge}</div>
                    <div class="inc-type">${latestDate} · ${loc.country}</div>
                </div>
                <div class="inc-sev" style="color:${color}">${SEV_LABEL[loc.severity]}</div>
            `;
            item.addEventListener('click', () => {
                const zoom = loc.severity === 'watchlist' ? 10 : 12;
                state.map.flyTo([loc.lat, loc.lng], zoom);
                state.markerGroup.eachLayer(layer => {
                    if (layer.getLatLng && layer.getLatLng().lat === loc.lat && layer.getLatLng().lng === loc.lng) {
                        layer.openPopup();
                    }
                });
            });
            listDiv.appendChild(item);
        });
    }

    // ═══ Build Legend (top-right) ═══
    function buildLegend() {
        const legend = L.control({ position: 'topright' });
        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'legend');
            div.id = 'legend-panel';
            div.innerHTML = '<h4>Legend</h4>';

            const items = [
                { key: 'critical', color: '#dc2626', label: SEV_LABEL_LONG.critical },
                { key: 'high', color: '#ea580c', label: SEV_LABEL_LONG.high },
                { key: 'watchlist', color: '#6b7280', label: SEV_LABEL_LONG.watchlist }
            ];

            items.forEach(item => {
                const el = L.DomUtil.create('div', 'legend-item', div);
                el.dataset.severity = item.key;
                const count = LOCATIONS.filter(l => l.severity === item.key).length;
                el.innerHTML = `
                    <div class="legend-dot" style="background:${item.color}"></div>
                    <span class="legend-label">${item.label}</span>
                    <span class="legend-count" id="legend-count-${item.key}">${count}</span>
                `;
                el.addEventListener('click', () => {
                    state.legendToggles[item.key] = !state.legendToggles[item.key];
                    el.classList.toggle('disabled', !state.legendToggles[item.key]);
                    applyFilters();
                });
            });

            div.innerHTML += `
                <div style="margin-top:8px;padding-top:8px;border-top:1px solid #e5e7eb;font-size:11px;color:#6b7280">
                    Click severity to toggle visibility<br>
                    <span style="color:#b91c1c">${MAP_META.casualties.killed} killed · ${MAP_META.casualties.injured} injured · Airspace CLOSED</span>
                </div>
            `;

            L.DomEvent.disableClickPropagation(div);
            return div;
        };
        legend.addTo(state.map);
    }

    // ═══ Build Summary Panel (bottom-right) ═══
    function buildSummaryPanel() {
        const ctrl = L.control({ position: 'bottomright' });
        ctrl.onAdd = function() {
            const div = L.DomUtil.create('div', 'summary-panel');

            div.innerHTML = `
                <h4 style="color:#b91c1c">Conflict Summary</h4>
                <div class="summary-detail"><strong>Conflict:</strong> ${MAP_META.conflict}</div>
                <div class="summary-detail">${MAP_META.summary}</div>
                <div style="margin-top:8px">
                    <span class="summary-stat" style="background:rgba(220,38,38,0.08);color:#b91c1c">UAE barrage: ${MAP_META.totalBarrage.split(';')[0]}</span>
                </div>
                <div style="margin-top:4px">
                    <span class="summary-stat" style="background:rgba(79,70,229,0.08);color:#4f46e5">Qatar: 65 missiles + 12 drones intercepted</span>
                </div>
                <div style="margin-top:8px;padding:6px;background:rgba(185,28,28,0.05);border:1px solid rgba(185,28,28,0.2);border-radius:6px;font-size:10px;color:#991b1b;text-align:center">
                    Sources: UAE MOD/WAM, CENTCOM, Reuters, CNN, Al Jazeera<br>
                    Stars and Stripes, Anadolu Agency, Breaking Defense<br>
                    Last updated: ${formatLastUpdated(MAP_META.lastUpdated)} GMT | Strikes may be ongoing
                </div>
            `;

            L.DomEvent.disableClickPropagation(div);
            L.DomEvent.disableScrollPropagation(div);
            return div;
        };
        ctrl.addTo(state.map);
    }

    // ═══ Apply Filters ═══
    function applyFilters() {
        let filtered = state.allLocations;

        // Country filter
        if (state.countryFilter !== 'all') {
            filtered = filtered.filter(l => l.country === state.countryFilter);
        }

        // Severity dropdown filter
        if (state.severityFilter !== 'all') {
            filtered = filtered.filter(l => l.severity === state.severityFilter);
        }

        // Legend toggle filter
        filtered = filtered.filter(l => state.legendToggles[l.severity]);

        state.filteredLocations = filtered;
        renderMarkers(filtered);
        updateIncidentList(filtered);
        updateMobileSheet(filtered);
        updateStats(filtered);
        updateLegendCounts(filtered);
    }

    // ═══ Format last-updated timestamp ═══
    function formatLastUpdated(dateStr) {
        if (!dateStr) return '—';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const mon = months[d.getUTCMonth()];
        const day = d.getUTCDate();
        const h = String(d.getUTCHours()).padStart(2, '0');
        const m = String(d.getUTCMinutes()).padStart(2, '0');
        return `${mon} ${day}, ${h}:${m}`;
    }

    // ═══ Update Stats ═══
    function updateStats(locations) {
        document.getElementById('stat-critical').textContent = locations.filter(l => l.severity === 'critical').length;
        document.getElementById('stat-high').textContent = locations.filter(l => l.severity === 'high').length;
        document.getElementById('stat-watchlist').textContent = locations.filter(l => l.severity === 'watchlist').length;
        document.getElementById('stat-killed').textContent = MAP_META.casualties.killed;
        document.getElementById('stat-injured').textContent = MAP_META.casualties.injured;

        const countries = new Set(locations.map(l => l.country));
        document.getElementById('stat-countries').textContent = countries.size;

        // Last updated timestamp
        const updatedEl = document.getElementById('stat-updated');
        if (updatedEl) updatedEl.textContent = formatLastUpdated(MAP_META.lastUpdated);
    }

    // ═══ Update legend counts based on current filter ═══
    function updateLegendCounts(locations) {
        ['critical', 'high', 'watchlist'].forEach(sev => {
            const el = document.getElementById('legend-count-' + sev);
            if (el) {
                let base = state.allLocations;
                if (state.countryFilter !== 'all') base = base.filter(l => l.country === state.countryFilter);
                if (state.severityFilter !== 'all') base = base.filter(l => l.severity === state.severityFilter);
                el.textContent = base.filter(l => l.severity === sev).length;
            }
        });
    }

    // ═══ Pulse animation ═══
    function addPulseAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 0.1; } 100% { opacity: 0.4; } }
            .pulse-ring { animation: pulse 2.5s ease-in-out infinite; }
            @keyframes glowPulse { 0% { opacity: 0.5; } 50% { opacity: 0.2; } 100% { opacity: 0.5; } }
            .glow-recent { animation: glowPulse 2s ease-in-out infinite; }
        `;
        document.head.appendChild(style);
    }

    // ═══ Mobile bottom sheet ═══
    function initMobileSheet() {
        const sheet = document.getElementById('mobile-sheet');
        const handle = document.getElementById('mobile-sheet-handle');
        if (!sheet || !handle) return;

        handle.addEventListener('click', () => {
            sheet.classList.toggle('open');
        });

        // Swipe gestures on sheet handle
        addSwipeGesture(handle,
            () => sheet.classList.remove('open'),
            () => sheet.classList.add('open')
        );

        // Close sheet when map is tapped
        state.map.on('click', () => {
            sheet.classList.remove('open');
            closeMobileDetail();
        });

        // Close sheet when a popup opens
        state.map.on('popupopen', () => {
            sheet.classList.remove('open');
        });

        // Initialize mobile sub-features
        initMobileFilters();
        initMobileLegendToggles();
        initMobileResetView();
        initMobileDetail();
    }

    function updateMobileSheet(locations) {
        const content = document.getElementById('mobile-sheet-content');
        const label = document.getElementById('mobile-sheet-label');
        if (!content) return;

        if (label) label.textContent = `${locations.length} Incidents`;

        content.innerHTML = '';
        const sevOrder = { critical: 0, high: 1, watchlist: 2 };
        const sorted = [...locations].sort((a, b) => {
            const dateA = getLatestDate(a);
            const dateB = getLatestDate(b);
            if (dateB !== dateA) return dateB.localeCompare(dateA);
            return (sevOrder[a.severity] - sevOrder[b.severity]) || a.name.localeCompare(b.name);
        });

        sorted.forEach(loc => {
            const color = SEV_COLOR[loc.severity];
            const latestDate = getLatestDate(loc);
            const recent = isRecent(loc);
            const item = document.createElement('div');
            item.className = 'inc-item' + (recent ? ' inc-item-recent' : '');
            const badge = recent ? ' <span class="badge-new badge-new-sm">NEW</span>' : '';
            item.innerHTML = `
                <div class="inc-dot" style="background:${color}"></div>
                <div class="inc-info">
                    <div class="inc-name" title="${loc.name}">${loc.icon} ${loc.name}${badge}</div>
                    <div class="inc-type">${latestDate} · ${loc.country}</div>
                </div>
                <div class="inc-sev" style="color:${color}">${SEV_LABEL[loc.severity]}</div>
            `;
            item.addEventListener('click', () => {
                document.getElementById('mobile-sheet').classList.remove('open');
                const zoom = loc.severity === 'watchlist' ? 10 : 12;
                state.map.flyTo([loc.lat, loc.lng], zoom);
                showMobileDetail(loc);
            });
            content.appendChild(item);
        });
    }

    // ═══ Update mobile top bar ═══
    function updateMobileTopbar() {
        const el = document.getElementById('mobile-updated');
        if (el) el.textContent = formatLastUpdated(MAP_META.lastUpdated) + ' GMT';
    }

    // ═══ Swipe gesture helper ═══
    function addSwipeGesture(el, onSwipeDown, onSwipeUp) {
        let startY = 0;
        let startTime = 0;

        el.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startTime = Date.now();
        }, { passive: true });

        el.addEventListener('touchend', (e) => {
            const deltaY = e.changedTouches[0].clientY - startY;
            const deltaTime = Date.now() - startTime;
            const velocity = Math.abs(deltaY) / deltaTime;

            if ((deltaY > 50) || (deltaY > 25 && velocity > 0.3)) {
                if (onSwipeDown) onSwipeDown();
            } else if ((deltaY < -50) || (deltaY < -25 && velocity > 0.3)) {
                if (onSwipeUp) onSwipeUp();
            }
        }, { passive: true });
    }

    // ═══ Mobile detail panel (replaces popups on mobile) ═══
    function showMobileDetail(loc) {
        const title = document.getElementById('mobile-detail-title');
        const content = document.getElementById('mobile-detail-content');
        const panel = document.getElementById('mobile-detail');
        const overlay = document.getElementById('mobile-detail-overlay');
        if (!panel || !content) return;

        const newBadge = isRecent(loc) ? ' <span class="badge-new">NEW</span>' : '';
        if (title) title.innerHTML = loc.icon + ' ' + loc.name + newBadge;
        content.innerHTML = buildPopup(loc);
        content.scrollTop = 0;

        // Close bottom sheet
        const sheet = document.getElementById('mobile-sheet');
        if (sheet) sheet.classList.remove('open');

        panel.classList.add('open');
        if (overlay) overlay.classList.add('open');
    }

    function closeMobileDetail() {
        const panel = document.getElementById('mobile-detail');
        const overlay = document.getElementById('mobile-detail-overlay');
        if (panel) panel.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
    }

    function initMobileDetail() {
        const closeBtn = document.getElementById('mobile-detail-close');
        const overlay = document.getElementById('mobile-detail-overlay');

        if (closeBtn) closeBtn.addEventListener('click', closeMobileDetail);
        if (overlay) overlay.addEventListener('click', closeMobileDetail);

        // Swipe down to close detail panel
        const handle = document.getElementById('mobile-detail-handle');
        if (handle) {
            addSwipeGesture(handle, closeMobileDetail, null);
        }
    }

    // ═══ Mobile filters ═══
    function initMobileFilters() {
        const countrySelect = document.getElementById('mobile-filter-country');
        const sevSelect = document.getElementById('mobile-filter-severity');
        if (!countrySelect) return;

        // Populate country dropdown
        const countries = ['all', ...new Set(LOCATIONS.map(l => l.country))].sort((a, b) => {
            if (a === 'all') return -1;
            if (b === 'all') return 1;
            return a.localeCompare(b);
        });
        countrySelect.innerHTML = '';
        countries.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c === 'all' ? 'All Countries' : c;
            countrySelect.appendChild(opt);
        });

        countrySelect.addEventListener('change', () => {
            state.countryFilter = countrySelect.value;
            // Sync desktop filter
            const desktopFilter = document.getElementById('filter-country');
            if (desktopFilter) desktopFilter.value = countrySelect.value;
            applyFilters();
        });

        if (sevSelect) {
            sevSelect.addEventListener('change', () => {
                state.severityFilter = sevSelect.value;
                const desktopFilter = document.getElementById('filter-severity');
                if (desktopFilter) desktopFilter.value = sevSelect.value;
                applyFilters();
            });
        }
    }

    // ═══ Mobile legend toggles ═══
    function initMobileLegendToggles() {
        const legend = document.getElementById('mobile-legend');
        if (!legend) return;

        legend.querySelectorAll('.mobile-legend-item').forEach(item => {
            const sev = item.dataset.severity;
            if (!sev) return;

            item.addEventListener('click', () => {
                state.legendToggles[sev] = !state.legendToggles[sev];
                item.classList.toggle('disabled', !state.legendToggles[sev]);
                // Sync desktop legend
                const desktopItem = document.querySelector('.legend-item[data-severity="' + sev + '"]');
                if (desktopItem) desktopItem.classList.toggle('disabled', !state.legendToggles[sev]);
                applyFilters();
            });
        });
    }

    // ═══ Mobile reset view ═══
    function initMobileResetView() {
        const btn = document.getElementById('mobile-reset-view');
        if (!btn) return;

        btn.addEventListener('click', () => {
            state.map.flyTo([25.5, 51.5], 6);
            btn.classList.remove('visible');
            closeMobileDetail();
        });

        // Show/hide based on zoom level
        state.map.on('zoomend', () => {
            if (state.map.getZoom() > 7) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });
    }

    // ═══ Boot ═══
    initMap();
    initMobileSheet();
    updateMobileTopbar();

})();
