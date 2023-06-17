let slider = document.querySelector(".slider");
slider.style.left = 0;
let startX;
let isUserTouching = false;
let delta;

slider.addEventListener("mousedown", (e) => {
    delta = +slider.style.left.substring(0, slider.style.left.length - 2);
    console.log(delta)
    startX = e.clientX;
    isUserTouching = true;
});

document.addEventListener("mouseup", (e) => {
   isUserTouching = false;
});


document.addEventListener("mousemove", (e) => {
    if (startX && isUserTouching === true) {
        // console.log(slider.style.left);
        slider.style.left = delta + e.clientX - startX + "px";
        delta = 0;
    }
});