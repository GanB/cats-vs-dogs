const catAPI = `https://api.thecatapi.com/v1/images/search`;
const dogAPI = `https://api.thedogapi.com/v1/images/search`;

const applicationState = {
  scoreCard: [],
  winners: [],
  randomCat: [],
  randomDog: [],
};

const fetchRandomCat = async () => {
  const dataFetch = await fetch(catAPI);
  const response = await dataFetch.json();
  applicationState.randomCat = response;
};

export const getRandomCat = async () => {
  await fetchRandomCat();
  return applicationState.randomCat.map((data) => ({ ...data }));
};

const fetchRandomDog = async () => {
  const dataFetch = await fetch(dogAPI);
  const response = await dataFetch.json();
  applicationState.randomDog = response;
};

export const getRandomDog = async () => {
  await fetchRandomDog();
  return applicationState.randomDog.map((data) => ({ ...data }));
};
