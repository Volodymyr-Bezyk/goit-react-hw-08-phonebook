import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = contact => {
// return {
//   type: 'contacts/addContact',
//   payload: {
//     id: nanoid(),
//     ...contact,
//   },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
// export const setNameFilter = text => {
//   return {
//     type: 'filter/setNameFilter',
//     payload: text,
//   };
// };

export const addContact = createAction('contacts/addContact', contact => {
  return {
    payload: {
      id: nanoid(),
      ...contact,
    },
  };
});
export const deleteContact = createAction('contacts/deleteContact');
export const setNameFilter = createAction('filter/setNameFilter');
