import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cinemaService } from "service";

export const listTheatersApi = createAsyncThunk(
  "listTheaters/getList",
  async (params, { rejectWithValue }) => {
    try {
      return await cinemaService.layThongTinHeThongRap();
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const listTheaters = createSlice({
  name: "listTheaters",
  initialState: {
    data: null,
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [listTheatersApi.pending]: (state, action) => {
      state.loading = true;
      state.data = null;
      state.loading = null;
    },
    [listTheatersApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [listTheatersApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const listTheatersReducer = listTheaters.reducer;

export default listTheatersReducer;
