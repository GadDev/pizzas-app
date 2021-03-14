import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
test('update pizza subtotal when pizza change', async () => {
	render(<Options optionType='pizzas' />, { wrapper: OrderDetailsProvider });

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
