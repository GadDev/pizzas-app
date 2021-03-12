import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';
export default function Navigation() {
	return (
		<Navbar bg='light' expand='sm'>
			<Navbar.Brand>
				<Link to='/'>Pizza on demand</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
				
						<Link to='/order-summary'>Order summary</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
