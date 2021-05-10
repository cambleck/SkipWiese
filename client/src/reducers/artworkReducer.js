import mapKeys from "lodash/mapKeys";
import {
  FETCH_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ARTWORK:
      const art = action.payload;
      console.log(action.payload, "payload");
      return { ...state, [action.payload._id]: art };
    case FETCH_ARTWORK_LIST:
      const { artwork, totalPages, currentPage } = action.payload;
      state = [];
      return {
        ...state,
        artwork,
        totalPages,
      };
    case CLEAR_LIST:
      state = [];
      return state;
    default:
      return state;
  }
}
