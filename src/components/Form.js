import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      title: "",
      author: "",
      img: ""
    }
  }

  handleChange = (ev) => {
    var state = {}
    state[ev.target.name] = ev.target.value;
    this.setState({...state})
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addBook(this.state.title, this.state.author, this.state.img)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
          <input type="text" name="author" placeholder="Author" onChange={this.handleChange}/>
          <input type="text" name="img" placeholder="Image Link" onChange={this.handleChange}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
