import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useInputs from "../../hooks/useInput";
import icon_addvideo from "../../svg/icon_addvideo.svg";
import { useNavigate } from "react-router-dom";

const AddCollectionForm = () => {
  const [disabled, setDisabled] = useState(true);
  //todo 검색하기를 하면 비디오이미지가 배열에 추가가 된다.
  const [addVideo, setAddVideo] = useState(null);
  const [{ title, description }, onChange, reset] = useInputs({
    title: "",
    description: "",
  });
  const nav = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const category = [
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
    nav("/mypage/add/search");
  };
  //todo required 효과넣기
  //todo 버튼 disabled효과 주기
  // if (title === "" || description === "" || addVideo === null) {
  //   setDisabled(true);
  // } else {
  //   setDisabled(false);
  // }

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Title>컬렉션 만들기</Title>
        <Button>취소하기</Button>
        <Button disabled={disabled}>추가하기</Button>
        <Input
          placeholder="컬랙션 제목을 입력하세요"
          data-testid="title-input"
          name="title"
          onChange={onChange}
          value={title}
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
        <Select name="category">
          <Option value="0">카테고리를 선택해주세요</Option>
          {category?.map((option, idx) => {
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
            <img src={icon_addvideo} onClick={onClickHandler}></img>
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
