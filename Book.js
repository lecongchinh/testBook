class Book {

	constructor(book) {
		this.id = book.id;
		this.name = book.name || "";
		this.author = book.author || "";
	}

}

module.exports = Book;
