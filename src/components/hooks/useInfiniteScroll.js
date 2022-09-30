// import throttle from "lodash/throttle";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getMyCollection } from "../redux/modules/collectionSlice";
// import Skeleton from "../../components/features/myCollection/Skeleton";

// const useInfiniteScroll = () => {
//   const [count, setCount] = useState(0);
//   const [isFetching, setFetching] = useState(false);
//   const [hasNextPage, setNextPage] = useState(true);

//   const useHandleScroll = () => {
//     const dispatch = useDispatch();
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const clientHeight = document.documentElement.clientHeight;
//     console.log("스크롤 이벤트 발생");
//     if (scrollTop + clientHeight >= scrollHeight) {
//       console.log("페이지 끝에 스크롤이 닫았음. ");
//       setCount((prev) => prev + 5);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", infiniteScroll);
//     return () => {
//       window.removeEventListener("scroll", infiniteScroll);
//     };
//   }, []);

//   useEffect(() => {
//     dispatch(getMyCollection(count));
//   }, [count]);

//   const infiniteScroll = throttle(useHandleScroll, 1000);

//   return { count, isFetching, hasNextPage };
// };
// export default useInfiniteScroll;
