import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  loading: false,
  isDeleted: false,
  isLiked: { status: false, message: "", data: "" },
  data: [],
  videos: [],
  error: "",
  categoryCollectionForMain: {
    isLoading: false,
    data: [],
    dataList: [],
    error: "",
  },
  selectedVideoId: "",
};

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

export const getVideoList = createAsyncThunk(
  "get/videoList",
  async ({ collectionId, count }) => {
    try {
      const res = await instance.get(
        `/videos/${collectionId}/?offset=${count}&limit=5`
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const putLikeBtn = createAsyncThunk(
  "put/likeBtn",
  async (collection_id) => {
    try {
      const res = await instance.put(`/collections/like/${collection_id}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.errorMessage);
      return error.response;
    }
  }
);

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

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    selectedVideoId(state, action) {
      state.selectedVideoId = action.payload;
    },
    resetVideoList(state) {
      state.videos = [];
    },
    resetVideoId(state) {
      state.selectedVideoId = "";
    },
    resetLikesData(state) {
      state.isLiked.data = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCollection.pending, (state, acion) => {
      state.loading = true;
    });
    builder.addCase(getCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVideoList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getVideoList.fulfilled, (state, action) => {
      state.loading = false;
      state.pageInfo = action.payload.pageInfo;
      state.videos = state.videos.concat(action.payload.data);
    });
    builder.addCase(getVideoList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(putLikeBtn.pending, (state, action) => {
      state.loading = true;
      state.isLiked.status = false;
    });
    builder.addCase(putLikeBtn.fulfilled, (state, action) => {
      state.loading = false;
      state.isLiked.status = true;
      state.isLiked.data = action.payload.data;
      alert(`${action.payload.message}`);
    });
    builder.addCase(putLikeBtn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
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
      return (window.location.href = "/mypage");
    });
    builder.addCase(deleteCollection.rejected, (state, action) => {
      state.loading = false;
      state.isDeleted = false;
      state.error = action.error.message;
    });
  },
});
export let { selectedVideoId, resetVideoList, resetVideoId, resetLikesData } =
  collectionSlice.actions;
