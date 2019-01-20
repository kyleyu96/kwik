export const ADD_USER = "ADD_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export function addUser(id, userInfo) {
  return {
    type: ADD_USER,
    id,
    userInfo
  };
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
