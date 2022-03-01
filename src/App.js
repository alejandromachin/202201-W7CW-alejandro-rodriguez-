import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsersList from "./pages/UsersList";
import { isloggedAction } from "./redux/actions/actionCreator";

function App() {
  const token = localStorage.getItem("tokenKey");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(isloggedAction());
    }
  });

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
