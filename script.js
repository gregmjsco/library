let myLibrary = [];


const container = document.querySelector('#container');   

const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', addBookToLibrary);

const removeBookButton = document.querySelector('.remove-book-button');
removeBookButton.addEventListener('click', removeBook()); 

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

    addBookToLibrary() {
        let titleValue = document.getElementById('book-title').value;
        let authorValue = document.getElementById('book-author').value;
        let pagesValue = document.getElementById('book-pages').value;
        let readValue = document.getElementById('book-read').checked;


        let bookToAdd = new Book(titleValue, authorValue, pagesValue, readValue);
        myLibrary.push(bookToAdd);
        console.log(myLibrary);
        renderCard();
    }

    renderCard() {
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

    removeBook() {
        myLibrary.splice(index, 1);
        renderCard();
    }
}




/*
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
}

Book.prototype.showInfo = function() {
    let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    return info;
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
  };

  function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
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
    myLibrary.splice(index, 1);
    renderCard();
} */

