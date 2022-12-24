document.addEventListener("DOMContentLoaded", function() {
  const toggleNavbarButton = document.getElementById('toggle-navbar-button');
  const navbar = document.getElementById('navbar');

  toggleNavbarButton.addEventListener('click', function() {
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });
});