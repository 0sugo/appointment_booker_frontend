import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1/';
const initialState = {
  doctorDetails: {},
  isLoading: false,
  error: '',
};

export const fetchDoctorDetails = createAsyncThunk(
  'fetch/doctorDetails',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/doctors/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.message || 'Something went wrong');
    }
  },
);

const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.doctorDetails = payload;
      })
      .addCase(fetchDoctorDetails.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.doctorDetails = {};
      })
      .addCase(fetchDoctorDetails.rejected, (state, { payload }) => {
        state.doctorDetails = {};
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const doctorDetailsSelector = (state) => state.doctorDetails;
export default detailSlice.reducer;
