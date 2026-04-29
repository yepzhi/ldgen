// ── team.js · Richmond Pro · Directorio + Mapa ──

const TEAM = [
  {
    id: 'noroeste',
    zona: 'Zona Noroeste',
    zonaShort: 'Noroeste',
    nombre: 'Alberto Yépiz',
    rol: 'Asesor',
    wa: '526641234567',
    estados: ['Baja California', 'Baja California Sur', 'Sonora', 'Sinaloa', 'Nayarit'],
    color: '#4f8ef7',
    lat: 29.5, lng: -113.0
  },
  {
    id: 'norte',
    zona: 'Zona Norte',
    zonaShort: 'Norte',
    nombre: 'Luis Franco',
    rol: 'Asesor',
    wa: '526641234568',
    estados: ['Chihuahua', 'Durango', 'Coahuila', 'Nuevo León', 'Tamaulipas', 'Zacatecas'],
    color: '#a78bfa',
    lat: 26.5, lng: -101.5
  },
  {
    id: 'occidente',
    zona: 'Zona Occidente',
    zonaShort: 'Occidente',
    nombre: 'Fabiola Martinez',
    rol: 'Asesora',
    wa: '526641234569',
    estados: ['Jalisco', 'Colima', 'Michoacán', 'Aguascalientes', 'Guanajuato'],
    color: '#f472b6',
    lat: 20.5, lng: -103.2
  },
  {
    id: 'sureste',
    zona: 'Zona Sureste',
    zonaShort: 'Sureste',
    nombre: 'Arturo Mendoza',
    rol: 'Asesor',
    wa: '526641234570',
    estados: ['Oaxaca', 'Chiapas', 'Tabasco', 'Campeche', 'Yucatán', 'Quintana Roo'],
    color: '#34d399',
    lat: 18.0, lng: -90.5
  },
  {
    id: 'puebla',
    zona: 'Zona Puebla',
    zonaShort: 'Puebla',
    nombre: 'Joel Navor',
    rol: 'Asesor',
    wa: '526641234571',
    estados: ['Puebla', 'Tlaxcala', 'Morelos', 'Guerrero'],
    color: '#fb923c',
    lat: 18.2, lng: -98.0
  },
  {
    id: 'toluca',
    zona: 'Zona Toluca / CDMX',
    zonaShort: 'Toluca / CDMX',
    nombre: 'Edgar Espinoza',
    rol: 'Asesor',
    wa: '526641234572',
    estados: ['Estado de México', 'Hidalgo', 'Querétaro', 'San Luis Potosí'],
    color: '#f4c94e',
    lat: 20.0, lng: -99.6
  },
  {
    id: 'cdmx1',
    zona: 'Zona CDMX',
    zonaShort: 'CDMX',
    nombre: 'Miguel Campero',
    rol: 'Asesor',
    wa: '526641234573',
    estados: ['Ciudad de México'],
    color: '#60a5fa',
    lat: 19.43, lng: -99.13
  },
  {
    id: 'cdmx2',
    zona: 'Zona CDMX',
    zonaShort: 'Veracruz',
    nombre: 'Daniel Morales',
    rol: 'Asesor',
    wa: '526641234574',
    estados: ['Veracruz'],
    color: '#818cf8',
    lat: 19.5, lng: -96.5
  },
];

const MANAGERS = [
  { nombre: 'Michelle Gutiérrez', rol: 'Gerente México Sur',   wa: '526641234580' },
  { nombre: 'Marco Guerrero',     rol: 'Gerente Norte',        wa: '526641234581' },
  { nombre: 'Manuel Ramírez',     rol: 'Gerente Nacional',     wa: '526641234582', highlight: true },
];

// Coordenadas por estado para colocar puntos en el mapa
const STATE_CENTERS = {
  'Aguascalientes':     [21.88, -102.29],
  'Baja California':    [31.0,  -115.5],
  'Baja California Sur':[25.2,  -111.6],
  'Campeche':           [19.2,  -90.3],
  'Chiapas':            [16.5,  -92.6],
  'Chihuahua':          [28.6,  -106.1],
  'Ciudad de México':   [19.43, -99.13],
  'Coahuila':           [27.3,  -102.0],
  'Colima':             [19.2,  -103.7],
  'Durango':            [24.8,  -105.4],
  'Estado de México':   [19.5,  -99.8],
  'Guanajuato':         [21.0,  -101.3],
  'Guerrero':           [17.5,  -100.5],
  'Hidalgo':            [20.5,  -98.8],
  'Jalisco':            [20.7,  -103.4],
  'Michoacán':          [19.7,  -101.8],
  'Morelos':            [18.7,  -99.1],
  'Nayarit':            [21.8,  -104.8],
  'Nuevo León':         [25.7,  -100.3],
  'Oaxaca':             [17.0,  -96.7],
  'Puebla':             [19.0,  -98.2],
  'Querétaro':          [20.6,  -100.4],
  'Quintana Roo':       [19.5,  -88.0],
  'San Luis Potosí':    [22.2,  -100.5],
  'Sinaloa':            [25.2,  -107.5],
  'Sonora':             [29.3,  -110.6],
  'Tabasco':            [18.0,  -92.9],
  'Tamaulipas':         [24.3,  -98.8],
  'Tlaxcala':           [19.3,  -98.2],
  'Veracruz':           [19.2,  -96.1],
  'Yucatán':            [20.9,  -89.6],
  'Zacatecas':          [22.8,  -102.6],
};

// ─── Leaflet Map ──────────────────────────────────
let teamMap = null;
let baseMarkers  = [];   // always-visible zone dots
let activeMarkers = [];  // state highlight markers on click

function initTeamMap() {
  const el = document.getElementById('team-map');
  if (!el || teamMap) return;

  // Set explicit height before init to avoid the offset bug
  el.style.height = '380px';

  teamMap = L.map('team-map', {
    zoomControl: false,
    scrollWheelZoom: false,
    attributionControl: false,
    minZoom: 4,
    maxZoom: 9
  }).setView([23.6, -102.5], 5);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 9
  }).addTo(teamMap);

  // Render permanent zone center markers
  TEAM.forEach(member => {
    const icon = L.divIcon({
      html: `<div class="map-state-dot" style="background:${member.color}; box-shadow:0 0 12px ${member.color}99; width:14px; height:14px;"></div>`,
      className: '',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const marker = L.marker([member.lat, member.lng], { icon })
      .addTo(teamMap)
      .bindPopup(buildPopupHTML(member, member.zona), { className: 'rp-popup', maxWidth: 220 });

    marker.on('click', () => {
      highlightCard(member.id);
      showStateMarkers(member);
    });
    baseMarkers.push(marker);
  });

  // Force Leaflet to recalculate size after full render
  setTimeout(() => teamMap.invalidateSize(), 100);
  setTimeout(() => teamMap.invalidateSize(), 400);
}

function buildPopupHTML(member, stateName) {
  const waText = encodeURIComponent(`Hola ${member.nombre}, te contacto desde el portal Richmond Pro 👋`);
  return `
    <div class="map-popup">
      <div class="map-popup-zona">${member.zona}</div>
      <div class="map-popup-name">${member.nombre}</div>
      <div class="map-popup-state">${stateName}</div>
      <a class="map-popup-wa" href="https://wa.me/${member.wa}?text=${waText}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 20 20" fill="none" width="13" height="13"><path d="M14 12.5c-.5-.25-2-.98-2.3-1.08-.3-.1-.52-.15-.74.15-.22.3-.85 1.08-1.04 1.3-.19.22-.38.25-.7.08-.32-.17-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.77-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.22.05-.41-.02-.57C5.68 7.16 5.05 5.5 4.8 4.92c-.25-.57-.5-.5-.7-.5-.18 0-.4-.02-.61-.02-.22 0-.57.08-.87.41C2.32 5.14 1.5 5.9 1.5 7.5s1.06 3.18 1.21 3.4c.15.22 2.1 3.2 5.08 4.49 4.5 1.94 4.5 1.29 5.31 1.21.81-.08 2.61-1.07 2.98-2.1.37-1.03.37-1.92.26-2.1-.11-.18-.3-.27-.81-.52z" fill="currentColor"/></svg>
        WhatsApp
      </a>
    </div>`;
}

// Show colored state circles when a card/marker is clicked
function showStateMarkers(member) {
  // Remove previous
  activeMarkers.forEach(m => teamMap.removeLayer(m));
  activeMarkers = [];

  member.estados.forEach(state => {
    const coords = STATE_CENTERS[state];
    if (!coords) return;

    const icon = L.divIcon({
      html: `<div class="map-active-dot" style="background:${member.color}; box-shadow:0 0 18px ${member.color}, 0 0 6px ${member.color};"></div>`,
      className: '',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });

    const m = L.marker(coords, { icon })
      .addTo(teamMap)
      .bindPopup(buildPopupHTML(member, state), { className: 'rp-popup', maxWidth: 220 });

    activeMarkers.push(m);
  });

  // Fit map to show all state markers
  if (activeMarkers.length > 0) {
    const group = L.featureGroup(activeMarkers);
    teamMap.flyToBounds(group.getBounds().pad(0.3), { duration: 0.8, maxZoom: 7 });
  }
}

function clearStateMarkers() {
  activeMarkers.forEach(m => teamMap && teamMap.removeLayer(m));
  activeMarkers = [];
}

function highlightCard(id) {
  document.querySelectorAll('.team-card').forEach(c => {
    c.classList.toggle('highlighted', c.dataset.id === id);
  });
}
function clearHighlight() {
  document.querySelectorAll('.team-card').forEach(c => c.classList.remove('highlighted'));
}

// ─── Render Directory ─────────────────────────────
function renderTeamSection() {
  const section = document.getElementById('team-section');
  if (!section) return;

  section.innerHTML = `
    <div class="team-header">
      <div class="team-header-badge">
        <svg viewBox="0 0 20 20" fill="none" width="14" height="14">
          <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M6.5 10.5c.9.9 2.1 1.5 3.5 1.5s2.6-.6 3.5-1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="7.5" cy="8" r="1" fill="currentColor"/>
          <circle cx="12.5" cy="8" r="1" fill="currentColor"/>
        </svg>
        Contacta Ahora con un solo Click!
      </div>
      <h2 class="team-title">Equipo Richmond Pro <span class="team-heart">💙</span> México</h2>
      <p class="team-sub">Toca sobre un contacto y recibe atención pronto!</p>
    </div>

    <div class="team-map-wrap">
      <div id="team-map"></div>
      <div class="map-legend">
        ${TEAM.map(m => `
          <div class="legend-item" onclick="onCardClick('${m.id}')">
            <span class="legend-dot" style="background:${m.color}"></span>
            <span>${m.zonaShort}</span>
          </div>`).join('')}
      </div>
    </div>

    <div class="team-grid">
      ${TEAM.map(m => {
        const waText = encodeURIComponent(`Hola ${m.nombre}, te contacto desde el portal Richmond Pro 👋`);
        return `
        <div class="team-card" data-id="${m.id}" onclick="onCardClick('${m.id}')">
          <div class="team-card-accent" style="background:${m.color}"></div>
          <div class="team-card-avatar" style="border-color:${m.color}; background:${m.color}22;">
            <svg viewBox="0 0 40 40" fill="none" width="26" height="26">
              <circle cx="20" cy="14" r="7" stroke="${m.color}" stroke-width="1.8"/>
              <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="${m.color}" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="team-card-info">
            <div class="team-card-zona" style="color:${m.color}">${m.zonaShort}</div>
            <div class="team-card-name">${m.nombre}</div>
          </div>
          <a
            class="team-card-wa"
            href="https://wa.me/${m.wa}?text=${waText}"
            target="_blank" rel="noopener noreferrer"
            onclick="event.stopPropagation()"
            style="background:${m.color}22; border-color:${m.color}55; color:${m.color}"
          >
            <svg viewBox="0 0 20 20" fill="none" width="14" height="14"><path d="M14 12.5c-.5-.25-2-.98-2.3-1.08-.3-.1-.52-.15-.74.15-.22.3-.85 1.08-1.04 1.3-.19.22-.38.25-.7.08-.32-.17-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.77-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.22.05-.41-.02-.57C5.68 7.16 5.05 5.5 4.8 4.92c-.25-.57-.5-.5-.7-.5-.18 0-.4-.02-.61-.02-.22 0-.57.08-.87.41C2.32 5.14 1.5 5.9 1.5 7.5s1.06 3.18 1.21 3.4c.15.22 2.1 3.2 5.08 4.49 4.5 1.94 4.5 1.29 5.31 1.21.81-.08 2.61-1.07 2.98-2.1.37-1.03.37-1.92.26-2.1-.11-.18-.3-.27-.81-.52z" fill="currentColor"/></svg>
            WhatsApp
          </a>
        </div>`;
      }).join('')}
    </div>

    <div class="managers-section">
      <div class="managers-label">Gerencia Richmond Pro México</div>
      <div class="managers-row">
        ${MANAGERS.map(m => {
          const waText = encodeURIComponent(`Hola ${m.nombre}, te contacto desde el portal Richmond Pro 👋`);
          return `
          <a class="manager-card ${m.highlight ? 'manager-highlight' : ''}"
            href="https://wa.me/${m.wa}?text=${waText}"
            target="_blank" rel="noopener noreferrer">
            <div class="manager-avatar">
              <svg viewBox="0 0 40 40" fill="none" width="20" height="20">
                <polygon points="20,4 24,14 35,14 26,21 29,32 20,25 11,32 14,21 5,14 16,14" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <div class="manager-name">${m.nombre}</div>
              <div class="manager-rol">${m.rol}</div>
            </div>
            <div class="manager-wa-btn">
              <svg viewBox="0 0 20 20" fill="none" width="14" height="14"><path d="M14 12.5c-.5-.25-2-.98-2.3-1.08-.3-.1-.52-.15-.74.15-.22.3-.85 1.08-1.04 1.3-.19.22-.38.25-.7.08-.32-.17-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.77-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.22.05-.41-.02-.57C5.68 7.16 5.05 5.5 4.8 4.92c-.25-.57-.5-.5-.7-.5-.18 0-.4-.02-.61-.02-.22 0-.57.08-.87.41C2.32 5.14 1.5 5.9 1.5 7.5s1.06 3.18 1.21 3.4c.15.22 2.1 3.2 5.08 4.49 4.5 1.94 4.5 1.29 5.31 1.21.81-.08 2.61-1.07 2.98-2.1.37-1.03.37-1.92.26-2.1-.11-.18-.3-.27-.81-.52z" fill="currentColor"/></svg>
              WhatsApp
            </div>
          </a>`;
        }).join('')}
      </div>
    </div>
  `;

  // Init map after DOM is painted
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initTeamMap();
    });
  });
}

function onCardClick(id) {
  const member = TEAM.find(t => t.id === id);
  if (!member) return;
  highlightCard(id);
  if (teamMap) showStateMarkers(member);
  // Scroll map into view on mobile
  const mapEl = document.getElementById('team-map');
  if (mapEl && window.innerWidth < 700) {
    mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

window.TEAM         = TEAM;
window.onCardClick  = onCardClick;

document.addEventListener('DOMContentLoaded', renderTeamSection);
