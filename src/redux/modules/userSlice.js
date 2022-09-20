import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  data: [],
  error: [],
};

export const getUserInfo = createAsyncThunk("get/userInfo", async () => {
  try {
    const res = await instance.get("/user");
    return res.data;
  } catch (error) {
    return error.response.data.errorMessage;
  }
});

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
