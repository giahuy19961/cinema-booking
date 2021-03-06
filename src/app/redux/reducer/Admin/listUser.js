import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const listUserApi = createAsyncThunk(
  "user/listUser",
  async (params, { rejectWithValue }) => {
    try {
      return await userService.getListUserApi();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const listUser = createSlice({
  name: "listUser",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [listUserApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [listUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const listUserReducer = listUser.reducer;

export default listUserReducer;
