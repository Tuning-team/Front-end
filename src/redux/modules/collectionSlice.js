import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";
import axios from "axios";

const initialState = {
  myCollection: {
    loading: false,
    data: [],
    dataList: [],
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
    nextPageToken: "",
    key: "",
    error: "",
  },
  videoList: [],
  categoryCollection: {
    loading: false,
    data: [],
    error: "",
  },
};

export const getMyCollection = createAsyncThunk(
  "get/myCollection",
  async (count) => {
    try {
      const res = await instance(`/collections/mine?offset=${count}&limit=5`);
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
export const getCategoryCollection = createAsyncThunk(
  "get/categoryCollection",
  async (id) => {
    try {
      const res = await instance(
        `/collections?category_id=${id}&offset=0&limit=20`
      );
      return res.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const postCollection = createAsyncThunk(
  "post/collection",
  async (data) => {
    try {
      const res = await instance.post("/collections", data);
      console.log(data);
      alert("컬렉션이 생성되었습니다.");
      window.location.href = "/myCollection";
      return res.data.success;
    } catch (error) {
      console.log(data);
      console.log(data.videos);
      console.log(error);
      alert(error.response.data.message);
      return error.message;
    }
  }
);
export const getVideo = createAsyncThunk(
  "get/video",
  async ({ keyword, token, key }) => {
    try {
      if (!token) {
        const res = await axios(
          `http://3.34.136.55:8080/api/search?q=${keyword}`
        );
        return res.data;
      } else {
        const res = await axios(
          `http://3.34.136.55:8080/api/search?q=${keyword}&key=${key}&pageToken=${token}`
        );
        return res.data;
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const myCollectionSlice = createSlice({
  name: "myCollection",
  initialState,
  reducers: {
    addVideoList(state, action) {
      state.videoList.push(action.payload);
    },
    deleteList(state, action) {
      state.myCollection.dataList = [];
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
      state.myCollection.dataList = [
        ...state.myCollection.dataList,
        ...action.payload,
      ];
      state.myCollection.error = "";
    });
    builder.addCase(getMyCollection.rejected, (state, action) => {
      state.myCollection.loading = false;
      state.myCollection.data = [];
      state.myCollection.error = action.error.message;
    });
    //!getCategory
    builder.addCase(getCategory.pending, (state) => {
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
      state.searchResult.loading = true;
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.searchResult.loading = false;
      state.searchResult.data = action.payload.results;
      state.searchResult.key = action.payload.key;
      state.searchResult.nextPageToken = action.payload.nextPageToken;
      state.searchResult.error = "";
    });
    builder.addCase(getVideo.rejected, (state, action) => {
      state.searchResult.loading = false;
      state.searchResult.success = "";
      state.searchResult.error = action.error.message;
    });
    //!getCategoryCollection
    builder.addCase(getCategoryCollection.pending, (state) => {
      state.categoryCollection.loading = true;
    });
    builder.addCase(getCategoryCollection.fulfilled, (state, action) => {
      state.categoryCollection.loading = false;
      state.categoryCollection.data = action.payload;
      state.categoryCollection.error = "";
    });
    builder.addCase(getCategoryCollection.rejected, (state, action) => {
      state.categoryCollection.loading = false;
      state.categoryCollection.success = "";
      state.categoryCollection.error = action.error.message;
    });
  },
});

export let { addVideoList, deleteList } = myCollectionSlice.actions;
