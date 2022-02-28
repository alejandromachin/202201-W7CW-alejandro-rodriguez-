import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  token: loginReducer,
  userData: userReducer,
  users: usersReducer,
});

export default rootReducer;
