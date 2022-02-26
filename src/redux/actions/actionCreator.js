import actionTypes from "./actionTypes";

export const getLoginAction = (token) => ({
  action: actionTypes.getLogin,
  token,
});
