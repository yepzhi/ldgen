// ── team.js · Richmond Pro · Directorio + Mapa ──

const TEAM = [
  {
    id: 'noroeste',
    zona: 'Zona Noroeste',
    zonaShort: 'Noroeste',
    nombre: 'Alberto Yépiz',
    rol: 'Asesor Académico',
    wa: '5216621147374',
    foto: 'assets/yepiz.png',
    estados: ['Baja California', 'Baja California Sur', 'Sonora', 'Sinaloa', 'Nayarit'],
    color: '#4f8ef7',
    lat: 29.5, lng: -113.0
  },
  {
    id: 'occidente',
    zona: 'Zona Occidente',
    zonaShort: 'Occidente',
    nombre: 'Fabiola',
    rol: 'Asesora Académica',
    wa: '5213316025928',
    estados: ['Jalisco', 'Colima', 'Michoacán', 'Aguascalientes', 'Guanajuato'],
    color: '#f472b6',
    lat: 20.5, lng: -103.2
  },
  {
    id: 'cdmx1',
    zona: 'Zona CDMX',
    zonaShort: 'CDMX',
    nombre: 'Marco G.',
    rol: 'Asesor Académico',
    wa: '5215666689044',
    foto: 'assets/marco.png',
    estados: ['Ciudad de México'],
    color: '#60a5fa',
    lat: 19.53, lng: -99.03
  },
  {
    id: 'cdmx2',
    zona: 'Zona CDMX Sur',
    zonaShort: 'CDMX Sur',
    nombre: 'Yanser Rebollo',
    rol: 'Asesor Académico',
    wa: '5215666689003',
    foto: 'assets/yanser2.png',
    estados: ['Ciudad de México'],
    color: '#a78bfa',
    lat: 19.33, lng: -99.25
  },
  {
    id: 'cdmx3',
    zona: 'Zona CDMX',
    zonaShort: 'CDMX',
    nombre: 'Michelle G.',
    rol: 'Asesora Académica',
    wa: '5215532239128',
    foto: 'assets/michelle.jpg',
    estados: ['Ciudad de México'],
    color: '#e879f9',
    lat: 19.43, lng: -99.13
  },
  {
    id: 'cdmx4',
    zona: 'Zona CDMX',
    zonaShort: 'CDMX',
    nombre: 'Daniel M.',
    rol: 'Asesor Académico',
    wa: '5215537339631',
    estados: ['Ciudad de México'],
    color: '#818cf8',
    lat: 19.38, lng: -99.18
  },
  {
    id: 'cdmx5',
    zona: 'Zona CDMX',
    zonaShort: 'CDMX',
    nombre: 'Arturo M.',
    rol: 'Asesor Académico',
    wa: '5215537339886',
    foto: 'assets/arturo.jpg',
    estados: ['Ciudad de México'],
    color: '#38bdf8',
    lat: 19.48, lng: -99.08
  },
  {
    id: 'querétaro',
    zona: 'Zona Centro',
    zonaShort: 'Centro',
    nombre: 'Marcel Vargas',
    rol: 'Asesora Académica',
    wa: '5214423384426',
    estados: ['Querétaro', 'Hidalgo', 'San Luis Potosí'],
    color: '#fb923c',
    lat: 20.6, lng: -100.4
  },
  {
    id: 'puebla',
    zona: 'Zona Puebla / Veracruz',
    zonaShort: 'Puebla / Veracruz',
    nombre: 'Joel N.',
    rol: 'Asesor Académico',
    wa: '522211057576',
    estados: ['Puebla', 'Tlaxcala', 'Morelos', 'Guerrero', 'Veracruz'],
    color: '#f4c94e',
    lat: 18.8, lng: -96.5
  },
  {
    id: 'norte',
    zona: 'Zona Norte',
    zonaShort: 'Norte',
    nombre: 'Luis F.',
    rol: 'Asesor Académico',
    wa: '5218119905772',
    foto: 'assets/luis.jpg',
    estados: ['Nuevo León', 'Tamaulipas', 'Coahuila', 'Chihuahua', 'Durango', 'Zacatecas'],
    color: '#34d399',
    lat: 25.7, lng: -100.3
  },
  {
    id: 'monterrey2',
    zona: 'Zona Monterrey',
    zonaShort: 'Monterrey',
    nombre: 'Miguel C.',
    rol: 'Asesor Académico',
    wa: '5218116318251',
    estados: ['Nuevo León'],
    color: '#2dd4bf',
    lat: 25.5, lng: -100.0
  },
  {
    id: 'sureste',
    zona: 'Zona Sureste',
    zonaShort: 'Sureste',
    nombre: 'Asesor Sureste',
    rol: 'Asesor Académico',
    wa: '526641234570',
    estados: ['Oaxaca', 'Chiapas', 'Tabasco', 'Campeche', 'Yucatán', 'Quintana Roo'],
    color: '#a3e635',
    lat: 18.0, lng: -90.5
  },
];

const MANAGERS = [
  { nombre: 'Michelle G.',   rol: 'Asesora Académica CDMX',   wa: '5215532239128', foto: 'assets/michelle.jpg' },
  { nombre: 'Marco G.',      rol: 'Gerente Norte',             wa: '5215666689044', foto: 'assets/marco.png' },
  { nombre: 'Manuel R.',     rol: 'Gerente Nacional',          wa: '5215539000043', highlight: true },
];

// Coordenadas por estado
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
let baseMarkers  = [];
let activeMarkers = [];

// Mexico bounding box: SW [13.5, -120.0] → NE [33.5, -85.5]
const MX_BOUNDS = L.latLngBounds([[13.5, -120.0], [33.5, -85.5]]);

function initTeamMap() {
  const el = document.getElementById('team-map');
  if (!el || teamMap) return;

  teamMap = L.map('team-map', {
    zoomControl: false,
    scrollWheelZoom: false,
    attributionControl: false,
    minZoom: 4,
    maxZoom: 9,
    maxBounds: MX_BOUNDS,
    maxBoundsViscosity: 1.0   // ← hard wall, mapa NO escapa del rectángulo
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 9
  }).addTo(teamMap);

  // Place zone markers
  TEAM.forEach(member => {
    const icon = L.divIcon({
      html: `<div class="map-state-dot" style="background:${member.color};box-shadow:0 0 10px ${member.color}99;width:13px;height:13px;"></div>`,
      className: '',
      iconSize: [13, 13],
      iconAnchor: [6, 6]
    });
    const marker = L.marker([member.lat, member.lng], { icon })
      .addTo(teamMap)
      .bindPopup(buildPopupHTML(member, member.zona), { className: 'rp-popup', maxWidth: 220 });
    marker.on('click', () => { highlightCard(member.id); showStateMarkers(member); });
    baseMarkers.push(marker);
  });

  function fixAndFit() {
    teamMap.invalidateSize({ pan: false });
    teamMap.fitBounds(MX_BOUNDS, { padding: [16, 16], animate: false });
  }
  setTimeout(fixAndFit, 80);
  setTimeout(fixAndFit, 400);

  window.addEventListener('resize', () => {
    if (!teamMap) return;
    teamMap.invalidateSize({ pan: false });
    // Re-snap to bounds if user had panned off edge
    if (!MX_BOUNDS.contains(teamMap.getCenter())) {
      teamMap.panInsideBounds(MX_BOUNDS, { animate: true });
    }
  });
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

  // Fit to state markers but NEVER exceed MX_BOUNDS
  if (activeMarkers.length > 0) {
    const group = L.featureGroup(activeMarkers);
    const targetBounds = group.getBounds().pad(0.3);
    // Clamp to MX_BOUNDS
    const safe = MX_BOUNDS.intersects(targetBounds)
      ? targetBounds
      : MX_BOUNDS;
    teamMap.flyToBounds(safe, { duration: 0.7, maxZoom: 7 });
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

// ─── Helpers ──────────────────────────────────────
function getInitials(nombre) {
  return nombre.split(' ')
    .filter(w => w.length > 1)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
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
        Contacta Ahora, con un Click!
      </div>
      <h2 class="team-title">Equipo Richmond Pro <span class="team-heart">💙</span> México</h2>
      <p class="team-sub">Toca sobre un contacto y recibe atención personalizada!</p>
      <div class="team-socials">
        <a href="https://www.instagram.com/richmondproglobal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="team-social-link">
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/></svg>
        </a>
        <a href="https://www.facebook.com/RichmondMx" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="team-social-link">
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/richmond-elt-mexico/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="team-social-link">
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28"><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.6"/><path d="M7 10v7M7 7v.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="https://richmondpro.global/" target="_blank" rel="noopener noreferrer" aria-label="Website" class="team-social-link">
          <svg viewBox="0 0 24 24" fill="none" width="28" height="28"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </a>
      </div>
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
        const initials = getInitials(m.nombre);
        return `
        <div class="team-card" data-id="${m.id}" onclick="onCardClick('${m.id}')">
          <div class="team-card-accent" style="background:${m.color}"></div>
          <div class="team-card-avatar" style="border-color:${m.color}40; background: linear-gradient(135deg, ${m.color}22, ${m.color}44);">
            ${m.foto ? `<img src="${m.foto}" alt="${m.nombre}" loading="lazy"/>` : `<span class="team-card-initial" style="color:${m.color}">${initials}</span>`}
          </div>
          <div class="team-card-info">
            <div class="team-card-zona" style="color:${m.color}">${m.zonaShort}</div>
            <div class="team-card-name">${m.nombre}</div>
            <div class="team-card-rol">${m.rol}</div>
          </div>
          <a
            class="team-card-wa"
            href="https://wa.me/${m.wa}?text=${waText}"
            target="_blank" rel="noopener noreferrer"
            onclick="event.stopPropagation()"
            style="background:${m.color}18; border-color:${m.color}50; color:${m.color}"
          >
            <svg viewBox="0 0 20 20" fill="none" width="14" height="14"><path d="M14 12.5c-.5-.25-2-.98-2.3-1.08-.3-.1-.52-.15-.74.15-.22.3-.85 1.08-1.04 1.3-.19.22-.38.25-.7.08-.32-.17-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.77-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.22.05-.41-.02-.57C5.68 7.16 5.05 5.5 4.8 4.92c-.25-.57-.5-.5-.7-.5-.18 0-.4-.02-.61-.02-.22 0-.57.08-.87.41C2.32 5.14 1.5 5.9 1.5 7.5s1.06 3.18 1.21 3.4c.15.22 2.1 3.2 5.08 4.49 4.5 1.94 4.5 1.29 5.31 1.21.81-.08 2.61-1.07 2.98-2.1.37-1.03.37-1.92.26-2.1-.11-.18-.3-.27-.81-.52z" fill="currentColor"/></svg>
            WA
          </a>
        </div>`;
      }).join('')}
    </div>

    <div class="managers-section">
      <div class="managers-label">Gerencia Richmond Pro México</div>
      <div class="managers-row">
        ${MANAGERS.map(m => {
          const waText = encodeURIComponent(`Hola ${m.nombre}, te contacto desde el portal Richmond Pro 👋`);
          const initials = getInitials(m.nombre);
          return `
          <a class="manager-card ${m.highlight ? 'manager-highlight' : ''}"
            href="https://wa.me/${m.wa}?text=${waText}"
            target="_blank" rel="noopener noreferrer">
            <div class="manager-avatar">
              ${m.foto ? `<img src="${m.foto}" alt="${m.nombre}" loading="lazy"/>` : `<span class="manager-initial">${initials}</span>`}
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

window.TEAM        = TEAM;
window.onCardClick = onCardClick;

document.addEventListener('DOMContentLoaded', renderTeamSection);
