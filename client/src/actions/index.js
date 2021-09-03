import axios from "axios";
import {
  FETCH_USER,
  FETCH_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
  FETCH_LISTVIEW,
  DELETE_ARTWORK,
  SUBMIT_ARTWORK,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteArtwork = (imageUrl, id) => async (dispatch) => {
  const res = await axios.get(`/api/artwork/delete/${imageUrl}/${id}`);

  dispatch({ type: DELETE_ARTWORK, payload: id });
};

export const submitArtwork = (values, file, history, editMode) => async (
  dispatch
) => {
  const uploadConfig = await axios.get("/api/upload");
  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  const res = await axios.post(
    editMode ? "/api/updateArtwork" : "/api/artwork",
    {
      ...values,
      imageUrl: uploadConfig.data.key,
    }
  );

  dispatch({ type: SUBMIT_ARTWORK, payload: res.data });
};

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
