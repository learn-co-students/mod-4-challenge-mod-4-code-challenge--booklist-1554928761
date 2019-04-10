import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      author: "",
      img: ""
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateForm(this.state)
    console.log("clicking submit", this.state)
  }

  render() {
    return <h1>{
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input name="title" value={this.state.name} placeholder="title" onChange={(event) => this.handleChange(event)} />
        <input name="author" value={this.state.author} placeholder="author" onChange={(event) => this.handleChange(event)} />
        <input name="img" value={this.state.img} placeholder="img" onChange={(event) => this.handleChange(event)} />
        <input type="submit" value="Submit" />
      </form>




    }</h1>;
  }
}

export default Form;
