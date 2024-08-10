import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import contactsSlice from "./contactsSlice";
import authSlice from './auth/slice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const authPersistReducer = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});

export const persistor = persistStore(store)
