import React from "react";

const Book = ({book, handleClick}) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.img}
        onClick={ () => handleClick(book)}
        alt={book.title}
      />
    </div>
  );
};

export default Book;
