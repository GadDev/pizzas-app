import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each pizzas option from server', async () => {
	render(<Options optionType='pizzas' />);

	// find images
	const pizzaImages = await screen.findAllByRole('img', {
		name: /pizzas$/i,
	});
	expect(pizzaImages).toHaveLength(2);
	//confirm alt text of images
	const altText = pizzaImages.map((element) => element.alt);
	expect(altText).toEqual(['American pizzas', 'Fiorentina pizzas']);
});

test('display image for each toppings option from server', async () => {
	render(<Options optionType='toppings' />);

	const toppingsImage = await screen.findAllByRole('img', {
		name: /toppings$/i,
	});

	expect(toppingsImage).toHaveLength(3);
	const altText = toppingsImage.map((element) => element.alt);
	expect(altText).toEqual([
		'Mushrooms toppings',
		'Basilic toppings',
		'Olive toppings',
	]);
});
