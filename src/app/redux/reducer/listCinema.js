import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cinemaService } from "service";

export const listCinemaById = createAsyncThunk(
  "listTheater/getListCinemaByTheaterId",
  async (maHeThongRap) => {
    try {
      return await cinemaService.layThongTinCumRapTheoHeThong(maHeThongRap);
    } catch (error) {
      console.log(error);
    }
  }
);

const listCinema = createSlice({
  name: "getListCinemaByTheaterId",
  initialState: {
    data: null,
    error: null,
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [listCinemaById.pending]: (state, action) => {
      state.loading = true;
    },
    [listCinemaById.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [listCinemaById.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const listCinemaByIdReducer = listCinema.reducer;

export default listCinemaByIdReducer;
