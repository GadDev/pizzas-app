import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('order phases for happy path', async () => {
	// render app
	render(<App />);
	// add pizza and toppings
	const americanInput = await screen.findByRole('spinbutton', {
		name: 'American',
	});

	userEvent.clear(americanInput);
	userEvent.type(americanInput, '1');

	const fiorentinaInput = await screen.findByRole('spinbutton', {
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
		name: /order your pizza/i,
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
	expect(screen.getByText('1 American')).toBeInTheDocument();
	expect(screen.getByText('2 Fiorentina')).toBeInTheDocument();
	expect(screen.getByText('1 Mushrooms')).toBeInTheDocument();

	// accept terms and conditions and click btn to confirm order
	const checkbox = screen.getByRole('checkbox', {
		name: /terms and conditions/i,
	});
	const confirmButton = screen.getByRole('button', {
		name: /confirm order/i,
	});
	userEvent.click(checkbox);
	expect(confirmButton).toBeEnabled();
	userEvent.click(confirmButton);

	// Expect "loading" to show
	const loading = screen.getByText(/loading/i);
	expect(loading).toBeInTheDocument();

	// confirm order number on confirmation page
	//async because there is a POST request

	const thankyouHeader = await screen.findByRole('heading', {
		name: /thank you/i,
	});
	expect(thankyouHeader).toBeInTheDocument();

	// expect that loading has disappeared
	const notLoading = screen.queryByText('loading');
	expect(notLoading).not.toBeInTheDocument();

	const orderNumber = await screen.findByText(/order number/i);
	expect(orderNumber).toBeInTheDocument();

	// click 'new order' button confirmation page
	const newOrderBtn = screen.getByRole('button', { name: /new order/i });
	expect(newOrderBtn).toBeInTheDocument();
	userEvent.click(newOrderBtn);

	// check that pizzas and toppings subtotals have been reset
	const pizzasTotal = screen.getByText('Pizzas total: $0.00');
	expect(pizzasTotal).toBeInTheDocument();
	const toppingTotal = screen.getByText('Toppings total: $0.00');
	expect(toppingTotal).toBeInTheDocument();

	// do we need to await anything to avoid test errors?
	// wait for items to appear back to the order screen
	await screen.findByRole('spinbutton', { name: 'American' });
	await screen.findByRole('checkbox', { name: 'Mushrooms' });
});

test('Toppings header not on Summary view if no toppings ordered', async () => {
	//render App
	render(<App />);

	// add Pizza and topping
	const pizzaAmerican = await screen.findByRole('spinbutton', {
		name: 'American',
	});
	userEvent.clear(pizzaAmerican);
	userEvent.type(pizzaAmerican, '1');

	const pizzaFiorentina = await screen.findByRole('spinbutton', {
		name: 'Fiorentina',
	});
	userEvent.clear(pizzaFiorentina);
	userEvent.type(pizzaFiorentina, '1');

	// find and click order button
	const orderSummaryBtn = screen.getByRole('button', {
		name: /order your pizza/i,
	});
	userEvent.click(orderSummaryBtn);

	//find pizza heading on Summary
	const summaryHeading = screen.getByRole('heading', {
		name: 'Order Summary',
	});
	expect(summaryHeading).toBeInTheDocument();

	const pizzasHeading = screen.getByRole('heading', {
		name: 'Pizzas: $20.00',
	});
	expect(pizzasHeading).toBeInTheDocument();

	//topping heading is not on Summary view
	const toppingHeading = screen.getByRole('heading', {
		name: /toppings/i,
	});
	expect(toppingHeading).not.toBeInTheDocument();
});
