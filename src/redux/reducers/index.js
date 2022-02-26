import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  token: loginReducer,
  userData: userReducer,
});

export default rootReducer;
