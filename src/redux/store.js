import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './doctors/detailsSlice';
import doctorSlice from './doctors/doctorSlice';

const store = configureStore({
  reducer: {
    doctors: doctorSlice,
    doctorDetails: detailsReducer,
  },
});

export default store;
