import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadUsersThunk } from "../redux/thunks/loginThunk";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  return <></>;
};

export default UsersList;
