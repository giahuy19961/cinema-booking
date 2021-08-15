import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const listUserPaginationApi = createAsyncThunk(
  "user/listUserPagination",
  async ({ page, perPage, searchValue }, { rejectWithValue }) => {
    try {
      return await userService.getListUserPaginationApi(
        page,
        perPage,
        searchValue
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const listUserPagination = createSlice({
  name: "userInfo",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [listUserPaginationApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listUserPaginationApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [listUserPaginationApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const listUserPaginationReducer = listUserPagination.reducer;

export default listUserPaginationReducer;
