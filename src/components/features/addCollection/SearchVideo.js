import React, { useState } from "react";
import useInputs from "../../hooks/useInput";
import { getVideo } from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import Frame from "../../../shared/svg/logo_without_triangle.svg";
import icon_back_enabled from "../../../shared/svg/24_ena_back.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../common/elements/SearchInput";
import Icon_search from "../../../shared/svg/24_ena_search.svg";
import ToastNotification from "../../common/ToastNotification";
const SearchVideo = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [toastState, setToastState] = useState(false);

  const [{ keyword }, onChange, reset] = useInputs({
    keyword: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setToastState(true);
      return;
    }
    const token = null;
    const key = null;
    dispatch(getVideo({ keyword, token, key }));
    localStorage.setItem("keyword", keyword);
    reset();
  };

  return (
    <>
      <Title>
        <IconBack src={icon_back_enabled} alt="icon" onClick={() => nav(-1)} />
        <TitleLogo src={Frame} alt="icon" />
        <TitleSubmit></TitleSubmit>
      </Title>
      <Form width="auto" onSubmit={onSubmitHandler}>
        <StInput
          backgroundColor={"#EEEEF6"}
          onChange={onChange}
          name="keyword"
          value={keyword}
          type="text"
          placeholder="찾고싶은 영상을 검색해보세요."
        />
        <StBtn type="submit">
          <StBtnImg src={Icon_search} />
        </StBtn>
        {toastState && (
          <ToastNotification setToastState={setToastState}>
            검색어를 입력해주세요
          </ToastNotification>
        )}
      </Form>
    </>
  );
};
export default SearchVideo;
const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
`;
const IconBack = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const TitleLogo = styled.img`
  margin-top: 0.688rem;
  height: 1.625rem;
`;
const TitleSubmit = styled.div`
  font-size: 0.625rem;
  font-weight: 500;
  width: 2.5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: var(--color-disabled);

  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  // border-top: solid var(--color-background) 1px;
  // border-bottom: solid var(--color-background) 1px;
  // padding: 1.125rem 1.5rem 3.1rem 1.5rem;
  // position: relative;
  // width: ${(props) => props.width || "20.438rem"};
  padding: 1.125rem 1.5rem 2.1rem 1.5rem;
  position: relative;
  width: auto;
`;

const StInput = styled.input`
  background-color: #eeeef6;
  padding: 0.375rem 1rem;
  border-radius: 18px;
  width: 100%;
  height: 2.25rem;
  box-sizing: border-box;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  &::placeholder {
    color: #adadad;
  }
  /* &:focus {
    outline-color: var(--color-primary);
  } */
`;

const StBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 2.5rem;
  top: 37px;
  transform: translate(0, -50%);
`;
const StBtnImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
