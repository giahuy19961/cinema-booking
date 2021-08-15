import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

export const uploadFileApi = createAsyncThunk(
  "movie/uploadFile",
  async (file, { rejectWithValue }) => {
    try {
      return await movieService.uploadFileApi(file);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const uploadFile = createSlice({
  name: "uploadFile",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [uploadFileApi.pending]: (state, action) => {
      state.loading = true;
    },
    [uploadFileApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [uploadFileApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const uploadFileReducer = uploadFile.reducer;

export default uploadFileReducer;
