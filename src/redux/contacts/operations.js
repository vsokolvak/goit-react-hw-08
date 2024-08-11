import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const contacts = axios.create({
  baseURL: "https://connections-api.goit.global/contacts",
});

export const getContats = createAsyncThunk(
  "contacts/getAll",
  async (_, thuncApi) => {
    try {
      const response = await contacts.get("");
      return response.data;
    } catch (e) {
      return thuncApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteById",
  async (id, thuncApi) => {
    try {
      const response = await contacts.delete(`/${id}`);
      return response.data.id;
    } catch (e) {
      return thuncApi.rejectWithValue(e.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contacts/addNewContact",
  async (contact, thuncApi) => {
    try {
      const response = await contacts.post( '', contact);
      return response.data;
    } catch (e) {
      return thuncApi.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async (contact, thuncApi) => {
    try {
      const contactData = { name: contact.name, number: contact.number };
      const response = await contacts.patch(`/${contact.id}`, contactData);
      return response.data;
    } catch (error) {
      return thuncApi.rejectWithValue(error.message);
    }
  }
);