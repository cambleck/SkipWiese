import mapKeys from "lodash/mapKeys";
import { FETCH_ARTWORK_LIST, FETCH_ARTWORK } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_WORK:
      const blog = action.payload;
      return { ...state, [artwork._id]: artwork };
    case FETCH_ARTWORK_LIST:
      return { ...state, ...mapKeys(action.payload, "_id") };
    default:
      return state;
  }
}
