import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;
export default Button;
