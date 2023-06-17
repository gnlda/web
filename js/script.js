let slider = document.querySelector(".slider");
//slider.style.left = 0;
console(slider.style.left);
let startX;
let isUserTouching = false;

slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isUserTouching = true;
});

document.addEventListener("mouseup", (e) => {
   isUserTouching = false;
});


document.addEventListener("mousemove", (e) => {
    if (startX && isUserTouching === true) {
        slider.style.left =  e.clientX - startX + "px";
    }
});