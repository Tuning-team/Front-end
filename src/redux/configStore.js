import { configureStore } from "@reduxjs/toolkit";
import { commentSlice } from "./modules/commentSlice"

export default configureStore({
  reducer: {
    commentSlice: commentSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});