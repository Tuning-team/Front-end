import throttle from "lodash/throttle";
import { useState } from "react";

const useInfiniteScroll = () => {
  const [count, setCount] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const [hasNextPage, setNextPage] = useState(true);

  const useHandleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log("스크롤 이벤트 발생");
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("페이지 끝에 스크롤이 닫았음. ");
      setCount((prev) => prev + 5);
    }
  };
  const infiniteScroll = throttle(useHandleScroll, 2000);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  return { count, data, isFetching, hasNextPage };
};
export default useInfiniteScroll;
