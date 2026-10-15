const cardList = document.querySelectorAll(".card-panel")
const cardInfo = document.getElementById("card-info")
const cardInfoBackground = cardInfo.querySelector(".background")
const cardContainer = cardInfo.querySelector(".card-container")


function animateObject(target, from_opacity, to_opacity, dur){
  const keyframes = [
    {opacity: from_opacity},
    {opacity: to_opacity},
  ]

  const options = {
    duration: dur*1000
  }

  target.animate(keyframes, options)
}

cardList.forEach(panel => {
  panel.addEventListener("click", ()=>{
    // card-detailを見つける
    const detail = panel.querySelector(".card-detail")

    // 確認
    if (detail.classList.contains("hidden")) {
      cardInfo.classList.remove("hidden")
      copiedDetail = detail.cloneNode(true)
      copiedDetail.classList.remove("hidden")
      cardContainer.appendChild(copiedDetail)

      document.body.style.overflow = "hidden"

      animateObject(cardInfo, 0, 1, 0.3)
    }
  })
});

cardInfoBackground.addEventListener("click", ()=>{
  cardInfo.classList.add("hidden")
  cardContainer.replaceChildren()
  
  document.body.style.overflow = ""


})