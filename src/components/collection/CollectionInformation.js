import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getCollection,
  deleteCollection,
  putLikeBtn,
} from "../../redux/modules/tempCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/Button";

import More from "../../common/More";
import FloatingIcons from "./FloatingIcons";
import { ReactComponent as LikesIcon } from "../../svg/icon_like.svg";
import YoutubeContainer from "./YoutubeContainer";
import { getCookie } from "../../hooks/cookie";
import { getUserInfo } from "../../redux/modules/useSlice";

const CollectionInformation = ({ collectionId, tabClicked }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const data = useSelector((state) => state.collectionSlice.data[0]);
  const isDeleted = useSelector((state) => state.collectionSlice.isDeleted);
  const isLiked = useSelector((state) => state.collectionSlice.isLiked);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  const userInfo = useSelector((state) => state.userSlice.data.user);

  useEffect(() => {
    dispatch(getCollection(collectionId));
  }, [isLiked, collectionId]);

  //!카카오톡 공유하기
  const shareKakao = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("8fb951e6a91434fad955fdcf7098c44a");
    }
    window.Kakao.Link.sendCustom({
      templateId: 82633,
      // 내가 만든 템플릿 아이디를 넣어주면 된다
      templateArgs: {
        THU: data?.thumbnails[0],
        THU2: data?.thumbnails[1],
        THU3: data?.thumbnails[2],
        title: data?.collectionTitle,
        description: data?.description,
      },
    });
  };

  // ! 삭제버튼 클릭시 컨펌창 열림
  const onDeleteThisCollection = () => {
    if (data?.user_id === userInfo._id) {
      window.confirm("삭제하시겠습니까?")
        ? dispatch(deleteCollection(collectionId))
        : console.log("no");
    } else {
      alert("삭제 권한이 없는 유저입니다.");
    }
  };

  // ! 좋아요버튼 클릭시 좋아요 등록/취소
  const onClickLikeBtn = () => {
    if (getCookie("token") === undefined) {
      alert("로그인을 해주세요");
      nav("/login");
    } else {
      dispatch(putLikeBtn(collectionId));
    }
  };

  // let buttonColor = isLiked?.data === "like" ? "#b295e9" : "#ECE5FA";
  // let iconColor = buttonColor === "#b295e9" ? "#ffffff" : "#000000";

  return (
    <>
      <FloatingIcons setModal={setModal} tabClicked={tabClicked} />
      {!tabClicked ? (
        <>
          <YoutubeContainer />
          <CollectionInfoBox>
            <h1>{data?.collectionTitle}</h1>
            <MakeElementsHorizontal>
              <div id="userId">{data?.writerName} ·</div>
              <div id="countVideos">영상 {data?.videos.length}개 ·</div>
              <div id="countLikes">
                좋아요 <span data-testid="countLikes">{data?.likes}</span>
              </div>
            </MakeElementsHorizontal>
            <Button
              // backgroundColor={buttonColor}
              backgroundColor="#ECE5FA"
              border="1px solid #b295e9"
              width="100%"
              height="2.5rem"
              onClick={() => {
                onClickLikeBtn();
              }}
            >
              <div style={{ fontSize: "0.875rem" }}>
                {/* <LikesIcon fill={iconColor} style={{ marginRight: "0.5rem" }} /> */}
                <LikesIcon fill="#000000" style={{ marginRight: "0.5rem" }} />
                좋아요
              </div>
            </Button>
            <p data-testid="collection-description">{data?.description}</p>
          </CollectionInfoBox>
        </>
      ) : (
        <div style={{ height: "54px" }}></div>
      )}
      {modal && (
        <More>
          <ChooseBtn>
            <Btn
              style={{ borderBottom: "1px solid #efefef" }}
              onClick={shareKakao}
            >
              공유하기
            </Btn>
            <Btn onClick={() => onDeleteThisCollection()}>삭제하기</Btn>
          </ChooseBtn>

          <Close onClick={() => setModal(!modal)}>닫기</Close>
        </More>
      )}
    </>
  );
};

export default CollectionInformation;

const CollectionInfoBox = styled.div`
  margin: 1.313rem 1rem 0.375rem 1rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.24;

    margin-bottom: 0.375rem;
  }
  & p {
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: normal;

    margin: 0.813rem 0;
  }
`;

const MakeElementsHorizontal = styled.div`
  display: flex;
  justify-content: left;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
  & > div {
    font-size: 0.75rem;
    line-height: 1.24;
    font-weight: normal;
  }
  & #userId,
  #countVideos {
    color: rgba(0, 0, 0, 0.6);
  }
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
