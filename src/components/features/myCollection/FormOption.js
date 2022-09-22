import styled from "styled-components";

const FormOption = ({ onChange, category_id, categories }) => {
  return (
    <Wrap>
      <Label>
        카테고리<Required>*</Required>
      </Label>
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
`;

const Select = styled.select`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 2.5rem;
`;
const Option = styled.option`
  margin-bottom: 12px;
  border: #b295e9 solid 1px;
  border-radius: 3px;
  width: 21.438rem;
  height: 2.5rem;
  background-color: none;
`;
const Required = styled.p`
  color: #b295e9;
  margin-left: 5px;
`;
const Label = styled.label`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 123.8%;
  margin-bottom: 12px;
`;
