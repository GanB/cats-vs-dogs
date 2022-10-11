import { apiCat, apiDog } from "../dataAccess.js"

const scoreAPI = `http://localhost:5010/scoreCard`

const appState = {
   scoreCard: [],
   winner: [],
   apiCat: [],
   apiDog: []
}

export const postWinningPet = async (pet) => {
   const API = "http://localhost:5010"
   const post = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(pet)
   }
   const mainContainer = document.querySelector("#ethan")
   const response = await fetch(`${API}/winners`, post)
   const responseJSON = await response.json()
   mainContainer.dispatchEvent(new CustomEvent("voteRender"))
   return responseJSON
}

export const incrementScoreCard = async (vote) => {
   const PATCH = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(vote)
   }
   const mainContainer = document.querySelector('#ethan')
   const response = await fetch(`${scoreAPI}/1`, PATCH)
   const responseJSON = await response.json()
   mainContainer.dispatchEvent(new CustomEvent("voteRender"))
   return responseJSON
}

export const fetchCat = async () => {
    const data = await fetch(apiCat)
    const response = await data.json()
    appState.apiCat = response
 }
 
export const fetchDog = async () => {
    const data = await fetch(apiDog)
    const response = await data.json()
    appState.apiDog = response
 }
 
export const fetchScore = async () => {
   const data = await fetch(scoreAPI)
   const scoreCardData = await data.json()
   appState.scoreCard = scoreCardData
}
export const getCatApiState = () => {
    return appState.apiCat.map(cat => ({...cat}))
 }
 
export const getDogApiState = () => {
    return appState.apiDog.map(dog => ({...dog}))
 }
 
export const getCatImageUrl = (id) => {
    const catApi = appState.apiCat
    for(const cat of catApi) {
       if(cat.id === id) {
          return cat.url
       }
    }
 }
 
export const getDogImageUrl = (id) => {
    const dogApi = appState.apiDog
    for(const dog of dogApi) {
       if(dog.id === id) {
          return dog.url
      }
   }
}

export const getScore = async (type) => {
   for(const score of appState.scoreCard) {
      if (type === "cat") {
         let catVote = score.countCat
         catVote++
         let catType = {countCat: catVote}
         await incrementScoreCard(catType)
      } else if (type === "dog") {
        let dogVote = score.countDog
        dogVote++
        let dogType = {countDog: dogVote}
        await incrementScoreCard(dogType)
      }
   }
}