let slider = document.querySelector(".slider");
let startLeft = 0;
let isTouch = false;

slider.addEventListener("mousedown", e => {
    startLeft = e.offsetX;
    isTouch = true;
});

slider.addEventListener("mouseup", e => {
    isTouch = false;
});

slider.addEventListener("mousemove", e => {
    if (isTouch === true){
        let left = parseInt(slider.style.left);
        console.log(left + e.offsetX + "px");
        slider.style.left = left + e.offsetX + "px";
    }
});