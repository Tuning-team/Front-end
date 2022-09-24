import styled from "styled-components";

const FormOption = ({ onChange, category_id, categories }) => {
  return (
    <Wrap>
      <Label>카테고리</Label>
      <Select name="category_id" onChange={onChange} value={category_id}>
        <Option value="0">카테고리를 선택해주세요</Option>
        {categories?.map((option, idx) => {
          return (
            <Option value={option._id} key={idx}>
              {option.categoryName}
            </Option>
          );
        })}
      </Select>
    </Wrap>
  );
};
export default FormOption;
const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items
width: 23.438rem;
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
const Select = styled.select`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 2.5rem;
`;
const Option = styled.option`
  width: 20.938rem;
  height: 3rem;
  margin: 0.125rem 0 0;
  border-radius: 8px;
  border: solid 1px #eee;
  font-size: 1.125rem;
`;
