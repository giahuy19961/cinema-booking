import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const infoShowMovieApi = createAsyncThunk(
  "movie/infoShowMovie",
  async (id, { rejectWithValue }) => {
    try {
      return await movieService.layThongTinPhimApi(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const infoShowMovie = createSlice({
  name: "infoShowMovieReducer",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [infoShowMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [infoShowMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [infoShowMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const infoShowMovieReducer = infoShowMovie.reducer;

export default infoShowMovieReducer;
