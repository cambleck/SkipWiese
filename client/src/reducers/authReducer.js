import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload, "Hello");
      return action.payload || false;
    default:
      console.log(state, "default");
      return state;
  }
}
