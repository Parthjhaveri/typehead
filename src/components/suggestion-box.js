import React, { Component } from 'react';
import ReactBootstrap, {Container, Row, Col, FormGroup} from 'react-bootstrap'; 

class SuggestionBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			suggested_items: []
		}
	}
	render() {
	    return (
			<div className='suggest-box-wrapper'>

			</div>
	    )
	}

	componentWillReceiveProps() {		
		// console.log(this.props);
	}

	componentDidUpdate() {	
		console.log(this.props);
		// var that = this;
		// setTimeout(function() {
		// 	console.log(that.state.suggested_items);
		// }, 200);
	}
}

export default SuggestionBox;