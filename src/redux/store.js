import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});

export default store;
