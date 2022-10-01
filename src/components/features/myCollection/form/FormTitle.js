import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  deleteVideo,
  rememberData,
} from "../../../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";
import icon_back_enabled from "../../../../shared/icon/24_ena_back.svg";
//!enabled만들것!!!!!!!!!11
const FormTitle = ({ onClickHandler, btn, title, disabled }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <Wrap>
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
    </Wrap>
  );
};
export default FormTitle;
const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
  align-items: center;
`;

const TitleLogo = styled.h1`
  margin-top: 0.688rem;
  height: 1.625rem;
  font-size: 1.5rem;
  font-weight: bold;
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

const TitleSubmit = styled.button`
  all: unset;
  font-size: 1rem;
  font-weight: bold;
  width: 4rem;
  letter-spacing: -0.5px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${(props) =>
    props.disabled ? "var(--color-disabled)" : "var(--color-primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
