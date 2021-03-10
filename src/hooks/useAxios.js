import { useState, useEffect } from 'react';
import axios from 'axios';
const useAxios = (url) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const aborController = new AbortController();
		const fetch = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setResponse(res.data);
			} catch (e) {
				setError(e.message);
			} finally {
				setLoading(false);
			}
		};
		fetch();

		return () => {
			aborController.abort();
		};
	}, [url]);

	return { response, error, loading };
};

export default useAxios;
