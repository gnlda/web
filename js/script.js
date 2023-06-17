const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));

sliderWrapper.innerHTML += sliderWrapper.innerHTML;

let isDown = false;
let startX;
let scrollLeft;

sliderContainer.addEventListener('mousedown', (event) => {
  isDown = true;
  startX = event.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
});

sliderContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

sliderContainer.addEventListener('mouseup', () => {
  isDown = false;
});

sliderContainer.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - sliderContainer.offsetLeft;
  const walk = (x - startX) * 2;
  sliderContainer.scrollLeft = scrollLeft - walk;
});

sliderContainer.addEventListener('scroll', () => {
  if (sliderContainer.scrollLeft === 0) {
    sliderContainer.scrollLeft = sliderContainer.scrollWidth;
  } else if (sliderContainer.scrollLeft >= sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
    sliderContainer.scrollLeft = 0;
  }
});