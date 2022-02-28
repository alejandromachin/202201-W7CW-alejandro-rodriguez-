import actionTypes from "./actionTypes";

export const getLoginAction = (token) => ({
  type: actionTypes.getLogin,
  token,
});

export const userInfoAction = (userData) => ({
  type: actionTypes.userInfo,
  userData,
});

export const registerUserAction = (userData) => ({
  type: actionTypes.registerUser,
  userData,
});
export const usernameTakenAction = (error) => ({
  type: actionTypes.usernameTaken,
  error,
});

export const usernameNameAction = (name) => ({
  type: actionTypes.usernameName,
  name,
});

export const loadUsersAction = (users) => ({
  type: actionTypes.loadUsers,
  users,
});
