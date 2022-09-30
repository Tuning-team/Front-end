import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginSignupPage from "../pages/LoginSignupPage";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import AddCollectionPage from "../pages/AddCollectionPage";
import AddVideoSearchPage from "../pages/AddVideoSearchPage";
import CommentPage from "../pages/CommentPage";
import CollectionPage from "../pages/CollectionPage";
import CategoryPage from "../pages/CategoryPage";
import GoogleLoginPage from "../pages/GoogleLoginPage";
import WelcomePage from "../pages/WelcomePage";
import ScrollTop from "./ScrollTop";
import EditCollectionPage from "../pages/EditCollectionPage";
import MyPage from "../pages/MyPage";
import ErrorPage from "../pages/ErrorPage";
import { getCookie } from "./cookie";
import PrivateRoute from "./PrivateRoute";
import EventPage from "../pages/EventPage";
import MyCollection from "../components/features/user/MyCollection";
import MyKeptCollection from "../components/features/user/MyKeptCollection";
import MyLikedCollection from "../components/features/user/MyLikedCollection";
function Router() {
  const access = !!getCookie("token");

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        {/* //!publicPage */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/myCollection" element={<MyCollectionPage />} /> */}
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/collection/:collection_id" element={<CollectionPage />} />
        <Route path="/category/:collection_id" element={<CategoryPage />} />
        <Route path="/google_login/:token" element={<GoogleLoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/event" element={<EventPage />} />
        {/* //!에러페이지  */}
        {/* <Route path="/*" element={<ErrorPage />} /> */}
        <Route path="/*" element={<Navigate to="/mainPage" />} />
        {/* //!privatePage */}
        <Route
          path="/myPage"
          element={
            <PrivateRoute authenticated={access} component={<MyPage />} />
          }
        >
          <Route path="myCollection" element={<MyCollection />} />
          <Route path="likedCollection" element={<MyLikedCollection />} />
          <Route path="keptCollection" element={<MyKeptCollection />} />
        </Route>
        <Route
          path="/myCollection/add"
          element={
            <PrivateRoute
              authenticated={access}
              component={<AddCollectionPage />}
            />
          }
        />
        <Route
          path="/myCollection/add/search"
          element={
            <PrivateRoute
              authenticated={access}
              component={<AddVideoSearchPage />}
            />
          }
        />
        <Route
          path="/myCollection/edit"
          // replace={true}
          element={
            <PrivateRoute
              authenticated={access}
              component={<EditCollectionPage />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
