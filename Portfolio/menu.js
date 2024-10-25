// collapseMenu.js
const menuLinks = document.querySelectorAll('#sideMenu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hide mobile menu after link click
    sideMenu.classList.add('hidden');
  });
});
