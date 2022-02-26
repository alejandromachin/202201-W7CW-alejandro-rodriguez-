import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/loginThunk";

const RegisterForm = () => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankFields);

  const resetForm = () => {
    setFormData(blankFields);
  };
  const login = (event) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
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
      <form onSubmit={login} noValidate autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
        />
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
    </>
  );
};

export default RegisterForm;
