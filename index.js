"use strict";

const magnifier = document.querySelector(".magnifier");
const searchBarEl = document.querySelector(".search-bar-container");

magnifier.addEventListener("click", () => {
  searchBarEl.classList.toggle("active");
});
