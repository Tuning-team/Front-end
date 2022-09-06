import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/instance";

const initialState = {
  myCollection: {
    loading: false,
    data: [],
    error: "",
  },
  category: {
    loading: false,
    data: [],
    error: "",
  },
  newCollection: {
    loading: false,
    success: [],
    error: "",
  },
  searchResult: {
    loading: false,
    data: [],
    error: "",
  },
  videoList: [],
};

export const getMyCollection = createAsyncThunk(
  "get/myCollection",
  async () => {
    try {
      const res = await instance("/collections/mine");
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const getCategory = createAsyncThunk("get/category", async (id) => {
  try {
    const res = await instance("/categories");
    return res.data.data;
  } catch (error) {
    return error.message;
  }
});

export const postCollection = createAsyncThunk(
  "post/collection",
  async (data) => {
    console.log(data);
    try {
      const res = await instance.post("/collections", data);
      return res.data.success;
    } catch (error) {
      return error.message;
    }
  }
);
export const getVideo = createAsyncThunk("get/video", async (data) => {
  try {
    const res = await instance(`/search/videos/db?keyword=${data}`);
    return res.data.data;
  } catch (error) {
    return error.message;
  }
});

export const myCollectionSlice = createSlice({
  name: "myCollection",
  initialState,
  reducers: {
    addVideoList(state, action) {
      state.videoList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    //!getMyCollection
    builder.addCase(getMyCollection.pending, (state) => {
      state.myCollection.loading = true;
    });
    builder.addCase(getMyCollection.fulfilled, (state, action) => {
      state.myCollection.loading = false;
      state.myCollection.data = action.payload;
      state.myCollection.error = "";
    });
    builder.addCase(getMyCollection.rejected, (state, action) => {
      state.myCollection.loading = false;
      state.myCollection.data = [];
      state.myCollection.error = action.error.message;
    });
    //!getCategory
    builder.addCase(getCategory.pending, (state) => {
      console.log("pending");
      state.category.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.category.loading = false;
      state.category.data = action.payload;
      state.category.error = "";
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.category.loading = false;
      state.category.data = "";
      state.category.error = action.error.message;
    });
    //!postCollection
    builder.addCase(postCollection.pending, (state) => {
      console.log("pending");
      state.newCollection.loading = true;
    });
    builder.addCase(postCollection.fulfilled, (state, action) => {
      state.newCollection.loading = false;
      state.newCollection.success = action.payload;
      state.newCollection.error = "";
    });
    builder.addCase(postCollection.rejected, (state, action) => {
      state.newCollection.loading = false;
      state.newCollection.success = "";
      state.newCollection.error = action.error.message;
    });
    //!getVideo
    builder.addCase(getVideo.pending, (state) => {
      console.log("pending");
      state.searchResult.loading = true;
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.searchResult.loading = false;
      state.searchResult.data = action.payload;
      state.searchResult.error = "";
    });
    builder.addCase(getVideo.rejected, (state, action) => {
      state.searchResult.loading = false;
      state.searchResult.success = "";
      state.searchResult.error = action.error.message;
    });
  },
});

export let { addVideoList } = myCollectionSlice.actions;
