import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilter(state, { payload }) {
      return {
        ...state,
        value: payload,
      };
    },
  },
});

export const getFilter = (state) => state.filters.value;

export const { changeFilter } = filterSlice.actions;

export const filterReducer =  filterSlice.reducer;