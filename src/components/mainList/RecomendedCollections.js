import React from "react";
import CollectionSlide from "../../elements/CollectionSlide";
import styled from "styled-components";
const RecomendedCollections = () => {
  const arr = ["1", "2", "3", "4"];
  return (
    <>
      <Section>
        <div>
          <div>추천</div>
          <h1>가을 추천 튜닝 </h1>
          <h6>가을에 나들이하기 좋은 곳</h6>
        </div>
        <CollectionSlide>
          {arr.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
        </CollectionSlide>
      </Section>
    </>
  );
};
export default RecomendedCollections;

const Section = styled.div`
  background-color: pink;
  width: 375px;
  height: 371px;
`;
