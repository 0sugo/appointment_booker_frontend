import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservationsSlice';
import detailsReducer from './doctors/detailsSlice';
import doctorSlice from './doctors/doctorSlice';

const store = configureStore({
  reducer: {
    doctors: doctorSlice,
    doctorDetails: detailsReducer,
    reservations: reservationsReducer,
  },
});

export default store;
