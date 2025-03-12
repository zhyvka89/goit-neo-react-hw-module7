import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, {payload}) {
      return {
        ...state,
        contacts: [...state.contacts, payload],
      }
    },
    deleteContact(state, {payload}) {
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    },
  },
});
export const getContacts = (state) => state.contacts.contacts;

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer =  contactsSlice.reducer;