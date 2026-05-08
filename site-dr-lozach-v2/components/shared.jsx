/* ============================================================
   Composants partagés — Site Dr Lozach
   Curseur, Nav, Footer, Reveal hooks, Marquee
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* ---------- Custom cursor ---------- */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    let mx = window.innerWidth / 2,my = window.innerHeight / 2;
    let rx = mx,ry = my;
    const move = (e) => {mx = e.clientX;my = e.clientY;if (dot.current) {dot.current.style.left = mx + 'px';dot.current.style.top = my + 'px';}};
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {ring.current.style.left = rx + 'px';ring.current.style.top = ry + 'px';}
      requestAnimationFrame(tick);
    };
    const enter = (e) => {if (ring.current && e.target.closest('a, button, .hoverable, input, textarea')) ring.current.classList.add('hover');};
    const leave = (e) => {if (ring.current && e.target.closest('a, button, .hoverable, input, textarea')) ring.current.classList.remove('hover');};
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot"></div>
      <div ref={ring} className="cursor-ring"></div>
    </>);

}

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .line-mask');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {e.target.classList.add('in');io.unobserve(e.target);}
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------- Nav ---------- */
function Nav({ active, dark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const links = [
    { href: 'index.html', label: 'Accueil', key: 'accueil' },
    { href: 'pathologies.html', label: 'Pathologies', key: 'pathologies' },
    { href: 'chirurgie.html', label: 'Chirurgies', key: 'chirurgie' },
    { href: 'parcours.html', label: 'Parcours', key: 'parcours' },
    { href: 'faq.html', label: 'FAQ', key: 'faq' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];
  return (
    <>
    <nav className={`nav ${dark ? 'dark' : ''}`} style={{
      paddingTop: scrolled ? 14 : 24,
      paddingBottom: scrolled ? 14 : 24,
      transition: 'padding 0.3s var(--ease-out)'
    }}>
      <a href="index.html" className="nav-logo">
        <span className="mark">
          <span className="mark-orbit"></span>
          <span className="mark-pip"></span>
        </span>
        <span>Dr François Lozach</span>
      </a>
      <div className="nav-links">
        {links.map(l => <a key={l.key} href={l.href} className={active === l.key ? 'active' : ''}>{l.label}</a>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach" target="_blank" rel="noopener" className="nav-cta">
          Prendre RDV
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 9L9 1M9 1H2M9 1V8" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={open ? 'bar bar1 open' : 'bar bar1'}></span>
          <span className={open ? 'bar bar2 open' : 'bar bar2'}></span>
          <span className={open ? 'bar bar3 open' : 'bar bar3'}></span>
        </button>
      </div>
    </nav>
    {open && (
      <div className="nav-mobile-overlay" onClick={() => setOpen(false)}>
        <div className="nav-mobile-menu" onClick={e => e.stopPropagation()}>
          <div className="nav-mobile-header">
            <a href="index.html" className="nav-logo" onClick={() => setOpen(false)}>
              <span className="mark"><span className="mark-orbit"></span><span className="mark-pip"></span></span>
              <span>Dr François Lozach</span>
            </a>
            <button className="nav-burger" onClick={() => setOpen(false)} aria-label="Fermer">
              <span className="bar bar1 open"></span>
              <span className="bar bar2 open"></span>
              <span className="bar bar3 open"></span>
            </button>
          </div>
          <nav className="nav-mobile-links">
            {links.map((l, i) => (
              <a key={l.key} href={l.href} className={active === l.key ? 'active' : ''} onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}>
                <span className="nav-mobile-num mono">0{i+1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach" target="_blank" rel="noopener" className="btn btn-primary nav-mobile-cta" onClick={() => setOpen(false)}>
            Prendre RDV →
          </a>
        </div>
      </div>
    )}
    </>);
}

/* ---------- Floating Doctolib button ---------- */
function DoctolibFloat() {
  return (
    <a
      href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach"
      target="_blank"
      rel="noopener"
      className="doctolib-float">
      
      Prendre RDV →
    </a>);

}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-display line-mask"><span>Dr Lozach</span></div>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Cabinet</h4>
            <p>Pôle Santé Thau<br />310 avenue du Maréchal Juin<br />34200 Sète</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:0467530924">04 67 53 09 24</a>
            <a href="mailto:secretariat@ortho-7.fr">secretariat@ortho-7.fr</a>
          </div>
          <div className="footer-col">
            <h4>Chirurgie</h4>
            <a href="chirurgie.html#hanche">Hanche</a>
            <a href="chirurgie.html#genou">Genou</a>
            <a href="chirurgie.html#pied">Pied & Cheville</a>
            <a href="chirurgie.html#trauma">Traumatologie</a>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <a href="index.html">Accueil</a>
            <a href="pathologies.html">Pathologies</a>
            <a href="parcours.html">Parcours</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} — Dr François Lozach</span>
          <span>Chirurgien orthopédique · Sète</span>
        </div>
      </div>
    </footer>
    <DoctolibFloat />
    </>);

}

/* ---------- Marquee ---------- */
function Marquee({ items, gold = true }) {
  const content =
  <div className="marquee-track">
      {[...items, ...items, ...items].map((it, i) =>
    <div key={i} className="marquee-item">
          <span>{it}</span>
          {gold && <span className="dot"></span>}
        </div>
    )}
    </div>;

  return <div className="marquee">{content}</div>;
}

/* ---------- Anatomical accent (abstract joint) ---------- */
function JointGlyph({ kind = 'hip', size = 600 }) {
  // Abstract anatomical line drawing — never realistic, always editorial
  if (kind === 'hip') {
    return (
      <svg viewBox="0 0 600 600" width={size} height={size} aria-hidden="true">
        <defs>
          <radialGradient id="hipGlow" cx="50%" cy="40%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="240" r="200" fill="url(#hipGlow)" />
        {/* concentric lines */}
        {Array.from({ length: 14 }).map((_, i) =>
        <circle key={i} cx="300" cy="240" r={40 + i * 14} className="anatomy-line thin" />
        )}
        {/* hip ball + socket */}
        <circle cx="300" cy="240" r="60" className="anatomy-line gold" strokeWidth="1.5" />
        <circle cx="300" cy="240" r="90" className="anatomy-line" />
        <path d="M210 240 Q300 130 390 240" className="anatomy-line gold" strokeWidth="1.5" />
        <path d="M300 300 L300 480" className="anatomy-line" />
        <path d="M260 300 L260 460 Q260 510 300 510 Q340 510 340 460 L340 300" className="anatomy-line thin" />
      </svg>);

  }
  if (kind === 'knee') {
    return (
      <svg viewBox="0 0 600 600" width={size} height={size} aria-hidden="true">
        <defs>
          <radialGradient id="kneeGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="200" fill="url(#kneeGlow)" />
        {Array.from({ length: 10 }).map((_, i) =>
        <ellipse key={i} cx="300" cy="300" rx={50 + i * 16} ry={70 + i * 18} className="anatomy-line thin" />
        )}
        <path d="M300 100 L300 280 Q260 300 260 320 Q260 360 300 380 L300 500" className="anatomy-line" />
        <ellipse cx="300" cy="300" rx="48" ry="60" className="anatomy-line gold" strokeWidth="1.5" />
        <path d="M260 280 L340 280" className="anatomy-line gold" />
        <path d="M250 340 L350 340" className="anatomy-line gold" />
      </svg>);

  }
  // foot
  return (
    <svg viewBox="0 0 600 600" width={size} height={size} aria-hidden="true">
      <defs>
        <radialGradient id="footGlow" cx="40%" cy="60%">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="300" r="200" fill="url(#footGlow)" />
      {Array.from({ length: 10 }).map((_, i) =>
      <path key={i} d={`M${100 - i * 4} ${400 + i * 4} Q${300} ${200 - i * 8} ${500 + i * 4} ${380 - i * 4}`} className="anatomy-line thin" />
      )}
      <path d="M150 420 Q250 200 380 220 Q500 240 480 360 Q460 440 350 440 Q200 440 150 420 Z" className="anatomy-line" />
      <circle cx="200" cy="400" r="22" className="anatomy-line gold" />
      <circle cx="380" cy="240" r="18" className="anatomy-line gold" />
      <path d="M220 400 L360 250" className="anatomy-line thin" />
    </svg>);

}

/* ---------- Number ticker ---------- */
function Counter({ to, suffix = '', duration = 2000 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.floor(eased * to));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------- Magnetic button ---------- */
function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {el.style.transform = '';};
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return <div ref={ref} style={{ display: 'inline-block', transition: 'transform 0.4s var(--ease-out)' }}>{children}</div>;
}

/* ---------- Section heading with line mask ---------- */
function Heading({ eyebrow, children, className = '', tag: Tag = 'h2' }) {
  return (
    <>
      {eyebrow && <div className="eyebrow reveal">{eyebrow}</div>}
      <Tag className={`line-mask ${className}`}><span>{children}</span></Tag>
    </>);

}

Object.assign(window, { Cursor, Nav, Footer, DoctolibFloat, Marquee, JointGlyph, Counter, Magnetic, Heading, useReveal });