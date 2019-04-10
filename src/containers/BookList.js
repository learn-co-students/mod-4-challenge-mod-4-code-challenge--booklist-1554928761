import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleBookForm={this.props.handleBookForm}/>
        <ul>
          {this.props.books.map(book => (
            <Book
              key={book.id}
              book={book}
              handleBookMoves={this.props.handleBookMoves}
              className='list'
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
