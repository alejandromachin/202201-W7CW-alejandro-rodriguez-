import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/loginThunk";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  & form {
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 5px solid black;
    box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
    border-radius: 10px;
    width: 200px;
    height: 400px;
    text-align: center;
    margin-top: 10px;
    list-style: none;
    align-items: center;
    background-image: url(https://i.pinimg.com/originals/09/64/cb/0964cb283499eb3d6181f80b713beaab.jpg);

    & button {
      font-family: "Bebas Neue";
      font-size: 20px;
      height: 30px;
      width: 80px;
      border-radius: 5px;
      background-color: #4295f5;
      border: 1px solid black;
      color: inherit;
      padding: 0;
    }
    & input {
      margin: 5px;
      width: 150px;
    }
    & #picture {
      visibility: hidden;
    }
    & .pictureLabel {
      position: relative;
    }
    & .pictureLabel:after {
      position: absolute;
      background-color: #fff;
      top: 35px;
      right: -15px;
      content: "Select your picture";
      display: inline-block;
      background: linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #999;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
    }
  }
`;
export const RegisterForm = () => {
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

  const register = (event) => {
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
      <RegisterContainer>
        <form onSubmit={register} noValidate autoComplete="off">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={changeData}
          />
          <label htmlFor="picture" className="pictureLabel">
            Picture:
          </label>
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
          <button type="submit">Register</button>
        </form>
      </RegisterContainer>
    </>
  );
};
