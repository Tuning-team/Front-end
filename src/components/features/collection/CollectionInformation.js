import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUserInfo } from "../../../redux/modules/userSlice";
import {
  getCollection,
  deleteCollection,
  putLikeBtn,
} from "../../../redux/modules/tempCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie";

import Button from "../../common/elements/Button";
import More from "../../common/More";
import { ReactComponent as LikeIcon } from "../../../shared/svg/icon_like.svg";
import { ReactComponent as SaveIcon } from "../../../shared/svg/icon_cart.svg";
import { useParams } from "react-router-dom";
import shareKakao from "../../../shared/shareKakao";
import { keepCollection } from "../../../redux/modules/collectionSlice";

const CollectionInformation = ({
  collectionId,
  tabClicked,
  modal,
  setModal,
}) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  // const [modal, setModal] = useState(false);

  const data = useSelector((state) => state.collectionSlice.data[0]);
  const isLiked = useSelector((state) => state.collectionSlice.isLiked);
  const userInfo = useSelector((state) => state.userSlice.data.user);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    dispatch(getCollection(collectionId));
  }, [isLiked, collectionId]);

  //!카카오톡 공유하기
  const shareHandler = () => {
    shareKakao([
      data.thumbnails[0],
      data.thumbnails[1],
      data.thumbnails[2],
      data.collectionTitle,
      data.description,
      param.collection_id,
    ]);
  };

  const onClickLikeBtn = () => {
    if (getCookie("token") === undefined) {
      alert("로그인을 해주세요");
      nav("/login");
    } else {
      dispatch(putLikeBtn(collectionId));
    }
  };

  const onDeleteThisCollection = () => {
    if (data?.user_id === userInfo?._id) {
      window.confirm("삭제하시겠습니까?")
        ? dispatch(deleteCollection(collectionId))
        : console.log("no");
    } else if (!userInfo?._id) {
      alert("로그인이 필요한 기능입니다.");
    } else {
      alert("삭제 권한이 없는 유저입니다.");
    }
  };

  //!수정하기
  const onEditThisCollection = () => {
    nav("/myCollection/edit");
  };
  //!좋아요기능 컬러

  // const userLiked = JSON.parse(localStorage.getItem("userInfo")).myCollections
  // const 테스트 = userLiked.filter((x) => x === collectionId)
  //!담기기능
  const onKeepThisCollection = () => {
    //!디스패치에 추가하기
    dispatch(keepCollection(collectionId));
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
            <StyleSaveIcon onClick={onKeepThisCollection} />
            <span>***</span>
          </IconSection>
          <IconSection>
            <StyleLikeIcon fill="#505050" onClick={onClickLikeBtn} />
            <span data-testid="countLikes">{data?.likes}</span>
          </IconSection>
        </SaveAndLikeContainer>
      </CollectionInfoBox>
      {modal && (
        <More>
          <ChooseBtn>
            <Btn
              style={{ borderBottom: "1px solid #efefef" }}
              onClick={shareHandler}
            >
              공유하기
            </Btn>
            <Btn onClick={() => onDeleteThisCollection()}>삭제하기</Btn>
            <Btn onClick={() => onEditThisCollection()}>수정하기</Btn>
          </ChooseBtn>

          <Close onClick={() => setModal(!modal)}>닫기</Close>
        </More>
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
const ChooseBtn = styled.div`
  background-color: #ffffff;
  width: 22.063rem;
  height: 5.938rem;
  color: #b295e9;

  font-size: 1.25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
`;
const Btn = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 5px;
`;
const Close = styled.div`
  background-color: #ffffff;
  width: 22.063rem;
  height: 3.125rem;
  color: #b295e9;
  margin-top: 10px;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
`;
