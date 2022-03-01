import actionTypes from "../actions/actionTypes";

const logedReducer = (currentState = false, action = {}) => {
  let isLogged;
  switch (action.type) {
    case actionTypes.islogged:
      isLogged = true;
      break;
    default:
      isLogged = currentState;
      break;
  }
  return isLogged;
};

export default logedReducer;
