import styled from "styled-components";
import { getCookie } from "../../../shared/cookie";
const SearchNoData = () => {
  return (
    <Wrap>
      <P> 새로운 튜닝을 만들어보세요! </P>
      <A
        href={getCookie("token") === undefined ? "/login" : "/myCollection/add"}
      >
        내튜닝 만들러 가기{" "}
      </A>
    </Wrap>
  );
};
export default SearchNoData;

const Wrap = styled.div`
  background-color: var(--color-background);
  width: 22rem;
  height: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const P = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  color: white;
`;
const A = styled.a`
  color: var(--color-disabled);
  margin-top: 3rem;
`;
