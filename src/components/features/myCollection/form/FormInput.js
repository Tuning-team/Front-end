import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormInput = ({ onChange, collectionTitle }) => {
  return (
    <Wrap>
      <Label>제목</Label>
      <Input
        placeholder="컬렉션 제목을 입력하세요"
        name="collectionTitle"
        onChange={onChange}
        value={collectionTitle}
        maxLength="15"
      />
    </Wrap>
  );
};
export default FormInput;
const Wrap = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items
  height: 6rem;
  margin:0 0 1.25rem 0

`;
const Label = styled.label`
  display: flex;
  align-items: center;
  height: 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.9px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 5px;
  // margin-bottom: 0.125rem;
  border-radius: 8px;
  border: solid 1px #eee;
  background-color: #fff;
  font-size: 1.125rem;
  &:focus {
    outline-color: var(--color-primary);
  }
`;
