import React, { Component } from 'react';
import Book from '../components/Book';

class Bookshelf extends Component {
	render() {
		return (
			<div>
				<h1>Book Shelf</h1>
				<ul>
					{this.props.myBooks.map((book) => {
						return <Book book={book} handleClick={this.props.handleClick} key={book.id} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Bookshelf;
