import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';

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

	const toppingArray = Array.from(orderDetails.toppings.entries());
	const listToppings = toppingArray.map(([key, value]) => {
		return (
			<li key={key}>
				{value} {key}
			</li>
		);
	});

	return (
		<div>
			<h1>Order Summary</h1>
			<h2>Pizzas: {orderDetails.totals.pizzas}</h2>
			<ul>{listPizzas}</ul>
			<h2>Toppings: {orderDetails.totals.toppings}</h2>
			<ul>{listToppings}</ul>
			<SummaryForm setPhase={setPhase} />
		</div>
	);
};

export default OrderSummary;
