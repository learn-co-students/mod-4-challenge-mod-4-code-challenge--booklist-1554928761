import React from "react";
import Book from "../components/Book";

// i tried to get the book so that i could interact with it as normal but didn't have time to do the key id
//i should have done this in App instead of Booklist because i did not think far ahead enough to add/removing from Booklist just showing it on the page
const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>

        {
          props.shelf.map(book => {
            return <Book
              handleClick={props.handleClick}
              action='remove'
              book={book}
              key={book.id}/>
          })
        }</ul>
    </div>
  );
};

export default Bookshelf;
