import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "./types";

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const resetCart = (action) => ({
  type: RESET_CART,
  action,
});
