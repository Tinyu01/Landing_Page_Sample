// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const appContainer = document.getElementById('app-container');

themeToggle.addEventListener('click', () => {
  appContainer.classList.toggle('dark');
  localStorage.setItem('theme', appContainer.classList.contains('dark') ? 'dark' : 'light');
});

// Set initial theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  appContainer.classList.add('dark');
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});