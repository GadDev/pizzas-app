import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const ToppingOption = ({ name, image, updateItemCount }) => {
	return (
		<Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
			<img
				style={{ width: '75%' }}
				src={`http://localhost:3030/${image}`}
				alt={`${name} topping`}
			/>
			<Form.Group controlId={name}>
				<Form.Check
					type='checkbox'
					label={name}
					onChange={(e) =>
						updateItemCount(name, e.target.checked ? 1 : 0)
					}
				/>
			</Form.Group>
		</Col>
	);
};

export default ToppingOption;
