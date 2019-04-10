import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          title={this.props.title}
          author={this.props.author}
          image={this.props.image}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}/>
        <ul>{this.props.books.map(book => (
            <Book book={book}
              key={book.title}
              handleClick={this.props.handleClick}/>
          ))}</ul>
      </div>
    );
  }
}

export default BookList;
