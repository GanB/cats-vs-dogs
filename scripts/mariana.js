import { fetchCats } from "./mariana_main.js";
import { fetchDogs } from "./mariana_main.js";
/* -----------------Cats--------------------- */
const displayCats = async () => {
    const cats = await fetchCats();
    renderCats(cats);
};

let renderCats = (cats) => {
    console.log(cats);
    let html = ``;
    html = 
    `<img class="image" src= ${cats[0].url} alt="">`;
    document.getElementById("m1").innerHTML = html;
};
displayCats();

/* -----------------Dogs--------------------- */
const displayDogs = async () => {
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
