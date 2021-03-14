import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

import Navigation from './components/Navbar';
import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';

import { OrderDetailsProvider } from './contexts/OrderDetails.jsx';
function App() {
	return (
		<Router>
			<Navigation />

			<Container className='App'>
				<Row style={{ marginTop: '20px' }}>
					<Switch>
						<OrderDetailsProvider>
							<Route exact path='/' component={OrderEntry} />
							<Route
								path='/order-summary'
								component={OrderSummary}
							/>
						</OrderDetailsProvider>
					</Switch>
				</Row>
			</Container>
		</Router>
	);
}

export default App;
