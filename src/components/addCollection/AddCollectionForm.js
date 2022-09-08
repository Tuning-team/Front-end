import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useInputs from "../../hooks/useInput";
import icon_addvideo from "../../svg/icon_addvideo.svg";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  postCollection,
} from "../../redux/modules/collectionSlice";

const AddCollectionForm = () => {
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.myCollectionSlice.category.data
  );
  const videoList = useSelector((state) => state.myCollectionSlice.videoList);

  const [{ collectionTitle, description, category_id }, onChange, reset] =
    useInputs({
      collectionTitle: localStorage.getItem("title")
        ? localStorage.getItem("title")
        : "",
      description: localStorage.getItem("description")
        ? localStorage.getItem("description")
        : "",
      category_id: "0",
    });
  const videos = videoList.map((x) => x.videoId);
  const addData = { category_id, collectionTitle, description, videos };

  const onSubmitHandler = (e) => {
    console.log(videos);
    console.log(addData);
    e.preventDefault();
    if (
      collectionTitle === "" ||
      description === "" ||
      videoList.length === 0 ||
      category_id === "0"
    ) {
      alert("모두 입력해주세요");
      return;
    } else {
      alert("컬렉션이 생성되었습니다.");
      dispatch(postCollection(addData));
      window.location.href = "/mypage";
      localStorage.removeItem("title");
      localStorage.removeItem("description");
    }
  };
  //todo required 효과넣기
  //todo 버튼 disabled효과 주기

  return (
    <>
      <Title>컬렉션 만들기</Title>
      <Button
        onClick={() => {
          nav(-1);
          localStorage.removeItem("title");
          localStorage.removeItem("description");
          localStorage.removeItem("description");
        }}
      >
        취소하기
      </Button>
      <Form onSubmit={onSubmitHandler}>
        <Button>확인</Button>
        <Input
          placeholder="컬랙션 제목을 입력하세요"
          name="collectionTitle"
          onChange={onChange}
          value={collectionTitle}
        />
        <TextArea
          placeholder="컬랙션 설명을 넣어주세요"
          name="description"
          onChange={onChange}
          value={description}
        />
        <Select name="category_id" onChange={onChange} value={category_id}>
          <Option value="0">카테고리를 선택해주세요</Option>
          {categories?.map((option, idx) => {
            return (
              <Option value={option._id} key={idx}>
                {option.categoryName}
              </Option>
            );
          })}
        </Select>
        <ImgBox>
          <div>
            {" "}
            영상을 추가해 주세요
            <Icon
              src={icon_addvideo}
              onClick={() => {
                localStorage.setItem("title", collectionTitle);
                localStorage.setItem("description", description);
                nav("/mypage/add/search");
              }}
            ></Icon>
          </div>
          {videoList?.map((x, idx) => {
            return <div key={idx}>{x.title}</div>;
          })}
        </ImgBox>
      </Form>
    </>
  );
};
export default AddCollectionForm;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea``;
const Select = styled.select``;
const Option = styled.option``;
const ImgBox = styled.div`
  border-style: solid;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
