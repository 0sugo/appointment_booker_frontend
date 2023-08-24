import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserId = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return userData ? userData.id : null;
};

const url = 'http://localhost:4000/api/v1/users';

export const fetchAllReservations = createAsyncThunk('reservations/fetchAll', async () => {
  const userId = getUserId();
  if (userId === null) {
    return [];
  }

  try {
    const response = await axios(`${url}/${userId}/reservations`);
    return response.data.data;
  } catch (error) {
    return (error);
  }
});

export const deleteReservation = createAsyncThunk('reservations/delete', async (id) => {
  const userId = getUserId();
  if (userId === null) {
    return id;
  }

  try {
    await axios.delete(`${url}/${userId}/reservations/${id}`);
    return id;
  } catch (error) {
    return (error);
  }
});

export const addReservation = createAsyncThunk('reservations/add', async ({ doctorId, date, city }) => {
  const userId = getUserId();

  if (userId === null) {
    throw new Error('User ID not available');
  }

  try {
    const response = await axios.post(`${url}/${userId}/reservations`, {
      user_id: userId,
      doctor_id: doctorId,
      date,
      city,
    });

    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error adding reservation');
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
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        const x = state.reservations.filter((reservation) => reservation.id !== action.payload);
        state.reservations = x;
      });
  },

});

export default reservationsSlice.reducer;
