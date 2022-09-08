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
    // (인자) => 결과: 괄호가 없으면 return 생략
    // 이중 배열의 문제는 return되는 내용이 []를 감싸서!
    // 지우시면 해결!
    [getList.fulfilled]: (state, { payload }) => state = payload,
  },
})