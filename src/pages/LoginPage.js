import { useSelector } from "react-redux";

import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginPage = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <LoginDiv>
      <h1> LOGIN: </h1>
      <h2> </h2>
      {userData.name && <h2>{`Bienvenido/a ${userData.name}`}</h2>}
      <LoginForm />
    </LoginDiv>
  );
};
export default LoginPage;
