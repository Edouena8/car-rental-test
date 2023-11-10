const { createSlice } = require('@reduxjs/toolkit');
const {
  // fetchCarsFromFirstPage,
  fetchAllCars,
  fetchAllCarsForFilter,
} = require('./carsOperations');

const initialState = {
  cars: [],
  currentPage: 1,
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

// const handleFirstPageFulfilled = (state, action) => {
//   return {
//     ...state,
//     cars: action.payload,
//     isLoading: false,
//     error: null,
//   };
// };

const handleAllCarsFulfilled = (state, action) => {
  if (state.currentPage === 1) {
    return {
      ...state,
      cars: action.payload,
      isLoading: false,
      error: null,
    };
  } else {
    return {
      ...state,
      cars: [...state.cars, ...action.payload],
      isLoading: false,
      error: null,
    };
  }
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
  reducers: {
    incrementCurrentPage(state) {
      state.currentPage += 1;
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(fetchCarsFromFirstPage.pending, handlePending)
      // .addCase(fetchCarsFromFirstPage.fulfilled, handleFirstPageFulfilled)
      // .addCase(fetchCarsFromFirstPage.rejected, handleRejected)
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
