import React from 'react';
import Book from '../components/Book';

const Bookshelf = (props) => {
	let renderShelfBooks = () => {
		return props.shelfBooks.map((b) => {
			return <Book key={b.id} book={b} handleBookClick={props.handleBookClick} />;
		});
	};

	return (
		<div>
			<h1>Book Shelf</h1>
			<ul>{renderShelfBooks()}</ul>
		</div>
	);
};

export default Bookshelf;
