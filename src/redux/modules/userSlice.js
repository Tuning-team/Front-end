import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  data: [],
  error: [],
  userInterest: {
    loading: false,
    data: [],
    error: "",
  },
};

export const getUserInfo = createAsyncThunk("get/userInfo", async () => {
  try {
    const res = await instance.get("/user");
    return res.data;
  } catch (error) {
    return error.response.data.errorMessage;
  }
});

export const getUserInterest = createAsyncThunk(
  "get/userInterest",
  async () => {
    try {
      const res = await instance.get("/user/interest");
      return res.data.data;
    } catch (error) {
      throw new Error(error.response.data.errorMessage);
    }
  }
);

export const postUserInterest = createAsyncThunk(
  "post/userInterest",
  async (id) => {
    try {
      const res = await instance.put(`/user/interest/${id}`);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUserInterest = createAsyncThunk(
  "delete/userInterest",
  async (id) => {
    try {
      const res = await instance.delete(`/user/interest/${id}`);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUserInterest.fulfilled, (state, action) => {
      console.log(action.payload);
      state.userInterest.data = action.payload;
    });
    builder.addCase(getUserInterest.rejected, (state, action) => {
      state.userInterest.error = action.error.message;
    });
    builder.addCase(postUserInterest.fulfilled, (state, action) => {
      console.log(action.payload);
      state.userInterest.data = action.payload;
    });
    builder.addCase(deleteUserInterest.fulfilled, (state, action) => {
      console.log(action.payload);
      state.userInterest.data = action.payload;
    });
  },
});
