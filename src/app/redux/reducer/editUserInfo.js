import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const editUserApi = createAsyncThunk(
  "userInfo/editUser",
  async ({ editForm, accessToken }, { rejectWithValue }) => {
    try {
      return await userService.editUserInfoApi(editForm, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const editUser = createSlice({
  name: "editUser",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [editUserApi.pending]: (state, action) => {
      state.loading = true;
    },
    [editUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [editUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const editUserReducer = editUser.reducer;

export default editUserReducer;
