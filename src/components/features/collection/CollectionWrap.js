import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { resetVideoId } from "../../../redux/modules/tempCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FloatingIcons from "./FloatingIcons";
import YoutubeContainer from "./YoutubeContainer";
import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";
import CommentForm from "../comment/CommentForm";

const CollectionWrap = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [tabClicked, setTabClicked] = useState(false);

  const onClickedCommentBtn = () => {
    setTabClicked((prev) => !prev);
  };

  const data = useSelector((state) => state.collectionSlice.data[0]);

  useEffect(() => {
    return () => {
      dispatch(resetVideoId());
    };
  }, []);

  return (
    <>
      <FloatingIcons setModal={setModal} />
      <YoutubeContainer />
      <CollectionInformation
        collectionId={param.collection_id}
        modal={modal}
        setModal={setModal}
      />
      <CommentSection>
        <OpenCommentBox onClick={onClickedCommentBtn}>
          댓글 <span>{data?.commentNum}</span>
        </OpenCommentBox>
      </CommentSection>
      <CollectionVideoList collectionId={param.collection_id} />
      <div
        style={{
          position: "fixed",
          zIndex: "99999",
          width: "360px",
          bottom: tabClicked ? "0" : "-100%",
          transition: "all 1s ease-in-out",
        }}
      >
        <CommentForm collectionId={param.collection_id} />
      </div>
    </>
  );
};
export default CollectionWrap;
const CommentSection = styled.div`
  border-bottom: 0.5rem solid #f5f5f5;
  padding: 0.625rem 1.25rem;
`;

const OpenCommentBox = styled.div`
  box-sizing: border-box;
  height: 2.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
  border-radius: 18px;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  font-weight: 500;
  color: #505050;
  cursor: pointer;
  & span {
    font-weight: normal;
    color: #adadad;
  }
`;
