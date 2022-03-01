import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: #d6e9ff;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & a {
    color: #4295f5;

    font-size: 40px;
    text-decoration: none;
  }
  & a:hover {
    color: #00336e;
  }
  & p {
    font-size: 25px;
  }
`;
const LoginDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const UsersDiv = styled.div`
  position: flex;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Navigation = () => {
  const islogged = useSelector((state) => state.islogged);

  return (
    <>
      <NavigationDiv>
        <Link to={"/home"}>HOME</Link>
        <LoginDiv>
          <UsersDiv>
            {islogged && (
              <>
                <Link to={"/users"}>USERS</Link> <p>|</p>
              </>
            )}
          </UsersDiv>

          <Link to={"/login"}>LOGIN</Link>
          <p>|</p>
          <Link to={"/register"}>REGISTER</Link>
        </LoginDiv>
      </NavigationDiv>
    </>
  );
};

export default Navigation;
