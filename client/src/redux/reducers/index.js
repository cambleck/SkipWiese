import { combineReducers } from "redux";
import authReducer from "./authReducer";
import artworkReducer from "./artworkReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: authReducer,
  artworkList: artworkReducer,
  cart: cartReducer,
});
