import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/instance";

const initialState = {
  myCollection: {
    loading: false,
    data: [],
    error: "",
  },
  thumbnails: [],
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

export const getThumbnail = createAsyncThunk("get/thumbnail", async (id) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBJg1gJLZT0As7NGbFDHpWFLO_mi4JDw0c&part=snippet&maxResults=50&regionCode=kr&id=${id}`
    );
    console.log(res.data.items[0].snippet.thumbnails.medium.url);
    return res.data.items[0].snippet.thumbnails.medium.url;
  } catch (error) {
    return error.message;
  }
});
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
      console.log(res.data.success);
      return res.data.success;
    } catch (error) {
      return error.message;
    }
  }
);

export const myCollectionSlice = createSlice({
  name: "myCollection",
  initialState,
  reducers: {},
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
    //!getThumbnail
    builder.addCase(getThumbnail.fulfilled, (state, action) => {
      state.loading = false;
      state.thumbnails = [...state.thumbnails, ...action.payload];
      state.error = "";
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
  },
});
