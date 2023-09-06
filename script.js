let myLibrary = [];





class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = Boolean(read);
    } 

    showInfo() {
        let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        return info;
    }

    toggleRead() {
        this.read = !this.read;
    }

    
}


function addBookToLibrary() {
    let titleValue = document.getElementById('book-title').value;
    let authorValue = document.getElementById('book-author').value;
    let pagesValue = document.getElementById('book-pages').value;
    let readValue = document.getElementById('book-read').checked;


    let bookToAdd = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(bookToAdd);
    console.log(myLibrary);
    renderCard();
    const removeBookButton = document.querySelector('.remove-book-button');


        removeBookButton.addEventListener('click', function () {
            removeBook();
        }); 
}

function renderCard() {
    let cardSection = document.getElementById('card-container');
    cardSection.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'card');
        bookCard.innerHTML = `
            <h1 class="card__title">${book.title}</h1>
            <h2 class="card__author">${book.author}</h2>
            <h2 class="card__pages">${book.pages} pages</h2>
            <h2 class="card__read">${book.read}</h2>
            <button class="btn remove-book-button" onclick="removeBook(${i})">Remove</button>
        `;
        cardSection.appendChild(bookCard);

        
}
}

function removeBook(index) {
    console.log("Remove book called", index);
    console.log(myLibrary)
    myLibrary.splice(index, 1);
    renderCard();
}


const container = document.querySelector('#container');   

const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', addBookToLibrary);

const title = document.getElementById('book-title');

title.addEventListener('input', (e) => {
    if (title.validity.typeMismatch) {
        title.setCustomValidity("Enter a book title")
    } else {
        title.setCustomValidity("");
    }
})

const form = document.querySelector("form");
const titleError = document.querySelector("#book-title + span.error");

form.addEventListener("submit", (event) => {
    console.log("Form submit button pressed")
    if (!title.validity.valid) {
        showError();
        event.preventDefault(); 
    }
});

function showError() {
    if (title.validity.valueMissing) {
        titleError.textContent = "You need to enter a title";
    } else if (title.validity.typeMismatch) {
        titleError.textContent = "Enter valid title";
    } else if (title.validity.tooShort) {
        titleError.textContent = "Title too short"
    }
}

titleError.className = "error active";

