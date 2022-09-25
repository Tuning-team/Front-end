import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  data: [],
  error: [],
  userInterest: {
    loading: false,
    data: [],
    userCategory: [],
    msg: "",
    error: "",
  },
  userInterested: {
    loading: false,
    data: [],
    error: "",
  },
  userNum: {
    loading: false,
    likes: "",
    comments: "",
    error: "",
  },
};

export const getUserInfo = createAsyncThunk("get/userInfo", async () => {
  try {
    const res = await instance.get("/user");
    localStorage.setItem("userInfo", JSON.stringify(res.data.user));
    return res.data;
  } catch (error) {
    return error.response.data.errorMessage;
  }
});

export const getUserInterest = createAsyncThunk(
  "get/userInterest",
  async () => {
    try {
      const res = await instance.get("/user/interest");
      return res.data.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.errorMessage);
    }
  }
);

export const postUserInterest = createAsyncThunk(
  "post/userInterest",
  async (ids) => {
    try {
      const res = await instance.put(`/user/interest/${ids}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//! 관심사 삭제
export const deleteUserInterest = createAsyncThunk(
  "delete/userInterest",
  async (id) => {
    try {
      const res = await instance.delete(`/user/interest/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//!내가 담은 컬렉션확인 (no.30)
export const getUserInterested = createAsyncThunk(
  "get/userInterested",
  async (id) => {
    try {
      const res = await instance(`/user/keep`);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//!좋아요, 댓글 갯수(no.30)
export const getUserNum = createAsyncThunk("get/userNum", async () => {
  try {
    const res = await instance(`/collections/mine?offset=0&limit=500`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUserInterest.fulfilled, (state, action) => {
      state.userInterest.data = action.payload;
      state.userInterest.userCategory = action.payload.categories.map(
        (list) => list.categoryName
      );
    });
    builder.addCase(getUserInterest.rejected, (state, action) => {
      state.userInterest.error = action.error.message;
    });
    builder.addCase(postUserInterest.fulfilled, (state, action) => {
      state.userInterest.data = action.payload.data;
      state.userInterest.msg = action.payload.message;
    });
    builder.addCase(deleteUserInterest.fulfilled, (state, action) => {});
    builder.addCase(getUserInterested.pending, (state, action) => {
      state.userInterested.loading = true;
    });
    builder.addCase(getUserInterested.fulfilled, (state, action) => {
      state.userInterested.loading = false;
      state.userInterested.data = action.payload;
    });
    builder.addCase(getUserInterested.rejected, (state, action) => {
      state.userInterested.error = action.payload;
    });
    //!좋아요
    builder.addCase(getUserNum.pending, (state, action) => {
      state.userNum.loading = true;
    });
    builder.addCase(getUserNum.fulfilled, (state, action) => {
      state.userNum.loading = false;
      if (action.payload.length === 0) {
        state.userNum.likes = 0;
        state.userNum.comments = 0;
      } else {
        const array1 = action.payload.map((x) => x.likes);
        state.userNum.likes = array1.reduce((a, b) => a + b);
        const array2 = action.payload.map((x) => x.commentNum);
        state.userNum.comments = array2.reduce((a, b) => a + b);
      }
    });
    builder.addCase(getUserNum.rejected, (state, action) => {
      state.userNum.error = action.payload;
      state.userNum.loading = false;
    });
  },
});
