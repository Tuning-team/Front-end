import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <GlobalBtnStyle
      // 버튼 속성
      type={props.type}
      value={props.value}
      onClick={props.onClick}
      disabled={props.disabled}
      // 버튼 css
      width={props.width}
      height={props.height}
      border={props.border}
      color={props.color}
      backgroundColor={props.backgroundColor}
      font-size={props.fontSize}
      font-weight={props.fontWeight}
    >
      {props.children}
    </GlobalBtnStyle>
  );
};
export default Button;
const GlobalBtnStyle = styled.button`
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "44px"};

  border-radius: 25px;
  border: ${(props) => props.border || "1px solid black"};
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.backgroundColor || "black"};

  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWize || 500};

  display: ${(props) => props.display || "block"};

  padding: 0px 10px;
  margin: 0;
  text-align: center;
  cursor: pointer;
`;
