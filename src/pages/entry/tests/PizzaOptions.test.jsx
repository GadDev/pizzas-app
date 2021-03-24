import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PizzaOption from '../PizzaOption';

test('indicate if pizza count is not integer or out of range', async () => {
	render(<PizzaOption name='' image='' updateItemCount={jest.fn()} />);

	//expect input to be invalid with negative integer
	const optionInput = screen.getByRole('spinbutton');
	userEvent.clear(optionInput);
	userEvent.type(optionInput, '-1');
	expect(optionInput).toHaveClass('is-invalid');

	//expect input to be invalid with floating integer
	userEvent.clear(optionInput);
	userEvent.type(optionInput, '2.5');
	expect(optionInput).toHaveClass('is-invalid');

	//expect input to be invalid with number too high
	userEvent.clear(optionInput);
	userEvent.type(optionInput, '11');
	expect(optionInput).toHaveClass('is-invalid');

	//expect input to be valid with correct number
	userEvent.clear(optionInput);
	userEvent.type(optionInput, '3');
	expect(optionInput).not.toHaveClass('is-invalid');
});
