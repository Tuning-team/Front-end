import styled from "styled-components";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const CollectionList = ({ state }) => {
  const [data, setData] = useState(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  useEffect(() => {
    setData([...state]);
  }, []);
  //!렌더링 총두번
  //todo 백그라운드 이미지로 바꿔주기
  //todo 데이터 연결후 해야할것 : pending상태 처리하기, 데이터 안들어올때 어떻게 할건지 useeffect, usecallback,
  return (
    <>
      <ListWrap>
        {data?.map((data, idx) => {
          return (
            <Collection key={idx}>
              <SlideWrap>
                <Test>
                  {" "}
                  {data.thumbnail?.map((src, i) => {
                    return <img src={src} key={i}></img>;
                  })}
                  <a>더보기...</a>
                </Test>
              </SlideWrap>

              <h3>{data.collectionTitle}</h3>
              <div>
                <span>좋아요 {data.likes}</span>
                <span>댓글 {data.comments}</span>
              </div>
            </Collection>
          );
        })}
      </ListWrap>
    </>
  );
};
export default CollectionList;

const Collection = styled.section`
  background-color: green;
`;
const SlideWrap = styled.div`
  overflow: hidden;

  flex-direction: row;
  background-color: white;
`;
const Img = styled.img``;
const Test = styled.div`
  overflow: auto;
  white-space: nowrap;
  .wrap-vertical::-webkit-scrollbar {
    display: none;
  }
`;
const ListWrap = styled.div`
  background-color: yellow;
`;
