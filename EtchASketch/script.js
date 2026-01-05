createCanvas(4, true);

function createCanvas(size, initialise) {
  const container = document.querySelector(".container");
  if (!initialise) {
    container.replaceChildren();
  }
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
      if (j === size - 1) {
        square.style.borderRight = "2px solid black";
      }
      if (i === size - 1) {
        square.style.borderBottom = "2px solid black";
      }
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  container.addEventListener("mouseover", (event) => {
    if (
      event.target.classList.contains("pixel") &&
      !event.target.classList.contains("coloured")
    ) {
      event.target.style.backgroundColor = generateRandomColor();
      event.target.classList.add("coloured");
    }
  });
}

const generateRandomColor = () => {
  // 1. Pick a random Hue (0-360)
  const h = Math.floor(Math.random() * 360);

  // 2. Fix Saturation at 80% and Lightness at 50% for vibrancy
  const s = 80;
  const l = 50;

  // 3. Convert HSL to Hex
  const l_alt = l / 100;
  const a = (s * Math.min(l_alt, 1 - l_alt)) / 100;

  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l_alt - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${f(0)}${f(8)}${f(4)}`;
};

function getSize() {
  let size = Number(window.prompt("Choose the size of the square canvas", ""));
  if (size < 0 || size > 99) {
    size = Number(window.prompt("Choose the size of the square canvas", ""));
  }
  createCanvas(size, false);
}

const changeSize = document.querySelector("button");
changeSize.addEventListener("click", getSize);
