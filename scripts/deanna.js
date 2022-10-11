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

    let NewWinner = {}
    let URL = `${cat[0].url}`
    let TYPE = "cat"
    let VOTE = 0
    let ID = `${cat[0].id}`

    NewWinner = {
        url: URL,
        type: TYPE,
        votes: VOTE,
        id: ID,
    }
    addWinner(NewWinner)
    return document.getElementById("d1").innerHTML = html
}

renderCatToDOM()

const renderDogToDOM = async () => {
    const dog = await fetchDog()
    let html = `<img class="image" src="${dog[0].url}">`
    applicationState.apiDog = dog[0].url
    
    let NewWinner = {}
    let URL = `${dogs[0].url}`
    let TYPE = "dog"
    let VOTE = 0
    let ID = `${dog[0].id}`

    NewWinner = {
        url: URL,
        type: TYPE,
        votes: VOTE,
        id: ID,
    }
    addWinner(NewWinner)
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

const apiWinner = "http://localhost:5010/winners";

const addWinner = async (newWinner) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newWinner),
    };
    const response = await fetch(`${apiWinner}`, fetchOptions);
    const responseJS = await response.json(response);
    document.dispatchEvent(new CustomEvent("winner"));
    return responseJS
};

