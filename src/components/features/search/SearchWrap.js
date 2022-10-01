import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { resetKeyword } from "../../../redux/modules/searchSlice";
import Loading from "../../common/Loading";
import SearchInput from "../../common/SearchInput";
import MyCollections from "../myCollection/MyCollections";

const SearchWrap = () => {
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searchSlice.data);
  const loading = useSelector((state) => state.searchSlice.loading);
  useEffect(() => {
    return () => {
      dispatch(resetKeyword());
    };
  }, []);
  return (
    <Container>
      <InputContainer>
        <SearchInput />
      </InputContainer>
      {loading ? (
        <Loading />
      ) : searchList.length === 0 ? (
        <StText>검색 결과가 없습니다.</StText>
      ) : (
        <MyCollections state={searchList.res} title={searchList.search} />
      )}
    </Container>
  );
};

export default SearchWrap;

const Container = styled.div`
  background-color: var(--color-background);
  min-height: 100vh;
`;
const InputContainer = styled.div`
  padding: 3rem 1.25rem 0 1.25rem;
`;
const StText = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 3.5rem;
  color: var(--color-disabled);
`;
