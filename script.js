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

const testBook = new Book('The Win', 'Misa', 342, 'is read');

console.log(testBook.showInfo());