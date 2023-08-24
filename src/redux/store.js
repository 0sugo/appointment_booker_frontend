import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationsSlice';
import detailsReducer from './doctors/detailsSlice';

const store = configureStore({
  reducer: {
    doctorDetails: detailsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
