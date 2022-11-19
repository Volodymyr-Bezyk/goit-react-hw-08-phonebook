import { createSlice } from '@reduxjs/toolkit';
import { filterStatus } from './constants';

const activeStatusInitialState = filterStatus.all;

const activeStatus = createSlice({
  name: 'activeStatus',
  initialState: activeStatusInitialState,
  reducers: {
    setActiveStatusValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setActiveStatusValue } = activeStatus.actions;
export const activeStatusReducer = activeStatus.reducer;
