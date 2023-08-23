import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:4000/api/v1/reservations';
export const fetchAllReservations = createAsyncThunk('reservations/fetchAll', async () => {
  try {
    const response = await axios(url);
    return response.data.data;
  } catch (error) {
    return (error);
  }
});

const initialState = {
  reservations: [],
  isLoading: false,
  error: '',
};
const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchAllReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.action = [];
        state.error = action.error.message;
      });
  },

});

export default reservationsSlice.reducer;
