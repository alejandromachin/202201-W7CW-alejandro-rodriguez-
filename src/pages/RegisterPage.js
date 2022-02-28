import { useSelector } from "react-redux";
import styled from "styled-components";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterPage = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <>
      <RegisterDiv>
        <h1>REGISTER:</h1>
        {userData && <h2>{userData.message}</h2>}
        <RegisterForm />
      </RegisterDiv>
    </>
  );
};

export default RegisterPage;
