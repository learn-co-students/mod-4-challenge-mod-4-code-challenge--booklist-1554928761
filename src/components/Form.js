import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const newBook = this.state
    this.props.handleBookForm(newBook)
  }

  render() {
    return (
      <h1>
        {/* <label>Title</label> */}
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        {/* <label>Author</label> */}
        <input
          type='text'
          name='author'
          placeholder='Author'
          value={this.state.author}
          onChange={this.handleChange}
        />
        {/* <label>Image</label> */}
        <input
          type='text'
          name='img'
          placeholder='Image URL'
          value={this.state.img}
          onChange={this.handleChange}
        />
        <input type='submit' value='Submit' onClick={this.handleFormSubmit}/>
      </h1>
    );
  }
}

export default Form;
