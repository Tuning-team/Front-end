import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  postCollection,
} from "../../../redux/modules/collectionSlice";
import useInputs from "../../hooks/useInput";
import icon_backspace_black from "../../../shared/svg/icon_backspace.svg";
import icon_add from "../../../shared/svg/icon_add.svg";

const AddCollectionForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.myCollectionSlice.category.data
  );
  const videoList = useSelector((state) => state.myCollectionSlice.videoList);
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const videos = videoList.map((x) => x.videoId);
  const [{ collectionTitle, description, category_id }, onChange, reset] =
    useInputs({
      collectionTitle: localStorage.getItem("title")
        ? localStorage.getItem("title")
        : "",
      description: localStorage.getItem("description")
        ? localStorage.getItem("description")
        : "",
      category_id: localStorage.getItem("category")
        ? localStorage.getItem("category")
        : "",
    });
  const addData = { category_id, collectionTitle, description, videos };

  const onClickHandler = (e) => {
    if (
      collectionTitle === "" ||
      description === "" ||
      videoList.length === 0 ||
      category_id === "0"
    ) {
      alert("모두 입력해주세요");
      return;
    } else {
      dispatch(postCollection(addData));
      localStorage.removeItem("title");
      localStorage.removeItem("description");
      localStorage.removeItem("category");
    }
  };

  return (
    <AddCollectionWrap>
      <TitleBox>
        <Backspace
          onClick={() => {
            nav(-1);
            localStorage.removeItem("title");
            localStorage.removeItem("description");
            localStorage.removeItem("description");
            localStorage.removeItem("category");
          }}
          src={icon_backspace_black}
        ></Backspace>
        <Title>컬렉션 만들기</Title>

        <Btn onClick={onClickHandler}>확인</Btn>
      </TitleBox>

      <Form>
        <Wrap>
          <Label>
            제목 <Required>*</Required>
          </Label>
          <Input
            placeholder="컬랙션 제목을 입력하세요"
            name="collectionTitle"
            onChange={onChange}
            value={collectionTitle}
          />
        </Wrap>
        <Wrap>
          <Label>
            카테고리<Required>*</Required>
          </Label>
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
        </Wrap>
        <Wrap>
          {" "}
          <Label>
            설명<Required>*</Required>
          </Label>
          <TextArea
            placeholder="컬랙션 설명을 넣어주세요"
            name="description"
            onChange={onChange}
            value={description}
          />
        </Wrap>
        <Wrap>
          <Label>
            영상추가<Required>*</Required>
          </Label>
          <AddVideoBox>
            <StVideo
              onClick={() => {
                localStorage.setItem("title", collectionTitle);
                localStorage.setItem("description", description);
                localStorage.setItem("category", category_id);
                nav("/mypage/add/search");
              }}
            >
              <Icon src={icon_add} />
            </StVideo>
            {videoList?.map((x, idx) => {
              return (
                <VideoList key={idx}>
                  <Span>- </Span>
                  {x.title}
                </VideoList>
              );
            })}
          </AddVideoBox>
        </Wrap>
      </Form>
    </AddCollectionWrap>
  );
};
export default AddCollectionForm;
const AddCollectionWrap = styled.div`
  padding: 1.3rem 1.3rem 1.3rem 1rem;
  margin-bottom: 5rem;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Backspace = styled.img`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Btn = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 123.8%;
  padding: 5px;
`;
const Required = styled.p`
  color: #b295e9;
  margin-left: 5px;
`;
const Label = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 123.8%;
  margin-bottom: 12px;
`;
const Input = styled.input`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  width: 21.438rem;
  height: 2.5rem;
  border-radius: 3px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 4.875rem;
`;
const Select = styled.select`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 2.5rem;
`;
const Option = styled.option`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 2.5rem;
  background-color: none;
`;
const AddVideoBox = styled.div`
  border-style: solid;
  width: 343px;
  height: 40px;
`;
const StVideo = styled.div`
  width: 21.438rem;
  height: 3.125rem;
  border: #b295e9 solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const VideoList = styled.div`
  margin-top: 1.5rem;
  width: 21.438rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Span = styled.span`
  color: #b295e9;
`;
