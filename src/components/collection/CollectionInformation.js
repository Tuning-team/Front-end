import React from "react";
import styled from "styled-components";
import { instance } from "../../shared/instance";
import { useState, useEffect } from "react";
import Button from "../../elements/Button";

// import orders : React > package > modules > hooks > component > css
// logis orders : useState > useRef > dispatch > navigate > useSelector > extra..
const CollectionInformation = ({ collectionId }) => {
  const [collectionInfo, setCollectionInfo] = useState(null);

  // todo 나중에 redux로 옮길 내용
  const fetchTestData = async () => {
    const testData = await instance.get("/collections");
    setCollectionInfo(testData.data);
  };

  useEffect(() => {
    fetchTestData();
  }, []);
  console.log(collectionInfo);
  console.log(typeof collectionId);

  const deleteThisCollection = () => {
    alert("진짜 지울거냐!!!");
    // todo 디스패치로 삭제 기능thunk가져오기
  };

  // ! 어떤 방식으로 화면에서 그려줄건지 생각해보기
  let test = collectionInfo?.filter((elem) => elem._id === collectionId);
  console.log(...test);
  return (
    <div>
      {collectionInfo?.map((elem) => {
        if (elem._id === collectionId) {
          return (
            <h1 key={elem._id} style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {elem.collectionTitle}
            </h1>
          );
        }
        return null;
      })}

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
          좋아요<span data-testid="countLikes">128</span>
        </div>
        <div>
          댓글 <span data-testid="countComments">100</span>
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
