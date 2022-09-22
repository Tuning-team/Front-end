import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import {
  getUserInterested,
  getUserNum,
} from "../../../redux/modules/userSlice";
import Loading from "../../common/Loading";
import MyTab from "./MyTab";

const MyPageWrap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInterested());
    dispatch(getUserNum());
  }, []);
  const loading1 = useSelector(
    (state) => state.userSlice.userInterested.loading
  );
  const loading2 = useSelector((state) => state.userSlice.userNum.loading);
  const saves = useSelector((state) => state.userSlice.userInterested.data);

  return (
    <>
      {loading1 || loading2 ? <Loading /> : <UserInfo />}
      <MyTab />
    </>
  );
};
export default MyPageWrap;
