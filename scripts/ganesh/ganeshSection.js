import { getRandomCat, getRandomDog } from "./ganeshSectionDataAccess.js";

const ganeshSection = document.querySelector("#ganesh__section");

const renderGaneshSectionHtml = async () => {
  const randomCat = await getRandomCat();
  const randomDog = await getRandomDog();

  console.log(randomCat[0].url);
  console.log(randomDog[0].url);

  const ganeshSectionHtml = ` 
        <div class="ganesh__section__parent__container">       
        <div class="ganesh__section__header">
          <h3 class="teamName">Ganesh's Section</h3>
        </div>
        <div id="ganesh" class="ganesh__section__image__parent">
          <div class="ganesh__section__image_container">
            <img
                class="ganesh__section__image"
                title="Click to Vote"
                src=${randomCat[0].url} 
                alt="image of a random cat" 
            />
          </div>
          <div class="ganesh__section__image_container">
            <img
                class="ganesh__section__image"
                title="Click to Vote"
                src=${randomDog[0].url} 
                alt="image of a random dog" 
            />
          </div>
        </div>
        </div>
        `;

  ganeshSection.innerHTML = ganeshSectionHtml;
};

renderGaneshSectionHtml();
