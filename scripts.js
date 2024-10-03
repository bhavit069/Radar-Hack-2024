const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

menuToggle.addEventListener('click', () => {
  // Toggle the hidden class to show/hide the mobile menu
  mobileMenu.classList.toggle('hidden');

  // Toggle the icons
  menuOpenIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
});