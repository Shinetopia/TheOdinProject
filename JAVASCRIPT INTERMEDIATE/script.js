const body = document.querySelector("body");
const showBtn = document.querySelector("#show-addbook-menu");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector("#add-book");
// Book values
const titleVal = document.querySelector("#title");
const authorVal = document.querySelector("#author");
const pagesVal = document.querySelector("#pages");
const readVal = document.querySelector("#pages");
// const myLibrary = [];

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedRadio = document.querySelector('input[name="read"]:checked');
  const isRead = selectedRadio.value === "true";
  library.addBook(titleVal.value, authorVal.value, pagesVal.value, isRead);
  dialog.close();
});

class Library {
  constructor(container) {
    this.container = container;
    this.books = [];
  }
  addBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read, crypto.randomUUID());
    this.books.push(book);
    this.renderBook(book);
  }
  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
  renderBook(book) {
    const card = document.createElement("div");
    // card.appendChild(infoText);
    card.classList.add("card");
    card.dataset.id = book.id;

    const infoText = document.createElement("p");
    infoText.textContent = book.info;

    const changeStatBtn = document.createElement("button");
    changeStatBtn.textContent = "Change reading status";
    changeStatBtn.addEventListener("click", () => {
      book.changeReadingStatus();
      infoText.textContent = book.info;
      console.log(book);
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      body.removeChild(card);
      this.removeBook(book.id);
    });

    card.append(infoText, changeStatBtn, deleteBtn);
    this.container.appendChild(card);
  }
}

class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
  get info() {
    let status = this.read ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
  }
  changeReadingStatus() {
    this.read = !this.read;
  }
}

const library = new Library(document.body);
library.addBook("The Hobbit", "J.R.R. Tolkien", 295, false);
library.addBook("Warriors", "Erin Hunter", 190, true);

// console.log(theHobbit.info());

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'

// console.log(Object.getPrototypeOf(player1)); // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true

// Player.prototype.sayHello = function () {
//   console.log("Hello, I'm a player!");
// };

// player1.sayHello(); // logs "Hello, I'm a player!"
// player2.sayHello(); // logs "Hello, I'm a player!"

// // Player.prototype.__proto__
// Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// // Output may slightly differ based on the browser
// console.log(player1.valueOf()); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

// JAVASCRIPT INFO EXERCISES ---------------------

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(bed.glasses);
