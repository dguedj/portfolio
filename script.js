function showCountry(country) {

  let galleries = document.querySelectorAll(".gallery");
  let menuItems = document.querySelectorAll(".menu li");

  // cacher toutes les galeries
  galleries.forEach(g => {
    g.classList.remove("active");
  });

  // retirer l'état actif du menu
  menuItems.forEach(item => {
    item.classList.remove("active");
  });

  // afficher la galerie choisie
  document.getElementById(country).classList.add("active");

  // activer le bouton du menu
  document.querySelector(`.menu li[onclick="showCountry('${country}')"]`)
    .classList.add("active");
}

/* Zoom image */
function addImageZoom() {
  let galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(img => {
    img.addEventListener("click", function() {
      document.getElementById("overlay").style.display = "flex";
      document.getElementById("overlay-img").src = this.src;
    });
  });
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {

  slides[index].classList.remove("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");

}

