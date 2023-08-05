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
    let title = prompt('Name of Book', 'TestBookTitle');
    let author = prompt('Name of Author', 'TestBookAuthor');
    let pages = prompt('Number of Pages', 200);
    let read = prompt('Read book?', 'Read');

    let bookToAdd = new Book(title, author, pages, read);
    myLibrary.push(bookToAdd);
    console.log(myLibrary);
}

const testBook = new Book('The Win', 'Misa', 342, 'is read');
myLibrary.push(testBook);

console.log(myLibrary);

const container = document.querySelector('#container');     
