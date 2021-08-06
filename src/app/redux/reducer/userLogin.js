import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";
import swal from "sweetalert";

export const userLoginApi = createAsyncThunk(
  "userLogin/userLoginApi",
  async (userForm, { rejectWithValue }) => {
    try {
      return await userService.userLoginApi(userForm);
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
    updateUser(state, action) {
      state.data = JSON.parse(localStorage.getItem("user"));
    },
  },
  extraReducers: {
    [userLoginApi.pending]: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    [userLoginApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
      swal({ title: "Login successfully!", icon: "success" });
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload.data));
    },
    [userLoginApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      swal({ title: action.payload, icon: "error" });
      state.isAuthenticated = false;
    },
  },
});

const userLoginReducer = userLogin.reducer;

export const { logOutUser, updateUser } = userLogin.actions;

export default userLoginReducer;
