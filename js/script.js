let slider = document.querySelector(".slider");
let startLeft = 0;

slider.addEventListener("mousedown", e => {
    startLeft = e.offsetX;
});