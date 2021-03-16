import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import OrderEntry from '../OrderEntry';
test('update pizza subtotal when pizza change', async () => {
	render(<Options optionType='pizzas' />);

	// make sure toatl starts out 0
	const pizzaSubTotal = screen.getByText('Pizzas total: $', { exact: false });
	expect(pizzaSubTotal).toHaveTextContent('0.00');
	// update American pizza to 1 and check subtotal
	const americanInput = await screen.findByRole('spinbutton', {
		name: 'American',
	});
	userEvent.clear(americanInput);
	userEvent.type(americanInput, '1');
	expect(pizzaSubTotal).toHaveTextContent('10.00');

	//update Fiorentina pizza to 2 and check subtotal
	const fiorentinaInput = await screen.findByRole('spinbutton', {
		name: 'Fiorentina',
	});
	userEvent.clear(fiorentinaInput);
	userEvent.type(fiorentinaInput, '2');
	expect(pizzaSubTotal).toHaveTextContent('30.00');
});

test('update toppings subtotal when toppings added', async () => {
	render(<Options optionType='toppings' />);
	const toppingsSubTotal = screen.getByText('Toppings total: $', {
		exact: false,
	});
	expect(toppingsSubTotal).toHaveTextContent('0.00');
	const MushroomCheckbox = await screen.findByRole('checkbox', {
		name: 'Mushrooms',
	});
	const OliveCheckbox = await screen.findByRole('checkbox', {
		name: 'Olive',
	});

	const BasilicCheckbox = await screen.findByRole('checkbox', {
		name: 'Basilic',
	});
	expect(MushroomCheckbox).not.toBeChecked();

	userEvent.click(MushroomCheckbox);
	expect(toppingsSubTotal).toHaveTextContent('2.50');

	userEvent.click(OliveCheckbox);
	expect(toppingsSubTotal).toHaveTextContent('5.00');

	userEvent.click(BasilicCheckbox);
	expect(toppingsSubTotal).toHaveTextContent('7.50');

	userEvent.click(MushroomCheckbox);
	expect(MushroomCheckbox).not.toBeChecked();
	expect(toppingsSubTotal).toHaveTextContent('5.00');
});

describe('Total Pizzas/Topping', () => {
	test('total updates if pizza is added first', async () => {
		
		render(<OrderEntry />);

		const total = screen.getByRole('heading', { name: /Total: \$/i });
		expect(total).toHaveTextContent('0.00');
		// update American pizza to 1 and check total
		const americanInput = await screen.findByRole('spinbutton', {
			name: 'American',
		});
		userEvent.clear(americanInput);
		userEvent.type(americanInput, '1');
		expect(total).toHaveTextContent('10.00');

		const MushroomCheckbox = await screen.findByRole('checkbox', {
			name: 'Mushrooms',
		});
		// check Mushroom topping and check total
		userEvent.click(MushroomCheckbox);
		expect(total).toHaveTextContent('12.50');
	});

	test('total updates if topping is added first', async () => {
		render(<OrderEntry />);

		const total = screen.getByRole('heading', { name: /Total: \$/i });

		const MushroomCheckbox = await screen.findByRole('checkbox', {
			name: 'Mushrooms',
		});
		// check Mushroom topping and check total
		userEvent.click(MushroomCheckbox);
		expect(total).toHaveTextContent('2.50');
		// update American pizza to 1 and check total
		const americanInput = await screen.findByRole('spinbutton', {
			name: 'American',
		});
		userEvent.clear(americanInput);
		userEvent.type(americanInput, '1');
		expect(total).toHaveTextContent('12.50');
	});
	test('total updates properly if item is removed', async () => {
		render(<OrderEntry />);
		const total = screen.getByRole('heading', { name: /Total: \$/i });

		const MushroomCheckbox = await screen.findByRole('checkbox', {
			name: 'Mushrooms',
		});
		// check Mushroom topping and check total
		userEvent.click(MushroomCheckbox);
		expect(total).toHaveTextContent('2.50');
		// update American pizza to 1 and check total
		const americanInput = await screen.findByRole('spinbutton', {
			name: 'American',
		});
		userEvent.clear(americanInput);
		userEvent.type(americanInput, '2');
		expect(total).toHaveTextContent('22.50');

		userEvent.clear(americanInput);
		userEvent.type(americanInput, '1');

		expect(total).toHaveTextContent('12.50');

		userEvent.click(MushroomCheckbox);

		expect(total).toHaveTextContent('10.00');
	});
});
