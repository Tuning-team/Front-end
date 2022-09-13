import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  message: "",
  keyword: "",
};

export const postSetWeather = createAsyncThunk(
  "post/setWeather",
  async (keyword) => {
    console.log(keyword);
    try {
      const res = await instance.put(`/collections/today?weather=${keyword}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

export const weatherSlice = createSlice({
  name: "setWeather",
  initialState,
  reducers: {
    keywordSaver(state, action) {
      console.log(action.payload);
      localStorage.setItem("keyWeather", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSetWeather.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});
export let { keywordSaver } = weatherSlice.actions;
