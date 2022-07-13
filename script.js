

var currentTitle;
var currentAuthor;
var currentPages;
var hasRead;

var books = []


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




addBookButton.addEventListener("click", ()=>{

    bookModal.classList.add('active');
    overlay.classList.add('active');


});




submitButton.addEventListener("click", ()=>{

    


});
