import { apiCat, apiDog } from "./dataAccess.js"

const mainContainer = document.querySelector("#ethan")  

mainContainer.addEventListener("click", clickEvent => {
   if(clickEvent.target.id === "ethan--cat") {
      console.log("what the fuck")
   }
})

const appState = {
   scoreCard: [],
   winners: [],
   catAPI: [],
   dogAPI: []
}

const fetchCat = async () => {
   const data = await fetch(apiCat)
   const response = await data.json()
   appState.catAPI = response
}

const fetchDog = async () => {
   const data = await fetch(apiDog)
   const response = await data.json()
   appState.dogAPI = response
}

const getCatApiState = () => {
   return appState.catAPI.map(cat => ({...cat}))
}

const getDogApiState = () => {
   return appState.dogAPI.map(dog => ({...dog}))
}

const catImgFunc = (cat) => {
   let html = `<a id="ethan--cat"><img id="cat-img" src="${cat.url}" alt="cat image its random idk"></a>`
   return html
}

const dogImgFunc = (dog) => {
   let html = `<img id="dog-img" src="${dog.url}" alt="dog image its random idk">`
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
   await fetchDog()
   document.querySelector('#ethan-cat').innerHTML = renderCatImg()
   document.querySelector("#ethan-dog").innerHTML = renderDogImg()
}

renderAll()