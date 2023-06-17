const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));

sliderWrapper.innerHTML += sliderWrapper.innerHTML;

let isDown = false;
let startX;
let scrollLeft;
let isScrolling = false;
let velocity = 0;
let lastPosX = 0;
let timestamp = 0;

sliderContainer.addEventListener('mousedown', (event) => {
  isDown = true;
  startX = event.pageX - sliderContainer.offsetLeft;
  scrollLeft = sliderContainer.scrollLeft;
  velocity = 0;
  isScrolling = false;
  lastPosX = event.pageX;
  timestamp = Date.now();
});

sliderContainer.addEventListener('mouseleave', () => {
  isDown = false;
  handleInertiaScroll();
});

sliderContainer.addEventListener('mouseup', () => {
  isDown = false;
  handleInertiaScroll();
});

sliderContainer.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - sliderContainer.offsetLeft;
  const walk = x - startX;
  sliderContainer.scrollLeft = scrollLeft - walk;

  const currentPosX = event.pageX;
  const currentTime = Date.now();
  const timeDiff = currentTime - timestamp;
  if (timeDiff > 0) {
    velocity = (currentPosX - lastPosX) / timeDiff;
    lastPosX = currentPosX;
    timestamp = currentTime;
  }
});

function handleInertiaScroll() {
  if (!isScrolling && Math.abs(velocity) > 0.2) {
    isScrolling = true;
    requestAnimationFrame(inertiaScroll);
  }
}

function inertiaScroll() {
  sliderContainer.scrollLeft += velocity;
  velocity *= 0.95;
  
  if (Math.abs(velocity) > 0.2) {
    requestAnimationFrame(inertiaScroll);
  } else {
    isScrolling = false;
  }
}

sliderContainer.addEventListener('scroll', () => {
  if (sliderContainer.scrollLeft === 0) {
    sliderContainer.scrollLeft = sliderWrapper.offsetWidth / 2;
  } else if (sliderContainer.scrollLeft >= sliderWrapper.scrollWidth - sliderContainer.offsetWidth) {
    sliderContainer.scrollLeft = sliderWrapper.offsetWidth / 2 - sliderContainer.offsetWidth;
  }
});