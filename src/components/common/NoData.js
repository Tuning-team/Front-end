import logo_blur from "../../shared/svg/logo_blur.svg";
import styled from "styled-components";
import { getCookie } from "../../shared/cookie";
const NoData = () => {
  return (
    <Wrap>
      <P>아직 만들어진 튜닝이 없습니다 =_= </P>
      <img src={logo_blur}></img>
      <A
        href={getCookie("token") === undefined ? "/login" : "/myCollection/add"}
      >
        내튜닝 만들러 가기{" "}
      </A>
    </Wrap>
  );
};
export default NoData;

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
