const apiCatM = "https://api.thecatapi.com/v1/images/search";
const apiDogM = "https://api.thedogapi.com/v1/images/search";
//const apiWinner = "http://localhost:5010/winners";

export const applicationState = {
    scoreCard: [],
    winners: [],
    apiCat: [],
    apiDog: [],
};
// import { apiCatM } from "./dataAccess";
// import { apiDogM } from "./dataAccess";
//import {applicationState } from "./dataAccess"

/* ----------------------CATS---------------------- */
/*-----cats------*/
export const fetchCats = async () => {
    const dataFetch = await fetch(`${apiCatM}`);
    const responseCats = await dataFetch.json();
    return responseCats;
};

/*-----Winner--cats------*/
export const fetchWCats = async () => {
    const dataFetch = await fetch(`${apiWinner}`);
    const responseCats = await dataFetch.json();
    console.log(responseCats);
    return responseCats;
};
/* ----------------------DOGS---------------------- */
/*-----dogs------*/
export const fetchDogs = async () => {
    const dataFetch = await fetch(`${apiDogM}`);
    console.log(dataFetch);
    const responseDogs = await dataFetch.json();
    console.log(responseDogs);
    return responseDogs;
};
/*-----Winner--dogs------*/
export const fetchWDogs = async () => {
    const dataFetch = await fetch(`${apiWinner}`);
    const responseDogs = await dataFetch.json();
    return responseDogs;
};
/* ----------------------------------------------- */

/* --------Winner----- */
const apiWinner = "http://localhost:5010/winners";

export  const addWinner = async (newWinner) => {
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
};

/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */
/* --------------------------------------------- */

