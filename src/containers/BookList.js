import React, { Component } from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	renderListBooks = () => {
		return this.props.listBooks.map((b) => {
			return <Book key={b.id} book={b} handleBookClick={this.props.handleBookClick} />;
		});
	};

	render() {
		return (
			<div className="book-list">
				<h1>Book List</h1>
				<Form handleNewBookSubmit={this.props.handleNewBookSubmit} />
				<ul>{this.renderListBooks()}</ul>
			</div>
		);
	}
}

export default BookList;
