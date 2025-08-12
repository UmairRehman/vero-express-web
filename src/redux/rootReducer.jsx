import { combineReducers } from "redux";
import userReducer from "./feature/authSlice/index";
import LoaderReducer from "./feature/loader/index";

export default combineReducers({
  user: userReducer,
  loading: LoaderReducer,
});
