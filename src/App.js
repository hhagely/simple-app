import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';

class App extends Component {
	componentDidMount() {
		this.props.getPayload();
	}

	render() {
		console.log('json', this.props.json || "hasn't loaded yet");
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		json: state.json
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
