import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../pages/CategoryPage";
import LoginSignupPage from "../pages/LoginSignupPage";
import MainPage from "../pages/MainPage";
import MyCollectionPage from "../pages/MyCollectionPage";
import SearchPage from "../pages/SearchPage";
import AddCollectionPage from "../pages/AddCollectionPage";
import AddVideoSearchPage from "../pages/AddVideoSearchPage";
import CommentPage from "../pages/CommentPage";
import CollectionPage from "../pages/CollectionPage";
import CategoryPage from "../pages/CategoryPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyCollectionPage />} />
        <Route path="/mypage/add" element={<AddCollectionPage />} />
        <Route path="/mypage/add/search" element={<AddVideoSearchPage />} />
        <Route path="/Comment" element={<CommentPage />} />
        <Route path="/collection/:collection_id" element={<CollectionPage />} />
        <Route path="/category/:collection_id" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
