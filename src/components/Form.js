import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newBookAuthor: '',
			newBookImg: '',
			newBookTitle: ''
		};
	}

	handleNewBookChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value
		});
	};

	render() {
		return (
			<h1>
				<form onSubmit={(ev) => this.props.handleNewBookSubmit(ev, this.state)}>
					<label>Author</label>
					<input
						type="text"
						name="newBookAuthor"
						value={this.state.newBookAuthor}
						onChange={this.handleNewBookChange}
					/>
					<label>Img</label>
					<input
						type="text"
						name="newBookImg"
						value={this.state.newBookImg}
						onChange={this.handleNewBookChange}
					/>
					<label>Title</label>
					<input
						type="text"
						name="newBookTitle"
						value={this.state.newBookTitle}
						onChange={this.handleNewBookChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</h1>
		);
	}
}

export default Form;
