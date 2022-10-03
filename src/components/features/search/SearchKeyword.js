import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getList,
  getPopularSearchKeyword,
} from "../../../redux/modules/searchSlice";

const PopularKeyword = () => {
  const dispatch = useDispatch();
  const keywordsList = useSelector(
    (state) => state.searchSlice.popularkeywords.data
  );

  const onSearchClickedKeyword = (keyword) => {
    dispatch(getList(keyword));
  };

  useEffect(() => {
    dispatch(getPopularSearchKeyword());
  }, []);
  return (
    <Container>
      <h1>인기 검색어</h1>
      <KeywordContainer>
        {keywordsList?.map((keyword, idx) => (
          <h6 key={idx} onClick={() => onSearchClickedKeyword(keyword.keyword)}>
            {keyword.keyword}
          </h6>
        ))}
      </KeywordContainer>
    </Container>
  );
};
export default PopularKeyword;
const Container = styled.div`
  margin: 1.25rem;
  & h1 {
    font-size: 1rem;
    font-weight: bold;
  }
`;
const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
  & h6 {
    background-color: white;
    border-radius: 20px;
    color: #808080;
    font-size: 0.875rem;
    font-family: "Noto Sans KR";
    line-height: 1.5;
    padding: 0 0.5rem;

    &:hover,
    &:active {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
