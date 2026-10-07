/* Hydrate the same server-rendered navigation used by the main pages. */
(() => {
  const root = document.getElementById('site-navigation');
  if (!root || !window.React || !window.ReactDOM) return;
  ReactDOM.hydrateRoot(root, React.createElement(Nav, {
    active: root.dataset.active || undefined,
    languageHref: root.dataset.languageHref
  }));
})();
