import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each pizzas option from server', () => {
	render(<Options optionType='pizzas' />);

	// find images
	const pizzaImages = screen.getAllByRole('img', { name: '/pizza$/i' });
	expect(pizzaImages).toHaveLength(2);
	//confirm alt text of images
	const altText = pizzaImages.map((element) => element.alt);
	expect(altText).toEqual().toEqual(['American', 'Fiorentina']);
});
