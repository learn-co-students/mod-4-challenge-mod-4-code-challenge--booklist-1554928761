import React from "react";
import Book from "../components/Book";

const Bookshelf = ({books,moveBook}) => {

  function renderBooks(){
    return books.map(book => {
      return <Book book={book} key={book.id} moveBook={moveBook}/>
    })
  }

  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
