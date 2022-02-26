import actionTypes from "./actionTypes";

export const getLoginAction = (token) => ({
  type: actionTypes.getLogin,
  token,
});
