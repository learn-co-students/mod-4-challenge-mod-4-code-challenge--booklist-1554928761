import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type='text' name='title'
          value={this.props.title} onChange={this.props.handleChange}
          placeholder="Title"
        />
        <input type='text' name='author'
          value={this.props.author}
          onChange={this.props.handleChange}
          placeholder="Author"
        />
        <input type='text' name='image'
          value={this.props.image}
          onChange={this.props.handleChange}
          placeholder="Image URL"
        />
        <input type='submit' value="Submit" />
      </form>
    );
  }
}

export default Form;
