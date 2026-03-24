/* --- MOTOR DE BÚSQUEDA Y DICCIONARIO (65 CONCEPTOS) --- */
const conceptos = [
    {id: 'tin', n: 'TIN'}, {id: 'tae', n: 'TAE'}, {id: 'euribor', n: 'Euríbor'},
    {id: 'inflacion', n: 'Inflación'}, {id: 'interes-compuesto', n: 'Interés Compuesto'},
    {id: 'dca', n: 'DCA (Dollar Cost Averaging)'}, {id: 'per', n: 'PER'}, {id: 'etf', n: 'ETF'},
    {id: 'broker', n: 'Bróker'}, {id: 'fire', n: 'FIRE'}, {id: 'liquidez', n: 'Liquidez'},
    {id: 'apalancamiento', n: 'Apalancamiento'}, {id: 'volatilidad', n: 'Volatilidad'},
    {id: 'pib', n: 'PIB'}, {id: 'irpf', n: 'IRPF'}, {id: 'cisne-negro', n: 'Cisne Negro'},
    {id: 'hodl', n: 'HODL'}, {id: 'blockchain', n: 'Blockchain'}, {id: 'amortizacion', n: 'Amortización'},
    {id: 'recision', n: 'Recesión'}, {id: 'estanflacion', n: 'Estanflación'},
    {id: 'coste-oportunidad', n: 'Coste Oportunidad'}, {id: 'fgd', n: 'FGD'},
    {id: 'spread', n: 'Spread'}, {id: 'kyc', n: 'KYC'}, {id: 'slippage', n: 'Slippage'},
    {id: 'renta-fija', n: 'Renta Fija'}, {id: 'renta-variable', n: 'Renta Variable'},
    {id: 'bull-market', n: 'Bull Market'}, {id: 'bear-market', n: 'Bear Market'},
    {id: 'capitalizacion', n: 'Capitalización'}, {id: 'dividendo', n: 'Dividendo'},
    {id: 'tin', n: 'TIN (Interés Nominal)'},
    {id: 'tae', n: 'TAE (Tasa Real)'},
    {id: 'euribor', n: 'Euríbor'},
    {id: 'inflacion', n: 'Inflación'},
    {id: 'interes-compuesto', n: 'Interés Compuesto'},
    {id: 'dca', n: 'DCA (Dollar Cost Averaging)'},
    {id: 'per', n: 'PER (Price Earnings Ratio)'},
    {id: 'etf', n: 'ETF (Fondos Cotizados)'},
    {id: 'broker', n: 'Bróker'},
    {id: 'fire', n: 'FIRE (Independencia)'},
    {id: 'liquidez', n: 'Liquidez'},
    {id: 'apalancamiento', n: 'Apalancamiento'},
    {id: 'volatilidad', n: 'Volatilidad'},
    {id: 'pib', n: 'PIB (Crecimiento)'},
    {id: 'irpf', n: 'IRPF (Impuestos)'},
    {id: 'cisne-negro', n: 'Cisne Negro'},
    {id: 'hodl', n: 'HODL'},
    {id: 'blockchain', n: 'Blockchain'},
    {id: 'amortizacion', n: 'Amortización'},
    {id: 'recision', n: 'Recesión'},
    {id: 'estanflacion', n: 'Estanflación'},
    {id: 'coste-oportunidad', n: 'Coste Oportunidad'},
    {id: 'fgd', n: 'FGD (Garantía Bancaria)'},
    {id: 'spread', n: 'Spread'},
    {id: 'kyc', n: 'KYC'},
    {id: 'slippage', n: 'Slippage'},
    {id: 'renta-fija', n: 'Renta Fija'},
    {id: 'renta-variable', n: 'Renta Variable'},
    {id: 'bull-market', n: 'Bull Market'},
    {id: 'bear-market', n: 'Bear Market'},
    {id: 'capitalizacion', n: 'Capitalización'},
    {id: 'dividendo', n: 'Dividendo'},
    {id: 'reits', n: 'REITs / SOCIMIs'},
    {id: 'small-caps', n: 'Small Caps'},
    {id: 'blue-chips', n: 'Blue Chips'},
    {id: 'dividend-yield', n: 'Dividend Yield'},
    {id: 'ltv', n: 'LTV (Préstamo/Valor)'},
    {id: 'fomo', n: 'FOMO'},
    {id: 'halving', n: 'Halving Bitcoin'},
    {id: 'stablecoins', n: 'Stablecoins'},
    {id: 'capital-gains', n: 'Ganancias de Capital'},
    {id: 'doble-imposicion', n: 'Doble Imposición'},
    {id: 'pensiones', n: 'Planes de Pensiones'},
    {id: 'coste-hundido', n: 'Coste Hundido'},
    {id: 'margin-call', n: 'Margin Call'},
    {id: 'interes-demora', n: 'Interés de Demora'},
    {id: 'base-imponible', n: 'Base Imponible'},
    {id: 'rating', n: 'Rating Financiero'},
    {id: 'short-selling', n: 'Venta en Corto'},
    {id: 'market-maker', n: 'Market Maker'},
    {id: 'deflacion', n: 'Deflación'},
    {id: 'paraiso-fiscal', n: 'Paraíso Fiscal'},
	{id: 'ter', n: 'TER (Costes Totales)'},
	{id: 'nav', n: 'Valor Liquidativo (NAV)'},
	{id: 'ipc', n: 'IPC (Cesta de la compra)'},
	{id: 'prima-riesgo', n: 'Prima de Riesgo'},
	{id: 'activo-refugio', n: 'Activo Refugio'},
	{id: 'ebitda', n: 'EBITDA'},
	{id: 'ipo-opa', n: 'IPO / OPA'},
	{id: 'moat', n: 'Vantaja Competitiva'},
	{id: 'analisis-fundamental', n: 'Análisis Fundamental'},
	{id: 'analisis-tecnico', n: 'Análisis Técnico'},
	{id: 'dacion-pago', n: 'Dación en Pago'},
	{id: 'carencia', n: 'Carencia Hipotecaria'},
	{id: 'subrogacion', n: 'Subrogación'},
	{id: 'novacion', n: 'Novación'},
	{id: 'defi', n: 'DeFi (Cripto)'},
	{id: 'smart-contracts', n: 'Smart Contracts'},
	{id: 'staking', n: 'Staking (Recompensas)'},
	{id: 'wallet-fria', n: 'Wallet Fría'},
	{id: 'interes-real', n: 'Interés Real'},
	{id: 'perfil-conservador', n: 'Perfil Conservador'},
	{id: 'perfil-agresivo', n: 'Perfil Agresivo'},
	{id: 'correlacion', n: 'Correlación'},
	{id: 'arbitraje', n: 'Arbitraje'},
	{id: 'plusvalia', n: 'Plusvalía'},
	{id: 'minusvalia', n: 'Minusvalía'},
	{id: 'acciones-fraccionadas', n: 'Acciones Fraccionadas'},
	{id: 'stop-limit', n: 'Orden Stop-Limit'},
	{id: 'gap-mercado', n: 'Gap de Mercado'},
	{id: 'apalancamiento-financiero', n: 'Apalancamiento Financiero'},
	{id: 'rebalanceo', n: 'Rebalanceo de Cartera'}
    // El sistema buscará cualquier palabra en el título o descripción
];

function smartSearch() {
    let q = document.getElementById('masterSearch').value.toLowerCase();
    let d = document.getElementById('search-dropdown');
    if (q.length < 2) { d.style.display = 'none'; return; }

    let matches = conceptos.filter(x => x.n.toLowerCase().includes(q));
    if (matches.length > 0) {
        d.innerHTML = matches.map(x => `<div class="search-item" onclick="jumpTo('${x.id}')">${x.n}</div>`).join('');
        d.style.display = 'block';
    } else { d.style.display = 'none'; }
}

function jumpTo(id) {
    const el = document.getElementById(id);
    document.getElementById('search-dropdown').style.display = 'none';
    document.getElementById('masterSearch').value = '';
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('highlight-flash');
    setTimeout(() => el.classList.remove('highlight-flash'), 2500);
}

/* --- SIMULADOR DE CRISIS --- */
function runCrisisSimulation() {
    const money = parseFloat(document.getElementById('simMoney').value);
    const type = document.getElementById('simType').value;
    let drop, lesson;

    switch(type) {
        case 'crack29': drop = 0.89; lesson = "Lección: En la Gran Depresión, el efectivo era el rey. La recuperación tardó 25 años. Diversificar no fue suficiente; se necesitaba liquidez."; break;
        case 'dotcom': drop = 0.78; lesson = "Lección: Las valoraciones absurdas de empresas sin beneficios siempre estallan. El Nasdaq tardó 15 años en recuperar este nivel."; break;
        case 'subprime': drop = 0.56; lesson = "Lección: El sector inmobiliario y el bancario están conectados. Un colapso sistémico requiere un Fondo de Emergencia fuera del sistema bancario tradicional."; break;
        case 'covid': drop = 0.34; lesson = "Lección: Los crashes por pánico biológico son rápidos. Quienes no vendieron recuperaron todo en menos de un año. El temple psicológico es un activo."; break;
    }

    document.getElementById('out-money-lost').innerText = fmt(money * (1 - drop));
    document.getElementById('out-lesson').innerText = lesson;
    document.getElementById('sim-result').style.display = 'block';
}

/* --- AUDITORÍA DE SALUD FINANCIERA --- */
function runFinancialAudit() {
    const inc = parseFloat(document.getElementById('tIn').value) || 0;
    const save = parseFloat(document.getElementById('tAh').value) || 0;
    const debt = parseFloat(document.getElementById('tDe').value) || 0;
    const cash = parseFloat(document.getElementById('tLi').value) || 0;

    if(inc <= 0) return alert("Ingresa tus ingresos.");

    const savingsRate = (save / inc) * 100;
    const monthlyExpenses = inc - save;
    const freedomMonths = cash / (monthlyExpenses || 1);
    
    let score = Math.min((savingsRate * 2.5) + (freedomMonths * 6) - (debt > 0 ? 10 : 0), 100);
    if(score < 0) score = 0;

    document.getElementById('resScore').innerText = Math.round(score);
    document.getElementById('resAh').innerText = savingsRate.toFixed(1) + "%";
    document.getElementById('resLi').innerText = freedomMonths.toFixed(1);

    const msg = document.getElementById('resMsg');
    if(score > 80) msg.innerText = "¡Élite Financiera!";
    else if(score > 50) msg.innerText = "Estado Estable";
    else msg.innerText = "Riesgo Detectado";

    document.getElementById('audit-result').style.display = 'block';
}

/* --- CALCULADORAS --- */
const fmt = (v) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(v);

function uiSueldo() {
    const b = parseFloat(document.getElementById('bruto').value);
    const p = parseInt(document.getElementById('pagas').value);
    if(!b) return;
    let irpf = b > 60000 ? 0.35 : b > 35000 ? 0.24 : 0.15;
    let neto = b * (1 - irpf) - (b * 0.0635);
    document.getElementById('res-sueldo').innerHTML = `Mensual Neto: <strong>${fmt(neto/p)}</strong>`;
}

function uiCompuesto() {
    const c = parseFloat(document.getElementById('capComp').value);
    const i = parseFloat(document.getElementById('intComp').value) / 100;
    const a = parseInt(document.getElementById('anosComp').value);
    const total = c * Math.pow(1 + i, a);
    document.getElementById('res-compuesto').innerHTML = `Capital Final: <strong>${fmt(total)}</strong>`;
}

function uiHipoteca() {
    const c = parseFloat(document.getElementById('hCap').value);
    const i = parseFloat(document.getElementById('hInt').value) / 100 / 12;
    const m = parseInt(document.getElementById('hYears').value) * 12;
    const cuota = (c * i) / (1 - Math.pow(1 + i, -m));
    document.getElementById('res-hipoteca').innerHTML = `Cuota Mes: <strong>${fmt(cuota)}</strong>`;
}

/* --- TEMA Y UI --- */
function toggleTheme() {
    const b = document.body;
    const isDark = b.getAttribute('data-theme') === 'dark';
    b.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('theme-icon').innerText = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').innerText = '☀️';
}

document.getElementById('mobile-menu-btn').onclick = () => {
    document.getElementById('main-nav').classList.toggle('active');
};

function handleContact(e) {
    e.preventDefault();
    document.getElementById('success-mail').style.display = 'block';
    setTimeout(() => { e.target.reset(); document.getElementById('success-mail').style.display = 'none'; }, 3000);
}

/* --- FUNCIÓN DEL BUZÓN (GMAIL) --- */
function handleContact(event) {
    event.preventDefault();
    
    const form = document.getElementById('proForm');
    const successMsg = document.getElementById('success-mail');
    const btnSubmit = document.getElementById('btn-submit-contact');
    
    // Recogemos los datos del formulario
    const formData = new FormData(form);

    // 🔴 RECUERDA: Tienes que crearte una cuenta en formspree.io
    // Y sustituir este link por el tuyo. Ejemplo: https://formspree.io/f/xyzaabbcc
    const FORMSPREE_LINK = "https://formspree.io/f/mbdznwee"; 

    btnSubmit.innerText = "Enviando...";
    btnSubmit.disabled = true;

    fetch(FORMSPREE_LINK, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            successMsg.style.display = 'block';
            form.reset();
            btnSubmit.innerText = "Enviar Propuesta";
            btnSubmit.disabled = false;
            setTimeout(() => successMsg.style.display = 'none', 5000);
        } else {
            alert("Error al enviar. ¿Has puesto ya tu link de Formspree en el script.js?");
            btnSubmit.innerText = "Enviar Propuesta";
            btnSubmit.disabled = false;
        }
    }).catch(error => {
        alert("Error de conexión. Inténtalo de nuevo.");
        btnSubmit.innerText = "Enviar Propuesta";
        btnSubmit.disabled = false;
    });
}

const mobileBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('main-nav');

if (mobileBtn) {
    mobileBtn.onclick = () => {
        navMenu.classList.toggle('active');
        mobileBtn.innerText = navMenu.classList.contains('active') ? '✕' : '☰';
    };
}

// Cerrar al clicar fuera o en un link
document.querySelectorAll('.nav-links a').forEach(l => {
    l.onclick = () => {
        navMenu.classList.remove('active');
        mobileBtn.innerText = '☰';
    };
});