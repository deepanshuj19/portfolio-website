// Typed.js effect
const typed = new Typed('#element', {
  strings: ['Web Developer', 'Front-End Enthusiast', 'JavaScript Ninja'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Auto close hamburger menu on link click (for mobile UX)
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-triggered animation
const animatedSections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3,
});

animatedSections.forEach(section => observer.observe(section));

// Contact form submit (mock handler)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Sending...';

  setTimeout(() => {
    status.textContent = 'Message sent successfully!';
    e.target.reset();
  }, 1500);
});