import { apiCat, apiDog, applicationState } from "./dataAccess.js"

const fetchCat = async () => {
    const dataFetch = await fetch(apiCat)
    const randomCat = await dataFetch.json()
    applicationState.apiCat = randomCat
    return applicationState.apiCat
}

// const getCats = () => {
//     return applicationState.apiCat.map((cat) => ({...cat}))
// }

const fetchDog = async () => {
    const dataFetch = await fetch(apiDog)
    const randomDog = await dataFetch.json()
    applicationState.apiDog = randomDog
    return applicationState.apiDog
}

// const getDogs = () => {
//     return applicationState.apiDog.map((dog) => ({...dog}))
// }

const renderCatToDOM = async () => {
    const cat = await fetchCat()
    let html = `<img class="image" src="${cat[0].url}">`
    applicationState.apiCat = cat[0].url
    return document.getElementById("d1").innerHTML = html
}

renderCatToDOM()

const renderDogToDOM = async () => {
    const dog = await fetchDog()
    let html = `<img class="image" src="${dog[0].url}">`
    applicationState.apiDog = dog[0].url
    return document.getElementById("d2").innerHTML = html
}

renderDogToDOM()

document.addEventListener("click", (event) => {
    if (event.target.id === 'voteCat') {
        document.getElementById('sidebar').innerHTML += `<img class="image" src="${applicationState.apiCat}">`
        renderCatToDOM()
    } else if (event.target.id === 'voteDog') {
        document.getElementById('sidebar').innerHTML += `<img class="image" src="${applicationState.apiDog}">`
        renderDogToDOM()
    } 
})
