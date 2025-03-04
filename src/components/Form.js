import React from "react";

class Form extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: "",
      author: "",
      img: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev){
    let name = ev.target.name
    let value = ev.target.value
    this.setState({[name]: value})
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.addNewBook(this.state)
    this.setState({title: "", author: "", img: ""})
  }



  render() {
    return <h1>{
      <form onSubmit={(ev) => this.handleSubmit(ev)}>
        <label>Title:</label>
        <input type="text" name="title" value={this.state.title} onChange={(ev) => this.handleChange(ev)}></input>
        <br />
        <label>Author:</label>
        <input type="text" name="author" value={this.state.author} onChange={(ev) => this.handleChange(ev)}></input>
        <br />
        <label>Image:</label>
        <input type="text" name="img" value={this.state.img} onChange={(ev) => this.handleChange(ev)}></input>
        <br />
        <input type="submit"></input>
      </form>
    }</h1>;
  }
}

export default Form;
