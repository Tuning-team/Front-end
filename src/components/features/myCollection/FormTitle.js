import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  deleteVideo,
  rememberData,
} from "../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import icon_back_enabled from "../../../shared/svg/icon_back_enabled.svg";
//!enabled만들것!!!!!!!!!11
const FormTitle = ({ onClickHandler, btn, title }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <Title>
      <IconBack
        onClick={() => {
          dispatch(rememberData([]));
          dispatch(deleteVideo("all"));
          nav(-1);
        }}
        src={icon_back_enabled}
      ></IconBack>
      <TitleLogo>{title}</TitleLogo>

      <TitleSubmit onClick={onClickHandler}>{btn}</TitleSubmit>
    </Title>
  );
};
export default FormTitle;
const TitleLogo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 123.8%;
  padding: 5px;
`;
const IconBack = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%
height: 3rem;
padding: 0.688rem 0 0;
background-color: #fff;
border-bottom: 1px solid #EEEEF6;
`;
const TitleSubmit = styled.p`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adadad;
  margin: 0 3px 0 0;
`;
