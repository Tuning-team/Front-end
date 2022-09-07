import { configureStore } from "@reduxjs/toolkit";
import { myCollectionSlice } from "./modules/collectionSlice";
import { collectionSlice } from "./modules/tempCollectionSlice";
import { commentSlice } from "./modules/commentSlice";
import { videoSlice } from "./modules/videoSlice";
import { searchSlice } from "./modules/searchSlice";

export default configureStore({
  reducer: {
    myCollectionSlice: myCollectionSlice.reducer,
    collectionSlice: collectionSlice.reducer,
    commentSlice: commentSlice.reducer,
    searchSlice: searchSlice.reducer,
    videoSlice: videoSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
