import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../shared/util/instance";

const initialState = {
  search: { loading: false, data: [], error: "" },
  popularkeywords: {
    loading: false,
    data: [],
    error: "",
  },
  searchStatus: false,
};

export const getList = createAsyncThunk("GET_LIST", async (search) => {
  try {
    const response = await instance.get(
      `/collections/search?keyword=${search}&offset=0&limit=5`
    );
    let res = response.data.data;
    return { res, search };
  } catch (error) {
    return error.message;
  }
});

export const getPopularSearchKeyword = createAsyncThunk(
  "get/popluarSearchKeyword",
  async () => {
    try {
      const response = await instance.get(
        "/collections/search/frequent?limit=20"
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const searchSlice = createSlice({
  name: "getList",
  initialState,
  reducers: {
    resetKeyword(state, action) {
      state.data = [];
    },
    resetSearchStatus(state, action) {
      state.searchStatus = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state, action) => {
      state.search.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.search.loading = false;
      state.search.data = action.payload;
      state.search.error = "";
      state.searchStatus = true;
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.search.loading = false;
      state.search.error = action.error.message;
    });
    builder.addCase(getPopularSearchKeyword.pending, (state, action) => {
      state.popularkeywords.loading = true;
    });
    builder.addCase(getPopularSearchKeyword.fulfilled, (state, action) => {
      state.popularkeywords.loading = false;
      state.popularkeywords.data = action.payload.data;
      state.popularkeywords.error = "";
    });
    builder.addCase(getPopularSearchKeyword.rejected, (state, action) => {
      state.popularkeywords.loading = false;
      state.popularkeywords.error = action.error.message;
    });
  },
});
export let { resetKeyword, resetSearchStatus } = searchSlice.actions;
