import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
import Filter from "../components/Filter";

class BookList extends Component{

  state = {
    sortMethod: ''
  }

  renderBooks(){
    return this.organizedBooks().map(book => {
      return <li key={book.id}>
        <Book book={book} moveBook={this.props.moveBook}/>
      </li>
    })
  }

  organizedBooks(){
    let sortedBooks = this.props.books.sort((a,b) => {
      return (a[this.state.sortMethod] > b[this.state.sortMethod])*2 - 1
    })
    return sortedBooks
  }

  sort = (method) => { //getter and setter?
    if(!(method === undefined)){
      this.setState({sortMethod: method}, () => console.log(this.state.sortMethod))
    }else{
      return this.state.sortMethod
    }
  }

  render(){
    return (
      <div className="book-list">
        <Form newBook={this.props.newBook}/>
        <Filter sort={this.sort}/>
        <h1>Book List</h1>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
};

export default BookList;
