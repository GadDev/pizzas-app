import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
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

test('popover responds to hover ', async () => {
	render(<SummaryForm />);

	//popover starts out hidden
	const nullPopover = screen.queryByText(/no pizza will be delivered/i);
	expect(nullPopover).not.toBeInTheDocument();

	//popover appears upon mouseover of checkbox label
	const termsAndConditions = screen.getByText(/terms and conditions/i);
	userEvent.hover(termsAndConditions);
	const popover = screen.getByText(/no pizza will be delivered/i);
	expect(popover).toBeInTheDocument();

	// popover disappears when we mouse out
	userEvent.unhover(termsAndConditions);
	//assertions on his own
	await waitForElementToBeRemoved(() =>
		screen.getByText(/no pizza will be delivered/i)
	);
});
