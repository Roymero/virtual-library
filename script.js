
// Initial variables

var currentTitle;
var currentAuthor;
var currentPages;
var hasRead;
var startingIndex;

// library to keep all books in
var library = [];




function book(title, author, pages, read){

    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
  
}





const addBookButton = document.getElementById('addBookButton');
const bookModal = document.getElementById('bookModal');
const submitButton = document.getElementById('submitButton');
const overlay = document.getElementById('overlay');




const bookForm = document.getElementById('bookForm');
const bookGrid = document.getElementById('bookGrid');



function addNewBook(){


    let newTitle;
    let newAuthor;
    let newPages;
    let doubleCheck;
    let errorMsg;


    newTitle = document.getElementById('title').value;
    newAuthor = document.getElementById('author').value;
    newPages = document.getElementById('pages').value;
    errorMsg = document.getElementById('errorMsg');

    doubleCheck = checkForBook(newTitle);
    console.log(doubleCheck);


   if (doubleCheck == true){

    errorMsg.classList.add('active');
    errorMsg.textContent = "This book already exist in your library";
    

    
    return;
    

   }
   else if(doubleCheck == false){

    const newBook = new book(newTitle, newAuthor, newPages, false);
    library.push(newBook);
    removeModal();
    reset();


   }

    if(library.length == 0){
        startingIndex = 0;

    }
    else{

        startingIndex = library.length - 1;
    }



   

}

function reset(){

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";

}


function createBookCard(title, author, pages){


    const newCard = document.createElement("div");
    const innerCardTitle = document.createElement('p');
    const innerCardAuthor = document.createElement('p');
    const innerCardPages = document.createElement('p');
    const innerCardButtons = document.createElement('div');
    const innerCardRead = document.createElement('button');
    const innerCardRemove = document.createElement('button');

    const readButton = document.getElementById('readButton');


    
    


    bookGrid.appendChild(newCard);
    newCard.classList.add('book-card')


   /* currentTitle = document.getElementById('title').value;
    currentAuthor = document.getElementById('author').value;
    currentPages =  document.getElementById('pages').value; */

    innerCardTitle.textContent = '"' + title + '"';
    innerCardAuthor.textContent = author;
    innerCardPages.textContent = pages;




    newCard.appendChild(innerCardTitle);
    newCard.appendChild(innerCardAuthor);
    newCard.appendChild(innerCardPages);


    

    innerCardButtons.classList.add('card-buttons')
    innerCardButtons.setAttribute("id", "bookButtons")
    newCard.appendChild(innerCardButtons);
    
    innerCardRead.classList.add('btn');
    innerCardRead.classList.add('notRead');
    innerCardRead.setAttribute("id","readButton")
    innerCardRead.textContent = "Not Read";

    


    innerCardRemove.classList.add('btn');
    innerCardRemove.classList.add('remove');
    innerCardRemove.setAttribute("id","removeButton")
    innerCardRemove.textContent = "Remove";


    innerCardButtons.appendChild(innerCardRead);
    innerCardButtons.appendChild(innerCardRemove);



}


function displayLibrary(){


for(let i = startingIndex; i < library.length; i++){

    currentTitle = library[i].title;
    currentAuthor = library[i].author;
    currentPages = library[i].pages;

    createBookCard(currentTitle, currentAuthor, currentPages);

}

}

function swapRead(){

    const readButton = document.getElementById('readButton');
    




}

function removeModal(){
    
    overlay.classList.remove('active');
    bookModal.classList.remove('active');

}

function checkForBook(title) {

    if (library.length == 0) {

        return false
    }
    else {
        for (let i = 0; i < library.length; i++) {

            if (title == library[i].title) {
                return true;
            }

        }
    }


    return false

}


document.addEventListener('click', function(e){

    if (e.target && e.target.id == "readButton") {

        if (e.target.classList.contains('notRead')) {

            e.target.classList.remove('notRead');
            e.target.classList.add('read');
            e.target.textContent = "Read";

        }
        else if (e.target.classList.contains('read')) {

            e.target.classList.remove('read');
            e.target.classList.add('notRead');
            e.target.textContent = "Not Read";

        }
    }

});





addBookButton.addEventListener("click", ()=>{

    bookModal.classList.add('active');
    overlay.classList.add('active');


});




bookForm.addEventListener("submit", ()=>{

    

    event.preventDefault();
    addNewBook();
    displayLibrary();
    console.log(library);
  
    


});

const spellBook = new book("Houdini's Spellbook", "Houdini", "300", false);

const theDuddy = new book("The Book of Duddy", "Roi", "1000", false)

const theDini = new book("The Book of Dini", "Roy", "420", false)

library.push(spellBook);
library.push(theDuddy);
library.push(theDini);



// For Loop to display books

for(let i = 0; i < library.length; i++){

    currentTitle = library[i].title;
    currentAuthor = library[i].author;
    currentPages = library[i].pages;

    createBookCard(currentTitle, currentAuthor, currentPages);

}

