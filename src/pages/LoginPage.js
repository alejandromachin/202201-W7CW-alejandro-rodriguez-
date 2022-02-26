import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const userData = localStorage.getItem("name");

  return (
    <>
      <h1> LOGIN: </h1>
      {userData && <h2>{`Bienvenido/a ${userData}`}</h2>}
      <LoginForm />
    </>
  );
};
export default LoginPage;
