import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/instance";

const initialState = {
  loading: false,
  data: [],
  error: [],
};

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.staus === 401) {
//       return Promise.reject(error);
//     }
//   }
// );
// 유저정보가져오는 thunk
export const getUserInfo = createAsyncThunk("get/userInfo", async () => {
  try {
    const res = await instance.get("/user");
    return res.data;
  } catch (error) {
    // console.log(error.response.data.errorMessage);
    return error.response.data.errorMessage;
  }
});

// 슬라이스
export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      // state.data = [];
      // state.error = action.payload;
    });
  },
});
// export let {} = collectionSlice.actions;
