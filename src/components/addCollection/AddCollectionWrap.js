import React from "react";
import styled from "styled-components";

import AddCollectionForm from "./AddCollectionForm";

const AddCollectionWrap = () => {
  return (
    <>
      <Title>컬렉션 만들기</Title>
      <AddCollectionForm />
    </>
  );
};
export default AddCollectionWrap;

const Title = styled.h1``;
