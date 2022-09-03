import React from "react";
import Button from "../../elements/Button";
import styled from "styled-components";

const CollectionInformation = () => {
  const deleteThisCollection = () => {
    alert("진짜 지울거냐!!!");
    // todo 디스패치로 삭제 기능thunk가져오기
  };
  return (
    <div>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        출근하기 싫을 때 꺼내는 보물단지
      </h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          width="64px"
          height="1.5rem"
          onClick={() => deleteThisCollection()}
        >
          삭제
        </Button>
      </div>
      <p data-testid="collection-description">
        여러분...출근하기 싫잖아여....난 다알아...우리 이럴 때일수록 이거 보고
        다같이 힘내자요. 짜요
      </p>
      <MakeElementsHorizontal>
        <div>
          좋아요<span data-testid="count">128</span>
        </div>
        <div>
          댓글 <span data-testid="count">100</span>
        </div>
      </MakeElementsHorizontal>
      <MakeElementsHorizontal>
        <Button backgroundColor="white" color="black">
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
const MakeElementsHorizontal = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px auto;
`;
