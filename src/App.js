import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/BookList';
import Bookshelf from './containers/Bookshelf';
const BOOKS = 'http://localhost:3005/books';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			myBooks: []
		};
		this.fetchingBooks();
	}

	fetchingBooks = () => {
		fetch(BOOKS)
			.then((response) => {
				return response.json();
			})
			.then((books) => {
				console.log(books);
				this.setState({
					books
				});
			});
	};

	createBook = (title, author, img) => {
		let newData = { title: title, author: author, img: img };
		console.log(newData);
		this.setState({
			books: this.state.books.concat(newData)
		});
	};

	addBook = (book) => {
		console.log('my book in addBook');
		this.setState({
			myBooks: this.state.myBooks.concat(book)
		});
	};

	removeBook = (book) => {
		console.log("you're removing the book", book.title);
		console.log(this.state.myBooks);
		let theBooks = this.state.myBooks.slice();
		for (let i = 0; i < theBooks.length; i++) {
			console.log(i);
			if (theBooks[i].title === book.title) {
				console.log('in the if statement', theBooks[i]);
				theBooks.splice(i, 1);
				break;
			}
		}
		this.setState({
			myBooks: theBooks
		});
	};

	render() {
		return (
			<div className="book-container">
				<BookList createBook={this.createBook} handleClick={this.addBook} books={this.state.books} />
				<Bookshelf handleClick={this.removeBook} myBooks={this.state.myBooks} />
			</div>
		);
	}
}

export default App;
