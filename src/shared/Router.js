import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import LoginSignupPage from "../pages/LoginSignupPage";
import MainPage from "../pages/MainPage";
import MyCollectionPage from "../pages/MyCollectionPage";
import Search from "../pages/Search";
import AddCollectionPage from "../pages/AddCollectionPage";
import AddVideoSearchPage from "../pages/AddVideoSearchPage";
import CollectionPage from "../pages/CollectionPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyCollectionPage />} />
        <Route path="/mypage/add" element={<AddCollectionPage />} />
        <Route path="/mypage/add/search" element={<AddVideoSearchPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
