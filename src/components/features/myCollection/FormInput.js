import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormInput = ({ onChange, collectionTitle }) => {
  return (
    <Wrap>
      <Label>
        제목 <Required>*</Required>
      </Label>
      <Input
        placeholder="컬랙션 제목을 입력하세요"
        name="collectionTitle"
        onChange={onChange}
        value={collectionTitle}
      />
    </Wrap>
  );
};
export default FormInput;
const Label = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 123.8%;
  margin-bottom: 12px;
`;
const Input = styled.input`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  width: 21.438rem;
  height: 2.5rem;
  border-radius: 3px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Required = styled.p`
  color: #b295e9;
  margin-left: 5px;
`;
