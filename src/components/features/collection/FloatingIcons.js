import React from "react";
import styled from "styled-components";
import { resetVideoId } from "../../../redux/modules/tempCollectionSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as BackspaceIcon } from "../../../shared/svg/icon_backspace.svg";
import icon_more_white from "../../../shared/svg/icon_more_white.svg";

const FloatingIcons = ({ setModal, tabClicked }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  let iconColor = tabClicked ? "black" : "white";

  return (
    <HeadIconWrapper className="floating_icons" tabClicked={tabClicked}>
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
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;

  & .BackspaceIconWrapper {
    display: flex;
    align-items: center;
  }

  background: linear-gradient(
    ${(props) =>
      props.tabClicked ? "transparent" : "to bottom, black, transparent"}
  );
`;
const MoreIconWrapper = styled.div`
  visibility: ${(props) => (props.tabClicked ? "hidden" : "visible")};
`;
