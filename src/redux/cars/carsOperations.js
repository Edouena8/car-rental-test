import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6540fcfb45bedb25bfc3019b.mockapi.io/';

export const fetchFirstPage = createAsyncThunk(
  'adverts/fetchFirst',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=12`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  'adverts/fetchAllCars',
  async (page, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`adverts?page=${page}&limit=12`);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllCarsForFilter = createAsyncThunk(
  'adverts/fetchAllCarsForFilter',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('adverts');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
