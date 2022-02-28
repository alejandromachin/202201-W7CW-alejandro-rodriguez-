import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loadUsersAction,
  registerUserAction,
  usernameNameAction,
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
  dispatch(usernameNameAction(userInfo.name));
};

export const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_URL}register`;

  const data = await axios
    .post(url, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((error) => {
      dispatch(usernameTakenAction(error.response.data));
    });

  if (data) {
    dispatch(registerUserAction(data.data.name));
    dispatch(usernameTakenAction({ message: "User registered" }));
  }
};

export const loadUsersThunk = async (dispatch) => {
  const url = `${process.env.REACT_APP_URL}users`;

  const { data } = await axios.get(url);

  dispatch(loadUsersAction(data.users));
};
