import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  renderInputs(){
    return Object.keys(this.state).map((field, index) => {
      return <label key={index}>
        {field.toUpperCase()}
        <input type="text"
          name={field}
          value={this.state[field]}
          onChange={this.handleChange}/>
      </label>
    })
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.newBook(this.state)
  }

  render() {
    return <div>
      <h2>Add a New Book</h2>
      <form onSubmit={this.handleSubmit}>
        {this.renderInputs()}
        <input type="submit" name="Submit"/>
      </form>
    </div>;
  }
}

export default Form;
