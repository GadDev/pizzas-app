import React, { useState } from 'react';
import Form, { Group, Check } from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SummaryForm = () => {
	const [checked, setChecked] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to{' '}
			<span style={{ color: 'midnightblue' }}> Terms and Conditions</span>
		</span>
	);

	return (
		<Form>
			<Group controlId='terms-and-conditions'>
				<Check
					type='checkbox'
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
					label={checkboxLabel}
				/>
			</Group>
			<Button variant='primary' type='submit' disabled={!checked}>
				Confirm order
			</Button>
		</Form>
	);
};

export default SummaryForm;
