import { apiCat, apiDog, applicationState } from "./dataAccess.js"

const fetchCat = async () => {
    const dataFetch = await fetch(apiCat)
    const randomCat = await dataFetch.json()
    applicationState.apiCat = randomCat
    return applicationState.apiCat
}

const fetchDog = async () => {
    const dataFetch = await fetch(apiDog)
    const randomDog = await dataFetch.json()
    return applicationState.apiDog = randomDog
}

const displayRandomCat = async () => {
    const randomCat = await fetchCat()
    renderCatToDOM(randomCat)
}

const renderCatToDOM = (cat) => {
    let html = `<img class="image" src="${cat[0].url}">`
    return document.getElementById("d1").innerHTML = html
}

displayRandomCat()

const displayRandomDog = async () => {
    const randomDog = await fetchDog()
    renderDogToDOM(randomDog)
}

const renderDogToDOM = (dog) => {
    let html = `<img class="image" src="${dog[0].url}">`
    return document.getElementById("d2").innerHTML = html
}

displayRandomDog()
