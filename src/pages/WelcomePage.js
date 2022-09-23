import styled from "styled-components";
import { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Vector from "../shared/svg/Vector.svg";
import Frame from "../shared/svg/Frame.svg";
import Layout from "../components/common/Layout";
const WelcomePage = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 2000);
  }, []);

  return (
    <Layout>
      <Content>
        <Header>Welcome to</Header>

        <Img src={Vector}></Img>
        <Imgs src={Frame}></Imgs>
      </Content>
    </Layout>
  );
};
export default WelcomePage;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const Header = styled.span`
  display: flex;
  font: normal normal bold 24px Roboto;
`;

const rotation = keyframes`
  from{
    //transform: scale(1.1);
    // transform: rotate(0deg)
  }
  to{
    // transform: rotate(360deg)
  }
`;

const Img = styled.img`
  //animation: ${rotation} 1s infinite;
  z-index: 2;
  width: 11rem;
  position: absolute;
  padding: 17.887rem 3.012rem 20.137rem 3rem;
  transform: rotate(250deg);
  right: 23%;
  left: 23%;
  top: 7%;
  bottom: 7%;
`;
const Imgs = styled.img`
  width: 17.414rem;
  height: 5.682rem;
  margin: 0.502rem 0 2.179rem 0.012rem;
`;
