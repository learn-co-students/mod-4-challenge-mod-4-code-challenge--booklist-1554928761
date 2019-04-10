import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      shelf: []
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(data => {
      this.setState({books: data})
    })
  }

  addToShelf = (id) => {
    if (typeof this.state.shelf.find((book) => book.id === id) === "undefined") {
      var temp = this.state.books.find((book) => book.id === id)
    var newArr = this.state.shelf.slice()
    newArr.push(temp)
    this.setState({shelf: newArr})
    }
  }

  removeFromShelf = (id) => {
    var newArr = this.state.shelf.filter((book) => book.id !== id)
    this.setState({shelf: newArr})
  }

  addBookToList = (title, author, img) => {
    var book = {
      id: this.state.books.length,
      title: title,
      author: author,
      img: img
    }
    var newArr = this.state.books.slice()
    newArr.unshift(book)
    this.setState({books: newArr})
  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addOrRemove={this.addToShelf} addBook={this.addBookToList}/>
        <Bookshelf books={this.state.shelf} addOrRemove={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
