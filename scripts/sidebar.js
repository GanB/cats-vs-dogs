import { getWinners } from "./dataAccess.js";

const sidebar = document.querySelector("#sidebar");

export const renderSidebar = async () => {
  const winners = await getWinners();
  //   console.log(winners);
  let sidebarCatsSectionHtml = `<section id="sidebar__cat__Section">`;
  let sidebarDogsSectionHtml = `<section id="sidebar__dog__Section">`;
  for (const winner of winners) {
    if (winner.type === "cat") {
      sidebarCatsSectionHtml += `<img id="sidebar__cat__Section__image__${winner.url}" 
          class="image"
          title="image of a random cat" src="${winner.url}"
          alt="image of a random cat">`;
    } else {
      sidebarDogsSectionHtml += `<img id="sidebar__dog__Section__image__${winner.url}" 
          class="image"
          title="image of a random dog" src="${winner.url}"
          alt="image of a random dog">`;
    }
  }

  sidebar.innerHTML = sidebarCatsSectionHtml + sidebarDogsSectionHtml;
};

renderSidebar();
