import styled from "styled-components";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const CollectionList = () => {
  const [data, setData] = useState(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const state = [
    {
      collectionTitle: "우울할때 보는영상",
      id: 0,
      likes: 3,
      comments: 23,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
    {
      collectionTitle: "배고플때 보는영상",
      id: 1,
      likes: 3,
      comments: 23,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
    {
      collectionTitle: "웃긴영상 모음집",
      id: 2,
      likes: 5,
      comments: 21,
      thumbnail: [
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
        "https://via.placeholder.com/150x150",
      ],
    },
  ];

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
