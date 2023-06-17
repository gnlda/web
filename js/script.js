let slider = document.querySelector(".slider");
slider.style.left = 0;
let startX;
let isUserTouching = false;
let left;

slider.addEventListener("mousedown", (e) => {
    if (e.target.class !== 'dd') {
        left = +slider.style.left.substring(0, slider.style.left.length - 2);
        startX = e.clientX;
        isUserTouching = true;
    }
});

document.addEventListener("mouseup", (e) => {
   isUserTouching = false;
});


document.addEventListener("mousemove", (e) => {
    if (startX && isUserTouching === true) {
        slider.style.left = left + e.clientX - startX + "px";
    }
});