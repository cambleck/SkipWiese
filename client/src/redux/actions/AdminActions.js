import axios from "axios";
import { FETCH_USER, DELETE_ARTWORK, SUBMIT_ARTWORK } from "./types";

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
