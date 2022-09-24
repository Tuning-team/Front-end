import MyPageWrap from "../components/features/user/MyPageWrap";
import Navbar from "../components/common/Navbar";
import Headers from "../components/common/Headers";
import Layout from "../components/common/Layout";
const MyPage = () => {
  return (
    <Layout>
      <MyPageWrap />
      <Navbar />
    </Layout>
  );
};
export default MyPage;
