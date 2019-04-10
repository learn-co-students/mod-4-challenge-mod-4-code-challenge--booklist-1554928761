import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBook={this.props.addNewBook}/>
        <ul>{
          this.props.allBooks.map(book => {
            return <Book
              book={book}
              handleClick={this.props.handleClick}
              onShelf={false}
              key={book.id}
            />
          })
        }</ul>
      </div>
    );
  }
}

export default BookList;
