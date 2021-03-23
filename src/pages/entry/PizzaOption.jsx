import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const PizzaOption = ({ name, image, updateItemCount }) => {
	const [valid, setValid] = useState(true);
	const handleChange = (e) => {
		const currentValue = e.target.value;
		updateItemCount(name, currentValue);
	};

	return (
		<Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
			<img
				style={{ width: '75%' }}
				src={`http://localhost:3030/${image}`}
				alt={`${name} pizza`}
			/>
			<Form.Group
				controlId={`${name}-count`}
				as={Row}
				style={{ marginTop: '20px' }}
			>
				<Form.Label column xs='6' style={{ textAlign: 'right' }}>
					{name}
				</Form.Label>
				<Col xs='5' style={{ textAlign: 'left' }}>
					<Form.Control
						type='number'
						defaultValue={0}
						onChange={handleChange}
					/>
				</Col>
			</Form.Group>
		</Col>
	);
};

export default PizzaOption;
