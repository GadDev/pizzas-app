import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PizzaOption from '../PizzaOption';

test('indicate if pizza count is not integer or out of range', async () => {
	render(<PizzaOption name='' image='' updateItemCount={jest.fn()} />);

	//epxect input to be invalid with negative integer
	const optionInput = screen.getByRole('spinButton');
	userEvent.clear(optionInput);
	userEvent.type(optionInput, '-1');
	expect(optionInput).toHaveClass('is-invalid');
});
