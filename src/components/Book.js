import React from "react";

const Book = ({book, moveBook}) => {
  return (
    <div>
      <h2>{book.title}, By {book.author}</h2>
      <img src={book.img} alt={book.title}/><br/>
      <button onClick={() => moveBook(book)}>
        {book.onShelf?"Remove from your bookshelf":"Add to your bookshelf"}
      </button>
    </div>
  );
};

export default Book;
