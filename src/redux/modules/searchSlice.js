import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { instance } from "../../shared/util/instance";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getList = createAsyncThunk("GET_LIST", async (search) => {
  try {
    const response = await instance.get(
      `collections/search?keyword=${search}&offset=0&limit=5`
    );
    let res = response.data.data;
    return { res, search };
  } catch (error) {
    return error.message;
  }
});

export const searchSlice = createSlice({
  name: "getList",
  initialState,
  reducers: {
    resetKeyword(state, action) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export let { resetKeyword } = searchSlice.actions;
