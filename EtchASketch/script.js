createCanvas(4);

function createCanvas(size) {
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("pixel");
      square.setAttribute(
        "style",
        "border-left: 2px solid black; border-top: 2px solid black; flex: 1; aspect-ratio: 1/1;"
      );
      if (j === 3) {
        square.style.borderRight = "2px solid black";
      }
      if (i === 3) {
        square.style.borderBottom = "2px solid black";
      }
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("pixel")) {
      event.target.style.backgroundColor = "Tomato";
    }
  });
}
