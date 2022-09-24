import MyPageWrap from "../components/features/user/MyPageWrap";
import Navbar from "../components/common/Navbar";
import Headers from "../components/common/Headers";
import Layout from "../components/common/Layout";
import StickyButtons from "../components/common/StickyButtons";

const MyPage = () => {
  return (
    <Layout>
      <MyPageWrap />
      <StickyButtons />
      <Navbar />
    </Layout>
  );
};
export default MyPage;
