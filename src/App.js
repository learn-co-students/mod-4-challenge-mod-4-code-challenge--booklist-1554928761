import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = 'http://localhost:3005/books'

class App extends Component {
  state = {
    bookList: [],
    bookShelf: []

  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(bookList => this.setState({bookList}) )
  }

  handleBookMoves = (bookId, area) => {

    let bookShelf = this.state.bookShelf.slice()
    const book = this.state.bookList.filter(book => book.id === bookId)[0]

    if (bookShelf.filter(book => book.id === bookId).length > 0 && area === 'shelf') {
      bookShelf = bookShelf.filter(book => book.id !== bookId)
    } else if (area === 'list' && bookShelf.filter(book => book.id === bookId).length < 1) {
      bookShelf = bookShelf.concat(book)
    }

    this.setState({bookShelf})
  }

  handleBookForm = (book) => {
    this.setState(prevState => {
      return {bookList: [...prevState.bookList, book]}
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.bookList}
          handleBookMoves={this.handleBookMoves}
          handleBookForm={this.handleBookForm}
        />
        <Bookshelf
          books={this.state.bookShelf}
          handleBookMoves={this.handleBookMoves}
        />
      </div>
    );
  }
}

export default App;
