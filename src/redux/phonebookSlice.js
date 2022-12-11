import { createSlice } from '@reduxjs/toolkit';
// import Phonebook from 'components/Phonebook/Phonebook';

const setContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contactsList: setContact },
  reducers: {
    del(state, action) {
      state.contactsList = state.contactsList.filter(
        item => item.id !== action.payload
      );
    },
    add(state, action) {
      state.contactsList.push(action.payload);
    },
  },
});

export const { add, del } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filterContact',
  initialState: { filter: '' },
  reducers: {
    updateFilter(state, action) {
      // console.log('action.payload: ', action.payload);
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
