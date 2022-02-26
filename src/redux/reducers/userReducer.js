import actionTypes from "../actions/actionTypes";

const userReducer = (currentState = {}, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.userInfo:
      newUser = { ...action.userData };
      break;
    case actionTypes.usernameTaken:
      newUser = action.error;
      break;

    default:
      newUser = { ...currentState };
  }
  return newUser;
};

export default userReducer;
