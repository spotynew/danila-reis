/* Navegação acessível e eventos prontos para um futuro GTM/GA4. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
  document.getElementById('currentYear').textContent = String(new Date().getFullYear());
  document.querySelectorAll('.js-track').forEach(el => el.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'site_cta_click', click_location: el.dataset.track });
  }));
  document.querySelectorAll('.faq-list details').forEach(item => item.addEventListener('toggle', () => {
    if (item.open) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'site_faq_open', faq_question: item.querySelector('summary')?.textContent?.trim() });
    }
  }));
})();
