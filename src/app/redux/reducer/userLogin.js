import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const userLoginApi = createAsyncThunk(
  "userLogin/userLoginApi",
  async (userForm, { rejectWithValue }) => {
    try {
      const response = await userService.userLoginApi(userForm);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userLogin = createSlice({
  name: "userLogin",
  initialState: {
    data:
      !!localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")),
    error: null,
    loading: true,
    isAuthenticated:
      !!localStorage.getItem("user") &&
      !!JSON.parse(localStorage.getItem("user")).accessToken,
  },
  reducers: {
    logOutUser(state, action) {
      state.data = null;
      state.error = null;
      localStorage.clear("user");
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [userLoginApi.pending]: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [userLoginApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    [userLoginApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

const userLoginReducer = userLogin.reducer;

export const { logOutUser } = userLogin.actions;

export default userLoginReducer;
