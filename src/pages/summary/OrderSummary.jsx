import SummaryForm from './SummaryForm'
import { useOrderDetails } from '../../contexts/OrderDetails'

const OrderSummary = ({ setPhase }) => {
	const [orderDetails] = useOrderDetails()
	return <div>Order Summary</div>;
};

export default OrderSummary;
