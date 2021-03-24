import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../Options';

test('displays image for each pizzas option from server', async () => {
	render(<Options optionType='pizzas' />);

	// find images
	const pizzaImages = await screen.findAllByRole('img', {
		name: /pizza$/i,
	});
	expect(pizzaImages).toHaveLength(2);
	//confirm alt text of images
	const altText = pizzaImages.map((element) => element.alt);
	expect(altText).toEqual(['American pizza', 'Fiorentina pizza']);
});

test('display image for each toppings option from server', async () => {
	render(<Options optionType='toppings' />);

	const toppingsImage = await screen.findAllByRole('img', {
		name: /topping$/i,
	});

	expect(toppingsImage).toHaveLength(3);
	const altText = toppingsImage.map((element) => element.alt);
	expect(altText).toEqual([
		'Mushrooms topping',
		'Basilic topping',
		'Olive topping',
	]);
});

test('no update total if pizzas input is invalid', () => {
	render(<Options optionType='pizzas' />);

	//expect btn to be enabled after adding pizza
	const americanPizza = await screen.findByRole('spinbutton', { name: 'American'});
	userEvent.clear(americanPizza);
	userEvent.type(americanPizza, '-1')

	// pizzas subtotal not updated
	const pizzasSubTotal = screen.getByText('Pizzas total: $0.00')
});
