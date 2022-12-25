document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('toggle-navbar-button').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('show');
  });

  // Close the navbar if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#toggle-navbar-button')) {
      var navbars = document.getElementsByClassName("navbar-collapse");
      var i;
      for (i = 0; i < navbars.length; i++) {
        var openNavbar = navbars[i];
        if (openNavbar.classList.contains('show')) {
          openNavbar.classList.remove('show');
        }
      }
    }
  }
});