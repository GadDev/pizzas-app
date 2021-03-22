import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';

const OrderSummary = ({ setPhase }) => {
	const [orderDetails] = useOrderDetails();

	const pizzaArray = Array.from(orderDetails.pizzas.entries());
	console.log(pizzaArray);
	const listPizzas = pizzaArray.map(([key, value]) => {
		return (
			<li key={key}>
				{value} {key}
			</li>
		);
	});

	return <div>Order Summary</div>;
};

export default OrderSummary;
