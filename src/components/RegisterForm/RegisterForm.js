import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/loginThunk";

const RegisterForm = () => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
    picture: "",
  };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankFields);

  const resetForm = () => {
    setFormData(blankFields);
  };

  const login = (event) => {
    event.preventDefault();
    const formDataFinal = new FormData();
    formDataFinal.append("avatar", formData.picture);
    formDataFinal.append("name", formData.name);
    formDataFinal.append("username", formData.username);
    formDataFinal.append("password", formData.password);
    dispatch(registerThunk(formDataFinal));
    resetForm();
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
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
        <label htmlFor="picture">Picture: </label>
        <input type="file" name="file" id="picture" onChange={changeData} />
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
