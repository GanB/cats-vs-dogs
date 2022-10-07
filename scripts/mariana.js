import { fetchCats } from "./mariana_main.js";
import { fetchDogs } from "./mariana_main.js";
//import { addWinner } from "./mariana_main.js";
/* -----------------Cats--------------------- */
export const displayCats = async () => {
    const cats = await fetchCats();
    //URLID(cats)
    renderCats(cats);
}
let renderCats = (cats) => {
    console.log(cats);
    let html = ``;
    html = `<img class="image" src= ${cats[0].url} alt="">`;
    document.getElementById("m1").innerHTML = html;
};
displayCats();


/* -----------------Dogs--------------------- */
export const displayDogs = async () => {
    const dogs = await fetchDogs();
    renderDogs(dogs);
};

let renderDogs = (dogs) => {
    console.log(dogs);
    let html = ``;
    html = `
    <img style="height:200px; width:200px" src= ${dogs[0].url} alt="">`;
    document.getElementById("m2").innerHTML = html;
};
displayDogs();

/*---- Event ---*/
// document.addEventListener("click", (e) => {
//     //const [type, value] = event.target.value;
//     let TYPE = "";
//     let VOTE = "";
//     let URL = "";
//     let ID = ""; 
//     if (e.target.id === "m1") {
//         URL = `${cats[0].url}`;
//         ID = `${cats[0].id}`;
//     } else if (e.target.id === "m2") {
//         URL = `${dogs[0].url}`;
//         ID = `${dogs[0].id}`;
//     }
//         const NewWinner = {
//             url: URL,
//             type: TYPE,
//             votes: VOTE,
//             id: ID,
//         };
//     addWinner(NewWinner);
    
    
//     const displayNewWinner = () => {
//         const NewWinner = addWinner();
//         renderWinner(NewWinner);
//     };
//     displayNewWinner();    
// };

// let newWinner = document.getElementById("m_displayWinner");