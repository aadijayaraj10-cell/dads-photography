/* main.js — Photography Portfolio helpers */

// ── Sticky nav shadow on scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ── Close mobile nav on link click ──
navLinks.forEach(a => {
  a.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

// ── Contact form (front-end only) ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-send');
  const msg = document.getElementById('form-success');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  // Simulate async — wire up a real backend (Formspree, EmailJS, etc.) here
  setTimeout(() => {
    e.target.reset();
    btn.style.display = 'none';
    msg.classList.add('visible');
  }, 800);
}

// ── Footer year ──
document.getElementById('year').textContent = new Date().getFullYear();
