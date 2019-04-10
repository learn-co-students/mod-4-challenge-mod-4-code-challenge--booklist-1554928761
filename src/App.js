import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = `http://localhost:3005/books`

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      myBooks: []
    }
    this.grabBooks()
  }

  grabBooks = () => {
    fetch(API)
      .then(response => {
        return response.json()
      })
      .then(books => {
        this.setState({
          books: books
        })
      })
  }

  addBook = (book) => {
    if (this.state.myBooks.indexOf(book) > -1) {
      return
    } else {
      let newBook = this.state.myBooks.concat(book)
      this.setState({
        myBooks: newBook
      })
    }
  }

  removeBook = (book) => {
    let bks = this.state.myBooks.slice()
    if (bks.includes(book)) {
      for (let i = 0; i < bks.length; i++) {
        if (book.name === bks[i].name) {
          bks.splice(i, 1)
          break;
        }
      }
      this.setState({
        myBooks: bks
      })
    }
  }

  updateForm = (data) => {
    let addedBook = this.state.books.concat(data)
    console.log("what is Data", data)
    this.setState({ books: addedBook })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.addBook} updateForm={this.updateForm} />
        <Bookshelf books={this.state.myBooks} handleClick={this.removeBook} />
      </div>
    );
  }
}

export default App;
