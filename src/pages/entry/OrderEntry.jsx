import Button from 'react-bootstrap/Button';
import Options from './Options';
import { useOrderDetails } from '../../contexts/OrderDetails';
export default function OrderEntry({ setPhase }) {
	const [orderDetails] = useOrderDetails();
	//disabled if no items pizzas selected
	const disabledOrder = orderDetails.totals.pizzas === '$0.00';

	return (
		<div>
			<Options optionType='pizzas' />
			<Options optionType='toppings' />
			<h2>Total: {orderDetails.totals.totals}</h2>
			<Button disabled={disabledOrder} onClick={() => setPhase('review')}>
				Order your pizza
			</Button>
		</div>
	);
}
