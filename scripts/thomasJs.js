import { apiCat, apiDog, applicationState } from "./dataAccess.js"

const fetchCatThomas = async () => {
   const data = await fetch(apiCat)
   const response = await data.json()
   applicationState.apiCat = response
   return applicationState.apiCat
}

// const mapCats = () => {
//    return applicationState.apiCat.map(cat =>({...cat}))
// }

const fetchDogThomas = async () => {
   const data = await fetch(apiDog)
   const response = await data.json()
   applicationState.apiDog = response
   return applicationState.apiDog
}

// const mapDogs = () => {
//    return applicationState.apiDog.map(dog =>({...dog}))
// }

const renderHTML = async () => {
   const cat = await fetchCatThomas()
   const dog = await fetchDogThomas()
   for (const cats of cat) {
      document.getElementById("timg1").innerHTML = `<img src="${cats.url}" alt="Image of a very cool cat" class="img">`;
   }
   for (const dogs of dog) {
      document.getElementById("timg2").innerHTML = `<img src="${dogs.url}" alt="Image of a very cool dog" class="img">`
   }
}

renderHTML()

document.addEventListener("click", e => {
   if (e.target.id === "voteCatT") {
      renderHTML()
   }
   if (e.target.id === "voteDogT") {
      renderHTML()
   }
})