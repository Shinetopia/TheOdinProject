import bbtImg from "./BrownSugar.webp";

export function menu() {
  const menuContainer = document.createElement("div");
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("grid-container");
  // need to do more DRY
  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  const menuItem1Name = document.createElement("h2");
  menuItem1Name.textContent = "Suga";
  const menuItem1Img = document.createElement("img");
  menuItem1Img.src = bbtImg;
  const menuItem1Price = document.createElement("p");
  menuItem1Price.textContent = "$13.40";

  menuItem1.append(menuItem1Name, menuItem1Img, menuItem1Price);
  menuGrid.appendChild(menuItem1);

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  const menuItem2Name = document.createElement("h2");
  menuItem2Name.textContent = "Suga";
  const menuItem2Img = document.createElement("img");
  menuItem2Img.src = bbtImg;
  const menuItem2Price = document.createElement("p");
  menuItem2Price.textContent = "$13.40";

  menuItem2.append(menuItem2Name, menuItem2Img, menuItem2Price);
  menuGrid.appendChild(menuItem2);

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuGrid);
  return menuContainer;
}
