export function about() {
  const aboutContainer = document.createElement("div");
  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About";
  const subTitle = document.createElement("p");
  subTitle.textContent =
    "Learning more DOM manipulation with modules from The Odin Project.";
  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(subTitle);
  return aboutContainer;
}
