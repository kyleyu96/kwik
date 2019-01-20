import { combineReducers } from "redux";
import users from "../json/users.json";
import items from "../json/items.json";
import orders from "../json/orders.json";
import stores from "../json/stores.json";

import { ADD_USER, SET_CURRENT_USER } from "./actions";

export const initialState = {
	users,
	items,
	orders,
	stores,
	currentUser: {}
};

function database(state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return Object.assign({}, state, {
				users: {
					...state.users,
					[action.id]: action.userInfo
				}
			});
		case SET_CURRENT_USER:
			return Object.assign({}, state, {
				currentUser: users[action.id]
			});
		default:
			return state;
	}
}

function postsBySubreddit(state = {}, action) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				[action.subreddit]: posts(state[action.subreddit], action)
			});
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	database
});

export default rootReducer;
