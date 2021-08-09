import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "service";

export const addUserApi = createAsyncThunk(
  "user/addUser",
  async ({ addForm, accessToken }, { rejectWithValue }) => {
    try {
      return await userService.createNewUserApi(addForm, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addUser = createSlice({
  name: "addUser",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addUserApi.pending]: (state, action) => {
      state.loading = true;
    },
    [addUserApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [addUserApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const addUserReducer = addUser.reducer;

export default addUserReducer;
