import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getMyCollection = createAsyncThunk(
  "get/myCollection",
  async () => {
    try {
      const res = await axios.get(
        "https://www.myspaceti.me/api/collections/mine"
      );
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const myCollectionSlice = createSlice({
  name: "myCollection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyCollection.pending, (state) => {
      console.log("pending");
      state.loading = true;
    });
    builder.addCase(getMyCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getMyCollection.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});
