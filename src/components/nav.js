import React, { Component } from 'react';
import ReactBootstrap, {Container, Row, Col, FormGroup} from 'react-bootstrap'; 

class Navbar extends React.Component {
	render() {
	    return (
			<nav className='bg-blue'>			  
	    		<Container fluid={true}>
			  		<Row>
				    	<Col sm={3}>
				    		<img src='https://via.placeholder.com/160x60.png' alt='placeholder' />
				    	</Col>
				    	<Col sm={8} className='text-right'>
				    		<ul className='ls-none vt-ctr'>
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