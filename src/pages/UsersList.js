import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import User from "../components/User/User";
import { loadUsersThunk } from "../redux/thunks/loginThunk";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return (
    <>
      {users && users.map((user) => <User user={user} key={user.username} />)}
    </>
  );
};

export default UsersList;
