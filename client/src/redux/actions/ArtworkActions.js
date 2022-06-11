import axios from "axios";
import {
  FETCH_ARTWORK_LIST,
  FETCH_HOME_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
  FETCH_LISTVIEW,
} from "./types";

export const fetchArtworkList = (type) => async (dispatch) => {
  const res = await axios.get(`/api/artwork/s/${type}`);

  dispatch({ type: FETCH_ARTWORK_LIST, payload: res.data });
};
export const fetchListView = () => async (dispatch) => {
  const res = await axios.get(`/api/artwork/s/listview`);

  dispatch({ type: FETCH_LISTVIEW, payload: res.data });
};

export const fetchArtwork = (id) => async (dispatch) => {
  const res = await axios.get(`/api/artwork/a/${id}`);

  dispatch({ type: FETCH_ARTWORK, payload: res.data });
};

export const clearList = () => async (dispatch) => {
  dispatch({ type: CLEAR_LIST, payload: "" });
};
