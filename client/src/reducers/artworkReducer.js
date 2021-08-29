import mapKeys from "lodash/mapKeys";
import {
  FETCH_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
  FETCH_LISTVIEW,
  DELETE_ARTWORK,
  SUBMIT_ARTWORK,
} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ARTWORK:
      const art = action.payload;
      return { ...state, [action.payload._id]: art };
    case SUBMIT_ARTWORK:
      const submitedWork = action.payload;
      return { ...state, [action.payload._id]: submitedWork };
    case FETCH_ARTWORK_LIST:
      const artwork = action.payload;

      return artwork;
    case FETCH_LISTVIEW:
      const listview = action.payload;
      state = [];
      return listview;
    case DELETE_ARTWORK:
      return state.filter((artwork) => artwork._id !== action.payload);
    case CLEAR_LIST:
      state = [];
      return state;
    default:
      return state;
  }
}
