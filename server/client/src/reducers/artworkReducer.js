import mapKeys from "lodash/mapKeys";
import { FETCH_ARTWORK_LIST, FETCH_ARTWORK } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ARTWORK:
      const artwork = action.payload;
      return { ...state, [artwork._id]: artwork };
    case FETCH_ARTWORK_LIST:
      console.log(action.payload);
      return { ...state, ...mapKeys(action.payload, "_id") };
    default:
      return state;
  }
}
