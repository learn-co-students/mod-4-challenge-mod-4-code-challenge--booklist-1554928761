import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: []
    }

    fetch("http://localhost:3005/books")
    .then(response => {
      return response.json()
    })
    .then(books => {
      this.setState({books})
    });
  }

  newBook = (book) => {
    this.setState(prevState => {
      let updatedBooks = [...prevState.books]
      updatedBooks.unshift(book)
      return {books: updatedBooks}
    })
  }

  moveBook = (book) => {
    book.onShelf = !book.onShelf
    this.forceUpdate()
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books}
                  moveBook={this.moveBook}
                  newBook={this.newBook}/>
        <Bookshelf books={this.state.books.filter(book => book.onShelf)}
                   moveBook={this.moveBook}/>
      </div>
    );
  }
}

export default App;
