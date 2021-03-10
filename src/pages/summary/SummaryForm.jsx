import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = () => {
	const [checked, setChecked] = useState(false);

	const popover = (
		<Popover id='popover-basic'>
			<Popover.Content>No pizza will be delivered</Popover.Content>
		</Popover>
	);

	const checkboxLabel = (
		<span>
			I agree to{' '}
			<OverlayTrigger placement='right' overlay={popover}>
				<span style={{ color: 'midnightblue' }}>
					{' '}
					Terms and Conditions
				</span>
			</OverlayTrigger>
		</span>
	);

	return (
		<Form action='/order'>
			<Form.Group controlId='terms-and-conditions'>
				<Form.Check
					type='checkbox'
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
					label={checkboxLabel}
				/>

				<Button variant='primary' type='submit' disabled={!checked}>
					Confirm order
				</Button>
			</Form.Group>
		</Form>
	);
};

export default SummaryForm;
