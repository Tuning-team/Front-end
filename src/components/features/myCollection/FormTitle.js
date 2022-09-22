import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  deleteVideo,
  rememberData,
} from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import icon_backspace_black from "../../../shared/svg/icon_backspace_black.svg";

const FormTitle = ({ onClickHandler, btn, title }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <TitleBox>
      <Backspace
        onClick={() => {
          dispatch(rememberData([]));
          dispatch(deleteVideo("all"));
          nav(-1);
        }}
        src={icon_backspace_black}
      ></Backspace>
      <Title>{title}</Title>

      <Btn onClick={onClickHandler}>{btn}</Btn>
    </TitleBox>
  );
};
export default FormTitle;
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const Backspace = styled.img`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 123.8%;
  padding: 5px;
`;
