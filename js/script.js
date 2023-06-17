let slider = document.querySelector(".slider");

let startX;
let isUserTouching = false;

slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isUserTouching = true;
});

slider.addEventListener("mouseup", (e) => {
    startX = e.clientX;
});


document.addEventListener("mousemove", (e) => {
    if (startX && isUserTouching == true) {
        slider.style.left = e.clientX - startX + "px";
    }
});