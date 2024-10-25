// mobileMenu.js
const menuToggle = document.querySelector('button img[alt="Menu"]');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
  // Toggle the visibility of the mobile menu
  sideMenu.classList.toggle('hidden');
});
