/* ===== Sliders multiples ===== */
const sliders = {}; // Stocke l'index de chaque slider

// Affiche une slide pour un slider spécifique
function showSlides(sliderContainer, n) {
  const slides = sliderContainer.querySelectorAll('.slide');

  // Initialise l'index si nécessaire
  if (!sliders[sliderContainer.dataset.slider]) {
    sliders[sliderContainer.dataset.slider] = 1;
  }

  let index = sliders[sliderContainer.dataset.slider];
  if (n !== undefined) {
    index += n;
  }

  if (index > slides.length) index = 1;
  if (index < 1) index = slides.length;

  slides.forEach(slide => slide.style.display = 'none');
  slides[index - 1].style.display = 'block';

  sliders[sliderContainer.dataset.slider] = index;
}

// Boutons précédent / suivant
function plusSlides(el, n) {
  const sliderContainer = el.closest('.slideshow-container');
  showSlides(sliderContainer, n);
}

// Initialisation de tous les sliders au chargement
document.querySelectorAll('.slideshow-container').forEach(slider => {
  showSlides(slider); // Affiche la première image
});

/* ===== Animation au scroll ===== */
const sections = document.querySelectorAll('.section-animated');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.classList.add('visible');
    }
  });
});
