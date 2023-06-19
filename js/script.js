let slider = document.querySelector(".slider");
let startLeft = 0;
let isTouch = false;

slider.addEventListener("mousedown", e => {
    startLeft = e.offsetX;
    isTouch = true;
});

slider.addEventListener("mousemove", e => {
    slider.style.left = startLeft - e.offsetX;
});