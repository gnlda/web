let slider = document.querySelector(".slider");
slider.style.left = 400 + "px";
let startX;
let isUserTouching = false;
let left;
let items = [
    '<div class="slider__item"><p class="dd">1</p></div>',
    '<div class="slider__item"><p class="dd">2</p></div>',
    '<div class="slider__item"><p class="dd">3</p></div>',
    '<div class="slider__item"><p class="dd">4</p></div>',
    '<div class="slider__item"><p class="dd">5</p></div>',
    '<div class="slider__item"><p class="dd">6</p></div>',
    '<div class="slider__item"><p class="dd">7</p></div>',
    '<div class="slider__item"><p class="dd">8</p></div>',
]
for (let i = 0; i < items.length; i++) {
    slider.insertAdjacentHTML('beforeend', items[i])
}

slider.addEventListener("mousedown", (e) => {
    if (e.target.className !== 'dd') {
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
    if (+slider.style.left.substring(0, slider.style.left.length - 2) < 300) {
        const firstItem = items.shift(); // Удаление первого элемента массива и сохранение его
        slider[0].remove();
}});
