
const images = [
<<<<<<< HEAD
    "./img/岐阜の絶景グルメ 肉と麺.png",
    "./img/gourmet2.png",
    "./img/gourmet3.png"
=======
  "img/岐阜の絶景グルメ 肉と麺.png",
  "img/gourmet2.png",
  "img/gourmet3.png"
>>>>>>> 0bdf7d0fa5b9ca5e2cbfc5cd943f84efcacac292
];

const texts = [
    "岐阜のグルメ（肉と麺）",
    "岐阜の絶品肉料理",
    "岐阜のおすすめ麺料理"
];

let index = 0;

function showSlide() {
    document.getElementById("slide-image").src = images[index];

    document.getElementById("slide_text").textContent = texts[index];
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

document.getElementById("next").addEventListener("click", nextSlide);

document.getElementById("prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
