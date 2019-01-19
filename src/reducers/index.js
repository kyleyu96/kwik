import { SET_USER } from "../actions";

export const initialState = {
	bio: "",
	id: "",
	name: "",
	userImg: "",
	gamesAsMentor: [],
	gamesAsMentee: [],
	languages: [],
	location: ""
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
