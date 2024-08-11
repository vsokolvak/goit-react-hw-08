import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filtersChangeName(state, actyons) {
      state.name = actyons.payload;
    },
  },
});

export const { filtersChangeName } = slice.actions;

export default slice.reducer;
