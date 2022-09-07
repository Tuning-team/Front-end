import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

// initialState 설정
const initialState = {
  isLoading: false,
  error: "",
  video: [],
};

export const getVideoDetail = createAsyncThunk(
  "get/videoDetail",
  async (video_id) => {
    try {
      const res = await instance.get(`/videos/detail/${video_id}`);
      return res.data.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

// 슬라이스
export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getVideoDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.video = action.payload;
    });
  },
});
