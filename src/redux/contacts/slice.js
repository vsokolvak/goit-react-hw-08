import { createSlice } from "@reduxjs/toolkit";
import { getContats, deleteContactById, addNewContact } from "./operations";
import {logOut} from '../auth/operations'

const contactsState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState: contactsState,
  extraReducers: (builder) => {
    builder
      .addCase(getContats.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.items = [];
      })
      .addCase(getContats.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
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
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.items = [];
        state.error = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.loading = false;
        state.items = [];
        state.error = false;
      });
  },
});

export default slice.reducer;
