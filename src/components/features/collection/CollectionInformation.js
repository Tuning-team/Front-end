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
import FloatingIcons from "./FloatingIcons";
import YoutubeContainer from "./YoutubeContainer";
import Button from "../../common/elements/Button";
import More from "../../common/More";
import { ReactComponent as LikesIcon } from "../../../shared/svg/icon_like.svg";
import { useParams } from "react-router-dom";
import shareKakao from "../../../shared/shareKakao";

const CollectionInformation = ({ collectionId, tabClicked }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  const [modal, setModal] = useState(false);

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
              backgroundColor="#ECE5FA"
              border="1px solid #b295e9"
              width="100%"
              height="2.5rem"
              onClick={() => {
                onClickLikeBtn();
              }}
            >
              <div style={{ fontSize: "0.875rem" }}>
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
