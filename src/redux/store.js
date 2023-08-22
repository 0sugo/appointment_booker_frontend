import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './doctors/detailsSlice';

const store = configureStore({
  reducer: {
    doctorDetails: detailsReducer,
  },
});

export default store;
