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
const FormTitle = ({ onClickHandler, btn, title, disabled }) => {
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

      <TitleSubmit disabled={disabled} onClick={onClickHandler}>
        {btn}
      </TitleSubmit>
    </Title>
  );
};
export default FormTitle;
const TitleLogo = styled.h1`
  margin-top: 0.688rem;
  height: 1.625rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: -1.2px;
`;
const IconBack = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
`;
const TitleSubmit = styled.button`
  all: unset;
  font-size: 0.625rem;
  font-weight: 500;
  width: 2.5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: ${(props) =>
    props.disabled ? "var(--color-disabled)" : "var(--color-primary)"};
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;
