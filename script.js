// Add your JavaScript code here

//MAIN HEADER & NAV
// fetch('header.html')
// .then(response => response.text())
// .then(html => {
//   document.getElementById('header-placeholder').innerHTML = html;
// });

//toggle the navigation menu
// function toggleMenu() {
//   const nav = document.querySelector('nav');
//   nav.classList.toggle('active');
// }

//LIGHTBOX IMAGES
// Get all elements with the class "lightbox-image"
const lightboxImages = document.querySelectorAll('.lightbox-image');

// Create a new div for the lightbox
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

// Function to open the lightbox
function openLightbox(imageSrc, altText) {
  const lightboxContent = `<img src="${imageSrc}" alt="${altText}">`;
  lightbox.innerHTML = lightboxContent;
  lightbox.classList.add('active');
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.innerHTML = ''; // Clear the content
  lightbox.classList.remove('active');
}

// Attach click event listeners to each image
lightboxImages.forEach((image) => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    openLightbox(src, alt);
  });
});

// Attach click event listener to close the lightbox
lightbox.addEventListener('click', closeLightbox);

// Passwords
function checkPassDS() {
  var password = prompt("Please enter the password:");
  // Check the entered password (you should validate on the server side)
  if (password === "letsg024") {
    window.location.href = "design-system.html";
  } else {
    alert("Incorrect password. Access denied.");
    // Optionally, redirect to another page or take further action.
  }
}
function checkPassEX() {
  var password = prompt("Please enter the password:");
  // Check the entered password (you should validate on the server side)
  if (password === "letsg024") {
    window.location.href = "zero-to-one.html";
  } else {
    alert("Incorrect password. Access denied.");
    // Optionally, redirect to another page or take further action.
  }
}
function checkPassB2B() {
  var password = prompt("Please enter the password:");
  // Check the entered password (you should validate on the server side)
  if (password === "letsg024") {
    window.location.href = "profile-mgmt.html";
  } else {
    alert("Incorrect password. Access denied.");
    // Optionally, redirect to another page or take further action.
  }
}

