import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import { addNewContact, deleteContactById, getContats } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "contacts",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getContats.pending, (state, actions) => {
        state.loading = true;
        state.error = false;
        state.items = [];
      })
      .addCase(getContats.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = actions.payload;
      })
      .addCase(getContats.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContactById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContactById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContactById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addNewContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addNewContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// selectors
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default slice.reducer;
