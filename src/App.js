import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      shelf: [],
      allBooks: [],
      myBook: []
    }
    this.getBooks()
    this.addToShelf = this.addToShelf.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  getBooks() {
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(books => {
      this.setBooks(books)
    })
  }

  setBooks(books) {
    this.setState({
      books: books,
      allBooks: books
    })
  }

  addToShelf(book) {
    this.state.shelf.push(book)
    this.setState({
      shelf: this.state.shelf
    })
  }

  handleClick(id, action) {
    console.log(id, action)
    if (action === 'add') {
      let newBook = this.state.books.find(book => book.id === id)
      this.state.shelf.push(newBook)
      this.setState({
        shelf: this.state.shelf
      })
    } else {
      let updatedShelf = this.state.shelf.filter(book => book.id !== id)
      this.setState({
        shelf: updatedShelf
      })
    }
  }



  render() {
    return (
      <div className="book-container">
        <BookList
          myBook={this.state.myBook}
          allBooks={this.state.allBooks}
          handleSubmit={this.handleSubmit}
           books={this.state.books}
           handleClick={this.handleClick}
           />
        <Bookshelf
          shelf={this.state.shelf}
          handleClick={this.handleClick}
          />
      </div>
    );
  }
}

export default App;
