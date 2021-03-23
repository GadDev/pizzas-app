import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PizzaOption from '../PizzaOption';

test('indicate if pizza count is not integer or out of range', async () => {
	render(<PizzaOption name='' image='' updateItemCount={jest.fn()} />);
});
