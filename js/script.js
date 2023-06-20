let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});

let gap = 24;
let isTouch = false;
let offcet = 20;

sliderCover.addEventListener("mousedown", e => {
    isTouch = true;
});

document.addEventListener("mouseup", e => {
    isTouch = false;
});

const sliderLength = sliderItems.length / 2 * (parseInt(sliderItems[0].style.width) + gap);
slider.style.left = -sliderLength + gap + "px";
console.log(`start ${slider.style.left}`);
console.log(`offcet ${offcet}`);
console.log(`sliderLength - offcet ${sliderLength - offcet}`);

let previousOffcet = 0;
sliderCover.addEventListener("mousemove", e => {
    if (isTouch === true) {
        let left = parseInt(slider.style.left);
        if(left < -offcet && left > -sliderLength - offcet) {
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            //console.log(slider.style.left);
        } else if(left >= -offcet) {
            left = left - sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            //console.log(slider.style.left);
        } else if(left <= -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            //console.log(slider.style.left);
        }
    }
    previousOffcet = e.offsetX;
});

setInterval(() => {
    if (isTouch === false) {
        slider.style.left = parseInt(slider.style.left) - 1 + "px";
        let left = parseInt(slider.style.left);
        //console.log(left);
        if (left < -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left + "px";
        } else if (left > -offcet) {
            left = left - sliderLength;
            slider.style.left = left + "px";
        }
    }
}, 200);