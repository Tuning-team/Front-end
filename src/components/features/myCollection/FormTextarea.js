import styled from "styled-components";

const FormTextarea = ({ onChange, description }) => {
  return (
    <Wrap>
      <Label>
        설명<Required>*</Required>
      </Label>
      <TextArea
        placeholder="컬랙션 설명을 넣어주세요"
        name="description"
        onChange={onChange}
        value={description}
      />
    </Wrap>
  );
};
export default FormTextarea;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 4.875rem;
`;
const Label = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 123.8%;
  margin-bottom: 12px;
`;
const Required = styled.p`
  color: #b295e9;
  margin-left: 5px;
`;
