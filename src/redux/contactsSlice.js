import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  toggleFavourite,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [toggleFavourite.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [toggleFavourite.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state, action);
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      handleFulfilled(state, action);
      state.items.unshift(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state, action);
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [toggleFavourite.fulfilled](state, action) {
      handleFulfilled(state, action);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
