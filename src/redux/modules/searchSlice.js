import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

// [GET] LIST 
export const getList = createAsyncThunk("GET_LIST", async (search) => {
  const response = await instance.get(`collections?keyword=${search}&offset=0&limit=3`);
  console.log(response.data.data)
  return response.data.data;

});


export const searchSlice = createSlice({
  name: "getList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, { payload }) => [state = payload],
  },
})