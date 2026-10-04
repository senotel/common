// Applies the saved theme before the page paints, so it never flashes.
(function () {
  try {
    var s = JSON.parse(localStorage.getItem('common.settings') || '{}');
    var t = s.theme === 'light' || s.theme === 'dark' ? s.theme
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var r = document.documentElement;
    r.setAttribute('data-theme', t);
    if (s.textSize) r.setAttribute('data-text', s.textSize);
    if (s.density) r.setAttribute('data-density', s.density);
  } catch (e) {}
})();
