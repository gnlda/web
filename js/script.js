let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});

let gap = 24;
const sliderLength = sliderItems.length / 2 * (parseInt(sliderItems[0].style.width) + gap);
slider.style.left = -sliderLength + gap + "px";
let left = parseInt(slider.style.left);
let isTouch = false;
let offcet = 20;
let velocity = 0;
let innerVelocity = 0;
let momentum = 0.8;
let previousOffcet = 0;
let velocityInterval;


document.addEventListener("mouseup", e => {
    isTouch = false;
    if (Math.abs(velocity) !== 0) {
        innerVelocity = velocity;
        console.log(`innerVelocity = ${innerVelocity}`);
        velocityInterval = setInterval(velocityFunction, 20);
    }
});

sliderCover.addEventListener("mousedown", e => {
    isTouch = true;
    clearInterval(autoScroll);
    console.log(`left = ${left}, innerVelocity = ${innerVelocity}`);
});


sliderCover.addEventListener("mousemove", e => {
    if (isTouch === true) {
        left = parseInt(slider.style.left);
        if(left < -offcet && left > -sliderLength - offcet) {
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            console.log(slider.style.left);
        } else if(left >= -offcet) {
            left = left - sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            console.log(slider.style.left);
        } else if(left <= -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX  + "px";
            console.log(slider.style.left);
        }
    }
    velocity = (-previousOffcet + e.offsetX) * 3;
    previousOffcet = e.offsetX;
});

const autoScroll = () => {
    if (isTouch === false) {
        slider.style.left = parseInt(slider.style.left) - 1 + "px";
        let left = parseInt(slider.style.left);
        if (left < -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left + "px";
        } else if (left > -offcet) {
            left = left - sliderLength;
            slider.style.left = left + "px";
        }
    }
}


const velocityFunction = () => {
    innerVelocity *= 0.999;
    left = parseInt(slider.style.left) + innerVelocity;
    slider.style.left = left + "px";
    console.log(`left = ${left}, innerVelocity = ${innerVelocity}`);
    //clearInterval(autoScroll);
    if (left < -sliderLength - offcet) {
        left = left + sliderLength;
        slider.style.left = left + "px";
    } else if (left > -offcet) {
        left = left - sliderLength;
        slider.style.left = left + "px";
    }
    if (Math.abs(innerVelocity) < 2) {
        console.log("bye");
        clearInterval(velocityInterval);
        return 0;
        //setInterval(autoScroll, 2);
        //previousOffcet = 0;
    }
}


//setInterval(autoScroll, 20);