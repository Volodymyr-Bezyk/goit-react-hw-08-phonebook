import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

import * as reducers from './reducers';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, reducers.fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, reducers.addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, reducers.deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), reducers.pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), reducers.rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), reducers.fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
