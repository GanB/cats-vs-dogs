import { renderScorecard } from "../scorecard.js"
import { renderSidebar } from "../sidebar.js"
import { getCatApiState, getDogApiState, getCatImageUrl, getDogImageUrl, fetchCat, fetchDog, postWinningPet, getScore, fetchScore } from "./ethanDataAccess.js"

const mainContainer = document.querySelector("#ethan")  

mainContainer.addEventListener("click", async (clickEvent) => {
   const sideContainer = document.querySelector("#sidebar")
   const winnerObj = {}
   if(clickEvent.target.id.startsWith("cat-img")) {
      const [,catId] = clickEvent.target.id.split("--")
      winnerObj.type = "cat"
      winnerObj.vote = 1
      winnerObj.url = getCatImageUrl(catId)
      await postWinningPet(winnerObj)
      await getScore(winnerObj.type)
   } else if (clickEvent.target.id.startsWith("dog-img")) {
      const [,dogId] = clickEvent.target.id.split("--")
      winnerObj.type = "dog"
      winnerObj.vote = 1
      winnerObj.url = getDogImageUrl(dogId)
      await postWinningPet(winnerObj)
      await getScore(winnerObj.type)
   }
})

const catImgFunc = (cat) => {
   let html = `<input type="image" id="cat-img--${cat.id}" class="cat-img" src="${cat.url}" alt="cat image its random idk"/>`
   return html
}

const dogImgFunc = (dog) => {
   let html = `<input type="image" id="dog-img--${dog.id}" class="dog-img" src="${dog.url}" alt="dog image its random idk"/>`
   return html
}

const renderCatImg = () => {
   const catImg = getCatApiState()
   let html = catImg.map(catImgFunc)
   return html
}

const renderDogImg = () => {
   const dogImg = getDogApiState()
   let html = dogImg.map(dogImgFunc)
   return html
}

const renderAll = async () => {
   await fetchCat()
   await fetchScore()
   await fetchDog()
   document.querySelector('#ethan-cat').innerHTML = renderCatImg()
   document.querySelector("#ethan-dog").innerHTML = renderDogImg()
}

renderAll()

mainContainer.addEventListener("voteRender", event => {
   renderAll()
   renderSidebar()
   renderScorecard()
})