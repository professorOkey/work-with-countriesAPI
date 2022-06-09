import { renderCard } from "./render.js";

const API_URL = "https://restcountries.com/v3.1/all";

const initAppFetch = () => {
  return fetch(`${API_URL}`).then( data => data.json());
};

export const initApp = async () => {
  const initData = await initAppFetch();
  initData.forEach((country) => {
    renderCard(country);
  });
};
