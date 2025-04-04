// Selectors
const homeSection = document.querySelector('.home-section');
const aboutSection = document.querySelector('.about-section');
const skillsSection = document.querySelector('.skills-section');
const projectsSection = document.querySelector('.projects-section');
const resumeSection = document.querySelector('.resume-section');
const contactSection = document.querySelector('.contact-section');

const navLinks = document.querySelectorAll('nav ul li a');
const projectButtons = document.querySelectorAll('.project button');
const contactForm = document.querySelector('.contact form');
const downloadResumeButton = document.querySelector('.resume-link button');

// Event Listeners
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Add project details modal or alert
    alert('Project details will be displayed here.');
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Send form data to server or display success message
  alert('Thank you for contacting me!');
});

downloadResumeButton.addEventListener('click', () => {
  // Trigger resume download or display alert
  alert('Resume downloaded successfully!');
});

// Typed.js animation
var typed = new Typed('#element', {
  strings: ['Web Developer', 'Web Designer', 'Freelancer', 'Photographer...'],
  typeSpeed: 50,
});
