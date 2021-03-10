import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Option from './Option';

const Options = ({ optionType = 'pizzas' }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => {
				console.log(response);
				setItems(response.data);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}, [optionType]);
	const optionsItems = items.map(({ name, imagePath }) => {
		return <Option key={name} name={name} image={imagePath} />;
	});
	return <Row>{optionsItems}</Row>;
};

export default Options;
