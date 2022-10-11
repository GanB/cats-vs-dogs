import { fetchCats } from "./mariana_main.js";
import { fetchWCats } from "./mariana_main.js";
import { fetchDogs } from "./mariana_main.js";
import { fetchWDogs } from "./mariana_main.js";
import { addWinner } from "./mariana_main.js";

/* -----------------Cats--------------------- */
//     const fetchCats = async () => {
//     const dataFetch = await fetch(`${apiCatM}`);
//     const responseCats = await dataFetch.json();
//     return responseCats;
// };

const displayCats = async () => {
    const cats = await fetchCats();
    renderCats(cats);
};
displayCats();
const renderCats = (cats) => {
    let html = ``;
    html = `<img id="M1" class="image" src= ${cats[0].url} alt="">`;
    document.getElementById("m1").innerHTML = html;

    document.addEventListener("click", (e) => {
        if (e.target.id === "M1") {
            let NewWinner = {};
            let URL = `${cats[0].url}`;
            let TYPE = "cat";
            let VOTE = 0;
            let ID = `${cats[0].id}`;
            NewWinner = {
                url: URL,
                type: TYPE,
                votes: VOTE,
                id: ID,
            };
            addWinner(NewWinner);
        }
    });
};
/*-----Winner--cats------*/
const displayWCats = async (winner) => {
    const cats = await fetchWCats();
    renderWCats(cats);
};

const renderWCats = (cats) => {
    let html = ``;
    let catsVote = 0;
    for (const cat of cats) {
        console.log(cats);
        html += `<img id="M1" class="image" src= ${cat.url} alt="">`;
        if (cat.type === "cat") {
            catsVote++;
        }
        let htmlM = ``;
        htmlM += `<div style="color:#7A0144;font-size:70px">${catsVote}</div>`;
        document.getElementById("Mcat").innerHTML = htmlM;
    }
    document.getElementById("m_displayWinner").innerHTML = html;
};
displayWCats();
/* -----------------Dogs--------------------- */
/* --fetch--display--render-- */

/* fetch */
// export const fetchDogs = async () => {
//     const dataFetch = await fetch(`${apiDogM}`);
//     const responseDogs = await dataFetch.json();
//     return responseDogs;
// };

/* display */
const displayDogs = async () => {
    const dogs = await fetchDogs();
    renderDogs(dogs);
};

/* render */
const renderDogs = (dogs) => {
    let html = ``;
    html = `
    <img id="M2" class="image" src= ${dogs[0].url} alt="">`;
    document.getElementById("m2").innerHTML = html;

    document.addEventListener("click", (e) => {
        let NewWinner = {};
        if (e.target.id === "M2") {
            let URL = `${dogs[0].url}`;
            let TYPE = "dog";
            let VOTE = 0;
            let ID = `${dogs[0].id}`;
            NewWinner = {
                url: URL,
                type: TYPE,
                votes: VOTE,
                id: ID,
            };
            addWinner(NewWinner);
        }
    });
};
displayDogs();
/*-----Winner--dogs------*/
const displayWDogs = async (winner) => {
    const dogs = await fetchWDogs();
    renderWDogs(dogs);
};

const renderWDogs = (dogs) => {
    let html2 = ``;
    let dogsVote = 0;
    for (const dog of dogs) {
        html2 += `<img id="M2" class="image" src= ${dog.url} alt="">`;
        if (dog.type === "dog") {
            dogsVote++;
        }
        let htmlM = ``;
        htmlM += `<div style="color:#168E22;font-size:70px">${dogsVote}</div>`;
        document.getElementById("Mdog").innerHTML = htmlM;
    }
    document.getElementById("m_displayWinner").innerHTML = html2;
};
displayWDogs();