import Options from './Options';

export default function OrderEntry() {
	return (
		<div>
			<Options optionType='pizzas' />
			<Options optionType='toppings' />
		</div>
	);
}
