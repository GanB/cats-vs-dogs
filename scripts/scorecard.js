import { getScorecard } from "./dataAccess.js";

const catScore = document.querySelector("#Mcat");
const dogScore = document.querySelector("#Mdog");

export const renderScorecard = async () => {
  const scorecard = await getScorecard();
  //   console.log(scorecard);
  catScore.innerHTML = `<div style="color:#7A0144;font-size:50px">${scorecard[0].countCat}</div>`;
  dogScore.innerHTML = `<div style="color:#7A0144;font-size:50px">${scorecard[0].countDog}</div>`;
};

renderScorecard();
