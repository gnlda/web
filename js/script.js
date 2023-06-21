let slider = document.querySelector(".slider");
let sliderCover = document.querySelector(".slider__cover");

let gap = 24;
const sliderLength = (slider.offsetWidth + gap) / 2;
slider.style.left = -sliderLength + gap + "px";
let left = parseInt(slider.style.left);
let isTouch = false;
const offset = 20;
let velocity = 0;
const velocityMultiplier = 0.9;
let delta = 0;
let previousOffset = 0;
let velocityInterval;
let autoscrollInterval;

console.log(sliderLength);

const mousedownHandler = (e) => {
    isTouch = true;
    clearInterval(velocityInterval);
    console.log(`left = ${left}, isTouch = ${isTouch}`);
}

const mouseupHandler = (e) => {
    isTouch = false;
    if (delta != 0) {
        velocity = delta * 10;
        while(Math.abs(velocity) > 1000) {
            velocity /= 10;
        }
        velocityInterval = setInterval(velocityFunction, 20);
    }
    delta = 0;
}

const documentMouseupHandler = (e) => {
    isTouch = false;
    delta = 0;
}

const mousemoveHandler = (e) => {
    if(isTouch === true) {
        delta = e.offsetX - previousOffset;
        let left = parseInt(slider.style.left) + delta;
        if (left < -offset && left > -sliderLength - offset) {
            slider.style.left = `${left}px`;
        } else if (left >= -offset) {
            left -= sliderLength;
            slider.style.left = `${left}px`;
        } else if (left <= -sliderLength -offset) {
            left += sliderLength;
            slider.style.left = `${left}px`;
        }
    }
    previousOffset = e.offsetX;
}

const touchmoveHandler = (e) => {
    e.preventDefault();
    delta = e.touches[0].clientX - previousOffset;
    let left = parseInt(slider.style.left) + delta;
    if (left < -offset && left > -sliderLength - offset) {
        slider.style.left = `${left}px`;
    } else if (left >= -offset) {
        left -= sliderLength;
        slider.style.left = `${left}px`;
    } else if (left <= -sliderLength -offset) {
        left += sliderLength;
        slider.style.left = `${left}px`;
    }
    console.log(`delta = ${delta}`);
    previousOffset = e.touches[0].clientX;
}

const autoScroll = () => {
    if (isTouch === false) {
        let left = parseInt(slider.style.left) - 1;
        slider.style.left = `${left}px`;

        if (left >= -offset) {
            left -= sliderLength;
            slider.style.left = `${left}px`;
            console.log(slider.style.left);
        } else if (left <= -sliderLength -offset) {
            left += sliderLength;
            slider.style.left = `${left}px`;
        }
    }
};
//autoscrollInterval = setInterval(autoScroll, 20)

const velocityFunction = () => {
    velocity *= velocityMultiplier;
    left = parseInt(slider.style.left) + velocity;
    slider.style.left = `${left}px`;
    console.log(`velocity = ${velocity}`);

    if (left >= -offset) {
        left -= sliderLength;
        slider.style.left = `${left}px`;
        console.log(slider.style.left);
    } else if (left <= -sliderLength -offset) {
        left += sliderLength;
        slider.style.left = `${left}px`;
    }
        
    if (Math.abs(velocity) < 2) {
        clearInterval(velocityInterval);
        console.log("completed");
        return 0;
    }
};

sliderCover.addEventListener("mousedown", mousedownHandler);
sliderCover.addEventListener("mouseup", mouseupHandler);
sliderCover.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseup", documentMouseupHandler);


sliderCover.addEventListener("touchstart", mousedownHandler);
sliderCover.addEventListener("touchend", mouseupHandler);
sliderCover.addEventListener("touchmove", touchmoveHandler);
document.addEventListener("touchend", documentMouseupHandler);

const buttons = document.querySelector('.converter__choice');
const rate = 0.0000345245;
const output = row2.querySelector("input");
let inputRate = row1.querySelector("input");


function selectConvert(e) {
    if (e.target.classList.contains("convert") && !e.target.classList.contains("active")) {
        const convertElements = buttons.querySelectorAll(".convert");
        convertElements.forEach(element => {
            element.classList.toggle("active");
        });
        swap();
    }
}

function swap() {
    const buy = document.querySelector("#buy");
    const sell = document.querySelector("#sell");
    const convertButton = document.querySelector(".converter__button");
    const row1 = document.querySelector("#row1");
    const row2 = document.querySelector("#row2");
    const our = `<input type="text" value="4.000">
    <div class="converter__item">
    <img src="img/USD.svg" alt="USD">
    <span>USD</span>
    </div>
    <div class="converter__arrow">
    <img src="img/Arrow.svg" alt="Arrow">
    </div>`
    const crypto = `<input type="text" value="0.000138">
    <div class="converter__item">
    <img src="img/Bitcoin.svg" alt="Bitcoin">
    <span>BTC</span>
    </div>
    <div class="converter__arrow">
    <img src="img/Arrow.svg" alt="Arrow">
    </div>`;
    
    if (buy.classList.contains("active")) {
        convertButton.innerHTML = "Buy Now";
        row1.innerHTML = our;
        row2.innerHTML = crypto;
        inputRate = row1.querySelector("input");
    } else {
        convertButton.innerHTML = "Sell Now";
        row1.innerHTML = crypto;
        row2.innerHTML = our;
        inputRate = row1.querySelector("input");
    }
}

function convert() {
    inputRate = row1.querySelector("input");
    let converted = inputRate.value * rate;
    output.value = converted.toFixed(6);
}

function clearInput() {
    inputRate = row1.querySelector("input");
    inputRate.value = '';
    inputRate.removeEventListener('click', clearInput);
}

buttons.addEventListener("click", selectConvert);

inputRate.addEventListener("click", clearInput);

inputRate.addEventListener("input", convert);

inputRate.addEventListener("click", e => {
    console.log(1);
});