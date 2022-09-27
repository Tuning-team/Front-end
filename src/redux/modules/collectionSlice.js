import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";
import axios from "axios";

const initialState = {
  myCollection: {
    loading: false,
    data: [],
    dataList: [],
    hasNext: true,
    totalContents: 1,
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
  editData: [],
  categoryCollection: {
    loading: false,
    data: [],
    error: "",
  },
  likedCollection: {
    loading: false,
    data: [],
    hasNext: true,
    totalContents: 1,
    error: "",
  },
  keptCollection: {
    loading: false,
    data: [],
    hasNext: true,
    totalContents: 1,
    error: "",
  },
  isKept: { status: false, message: "", data: "" },
  editVideoList: {
    data: [],
  },
};
//!내가 만든 컬렉션
export const getMyCollection = createAsyncThunk(
  "get/myCollection",
  async (count) => {
    try {
      const res = await instance(`/collections/mine?offset=${count}&limit=5`);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const postCollection = createAsyncThunk(
  "post/collection",
  async ({ addData, setToastState }) => {
    console.log(addData);
    try {
      const res = await instance.post("/collections", addData);
      setToastState(true);
      setTimeout(() => {
        window.location.href = "/myPage";
      }, [1000]);
      return res.data.success;
    } catch (error) {
      alert(error.response.data.message);
      return error.message;
    }
  }
);
//!컬렉션수정
export const editCollection = createAsyncThunk(
  "edit/collection",
  async ({ collection_id, addData, setToastState }) => {
    try {
      const res = await instance.put(`/collections/${collection_id}`, addData);
      setToastState(true);
      setTimeout(() => {
        window.location.href = `/collection/${collection_id}`;
      }, [1000]);
      return res.data.success;
    } catch (error) {
      alert(error.response.data.message);
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

export const getVideo = createAsyncThunk(
  "get/video",
  async ({ keyword, token, key }) => {
    try {
      if (!token) {
        const res = await axios(
          `https://api.tube-tuning.com/youtubesearch?q=${keyword}`
        );
        return res.data;
      } else {
        const res = await axios(
          `https://api.tube-tuning.com/youtubesearch?q=${keyword}&key=${key}&pageToken=${token}`
        );
        return res.data;
      }
    } catch (error) {
      return error.message;
    }
  }
);
//!좋아요한 컬렉션
export const getLikedCollection = createAsyncThunk(
  "get/likedCollection",
  async (count) => {
    try {
      const res = await instance(
        `/collections/mylikes?offset=${count}&limit=5`
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
//!내가 담은 컬렉션
export const getKeptCollection = createAsyncThunk(
  "get/keptCollection",
  async (count) => {
    try {
      const res = await instance(
        `/collections/mykeeps?offset=${count}&limit=5`
      );

      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
//!컬렉션 담기 (no.28)
export const keepCollection = createAsyncThunk(
  "put/keepCollection",
  async (collectionId) => {
    try {
      const res = await instance.put(`/collections/keep/${collectionId}`);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);
//!수정비디오 리스트
export const editVideoList = createAsyncThunk(
  "get/editVideoList",
  async (collectionId) => {
    try {
      const res = await instance.get(
        `/videos/${collectionId}/?offset=0&limit=100`
      );
      console.log(res.data.data);
      return res.data.data;
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
      state.videoList.push(...action.payload);
    },
    deleteAll(state, action) {
      state.myCollection.dataList = [];
      state.likedCollection.data = [];
      state.keptCollection.data = [];
      state.myCollection.hasNext = true;
      state.likedCollection.hasNext = true;
      state.keptCollection.hasNext = true;
    },

    deleteVideo(state, action) {
      if (action.payload === "all") {
        state.videoList = [];
      }
      state.videoList = state.videoList.filter(
        (video) => video.id !== action.payload
      );
    },
    rememberData(state, action) {
      state.editData = action.payload;
    },
  },
  extraReducers: (builder) => {
    //!getMyCollection
    builder.addCase(getMyCollection.pending, (state) => {
      state.myCollection.loading = true;
    });
    builder.addCase(getMyCollection.fulfilled, (state, action) => {
      state.myCollection.loading = false;
      state.myCollection.data = action.payload.data;
      state.myCollection.dataList = [
        ...state.myCollection.dataList,
        ...action.payload.data,
      ];
      state.myCollection.hasNext = action.payload.pageInfo.hasNext;
      state.myCollection.totalContents = action.payload.pageInfo.totalContents;
      state.myCollection.error = "";
    });
    builder.addCase(getMyCollection.rejected, (state, action) => {
      state.myCollection.loading = false;
      state.myCollection.data = [];
      state.myCollection.error = action.error.message;
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
    //!getLiked
    builder.addCase(getLikedCollection.pending, (state) => {
      state.likedCollection.loading = true;
    });
    builder.addCase(getLikedCollection.fulfilled, (state, action) => {
      state.likedCollection.loading = false;
      state.likedCollection.data.push(...action.payload.data);
      state.likedCollection.hasNext = action.payload.pageInfo.hasNext;
      state.likedCollection.totalContents =
        action.payload.pageInfo.totalContents;
      state.likedCollection.error = "";
    });
    builder.addCase(getLikedCollection.rejected, (state, action) => {
      state.likedCollection.loading = false;
      state.likedCollection.error = action.error.message;
    });
    //!getKept
    builder.addCase(getKeptCollection.pending, (state) => {
      state.keptCollection.loading = true;
    });
    builder.addCase(getKeptCollection.fulfilled, (state, action) => {
      state.keptCollection.loading = false;
      state.keptCollection.data.push(...action.payload.data);
      state.keptCollection.hasNext = action.payload.pageInfo.hasNext;
      state.keptCollection.totalContents =
        action.payload.pageInfo.totalContents;
      state.keptCollection.error = "";
    });
    builder.addCase(getKeptCollection.rejected, (state, action) => {
      state.keptCollection.loading = false;
      state.keptCollection.error = action.error.message;
    });
    //!getkeep
    builder.addCase(keepCollection.pending, (state, action) => {
      state.loading = true;
      state.isKept.status = false;
    });
    builder.addCase(keepCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.isKept.status = true;
      state.isKept.data = action.payload.data;
      state.isKept.message = action.payload.message;
    });
    //!editVideoList
    builder.addCase(editVideoList.fulfilled, (state, action) => {
      state.editVideoList.data = action.payload;
    });
  },
});

export let { addVideoList, deleteAll, deleteVideo, rememberData } =
  myCollectionSlice.actions;
