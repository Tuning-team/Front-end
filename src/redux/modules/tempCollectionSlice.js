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
// 컬렉션 삭제
export const deleteCollection = createAsyncThunk(
  "delete/collection",
  async (collection_id) => {
    try {
      const res = await instance.delete(`/collections/${collection_id}`);
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
      const res = await instance.get(
        `/videos/${collection_id}/?offset=0&limit=4`
      );
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

// 유저가 컬렉션에 좋아요
export const putLikeBtn = createAsyncThunk(
  "put/likeBtn",
  async (collection_id) => {
    try {
      const res = await instance.put(`/collections/like/${collection_id}`);
      return res.data.message;
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
    // ! getCollection
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
    // ! deleteCollection
    builder.addCase(deleteCollection.pending, (state, action) => {
      console.log("pending");
      state.loading = true;
    });
    builder.addCase(deleteCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(deleteCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // ! getVideoList
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
    // ! putLikeBtn
    builder.addCase(putLikeBtn.pending, (state, action) => {
      console.log("pending");
      state.loading = true;
    });
    builder.addCase(putLikeBtn.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.loading = false;
      alert(`${action.payload}`);
    });
    builder.addCase(putLikeBtn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
