import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Option from './Option';

const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => {
				setItems(response.data);
			})
			.catch((error) => {
				throw new Error(error.message);
			});
	}, [optionType]);
	const optionsItems = items.map(({ name, imagePath }) => {
		return <Option key={name} name={name} image={imagePath} />;
	});
	return (
		<Row>
			{!items.length ? (
				<span style={{ width: '100%', textAlign: 'center' }}>
					Loading...
				</span>
			) : (
				optionsItems
			)}
		</Row>
	);
};

export default Options;
