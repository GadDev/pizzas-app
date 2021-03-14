import React from 'react';
import Row from 'react-bootstrap/Row';
import PizzaOption from './PizzaOption';
import ToppingOption from './ToppingOption';
import useAxios from '../../hooks/useAxios';
import AlertBanner from '../common/AlertBanner';

import { pricePerItem } from '../../constants';
import { useOrderDetails } from '../../contexts/OrderDetails';
const Options = ({ optionType = 'pizzas' }) => {
	const [orderDetails, updateItemCount] = useOrderDetails();

	const { response, error, loading } = useAxios(
		`http://localhost:3030/${optionType}`
	);
	const Option = optionType === 'pizzas' ? PizzaOption : ToppingOption;
	const title =
		optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

	const optionsItems = response?.map(({ name, imagePath }) => {
		return (
			<Option
				key={name}
				name={name}
				image={imagePath}
				updateItemCount={(itemName, newItemCount) =>
					updateItemCount(itemName, newItemCount, optionType)
				}
			/>
		);
	});
	if (error) {
		<AlertBanner />;
	}
	console.log('orderDetails', orderDetails);
	return (
		<React.Fragment>
			<h2>{title}</h2>
			<p>{pricePerItem[optionType]} each</p>
			<p>
				{title} total: {orderDetails.totals[optionType]}
			</p>
			<Row>
				{loading && <p>Loading...</p>}
				{response && optionsItems}
			</Row>
		</React.Fragment>
	);
};

export default Options;
