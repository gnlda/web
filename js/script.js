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

slider.addEventListener("mousemove", e => {
    let left = parseInt(slider.style.left);
    console.log(left);
    if (isTouch === true) {
        if (left <= -420 && left >= -2630) {
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        } else if (left <= -2630) {
            left = -420;
            slider.style.left = left + e.offsetX - startLeft + "px";
            console.log(left);
        }
    }

});