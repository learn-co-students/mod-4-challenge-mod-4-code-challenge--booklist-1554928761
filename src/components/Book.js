import React from 'react';

const Book = (props) => {
	return (
		<div className="single-book" onClick={() => props.handleBookClick(props.book)}>
			<h2>{props.book.title}</h2>
			<h4>{props.book.author}</h4>
			<img src={props.book.img} />
		</div>
	);
};

export default Book;
