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
      state = [];
      const art = action.payload;
      return { ...state, [action.payload._id]: art };
    case SUBMIT_ARTWORK:
      state = [];
      const submitedWork = action.payload;
      return [...state, submitedWork];
    case FETCH_ARTWORK_LIST:
      state = [];
      console.log(action.payload, "PAYLOAD");
      console.log(state);
      return action.payload;
    case FETCH_LISTVIEW:
      const listview = action.payload;
      state = [];
      return listview;
    case DELETE_ARTWORK:
      state = [];
      return state.filter((artwork) => artwork._id !== action.payload);

    default:
      return state;
  }
}
