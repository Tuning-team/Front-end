import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAll,
  getMyCollection,
  getLikedCollection,
  getKeptCollection,
} from "../../../redux/modules/collectionSlice";

import MyCollections from "../myCollection/MyCollections";

const MyTab = () => {
  const dispatch = useDispatch();
  //!useselector
  const myCollection = useSelector(
    (state) => state.myCollectionSlice.myCollection
  );
  const myCollectionLoading = useSelector(
    (state) => state.myCollectionSlice.myCollection.loading
  );
  const likedCollection = useSelector(
    (state) => state.myCollectionSlice.likedCollection
  );
  const keptCollection = useSelector(
    (state) => state.myCollectionSlice.keptCollection
  );

  //!usestate
  const [tab, setTab] = useState(1);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  //!useeffect
  //!1. 내컬렉션
  useEffect(() => {
    if (count1 === 0) {
      dispatch(deleteAll());
    }
    if (myCollection.totalContents > count1) {
      dispatch(getMyCollection(count1));
    }
  }, [count1]);
  //!2. 좋아요한컬렉션
  useEffect(() => {
    if (count2 === 0) {
      dispatch(deleteAll());
    }
    if (likedCollection.totalContents > count2) {
      dispatch(getLikedCollection(count2));
    }
  }, [count2]);
  //!3. 내가담은 컬렉션
  useEffect(() => {
    if (count3 === 0) {
      dispatch(deleteAll());
    }
    if (keptCollection.totalContents > count3) {
      dispatch(getKeptCollection(count3));
    }
  }, [count3]);
  return (
    <>
      <TabMenu tab={tab}>
        <div className="myCollection" onClick={() => setTab(1)}>
          <span>내 튜닝</span>
        </div>
        <div className="likedCollection" onClick={() => setTab(2)}>
          <span>좋아요한 튜닝</span>
        </div>
        <div className="interestedCollection" onClick={() => setTab(3)}>
          <span>담아온 튜닝</span>
        </div>
      </TabMenu>
      {tab === 1 && (
        <MyCollections
          state={myCollection.dataList}
          hasNext={myCollection.hasNext}
          setCount={setCount1}
          title="My"
        />
      )}
      {tab === 2 && (
        <MyCollections
          hasNext={likedCollection.hasNext}
          state={likedCollection.data}
          setCount={setCount2}
          title="Liked"
        />
      )}
      {tab === 3 && (
        <MyCollections
          state={keptCollection.data}
          hasNext={keptCollection.hasNext}
          setCount={setCount3}
          title="Keeping"
        />
      )}
    </>
  );
};
export default MyTab;
const TabMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  border-bottom: 0.235rem solid #ffffff;
  padding: 0 1rem;
  height: 2.5rem;
  border-top: 0.1rem solid #eaeaea;
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
      ${(props) => (props.tab === 1 ? "var(--color-primary)" : "transparent")};
    color: ${(props) =>
      props.tab === 1 ? "var(--color-primary)" : "var(--color-disabled)"};
  }
  & .likedCollection {
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 2 ? "var(--color-primary)" : "transparent")};
    color: ${(props) =>
      props.tab === 2 ? "var(--color-primary)" : "var(--color-disabled)"};
  }
  & .interestedCollection {
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 3 ? "var(--color-primary)" : "transparent")};
    color: ${(props) =>
      props.tab === 3 ? "var(--color-primary)" : "var(--color-disabled)"};
  }

  & span {
    display: inline-block;
    font-size: 0.813rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
  }
`;
