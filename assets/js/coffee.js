(() => {
  const button = document.querySelector('.color-mode');
  if (!button) return;
  const root = document.documentElement;
  const sync = () => {
    const dark = root.dataset.theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
  };
  button.hidden = false;
  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('coffee-theme', root.dataset.theme); } catch (e) {}
    sync();
  });
  sync();
})();
