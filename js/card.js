const cardList = document.querySelectorAll(".card-panel")
const cardInfo = document.getElementById("card-info")
const cardInfoBackground = cardInfo.querySelector(".background")
const cardContainer = cardInfo.querySelector(".card-container")

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
    }
  })
});

cardInfoBackground.addEventListener("click", ()=>{
  cardInfo.classList.add("hidden")
  cardContainer.replaceChildren()
})