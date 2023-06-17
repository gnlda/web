const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));

sliderWrapper.innerHTML += sliderWrapper.innerHTML;

let isDown = false;
let startX;
let scrollLeft;
let isScrolling = false;
let lastScrollX = 0;
let scrollVelocity = 0;

sliderContainer.addEventListener('mousedown', (event) => {
  isDown = true;
  startX = event.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
  isScrolling = true;
  lastScrollX = event.pageX;
  sliderContainer.classList.add('scrolling');
});

sliderContainer.addEventListener('mouseleave', () => {
  isDown = false;
  isScrolling = false;
  sliderContainer.classList.remove('scrolling');
});

sliderContainer.addEventListener('mouseup', () => {
  isDown = false;
  isScrolling = false;
  sliderContainer.classList.remove('scrolling');
});

sliderContainer.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - sliderContainer.offsetLeft;
  const walk = x - startX;
  sliderContainer.scrollLeft = scrollLeft - walk;
  isScrolling = true;
  scrollVelocity = event.pageX - lastScrollX;
  lastScrollX = event.pageX;
});

sliderContainer.addEventListener('scroll', () => {
  if (sliderContainer.scrollLeft === 0) {
    sliderContainer.scrollLeft = sliderWrapper.offsetWidth / 2;
  } else if (sliderContainer.scrollLeft >= sliderWrapper.scrollWidth - sliderContainer.offsetWidth) {
    sliderContainer.scrollLeft = sliderWrapper.offsetWidth / 2 - sliderContainer.offsetWidth;
  }

  if (!isScrolling) {
    scrollVelocity *= 0.95;
    if (Math.abs(scrollVelocity) < 0.5) {
      isScrolling = false;
      sliderContainer.classList.remove('scrolling');
    } else {
      sliderContainer.scrollLeft += scrollVelocity;
    }
  }
});
