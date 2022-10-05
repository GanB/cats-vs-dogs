const CatAPI = "https://cdn2.thecatapi.com/images/L-aDi29wP.jpg";
//https://api.thecatapi.com/v1/images/search
const DogAPI = "https://cdn2.thedogapi.com/images/ZfQGth6-x.jpg";
//https://api.thedogapi.com/v1/images/search

const applicationState = {
    cats: [],
    dogs: [],
};
/*-----cats------*/
export const fetchCats = async () => {
        const dataFetch = await fetch(`{CatAPI}`);
        const cats = await dataFetch.json();
        applicationState.cats = cats
}
const displayCats = async () => {
        let catImage = cats
}