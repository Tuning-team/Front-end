import React from "react";
import styled from "styled-components";
import CollectionList from "../../common/CollectionList";
import Button from "../../elements/Button";

const MyCollectionWrap = () => {
  const mockData = [
    {
      collectionTitle: "우울할때 보는영상",
      id: 0,
      likes: 3,
      comments: 23,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
    {
      collectionTitle: "배고플때 보는영상",
      id: 1,
      likes: 3,
      comments: 23,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
    {
      collectionTitle: "웃긴영상 모음집",
      id: 2,
      likes: 5,
      comments: 21,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
  ];

  return (
    <div>
      <TitleWrap>
        {" "}
        <Title>내 컬랙션</Title>
        {/* //todo 버튼은 로그인 아이디가 일치할때만 보이도록 */}
        <Button>추가하기</Button>
      </TitleWrap>
      <CollectionList state={mockData} />
    </div>
  );
};
export default MyCollectionWrap;

const TitleWrap = styled.div`
  background-color: pink;
`;
const Title = styled.h1``;
