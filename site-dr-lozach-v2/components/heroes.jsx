/* ============================================================
   Hero variants — tweakable
   1. video    : full-bleed dark hero with abstract motion bg
   2. type     : huge typographic hero (default)
   3. image    : split hero with portrait placeholder
   4. anatomic : hero with animated joint glyph
   ============================================================ */

const { useState: useS, useEffect: useE, useRef: useR } = React;

function HeroType() {
  return (
    <section className="hero hero-type" style={{ paddingTop: 140, paddingBottom: 80, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
      <div className="blob blob-gold" style={{ width: 600, height: 600, right: '-15%', top: '5%' }}></div>
      <div className="blob blob-rose" style={{ width: 400, height: 400, left: '-10%', bottom: '10%' }}></div>
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 60, position: 'relative', zIndex: 2 }}>
        <div className="flex between" style={{ alignItems: 'flex-start', marginBottom: 24, gap: 40, flexWrap: 'wrap' }}>
          <div className="tag-pill reveal"><span className="dot"></span>SÈTE, FRANCE · DEPUIS 2017

          </div>
          <div className="mono reveal" style={{ color: 'var(--muted)', maxWidth: 280, textTransform: 'none', letterSpacing: '0.04em', lineHeight: 1.6 }}>
            Membres inférieurs<br />Hanche · Genou · Pied
          </div>
        </div>
        <div className="line-mask"><span className="display">Dr François</span></div>
        <div className="line-mask" style={{ marginLeft: '20%' }}><span className="display italic" style={{ color: 'var(--gold)' }}>Lozach</span></div>
        <div className="line-mask"><span className="display" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ width: 'clamp(80px, 14vw, 200px)', height: 8, background: 'var(--gold)', borderRadius: 999, display: 'inline-block' }}></span>
          Chirurgien Orthopédiue
        </span></div>

        <div className="flex between reveal" style={{ marginTop: 60, alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
          <p style={{ maxWidth: 460, fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)' }}>
            Chirurgie orthopédique des membres inférieurs. Approches mini-invasives, arthroscopie, récupération rapide après chirurgie.
          </p>
          <div className="flex gap-16" style={{ flexWrap: 'wrap' }}>
            <Magnetic><a href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach" target="_blank" rel="noopener" className="btn btn-primary">Prendre RDV<svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.4" /></svg></a></Magnetic>
            <Magnetic><a href="chirurgie.html" className="btn btn-outline">Explorer<svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.4" /></svg></a></Magnetic>
          </div>
        </div>
      </div>
    </section>);

}

function HeroVideo() {
  return (
    <section className="hero hero-video" style={{ paddingTop: 0, paddingBottom: 0, minHeight: '100vh', background: 'var(--bg-deep)', color: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
      {/* animated background lines */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1600 900">
          {Array.from({ length: 30 }).map((_, i) =>
          <line key={i} x1="0" y1={i * 40} x2="1600" y2={i * 40 + 200} stroke="var(--gold)" strokeWidth="0.3" opacity="0.3">
              <animate attributeName="x1" values="0;-200;0" dur={`${15 + i * 0.5}s`} repeatCount="indefinite" />
            </line>
          )}
        </svg>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(184,137,90,0.18), transparent 60%)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', paddingTop: 120, paddingBottom: 80 }}>
        <div className="eyebrow gold reveal">◍ Chirurgie orthopédique · Sète</div>
        <div className="line-mask"><span className="display" style={{ fontSize: 'clamp(56px, 10vw, 180px)' }}>Réparer</span></div>
        <div className="line-mask"><span className="display italic" style={{ fontSize: 'clamp(56px, 10vw, 180px)', color: 'var(--gold)' }}>le mouvement.</span></div>
        <div className="flex between reveal" style={{ marginTop: 60, alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
          <p style={{ maxWidth: 480, fontSize: 18, lineHeight: 1.5, color: 'rgba(253,250,243,0.75)' }}>
            Dr François Lozach — chirurgien orthopédique spécialisé dans la hanche, le genou, le pied et la cheville. Techniques mini-invasives et récupération rapide.
          </p>
          <div className="flex gap-16" style={{ flexWrap: 'wrap' }}>
            <Magnetic><a href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach" target="_blank" rel="noopener" className="btn btn-primary">Prendre RDV<svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.4" /></svg></a></Magnetic>
            <Magnetic><a href="chirurgie.html" className="btn btn-outline">Spécialités<svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.4" /></svg></a></Magnetic>
          </div>
        </div>
      </div>
    </section>);

}

function HeroImage() {
  return (
    <section className="hero hero-image" style={{ paddingTop: 120, paddingBottom: 80, minHeight: '100vh' }}>
      <style>{`@media(max-width:900px){.hero-image-grid{grid-template-columns:1fr!important;gap:32px!important}.hero-image-photo{display:none!important}}`}</style>
      <div className="container hero-image-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
        <div>
          <div className="eyebrow reveal">◍ Chirurgien orthopédique · Sète</div>
          <div className="line-mask"><span className="display" style={{ fontSize: 'clamp(48px, 8vw, 130px)' }}>François</span></div>
          <div className="line-mask"><span className="display italic" style={{ fontSize: 'clamp(48px, 8vw, 130px)', color: 'var(--gold)' }}>Lozach</span></div>
          <p className="reveal" style={{ maxWidth: 460, fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 32 }}>
            Hanche, genou, pied & cheville. Approches mini-invasives, arthroscopie, récupération rapide après chirurgie.
          </p>
          <div className="flex gap-16 reveal" style={{ marginTop: 40, flexWrap: 'wrap' }}>
            <Magnetic><a href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach" target="_blank" rel="noopener" className="btn btn-primary">Prendre RDV<svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.4" /></svg></a></Magnetic>
            <Magnetic><a href="parcours.html" className="btn btn-outline">Parcours</a></Magnetic>
          </div>
        </div>
        <div className="ph reveal" style={{ aspectRatio: '4/5', borderRadius: 4 }}>
          <div>
            ⊡<br /><br />
            PORTRAIT<br />
            DR LOZACH<br />
            <span style={{ opacity: 0.5 }}>4:5 · à fournir</span>
          </div>
        </div>
      </div>
    </section>);

}

function HeroAnatomic() {
  const ref = useR(null);
  const [rot, setRot] = useS(0);
  useE(() => {
    let raf;
    const loop = () => {
      setRot((r) => (r + 0.25) % 360);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  useE(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      ref.current.style.setProperty('--mx', x);
      ref.current.style.setProperty('--my', y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Layered cross-sections of a lower limb (hip → foot), drawn at different Z depths
  const layers = [-100, -50, 0, 50, 100];
  return (
    <section className="hero hero-anatomic" style={{ paddingTop: 120, paddingBottom: 80, minHeight: '100vh', overflow: 'hidden', position: 'relative', background: 'var(--bg)' }}>
      {/* Subtle ambient anatomy video — discreet, behind everything */}
      <video
        autoPlay muted loop playsInline
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.18,
          mixBlendMode: 'screen',
          filter: 'hue-rotate(180deg) saturate(1.3) contrast(1.1)',
          pointerEvents: 'none',
          zIndex: 0,
          maskImage: 'radial-gradient(ellipse at 70% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 30%, transparent 80%)'
        }}>
        <source src="assets/anatomy.mp4" type="video/mp4" />
      </video>
      <div className="blob blob-gold" style={{ width: 700, height: 700, right: '-15%', top: '-5%' }}></div>
      <div className="blob blob-olive" style={{ width: 500, height: 500, right: '15%', bottom: '0%' }}></div>

      <div ref={ref} style={{
        position: 'absolute',
        right: '-2%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 720,
        height: 800,
        perspective: '1400px',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rot}deg) rotateX(calc(var(--mx, 0) * 10deg)) rotateZ(calc(var(--my, 0) * -5deg))`
        }}>
          {layers.map((z, i) => {
            const isMain = i === 2;
            const fade = (1 - Math.abs(z) / 180) * 1.1;
            const sw = isMain ? 1 : 0.7;
            return (
              <div key={i} style={{
                position: 'absolute',
                inset: 0,
                transform: `translateZ(${z}px)`,
                opacity: Math.min(1, fade),
                filter: isMain ? 'drop-shadow(0 0 12px rgba(0, 212, 255, 0.4))' : 'none'
              }}>
                <svg viewBox="0 0 600 800" width="100%" height="100%" aria-hidden="true" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id={`limb-${i}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#4a7fff" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.55" />
                    </linearGradient>
                  </defs>
                  {/* Pelvis hint */}
                  <path d="M180 90 Q300 60 420 90" fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.4 : 1} opacity={isMain ? 1 : 0.75} />
                  {/* Hip joint */}
                  <circle cx="300" cy="130" r={70 - i * 4} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.6 : 1.1} opacity={isMain ? 1 : 0.75} />
                  <circle cx="300" cy="130" r={42 - i * 3} fill="none" stroke="#00d4ff" strokeWidth="0.6" opacity="0.4" />
                  {/* Femur */}
                  <path d={`M${278 - i} 165 Q${294} 290 ${298} 410`} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.8 : 1.3} opacity={isMain ? 1 : 0.75} />
                  <path d={`M${322 + i} 165 Q${308} 290 ${304} 410`} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.8 : 1.3} opacity={isMain ? 1 : 0.75} />
                  {/* Knee */}
                  <ellipse cx="301" cy="425" rx={42 - i * 2} ry={30 - i * 2} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.6 : 1.1} opacity={isMain ? 1 : 0.75} />
                  <ellipse cx="301" cy="425" rx={22 - i} ry={14 - i} fill="none" stroke="#4a7fff" strokeWidth="0.5" opacity="0.5" />
                  {/* Tibia + fibula */}
                  <path d={`M${287 - i} 455 Q${294} 560 ${298} 670`} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.8 : 1.3} opacity={isMain ? 1 : 0.75} />
                  <path d={`M${315 + i} 455 Q${308} 560 ${304} 670`} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.4 : 1} opacity={isMain ? 1 : 0.75} />
                  {/* Ankle */}
                  <circle cx="301" cy="685" r={28 - i * 2} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.5 : 1.1} opacity={isMain ? 1 : 0.75} />
                  {/* Foot */}
                  <path d={`M${301 - i} 705 Q230 740 195 768 L445 758 Q380 720 301 712 Z`} fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 2.4 : 1} opacity={isMain ? 1 : 0.75} />
                  {/* Toe lines */}
                  <path d="M210 762 L195 778 M250 758 L240 778 M295 754 L290 778 M340 754 L345 778 M390 758 L400 778" fill="none" stroke={`url(#limb-${i})`} strokeWidth={isMain ? 1.6 : 0.8} opacity={isMain ? 1 : 0.65} />

                  {isMain &&
                  <>
                      {/* concentric rings around joints */}
                      {[0, 1, 2, 3, 4].map((k) =>
                    <circle key={`hr-${k}`} cx="300" cy="130" r={82 + k * 12} fill="none" stroke="#00d4ff" strokeWidth="0.4" opacity={0.35 - k * 0.06} />
                    )}
                      {[0, 1, 2, 3].map((k) =>
                    <circle key={`kr-${k}`} cx="301" cy="425" r={56 + k * 10} fill="none" stroke="#4a7fff" strokeWidth="0.4" opacity={0.35 - k * 0.06} />
                    )}
                      {[0, 1, 2, 3].map((k) =>
                    <circle key={`ar-${k}`} cx="301" cy="685" r={42 + k * 9} fill="none" stroke="#7c5cff" strokeWidth="0.4" opacity={0.35 - k * 0.06} />
                    )}
                      {/* tick marks along femur */}
                      {Array.from({ length: 8 }).map((_, k) =>
                    <line key={`t-${k}`} x1={264} y1={185 + k * 28} x2={272} y2={185 + k * 28} stroke="#00d4ff" strokeWidth="0.5" opacity="0.5" />
                    )}
                      {Array.from({ length: 6 }).map((_, k) =>
                    <line key={`tt-${k}`} x1={328} y1={475 + k * 30} x2={336} y2={475 + k * 30} stroke="#4a7fff" strokeWidth="0.5" opacity="0.5" />
                    )}
                    </>
                  }
                </svg>
              </div>);

          })}

          {/* HUD overlays — stay in 3D space */}
          <div className="mono" style={{ position: 'absolute', top: '10%', left: '-12%', color: 'var(--gold)', fontSize: 10, opacity: 0.85, letterSpacing: '0.12em' }}>
            <div style={{ width: 64, height: 1, background: 'var(--gold)', marginBottom: 4 }}></div>
            HANCHE / {Math.floor(rot)}°
          </div>
          <div className="mono" style={{ position: 'absolute', top: '50%', left: '-12%', color: 'var(--rose)', fontSize: 10, opacity: 0.85, letterSpacing: '0.12em' }}>
            <div style={{ width: 64, height: 1, background: 'var(--rose)', marginBottom: 4 }}></div>
            GENOU
          </div>
          <div className="mono" style={{ position: 'absolute', top: '82%', left: '-12%', color: 'var(--olive)', fontSize: 10, opacity: 0.85, letterSpacing: '0.12em' }}>
            <div style={{ width: 64, height: 1, background: 'var(--olive)', marginBottom: 4 }}></div>
            CHEVILLE
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'calc(100vh - 200px)', position: 'relative', zIndex: 2 }}>
        <div className="tag-pill reveal" style={{ marginBottom: 24 }}><span className="dot"></span>SCAN ANATOMIQUE / TEMPS RÉEL</div>
        <div className="line-mask"><span className="display" style={{ fontSize: 'clamp(56px, 10vw, 170px)' }}>L'os, l'articulation,</span></div>
        <div className="line-mask"><span className="display italic" style={{ fontSize: 'clamp(56px, 10vw, 170px)', color: 'var(--gold)' }}>la précision.</span></div>
        <p className="reveal" style={{ maxWidth: 460, fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', marginTop: 40 }}>
          Dr François Lozach — chirurgien orthopédique. Hanche, genou, pied & cheville. Sète.
        </p>
        <div className="flex gap-16 reveal" style={{ marginTop: 40, flexWrap: 'wrap' }}>
          <Magnetic><a href="https://www.doctolib.fr/chirurgien-orthopediste/sete/francois-lozach" target="_blank" rel="noopener" className="btn btn-primary">Prendre RDV<svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M2 14L14 2M14 2H4M14 2V12" stroke="currentColor" strokeWidth="1.4" /></svg></a></Magnetic>
          <Magnetic><a href="chirurgie.html" className="btn btn-outline">Spécialités</a></Magnetic>
        </div>
      </div>
    </section>);

}

Object.assign(window, { HeroType, HeroVideo, HeroImage, HeroAnatomic });