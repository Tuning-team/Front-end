import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { resetVideoId } from "../../../redux/modules/tempCollectionSlice";
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
    <>
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

      <CollectionVideoList collectionId={param.collection_id} />

      <div style={{
        position: "fixed",
        zIndex: "99999",
        width: "360px",
        bottom: tabClicked ? "0" : "-100%",
        transition: "all 1s ease-in-out"
      }}>
        <CommentForm collectionId={param.collection_id} />
      </div>

    </>
  );
};
export default CollectionWrap;

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
