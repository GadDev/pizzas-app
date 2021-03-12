import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn Options with 2 image', async () => {
	render(<App />);
	const pizzaImages = await screen.findAllByRole('img', {
		name: /pizza$/i,
	});
	expect(pizzaImages).toHaveLength(2);
});
