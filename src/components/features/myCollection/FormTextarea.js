import styled from "styled-components";

const FormTextarea = ({ onChange, description }) => {
  return (
    <Wrap>
      <Label>설명</Label>
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
align-items
width: 20.938rem;
height: 10.5rem;
margin:0 0 1.25rem 0
`;
const TextArea = styled.textarea`
  border-radius: 8px;
  border: solid 1px #eee;
  width: 20.938rem;
  height: 8.75rem;
  font-size: 1.125rem;
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
