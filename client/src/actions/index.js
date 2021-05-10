import axios from "axios";
import {
  FETCH_USER,
  FETCH_ARTWORK_LIST,
  FETCH_ARTWORK,
  CLEAR_LIST,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/user");
  console.log(res.data, "3");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitArtwork = (values, file, history) => async (dispatch) => {
  const uploadConfig = await axios.get("/api/upload");

  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  const res = await axios.post("/api/artwork", {
    ...values,
    imageUrl: uploadConfig.data.key,
  });
  history.push("/_admin");
};

export const fetchArtworkList = (type, pageNumber) => async (dispatch) => {
  const res = await axios.get(`/api/artwork/s/${type}/${pageNumber}`);

  dispatch({ type: FETCH_ARTWORK_LIST, payload: res.data });
};

export const fetchArtwork = (id) => async (dispatch) => {
  const res = await axios.get(`/api/artwork/a/${id}`);

  dispatch({ type: FETCH_ARTWORK, payload: res.data });
};

export const clearList = () => async (dispatch) => {
  dispatch({ type: CLEAR_LIST, payload: "" });
};
