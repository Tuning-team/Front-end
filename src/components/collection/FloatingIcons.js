import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon_more_white from "../../svg/icon_more_white.svg";

import { useDispatch } from "react-redux";
import { resetVideoId } from "../../redux/modules/tempCollectionSlice";
import { ReactComponent as BackspaceIcon } from "../../svg/icon_backspace.svg";

const FloatingIcons = ({ setModal, tabClicked }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  let iconColor = tabClicked ? "black" : "white";
  return (
    <HeadIconWrapper className="floating_icons">
      <div className="BackspaceIconWrapper">
        <BackspaceIcon
          fill={iconColor}
          onClick={() => {
            dispatch(resetVideoId());
            nav(-1);
          }}
        />
      </div>
      <MoreIconWrapper tabClicked={tabClicked}>
        <img
          src={icon_more_white}
          onClick={() => {
            setModal((prev) => !prev);
          }}
          alt="icon_more_white"
        />
      </MoreIconWrapper>
    </HeadIconWrapper>
  );
};

export default FloatingIcons;
const HeadIconWrapper = styled.div`
  position: absolute;
  /* position: relative; */
  z-index: 1;
  top: 0;
  left: 1rem;
  right: 0;
  display: flex;
  justify-content: space-between;

  & .BackspaceIconWrapper {
    display: flex;
    align-items: center;
  }
`;
const MoreIconWrapper = styled.div`
  visibility: ${(props) => (props.tabClicked ? "hidden" : "visible")};
`;
