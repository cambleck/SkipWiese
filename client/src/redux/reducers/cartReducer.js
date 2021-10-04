import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.item];
    case REMOVE_FROM_CART:
      return state.filter((item) => item._id !== action.id);
    case RESET_CART:
      state = [];
      return state;
    default:
      return state;
  }
}
