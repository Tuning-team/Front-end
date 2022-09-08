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

const CollectionInformation = ({ collectionId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.collectionSlice.data[0]);

  useEffect(() => {
    dispatch(getCollection(collectionId));
  }, []);

  // ! 삭제버튼 클릭시 컨펌창 열림
  const onDeleteThisCollection = () => {
    window.confirm("정말 지울겁니까?")
      ? dispatch(deleteCollection(collectionId))
      : console.log("no");
    // todo 삭제한 다음에 그 전 페이지로 이동하는 로직 필요
  };

  // ! 좋아요버튼 클릭시 좋아요 등록/취소
  const onClickLikeBtn = () => {
    dispatch(putLikeBtn(collectionId));
  };

  return (
    <>
      <CollectionHeaderBox>
        <img src={data?.thumbnails[0]} alt="컬렉션 대표 썸네일" />
        <div style={{ marginLeft: "0.6rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>{data?.collectionTitle}</h1>
            <Button onClick={() => onDeleteThisCollection()}>삭제</Button>
          </div>
          <p data-testid="collection-description">{data?.description}</p>
          <br></br>
          {/* <div id="userId" style={{ overFlow: "hidden" }}>
            {data?.user_id}
          </div> */}
          <div>영상 {data?.videos.length}개</div>
          <MakeElementsHorizontal>
            <div>
              좋아요
              <span data-testid="countLikes">{data?.likes}개</span>
            </div>
            <div>
              댓글
              <span data-testid="countComments">{data?.commentNum}개</span>
            </div>
          </MakeElementsHorizontal>
        </div>
      </CollectionHeaderBox>

      <MakeElementsHorizontal>
        <Button
          backgroundColor="white"
          color="black"
          onClick={() => onClickLikeBtn()}
        >
          좋아요
        </Button>
        <Button
          backgroundColor="white"
          color="black"
          onClick={() => nav("/comment")}
        >
          댓글
        </Button>
      </MakeElementsHorizontal>
    </>
  );
};

export default CollectionInformation;
const CollectionHeaderBox = styled.div`
  display: flex;

  & img {
    border-radius: 4px;
    width: 150px;
    height: 150px;
  }
  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: normal;
    width: calc(
      100% - 50px
    ); //calc()함수 쓸 때에는 꼭 +,- 양 옆으로 빈칸있어야 됨. 아니면 작동 안함
    margin-bottom: 1rem;
  }
`;
const MakeElementsHorizontal = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px auto;
`;
