import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Loading from "../../common/Loading";
import SearchInput from "./SearchInput";
import CollectionList from "../../common/CollectionList";

const SearchWrap = () => {
  const searchList = useSelector((state) => state.searchSlice.data);
  const loading = useSelector((state) => state.searchSlice.loading);

  return (
    <Container>
      <SearchInput backgroundColor={"#ffffff"} />
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
  background-color: #eeeef6;
  padding: 3.125rem 1.5rem 0 1.5rem;
  height: 100%;
  min-height: 100vh;
`;

const StText = styled.p`
  font-size: 1rem;
  text-align: center;
`;
//! 가져온 배열(indexof는 string에서)에서 원하는 값을 추출하는 로직(찾는문자열 없으면 -1, 대소문자 구분함..)
// const searchResult = searchList?.filter(
//   (data) =>
//     data.collectionTitle.indexOf(search) !== -1 ||
//     data.description.indexOf(search) !== -1
// );
