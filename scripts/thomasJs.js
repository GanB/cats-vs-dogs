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

const rednerAll = async () => {
   const cat = await fetchCatThomas()
   const dog = await fetchDogThomas()

   //Posts the cat image to the DOM and assigns it to the application state
   document.getElementById("timg1").innerHTML = `<img src="${cat[0].url}" alt="Image of a very cool cat" class="img">`;
   applicationState.apiCat = cat[0].url;

   //Posts the dog image to the DOM and assigns it to the application state
   document.getElementById("timg2").innerHTML = `<img src="${dog[0].url}" alt="Image of a very cool dog" class="img">`;
   applicationState.apiDog = dog[0].url;

}

rednerAll()

const renderCats = async () => {
   const cat = await fetchCatThomas();
   document.getElementById("timg1").innerHTML = `<img src="${cat[0].url}" alt="Image of a very cool cat" class="img">`;
   applicationState.apiCat = cat[0].url;
}

const renderDogs = async () => {
   const dog = await fetchDogThomas();
   document.getElementById("timg2").innerHTML = `<img src="${dog[0].url}" alt="Image of a very cool dog" class="img">`;
   applicationState.apiDog = dog[0].url;
}

document.addEventListener("click", e => {
   if (e.target.id === "voteCatT") {
      document.getElementById("m_displayWinner").innerHTML += `<img src="${applicationState.apiCat}" class="img">`;
      renderCats()
   }
   if (e.target.id === "voteDogT") {
      document.getElementById("m_displayWinner").innerHTML += `<img src="${applicationState.apiDog}" class="img">`;
      renderDogs()
   }
})