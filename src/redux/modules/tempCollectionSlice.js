import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

// initialState 설정
const initialState = {
  loading: false,
  data: [],
  videos: [],
  error: "",
};

// 컬렉션에 대한 정보를 가져오는 thunk함수(collection에 대한 response를 가져옴)
export const getCollection = createAsyncThunk(
  "get/collection",
  async (collection_id) => {
    try {
      const res = await instance.get(`/collections/${collection_id}`);
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

// 해당 컬렉션에 해당하는 비디오 목록을 가져오는 thunk함수
export const getVideoList = createAsyncThunk(
  "get/videoList",
  async (collection_id) => {
    try {
      const res = await instance.get(`/videos/${collection_id}`);
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

// 슬라이스
export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ! 잊지말자. thunk에서 나온 return값이 여기서 action.payload라는 걸!!!
    builder.addCase(getCollection.pending, (state, acion) => {
      state.loading = true;
    });
    builder.addCase(getCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCollection.rejected, (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVideoList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getVideoList.fulfilled, (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    });
    builder.addCase(getVideoList.rejected, (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
