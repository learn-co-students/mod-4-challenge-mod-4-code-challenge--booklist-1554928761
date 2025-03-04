import React, { Component } from 'react';

class Book extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.book.title}</h2>
				<img
					onClick={() => {
						this.props.handleClick(this.props.book);
					}}
					src={this.props.book.img}
					alt="book-img"
				/>
			</div>
		);
	}
}
export default Book;
