const { createSlice } = require('@reduxjs/toolkit');
const { fetchCarsFromFirstPage, fetchAllCars } = require('./carsOperations');

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: {
    [fetchCarsFromFirstPage.fulfilled]: (state, action) => {
      return {
        ...state,
        cars: action.payload,
        isLoading: false,
        error: null,
      };
    },
    [fetchCarsFromFirstPage.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchCarsFromFirstPage.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [fetchAllCars.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchAllCars.fulfilled]: (state, action) => {
      return {
        ...state,
        cars: [...state.cars, ...action.payload],
        isLoading: false,
        error: null,
      };
    },
    [fetchAllCars.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const carsReducer = carsSlice.reducer;
