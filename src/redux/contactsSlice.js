import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
