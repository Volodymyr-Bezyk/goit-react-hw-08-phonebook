import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setNameFilter } from './actions';

const contactsInitialState = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '4591256123',
    email: 'rosie@gmail.com',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '4438912121',
    email: 'hermione@net.com',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '6457777556',
    email: 'edenCL@com.com',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '2291226534',
    email: 'copeland@ter.ac',
  },
  {
    id: 'id-5',
    name: 'Tom Lambed',
    number: '1235123685',
    email: 'tomcom@ter.ac',
  },
  {
    id: 'id-6',
    name: 'July Cooland',
    number: '2239226566',
    email: 'coolpool@ter.ac',
  },
];

const filterInitialState = {
  value: '',
};

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case setNameFilter.type:
//       return { ...state, value: action.payload };

//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer(filterInitialState, {
  [setNameFilter]: (state, action) => ({ ...state, value: action.payload }),
});
