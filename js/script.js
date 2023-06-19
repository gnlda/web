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



slider.style.left = 0 + "px";
slider.addEventListener("mousemove", e => {
    if (isTouch === true){
        let left = parseInt(slider.style.left);
        console.log(left);
        slider.style.left = left + e.offsetX - startLeft + "px";
    }
});