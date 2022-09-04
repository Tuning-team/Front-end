import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useInputs from "../../hooks/useInput";
import icon_addvideo from "../../svg/icon_addvideo.svg";
import { useNavigate } from "react-router-dom";
import submit from "../../common/Confirm";

const AddCollectionForm = () => {
  //todo 검색하기를 하면 비디오이미지가 배열에 추가가 된다.
  const [addVideo, setAddVideo] = useState(null);
  const [{ collectionTitle, description, category }, onChange, reset] =
    useInputs({
      collectionTitle: "",
      description: "",
      category: "0",
    });
  //request
  //   {
  //     "category_id": "6312c45c65fc44c5a50ee0dd",
  //     "collectionTitle": "내가 좋아하는 영화 요약",
  //     "description": "내가 좋아하는 영화 요약을 모아봤습니다. ",
  //     "videos": ["6312c7b4d3084a7cb866bb9f", "6312c7b4d3084a7cb866bb9f", "6312c7b4d3084a7cb866bb99"]
  // }

  const nav = useNavigate();
  const onSubmitHandler = (e) => {
    console.log(collectionTitle, description, category);
    e.preventDefault();
    if (
      collectionTitle === "" ||
      description === "" ||
      // addVideo === null ||
      category === "0"
    ) {
      alert("모두 입력해주세요");
      return;
    } else {
      console.log("전송");
    }
  };
  const categoryList = [
    "여행",
    "일상",
    "엔터테이먼트/방송",
    "운동",
    "먹방/요리",
    "음악/플레이리스트",
    "동물",
    "뷰티/패션",
    "게임",
    "교육",
    "시사/정치/뉴스",
    "모빌리티",
    "자연",
    "경제",
    "공예/취미",
    "홈인테리어",
    "기타",
  ];
  const onClickHandler = () => {
    //공백이 있으면 리턴
  };
  //todo required 효과넣기
  //todo 버튼 disabled효과 주기

  return (
    <>
      <Title>컬렉션 만들기</Title>
      <Button
        onClick={() => {
          nav(-1);
          submit();
        }}
      >
        취소하기
      </Button>
      <Form onSubmit={onSubmitHandler}>
        <Button>추가하기</Button>
        <Input
          placeholder="컬랙션 제목을 입력하세요"
          name="collectionTitle"
          onChange={onChange}
          value={collectionTitle}
          required
        />
        <TextArea
          placeholder="컬랙션 설명을 넣어주세요"
          aria-label="description-input"
          name="description"
          onChange={onChange}
          value={description}
          required
        />
        <Select name="category" onChange={onChange} value={category}>
          <Option value="0">카테고리를 선택해주세요</Option>
          {categoryList?.map((option, idx) => {
            return (
              <Option value={option} key={idx}>
                {option}
              </Option>
            );
          })}
        </Select>
        <ImgBox>
          <div>
            {" "}
            영상을 추가해 주세요
            <img
              src={icon_addvideo}
              onClick={() => {
                nav("/mypage/add/search");
              }}
            ></img>
          </div>
          {addVideo?.map((img, idx) => {
            return <img key={idx} src={img} />;
          })}
        </ImgBox>
      </Form>
    </>
  );
};
export default AddCollectionForm;
const Title = styled.h1``;
const Form = styled.form``;
const TextArea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;
const ImgBox = styled.div`
  border-style: solid;
`;
