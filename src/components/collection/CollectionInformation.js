import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../../elements/Button";
import { putLikeBtn } from "../../redux/modules/tempCollectionSlice";
import { useDispatch } from "react-redux";

// import orders : React > package > modules > hooks > component > css
// logis orders : useState > useRef > dispatch > navigate > useSelector > extra..
const CollectionInformation = ({ data, collectionId }) => {
  const dispatch = useDispatch();
  const [collectionInfo, setCollectionInfo] = useState(null);
  useEffect(() => {
    setCollectionInfo(...data);
  }, [data]);
  console.log(data);
  console.log(collectionInfo);
  const deleteThisCollection = () => {
    window.confirm("정말 지울겁니까?")
      ? dispatch(deleteThisCollection(collectionId))
      : console.log("no");
  };
  const onClickLikeBtn = () => {
    dispatch(putLikeBtn(collectionId));
  };
  // todo 연결은 했는데.... 업데이트된 내용을 화면에 보여줘야됨
  return (
    <div>
      <H1>{collectionInfo?.collectionTitle}</H1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          width="64px"
          height="1.5rem"
          onClick={() => deleteThisCollection()}
        >
          삭제
        </Button>
      </div>
      <p data-testid="collection-description">{collectionInfo?.description}</p>
      <MakeElementsHorizontal>
        <div>
          좋아요<span data-testid="countLikes">{collectionInfo?.likes}개</span>
        </div>
        <div>
          댓글
          <span data-testid="countComments">
            {collectionInfo?.commentNum}개
          </span>
        </div>
      </MakeElementsHorizontal>
      <MakeElementsHorizontal>
        <Button
          backgroundColor="white"
          color="black"
          onClick={() => onClickLikeBtn()}
        >
          좋아요
        </Button>
        <Button backgroundColor="white" color="black">
          댓글
        </Button>
      </MakeElementsHorizontal>
    </div>
  );
};

export default CollectionInformation;
const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
const MakeElementsHorizontal = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px auto;
`;
