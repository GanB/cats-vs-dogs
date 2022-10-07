/* const CatAPI = "https://cdn2.thecatapi.com/images/L-aDi29wP.jpg";
//https://api.thecatapi.com/v1/images/search
const DogAPI = "https://cdn2.thedogapi.com/images/ZfQGth6-x.jpg";
//https://api.thedogapi.com/v1/images/search
 */
const apiCat = "https://api.thecatapi.com/v1/images/search";
const apiDog = "https://api.thedogapi.com/v1/images/search"; 

export const applicationState = {
    scoreCard: [],
    winners: [],
    apiCat: [],
    apiDog: [],
};
/*-----cats------*/
export const fetchCats = async () => {
    const dataFetch = await fetch(`${apiCat}`);
    console.log(dataFetch);
    const responseCats = await dataFetch.json();
    console.log(responseCats);
    return responseCats;
};

/*-----dogs------*/
export const fetchDogs = async () => {
        const dataFetch = await fetch(`${apiDog}`);
        console.log(dataFetch);
        const responseDogs = await dataFetch.json();
        console.log(responseDogs);
        return responseDogs;
    };