
const images = [
    "./img/岐阜の絶景グルメ 肉と麺.png",
    "./img/gourmet2.png",
    "./img/gourmet3.png"
];

const texts = [
    "岐阜のグルメ（肉と麺）",
    "岐阜の絶品肉料理",
    "岐阜のおすすめ麺料理"
];

let index = 0;

const slideImage = document.getElementById("slide-image");
const slideText = document.getElementById("slide_text");

let isChanging = false;

function changeSlide(newIndex) {

    if (isChanging) return;

    isChanging = true;

    slideImage.classList.add("fade-out");

    setTimeout(() => {

        index = newIndex;

        slideImage.src = images[index];
        slideText.textContent = texts[index];

        if (slideImage.complete) {
            slideImage.classList.remove("fade-out");
        } else {
            slideImage.onload = () => {
                slideImage.classList.remove("fade-out");
            };
        }

        setTimeout(() => {
            isChanging = false;
        }, 800);

    }, 800);
}

function nextSlide() {
    changeSlide((index + 1) % images.length);
}

function prevSlide() {
    changeSlide((index - 1 + images.length) % images.length);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
