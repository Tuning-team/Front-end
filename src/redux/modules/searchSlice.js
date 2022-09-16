import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

export const getList = createAsyncThunk("GET_LIST", async (search) => {
  const response = await instance.get(`collections?keyword=${search}&offset=0&limit=50`);
  return response.data.data;

});


export const searchSlice = createSlice({
  name: "getList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => state = payload,
  },
})