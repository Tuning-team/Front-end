import React from "react";
import styled from "styled-components";
import { getCookie } from "../../../shared/util/cookie";

const SearchNoData = () => {
  return (
    <Wrap>
      <P>검색 결과가 존재하지 않습니다.</P>
      <P>나만의 새로운 튜닝을 만들어 볼까요?</P>
      <A
        href={getCookie("token") === undefined ? "/login" : "/myCollection/add"}
      >
        내 튜닝 만들러 가기{" "}
      </A>
    </Wrap>
  );
};
export default SearchNoData;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;
const P = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  color: #808080;
`;
const A = styled.a`
  color: var(--color-disabled);
  margin-top: 3rem;
`;
