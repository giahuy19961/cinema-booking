import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "service";

// Reducer Thunk
export const listShowByTheaterApi = createAsyncThunk(
  "listShowByTheaterApi/getList",
  async (maHeThongRap) => {
    try {
      return await movieService.layThongTinLichChieuHeThongRap(maHeThongRap);
    } catch (error) {
      console.log(error);
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
