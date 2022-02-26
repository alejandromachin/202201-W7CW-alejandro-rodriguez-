import { useSelector } from "react-redux";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <>
      <h1>REGISTER:</h1>
      {userData && <h2>{userData.message}</h2>}
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
