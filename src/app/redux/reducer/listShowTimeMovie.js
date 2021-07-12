import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const listShowTimeMovieApi = createAsyncThunk(
  "listMovie/getShowTime",
  async (maPhim) => {
    try {
      return await movieService.layThongTinLichChieuPhimApi(maPhim);
    } catch (error) {
      console.log(error);
    }
  }
);

const listShowTimeMovie = createSlice({
  name: "getShowTime",
  initialState: {
    data: null,
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [listShowTimeMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listShowTimeMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [listShowTimeMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const listShowTimeMovieReducer = listShowTimeMovie.reducer;

export default listShowTimeMovieReducer;
