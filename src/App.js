import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';
import OrderConfirmation from './pages/confirmation/OrderConfirmation';

import { OrderDetailsProvider } from './contexts/OrderDetails.jsx';
function App() {
	// order "inProgress", 'review', or 'completed'
	const [phase, setPhase] = useState(null);

	//set default view
	let Component = OrderEntry;

	switch (phase) {
		case 'inProgress':
			Component = OrderEntry;
			break;
		case 'review':
			Component = OrderSummary;
			break;
		case 'completed':
			Component = OrderConfirmation;
			break;
		default:
	}
	return (
		<Container className='App'>
			<Row style={{ marginTop: '20px' }}>
				<OrderDetailsProvider>
					{<Component setPhase={setPhase} />}
				</OrderDetailsProvider>
			</Row>
		</Container>
	);
}

export default App;
