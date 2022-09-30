import styled from "styled-components";
import smallGoIcon from "../../../shared/svg/10_ena_go.svg";

const SeeMore = (props) => {
  return (
    <StyleSeeMore onClick={props.onClick}>
      {props.children} <img src={smallGoIcon} alt="더보기" />
    </StyleSeeMore>
  );
};
export default SeeMore;

const StyleSeeMore = styled.p`
  margin: auto 0 0 0;
  font-size: 0.75rem;
  font-weight: normal;
  letter-spacing: -0.3px;
  color: #572cff;
  height: 1.43rem;

  & img {
    width: 0.625rem;
    height: 0.625rem;
  }
`;
