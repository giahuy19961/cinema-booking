import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

// Reducer Thunk
export const listShowByTheaterApi = createAsyncThunk(
  "listShowByTheaterApi/getList",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      return await movieService.layThongTinLichChieuHeThongRapApi(maHeThongRap);
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const listShowByTheater = createSlice({
  name: "listShowByTheater",
  initialState: {
    data: null,
    loading: true,
    err: null,
  },
  reducers: {},
  extraReducers: {
    [listShowByTheaterApi.pending]: (state, action) => {
      state.loading = true;
    },
    [listShowByTheaterApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [listShowByTheaterApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const listShowByTheaterReducer = listShowByTheater.reducer;

export default listShowByTheaterReducer;
