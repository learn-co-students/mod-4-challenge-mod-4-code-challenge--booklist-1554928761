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
    .then(books => this.setState({books}))
  }

  handleClick = (book) => {
    this.setState({
      bookshelf: [...this.state.bookshelf, book]
    })
  }

  removeBook =(book) => {
    const updatedBooks = this.state.bookshelf.filter(thisBook => {return book !== thisBook})
    this.setState({
      bookshelf: updatedBooks
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
