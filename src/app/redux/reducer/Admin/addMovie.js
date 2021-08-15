import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const addMovieApi = createAsyncThunk(
  "movie/addMovie",
  async ({ addForm, accessToken }, { rejectWithValue }) => {
    try {
      return await movieService.createNewMovieApi(addForm, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addMovie = createSlice({
  name: "addMovie",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [addMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [addMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const addMovieReducer = addMovie.reducer;

export default addMovieReducer;
