import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const updateMovieApi = createAsyncThunk(
  "movie/updateMovie",
  async ({ editForm, accessToken }, { rejectWithValue }) => {
    try {
      return await movieService.updateMovieApi(editForm, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updateMovie = createSlice({
  name: "updateMovie",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [updateMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [updateMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [updateMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const updateMovieReducer = updateMovie.reducer;

export default updateMovieReducer;
