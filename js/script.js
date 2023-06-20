let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");
let sliderItems = document.querySelectorAll(".slider__item");

sliderItems.forEach(item => {
    item.style.width = 346 + "px";
});

let gap = 24;
let isTouch = false;
let offcet = 20;

let velocity = 0; // переменная для хранения текущей скорости
let momentum = 0.9; // коэффициент инерции, можно настроить по своему усмотрению

sliderCover.addEventListener("mousedown", e => {
    isTouch = true;
    velocity = 0; // сброс скорости при начале движения
});

document.addEventListener("mouseup", e => {
    isTouch = false;
    if (previousOffcet != 0) {
        // Используем setInterval для создания плавного замедления
        let interval = setInterval(() => {
            velocity *= momentum; // применяем коэффициент инерции
            slider.style.left = parseInt(slider.style.left) - velocity + "px";

            if (Math.abs(velocity) < 0.1) {
                // Если скорость становится очень маленькой, останавливаем интервал
                clearInterval(interval);
            }
        }, 20);
    }
});

sliderCover.addEventListener("mousemove", e => {
    if (isTouch === true) {
        let left = parseInt(slider.style.left);
        if (left < -offcet && left > -sliderLength - offcet) {
            slider.style.left = left - previousOffcet + e.offsetX + "px";
            velocity = e.offsetX - previousOffcet; // обновляем скорость при движении
        } else if (left >= -offcet) {
            left = left - sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX + "px";
            velocity = e.offsetX - previousOffcet; // обновляем скорость при движении
        } else if (left <= -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left - previousOffcet + e.offsetX + "px";
            velocity = e.offsetX - previousOffcet; // обновляем скорость при движении
        }
    }
    previousOffcet = e.offsetX;
});

setInterval(() => {
    if (isTouch === false) {
        let left = parseInt(slider.style.left);
        let deceleration = 0.9; // коэффициент замедления

        // Применяем инерцию при остановке движения
        if (Math.abs(velocity) > 0.1) {
            velocity *= deceleration; // применяем коэффициент замедления
            slider.style.left = left - velocity + "px";
        }

        // Перемещение слайдов при достижении границ
        if (left < -sliderLength - offcet) {
            left = left + sliderLength;
            slider.style.left = left + "px";
        } else if (left > -offcet) {
            left = left - sliderLength;
            slider.style.left = left + "px";
        }
    }
}, 30);
