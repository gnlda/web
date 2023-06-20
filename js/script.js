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


const mousedownHandler = (e) => {
    isTouch = true;


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
}


const mouseupHandler = (e) => {
    isTouch = false;


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
}


const documentMouseupHandler = (e) => {
    isTouch = false;


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
}


const mouseoverHandler= (e) => {
    isMouseOver = true;


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
}


const mouseleaveHandler = (e) => {
    isTouch = false;
    isMouseOver = false;

    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
}


const mousemoveHandler = (e) => {
    if(isTouch === true)


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
}




const autoScroll = () => {
    


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
};


const velocityFunction = () => {
    


    console.log(`left = ${left}, isTouch = ${isTouch}, velocity = ${velocity}, previousOffset = ${previousOffset}, isMouseOver = ${isMouseOver}`);
};



sliderCover.addEventListener("mousedown", mousedownHandler);
sliderCover.addEventListener("mouseup", mouseupHandler);
sliderCover.addEventListener("mouseover", mouseoverHandler);
sliderCover.addEventListener("mouseleave", mouseleaveHandler);
sliderCover.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseup", documentMouseupHandler);