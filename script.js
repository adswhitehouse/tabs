import { data } from "./data.js";

// Variables
let title = document.querySelector(".jsTitle");
let text = document.querySelector(".jsText");
let infoBtn = document.querySelectorAll(".jsInfoBtn");

// Set initial text content
title.innerHTML = data[0].name;
text.innerHTML = data[0].text;

// When button is clicked change the text content and button styling appropriately
infoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    infoBtn.forEach((btn) => {
      btn.classList.add("btn");
      btn.classList.remove("white-bg");
    });
    btn.classList.remove("btn");
    btn.classList.add("white-bg");
    data.forEach((item) => {
      if (item.id === btn.dataset.id) {
        title.innerHTML = item.name;
        text.innerHTML = item.text;
      }
    });
  });
});
