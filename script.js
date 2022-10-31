//if the addbookl button gets clicked we call the addBookToLibrary method
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", addBookToLibrary);

//declare and initialize all the elements in the add book form...
const title = document.getElementById("title");
const author = document.getElementById("author");
const numOfPages = document.getElementById("numOfPages");
let isRead = false;
// Get the big container covering the whole library
const display = document.querySelector(".added_books_container");

let myLibrary = [];

function Book(title, author, numOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
}

function addBookToLibrary() {
  let book = new Book(title, author, numOfPages, isRead);
  myLibrary.push(book); //push book to library
  renderBooks(); //render it
  title.value = "";
  author.value = "";
  numOfPages.value = "";
}

//loop through library of books and add it to container
function renderBooks() {
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book)); //remove all bookcards

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]); //create a book with the new book in libray
  }
}

function createBook(book) {
  // Create a book card
  const bookCard = document.createElement("div");
  // Create a book card contents
  const bookCardContent = document.createElement("div");
  // create a div for all the info
  const txt = document.createElement("div");
  // create one h1 and add text content of title...
  const h1 = document.createElement("h1");
  h1.textContent = book.title.value;
  // create one h3 and add text content of author...
  const h3 = document.createElement("h3");
  h3.textContent = "By: ";
  h3.textContent += book.author.value;

  // create one h3 and add text content of numnOfPages...
  const h32 = document.createElement("h3");
  h32.textContent = "Number Of Pages: ";
  h32.textContent += book.numOfPages.value;

  //Create a remove button to remove the book
  const remove = document.createElement("button");
  remove.textContent = "Remove";

  //Create a read button
  const read = document.createElement("button");
  read.textContent = "Read";

  //create a div that contains buttons
  const btn_section = document.createElement("div");

  // Adding classes to  elements created
  remove.classList.add("btn");
  read.classList.add("btn");
  read.classList.add("read_btn");
  btn_section.setAttribute("id", "btn_section");
  txt.classList.add("txt-style");
  bookCard.classList.add("book_card_style");
  bookCard.classList.add("book");
  bookCardContent.classList.add("bcc_style");

  // Appending all child elements to their parents
  txt.appendChild(h1);
  txt.appendChild(h3);
  txt.appendChild(h32);
  btn_section.appendChild(read);
  btn_section.appendChild(remove);
  bookCardContent.appendChild(txt);
  bookCardContent.appendChild(btn_section);
  bookCard.appendChild(bookCardContent);
  display.appendChild(bookCard);

  //read and remove event listeners
  read.addEventListener("click", () => {
    if (read.textContent == "Read") {
      read.textContent = "Is Read";
    } else {
      read.textContent = "Read";
    }
  });

  remove.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    renderBooks();
  });
}

//listener to remove a book
