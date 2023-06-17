const sliderContainer = document.querySelector('.slider-container');
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
  const x = event.pageX;
  const walk = (x - startX) * 2;
  sliderContainer.scrollLeft = scrollLeft - walk;
});