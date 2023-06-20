let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});

let gap = 24;
let isTouch = false;
let offcet = 20;
let velocity = 0;
let momentum = 0.99;
let previousOffcet = 0;

sliderCover.addEventListener("mousedown", e => {
    isTouch = true;
    previousOffcet = 0;
});

document.addEventListener("mouseup", e => {
    isTouch = false;
    velocity *= 100;
    console.log(velocity);
    if(e.target == sliderCover) {
        if (Math.abs(velocity) > 1) {
            console.log("in");
            let velocityInterval = setInterval(() => {
                velocity *= momentum;
                slider.style.left = parseInt(slider.style.left) + velocity + "px";
                console.log(`slider.style.left + velocity = ${slider.style.left}, velocity = ${velocity}`);
                if (Math.abs(velocity) < 2) {
                    console.log("bye");
                    clearInterval(velocityInterval);
                    previousOffcet = 0;
                }
            }, 20);
        }
    }
});

const sliderLength = sliderItems.length / 2 * (parseInt(sliderItems[0].style.width) + gap);
slider.style.left = -sliderLength + gap + "px";

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
    velocity = - previousOffcet + e.offsetX;
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
}, 30);