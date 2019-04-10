import React, { Component } from 'react'
import Book from "../components/Book";

class Bookshelf extends Component {
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
    return(
      <div>
        <h1>Book Shelf</h1>
        <ul>
          {this.loadBooks()}
        </ul>
      </div>
    )
  }
}

export default Bookshelf;
