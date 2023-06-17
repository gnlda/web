const sliderContainer = document.querySelector('.slider-container');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = Array.from(document.querySelectorAll('.slider-item'));

sliderWrapper.innerHTML += sliderWrapper.innerHTML;

sliderContainer.addEventListener('scroll', () => {
  if (sliderContainer.scrollLeft === 0) {
    sliderContainer.scrollLeft = sliderWrapper.offsetWidth / 2;
  } else if (sliderContainer.scrollLeft >= sliderWrapper.scrollWidth - sliderContainer.offsetWidth) {
    sliderContainer.scrollLeft = sliderWrapper.offsetWidth / 2 - sliderContainer.offsetWidth;
  }
});

sliderContainer.addEventListener('mousemove', (event) => {
  const containerWidth = sliderContainer.offsetWidth;
  const mouseX = event.pageX - sliderContainer.offsetLeft;
  const scrollSpeed = 3;

  if (mouseX < containerWidth * 0.25) {
    sliderContainer.scrollLeft -= scrollSpeed;
  } else if (mouseX > containerWidth * 0.75) {
    sliderContainer.scrollLeft += scrollSpeed;
  }
});