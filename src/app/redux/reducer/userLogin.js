import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const userLoginApi = createAsyncThunk(
  "userAuth/Login",
  async (userForm) => {
    try {
      return await userService.userLoginApi(userForm);
    } catch (error) {
      console.log(error);
    }
  }
);

const userLogin = createSlice({
  name: "userLogin",
  initialState: {
    data: localStorage.getItem("user"),
    error: null,
    loading: true,
    isAuthenticated: localStorage.getItem("user") ? true : false,
  },
  reducers: {
    userLogOut(state, action) {
      state.data = null;
      state.err = null;
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
      state.err = null;
      state.isAuthenticated = true;
      localStorage.setItem("user", action.payload);
    },
    [userLoginApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      state.isAuthenticated = false;
    },
  },
});

const userLoginReducer = userLogin.reducer;

export const { logOutUser } = userLogin.actions;

export default userLoginReducer;
