import React from "react";

const Book = props => {
  let handleClick = (event) => {
    event.persist()
    console.log('adding to shelf', event.target.className)
    props.handleBookMoves(props.book.id, event.target.className)
  }
  return (
    <div
      id={props.book.id}
      onClick={handleClick}
      className={props.className}
    >
      <h2 className={props.className}>{props.book.title}</h2>
      <img src={props.book.img} className={props.className}/>
    </div>
  );
};

export default Book;
