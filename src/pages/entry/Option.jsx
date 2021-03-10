import React from 'react';
import Col from 'react-bootstrap/Col';

const Option = ({ name, image }) => {
	return (
		<Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
			<img
				style={{ width: '75%' }}
				src={`http://localhost:3030/${image}`}
				alt={`${name} pizza`}
			/>
		</Col>
	);
};

export default Option;
