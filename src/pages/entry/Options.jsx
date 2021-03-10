import Row from 'react-bootstrap/Row';
import PizzaOption from './PizzaOption';
import ToppingOption from './ToppingOption';
import useAxios from '../../hooks/useAxios';

const Options = ({ optionType = 'pizzas' }) => {
	const { response, error, loading } = useAxios(
		`http://localhost:3030/${optionType}`
	);
	const Option = optionType === 'pizzas' ? PizzaOption : ToppingOption;
	const optionsItems = response?.map(({ name, imagePath }) => {
		return <Option key={name} name={name} image={imagePath} />;
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
