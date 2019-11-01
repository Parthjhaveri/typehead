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
				<ul>
					
				</ul>
			</div>
	    )
	}

	componentWillReceiveProps() {		
		// console.log(this.props);
	}

	componentDidUpdate() {	
		console.log('*' + this.props.suggestions);
		this.state.suggested_items.push(<li>{this.props.suggestions}</li>);
	}
}

export default SuggestionBox;