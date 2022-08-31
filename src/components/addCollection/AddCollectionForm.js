import React from "react";
import styled from "styled-components";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const AddCollectionForm = () => {
  return (
    <Form>
      <Input placeholder="컬렉션 제목을 입력하세요" />
      <Input type="select" placeholder="컬렉션 제목을 입력하세요" />
      <Button>추가하기 </Button>
    </Form>
  );
};
export default AddCollectionForm;

const Form = styled.form``;
