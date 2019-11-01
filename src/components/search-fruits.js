import React, { Component } from 'react';
import ReactBootstrap, {Container, Row, Col, FormGroup} from 'react-bootstrap'; 

class SearchFruits extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'word': 'test'
		}
	}
	render() {
	    return (
			<section className='p-3 sec-block search-fruits'>
				<Container>
					<h1>Search your Fruit</h1>
					<hr/>
					<form>
						<label htmlFor='search-fruit'>
							Enter a fruit...
						</label>
						<input 
							type='text'
							autoCorrect='on'
							autoFocus='on'
							aria-required='true'
							name='search-fruit'
							className='inp-std'
							id='search-fruit'
						/>
						<input 
							type='submit'							
							value='Search'
							className='ml-3 btn-std'
							id='find-fruit'
						/>
					</form>
				</Container>
			</section>			  
	    )
	}

	componentDidMount() {
		console.log(this.state.word);
	}
}

export default SearchFruits;