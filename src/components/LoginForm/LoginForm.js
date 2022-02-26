import { useState } from "react";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const blankFields = { username: "", password: "" };
  const error = useSelector((state) => state.error);

  const [formData, setFormData] = useState(blankFields);

  const resetForm = () => {
    setFormData(blankFields);
  };
  const login = (event) => {
    event.preventDefault();
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

        <button type="submit">Add</button>
        <h3>{error}</h3>
      </form>
    </>
  );
};

export default LoginForm;