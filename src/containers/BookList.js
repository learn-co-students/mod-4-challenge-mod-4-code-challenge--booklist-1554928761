import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formBooks: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  //cannot get the new form stuff to show on page without re-rendering the page in constructor
  handleSubmit(ev, newTitle, newAuthor, newImg) {
    ev.preventDefault();
    let newBooks = {
      id: this.props.books.length + 1,
      title: newTitle,
      author: newAuthor,
      img: newImg
    }
    this.state.formBooks.push(newBooks)
    this.setState({
      formBooks: this.state.formBooks
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <ul> {
            this.state.formBooks.map(book => {
              return <Book

                onClick={(ev) => this.props.handleClick(ev)}
                action='add'
                handleClick={this.props.handleClick}
                 book={book}

                 key={this.props.books.length + 1}/>
            })
          }
          {
          this.props.books.map(book => {
            return <Book

              onClick={(ev) => this.props.handleClick(ev)}
              action='add'
              handleClick={this.props.handleClick}
               book={book}
               key={book.id}/>
          })
        }
          </ul>
      </div>
    );
  }
}

export default BookList;
