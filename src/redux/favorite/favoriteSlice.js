import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favoriteCars: [],
};

const persistConfig = {
  key: 'favorite',
  storage,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteCars.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoriteCars = state.favoriteCars.filter(car => car.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
