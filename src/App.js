import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      allBooks: [],
      myBooks: [],
      addedBooks: [],
      numberOfBooks: 0
    }

    this.fetchBooks()
    this.handleClick = this.handleClick.bind(this)
    this.addNewBook = this.addNewBook.bind(this)
  }

  fetchBooks(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(json => {
      this.setState({allBooks: json, numberOfBooks: json.length });
    })
  }

  handleClick(thisBook, onShelf){
    if (onShelf === false){
      this.state.myBooks.push(thisBook)
      this.setState({myBooks: this.state.myBooks})
    }else{
      let updatedShelf = this.state.myBooks.filter(book => book.id !== thisBook.id)
      this.setState({myBooks: updatedShelf})
    }
  }

  addNewBook(book){
    book.id = this.state.numberOfBooks + 1
    this.state.allBooks.push(book)
    this.setState({allBooks: this.state.allBooks, numberOfBooks: this.state.numberOfBooks + 1})
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          allBooks={this.state.allBooks}
          handleClick={this.handleClick}
          addNewBook={this.addNewBook}
        />
        <Bookshelf
          myBooks={this.state.myBooks}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
