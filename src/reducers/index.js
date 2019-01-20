import { SET_USER } from "../actions";

export const initialState = {
	email: "",
	first_name: "",
	last_name: "",
	address: "",
	potal_code: "",
	credit_card: "",
	phone_number: ""
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...action.user
			};
		default:
			return state;
	}
};

export default user;
