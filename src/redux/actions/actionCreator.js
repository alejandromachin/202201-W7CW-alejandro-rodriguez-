import actionTypes from "./actionTypes";

export const getLoginAction = (token) => ({
  type: actionTypes.getLogin,
  token,
});

export const userInfoAction = (userData) => ({
  type: actionTypes.userInfo,
  userData,
});
