import React, { Component } from 'react';
import ReactBootstrap, {Container, Row, Col, FormGroup} from 'react-bootstrap'; 


class SuggestionBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			suggested_items: [],
		}		
	}

	static getDerivedStateFromProps(props, state) {
		// this.state.suggested_items.push(props);
		console.log(props);
		return props;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props != prevProps) {
			return this.state.suggested_items.push(this.props);
		}
	}

	render() {		
	    return (
			<div className='suggest-box-wrapper'>
				<ul className='ls-none'>
					{
						this.state.suggested_items.forEach((el, idx) => {
							return <li tabIndex='' key={idx}>{el}</li>
						})
					}
				</ul>
			</div>
	    )
	}

}

export default SuggestionBox;