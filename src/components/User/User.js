import styled from "styled-components";

const UserCard = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
  width: 250px;
  height: 130px;
  border-radius: 20px;
  position: relative;
  border: 4px solid #4295f5;

  & img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #00336e;
  }
  & p {
    font-size: 30px;
    position: absolute;
    top: -20px;
    left: 130px;
  }
  & .name {
    font-size: 20px;
    position: absolute;
    top: 20px;
    left: 130px;
  }
`;
const User = ({ user }) => {
  console.log(user);
  return (
    <UserCard>
      <img src={user.image} alt={user.name} />
      <p>{user.username}</p>
      <p className="name">{user.name}</p>
    </UserCard>
  );
};

export default User;
