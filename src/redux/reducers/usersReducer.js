import actionTypes from "../actions/actionTypes";

const usersReducer = (currentState = [], action = {}) => {
  let newUsers;
  switch (action.type) {
    case actionTypes.loadUsers:
      newUsers = action.users;
      break;

    default:
      newUsers = currentState;
      break;
  }
  return newUsers;
};

export default usersReducer;
