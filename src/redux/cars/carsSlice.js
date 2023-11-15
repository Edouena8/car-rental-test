const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchAllCars,
  fetchAllCarsForFilter,
  fetchFirstPage,
} = require('./carsOperations');

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const handleFirstPageFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

const handleAllCarsFulfilled = (state, action) => {
  return {
    ...state,
    cars: [...state.cars, ...action.payload],
    isLoading: false,
    error: null,
  };
};

const handleAllFilterCarsFulfilled = (state, action) => {
  return {
    ...state,
    cars: action.payload,
    isLoading: false,
    error: null,
  };
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFirstPage.pending, handlePending)
      .addCase(fetchFirstPage.fulfilled, handleFirstPageFulfilled)
      .addCase(fetchFirstPage.rejected, handleRejected)
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, handleAllCarsFulfilled)
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchAllCarsForFilter.pending, handlePending)
      .addCase(fetchAllCarsForFilter.fulfilled, handleAllFilterCarsFulfilled)
      .addCase(fetchAllCarsForFilter.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
export const { incrementCurrentPage, resetCurrentPage } = carsSlice.actions;
