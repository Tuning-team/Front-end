import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getCookie } from "./cookie";
import LoadingPage from "../../pages/LoadingPage";
import ScrollTop from "./ScrollTop";

function Router() {
  const WelcomePage = lazy(() => import("../../pages/WelcomePage"));
  const MainPage = lazy(() => import("../../pages/MainPage"));
  const EventPage = lazy(() => import("../../pages/EventPage"));
  const LoginSignupPage = lazy(() => import("../../pages/LoginSignupPage"));
  const GoogleLoginPage = lazy(() => import("../../pages/GoogleLoginPage"));
  const SearchPage = lazy(() => import("../../pages/SearchPage"));
  const CategoryPage = lazy(() => import("../../pages/CategoryPage"));
  const CollectionPage = lazy(() => import("../../pages/CollectionPage"));
  const ErrorPage = lazy(() => import("../../pages/ErrorPage"));
  const PrivateRoute = lazy(() => import("./PrivateRoute"));
  const MyPage = lazy(() => import("../../pages/MyPage"));
  const MyCollection = lazy(() =>
    import("../../components/features/myCollection/MyCollection")
  );
  const MyKeptCollection = lazy(() =>
    import("../../components/features/myCollection/MyKeptCollection")
  );
  const MyLikedCollection = lazy(() =>
    import("../../components/features/myCollection/MyLikedCollection")
  );
  const AddCollectionPage = lazy(() => import("../../pages/AddCollectionPage"));
  const AddVideoSearchPage = lazy(() =>
    import("../../pages/AddVideoSearchPage")
  );
  const EditCollectionPage = lazy(() =>
    import("../../pages/EditCollectionPage")
  );

  const access = !!getCookie("token");
  return (
    <BrowserRouter>
      <ScrollTop />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* public 경로 */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/google_login/:token" element={<GoogleLoginPage />} />
          <Route
            path="/collection/:collection_id"
            element={<CollectionPage />}
          />
          <Route path="/category/:category_id" element={<CategoryPage />} />
          <Route path="/event" element={<EventPage />} />

          {/* error 경로 */}
          <Route path="/*" element={<ErrorPage />} />
          {/* <Route path="/*" element={<Navigate to="/mainPage" />} /> */}

          {/* private 경로 */}
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
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
