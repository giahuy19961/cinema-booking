import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

// Reducer Thunk
export const listShowMovieApi = createAsyncThunk(
  "listShowMovie/getList",
  async (maPhim, { rejectWithValue }) => {
    try {
      return await movieService.layThongTinLichChieuPhimApi(maPhim);
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const listShowMovie = createSlice({
  name: "listShowMovie",
  initialState: {
    data: null,
    loading: true,
    err: null,
  },
  reducers: {},
  extraReducers: {
    [listShowMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listShowMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [listShowMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const listShowMovieReducer = listShowMovie.reducer;

export default listShowMovieReducer;
