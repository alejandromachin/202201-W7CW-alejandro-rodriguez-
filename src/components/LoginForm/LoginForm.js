import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/loginThunk";
import { RegisterContainer } from "../RegisterForm/RegisterForm";

const LoginForm = () => {
  const blankFields = { username: "", password: "" };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankFields);

  const resetForm = () => {
    setFormData(blankFields);
  };
  const login = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    resetForm();
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <RegisterContainer>
        <form onSubmit={login} noValidate autoComplete="off">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={changeData}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={changeData}
          />
          <button type="submit">Log in</button>
        </form>
      </RegisterContainer>
    </>
  );
};

export default LoginForm;
