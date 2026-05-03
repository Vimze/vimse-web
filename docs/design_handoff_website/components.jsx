/* Vimse Website — Shared Components */
const { useState, useEffect, useRef } = React;

/* ─── TOKENS ─── */
const P = { 50:"#E8F4F3",100:"#D0EBE8",200:"#A3D5CF",300:"#6EB8AF",400:"#3D9489",500:"#007A6E",600:"#006B60",700:"#005F54",800:"#004A42",900:"#003630" };
const G = { 50:"#FAFAFA",100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",400:"#BDBDBD",500:"#9E9E9E",600:"#757575",700:"#616161",800:"#424242",900:"#212121" };

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ─── Nav ─── */
function SiteNav({ dark = false, current = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);

  const cls = `site-nav ${dark && !scrolled ? 'on-dark' : ''} ${scrolled ? 'scrolled' : ''}`;

  return (
    <nav className={cls}>
      <div className="nav-inner">
        <a href="Landing Page.html" className="nav-logo">Vimse</a>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={dark && !scrolled ? '#fff' : G[700]} strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></> :
              <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
          </svg>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="Landing Page.html" style={current === 'home' ? { color: 'var(--p500)', fontWeight: 600 } : {}}>Home</a>
          <a href="Features.html" style={current === 'features' ? { color: 'var(--p500)', fontWeight: 600 } : {}}>Features</a>
          <a href="About.html" style={current === 'about' ? { color: 'var(--p500)', fontWeight: 600 } : {}}>About</a>
          <a href="#download" className="nav-cta">Download</a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Footer ─── */
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="Landing Page.html" className="nav-logo">Vimse</a>
            <p>Organize your everyday life — starting with what you eat and what you buy.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="Features.html">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="About.html">About</a>
            <a href="About.html#contact">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vimse. Made in Norway.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Store badges (SVG placeholders styled like real badges) ─── */
function StoreBadges({ size = 52 }) {
  return (
    <div className="store-badges">
      <a href="#" className="store-badge" style={{ height: size, background: '#000', borderRadius: 12, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <svg width="22" height="26" viewBox="0 0 22 26" fill="#fff">
          <path d="M18.07 13.63c-.04-3.56 2.93-5.3 3.07-5.38-1.68-2.44-4.28-2.77-5.2-2.8-2.2-.23-4.33 1.3-5.46 1.3-1.14 0-2.87-1.28-4.73-1.24-2.42.04-4.68 1.42-5.92 3.58-2.55 4.4-.65 10.9 1.81 14.47 1.22 1.75 2.66 3.71 4.55 3.64 1.83-.08 2.52-1.17 4.73-1.17 2.2 0 2.83 1.17 4.75 1.13 1.97-.03 3.22-1.76 4.4-3.53 1.41-2.02 1.98-3.99 2.01-4.09-.04-.02-3.83-1.46-3.87-5.81zM14.51 3.56C15.52 2.33 16.21.67 16.04 0c-1.39.06-3.12.94-4.12 2.1-0.9 1.04-1.7 2.73-1.49 4.33 1.56.12 3.16-.78 4.08-2.07z"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--sans)' }}>Download on the</span>
          <span style={{ fontSize: 17, color: '#fff', fontWeight: 600, fontFamily: 'var(--sans)', marginTop: 1 }}>App Store</span>
        </div>
      </a>
      <a href="#" className="store-badge" style={{ height: size, background: '#000', borderRadius: 12, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 20.5v-17c0-.83.47-1.58 1.2-1.95l10.8 10.45-10.8 10.45A2.24 2.24 0 013 20.5z" fill="#4285F4"/>
          <path d="M20.05 10.14l-3.12 1.8-2.73-2.64 2.73-2.65 3.12 1.8c.93.54.93 1.15 0 1.69z" fill="#FBBC04"/>
          <path d="M4.2 1.55L14.2 10.3l-2.73 2.64L4.2 1.55z" fill="#34A853"/>
          <path d="M4.2 22.45L14.2 13.7l-2.73-2.64L4.2 22.45z" fill="#EA4335"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--sans)' }}>GET IT ON</span>
          <span style={{ fontSize: 17, color: '#fff', fontWeight: 600, fontFamily: 'var(--sans)', marginTop: 1 }}>Google Play</span>
        </div>
      </a>
    </div>
  );
}

/* ─── Phone Mockup ─── */
function PhoneMockup({ children, style, tilt }) {
  const tiltStyle = tilt ? { transform: `perspective(1200px) rotateY(${tilt}deg)` } : {};
  return (
    <div className="phone-frame" style={{ ...style, ...tiltStyle }}>
      <div className="phone-notch"></div>
      <div className="phone-frame-inner">
        {children}
      </div>
    </div>
  );
}

/* ─── Mini App Screens (simplified for marketing) ─── */
function MiniHomeScreen() {
  return (
    <div style={{ background: '#F8F8F8', width: '100%', height: '100%', padding: '40px 16px 16px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: -60, right: -50, width: 180, height: 180, borderRadius: 999, background: P[100], opacity: 0.4 }}/>
      <div style={{ position: 'absolute', bottom: '20%', left: -70, width: 160, height: 160, borderRadius: 999, background: P[50], opacity: 0.6 }}/>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: G[900], marginBottom: 4 }}>Hei, Anders!</div>
        <div style={{ fontSize: 11, color: G[500], marginBottom: 16 }}>Hva skal du lage i dag?</div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          <div style={{ flex: 1, background: P[500], color: '#fff', borderRadius: 10, padding: '10px 0', fontSize: 10, fontWeight: 600, textAlign: 'center' }}>+ Ny handleliste</div>
          <div style={{ flex: 1, background: '#fff', color: P[600], border: `1.5px solid ${P[200]}`, borderRadius: 10, padding: '10px 0', fontSize: 10, fontWeight: 600, textAlign: 'center' }}>+ Ny oppskrift</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={P[600]} strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          <span style={{ fontSize: 13, fontWeight: 600, color: G[900] }}>Handlelister</span>
          <span style={{ marginLeft: 'auto', fontSize: 10, color: P[500] }}>Se alle</span>
        </div>
        {['Ukens handling', 'Fredagstaco', 'Bursdagsfest'].map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '10px 12px', background: '#fff', borderRadius: 12, marginBottom: 5, border: `1px solid ${G[100]}` }}>
            <div style={{ width: 28, height: 28, borderRadius: 14, background: P[50], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={P[600]} strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            </div>
            <div style={{ flex: 1, marginLeft: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: G[900] }}>{n}</div>
              <div style={{ fontSize: 9, color: G[400] }}>{i === 0 ? '2 timer siden' : i === 1 ? 'I går' : '3 dager siden'}</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={G[300]} strokeWidth="2" strokeLinecap="round"><polyline points="9,6 15,12 9,18"/></svg>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, marginBottom: 8 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={P[600]} strokeWidth="2"><path d="M6 13.87A4 4 0 013.5 6a4.02 4.02 0 011.25-2.91A4 4 0 0112 2a4 4 0 017.25 1.09A4 4 0 0120.5 6a4 4 0 01-2.5 7.87V21H6v-7.13z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>
          <span style={{ fontSize: 13, fontWeight: 600, color: G[900] }}>Oppskrifter</span>
        </div>
        <div style={{ display: 'flex', gap: 8, overflow: 'hidden' }}>
          {['Pasta carbonara', 'Laksefilet'].map((r, i) => (
            <div key={i} style={{ minWidth: 120, padding: '10px 12px', background: '#fff', borderRadius: 12, border: `1px solid ${G[100]}` }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: G[900] }}>{r}</div>
              <div style={{ fontSize: 9, color: G[500], marginTop: 2 }}>{i === 0 ? 'Klassisk italiensk' : 'Med sitron og urter'}</div>
              <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                <span style={{ fontSize: 8, fontWeight: 500, color: P[700], background: P[50], padding: '2px 6px', borderRadius: 8 }}>{i === 0 ? '4 porsj.' : '2 porsj.'}</span>
                <span style={{ fontSize: 8, fontWeight: 500, color: P[700], background: P[50], padding: '2px 6px', borderRadius: 8 }}>{i === 0 ? '30 min' : '25 min'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniRecipeScreen() {
  return (
    <div style={{ background: '#F2F2F2', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ height: 170, background: 'linear-gradient(180deg, #0F1A22 30%, #162830)', position: 'relative', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 16px' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: 50, background: P[400], opacity: 0.06 }}/>
        <div style={{ fontSize: 8, fontWeight: 600, color: P[300], letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Oppskrift</div>
        <div style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: '24px' }}>Pasta carbonara</div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>Klassisk italiensk rett</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
          <span style={{ fontSize: 9, fontWeight: 600, color: P[300], background: 'rgba(255,255,255,0.08)', padding: '3px 8px', borderRadius: 8 }}>4 porsjoner</span>
          <span style={{ fontSize: 9, fontWeight: 600, color: P[300], background: 'rgba(255,255,255,0.08)', padding: '3px 8px', borderRadius: 8 }}>30 min</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: '12px 10px', overflow: 'hidden' }}>
        <div style={{ background: '#fff', borderRadius: 14, padding: '12px', marginBottom: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '100%', background: P[500], color: '#fff', borderRadius: 10, padding: '10px 0', fontSize: 10, fontWeight: 600, textAlign: 'center' }}>Legg ingredienser i handleliste</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: G[400], letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 10 }}>Ingredienser</div>
          {['spaghetti', 'guanciale', 'eggeplommer', 'pecorino'].map((n, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '6px 0', borderBottom: i < 3 ? `1px solid ${G[100]}` : 'none' }}>
              <div style={{ width: 4, height: 4, borderRadius: 2, background: P[300], marginRight: 8 }}/>
              <span style={{ fontSize: 10, color: G[800], flex: 1 }}>{n}</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: P[600] }}>{['400g','200g','4','100g'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniShoppingScreen() {
  const items = ['Melk', 'Egg (12-pk)', 'Smør', 'Havregryn', 'Appelsinjuice'];
  return (
    <div style={{ background: '#F8F8F8', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: -60, right: -50, width: 180, height: 180, borderRadius: 999, background: P[100], opacity: 0.35 }}/>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ padding: '40px 14px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: G[900] }}>Ukens handling</span>
        </div>
        <div style={{ padding: '10px 14px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 9, fontWeight: 500, color: G[500] }}>2 av 7 varer</span>
            <span style={{ fontSize: 9, fontWeight: 600, color: P[500] }}>29%</span>
          </div>
          <div style={{ height: 4, borderRadius: 2, background: G[200], overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 2, background: P[500], width: '29%' }}/>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: `1px solid ${G[100]}` }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${G[300]}`, flexShrink: 0 }}/>
              <span style={{ flex: 1, fontSize: 11, color: G[900], marginLeft: 8 }}>{item}</span>
            </div>
          ))}
          <div style={{ padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: G[400], fontStyle: 'italic' }}>Legg til vare...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', gap: 4 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={G[400]} strokeWidth="2" strokeLinecap="round"><polyline points="6,9 12,15 18,9"/></svg>
            <span style={{ fontSize: 9, fontWeight: 500, color: G[400] }}>2 avkryssede varer</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 16, right: 14, width: 40, height: 40, borderRadius: 20, background: P[500], display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 14px ${P[500]}40` }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Section CTA ─── */
function DownloadCTA({ dark }) {
  return (
    <div className={`section ${dark ? 'section-dark' : ''}`} style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {dark && <>
        <div style={{ position: 'absolute', top: -80, left: '20%', width: 300, height: 300, borderRadius: '50%', background: P[500], opacity: 0.04 }}/>
        <div style={{ position: 'absolute', bottom: -60, right: '15%', width: 200, height: 200, borderRadius: '50%', background: P[400], opacity: 0.06 }}/>
      </>}
      <div className="container" style={{ position: 'relative' }}>
        <div className="reveal">
          <p className="section-label">Get started</p>
          <h2 className="section-title" style={{ maxWidth: 500, margin: '0 auto 16px' }}>Ready to simplify your day?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px', maxWidth: 440 }}>
            Download Vimse — free, no account required, works offline from the start.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StoreBadges size={56} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature icon helper ─── */
function FeatureIcon({ children, dark }) {
  return (
    <div style={{
      width: 56, height: 56, borderRadius: 16,
      background: dark ? 'rgba(255,255,255,0.06)' : P[50],
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: 24, flexShrink: 0
    }}>
      {children}
    </div>
  );
}

Object.assign(window, {
  P, G, useReveal, SiteNav, SiteFooter, StoreBadges, PhoneMockup,
  MiniHomeScreen, MiniRecipeScreen, MiniShoppingScreen,
  DownloadCTA, FeatureIcon
});
