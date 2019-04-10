import React, {Component} from "react";

class Book extends Component {

  render() {
  return (
    <div onClick={() => this.props.handleLike(this.props.book)}>
      <h2>{this.props.book.title}</h2>
      <img src={this.props.book.img}/>
    </div>
  );
}};

export default Book;
