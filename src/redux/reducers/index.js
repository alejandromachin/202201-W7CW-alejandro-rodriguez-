import { combineReducers } from "redux";
import logedReducer from "./logedReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  token: loginReducer,
  userData: userReducer,
  users: usersReducer,
  islogged: logedReducer,
});

export default rootReducer;
