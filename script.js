
// Initial variables

var currentTitle;
var currentAuthor;
var currentPages;
var hasRead;
var startingIndex;

// library to keep all books in
var library = [];


// function to create book objects
function book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}


const addBookButton = document.getElementById('addBookButton');
const bookModal = document.getElementById('bookModal');
const submitButton = document.getElementById('submitButton');
const overlay = document.getElementById('overlay');

const bookForm = document.getElementById('bookForm');
const bookGrid = document.getElementById('bookGrid');
const exitButton = document.getElementById('exitButton');


function setStartingIndex(number) {

    if (library.length == 0) {
        startingIndex = 0;

    }
    else {

        startingIndex = number
    }

}


// functions adds book to the library array

function addNewBook() {


    let newTitle;
    let newAuthor;
    let newPages;
    let readCheck;
    let doubleCheck;
    let errorMsg;


    newTitle = document.getElementById('title').value;
    newAuthor = document.getElementById('author').value;
    newPages = document.getElementById('pages').value;

    errorMsg = document.getElementById('errorMsg');

    if (document.getElementById('read').checked == true) {
        readCheck = true;

    }
    else if (document.getElementById('read').checked == false) {

        readCheck = false;

    }


    doubleCheck = checkForBook(newTitle);
    console.log(doubleCheck);


    if (doubleCheck == true) {

        errorMsg.classList.add('active');
        errorMsg.textContent = "This book already exist in your library";
        setStartingIndex(library.length);

        return;

    }
    else if (doubleCheck == false) {

        const newBook = new book(newTitle, newAuthor, newPages, readCheck);
        library.push(newBook);
        removeModal();
        reset();
        errorMsg.classList.remove('active');
        errorMsg.textContent = "";
        setStartingIndex(library.length - 1);


    }


}

function reset() {

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('read').checked = false;
    errorMsg.classList.remove('active');


}

// creating a book card for each book in the array

function createBookCard(title, author, pages, read) {

    let numberPages;
    const newCard = document.createElement("div");
    const innerCardTitle = document.createElement('p');
    const innerCardAuthor = document.createElement('p');
    const innerCardPages = document.createElement('p');
    const innerCardButtons = document.createElement('div');
    const innerCardRead = document.createElement('button');
    const innerCardRemove = document.createElement('button');


    bookGrid.appendChild(newCard);
    newCard.classList.add('book-card')

    if (pages == 1) {

        numberPages = "page"


    }
    else if (pages > 1) {
        numberPages = "pages"

    }

    innerCardTitle.textContent = '"' + title + '"';
    innerCardAuthor.textContent = author;
    innerCardPages.textContent = pages + " " + numberPages;



    newCard.appendChild(innerCardTitle);
    newCard.appendChild(innerCardAuthor);
    newCard.appendChild(innerCardPages);




    innerCardButtons.classList.add('card-buttons')
    innerCardButtons.setAttribute("id", "bookButtons")
    newCard.appendChild(innerCardButtons);

    innerCardRead.classList.add('btn');

    if (read == true) {

        innerCardRead.classList.add('read');
        innerCardRead.textContent = "Read";

    }
    else if (read == false) {

        innerCardRead.classList.add('notRead');
        innerCardRead.textContent = "Not Read";

    }


    innerCardRead.setAttribute("id", "readButton");


    innerCardRemove.classList.add('btn');
    innerCardRemove.classList.add('remove');
    innerCardRemove.setAttribute("id", "removeButton")
    innerCardRemove.textContent = "Remove";


    innerCardButtons.appendChild(innerCardRead);
    innerCardButtons.appendChild(innerCardRemove);



}

// displaying all the book cards

function displayLibrary() {


    for (let i = startingIndex; i < library.length; i++) {

        currentTitle = library[i].title;
        currentAuthor = library[i].author;
        currentPages = library[i].pages;
        hasRead = library[i].read;

        createBookCard(currentTitle, currentAuthor, currentPages, hasRead);
    }

}



function removeModal() {

    overlay.classList.remove('active');
    bookModal.classList.remove('active');

}

// function checking if book is already in the array

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


function removeBook(title) {

    for (let i = 0; i < library.length; i++) {

        let comparedTitle = '"' + library[i].title + '"'

        if (title == comparedTitle) {

            let index = library.indexOf(library[i]);

            if (index > -1) {

                library.splice(index, 1);


            }
        }

    }

}

// Event Delegation

document.addEventListener('click', function (e) {

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

document.addEventListener('click', function (e) {

    if (e.target && e.target.id == "removeButton") {

        let bookTitle = e.target.parentNode.parentNode.firstChild.textContent;
        e.target.parentNode.parentNode.remove(e.target.parentNode)
        removeBook(bookTitle);

    }

});


addBookButton.addEventListener("click", () => {

    bookModal.classList.add('active');
    overlay.classList.add('active');


});


exitButton.addEventListener("click", () => {

    event.preventDefault();
    removeModal();
    reset();


})

bookForm.addEventListener("submit", () => {

    event.preventDefault();
    addNewBook();
    displayLibrary();

});





