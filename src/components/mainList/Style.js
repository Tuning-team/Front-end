import styled from "styled-components";

export const Section = styled.div`
  margin-left: 1rem;
  margin-top: 2.625rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.24;

    margin-bottom: 1.313rem;

    /* background-color: pink; */
  }
`;

export const RecommendTitle = styled.div`
  position: absolute;
  z-index: 1;
  left: 1rem;
  top: 16.2rem;
  display: flex;
  flex-direction: column;

  & .recommendMark {
    border: 1px solid white;
    border-radius: 3px;

    width: 2.313rem;
    height: 1.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 0.438rem;
    & span {
      font-size: 0.75rem;
      line-height: 1.24;

      color: white;
    }
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.24;
    color: white;

    margin-bottom: 0.438rem;
  }

  & h6 {
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 1.24;
    color: white;
  }
`;
