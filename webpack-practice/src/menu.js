// import bbtImg from "./BrownSugar.webp";

export function menu() {
  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("grid-container");
  // need to do more DRY
  const menuItem1 = document.createElement("div");
  const menuItem1Name = document.createElement("h2");
  menuItem1Name.textContent = "brownsugaaaa";
  const menu1ItemImg = document.createElement("img");
  //   menu1ItemImg.src = bbtImg;
  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuGrid);
  return menuContainer;
}
