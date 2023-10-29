import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
});
