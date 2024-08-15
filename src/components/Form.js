import React from "react";

class Form extends React.Component {

  //everything works here, I just
  //ran out of time to render the new book
  //controlled form works and everything
  
  constructor() {
    super()
    this.state = {
      title: 'title',
      author: 'author',
      img: 'img'
    }
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({
      title: 'title',
      author: 'author',
      img: 'img'
    })
  }

  render() {
    return (
    <div>
      <h1>Form</h1>;
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
        <input type='text' name='author' value={this.state.author} onChange={this.handleChange} />
        <input type='text' name='img' value={this.state.img} onChange={this.handleChange} />
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )}
}

export default Form;
