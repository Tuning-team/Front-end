import Navbar from "../components/common/Navbar";
import Layout from "../components/common/Layout";
import StickyButtons from "../components/common/StickyButtons";
import UserInfo from "../components/features/myCollection/UserInfo";
import { Outlet } from "react-router-dom";
const MyPage = () => {
  return (
    <Layout>
      <UserInfo />
      <Outlet></Outlet>
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default MyPage;
