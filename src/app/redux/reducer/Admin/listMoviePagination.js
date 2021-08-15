import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const listMoviePaginationApi = createAsyncThunk(
  "movie/listMoviePagination",
  async ({ page, perPage, tenPhim }, { rejectWithValue }) => {
    try {
      return await movieService.getListMoviePaginationsApi(
        page,
        perPage,
        tenPhim
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const listMoviePagination = createSlice({
  name: "listMoviePagination",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [listMoviePaginationApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listMoviePaginationApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [listMoviePaginationApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const listMoviePaginationReducer = listMoviePagination.reducer;

export default listMoviePaginationReducer;
