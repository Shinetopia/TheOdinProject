export function home() {
  const homeContainer = document.createElement("div");
  const homeTitle = document.createElement("h1");
  homeTitle.textContent = "Brown Sugar Cafe";
  const subTitle = document.createElement("p");
  subTitle.textContent = "Proudly running since 1999";

  homeContainer.appendChild(homeTitle);
  homeContainer.appendChild(subTitle);
  return homeContainer;
}
