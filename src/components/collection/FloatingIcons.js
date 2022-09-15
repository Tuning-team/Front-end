import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon_more_white from "../../svg/icon_more_white.svg";
import icon_backspace from "../../svg/icon_backspace.svg";

const FloatingIcons = ({ setModal }) => {
  const nav = useNavigate();
  return (
    <HeadIconWrapper className="floating_icons">
      <img src={icon_backspace} alt="icon_backspace" onClick={() => nav(-1)} />
      <img
        src={icon_more_white}
        onClick={() => {
          setModal((prev) => !prev);
        }}
        alt="icon_more_white"
      />
    </HeadIconWrapper>
  );
};

export default FloatingIcons;
const HeadIconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 1rem;
  right: 0;
  display: flex;
  justify-content: space-between;
`;