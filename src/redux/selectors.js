import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoadingSattus = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectActiveStatus = state => state.status;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectCountedContacts = createSelector(
  [selectContacts],
  contacts => {
    return contacts.reduce(
      (acc, contact) => {
        const counter = { ...acc, all: acc.all + 1 };
        if (contact.status) {
          counter.favourites += 1;
        }
        return counter;
      },
      { all: 0, favourites: 0 }
    );
  }
);
