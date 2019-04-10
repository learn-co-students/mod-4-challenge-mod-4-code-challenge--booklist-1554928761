import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      author: '',
      img: ''
    }
  }

  handleChange(ev) {
    this.setState({[ev.target.name]: ev.target.value})
  }
  render() {
    return <h1>{
        <form onSubmit={(ev) => this.props.handleSubmit(ev, this.state.title,this.state.author,this.state.img,)}>
          <input type='text' placeholder='title' name='title' value={this.state.title} onChange={(ev) => this.handleChange(ev)}></input>
          <input type='text' placeholder='author' name='author' value={this.state.author} onChange={(ev) => this.handleChange(ev)}></input>
          <input type='text' placeholder='img' name='img' value={this.state.img} onChange={(ev) => this.handleChange(ev)}></input>
          <input type='submit'></input>
        </form>
      }</h1>;
  }
}

export default Form;
