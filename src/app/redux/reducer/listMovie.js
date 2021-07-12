import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

// Reducer Thunk
export const listMovieApi = createAsyncThunk("listMovie/getList", async () => {
  try {
    return await movieService.layDanhSachPhimApi();
  } catch (error) {
    console.log(error);
  }
});

const listMovie = createSlice({
  name: "listMovie",
  initialState: {
    data: null,
    loading: true,
    err: null,
  },
  reducers: {},
  extraReducers: {
    [listMovieApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listMovieApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [listMovieApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const listMovieReducer = listMovie.reducer;

export default listMovieReducer;
