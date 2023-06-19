let slider = document.querySelector(".slider");
let startLeft = 0;
let isTouch = false;

slider.addEventListener("mousedown", e => {
    startLeft = e.offsetX;
    isTouch = true;
});

document.addEventListener("mouseup", e => {
    isTouch = false;
});



slider.style.left = -2196 + "px";
let sliderLength = 2220;

slider.addEventListener("mousemove", e => {
    if (isTouch === true) {
    let left = parseInt(slider.style.left);
        if (left <= -410 && left >= -2630) {
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        } else if (left < -2630) {
            left = left + sliderLength;
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        } else if (left > -410) {
            left = left - sliderLength;
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        }
    }
});

setInterval(() => {
    left--;
}, 15)