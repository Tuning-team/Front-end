import { configureStore } from "@reduxjs/toolkit";
import { myCollectionSlice } from "./modules/myCollectionSlice";
import { collectionSlice } from "./modules/tempCollectionSlice";

export default configureStore({
  reducer: {
    myCollectionSlice: myCollectionSlice.reducer,
    collectionSlice: collectionSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
