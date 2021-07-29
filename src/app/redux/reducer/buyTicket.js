import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ticketService } from "service";

// Reducer Thunk
export const buyTicketApi = createAsyncThunk(
  "ticket/buyTicketApi",
  async ({ thongTinVe, accessToken }, { rejectWithValue }) => {
    try {
      return await ticketService.datVe(thongTinVe, accessToken);
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const buyTicket = createSlice({
  name: "buyTicket",
  initialState: {
    data: null,
    loading: true,
    err: null,
  },
  reducers: {},
  extraReducers: {
    [buyTicketApi.pending]: (state, action) => {
      state.loading = true;
    },
    [buyTicketApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.err = null;
    },
    [buyTicketApi.rejected]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.err = action.payload;
    },
  },
});

const buyTicketReducer = buyTicket.reducer;

export default buyTicketReducer;
