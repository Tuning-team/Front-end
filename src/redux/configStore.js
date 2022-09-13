import { configureStore } from "@reduxjs/toolkit";
import { myCollectionSlice } from "./modules/collectionSlice";
import { collectionSlice } from "./modules/tempCollectionSlice";
import { commentSlice } from "./modules/commentSlice";
import { searchSlice } from "./modules/searchSlice";
import { weatherSlice } from "./modules/setWeatherSlice";

export default configureStore({
  reducer: {
    myCollectionSlice: myCollectionSlice.reducer,
    collectionSlice: collectionSlice.reducer,
    commentSlice: commentSlice.reducer,
    searchSlice: searchSlice.reducer,
    weatherSlice: weatherSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
