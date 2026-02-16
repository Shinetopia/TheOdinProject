// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import rexImage from "./dinosaur.png";

const image = document.createElement("img");
image.src = rexImage;

document.body.appendChild(image);

console.log(greeting);
