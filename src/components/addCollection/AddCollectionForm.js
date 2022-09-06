import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useInputs from "../../hooks/useInput";
import icon_addvideo from "../../svg/icon_addvideo.svg";
import { useNavigate } from "react-router-dom";
import submit from "../../common/Confirm";
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

  const [addVideo, setAddVideo] = useState(null);
  const [{ collectionTitle, description, category_id }, onChange, reset] =
    useInputs({
      collectionTitle: "",
      description: "",
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
      // addVideo === null ||
      category_id === "0"
    ) {
      alert("모두 입력해주세요");
      return;
    } else {
      console.log("전송");
      dispatch(postCollection(addData));
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
          //confirm test
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
const Form = styled.form``;
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
