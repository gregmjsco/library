let myLibrary = [];


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.showInfo = function() {
    let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    return info;
};

function addBookToLibrary() {
    let titleValue = document.getElementById('book-title').value;
    let authorValue = document.getElementById('book-author').value;
    let pagesValue = document.getElementById('book-pages').value;
    let readValue = document.getElementById('book-read').value;


    let bookToAdd = new Book(titleValue, authorValue, pagesValue, readValue);
    myLibrary.push(bookToAdd);
    console.log(myLibrary);
}

function renderCard() {
    let cardSection = document.getElementById('card-container');
    cardSection.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'card');
        bookCard.innerHTML = `
            <h1 class="card__title"></h1>
            <h2 class="card__author">Chuck Palahniuk</h2>
            <h2 class="card__pages">208</h2>
            <h2 class="card__read">Read</h2>
            <button class="btn">Remove</button>
        `
    }

}

const container = document.querySelector('#container');   

const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', addBookToLibrary);
