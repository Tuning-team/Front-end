import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CollectionInformation from "./CollectionInformation";
import CollectionVideoList from "./CollectionVideoList";

import styled from "styled-components";
import CommentList from "../comment/CommentList";
import CommentForm from "../comment/CommentForm";
import throttle from "lodash/throttle";


const CollectionWrap = () => {
  const param = useParams();
  const nav = useNavigate();

  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState(0);

  // const useHandleScroll = () => {
  //   // 스크롤에 따른 처리 로직
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop; //페이지 최상단으로부터 현재 스크롤의 위치(=총 스크롤한 높이값)
  //   const clientHeight = document.documentElement.clientHeight;
  //   // 위 세줄은 const { scrollHeight, scrollTop, clientHeight } = document.documentElement; 한줄로 표현가능
  //   console.log(scrollTop, clientHeight, scrollHeight);
  //   console.log("스크롤 이벤트 발생");
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     console.log("페이지 끝에 스크롤이 닫았음. ");
  //     setPage((prev) => prev + 1);
  //     setCount((prev) => prev + 3);
  //   }
  // };
  // console.log(page, count);
  // // const infiniteScroll = throttle(useHandleScroll, 1000);

  // useEffect(() => {
  //   // useEffect훅을 통해서 window이벤트 핸들러로 추가..
  //   window.addEventListener("scroll", useHandleScroll);
  //   return () => {
  //     // 반환이유? 이벤트 리스닝 혹은 리렌더에 따라 이벤트 리스너가 중첩되기 때문에 이전 리스너를 지워주는 동작을 같이 적용시켜줘야 한단다.
  //     window.removeEventListener("scroll", useHandleScroll);
  //   };
  // }, []);

  return (
    <Layout>
      <button onClick={() => nav(-1)}>뒤로가기</button>
      <CollectionInformation collectionId={param.collection_id} />
      <CollectionVideoList collectionId={param.collection_id} />

      {/* Comment Component 작업 중 */}
      <CommentForm collectionId={param.collection_id} />
      <CommentList collectionId={param.collection_id} />
    </Layout>
  );
};
export default CollectionWrap;
const Layout = styled.div`
  overflow-x: hidden;
  margin: 0.6rem;
`;
