"use strict";

const allLinks = document.querySelectorAll("a:link");
const btnLearnMore = document.querySelector(".btn");
const modalWindowEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const closeModalEl = document.querySelector(".close-modal");

// !SMOOTH SCROLL
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// !MODAL WINDOW

const openModalWindow = function (e) {
  // e.preventDefault();
  disableScrollBar();
  modalWindowEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

btnLearnMore.addEventListener("click", openModalWindow);

document.body.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("close-modal") ||
    e.target.classList.contains("overlay")
  ) {
    reloadScrollBar();
    modalWindowEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
  } else return;
});

// !Scroll

function reloadScrollBar() {
  document.documentElement.style.overflow = "auto";
  document.body.scroll = "yes";
}

function disableScrollBar() {
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
}

// !Construct section prices

const pricesListEl = document.querySelector(".prices_wrap-cards");
const arrOfTariff = ["Mini", "Standart", "Premium"];

const addPriceCard = function (arrOfTariff) {
  arrOfTariff.forEach((nameOfTariff) => {
    pricesListEl.insertAdjacentHTML(
      "beforeend",
      `<li class="prices_card" data-tariff = ${nameOfTariff}>
    <div class="card_icon">
      <i class="fa-solid fa-gears gears-icon"></i>
    </div>
    <h3 class="prices_card-title">${nameOfTariff}</h3>
    <ul class="services-list" data-tariff = ${nameOfTariff}>
    </ul>
    <div class="select-coast" data-tariff = ${nameOfTariff}>
      
      <button class="select-button">Выбрать</button>
    </div>
  </li>`
    );
  });
};

addPriceCard(arrOfTariff);

const priceCardsEl = document.querySelectorAll(".prices_card");
const servicesListEl = document.querySelector(".services-list");

const numberOfServicesMini = [
  "Разработка дизайна",
  "Прототипирование",
  "Создание интерактива",
  "Обратная связь",
];

const numberOfServicesStandart = [
  "Разработка дизайна",
  "Прототипирование",
  "Создание интерактива",
  "Обратная связь",
  "Поддержка проекта 1 месяц",
  "Наполнение контентной части",
];

const numberOfServicesPremium = [
  "Разработка дизайна",
  "Прототипирование",
  "Создание интерактива",
  "Обратная связь",
  "Поддержка проекта 1 месяц",
  "Наполнение контентной части",
  "Расширение функционала",
  "Обратная связь 24/7",
];

const servicesLists = document.querySelectorAll(".services-list");

servicesLists.forEach((list) => {
  if (list.dataset.tariff.toLowerCase() === "mini") {
    numberOfServicesMini.forEach((service) => {
      list.insertAdjacentHTML(
        "beforeend",
        `<li class="services-item">
              <div class="services-item__icon">
                <i class="fa-solid fa-check check-icon"></i>
              </div>
              <div class="services-item__text">${service}</div>
              </li>`
      );
    });
  } else if (list.dataset.tariff.toLowerCase() === "standart") {
    numberOfServicesStandart.forEach((service) => {
      list.insertAdjacentHTML(
        "beforeend",
        `<li class="services-item">
              <div class="services-item__icon">
                <i class="fa-solid fa-check check-icon"></i>
              </div>
              <div class="services-item__text">${service}</div>
              </li>`
      );
    });
  } else {
    numberOfServicesPremium.forEach((service) => {
      list.insertAdjacentHTML(
        "beforeend",
        `<li class="services-item">
              <div class="services-item__icon">
                <i class="fa-solid fa-check check-icon"></i>
              </div>
              <div class="services-item__text">${service}</div>
              </li>`
      );
    });
  }
});

// !Change price of tariff

const miniTariffPrice = 3;
const standartTariffPrice = 9;
const premiumTariffPrice = 12;
const selectCoastElements = document.querySelectorAll(".select-coast");
`<div class="prices_card-cost">${miniTariffPrice}/месяц</div>`;

selectCoastElements.forEach((coastEl) => {
  if (coastEl.dataset.tariff.toLowerCase() === "mini") {
    coastEl.insertAdjacentHTML(
      "afterbegin",
      `<div class="prices_card-cost">$${miniTariffPrice}/месяц</div>`
    );
  } else if (coastEl.dataset.tariff.toLowerCase() === "standart") {
    coastEl.insertAdjacentHTML(
      "afterbegin",
      `<div class="prices_card-cost">$${standartTariffPrice}/месяц</div>`
    );
  } else {
    coastEl.insertAdjacentHTML(
      "afterbegin",
      `<div class="prices_card-cost">$${premiumTariffPrice}/месяц</div>`
    );
  }
});

// ! Add currently year

const currentYearEl = document.querySelector(".rights-year");

const date = new Date();
const year = date.getFullYear();
let strOfCurrentYear = `${year} &copy;`;

currentYearEl.innerHTML = strOfCurrentYear;
