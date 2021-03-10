import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each pizzas option from server', async () => {
	render(<Options optionType='pizzas' />);

	// find images
	const pizzaImages = await screen.findAllByRole('img', {
		name: /pizza$/i,
	});
	expect(pizzaImages).toHaveLength(2);
	//confirm alt text of images
	const altText = pizzaImages.map((element) => element.alt);
	expect(altText).toEqual(['American pizza', 'Fiorentina pizza']);
});
