import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const userRegisterApi = createAsyncThunk(
  "userRegister/userRegisterApi",
  async (registerForm, { rejectWithValue }) => {
    try {
      return await userService.userRegisterApi(registerForm);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userRegister = createSlice({
  name: "userLogin",
  initialState: {
    data: null,
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [userRegisterApi.pending]: (state, action) => {
      state.loading = true;
    },
    [userRegisterApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [userRegisterApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const userRegisterReducer = userRegister.reducer;

export default userRegisterReducer;
