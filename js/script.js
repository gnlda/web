let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});

let gap = 24;
const sliderLength = (sliderItems.length / 2) * (parseInt(sliderItems[0].style.width) + gap);
slider.style.left = -sliderLength + gap + "px";
let left = parseInt(slider.style.left);
let isTouch = false;
let offset = 20;
let velocity = 0;
let previousOffset = 0;
let velocityInterval;

sliderCover.addEventListener("mousedown", e => {
    isTouch = true;
    clearInterval(autoScrollInt);
    clearInterval(velocityInterval);
});

sliderCover.addEventListener("mouseup", e => {
    isTouch = false;
    if (Math.abs(velocity) !== 0) {
        velocityInterval = setInterval(velocityFunction, 20);
    }
});

document.addEventListener("mouseup", e => {
    isTouch = false;
});

sliderCover.addEventListener("mouseleave", e => {
    isTouch = false;
});

sliderCover.addEventListener("mousemove", e => {
    if (isTouch === true) {
        left = parseInt(slider.style.left);
        if (left < -offset && left > -sliderLength - offset) {
            slider.style.left = left - previousOffset + e.offsetX + "px";
        } else if (left >= -offset) {
            left = left - sliderLength;
            slider.style.left = left - previousOffset + e.offsetX + "px";
        } else if (left <= -sliderLength - offset) {
            left = left + sliderLength;
            slider.style.left = left - previousOffset + e.offsetX + "px";
        }
    }
    velocity = (-previousOffset + e.offsetX) * 3;
    previousOffset = e.offsetX;
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

const velocityFunction = () => {
    velocity *= 0.95;
    left = parseInt(slider.style.left) + velocity;
    slider.style.left = left + "px";
    if (left < -sliderLength - offset) {
        left = left + sliderLength;
        slider.style.left = left + "px";
    } else if (left > -offset) {
        left = left - sliderLength;
        slider.style.left = left + "px";
    }
    if (Math.abs(velocity) < 2) {
        clearInterval(velocityInterval);
        setTimeout(() => {
            autoScrollInt = setInterval(autoScroll, 20);
        }, 100);
        return 0;
    }
};

let autoScrollInt = setInterval(autoScroll, 20);
