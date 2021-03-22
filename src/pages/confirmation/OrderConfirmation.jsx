import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import { useOrderDetails } from '../../contexts/OrderDetails';

const OrderConfirmation = ({ setOrderPhase }) => {
	const [, , resetOrder] = useOrderDetails();
	const [orderNumber, setOrderNumber] = useState(null);

	useEffect(() => {
		axios
			.post(`http://localhost:3030/order`)
			.then((response) => {
				setOrderNumber(response.data.orderNumber);
			})
			.catch((error) => {
				console.log(error);
			});
	});
};
