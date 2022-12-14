import { configureStore } from "@reduxjs/toolkit";
import { myCollectionSlice } from "./modules/collectionSlice";
import { collectionSlice } from "./modules/tempCollectionSlice";
import { commentSlice } from "./modules/commentSlice";
import { searchSlice } from "./modules/searchSlice";
import { userSlice } from "./modules/userSlice";
import { categorySlice } from "./modules/categorySlice";

export default configureStore({
  reducer: {
    myCollectionSlice: myCollectionSlice.reducer,
    collectionSlice: collectionSlice.reducer,
    commentSlice: commentSlice.reducer,
    searchSlice: searchSlice.reducer,
    userSlice: userSlice.reducer,
    categorySlice: categorySlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
