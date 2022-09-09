import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  loading: false,
  isDeleted: false,
  isLiked: false,
  data: [],
  videos: [],
  error: "",
};

// 컬렉션에 대한 정보를 가져오는 thunk
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

// 컬렉션 삭제 thunk
export const deleteCollection = createAsyncThunk(
  "delete/collection",
  async (collection_id) => {
    try {
      const res = await instance.delete(`/collections/${collection_id}`);
      return res.data.message;
    } catch (error) {
      return error.message;
    }
  }
);

// 컬렉션 id에 해당하는 비디오 목록 가져오는 thunk
export const getVideoList = createAsyncThunk(
  "get/videoList",
  async ({ collectionId, count }) => {
    try {
      const res = await instance.get(
        `/videos/${collectionId}/?offset=${count}&limit=4`
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

// 컬렉션 좋아요 thunk
export const putLikeBtn = createAsyncThunk(
  "put/likeBtn",
  async (collection_id) => {
    try {
      const res = await instance.put(`/collections/like/${collection_id}`);
      console.log(res);
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
  reducers: {
    resetVideoList(state, action) {
      state.videos = [];
    },
  },
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
      console.log("delete pending");
      state.loading = true;
      state.isDeleted = false;
    });
    builder.addCase(deleteCollection.fulfilled, (state, action) => {
      console.log("delete fulfilled");
      state.loading = false;
      state.isDeleted = true;
      state.data = action.payload;
      alert(`${action.payload}`);
      return (window.location.href = "/mypage"); //에러 일어나지만 새로고침해버림..
    });
    builder.addCase(deleteCollection.rejected, (state, action) => {
      state.loading = false;
      state.isDeleted = false;
      state.error = action.error.message;
    });
    // ! getVideoList
    builder.addCase(getVideoList.pending, (state, action) => {
      console.log("get pending");
      state.loading = true;
    });
    builder.addCase(getVideoList.fulfilled, (state, action) => {
      console.log("get fulfilled");
      state.loading = false;
      state.pageInfo = action.payload.pageInfo;
      state.videos = state.videos.concat(action.payload.data);
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
      state.isLiked = false;
    });
    builder.addCase(putLikeBtn.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.loading = false;
      state.isLiked = true;
      alert(`${action.payload}`);
    });
    builder.addCase(putLikeBtn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export let { resetVideoList } = collectionSlice.actions;
