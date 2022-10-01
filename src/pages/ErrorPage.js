import { useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import Button from "../components/common/elements/Button";
import { ReactComponent as Logo } from "../shared/svg/logo_without_triangle.svg";
import errorImg from "../shared/images/error_triangle.webp";
import styled from "styled-components";

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <Layout>
      <Container>
        <img src={errorImg} alt="error_triangle" />
        <button onClick={() => nav("/mainPage")}>메인 페이지로 돌아가기</button>
        <p>
          죄송합니다. <br />
          예상치 못한 에러가 발생했습니다. <br />
          다시 시도해주세요.
        </p>
      </Container>
      <StyleLogo />
    </Layout>
  );
};
export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & img {
    width: 9.313rem;
    height: auto;
  }
  & button {
    width: 16.031rem;
    height: 2.5rem;
    border-radius: 20px;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    font-size: 1rem;
    font-weight: bold;
    &:hover,
    &:active {
      background-color: gainsboro;
    }
  }
  & p {
    color: var(--color-disabled);
    font-size: 0.875rem;
    font-weight: bold;
  }
`;
const StyleLogo = styled(Logo)`
  position: absolute;
  bottom: 2.85rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
`;
