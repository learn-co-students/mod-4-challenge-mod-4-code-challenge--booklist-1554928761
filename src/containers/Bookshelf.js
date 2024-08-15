import React, {Component} from "react";
import Book from "../components/Book";

class Bookshelf extends Component {

  render() {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {this.props.likedBooks.map(book => {
          return <Book book={book} handleLike={this.props.handleLike}/>
        })}
      </ul>

    </div>
  );
}};

export default Bookshelf;
