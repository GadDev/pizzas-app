import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('Initials conditions', () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole('checkbox', {
		name: /terms and conditions/i,
	});

	expect(checkbox).not.toBeChecked();

	const confirmBtn = screen.getByRole('button', { name: /confirm order/i });
	expect(confirmBtn).toBeDisabled();
});

test('Checkbox disables button on first click and enables on second click', () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole('checkbox', {
		name: /terms and conditions/i,
	});
	const confirmBtn = screen.getByRole('button', { name: /confirm order/i });

	userEvent.click(checkbox);
	expect(confirmBtn).toBeEnabled();

	userEvent.click(checkbox);
	expect(confirmBtn).toBeDisabled();
});

test('popover responds to hover ', () => {
	//popover starts out hidden


	//popover appears upon mouseover of checkbox label


	// popover disappears when we mouse out
})
