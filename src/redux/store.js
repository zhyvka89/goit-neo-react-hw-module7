import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigContacts = {
  key: 'contacts',
  storage,
};

const contactsPersistedReducer = persistReducer(persistConfigContacts, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filters: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REGISTER"],
      },
    }),
});

export const persistor = persistStore(store);