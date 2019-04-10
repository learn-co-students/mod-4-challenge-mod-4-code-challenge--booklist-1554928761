import React, { Component } from "react";
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

//fetch all books and save them to state, adding in onShelf: false
  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => {
      const allBooks= books.map(book =>{
         return {...book, onShelf: false} })
      this.setState({books:allBooks})
    })
  }

  //handles book in booklist being clicked on
  handleClickOnBookList = (book) => {
    const updatedBooks=this.state.books.map(thisBook => {
      return thisBook === book ? {...book, onShelf: true} : thisBook
    })
    this.setState({
      books:updatedBooks
    }, this.addBookToShelf(book))
  }
  //make sure book isnt there already before adding
  addBookToShelf =(book) => {
    if(!book.onShelf){
      this.setState({
        bookshelf: [...this.state.bookshelf, book],
      })
    }
  }

  // handles removing of book from shelf when its clicked on
  removeBookFromBookShelf =(book) => {
    //removes the clicked on book from the bookshelf list
    const updatedBooks = this.state.bookshelf.filter(thisBook => {return book !== thisBook})
    // changes the book that was clicked on back to onShelf: false
    const editedBooks= this.state.books.map(thisBook =>{
      return thisBook.title ===book.title ? {...book, onShelf: false} : thisBook
    })
    //save all the stuff into state
    this.setState({
      bookshelf: updatedBooks,
      books: editedBooks
    })
  }

  //handles changes in the forms input fields and saves them to state
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //handles submission of form
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
          title={this.state.title}
          author={this.state.author}
          image={this.state.image}
          handleClick={this.handleClickOnBookList}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        <Bookshelf
          books={this.state.bookshelf}
          handleClick={this.removeBookFromBookShelf}/>
      </div>
    );
  }
}

export default App;
