import React, { Component } from 'react';
import ReactBootstrap, {Container, Jumbotron, Button, Row, Col, Grid, Panel, FormGroup} from 'react-bootstrap'; 

class Navbar extends React.Component {
	render() {
	    return (
			<nav class='bg-grey'>			  
	    		<Container fluid={true}>
			  		<Row>
				    	<Col sm={3}>
				    		<img src='https://via.placeholder.com/160x60.png' />
				    	</Col>
				    	<Col sm={8} className='text-right'>
				    		<ul class='ls-none vt-ctr'>
				    			<li>About</li>
				    			<li>By Location</li>
				    			<li>History</li>
				    			<li>Order Fruits</li>
				    		</ul>
				    	</Col>
				  	</Row>
				</Container>
			</nav>			  
	    )
	}
}

export default Navbar;