import React, { Component } from 'react'

class Book extends Component {
  constructor(props) {
    super(props)
  }

  addOrRemove = () => {
    this.props.addOrRemove(this.props.book.id)
  }

  render() {
    return(
      <div onClick={this.addOrRemove}>
        <h2>{this.props.book.title}</h2>
        <img src={this.props.book.img} alt="img"></img>
      </div>
    )
  }
}

export default Book;
