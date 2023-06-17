let slider = document.querySelector(".slider");

let startX;

slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
});


document.addEventListener("mousemove", (e) => {
    if (startX) {
        slider.style.left = e.clientX - startX + "px";
    }
});