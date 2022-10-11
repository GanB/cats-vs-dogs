const apiCatM_test = "https://api.thecatapi.com/v1/images/search";
const apiDogM_test = "https://api.thedogapi.com/v1/images/search";
export const applicationState_test = {
    scoreCard: [],
    winners: [],
    apiCatM: [],
    apiDogM: [],
};

/* fetch */
export const fetchCD = async () => {
    const dataFetch_cat = await fetch(`apiCat_test`);
    const dataFetch_dog = await fetch(`apiDog_test`);
    const responseCats_test = await dataFetch_cat.json();
    const responseDogs_test = await dataFetch_dog.json();
    // applicationState_test.apiCatM = responseCats_test
    // applicationState_test.apiDogM = responseDogs_test
    return { responseCats_test, responseDogs_test };
};

/* display */
export const displayCD = async () => {
    const CatDog = await fetchCD();
        renderCats(CatDog);
};
displayCD();
/* render */
/* const render = (CatDog) => {
        let html = ``;
        html =
                `<img id="M1_test" class="image" src= ${cats[0].url} alt="">
                 <img id="M2_test" class="image" src= ${dogs[0].url} alt="">`;
        document.getElementById("m_test1").innerHTML = html;
    
        document.addEventListener("click", (e) => {
            if (e.target.id === "M1_test") {
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
    }; */