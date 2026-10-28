
const images = [
    "img/岐阜の絶景グルメ 肉と麺.png",
    "img/つけ麺.jpg",
    "img/ラーメントップ画像.jpg"
];

const links = [
    "",
    "beef.html",
    "ramen.html"
]

const texts = [
    "岐阜のグルメ（肉と麺）",
    "岐阜の絶品肉料理",
    "岐阜のおすすめ麺料理"
];

let index = 0;

const slideImage = document.getElementById("slide-image");
const slideImage2 = document.getElementById("slide-image2");
const slideText = document.getElementById("slide_text");
const slideLink = document.getElementById("slide-link")

let isChanging = false;

function changeSlide(newIndex) {

    if (isChanging) return;

    isChanging = true;

    slideImage.classList.add("fade-out");

    slideImage2.src = images[newIndex];
    setTimeout(() => {

        index = newIndex;
        
        const keyframe = {
            opacity:[1,0]
        }
        const option = {
            duration: 1000,
        }

        slideImage2.src = images[index];
        const animation = slideImage.animate(keyframe,option)

        animation.finished.then(()=>{
            slideImage.src = images[index];
            slideText.textContent = texts[index];
            isChanging = false

            if (index == 0) {
                slideLink.removeAttribute("href")
            }else slideLink.href = links[index]
        })

    }, 1000);
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
