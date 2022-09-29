import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUserInfo } from "../../../redux/modules/userSlice";
import {
  getCollection,
  deleteCollection,
  putLikeBtn,
} from "../../../redux/modules/tempCollectionSlice";
import {
  keepCollection,
} from "../../../redux/modules/collectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie";
import shareKakao from "../../../shared/shareKakao";
import ToastNotification from "../../common/ToastNotification";
import { ReactComponent as LikeIcon } from "../../../shared/svg/28_ena_like.svg";
import { ReactComponent as SaveIcon } from "../../../shared/svg/28_ena_get.svg";
import Modal from "../../common/Modal";
import SlideUpModal from "../../common/SlideUpModal";
import { editVideoList } from "../../../redux/modules/collectionSlice";

const CollectionInformation = ({ collectionId, modal, setModal }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [toastState, setToastState] = useState(false);
  const [toastText, setToastText] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);

  const data = useSelector((state) => state.collectionSlice.data[0]);
  const isLiked = useSelector((state) => state.collectionSlice.isLiked);
  const isKept = useSelector((state) => state.myCollectionSlice.isKept);
  const userInfo = useSelector((state) => state.userSlice.data.user);

  const likeStatus = userInfo?.myLikingCollections.filter(
    (id) => id === collectionId
  ).length;
  const keepStatus = userInfo?.myKeepingCollections.filter(
    (id) => id === collectionId
  ).length;

  const userLiked = likeStatus ? "#572cff" : "#505050";
  const userKept = keepStatus ? "#572cff" : "#505050";

  useEffect(() => {
    dispatch(editVideoList(collectionId));
    dispatch(getCollection(collectionId));
    dispatch(getUserInfo());
  }, [collectionId]);

  useEffect(() => {
    setToastText(isLiked.message);
    dispatch(getCollection(collectionId));
    dispatch(getUserInfo());
  }, [isLiked]);

  useEffect(() => {
    setToastText(isKept.message);
    dispatch(getCollection(collectionId));
    dispatch(getUserInfo());
  }, [isKept]);

  //!카카오톡 공유하기
  const shareHandler = () => {
    shareKakao([
      data.thumbnails[0],
      data.thumbnails[1],
      data.thumbnails[2],
      data.collectionTitle,
      data.description,
      collectionId,
    ]);
  };

  //!좋아요기능
  const onClickLikeBtn = () => {
    if (getCookie("token") === undefined) {
      setToastState(true);
    } else {
      dispatch(putLikeBtn(collectionId));
      setToastState(true);
    }
  };

  //!담기기능
  const onKeepThisCollection = () => {
    if (getCookie("token") === undefined) {
      setToastState(true);
    } else {
      dispatch(keepCollection(collectionId));
      setToastState(true);
    }
  };

  //!삭제기능
  const onDeleteThisCollection = () => {
    if (data?.user_id === userInfo?._id) {
      setModal(false);
      setDeleteModal(true);
    } else if (!userInfo?._id) {
      setModal(false);
      setToastState(true);
    } else {
      setModal(false);
      setToastText("삭제 권한이 없는 유저입니다");
      setToastState(true);
    }
  };
  const onConfirmDelete = () => {
    setDeleteModal(false);
    setToastText("삭제를 완료했습니다");
    setToastState(true);
    setTimeout(() => {
      dispatch(deleteCollection(collectionId));
    }, 1000);
  };

  //!수정하기
  const onEditThisCollection = () => {
    if (data?.user_id === userInfo?._id) {
      nav("/myCollection/edit");
    } else if (!userInfo?._id) {
      setModal(false);
      setToastState(true);
    } else {
      setModal(false);
      setToastText("수정 권한이 없는 유저입니다");
      setToastState(true);
    }
  };

  return (
    <>
      <CollectionInfoBox>
        <UserNameAndVideoNums>
          {data?.writerName}
          <span> {data?.videos.length}개</span>
        </UserNameAndVideoNums>
        <h1 id="collectionTitle">{data?.collectionTitle}</h1>
        <p className="collectionExplanation">{data?.description}</p>

        <SaveAndLikeContainer>
          <IconSection>
            <StyleSaveIcon fill={userKept} onClick={onKeepThisCollection} />
            <span data-testid="countKeep">{data?.keptBy.length}</span>
          </IconSection>
          <IconSection>
            <StyleLikeIcon fill={userLiked} onClick={onClickLikeBtn} />
            <span data-testid="countLikes">{data?.likes}</span>
          </IconSection>
        </SaveAndLikeContainer>
      </CollectionInfoBox>
      {modal && (
        <SlideUpModal setModal={setModal} modal={modal}>
          <Btn onClick={shareHandler}>공유하기</Btn>
          <Btn onClick={onDeleteThisCollection}>삭제하기</Btn>
          <Btn onClick={onEditThisCollection}>수정하기</Btn>
        </SlideUpModal>
      )}
      {deleteModal && (
        <Modal setModal={setDeleteModal} modal={deleteModal}>
          해당 튜닝을 삭제하시겠습니까?
          <DetailInfo>* 삭제시 복구할 수 없습니다.</DetailInfo>
          <AnswerContainer>
            <div className="delete" onClick={onConfirmDelete}>
              삭제
            </div>
            <div className="cancel" onClick={() => setDeleteModal(false)}>
              취소
            </div>
          </AnswerContainer>
        </Modal>
      )}
      {toastState && (
        <ToastNotification setToastState={setToastState}>
          {toastText || "로그인이 필요한 기능입니다"}
        </ToastNotification>
      )}
    </>
  );
};

export default CollectionInformation;

const CollectionInfoBox = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1.313rem 1.25rem;
  box-sizing: border-box;
  position: relative;
  & h1 {
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: -0.9px;
    color: #191919;
    margin: 0.125rem 0;
  }
  & .collectionExplanation {
    font-size: 0.75rem;
    font-weight: normal;
    color: #999;
  }
`;

const UserNameAndVideoNums = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: #505050;
  & span {
    font-size: 0.813rem;
    font-weight: normal;
    color: #adadad;
    margin: 0;
  }
`;
const SaveAndLikeContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  display: flex;
  gap: 5px;
`;
const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-size: 0.75rem;
    font-weight: normal;
    color: #505050;
    text-align: center;
  }
`;
const StyleLikeIcon = styled(LikeIcon)`
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
`;
const StyleSaveIcon = styled(SaveIcon)`
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
`;
const Btn = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.7px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  &:nth-child(3) {
    padding-bottom: 0;
    border: none;
  }
`;
const DetailInfo = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 0.5rem;
  color: #505050;
`;
const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  & div {
    font-weight: bold;
    padding: 0 0.5rem;
    color: #505050;
  }
  & .delete {
    color: #b4130c;
  }
`;
