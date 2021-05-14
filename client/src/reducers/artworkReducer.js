import mapKeys from "lodash/mapKeys";
import {
  FETCH_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
  FETCH_LISTVIEW,
  DELETE_ARTWORK,
} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ARTWORK:
      const art = action.payload;

      return { ...state, [action.payload._id]: art };
    case FETCH_ARTWORK_LIST:
      const { artwork, totalPages, currentPage } = action.payload;
      state = [];
      return {
        ...state,
        artwork,
        totalPages,
      };
    case FETCH_LISTVIEW:
      const listview = action.payload;

      state = [];
      return listview;
    case DELETE_ARTWORK:
      console.log(action);
      return state.filter((artwork) => artwork._id !== action.payload);
    case CLEAR_LIST:
      state = [];
      return state;
    default:
      return state;
  }
}
