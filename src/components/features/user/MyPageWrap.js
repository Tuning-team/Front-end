import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import { getMyCollection } from "../../../redux/modules/collectionSlice";
import { getUserInterested } from "../../../redux/modules/userSlice";
import Loading from "../../common/Loading";
import CollectionList from "../../common/CollectionList";
import MyCollections from "./MyCollections";

const MyPageWrap = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  //!dispatch
  useEffect(() => {
    dispatch(getUserInterested());
    dispatch(getMyCollection(0));
  }, []);

  //!useselector
  const loading1 = useSelector(
    (state) => state.userSlice.userInterested.loading
  );
  const loading2 = useSelector(
    (state) => state.myCollectionSlice.myCollection.loading
  );

  //!tab
  const [tab, setTab] = useState(1);
  //!담아온 컬렉션
  const saves = useSelector((state) => state.userSlice.userInterested.data);

  return (
    <>
      <Link to="/login">로그아웃하기 </Link>
      {loading1 || loading2 ? <Loading /> : <UserInfo />}
      <TabMenu tab={tab}>
        <div className="myCollection" onClick={() => setTab(1)}>
          <span>내컬렉션</span>
        </div>
        <div className="likedCollection" onClick={() => setTab(2)}>
          <span>좋아요한 컬렉션</span>
        </div>
        <div className="interestedCollection" onClick={() => setTab(3)}>
          <span>담아온 컬렉션</span>
        </div>
      </TabMenu>
      {tab === 1 && <MyCollections />}
      {tab === 2 && <MyCollections />}
      {tab === 3 && <MyCollections data={saves} />}
    </>
  );
};
export default MyPageWrap;
const TabMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  border-bottom: 0.235rem solid #eaeaea;
  padding: 0 1rem;
  height: 2.5rem;

  & > div {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .myCollection {
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 1 ? "#b295e9" : "transparent")};
  }
  & .likedCollection {
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 2 ? "#b295e9" : "transparent")};
  }
  & .interestedCollection {
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 3 ? "#b295e9" : "transparent")};
  }

  & span {
    display: inline-block;

    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;
  }
`;
