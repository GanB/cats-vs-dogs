// const apiCatM = "https://api.thecatapi.com/v1/images/search";
// const apiDogM = "https://api.thedogapi.com/v1/images/search";

// export const applicationState = {
//     scoreCard: [],
//     winners: [],
//     apiCatMM: [],
//     apiDogM: [],
// };
// // import { apiCatM } from "./dataAccess";
// // import { apiDogM } from "./dataAccess";
// //import {applicationState } from "./dataAccess"
// /*-----cats------*/
// export const fetchCats = async () => {
//     const dataFetch = await fetch(`${apiCatM}`);
//     console.log(dataFetch);
//     const responseCats = await dataFetch.json();
//     console.log(responseCats);
//     return responseCats;
// };

// /*-----dogs------*/
// export const fetchDogs = async () => {
//     const dataFetch = await fetch(`${apiDogM}`);
//     console.log(dataFetch);
//     const responseDogs = await dataFetch.json();
//     console.log(responseDogs);
//     return responseDogs;
// };

// // /* ---------------Export Winner----------------- */
// import { displayCats } from "./mariana.js";
// import { displayDogs } from "./mariana.js";

// /* ---------Winner-EventListener-------------- */
// document.addEventListener("click", (e) => {
//     /*  fetchCats();
//     const [type, value] = event.target.value;
//   fetchCats(); */
//     displayCats();
//     displayDogs(); 
//     let URL = "";
//     let ID = "";
//     let TYPE = "";
//     let VOTE = "";
//     if (e.target.id === "m1") {
//         URL = `${cats[0].url}`;
//         ID = `${cats[0].id}`;
//     } else if (e.target.id === "m2") {
//         URL = `${dogs[0].url}`;
//         ID = `${dogs[0].id}`;
//     }

// let newWinner = document.getElementById("m_displayWinner");
//     const NewWinner = {
//         url: URL,
//         type: TYPE,
//         votes: VOTE,
//         id: ID,
//     };
//     addWinner(NewWinner);
// });

// const displayNewWinner = () => {
//     const NewWinner = addWinner();
//     renderWinner(NewWinner);
// };
// //displayNewWinner();
// /* 
// let renderWinner = (NewWinner) => {
//     let html = ``;
//     html = `
//     <img style="height:200px; width:200px" src= ${NewWinner.url} alt="">`;
//     document.getElementById("m_displayWinner").innerHTML = html;
// };
// renderWinner();

// /* test */

// /* document.addEventListener("NewWinner", (e) => {
//     renderWinner();
// }); */
// /* ----------------------------------------- */
// const apiWinner = "http://localhost:5010/winners";

// /* export  */const addWinner = async (newWinner) => {
//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newWinner),
//     };
//     const response = await fetch(`${apiWinner}`, fetchOptions);
//     const responseJS = await response.json(response);

//     document.dispatchEvent(new CustomEvent("winner"));
// };
