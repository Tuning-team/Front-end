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

const CollectionInformation = ({ collectionId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const data = useSelector((state) => state.collectionSlice.data[0]);
  const isDeleted = useSelector((state) => state.collectionSlice.isDeleted);
  const isLiked = useSelector((state) => state.collectionSlice.isLiked);
  // console.log(data);

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
    window.confirm("정말 지울겁니까?")
      ? dispatch(deleteCollection(collectionId))
      : console.log("no");
  };
  // todo 삭제 후 페이지 이동하는 로직 리팩토링 필수!!

  useEffect(() => {
    dispatch(getCollection(collectionId));
  }, [isLiked, collectionId]);

  // ! 좋아요버튼 클릭시 좋아요 등록/취소
  const onClickLikeBtn = () => {
    dispatch(putLikeBtn(collectionId));
  };

  // if (isDeleted) {
  //   return nav("/mypage");
  // }

  return (
    <>
      <FloatingIcons setModal={setModal} />
      <YoutubeContainer />
      <CollectionInfoBox>
        <h1>{data?.collectionTitle}</h1>
        <MakeElementsHorizontal>
          <div id="userId">{data?.user_id}</div>
          <div id="countVideos">영상 {data?.videos.length}개</div>
          <div id="countLikes">
            좋아요 <span data-testid="countLikes">{data?.likes}</span>
          </div>
        </MakeElementsHorizontal>
        <Button
          backgroundColor="rgba(178, 149, 233, 0.24)"
          border="1px solid #b295e9"
          width="100%"
          height="2.5rem"
          onClick={() => onClickLikeBtn()}
        >
          <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.8)" }}>
            <LikesIcon fill="#000000" style={{ marginRight: "0.5rem" }} />
            좋아요
          </div>
        </Button>
        <p data-testid="collection-description">{data?.description}</p>
      </CollectionInfoBox>
      {/* -------------------똔똔똔 누르면 발생하는 모달-------------- */}
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
