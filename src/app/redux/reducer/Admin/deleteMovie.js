import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const deleteMovieApi = createAsyncThunk(
  "movie/deleteMovie",
  async ({ maPhim, accessToken }, { rejectWithValue }) => {
    try {
      return await movieService.deleteMovieApi(maPhim, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteMovie = createSlice({
  name: "deleteMovie",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [deleteMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [deleteMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const deleteMovieReducer = deleteMovie.reducer;

export default deleteMovieReducer;
