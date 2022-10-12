const catAPI = `https://api.thecatapi.com/v1/images/search`;
const dogAPI = `https://api.thedogapi.com/v1/images/search`;
const winnersAPI = "http://localhost:5010/winners";
const scoreCardAPI = "http://localhost:5010/scoreCard";

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

export const recordVote = async (vote) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vote),
  };

  const response = await fetch(winnersAPI, fetchOptions);
  const responseJson = await response.json();
  await updateScorecard(vote.type);
  const ganeshSection = document.querySelector("#ganesh__section");
  ganeshSection.dispatchEvent(new CustomEvent("voteRecorded"));
  return responseJson;
};

export const updateScorecard = async (type) => {
  const getScorecard = await fetch(scoreCardAPI);
  const existingScorecard = await getScorecard.json();
  // console.log(existingScorecard[0]);
  let catVotes = parseInt(existingScorecard[0].countCat);
  let dogVotes = parseInt(existingScorecard[0].countDog);
  // console.log(type);
  type === "cat" ? ++catVotes : ++dogVotes;
  // console.log({ catVotes: catVotes, dogVotes: dogVotes });

  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ countCat: catVotes, countDog: dogVotes }),
  };

  const putResponse = await fetch(`${scoreCardAPI}/1`, putOptions);
  const putResponseJson = await putResponse.json();
  return putResponseJson;
};

const fetchWinners = async () => {
  const dataFetch = await fetch(winnersAPI);
  const response = await dataFetch.json();
  applicationState.winners = response;
};

export const getWinners = async () => {
  await fetchWinners();
  return applicationState.winners.map((data) => ({ ...data }));
};
