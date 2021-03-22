import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:3030/pizzas', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'American',
					imagePath: '/images/american.png',
				},
				{
					name: 'Fiorentina',
					imagePath: '/images/fiorentina.png',
				},
			])
		);
	}),
	rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Mushrooms',
					imagePath: '/images/mushrooms.png',
				},
				{
					name: 'Basilic',
					imagePath: '/images/basilic.png',
				},
				{
					name: 'Olive',
					imagePath: '/images/olive.png',
				},
			])
		);
	}),
	rest.post('http://localhost:3030/order', (req, res, ctx) => {
		return res(ctx.json({ orderNumber: '23456789876543' }));
	}),
];
