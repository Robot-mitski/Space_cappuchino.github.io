/* Page enhancements. Theme and navigation live in coffee.js / CSS. */
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
const renderCharts = () => {
  if (!window.Plotly) return;
  document.querySelectorAll('pre > code.language-plotly').forEach((element) => {
    try {
      const data = JSON.parse(element.textContent);
      const chart = document.createElement('div');
      element.parentElement.after(chart);
      element.parentElement.classList.add('hidden');
      const theme = document.documentElement.dataset.theme === 'dark' ? plotlyDarkLayout : plotlyLightLayout;
      data.layout = { ...data.layout, template: data.layout?.template || theme };
      window.Plotly.react(chart, data.data, data.layout);
    } catch (error) { console.warn('Could not render chart:', error); }
  });
};
window.addEventListener('load', renderCharts, { once: true });
if (typeof fitvids === 'function') fitvids();
