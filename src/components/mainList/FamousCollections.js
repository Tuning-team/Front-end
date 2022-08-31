import React from "react";
import styled from "styled-components";

const FamousCollections = () => {
  return (
    <section>
      <H1>인기있는 컬렉션들</H1>
      <CollectionList>
        <ACollection>
          <ThumbnailContainer>
            <ThumbnailImg />
          </ThumbnailContainer>
          <span>컬렉션 이름</span>
        </ACollection>
      </CollectionList>
    </section>
  );
};
export default FamousCollections;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;
const CollectionList = styled.div`
  display: flex;
`;
const ACollection = styled.div`
  border: 1px solid red;
  width: calc(50%);
`;
const ThumbnailContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const ThumbnailImg = styled.div`
  width: 150px;
  height: 150px;
  background-color: gainsboro;
`;
