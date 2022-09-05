import { configureStore } from "@reduxjs/toolkit";

import { myCollectionSlice } from "./modules/collectionSlice";
import { collectionSlice } from "./modules/tempCollectionSlice";
import { commentSlice } from "./modules/commentSlice";

export default configureStore({
  reducer: {
    myCollectionSlice: myCollectionSlice.reducer,
    collectionSlice: collectionSlice.reducer,
    commentSlice: commentSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
