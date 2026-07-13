// Ascension Land Surveying — shared site behavior
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    }));
  }

  // Hero readout: subtle "live" tick on the survey-time field, purely decorative,
  // respects reduced-motion.
  const timeField = document.querySelector('[data-readout-time]');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (timeField && !prefersReduced) {
    const update = () => {
      const now = new Date();
      timeField.textContent = now.toLocaleTimeString('en-US', { hour12: false });
    };
    update();
    setInterval(update, 1000);
  }

  // Contact form: placeholder submit handler (wire to Formspree / backend on launch)
  const form = document.querySelector('#quote-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sent — we\u2019ll follow up soon';
      btn.disabled = true;
    });
  }
});
