import axios from 'axios';
import { GET_PAYLOAD } from './types';

export const getPayload = () => async (dispatch) => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);

	dispatch({ type: GET_PAYLOAD, payload: response.data });
};
