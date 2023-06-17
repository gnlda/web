let slider = document.querySelector(".slider");
slider.style.left = 0;
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
        console.log(slider.style.left);
        slider.style.left =  e.clientX - startX + "px";
        let delta
    }
});