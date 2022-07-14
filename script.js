
// Initial variables

var currentTitle;
var currentAuthor;
var currentPages;
var hasRead;

// library to keep all books in
var library = [];

var libraryLength;


function book(title, author, pages, read){

    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
  
}

function openModal(){



}



const addBookButton = document.getElementById('addBookButton');
const bookModal = document.getElementById('bookModal');
const submitButton = document.getElementById('submitButton');
const overlay = document.getElementById('overlay');

const bookForm = document.getElementById('bookForm');
const bookGrid = document.getElementById('bookGrid');



function addNewBook(){

    console.log("works");

    const newCard = document.createElement("div");
    const innerCardTitle = document.createElement('p');
    const innerCardAuthor = document.createElement('p');
    const innerCardPages = document.createElement('p');

    bookGrid.appendChild(newCard);
    newCard.classList.add('book-card')

    innerCardTitle.textContent = '"Book of Houdini"';
    innerCardAuthor.textContent = 'Roy';
    innerCardPages.textContent = '420';


}

function removeModal(){
    overlay.classList.remove('active');
    bookModal.classList.remove('active');
}

addBookButton.addEventListener("click", ()=>{

    bookModal.classList.add('active');
    overlay.classList.add('active');


});




bookForm.addEventListener("submit", ()=>{

    event.preventDefault();
    addNewBook();
    removeModal();
    


});

// For Loop to display books
