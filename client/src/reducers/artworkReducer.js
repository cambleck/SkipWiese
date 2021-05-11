import mapKeys from "lodash/mapKeys";
import {
  FETCH_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
  FETCH_LISTVIEW,
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
      console.log(listview);
      state = [];
      return listview;
    case CLEAR_LIST:
      state = [];
      return state;
    default:
      return state;
  }
}
