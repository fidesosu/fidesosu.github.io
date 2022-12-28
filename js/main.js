document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('menu-button').addEventListener('click', function() {
    // toggle the .show class on the navbar element
    document.getElementById('menu').classList.toggle('show');

    // toggle the .blur class on the body element
    document.querySelector('.getblurred').classList.toggle('blur');
  });
});
