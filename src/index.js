import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Options from './pages/entry/Options';
import OrderSummary from './pages/summary/OrderSummary';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path='/' component={App}>
					<Route path='/' component={Options} />
					<Route path='/order-summary' component={OrderSummary} />
				</Route>
			</Switch>
		</Router>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
