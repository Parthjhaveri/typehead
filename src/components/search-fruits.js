import React, { Component } from 'react';
import ReactBootstrap, {Container, Row, Col, FormGroup} from 'react-bootstrap'; 

// IMPORT CHILD
import SuggestionBox from './suggestion-box';

class SearchFruits extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'input_val': '',
			'fruits': [
				'Açaí', 'Apple', 'Akee', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry',
				'Blackcurrant', 'Black sapote', 'Blueberry', 'Boysenberry', 'Buddhas hand', 
				'Crab apples', 'Currant', 'Cherry', 'Cherimoya', 'Chico fruit', 'Cloudberry', 'Coconut',
				'Cranberry', 'Cucumber', 'Damson', 'Dates', 'Dragonfruit', 'Pitaya', 'Durian',
				'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit',
				'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul',
				'Japanese plum', 'Jostaberry', 'Jujube', 'Juniper berry', 'Kiwano', 'Kiwifruit',
				'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen',
				'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit',
				'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine',
				'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon',
				'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pineberry', 'Plumcot', 'Pomegranate',
				'Pomelo', 'Purple mangosteen', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan',
				'Redcurrant', 'Salal', 'Salak', 'Satsuma', 'Soursop', 'Star apple', 'Star fruit',
				'Strawberry', 'Surinam cherry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'White currant',
				'White sapote', 'Yuzu', 'Avocado', 'Bell pepper', 'Chili pepper', 'Corn kernel',
				'Cucumber', 'Eggplant', 'Olive', 'Pea', 'Pumpkin', 'Squash', 'Tomato', 'Zucchini'
			]
		}

		this.handle_input = this.handle_input.bind(this);
	}
	render() {
	    return (
			<section className='p-3 sec-block search-fruits'>
				<Container>
					<h1>Search your Fruit</h1>
					<hr/>
					<div className='std-wrapper'>
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
								onChange={this.handle_input}
							/>
							<input 
								type='submit'							
								value='Search'
								className='ml-3 btn-std'
								id='find-fruit'
							/>
						</form>
						<SuggestionBox />
					</div>
				</Container>
			</section>			  
	    )
	}

	componentDidMount() {
		console.log(this.state.fruits);
	}

	handle_input(event) {
		this.setState({input_val: event.target.value});
		console.log(this.state.input_val);
	}
}

export default SearchFruits;