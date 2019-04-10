import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  loadBooks = () => {
    return this.props.books.map((book, index) => (
      <li key={index}>
        <Book book={book} addOrRemove={this.props.addOrRemove}/>
      </li>
    ))
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}/>
        <ul>
          {this.loadBooks()}
        </ul>
      </div>
    );
  }
}

export default BookList;
