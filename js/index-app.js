const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "anatomic"
} /*EDITMODE-END*/;
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();
  const HERO = {
    type: HeroType,
    video: HeroVideo,
    image: HeroImage,
    anatomic: HeroAnatomic
  }[tweaks.hero] || HeroType;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "accueil"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HERO, null), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Hanche', 'Genou', 'Pied & Cheville', 'Arthroscopie', 'Mini-invasif', 'RAAC', 'Cartilage', 'Traumatologie']
  }), /*#__PURE__*/React.createElement(SectionApproche, null), /*#__PURE__*/React.createElement(SectionStats, null), /*#__PURE__*/React.createElement(SectionSpecialites, null), /*#__PURE__*/React.createElement(SectionTechniques, null), /*#__PURE__*/React.createElement(SectionCTA, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }, /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Variante",
    value: tweaks.hero,
    onChange: v => setTweak('hero', v),
    options: [{
      value: 'type',
      label: 'Typographique'
    }, {
      value: 'video',
      label: 'Vidéo / sombre'
    }, {
      value: 'image',
      label: 'Portrait split'
    }, {
      value: 'anatomic',
      label: 'Anatomique animé'
    }]
  }))));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
