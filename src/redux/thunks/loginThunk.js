import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  registerUserAction,
  usernameTakenAction,
} from "../actions/actionCreator";

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
  const url = `${process.env.REACT_APP_URL}register`;

  const data = await axios.post(url, userData).catch((error) => {
    dispatch(usernameTakenAction(error.response.data));
  });

  if (data) {
    dispatch(registerUserAction(data.data.name));
    dispatch(usernameTakenAction({ message: "User registered" }));
  }
};
