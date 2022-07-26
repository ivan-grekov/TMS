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
  e.preventDefault();
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
