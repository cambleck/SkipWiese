import { combineReducers } from "redux";
import authReducer from "./authReducer";
import artworkReducer from "./artworkReducer";

export default combineReducers({
  auth: authReducer,
  artworkList: artworkReducer,
});
