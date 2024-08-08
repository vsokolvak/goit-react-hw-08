import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66ade8e8b18f3614e3b6333d.mockapi.io/contacts";

export const getContats = createAsyncThunk(
  "contacts/getAll",
  async (_, thuncApi) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
        return thuncApi.rejectWithValue(e.message)
    }
  }
);

export const deleteContactById = createAsyncThunk("contacts/deleteById", async (id, thuncApi) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data.id
    } catch (e) {
        return thuncApi.rejectWithValue(e.message)
    }
});

export const addNewContact = createAsyncThunk("contacts/addNewContact", async (contact, thuncApi) => {
    try {
        const response = await axios.post('/contacts', contact)
        return response.data
    } catch (e) {
        return thuncApi.rejectWithValue(e)
    }
});
