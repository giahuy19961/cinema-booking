import { createSlice } from "@reduxjs/toolkit";

const trailer = createSlice({
  name: "listFilm",
  initialState: {
    trailer: null,
    isPlay: false,
  },
  reducers: {
    playTrailer: (state, action) => {
      state.trailer = action.payload;
      state.isPlay = true;
    },
    closeTrailer: (state, action) => {
      state.trailer = null;
      state.isPlay = false;
    },
  },
});

const trailerReducer = trailer.reducer;

export const { playTrailer, closeTrailer } = trailer.actions;

export default trailerReducer;
