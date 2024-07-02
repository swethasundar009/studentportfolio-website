// Selectors
const menuToggle = document.querySelector('.custom-hamburger');
const menu = document.querySelector('.custom-menu');
const portfolioItems = document.querySelectorAll('.custom-portfolio-item');
const contactForm = document.querySelector('.custom-contact-form');

// Event listeners
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

portfolioItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Add functionality to portfolio items here
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add functionality to contact form here
});