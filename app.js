import { initApp } from "./initApp.js";
import {
  renderCard,
  renderFilterList,
  listBody,
} from "./render.js";

initApp();

const COUNTRY_API_URL = "https://restcountries.com/v3.1/name/";
const REGION_API_URL = "https://restcountries.com/v3.1/region/";

const searchButton = document.querySelector(".search__button");
const countryInput = document.querySelector(".search__item");
const filterButton = document.querySelector(".item__button");
const changeThemeButton = document.querySelector(".filter__theme-change")

searchButton.addEventListener("click", async function () {
  const data = await getCardByCountryName(countryInput.value);
  listBody.innerHTML = "";
  renderCard(data[0]);
  countryInput.value = "";
});

filterButton.addEventListener("click", function () {
  if (!filterButton.classList.contains("active")) {
    filterButton.classList.add("active");
    renderFilterList();
    const filterList = document.querySelector(".item__filter-list");
    filterList.addEventListener("click", async function (event) {
      const regionData = await getCardsByRegion(event.target.innerText);
      listBody.innerHTML = "";

      regionData.forEach((country) => {
        renderCard(country);
      });

      filterList.parentNode.remove();
      filterButton.classList.remove("active");
    });
  } else {
    const filterList = document.querySelector(".item__filter-list");
    filterList.parentNode.remove();
    filterButton.classList.remove("active");
  }
});

changeThemeButton.addEventListener("click", function () {
  changeThemeButton.classList.toggle("theme-changed")
  if (changeThemeButton.classList.contains("theme-changed")) {
    document.documentElement.style.setProperty("--bg-color", "#fff")
    document.documentElement.style.setProperty("--main-color", "#343d4b")
    document.documentElement.style.setProperty("--border-for-light", "1px solid black")
    document.documentElement.style.setProperty("--card--background-color", "rgba(20, 20, 20, 0.884)")
  }else {
    document.documentElement.style.setProperty("--bg-color", "#343d4b")
    document.documentElement.style.setProperty("--main-color", "#fff")
    document.documentElement.style.setProperty("--border-for-light", "none")
    document.documentElement.style.setProperty("--card--background-color", "rgba(255, 255, 255, 0.884)")
  }
})

const getCardByCountryName = (countryName) => {
  return fetch(`${COUNTRY_API_URL}${countryName}`).then(data => data.json());
};

const getCardsByRegion = (region) => {
  return fetch(`${REGION_API_URL}${region}`).then(data => data.json());
};
