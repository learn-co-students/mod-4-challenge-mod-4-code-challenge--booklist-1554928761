import React from "react";
import Book from "../components/Book";

const Bookshelf = ({books, handleClick}) => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books.map(book =>(
          <Book book={book} key={book.title} handleClick={handleClick}/>
        ))}</ul>
    </div>
  );
};

export default Bookshelf;
