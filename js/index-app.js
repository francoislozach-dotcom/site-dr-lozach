function App() {
  useReveal();
  const HERO = HeroAnatomic;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cursor, null), /*#__PURE__*/React.createElement(Nav, {
    active: "accueil"
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HERO, null), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Hanche', 'Genou', 'Pied & Cheville', 'Arthroscopie', 'Mini-invasif', 'RAAC', 'Cartilage', 'Traumatologie']
  }), /*#__PURE__*/React.createElement(SectionApproche, null), /*#__PURE__*/React.createElement(SectionStats, null), /*#__PURE__*/React.createElement(SectionSpecialites, null), /*#__PURE__*/React.createElement(SectionTechniques, null), /*#__PURE__*/React.createElement(SectionCTA, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
