import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = 'http://localhost:3005/books'

class App extends Component {

  constructor(){
    super();
    this.state = {
      books: [],
      likedBooks: []
    }

    this.handleLike = this.handleLike.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({books: data})
    })
  }

  handleLike = (book) => {
    console.log('handling like')
    console.log(book)

    let likedBooks = this.state.likedBooks
    console.log(likedBooks)
    likedBooks.push(book)
    console.log(likedBooks)

    this.setState({likedBooks: likedBooks})
  }

  handleRemove = (book) => {
    console.log('removing')
    console.log(book)

    let likedBooks = this.state.likedBooks
    likedBooks.splice(likedBooks.indexOf(book), 1)
    this.setState({likedBooks: likedBooks})
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleLike={this.handleLike}/>
        <Bookshelf likedBooks={this.state.likedBooks} handleLike={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
