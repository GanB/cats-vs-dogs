export const apiCat = "https://api.thecatapi.com/v1/images/search";

export const apiDog = "https://api.thedogapi.com/v1/images/search";

const winnersAPI = "http://localhost:5010/winners";
const scoreCardAPI = "http://localhost:5010/scoreCard";

export const applicationState = {
  scorecard: [],
  winners: [],
  apiCat: [],
  apiDog: [],
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

const fetchScorecard = async () => {
  const dataFetch = await fetch(scoreCardAPI);
  const response = await dataFetch.json();
  applicationState.scorecard = response;
};

export const getScorecard = async () => {
  await fetchScorecard();
  return applicationState.scorecard.map((data) => ({ ...data }));
};
