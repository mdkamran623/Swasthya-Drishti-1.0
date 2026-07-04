/**
 * Swasthya-Drishti 1.0 — Application Logic
 * Medical Command Center · Patna District
 * Team MACET
 */

/* ══════════════════════════════════════════════
   TRANSLATIONS
   ══════════════════════════════════════════════ */
const LANG = {
  en: {
    nav_cockpit: 'District Cockpit',
    nav_supply:  'Supply Chain',
    nav_redist:  'Redistribution',
    nav_ai:      'AI Analysis',
    nav_refresh: 'Refresh Data',
    nav_sec1:    'Navigation',
    nav_sec2:    'System',
    status_live: 'System Live',
    live_label:  'LIVE',
    btn_refresh: 'Refresh',
    kpi_critical: 'Critical Centers',
    kpi_beds:     'Bed Occupancy',
    kpi_docs:     'Doctor Attendance',
    kpi_footfall: 'Avg Footfall',
    kpi_ff_sub:   'patients/day · today',
    sh_network:     'Health Center Network',
    sh_network_sub: 'Click center to focus charts',
    sh_footfall:    '30-Day Patient Footfall',
    sh_disease:     'Disease Distribution',
    sh_supply:      'Medicine Stock Intelligence',
    sh_supply_sub:  'Sorted by urgency',
    sh_redist:      'AI Redistribution Plan',
    sh_redist_sub:  'Click Done to execute transfer',
    sh_ai:          'AI District Intelligence',
    sh_ai_sub:      'Gemini 1.5 Flash',
    ai_title:    'Gemini Health Intelligence Engine',
    ai_sub:      'Real-time district analysis · Patna',
    ai_btn:      'Generate AI Analysis',
    ai_loading:  'Analyzing district data…',
    ai_summary:  'Executive Summary',
    ai_actions:  'Critical Actions',
    ai_trend:    'Trend Analysis',
    ai_resource: 'Resource Optimization',
    ai_risk:     '7-Day Risk Forecast',
    al_title:    'Smart Alerts',
    al_loading:  'Loading alerts…',
    al_empty:    '✓ All systems nominal. No active alerts.',
    al_footer:   'Real-time · Auto-refresh 60s',
    th_center: 'Center',
    th_med:    'Medicine',
    th_stock:  'Stock (Units)',
    th_daily:  'Daily Use',
    th_days:   'Days Left',
    th_level:  'Level',
    st_critical: 'CRITICAL',
    st_warning:  'WARNING',
    st_healthy:  'HEALTHY',
    beds:       'Beds',
    docs:       'Doctors',
    transfer:   'Transfer',
    units:      'units',
    from:       'from',
    to:         'to',
    mark_done:  'Mark Done',
    done:       'Done',
  },
  hi: {
    nav_cockpit: 'जिला कॉकपिट',
    nav_supply:  'आपूर्ति श्रृंखला',
    nav_redist:  'पुनर्वितरण',
    nav_ai:      'AI विश्लेषण',
    nav_refresh: 'ताज़ा करें',
    nav_sec1:    'नेविगेशन',
    nav_sec2:    'सिस्टम',
    status_live: 'सिस्टम लाइव',
    live_label:  'लाइव',
    btn_refresh: 'ताज़ा करें',
    kpi_critical: 'गंभीर केंद्र',
    kpi_beds:     'बिस्तर अधिभोग',
    kpi_docs:     'डॉक्टर उपस्थिति',
    kpi_footfall: 'औसत आगंतुक',
    kpi_ff_sub:   'मरीज़/दिन · आज',
    sh_network:     'स्वास्थ्य केंद्र नेटवर्क',
    sh_network_sub: 'चार्ट के लिए क्लिक करें',
    sh_footfall:    '30-दिन मरीज़ आगमन',
    sh_disease:     'रोग वितरण',
    sh_supply:      'दवा स्टॉक इंटेलिजेंस',
    sh_supply_sub:  'तात्कालिकता के अनुसार',
    sh_redist:      'AI पुनर्वितरण योजना',
    sh_redist_sub:  'स्थानांतरण करें',
    sh_ai:          'AI जिला इंटेलिजेंस',
    sh_ai_sub:      'Gemini 1.5 Flash',
    ai_title:    'Gemini स्वास्थ्य इंजन',
    ai_sub:      'वास्तविक-समय विश्लेषण',
    ai_btn:      'AI विश्लेषण उत्पन्न करें',
    ai_loading:  'विश्लेषण हो रहा है…',
    ai_summary:  'कार्यकारी सारांश',
    ai_actions:  'गंभीर कार्रवाइयाँ',
    ai_trend:    'प्रवृत्ति विश्लेषण',
    ai_resource: 'संसाधन अनुकूलन',
    ai_risk:     '7-दिन जोखिम',
    al_title:    'स्मार्ट अलर्ट',
    al_loading:  'लोड हो रहा है…',
    al_empty:    '✓ सभी सिस्टम सामान्य।',
    al_footer:   'वास्तविक-समय · 60 सेकंड',
    th_center: 'केंद्र',
    th_med:    'दवा',
    th_stock:  'स्टॉक',
    th_daily:  'दैनिक उपयोग',
    th_days:   'शेष दिन',
    th_level:  'स्तर',
    st_critical: 'गंभीर',
    st_warning:  'चेतावनी',
    st_healthy:  'स्वस्थ',
    beds:       'बिस्तर',
    docs:       'डॉक्टर',
    transfer:   'स्थानांतरित',
    units:      'इकाइयाँ',
    from:       'से',
    to:         'को',
    mark_done:  'पूर्ण करें',
    done:       'हो गया',
  }
};

/* ══════════════════════════════════════════════
   APP STATE
   ══════════════════════════════════════════════ */
const S = {
  lang:   'en',
  view:   'cockpit',
  data:   null,
  plan:   [],
  ffChart: null,
  ddChart: null,
  timer:   null,
};

/* ══════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════ */

/** Translate a key using current language */
const t = key => (LANG[S.lang] || LANG.en)[key] || key;

/** Apply translations to all data-i18n elements */
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

/** Show a toast notification */
function toast(msg, type = 'success', ms = 3200) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `show ${type}`;
  clearTimeout(el._t);
  el._t = setTimeout(() => (el.className = ''), ms);
}

/** Toggle full-screen loading overlay */
function setLoading(on, txt = '') {
  document.getElementById('lov-txt').textContent = txt || 'Loading…';
  document.getElementById('lov').classList.toggle('hidden', !on);
}

/* ══════════════════════════════════════════════
   CLOCK
   ══════════════════════════════════════════════ */
function startClock() {
  const tbClock = document.getElementById('tb-clock');
  const sbClock = document.getElementById('sb-clock');

  const tick = () => {
    const s = new Date().toLocaleTimeString('en-IN', { hour12: false });
    tbClock.textContent = s;
    sbClock.textContent = s.slice(0, 5);
  };

  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════ */
const VIEW_NAMES = {
  cockpit: 'District Cockpit',
  supply:  'Supply Chain',
  redist:  'Redistribution',
  ai:      'AI Analysis',
};

function nav(view) {
  S.view = view;

  // Sidebar items
  document.querySelectorAll('[data-view]').forEach(n =>
    n.classList.toggle('active', n.dataset.view === view)
  );

  // View panels
  document.querySelectorAll('.view').forEach(v =>
    v.classList.toggle('active', v.id === `view-${view}`)
  );

  // Bottom nav
  document.querySelectorAll('.bn-item').forEach(b =>
    b.classList.toggle('active', b.dataset.bnview === view)
  );

  // Topbar breadcrumb
  document.getElementById('tb-view-name').textContent =
    t(`nav_${view}`) || VIEW_NAMES[view] || view;
}

/* ══════════════════════════════════════════════
   DATA FETCH
   ══════════════════════════════════════════════ */
async function load(silent = false) {
  if (!silent) setLoading(true, 'Fetching live health data…');
  try {
    const r = await fetch('/api/centers');
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    S.data = await r.json();
    S.plan = S.data.redistribution_plan || [];
    renderAll();
    if (!silent) toast('Data refreshed successfully ✓');
  } catch (e) {
    toast('Error: ' + e.message, 'error');
  } finally {
    setLoading(false);
  }
}

/* ══════════════════════════════════════════════
   RENDER — MASTER
   ══════════════════════════════════════════════ */
function renderAll() {
  if (!S.data) return;
  renderKPIs();
  renderNetwork();
  renderCharts();
  renderAlerts();
  renderSupply();
  renderRedist();
  updateChip();
}

/* ══════════════════════════════════════════════
   RENDER — KPIs
   ══════════════════════════════════════════════ */
function renderKPIs() {
  const d = S.data.district_stats;

  document.getElementById('kv-crit').textContent = d.critical_centers;
  document.getElementById('ks-crit').textContent =
    `${d.warning_centers} warning · ${d.healthy_centers} healthy`;

  document.getElementById('kv-beds').textContent = `${d.bed_occupancy_pct}%`;
  document.getElementById('ks-beds').textContent =
    `${d.occupied_beds} / ${d.total_beds} beds`;

  document.getElementById('kv-docs').textContent = `${d.doctor_attendance_pct}%`;
  document.getElementById('ks-docs').textContent =
    `${d.present_doctors} / ${d.total_doctors} present`;

  document.getElementById('kv-ff').textContent = d.avg_daily_footfall;

  // Mini progress bars
  setTimeout(() => {
    const bedBar = document.getElementById('kpi-bar-beds');
    const docBar = document.getElementById('kpi-bar-docs');
    if (bedBar) bedBar.style.width = Math.min(d.bed_occupancy_pct, 100) + '%';
    if (docBar) docBar.style.width = d.doctor_attendance_pct + '%';
  }, 200);

  // Watermark icons
  const icons = { 'kpi-crit': '🚨', 'kpi-beds': '🛏', 'kpi-docs': '👨‍⚕️', 'kpi-ff': '👥' };
  Object.entries(icons).forEach(([id, ico]) => {
    const el = document.querySelector(`#${id} .kpi-trend-bg`);
    if (el) el.textContent = ico;
  });

  // KPI click → drawer
  document.querySelectorAll('.kpi-clickable').forEach(card => {
    card.onclick = () => openKpiDrawer(card.dataset.kpi, card);
  });

  // Render district summary bar
  renderDistrictBar(d);
}

/* ══════════════════════════════════════════════
   KPI DRAWER
   ══════════════════════════════════════════════ */
function openKpiDrawer(type, card) {
  const drawer      = document.getElementById('kpi-drawer');
  const drawerInner = document.getElementById('kpi-drawer-inner');
  const centers     = S.data.centers;

  // Toggle off if same card clicked again
  const isOpen = drawer.classList.contains('open');
  const lastType = drawer.dataset.type;
  document.querySelectorAll('.kpi-clickable').forEach(c => c.classList.remove('kpi-active'));

  if (isOpen && lastType === type) {
    drawer.classList.remove('open');
    drawer.dataset.type = '';
    return;
  }

  drawer.dataset.type = type;
  card.classList.add('kpi-active');

  let html = '';

  if (type === 'critical') {
    html = `
      <div class="drawer-hd">
        <div class="drawer-title">🚨 Centers by Status</div>
        <button class="drawer-close" onclick="closeKpiDrawer()">✕</button>
      </div>
      <div class="drawer-body">
        ${centers.map((c, i) => {
          const color = c.status === 'critical' ? 'var(--red2)' : c.status === 'warning' ? 'var(--amber2)' : 'var(--green2)';
          const pct   = Math.round(c.beds.occupied / c.beds.total * 100);
          return `
            <div class="drawer-row">
              <div class="drawer-row-rank">${i+1}</div>
              <div style="flex:1;min-width:0">
                <div class="drawer-row-name">${c.name}</div>
                <div class="drawer-row-sub">${c.type} · ${c.block}</div>
              </div>
              <div class="drawer-row-bar-wrap">
                <div class="drawer-row-bar-track">
                  <div class="drawer-row-bar-fill" style="width:${pct}%;background:${color}"></div>
                </div>
              </div>
              <div class="drawer-row-val">${pct}%</div>
              <div class="drawer-row-badge ${c.status}">${t('st_'+c.status)}</div>
            </div>`;
        }).join('')}
      </div>`;

  } else if (type === 'beds') {
    const sorted = [...centers].sort((a,b) =>
      (b.beds.occupied/b.beds.total) - (a.beds.occupied/a.beds.total));
    html = `
      <div class="drawer-hd">
        <div class="drawer-title">🛏 Bed Occupancy — All Centers</div>
        <button class="drawer-close" onclick="closeKpiDrawer()">✕</button>
      </div>
      <div class="drawer-body">
        ${sorted.map((c, i) => {
          const pct   = Math.round(c.beds.occupied / c.beds.total * 100);
          const color = pct >= 100 ? 'var(--red2)' : pct >= 85 ? 'var(--amber2)' : 'var(--green2)';
          const badge = pct >= 100 ? 'critical' : pct >= 85 ? 'warning' : 'healthy';
          return `
            <div class="drawer-row">
              <div class="drawer-row-rank">${i+1}</div>
              <div style="flex:1;min-width:0">
                <div class="drawer-row-name">${c.name}</div>
                <div class="drawer-row-sub">${c.beds.occupied} occupied / ${c.beds.total} total beds</div>
              </div>
              <div class="drawer-row-bar-wrap">
                <div class="drawer-row-bar-track">
                  <div class="drawer-row-bar-fill" style="width:${Math.min(pct,100)}%;background:${color}"></div>
                </div>
              </div>
              <div class="drawer-row-val">${pct}%</div>
              <div class="drawer-row-badge ${badge}">${pct >= 100 ? 'FULL' : pct+'%'}</div>
            </div>`;
        }).join('')}
      </div>`;

  } else if (type === 'docs') {
    const sorted = [...centers].sort((a,b) =>
      (a.doctors.present/a.doctors.total) - (b.doctors.present/b.doctors.total));
    html = `
      <div class="drawer-hd">
        <div class="drawer-title">👨‍⚕️ Doctor Attendance — All Centers</div>
        <button class="drawer-close" onclick="closeKpiDrawer()">✕</button>
      </div>
      <div class="drawer-body">
        ${sorted.map((c, i) => {
          const pct   = Math.round(c.doctors.present / c.doctors.total * 100);
          const absent = c.doctors.total - c.doctors.present;
          const color = pct < 50 ? 'var(--red2)' : pct < 70 ? 'var(--amber2)' : 'var(--green2)';
          const badge = pct < 50 ? 'critical' : pct < 70 ? 'warning' : 'healthy';
          return `
            <div class="drawer-row">
              <div class="drawer-row-rank">${i+1}</div>
              <div style="flex:1;min-width:0">
                <div class="drawer-row-name">${c.name}</div>
                <div class="drawer-row-sub">${c.doctors.present}/${c.doctors.total} present · ${absent} absent</div>
              </div>
              <div class="drawer-row-bar-wrap">
                <div class="drawer-row-bar-track">
                  <div class="drawer-row-bar-fill" style="width:${pct}%;background:${color}"></div>
                </div>
              </div>
              <div class="drawer-row-val">${pct}%</div>
              <div class="drawer-row-badge ${badge}">${pct}%</div>
            </div>`;
        }).join('')}
      </div>`;

  } else if (type === 'footfall') {
    const sorted = [...centers].sort((a,b) => b.footfall_30d[29] - a.footfall_30d[29]);
    const max = Math.max(...centers.map(c => c.footfall_30d[29]));
    html = `
      <div class="drawer-hd">
        <div class="drawer-title">👥 Today's Footfall — All Centers</div>
        <button class="drawer-close" onclick="closeKpiDrawer()">✕</button>
      </div>
      <div class="drawer-body">
        ${sorted.map((c, i) => {
          const today = c.footfall_30d[29];
          const avg   = Math.round(c.footfall_30d.reduce((a,b)=>a+b,0)/30);
          const pct   = Math.round(today / max * 100);
          return `
            <div class="drawer-row">
              <div class="drawer-row-rank">${i+1}</div>
              <div style="flex:1;min-width:0">
                <div class="drawer-row-name">${c.name}</div>
                <div class="drawer-row-sub">30-day avg: ${avg} · Today: ${today}</div>
              </div>
              <div class="drawer-row-bar-wrap">
                <div class="drawer-row-bar-track">
                  <div class="drawer-row-bar-fill" style="width:${pct}%;background:var(--green2)"></div>
                </div>
              </div>
              <div class="drawer-row-val">${today}</div>
              <div class="drawer-row-badge healthy">+${Math.round((today-avg)/avg*100)}%</div>
            </div>`;
        }).join('')}
      </div>`;
  }

  drawerInner.innerHTML = html;
  drawer.classList.add('open');
  setTimeout(() => drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}

function closeKpiDrawer() {
  document.getElementById('kpi-drawer').classList.remove('open');
  document.getElementById('kpi-drawer').dataset.type = '';
  document.querySelectorAll('.kpi-clickable').forEach(c => c.classList.remove('kpi-active'));
}
window.closeKpiDrawer = closeKpiDrawer;

/* ══════════════════════════════════════════════
   DISTRICT SUMMARY BAR
   ══════════════════════════════════════════════ */
function renderDistrictBar(d) {
  const el = document.getElementById('district-bar');
  if (!el) return;
  const items = [
    { val: d.critical_centers,       label: 'Critical',   bar: Math.round(d.critical_centers/5*100), color: 'var(--red2)'   },
    { val: `${d.bed_occupancy_pct}%`, label: 'Bed Load',  bar: Math.min(d.bed_occupancy_pct, 100),   color: 'var(--amber2)' },
    { val: `${d.doctor_attendance_pct}%`, label: 'Doctors', bar: d.doctor_attendance_pct,            color: 'var(--blue3)'  },
    { val: d.avg_daily_footfall,      label: 'Footfall',   bar: Math.min(Math.round(d.avg_daily_footfall/500*100), 100), color: 'var(--green2)' },
    { val: d.osm_total_facilities || '—', label: 'OSM Facilities', bar: 100, color: 'var(--blue)' },
  ];
  el.innerHTML = items.map(item => `
    <div class="db-item">
      <div class="db-val">${item.val}</div>
      <div class="db-label">${item.label}</div>
      <div class="db-bar-wrap">
        <div class="db-bar-fill" style="width:0%;background:${item.color}" data-w="${item.bar}"></div>
      </div>
    </div>`).join('');
  // animate bars
  setTimeout(() => {
    el.querySelectorAll('.db-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
  }, 200);
}

/* ══════════════════════════════════════════════
   RENDER — NETWORK CARDS
   ══════════════════════════════════════════════ */
function renderNetwork() {
  const grid = document.getElementById('net-grid');
  grid.innerHTML = '';

  S.data.centers.forEach(c => {
    const critMeds = Object.entries(c.medicines)
      .filter(([, d]) => d.status === 'critical')
      .map(([m]) => m)
      .join(', ');

    const el = document.createElement('div');
    el.className = `cnode ${c.status}`;
    el.dataset.cid = c.id;

    el.innerHTML = `
      <div class="radar">
        <div class="rdot"></div>
        <div class="rring"></div>
        <div class="rring"></div>
      </div>
      <div class="cn-badge ${c.type.toLowerCase()}">${c.type}</div>
      <div class="cn-name">${c.name}</div>
      <div class="cn-stats">
        <div class="cn-pill">${t('beds')} <strong>${c.beds.occupied}/${c.beds.total}</strong></div>
        <div class="cn-pill">${t('docs')} <strong>${c.doctors.present}/${c.doctors.total}</strong></div>
        <div class="cn-status ${c.status}">${t('st_' + c.status)}</div>
      </div>
      ${critMeds ? `<div class="cn-crit">⚠ ${critMeds}</div>` : ''}
    `;

    el.addEventListener('click', () => {
      document.querySelectorAll('.cnode').forEach(n => n.classList.remove('focused'));
      el.classList.add('focused');
      updateFF(c.footfall_30d, c.name);
      updateDD(c.disease_distribution, c.name);
      document.getElementById('ff-lbl').textContent = c.name;
      document.getElementById('dd-lbl').textContent = c.name;
    });

    grid.appendChild(el);
  });
}

/* ══════════════════════════════════════════════
   CHART HELPERS
   ══════════════════════════════════════════════ */
function buildFFData(data, label) {
  const today  = new Date();
  const labels = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (29 - i));
    return `${d.getDate()}/${d.getMonth() + 1}`;
  });
  const dark = isDarkMode();
  const lineColor = dark ? '#2ecc82' : '#1565c0';
  const fillColor = dark ? 'rgba(46,204,130,0.08)' : 'rgba(21,101,192,0.07)';

  return {
    labels,
    datasets: [{
      label,
      data,
      borderColor:               lineColor,
      backgroundColor:           fillColor,
      fill:                      true,
      tension:                   0.42,
      pointRadius:               0,
      pointHoverRadius:          5,
      pointHoverBackgroundColor: lineColor,
      borderWidth:               2.5,
    }],
  };
}

const DD_PALETTE = ['#ef5350', '#ff7043', '#42a5f5', '#9c27b0', '#26a69a', '#ffa726'];

function buildDDData(dist) {
  return {
    labels: Object.keys(dist),
    datasets: [{
      data:             Object.values(dist),
      backgroundColor:  DD_PALETTE.map(x => x + '28'),
      borderColor:      DD_PALETTE,
      borderWidth:      2.5,
      hoverBorderWidth: 4,
      hoverOffset:      8,
    }],
  };
}

function renderDiseaseLegend(dist) {
  const el = document.getElementById('disease-legend');
  if (!el) return;
  const labels = Object.keys(dist);
  el.innerHTML = labels.map((label, i) => `
    <div class="dl-item">
      <div class="dl-dot" style="background:${DD_PALETTE[i % DD_PALETTE.length]}"></div>
      ${label}
    </div>`).join('');
}

function isDarkMode() {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

function getAxisScale() {
  const dark = isDarkMode();
  return {
    grid:   { color: dark ? 'rgba(46,204,130,0.06)' : 'rgba(0,0,0,0.04)', drawBorder: false },
    ticks:  { color: dark ? '#5a7390' : '#7a94aa', font: { size: 10 }, maxTicksLimit: 7 },
    border: { color: 'transparent' },
  };
}

function getTooltip() {
  const dark = isDarkMode();
  return {
    backgroundColor: dark ? '#111827' : '#0d1b2a',
    borderColor:     dark ? 'rgba(46,204,130,0.15)' : 'rgba(0,0,0,0.1)',
    borderWidth:     1,
    titleColor:      dark ? '#e8f0fe' : '#ffffff',
    bodyColor:       dark ? '#9ab0cc' : '#90a8c8',
    padding:         10,
    cornerRadius:    8,
  };
}

/* ══════════════════════════════════════════════
   RENDER — CHARTS
   ══════════════════════════════════════════════ */
function renderCharts() {
  const aggFF = Array(30).fill(0);
  S.data.centers.forEach(c =>
    c.footfall_30d.forEach((v, i) => (aggFF[i] += v))
  );

  const aggDD = {};
  S.data.centers.forEach(c =>
    Object.entries(c.disease_distribution).forEach(([k, v]) =>
      (aggDD[k] = (aggDD[k] || 0) + v)
    )
  );

  renderDiseaseLegend(aggDD);
  renderFFStats(aggFF, 'All Centers');

  const BASE_OPTS = {
    responsive:          true,
    maintainAspectRatio: false,
    animation:           { duration: 800, easing: 'easeInOutQuart' },
    plugins:             { legend: { display: false } },
  };

  const axisScale = getAxisScale();
  const tooltip   = getTooltip();
  const dark = isDarkMode();

  if (S.ffChart) {
    S.ffChart.data = buildFFData(aggFF, 'District');
    S.ffChart.options.scales.x.grid.color  = axisScale.grid.color;
    S.ffChart.options.scales.y.grid.color  = axisScale.grid.color;
    S.ffChart.options.scales.x.ticks.color = axisScale.ticks.color;
    S.ffChart.options.scales.y.ticks.color = axisScale.ticks.color;
    S.ffChart.update('active');
  } else {
    S.ffChart = new Chart(document.getElementById('ff-chart'), {
      type: 'line',
      data: buildFFData(aggFF, 'District'),
      options: {
        ...BASE_OPTS,
        scales:  { x: axisScale, y: axisScale },
        plugins: {
          ...BASE_OPTS.plugins,
          tooltip,
        },
      },
    });
  }

  // Disease doughnut chart
  const legendColor = dark ? '#9ab0cc' : '#3d5a80';
  if (S.ddChart) {
    S.ddChart.data = buildDDData(aggDD);
    S.ddChart.options.plugins.legend.labels.color = legendColor;
    S.ddChart.update('active');
  } else {
    S.ddChart = new Chart(document.getElementById('dd-chart'), {
      type: 'doughnut',
      data: buildDDData(aggDD),
      options: {
        ...BASE_OPTS,
        cutout: '60%',
        plugins: {
          legend: {
            display:  true,
            position: 'right',
            labels: {
              color:    legendColor,
              font:     { size: 10 },
              padding:  10,
              boxWidth: 10,
            },
          },
          tooltip: {
            ...tooltip,
            callbacks: {
              label: ctx => ` ${ctx.label}: ${ctx.parsed}`,
            },
          },
        },
      },
    });
  }
}

/** Update footfall chart for a single center */
function updateFF(data, label) {
  if (!S.ffChart) return;
  S.ffChart.data = buildFFData(data, label);
  S.ffChart.update('active');
  renderFFStats(data, label);
}

/** Update disease chart for a single center */
function updateDD(data, label) {
  if (!S.ddChart) return;
  S.ddChart.data = buildDDData(data);
  document.getElementById('dd-lbl').textContent = label || 'District';
  renderDiseaseLegend(data);
  S.ddChart.update('active');
}

/** Render footfall summary stats above chart */
function renderFFStats(data, label) {
  const el = document.getElementById('ff-stats');
  if (!el || !data.length) return;
  const total = data.reduce((a, b) => a + b, 0);
  const avg   = Math.round(total / data.length);
  const max   = Math.max(...data);
  const today = data[data.length - 1];
  const trend = today >= avg ? `↑ +${Math.round((today-avg)/avg*100)}%` : `↓ ${Math.round((today-avg)/avg*100)}%`;
  const trendColor = today >= avg ? 'var(--green)' : 'var(--red)';
  el.innerHTML = `
    <div class="chart-stat"><div class="chart-stat-dot" style="background:#1565c0"></div>Today <strong>${today}</strong></div>
    <div class="chart-stat"><div class="chart-stat-dot" style="background:#42a5f5"></div>30-Day Avg <strong>${avg}</strong></div>
    <div class="chart-stat"><div class="chart-stat-dot" style="background:#26a69a"></div>Peak <strong>${max}</strong></div>
    <div class="chart-stat"><span style="color:${trendColor};font-weight:700">${trend}</span> vs avg</div>
  `;
}

/** Chart type toggle (line / bar) */
function initChartToggle() {
  document.querySelectorAll('[data-chart-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-chart-mode]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.chartMode;
      if (S.ffChart) {
        S.ffChart.config.type = mode;
        const dark = isDarkMode();
        if (mode === 'bar') {
          S.ffChart.data.datasets[0].backgroundColor = dark
            ? 'rgba(46,204,130,0.45)'
            : 'rgba(21,101,192,0.55)';
          S.ffChart.data.datasets[0].borderColor = dark ? '#2ecc82' : '#1565c0';
          S.ffChart.data.datasets[0].borderRadius = 4;
          S.ffChart.data.datasets[0].fill         = false;
        } else {
          S.ffChart.data.datasets[0].backgroundColor = dark
            ? 'rgba(46,204,130,0.08)'
            : 'rgba(21,101,192,0.07)';
          S.ffChart.data.datasets[0].borderColor = dark ? '#2ecc82' : '#1565c0';
          S.ffChart.data.datasets[0].fill         = true;
        }
        S.ffChart.update();
      }
    });
  });
}

/* ══════════════════════════════════════════════
   RENDER — ALERTS
   ══════════════════════════════════════════════ */
function renderAlerts() {
  const alerts = S.data.alerts || [];
  document.getElementById('al-count').textContent = alerts.length;

  const list = document.getElementById('al-list');

  if (!alerts.length) {
    list.innerHTML = `<div class="al-empty">${t('al_empty')}</div>`;
    return;
  }

  list.innerHTML = alerts.map(a => `
    <div class="al-item">
      <div class="al-level ${a.level}">
        <div class="al-ldot"></div>
        ${a.level === 'critical' ? t('st_critical') : t('st_warning')}
      </div>
      <div class="al-center">${a.center}</div>
      <div class="al-msg">${a.message}</div>
      <div class="al-time">${a.time || ''}</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════
   RENDER — SUPPLY TABLE
   ══════════════════════════════════════════════ */
function renderSupply() {
  const rows = [];
  S.data.centers.forEach(c =>
    Object.entries(c.medicines).forEach(([m, d]) =>
      rows.push({ center: c.name, med: m, ...d })
    )
  );

  // Sort: critical → warning → healthy, then by days_remaining
  const ORDER = { critical: 0, warning: 1, healthy: 2 };
  rows.sort((a, b) =>
    ORDER[a.status] - ORDER[b.status] || a.days_remaining - b.days_remaining
  );

  document.getElementById('supply-tbody').innerHTML = rows.map(r => {
    const pct = r.days_remaining === Infinity
      ? 100
      : Math.min(100, (r.days_remaining / 30) * 100);

    const barColor =
      r.status === 'critical' ? 'var(--red2)'   :
      r.status === 'warning'  ? 'var(--amber2)' :
                                 'var(--green2)';

    return `
      <tr>
        <td>${r.center}</td>
        <td>${r.med}</td>
        <td style="font-family:var(--mono)">${r.stock}</td>
        <td style="font-family:var(--mono)">${r.daily_consumption}/day</td>
        <td>
          <span class="pill ${r.status}">
            ${r.days_remaining === Infinity ? '∞' : r.days_remaining}d
          </span>
        </td>
        <td>
          <div class="bar-cell">
            <div class="bar-track">
              <div class="bar-fill" style="width:${pct.toFixed(0)}%;background:${barColor}"></div>
            </div>
            <div class="bar-pct">${pct.toFixed(0)}%</div>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/* ══════════════════════════════════════════════
   UPDATE SUPPLY CHIP (sidebar badge)
   ══════════════════════════════════════════════ */
function updateChip() {
  let n = 0;
  S.data.centers.forEach(c =>
    Object.values(c.medicines).forEach(d => {
      if (d.status === 'critical') n++;
    })
  );
  const chip = document.getElementById('supply-chip');
  chip.textContent = n;
  chip.style.display = n > 0 ? 'flex' : 'none';
}

/* ══════════════════════════════════════════════
   RENDER — REDISTRIBUTION PLAN
   ══════════════════════════════════════════════ */
function renderRedist() {
  const el = document.getElementById('redist-list');

  if (!S.plan.length) {
    el.innerHTML = `
      <div style="padding:32px;text-align:center;color:var(--t3);font-size:13px;line-height:1.7">
        ✅ All stocks balanced.<br>No transfers required.
      </div>
    `;
    return;
  }

  el.innerHTML = S.plan.map(r => `
    <div class="ri ${r.done ? 'done' : ''}" id="ri-${r.id}">
      <div class="ri-stripe ${r.done ? 'done-s' : 'critical'}"></div>
      <div class="ri-body">
        <div class="ri-title">
          ${t('transfer')} <strong>${r.units} ${t('units')}</strong>
          of <strong>${r.medicine}</strong>
        </div>
        <div class="ri-meta">
          <span>${r.from_center}</span>
          <span class="ri-arrow">→</span>
          <span>${r.to_center}</span>
          ${r.done ? `<span style="color:var(--green)">· ✓ ${t('done')}</span>` : ''}
        </div>
      </div>
      ${r.done
        ? `<div class="ri-done-tag">✓ ${t('done')}</div>`
        : `<button class="ri-btn" onclick="markDone('${r.id}')">${t('mark_done')}</button>`
      }
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════
   MARK TRANSFER DONE
   ══════════════════════════════════════════════ */
async function markDone(id) {
  const btn = document.querySelector(`#ri-${id} .ri-btn`);
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spin"></span>';
  }

  try {
    const r = await fetch('/api/process-action', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ action_id: id }),
    });
    const d = await r.json();

    if (d.success) {
      toast(d.message);
      await load(true);
    } else {
      toast(d.error || 'Failed', 'error');
      if (btn) { btn.disabled = false; btn.textContent = t('mark_done'); }
    }
  } catch (e) {
    toast('Error: ' + e.message, 'error');
    if (btn) { btn.disabled = false; btn.textContent = t('mark_done'); }
  }
}

// Expose markDone globally for inline onclick handlers
window.markDone = markDone;

/* ══════════════════════════════════════════════
   AI ANALYSIS
   ══════════════════════════════════════════════ */
async function runAI() {
  const btn = document.getElementById('ai-btn');
  const ico = document.getElementById('ai-ico');
  const txt = document.getElementById('ai-txt');
  const res = document.getElementById('ai-result');

  btn.classList.add('loading');
  ico.innerHTML = '<span class="spin"></span>';
  txt.textContent = t('ai_loading');
  res.style.display = 'none';

  try {
    const r = await fetch('/api/ai-analyze', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const d = await r.json();
    if (!d.success) throw new Error(d.error || 'AI error');

    const a = d.analysis;

    document.getElementById('ai-summary').textContent  = a.executive_summary || '—';
    document.getElementById('ai-actions').innerHTML    =
      (a.critical_actions || []).map(x => `<li>${x}</li>`).join('') ||
      '<li>No critical actions identified.</li>';
    document.getElementById('ai-trend').textContent    = a.trend_analysis || '—';
    document.getElementById('ai-resource').textContent = a.resource_optimization || '—';
    document.getElementById('ai-risk').textContent     = a.risk_forecast || '—';

    const source = d.source === 'gemini'
      ? 'Gemini 1.5 Flash (Live API)'
      : 'Mock Intelligence Engine';
    document.getElementById('ai-src').textContent =
      `Source: ${source} · ${new Date().toLocaleTimeString('en-IN')}`;

    res.style.display = 'block';
    res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  } catch (e) {
    toast('AI Error: ' + e.message, 'error');
  } finally {
    btn.classList.remove('loading');
    ico.textContent  = '⚡';
    txt.textContent  = t('ai_btn');
  }
}

/* ══════════════════════════════════════════════
   MOBILE SIDEBAR (Hamburger)
   ══════════════════════════════════════════════ */
function initMobileSidebar() {
  const ham = document.getElementById('ham-btn');
  const sb  = document.getElementById('sidebar');
  const ov  = document.getElementById('sb-overlay');

  function openSidebar() {
    sb.classList.add('mob-open');
    ov.classList.add('active');
    ham.textContent = '✕';
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sb.classList.remove('mob-open');
    ov.classList.remove('active');
    ham.textContent = '☰';
    document.body.style.overflow = '';
  }

  ham.addEventListener('click', () =>
    sb.classList.contains('mob-open') ? closeSidebar() : openSidebar()
  );

  ov.addEventListener('click', closeSidebar);

  // Close on nav item click (mobile)
  document.querySelectorAll('[data-view]').forEach(n =>
    n.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeSidebar();
    })
  );
}

/* ══════════════════════════════════════════════
   LANGUAGE SWITCHER
   ══════════════════════════════════════════════ */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.addEventListener('click', () => {
      S.lang = b.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(x =>
        x.classList.toggle('active', x === b)
      );
      applyLang();
      if (S.data) renderAll();
    })
  );
}

/* ══════════════════════════════════════════════
   KEYBOARD SHORTCUTS
   ══════════════════════════════════════════════ */
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.altKey) {
      const map = { '1': 'cockpit', '2': 'supply', '3': 'redist', '4': 'ai' };
      if (map[e.key]) { e.preventDefault(); nav(map[e.key]); }
    }
    if (e.key === 'r' && e.altKey) { e.preventDefault(); load(false); }
    // Alt+D = toggle dark mode
    if (e.key === 'd' && e.altKey) { e.preventDefault(); toggleTheme(); }
  });
}

/* ══════════════════════════════════════════════
   THEME TOGGLE (Dark / Light)
   ══════════════════════════════════════════════ */
function applyTheme(dark) {
  const html = document.documentElement;
  if (dark) {
    html.setAttribute('data-theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
  }
  // Re-render charts with correct colors if data is loaded
  if (S.data) {
    const isDark = dark;
    const gridColor  = isDark ? 'rgba(46,204,130,0.06)' : 'rgba(0,0,0,0.06)';
    const tickColor  = isDark ? '#5a7390'                : '#9baebf';
    const tooltipBg  = isDark ? '#111827'                : '#1f2935';
    // Update all active Chart.js defaults
    Chart.defaults.color           = isDark ? '#9ab0cc' : '#7a8a9d';
    Chart.defaults.borderColor     = gridColor;
    if (S.ffChart) {
      S.ffChart.options.scales.x.grid.color  = gridColor;
      S.ffChart.options.scales.y.grid.color  = gridColor;
      S.ffChart.options.scales.x.ticks.color = tickColor;
      S.ffChart.options.scales.y.ticks.color = tickColor;
      S.ffChart.options.plugins.tooltip.backgroundColor = tooltipBg;
      S.ffChart.update('none');
    }
    if (S.ddChart) {
      S.ddChart.options.plugins.tooltip.backgroundColor = tooltipBg;
      S.ddChart.update('none');
    }
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next   = !isDark;
  localStorage.setItem('sd-theme', next ? 'dark' : 'light');
  applyTheme(next);
}

function initThemeToggle() {
  // Restore saved preference
  const saved = localStorage.getItem('sd-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const startDark = saved ? (saved === 'dark') : prefersDark;
  if (startDark) applyTheme(true);

  // Button click
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Listen for OS theme changes (when no manual pref)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('sd-theme')) applyTheme(e.matches);
  });
}

/* ══════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════ */
function boot() {
  startClock();
  applyLang();

  // Sidebar nav items
  document.querySelectorAll('[data-view]').forEach(n =>
    n.addEventListener('click', () => nav(n.dataset.view))
  );

  // Bottom nav
  document.querySelectorAll('[data-bnview]').forEach(btn =>
    btn.addEventListener('click', () => nav(btn.dataset.bnview))
  );

  // Refresh buttons
  document.getElementById('tb-ref').addEventListener('click',  () => load(false));
  document.getElementById('nav-ref').addEventListener('click', () => load(false));

  // AI button
  document.getElementById('ai-btn').addEventListener('click', runAI);

  // Mobile sidebar
  initMobileSidebar();

  // Language switcher
  initLangSwitcher();

  // Keyboard shortcuts
  initKeyboard();

  // Chart type toggle
  initChartToggle();

  // Theme toggle
  initThemeToggle();

  // Initial data load
  load(false);

  // Auto-refresh every 60 seconds
  S.timer = setInterval(() => load(true), 60_000);
}

document.addEventListener('DOMContentLoaded', boot);
