import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginSignupPage from "../pages/LoginSignupPage";
import MainPage from "../pages/MainPage";
import MyCollectionPage from "../pages/MyCollectionPage";
import SearchPage from "../pages/SearchPage";
import AddCollectionPage from "../pages/AddCollectionPage";
import AddVideoSearchPage from "../pages/AddVideoSearchPage";
import CommentPage from "../pages/CommentPage";
import CollectionPage from "../pages/CollectionPage";
import CategoryPage from "../pages/CategoryPage";
import GoogleLoginPage from "../pages/GoogleLoginPage";
import WelcomePage from "../pages/WelcomePage";
import ScrollTop from "./ScrollTop";

function Router() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyCollectionPage />} />
        <Route path="/mypage/add" element={<AddCollectionPage />} />
        <Route path="/mypage/add/search" element={<AddVideoSearchPage />} />
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/collection/:collection_id" element={<CollectionPage />} />
        <Route path="/category/:collection_id" element={<CategoryPage />} />
        <Route path="/google_login/:token" element={<GoogleLoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
