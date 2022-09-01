import React from "react";
import styled from "styled-components";
import CollectionList from "../../common/CollectionList";

const MyCollectionWrap = () => {
  return (
    <div>
      <TitleWrap>
        {" "}
        <Title>내 컬랙션</Title>
        {/* //todo 버튼은 로그인 아이디가 일치할때만 보이도록 */}
        <button>수정하기 </button>
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
