const slider = document.getElementById('slider');
const sliderContent = document.getElementById('slider-content');
let isMouseDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
  isMouseDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the scroll speed here
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('scroll', () => {
  const { scrollLeft, scrollWidth, clientWidth } = slider;
  const firstSlide = sliderContent.querySelector('.slide');
  
  if (scrollLeft === 0) {
    // First slide is out of view on the left, move it to the right side
    sliderContent.appendChild(firstSlide);
    slider.scrollLeft = 1; // Set scrollLeft to 1 to prevent jumpy behavior
  } else if (scrollLeft + clientWidth === scrollWidth) {
    // Last slide is out of view on the right, move it to the left side
    sliderContent.insertBefore(firstSlide, sliderContent.firstChild);
    slider.scrollLeft = slider.scrollLeft - 1; // Adjust scrollLeft accordingly
  }
});
