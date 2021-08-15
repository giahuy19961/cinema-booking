import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "service";

export const addShowApi = createAsyncThunk(
  "ticket/addShow",
  async ({ formData, accessToken }, { rejectWithValue }) => {
    try {
      return await ticketService.themLichChieu(formData, accessToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addShow = createSlice({
  name: "addShow",
  initialState: {
    loading: true,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addShowApi.pending]: (state, action) => {
      state.loading = true;
    },
    [addShowApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
    [addShowApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const addShowReducer = addShow.reducer;

export default addShowReducer;
