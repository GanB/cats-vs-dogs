import { apiCat, apiDog } from "../dataAccess.js"

const applicationState = {
   winner: [],
   apiCat: [],
   apiDog: []
}

export const postWinningPet = async (pet) => {
   const API = "http://localhost:8088"
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

export const fetchCat = async () => {
    const data = await fetch(apiCat)
    const response = await data.json()
    applicationState.apiCat = response
 }
 
export const fetchDog = async () => {
    const data = await fetch(apiDog)
    const response = await data.json()
    applicationState.apiDog = response
 }
 
export const getCatApiState = () => {
    return applicationState.apiCat.map(cat => ({...cat}))
 }
 
export const getDogApiState = () => {
    return applicationState.apiDog.map(dog => ({...dog}))
 }
 
export const getCatImageUrl = (id) => {
    const catApi = applicationState.apiCat
    for(const cat of catApi) {
       if(cat.id === id) {
          return cat.url
       }
    }
 }
 
export const getDogImageUrl = (id) => {
    const dogApi = applicationState.apiDog
    for(const dog of dogApi) {
       if(dog.id === id) {
          return dog.url
      }
   }
}
