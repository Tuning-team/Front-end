import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loading from "../../common/Loading";
import SearchInput from "../../common/elements/SearchInput";
import CollectionList from "../../common/CollectionList";

const SearchWrap = () => {
  const searchList = useSelector((state) => state.searchSlice.data);
  const loading = useSelector((state) => state.searchSlice.loading);

  return (
    <Container>
      <SearchInput />
      <div>
        {loading ? (
          <Loading />
        ) : searchList.length === 0 ? (
          <StText>검색 결과가 없습니다.</StText>
        ) : (
          <CollectionList state={searchList} title="ㅤ검색한" />
        )}
      </div>
    </Container>
  );
};

export default SearchWrap;

const Container = styled.div`
  background-color: var(--color-background);
  padding: 3.125rem 1.5rem 0 1.5rem;
  min-height: 100vh;
`;

const StText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 3.5rem;
  color: var(--color-disabled);
`;
