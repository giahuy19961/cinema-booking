import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const userInfoApi = createAsyncThunk(
  "userInfo/getInfo",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      return await userService.getAccountInfoApi(taiKhoan);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userInfo = createSlice({
  name: "userInfo",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [userInfoApi.pending]: (state, action) => {
      state.loading = true;
    },
    [userInfoApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [userInfoApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const userInfoReducer = userInfo.reducer;

export default userInfoReducer;
