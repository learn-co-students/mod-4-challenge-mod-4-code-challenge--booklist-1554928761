import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/BookList';
import Bookshelf from './containers/Bookshelf';

class App extends Component {
	constructor() {
		super();
		this.state = {
			allBooks: [],
			shelfBooks: [],
			listBooks: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:3005/books')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({
					allBooks: json,
					listBooks: json
				});
			});
	}

	addBookToShelf = (book) => {
		let newShelfBooks = this.state.shelfBooks.slice().concat(book);
		let newListBooks = this.state.listBooks.filter((b) => {
			return b !== book;
		});
		this.setState({
			listBooks: newListBooks,
			shelfBooks: newShelfBooks
		});
	};

	removeBookFromShelf = (book) => {
		let newListBooks = this.state.listBooks.slice().concat(book);
		let newShelfBooks = this.state.shelfBooks.filter((b) => {
			return b !== book;
		});
		this.setState({
			listBooks: newListBooks,
			shelfBooks: newShelfBooks
		});
	};

	handleNewBookSubmit = (ev, st) => {
		ev.preventDefault();
		let lastAddedBookId = this.state.allBooks[this.state.allBooks.length - 1].id;
		let newBook = {
			author: st.newBookAuthor,
			id: lastAddedBookId + 1,
			img: st.newBookImg,
			title: st.newBookTitle
		};
		this.setState((state) => {
			return {
				allBooks: state.allBooks.concat(newBook),
				listBooks: state.listBooks.concat(newBook)
			};
		});
	};

	render() {
		return (
			<div className="book-container">
				<BookList
					listBooks={this.state.listBooks}
					handleBookClick={this.addBookToShelf}
					handleNewBookSubmit={this.handleNewBookSubmit}
				/>
				<Bookshelf shelfBooks={this.state.shelfBooks} handleBookClick={this.removeBookFromShelf} />
			</div>
		);
	}
}

export default App;
