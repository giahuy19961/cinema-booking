import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "service";

// Reducer Thunk
export const getTicketApi = createAsyncThunk(
  "ticket/getTicketById",
  async (maLichChieu, { rejectWithValue }) => {
    try {
      return await ticketService.layDanhSachPhongVe(maLichChieu);
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const getTicket = createSlice({
  name: "getTicket",
  initialState: {
    data: null,
    loading: true,
    err: null,
  },
  reducers: {},
  extraReducers: {
    [getTicketApi.pending]: (state, action) => {
      state.loading = true;
    },
    [getTicketApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [getTicketApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const getTicketReducer = getTicket.reducer;

export default getTicketReducer;
