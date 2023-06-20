let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

let gap = 24;
const sliderLength = (slider.offsetWidth + gap) / 2;
slider.style.left = -sliderLength + gap + "px";
let left = parseInt(slider.style.left);
let isTouch = false;
let isMouseOver = false;
const offset = 20;
let velocity = 0;
let previousOffset = 0;
let velocityInterval;

console.log(sliderLength);


let delta = 0;


const mousedownHandler = (e) => {
    isTouch = true;


    
}


const mouseupHandler = (e) => {
    isTouch = false;


    
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
    if(isTouch === true) {
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
        console.log(`delta = ${delta}`);
    }
    previousOffset = e.offsetX;
}




const autoScroll = () => {
    


    
};


const velocityFunction = () => {
    


    
};



sliderCover.addEventListener("mousedown", mousedownHandler);
sliderCover.addEventListener("mouseup", mouseupHandler);
sliderCover.addEventListener("mouseover", mouseoverHandler);
sliderCover.addEventListener("mouseleave", mouseleaveHandler);
sliderCover.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseup", documentMouseupHandler);


//console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);