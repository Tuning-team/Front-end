import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { getMyCollection } from "../../../redux/modules/collectionSlice";
import {
  getUserInterested,
  getUserNum,
} from "../../../redux/modules/userSlice";
import Loading from "../../common/Loading";
import MyTab from "./MyTab";

const MyPageWrap = () => {
  const dispatch = useDispatch();
  //!dispatch
  useEffect(() => {
    dispatch(getUserInterested());
    dispatch(getUserNum());
  }, []);
  //!useselector
  const loading1 = useSelector(
    (state) => state.userSlice.userInterested.loading
  );
  const loading2 = useSelector((state) => state.userSlice.userNum.loading);
  //!담아온 컬렉션
  const saves = useSelector((state) => state.userSlice.userInterested.data);

  return (
    <>
      <Link to="/login">로그아웃하기 </Link>
      {loading1 || loading2 ? <Loading /> : <UserInfo />}
      <MyTab />
    </>
  );
};
export default MyPageWrap;
