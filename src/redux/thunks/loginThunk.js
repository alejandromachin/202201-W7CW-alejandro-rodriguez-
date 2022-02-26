import axios from "axios";
import jwtDecode from "jwt-decode";
import { registerUserAction } from "../actions/actionCreator";

export const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_URL}login/`;

  const {
    data: { token },
  } = await axios.post(url, userData);

  const userInfo = jwtDecode(token);

  localStorage.setItem("tokenKey", token);
  localStorage.setItem("name", userInfo.name);
};

export const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_URL}register/`;

  const {
    data: { user },
  } = await axios.post(url, userData);

  dispatch(registerUserAction(user.name));
};
