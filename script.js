// Add your JavaScript code here

//MAIN HEADER & NAV
// fetch('header.html')
// .then(response => response.text())
// .then(html => {
//   document.getElementById('header-placeholder').innerHTML = html;
// });

//toggle the navigation menu
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}
