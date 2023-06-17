let slider = document.querySelector(".slider");

let startX;

slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
});