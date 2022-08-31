import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import LoginSignupPage from "../pages/LoginSignupPage";
import MainPage from "../pages/MainPage";
import MyCollectionPage from "../pages/MyCollectionPage";
import Search from "../pages/Search";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyCollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
