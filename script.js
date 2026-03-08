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
  let activeItem = document.querySelector(`.menu li[onclick="showCountry('${country}')"]`);
  if(activeItem){
    activeItem.classList.add("active");
  }
}



/* Zoom image */

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}


/* slideshow */

let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {

  if(slides.length === 0) return;

  slides[index].classList.remove("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");

}

setInterval(nextSlide, 3000); // toutes les 3 secondes


/* système de note */

function rate(score){

  document.getElementById("rating-result").innerText =
  "Merci ! Vous avez donné la note de " + score + "/10";

}


