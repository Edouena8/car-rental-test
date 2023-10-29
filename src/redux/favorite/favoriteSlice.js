const { createSlice } = require('@reduxjs/toolkit');

const favoriteSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    addFavorite(state, action) {
      state.push(action.payload);
    },
    removeFavorite(state, action) {
      state = state.filter(car => car.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
