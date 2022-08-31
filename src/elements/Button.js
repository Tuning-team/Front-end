import styled from "styled-components";

export const StBtn = styled.button`


  cursor: pointer;

  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;