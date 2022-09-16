import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { resetVideoId } from "../../redux/modules/tempCollectionSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";
import CommentForm from "../comment/CommentForm";

const CollectionWrap = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const [tabClicked, setTabClicked] = useState(false);

  const onClickedVideoTab = () => {
    setTabClicked(false);
  };
  const onClickedCommentTab = () => {
    setTabClicked(true);
  };

  useEffect(() => {
    return () => {
      dispatch(resetVideoId());
    };
  }, []);

  return (
    <Layout>
      <CollectionInformation
        collectionId={param.collection_id}
        tabClicked={tabClicked}
      />
      <TabMenu tabClicked={tabClicked}>
        <div className="videoTab" onClick={onClickedVideoTab}>
          <span>영상</span>
        </div>
        <div className="commentTab" onClick={onClickedCommentTab}>
          <span>댓글</span>
        </div>
      </TabMenu>
      {!tabClicked ? (
        <CollectionVideoList collectionId={param.collection_id} />
      ) : (
        <CommentForm collectionId={param.collection_id} />
      )}
    </Layout>
  );
};
export default CollectionWrap;

const Layout = styled.div`
  padding-bottom: 4.5rem;
`;
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

  & .videoTab {
    border-bottom: 0.235rem solid
      ${(props) => (props.tabClicked ? "transparent" : "#b295e9")};
  }
  & .commentTab {
    border-bottom: 0.235rem solid
      ${(props) => (props.tabClicked ? "#b295e9" : "transparent")};
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
