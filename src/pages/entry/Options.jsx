import Row from 'react-bootstrap/Row';
import Option from './Option';

import useAxios from '../../hooks/useAxios';

const Options = ({ optionType = 'toppings' }) => {
	const { response, error, loading } = useAxios(
		`http://localhost:3030/${optionType}`
	);
	const optionsItems = response?.map(({ name, imagePath }) => {
		return (
			<Option
				key={name}
				name={name}
				image={imagePath}
				type={optionType}
			/>
		);
	});

	return error ? (
		<p>Something went wrong...</p>
	) : (
		<Row>
			{loading && <p>Loading...</p>}
			{response && optionsItems}
		</Row>
	);
};

export default Options;
