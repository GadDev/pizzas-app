import Options from './Options';
import { useOrderDetails } from '../../contexts/OrderDetails';
export default function OrderEntry() {
	const [orderDetails] = useOrderDetails();
	return (
		<div>
			<Options optionType='pizzas' />
			<Options optionType='toppings' />
			<h2>Total: {orderDetails.totals.totals}</h2>
		</div>
	);
}
