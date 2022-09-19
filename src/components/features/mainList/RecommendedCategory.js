import styled from "styled-components";

const RecommendedCategory = () => {
  return (
    <Wrap>
      <Title>추천 카테고리</Title>
      <p>더보기</p>
      <section>
        <div>
          <button>바로가기</button>
        </div>
        <div>
          <button>바로가기</button>
        </div>
        <div>
          <button>바로가기</button>
        </div>
        <div>
          <button>바로가기</button>
        </div>
      </section>
    </Wrap>
  );
};
export default RecommendedCategory;
const Title = styled.div``;
const Wrap = styled.div`
  border: 1px solid black;
`;
