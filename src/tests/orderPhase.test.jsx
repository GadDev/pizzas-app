import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('order phases for happy path', () => {
	// render app
	render(<App />);
	// add pizza and toppings
	const americanInput = await screen.findByRole('spinbutton', {
		name: 'American',
	});
	userEvent.clear(americanInput)
	userEvent.type(americanInput, '1')
	// find and click order button

	// check summary information based on order

	// accept terms and conditions and click btn to confirm order

	// confirm order number on confirmation page

	// click 'new order' button confirmation page

	// check that pizzas and toppings subtotals have been reset

	// do we need to await anything to avoid test errors?
});
