import Alert from 'react-bootstrap/Alert';

export default function AlerBanner({ message, variant }) {
	const alertMessage =
		message ?? 'Unexpected error ocurred, Please try again';

	const alerVariant = variant ?? 'danger';
	return (
		<Alert variant={alerVariant} style={{ background: 'red' }}>
			{alertMessage}{' '}
		</Alert>
	);
}
