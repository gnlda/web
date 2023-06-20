let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");

let gap = 24;
const sliderLength = (slider.offsetWidth + gap) / 2;
slider.style.left = -sliderLength + gap + "px";
let left = parseInt(slider.style.left);
let isTouch = false;
let isMouseOver = false;
const offset = 20;
let velocity = 0;
const velocityMultiplier = 0.9;
let previousOffset = 0;
let velocityInterval;

console.log(sliderLength);


let delta = 0;


const mousedownHandler = (e) => {
    isTouch = true;


    
}


const mouseupHandler = (e) => {
    isTouch = false;
    if (delta != 0) {
        velocity = delta * 10;
        velocityInterval = setInterval(velocityFunction, 20);
    }
}


const documentMouseupHandler = (e) => {
    isTouch = false;


    
}


const mouseoverHandler= (e) => {
    isMouseOver = true;


    
}


const mouseleaveHandler = (e) => {
    isTouch = false;
    isMouseOver = false;

    
}


const mousemoveHandler = (e) => {
    if(isTouch === true && isMouseOver === true) {
        delta = e.offsetX - previousOffset;
        let left = parseInt(slider.style.left) + delta;
        if (left < -offset && left > -sliderLength - offset) {
            slider.style.left = `${left}px`;
            console.log(slider.style.left);
        } else if (left >= -offset) {
            left -= sliderLength;
            slider.style.left = `${left}px`;
            console.log(slider.style.left);
        } else if (left <= -sliderLength -offset) {
            left += sliderLength;
            slider.style.left = `${left}px`;
            console.log(slider.style.left);
        }
        //console.log(`delta = ${delta}`);
    }
    previousOffset = e.offsetX;
}




const autoScroll = () => {
    


    
};


const velocityFunction = () => {

    left = parseInt(slider.style.left) + velocity * velocityMultiplier;
    slider.style.left = `${left}px`;
    console.log(`velocity = ${velocity}`);

    if (velocity < 2) {
        clearInterval(velocityInterval);
    }
    
};



sliderCover.addEventListener("mousedown", mousedownHandler);
sliderCover.addEventListener("mouseup", mouseupHandler);
sliderCover.addEventListener("mouseover", mouseoverHandler);
sliderCover.addEventListener("mouseleave", mouseleaveHandler);
sliderCover.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseup", documentMouseupHandler);


//console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);