import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      books: [],
      bookshelf: [],
      title: '',
      author: '',
      image: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => {
      const allBooks= books.map(book =>{
         return {...book, onShelf: false} })
      this.setState({books:allBooks})
  })
}

  handleClick = (book) => {
    const updatedBooks=this.state.books.map(thisBook => {
      return thisBook === book ? {...book, onShelf: true} : thisBook
    })

    this.setState({
      books:updatedBooks
    }, this.addBookToShelf(book))
  }

  addBookToShelf =(book) => {
    if(!book.onShelf){
      this.setState({
        bookshelf: [...this.state.bookshelf, book],
      })
    }
  }

  removeBook =(book) => {
    const updatedBooks = this.state.bookshelf.filter(thisBook => {return book !== thisBook})
    
    const editedBooks= this.state.books.map(thisBook =>{
      return thisBook.title ===book.title ? {...book, onShelf: false} : thisBook
    })

    this.setState({
      bookshelf: updatedBooks,
      books: editedBooks
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({
      books:[...this.state.books, {title: this.state.title, author: this.state.author, img: this.state.image}]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          handleClick={this.handleClick}
          title={this.state.title}
          author={this.state.author}
          image={this.state.image}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        <Bookshelf books={this.state.bookshelf}
          handleClick={this.removeBook}/>
      </div>
    );
  }
}

export default App;
