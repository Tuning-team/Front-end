import { configureStore } from "@reduxjs/toolkit";
import { myCollectionSlice } from "./modules/collectionSlice";

export default configureStore({
  reducer: {
    myCollectionSlice: myCollectionSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
