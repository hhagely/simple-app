import { GET_PAYLOAD } from '../actions/types';

const INITIAL_STATE = {
	json: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_PAYLOAD:
			return { ...state, json: action.payload };
		default:
			return state;
	}
};
