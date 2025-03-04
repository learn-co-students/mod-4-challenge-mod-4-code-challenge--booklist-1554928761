import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			img: ''
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createBook(this.state.title, this.state.author, this.state.img);
	};
	render() {
		return (
			<h1>
				<form onSubmit={this.handleSubmit}>
					<label>Title</label>
					<input type="text" value={this.props.value} name="title" onChange={this.handleChange} />
					<label>Author</label>

					<input type="text" value={this.props.value} name="author" onChange={this.handleChange} />
					<label>Image</label>

					<input type="text" value={this.props.value} name="img" onChange={this.handleChange} />
					<input type="submit" />
				</form>
			</h1>
		);
	}
}

export default Form;
