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

            // Main marker
            const markerR = loc.severity === 'critical' ? 11 : loc.severity === 'high' ? 9 : 6;
            const fillOp = loc.severity === 'watchlist' ? 0.6 : 0.9;
            const marker = L.circleMarker([loc.lat, loc.lng], {
                radius: markerR, color: color, fillColor: color,
                fillOpacity: fillOp, weight: 2, opacity: 1
            });

            // Build popup with mobile-aware auto-pan padding
            const isMobile = window.innerWidth <= 768;
            marker.bindPopup(buildPopup(loc), {
                maxWidth: isMobile ? 280 : 380,
                autoPanPaddingTopLeft: isMobile ? L.point(10, 75) : L.point(10, 20),
                autoPanPaddingBottomRight: isMobile ? L.point(10, 60) : L.point(10, 20)
            });
            state.markerGroup.addLayer(marker);
        });
    }

    // ═══ Build popup HTML ═══
    function buildPopup(loc) {
        let incidentHtml = '';
        if (loc.incidents && loc.incidents.length > 0) {
            const items = loc.incidents.map(inc => {
                const text = typeof inc === 'string' ? inc : `<strong>${inc.date}:</strong> ${inc.text}`;
                return `<li>${text}</li>`;
            }).join('');
            incidentHtml = `<div class="popup-incidents"><strong>Incidents:</strong><ul>${items}</ul></div>`;
        }

        let sourceHtml = '';
        if (loc.sources && loc.sources.length > 0) {
            const links = loc.sources.map(s =>
                s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>` : s.name
            ).join(' · ');
            sourceHtml = `<div class="popup-sources">
                <div class="popup-sources-label">Verified Sources</div>
                <div class="popup-sources-list">${links}</div>
            </div>`;
        }

        return `
            <div>
                <div class="popup-title">${loc.icon} ${loc.name}</div>
                <span class="popup-category sev-${loc.severity}">${SEV_LABEL[loc.severity]}</span>
                <div class="popup-detail"><strong>Type:</strong> ${loc.type}</div>
                <div class="popup-detail"><strong>Country:</strong> ${loc.country}${loc.city ? ' — ' + loc.city : ''}</div>
                <div class="popup-detail"><strong>Coordinates:</strong> ${loc.lat.toFixed(4)}°N, ${loc.lng.toFixed(4)}°E</div>
                <div class="popup-detail" style="margin-top:6px">${loc.detail}</div>
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
            const item = document.createElement('div');
            item.className = 'inc-item';
            item.innerHTML = `
                <div class="inc-dot" style="background:${color}"></div>
                <div class="inc-info">
                    <div class="inc-name">${loc.icon} ${loc.name}</div>
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

        // Close sheet when map is tapped (returns to peek state via CSS default)
        state.map.on('click', () => {
            sheet.classList.remove('open');
        });

        // Close sheet when a popup opens so popup is fully visible
        state.map.on('popupopen', () => {
            sheet.classList.remove('open');
        });
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
            const item = document.createElement('div');
            item.className = 'inc-item';
            item.innerHTML = `
                <div class="inc-dot" style="background:${color}"></div>
                <div class="inc-info">
                    <div class="inc-name">${loc.icon} ${loc.name}</div>
                    <div class="inc-type">${latestDate} · ${loc.country}</div>
                </div>
                <div class="inc-sev" style="color:${color}">${SEV_LABEL[loc.severity]}</div>
            `;
            item.addEventListener('click', () => {
                document.getElementById('mobile-sheet').classList.remove('open');
                const zoom = loc.severity === 'watchlist' ? 10 : 12;
                state.map.flyTo([loc.lat, loc.lng], zoom);
                state.markerGroup.eachLayer(layer => {
                    if (layer.getLatLng && layer.getLatLng().lat === loc.lat && layer.getLatLng().lng === loc.lng) {
                        layer.openPopup();
                    }
                });
            });
            content.appendChild(item);
        });
    }

    // ═══ Update mobile top bar ═══
    function updateMobileTopbar() {
        const el = document.getElementById('mobile-updated');
        if (el) el.textContent = formatLastUpdated(MAP_META.lastUpdated) + ' GMT';
    }

    // ═══ Boot ═══
    initMap();
    initMobileSheet();
    updateMobileTopbar();

})();
