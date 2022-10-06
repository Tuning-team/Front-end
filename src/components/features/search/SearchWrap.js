import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  resetKeyword,
  resetSearchStatus,
} from "../../../redux/modules/searchSlice";
import Loading from "../../common/Loading";
import SearchInput from "../../common/SearchInput";
import MyCollections from "../myCollection/MyCollections";
import SearchKeyword from "./SearchKeyword";
import SearchNoData from "./SearchNodata";

// { Suspense, lazy }
const SearchWrap = () => {
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.searchSlice.search.data);
  const defaultPage = useSelector((state) => state.searchSlice.searchStatus);

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
      {!defaultPage ? (
        <SearchKeyword />
      ) : searchList.res.length === 0 ? (
        <SearchNoData />
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
