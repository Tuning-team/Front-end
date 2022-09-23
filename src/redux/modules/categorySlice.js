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

export const getCategoryCollectionForMain = createAsyncThunk(
  "get/categoryCollectionForMain",
  async (categoryId) => {
    try {
      const res = await instance.get(
        `/collections?category_id=${categoryId}&offset=0&limit=10`
      );
      if (categoryId === "631e7d7a4ae4c133c405a966") {
        const res1 = res.data;
        return { resName: "resOfRecommend", resArr: res1.data };
      } else if (categoryId === "6319aeebd1e330e86bbade9f") {
        const res2 = res.data;
        return { resName: "resOfFamous", resArr: res2.data };
      } else if (categoryId === "631e7d7a4ae4c133c405a964") {
        const res3 = res.data;
        return { resName: "resOfRecent", resArr: res3.data };
      } else if (categoryId === "631e7d7a4ae4c133c405a965") {
        const res4 = res.data;
        return { resName: "resOfWeather", resArr: res4.data };
      }
    } catch (error) {
      return error.message;
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
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
      state.categoryCollection.data = action.payload;
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
    // !임시
    builder.addCase(getCategoryCollectionForMain.pending, (state, action) => {
      state.categoryCollectionForMain.isLoading = true;
    });
    builder.addCase(getCategoryCollectionForMain.fulfilled, (state, action) => {
      state.categoryCollectionForMain.isLoading = false;
      state.categoryCollectionForMain.dataList = [
        ...state.categoryCollectionForMain.dataList,
        action.payload,
      ];
    });
    builder.addCase(getCategoryCollectionForMain.rejected, (state, action) => {
      state.categoryCollectionForMain.isLoading = false;
      state.categoryCollectionForMain.error = action.error.message;
    });
  },
});
