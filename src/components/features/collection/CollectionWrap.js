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
import { keyframes } from "styled-components";

const CollectionWrap = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [tabClicked, setTabClicked] = useState(false);
  const [slideState, setSlideState] = useState(false);

  const onClickedCommentBtn = () => {
    setSlideState((prev) => !prev);
  };

  const data = useSelector((state) => state.collectionSlice.data[0]);

  useEffect(() => {
    return () => {
      dispatch(resetVideoId());
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
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
      <>
        {slideState === false ? (
          <>
          </>
        ) : (
          <Modal>
            <SlideupBox>
              <CloseBtnArea >
                <CloseBtn onClick={onClickedCommentBtn} />
              </CloseBtnArea>
              <Children>
                <CommentForm collectionId={param.collection_id} />
              </Children>
            </SlideupBox>
          </Modal>

        )}
      </>
    </div>

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


const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 400;
`;
const slideUp = keyframes`
from{
  transform: translate(-50%, 11rem)
}
to{
  transform: translateY(-50%, 0)
}
`;
const SlideupBox = styled.div`
  box-sizing: border-box;
  padding: 0 1.25rem 0 1.25rem;
  background-color: #ffffff;
  min-width: 22.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px 20px 0 0;
  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;
const CloseBtnArea = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const CloseBtn = styled.div`
  width: 3.625rem;
  height: 0.25rem;
  border-radius: 2px;
  background-color: #adadad;
`;
const Children = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;
