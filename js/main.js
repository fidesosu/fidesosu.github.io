document.addEventListener("DOMContentLoaded", function() {
  const toggleNavbarButton = document.getElementById('toggle-navbar-button');
  const navbar = document.getElementById('navbar');

  toggleNavbarButton.addEventListener('click', function() {
    if (navbar.style.display === 'block') {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'block';
    }
  });
});