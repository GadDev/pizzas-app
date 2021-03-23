import {
	render,
	screen,
	waitFor,
} from '../../../test-utils/testing-library-utils';

import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

beforeAll(() => {
	global.XMLHttpRequest = undefined;
});
test('handles error for routes', async () => {
	server.resetHandlers(
		rest.get('http://localhost:3030/pizzas', (req, res, ctx) => {
			res(ctx.status(500));
		}),
		rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
			res(ctx.status(500));
		})
	);

	render(<OrderEntry setPhase={jest.fn()} />);

	await waitFor(async () => {
		const alerts = await screen.findAllByRole('alert');
		expect(alerts).toHaveLength(2);
	});
});

test('disable order button if no selected items', () => {
	
})
