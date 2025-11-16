/* ===== Sliders multiples ===== */
const sliders = {};

function showSlides(sliderContainer, n) {
  const slides = sliderContainer.querySelectorAll('.slide');

  if (!sliders[sliderContainer.dataset.slider]) {
    sliders[sliderContainer.dataset.slider] = 1;
  }

  let index = sliders[sliderContainer.dataset.slider];

  if (n !== undefined) index += n;

  if (index > slides.length) index = 1;
  if (index < 1) index = slides.length;

  slides.forEach(slide => slide.style.display = 'none');
  slides[index - 1].style.display = 'block';

  sliders[sliderContainer.dataset.slider] = index;
}

function plusSlides(btn, n) {
  const sliderContainer = btn.closest('.slideshow-container');
  showSlides(sliderContainer, n);
}

document.querySelectorAll('.slideshow-container').forEach(slider => {
  showSlides(slider);
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

const countEl = document.getElementById('count');
fetch('https://api.countapi.xyz/update/ton-namespace/ta-page/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });

