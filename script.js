// script.js

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const typingElement = document.getElementById("typing");
  const phrases = ["Frontend Developer", "Web Designer", "Creative Coder"];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    const displayedText = currentPhrase.substring(0, currentCharIndex);
    typingElement.textContent = displayedText;

    if (isDeleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Optional: auto-close menu on link click (mobile UX)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // Simple form validation
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message!");
      contactForm.reset();
    }
  });
});
