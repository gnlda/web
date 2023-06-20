let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
  item.style.width = 346 + "px";
});

let gap = 24;
let isTouch = false;
let offset = 0;
let initialOffset = 0;
let velocity = 0;
let momentum = 0.99;

sliderCover.addEventListener("mousedown", e => {
  isTouch = true;
  offset = e.offsetX;
  initialOffset = parseInt(slider.style.left);
  velocity = 0;
});

document.addEventListener("mouseup", e => {
  isTouch = false;
  let finalOffset = parseInt(slider.style.left);
  velocity = (finalOffset - initialOffset) * 0.5; // Умножаем на коэффициент для сглаживания инерции
});

sliderCover.addEventListener("mousemove", e => {
  if (isTouch === true) {
    let left = initialOffset + e.offsetX - offset;
    slider.style.left = left + "px";
  }
});

const autoScroll = () => {
  if (isTouch === false) {
    slider.style.left = parseInt(slider.style.left) - 1 + "px";
    let left = parseInt(slider.style.left);
    if (left < -sliderLength - offset) {
      left = left + sliderLength;
      slider.style.left = left + "px";
    } else if (left > -offset) {
      left = left - sliderLength;
      slider.style.left = left + "px";
    }
  }
};

const inertiaScroll = () => {
  if (isTouch === false && Math.abs(velocity) > 0.1) {
    velocity *= momentum;
    slider.style.left = parseInt(slider.style.left) + velocity + "px";
    requestAnimationFrame(inertiaScroll);
  }
};

sliderCover.addEventListener("mouseout", e => {
  if (isTouch === true) {
    isTouch = false;
    let finalOffset = parseInt(slider.style.left);
    velocity = (finalOffset - initialOffset) * 0.5;
    inertiaScroll();
  }
});

const sliderLength = sliderItems.length / 2 * (parseInt(sliderItems[0].style.width) + gap);
slider.style.left = -sliderLength + gap + "px";

setInterval(autoScroll, 20);
