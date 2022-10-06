import { apiCat, apiDog } from "./dataAccess.js"

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
   let html = `<img src="${cat.url}" alt="cat image its random idk" width="200" height="200">`
   return html
}

const dogImgFunc = (dog) => {
   let html = `<img src="${dog.url}" alt="dog image its random idk" width="200" height="200">`
   return html
}

const renderCatImg = () => {
   const catImg = getCatApiState()
   let html = `<a id="vote-click">${catImg.map(catImgFunc)}</a>`
   return html
}

const renderDogImg = () => {
   const dogImg = getDogApiState()
   let html = `<a id="vote-click">${dogImg.map(dogImgFunc)}</a>`
   return html
}

const renderAll = async () => {
   await fetchCat()
   await fetchDog()
   document.querySelector("#cat-img").innerHTML = renderCatImg()
   document.querySelector('#dog-img').innerHTML = renderDogImg()   
}

renderAll()