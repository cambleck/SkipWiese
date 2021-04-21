import axios from "axios";
import { FETCH_USER, FETCH_ARTWORK_LIST, FETCH_ARTWORK } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitArtwork = (values, file) => async (dispatch) => {
  const uploadConfig = await axios.get("/api/upload");
  console.log(values, "values");
  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      "Content-Type": file.type,
    },
  });

  const res = await axios.post("/api/artwork", {
    ...values,
    imageUrl: uploadConfig.data.key,
  });
};

export const fetchArtworkList = (type) => async (dispatch) => {
  const res = await axios.get(`/api/artwork/s/${type}`);

  dispatch({ type: FETCH_ARTWORK_LIST, payload: res.data });
};

export const fetchArtwork = (id) => async (dispatch) => {
  console.log(id);
  const res = await axios.get(`/api/artwork/a/${id}`);

  dispatch({ type: FETCH_ARTWORK, payload: res.data });
};
