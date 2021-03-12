import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import './App.css';

import OrderEntry from './pages/entry/OrderEntry';
import OrderSummary from './pages/summary/OrderSummary';

function App() {
	return (
		<Container className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={OrderEntry} />
					<Route path='/order-summary' component={OrderSummary} />
				</Switch>
			</Router>
		</Container>
	);
}

export default App;
