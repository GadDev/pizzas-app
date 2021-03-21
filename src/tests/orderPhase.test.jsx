import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('order phases for happy path', async () => {
	// render app
	render(<App />);
	// add pizza and toppings
	const americanInput = await screen.findByRole('spinbutton', {
		name: 'American',
	});
	userEvent.clear(americanInput);
	userEvent.type(americanInput, '1');

	const fiorentinaInput = screen.findByRole('spinbutton', {
		name: 'Fiorentina',
	});
	userEvent.clear(fiorentinaInput);
	userEvent.type(fiorentinaInput, '2');

	const MushroomCheckbox = await screen.findByRole('checkbox', {
		name: 'Mushrooms',
	});
	expect(MushroomCheckbox).not.toBeChecked();

	userEvent.click(MushroomCheckbox);

	// find and click order button
	const orderSummaryBtn = screen.getByRole('button', {
		name: /order pizza/i,
	});
	userEvent.click(orderSummaryBtn);

	// bring you to the summary page
	// check summary information based on order
	const summaryHeading = screen.getByRole('heading', {
		name: 'Order Summary',
	});
	expect(summaryHeading).toBeInTheDocument();

	const pizzasHeading = screen.getByRole('heading', {
		name: 'Pizzas: $30.00',
	});
	expect(pizzasHeading).toBeInTheDocument();

	const toppingHeading = screen.getByRole('heading', {
		name: 'Toppings: $2.50',
	});
	expect(toppingHeading).toBeInTheDocument();

	//check summary option items
	expect(screen.getByText('1 American').toBeInTheDocument());
	expect(screen.getByText('2 Fiorentina').toBeInTheDocument());
	expect(screen.getByText('Mushrooms')).toBeInTheDocument()

	// accept terms and conditions and click btn to confirm order

	// confirm order number on confirmation page

	// click 'new order' button confirmation page

	// check that pizzas and toppings subtotals have been reset

	// do we need to await anything to avoid test errors?
});
