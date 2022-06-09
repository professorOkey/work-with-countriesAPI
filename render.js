const dropDownMenuBox = document.querySelector(".filter__item")
const listBody = document.querySelector(".country__list");

 const renderCard = (country) => {
  listBody.insertAdjacentHTML(
    "beforeend",
    `
      <div class="list__item">
                <div class="item__picture">
                    <img src="${country.flags.svg}" alt="">
                </div>
                <div class="item__descrition">
                    <div class="description__title">
                      <p class="title__name"><b>${country.name.official}</b></p>
                    </div>
                    <div class="description__info">
                      <p class="info__population"><b>population :</b> ${country.population}</p>
                      <p class="info__region"><b>region :</b> ${country.region}</p>
                      <p class="info__capital"><b>capital :</b> ${country.capital}</p>
                    </div>
                </div>
            </div>
      `
  );
};

 const renderFilterList = () => {
  dropDownMenuBox.insertAdjacentHTML(
    "beforeend",
    `
      <div class="item__filter-body">
        <ul class="item__filter-list">
          <li class="filter-list__item">Africa</li>
          <li class="filter-list__item">America</li>
          <li class="filter-list__item">Asia</li>
          <li class="filter-list__item">Europe</li>
          <li class="filter-list__item">Oceania</li>
        </ul>
      </div>
    `
  );
};

export {listBody,renderCard,renderFilterList}