/* Optional audience measurement: no Google request before an explicit choice. */
(function () {
  'use strict';
  var id = 'G-C8XGRRZ1W4';
  var key = 'drlozach-cookie-choice-v1';
  var maxAge = 180 * 24 * 60 * 60 * 1000;
  var en = document.documentElement.lang === 'en';
  var loaded = false, panel, previousFocus;
  var words = en ? {
    title: 'Your privacy', text: 'May we use Google Analytics to measure visits and improve this website? No audience measurement is activated before your consent. You can refuse and continue browsing normally.',
    accept: 'Accept statistics', reject: 'Refuse statistics', settings: 'Cookie settings', policy: 'Privacy policy', close: 'Close', saved: 'Your cookie choice has been saved.'
  } : {
    title: 'Votre confidentialité', text: 'Acceptez-vous Google Analytics pour mesurer les visites et améliorer ce site ? Aucune mesure d’audience n’est activée avant votre accord. Vous pouvez refuser et consulter le site normalement.',
    accept: 'Accepter les statistiques', reject: 'Refuser les statistiques', settings: 'Gérer les cookies', policy: 'Confidentialité', close: 'Fermer', saved: 'Votre choix concernant les cookies a été enregistré.'
  };
  function read() {
    try {
      var value = JSON.parse(localStorage.getItem(key));
      if (value && ['accepted', 'refused'].indexOf(value.choice) !== -1 && value.at <= Date.now() && Date.now() - value.at < maxAge) return value.choice;
    } catch (_) {}
    return null;
  }
  function clearAnalyticsCookies() {
    document.cookie.split(';').forEach(function (item) {
      var name = item.split('=')[0].trim();
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return;
      var domains = ['', location.hostname, '.' + location.hostname, '.drlozach.fr'];
      domains.forEach(function (domain) {
        document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
      });
    });
  }
  function enable() {
    window['ga-disable-' + id] = false;
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 180 * 24 * 60 * 60,
      cookie_update: false
    });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function disable() {
    window['ga-disable-' + id] = true;
    clearAnalyticsCookies();
  }
  function hide() {
    panel.hidden = true;
    if (previousFocus && previousFocus.isConnected) previousFocus.focus();
  }
  function choose(choice) {
    try { localStorage.setItem(key, JSON.stringify({choice: choice, at: Date.now()})); } catch (_) {}
    if (choice === 'accepted') enable(); else disable();
    hide();
    document.getElementById('privacy-status').textContent = words.saved;
  }
  function show() {
    previousFocus = document.activeElement;
    panel.hidden = false;
    panel.querySelector('h2').focus();
  }
  function button(label, action) {
    var b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.addEventListener('click', action); return b;
  }
  function init() {
    panel = document.createElement('section');
    panel.className = 'privacy-panel'; panel.hidden = true;
    panel.setAttribute('aria-labelledby', 'privacy-title');
    var title = document.createElement('h2'); title.id = 'privacy-title'; title.tabIndex = -1; title.textContent = words.title;
    var text = document.createElement('p'); text.textContent = words.text;
    var policy = document.createElement('a'); policy.href = en ? 'privacy.html' : 'confidentialite.html'; policy.textContent = words.policy;
    var actions = document.createElement('div'); actions.className = 'privacy-actions';
    actions.append(button(words.reject, function () { choose('refused'); }), button(words.accept, function () { choose('accepted'); }));
    var close = button(words.close, hide); close.className = 'privacy-close';
    panel.append(title, text, policy, actions, close); document.body.appendChild(panel);
    var settings = button(words.settings, show); settings.className = 'privacy-settings'; document.body.appendChild(settings);
    var status = document.createElement('span'); status.id = 'privacy-status'; status.className = 'sr-only'; status.setAttribute('role', 'status'); document.body.appendChild(status);
    panel.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
    window.sitePrivacy = {open: show};
    if (read() === 'accepted') enable(); else { disable(); if (!read()) panel.hidden = false; }
    window.addEventListener('storage', function (e) {
      if (e.key === key || e.key === null) { if (read() === 'accepted') enable(); else disable(); }
    });
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cookie-settings]')) { e.preventDefault(); show(); }
    });
  }
  // Disable legacy cookies as soon as this script runs, even if the UI is not ready.
  if (read() !== 'accepted') disable();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
}());
