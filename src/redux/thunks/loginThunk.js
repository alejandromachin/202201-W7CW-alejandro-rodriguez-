import axios from "axios";
// import jwtDecode from "jwt-decode";

export const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_URL}/login`;
  const {
    data: { token },
  } = await axios.post(url, { userData });

  // const userInfo = jwtDecode(token);

  localStorage.setItem("tokenKey", token);
};
