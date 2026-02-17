// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
// import rexImage from "./dinosaur.png";
// const image = document.createElement("img");
// image.src = rexImage;
// document.body.appendChild(image);
const contentContainer = document.querySelector("#content");
const nav = document.querySelector("nav");

// initalize homepage
render(home());

nav.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "home":
      render(home());
      break;
    case "menu":
      render(menu());
      break;
    case "about":
      render(about());
      break;
  }
});

function render(page) {
  contentContainer.replaceChildren(page);
}

console.log(greeting);
