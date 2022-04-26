import { combineReducers } from "redux";
import { registerFormReducer } from "./registerFormSlice";
import { loginFormReducer } from "./loginFormSlice";

export const formsReducer = combineReducers({
  registerFormReducer,
  loginFormReducer
}) 