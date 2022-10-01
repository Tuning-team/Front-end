import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/instance";

const initialState = {
  category: {
    loading: false,
    data: [],
    error: "",
  },
  categoryCollection: {
    loading: false,
    data: [],
    hasNext: false,
    totalContents: 1,
    error: "",
  },
  mainCategories: {
    loading: false,
    data: [],
    error: "",
  },
  categoryCollectionForMain: {
    isLoading: false,
    data: [],
    dataList: [],
    error: "",
  },
  categoryName: {
    loading: false,
    data: [],
    error: "",
  },
};

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
  async ({ id, count }) => {
    try {
      const res = await instance(
        `/collections?category_id=${id}&offset=${count}&limit=5`
      );
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const getMainCategories = createAsyncThunk(
  "get/mainCategories",
  async (ids) => {
    try {
      const res = await instance.post(`/collections/recommendation`, ids);
      return res.data.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    deleteCategory(state) {
      state.categoryCollection.data = [];
      state.categoryCollection.hasNext = true;
    },
  },
  extraReducers: (builder) => {
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
    //!getCategoryCollection
    builder.addCase(getCategoryCollection.pending, (state) => {
      state.categoryCollection.loading = true;
    });
    builder.addCase(getCategoryCollection.fulfilled, (state, action) => {
      state.categoryCollection.loading = false;
      state.categoryCollection.data.push(...action.payload.data);
      state.categoryCollection.hasNext = action.payload.pageInfo.hasNext;
      state.categoryCollection.totalContents =
        action.payload.pageInfo.totalContents;
      state.categoryCollection.error = "";
    });
    builder.addCase(getCategoryCollection.rejected, (state, action) => {
      state.categoryCollection.loading = false;
      state.categoryCollection.success = "";
      state.categoryCollection.error = action.error.message;
    });
    // !getMainCategory
    builder.addCase(getMainCategories.pending, (state, action) => {
      state.mainCategories.loading = true;
    });
    builder.addCase(getMainCategories.fulfilled, (state, action) => {
      state.mainCategories.loading = false;
      state.mainCategories.data = action.payload;
    });
    builder.addCase(getMainCategories.rejected, (state, action) => {
      state.mainCategories.loading = false;
    });
  },
});
export let { deleteCategory } = categorySlice.actions;
