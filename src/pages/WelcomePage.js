import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/common/Layout";
import icon_welcome from "../shared/svg/icon_welcome.svg";

const WelcomePage = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/mainPage");
    }, 2000);
  }, []);

  return (
    <Layout>
      <WelcomeLogo src={icon_welcome} />
    </Layout>
  );
};
export default WelcomePage;

const WelcomeLogo = styled.img`
  position: absolute;
  width: 15rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
