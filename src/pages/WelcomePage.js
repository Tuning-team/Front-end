import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/common/Layout";
import icon_welcome from "../shared/svg/icon_welcome.svg";
const WelcomePage = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 2000);
  }, []);

  return (
    <Layout>
      <Content src={icon_welcome}></Content>
    </Layout>
  );
};
export default WelcomePage;

const Content = styled.img`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15rem;
  height: 100vh;
  justify-content: center;
`;
