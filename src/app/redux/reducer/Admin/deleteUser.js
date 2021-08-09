import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const deleteUserApi = createAsyncThunk(
  "user/deleteUser",
  async ({ taiKhoan, accessToken }, { rejectWithValue }) => {
    try {
      return await userService.deleteUserApi(taiKhoan, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteUser = createSlice({
  name: "deleteUser",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [deleteUserApi.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [deleteUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const deleteUserReducer = deleteUser.reducer;

export default deleteUserReducer;
