import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';
import React from 'react';

const OrderSummary = ({ setPhase }) => {
	const [orderDetails] = useOrderDetails();

	const pizzaArray = Array.from(orderDetails.pizzas.entries());
	const listPizzas = pizzaArray.map(([key, value]) => {
		return (
			<li key={key}>
				{value} {key}
			</li>
		);
	});
	const orderedToppings = orderDetails.toppings.size > 0;
	let renderedToppings = null;
	if (orderedToppings) {
		const toppingArray = Array.from(orderDetails.toppings.entries());
		const listToppings = toppingArray.map(([key, value]) => {
			return (
				<li key={key}>
					{value} {key}
				</li>
			);
		});
		renderedToppings = (
			<React.Fragment>
				<h2>Toppings: {orderDetails.totals.toppings}</h2>
				<ul>{listToppings}</ul>
			</React.Fragment>
		);
	}

	return (
		<div>
			<h1>Order Summary</h1>
			<h2>Pizzas: {orderDetails.totals.pizzas}</h2>
			<ul>{listPizzas}</ul>
			{renderedToppings}
			<SummaryForm setPhase={setPhase} />
		</div>
	);
};

export default OrderSummary;
