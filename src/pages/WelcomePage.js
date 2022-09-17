import styled from "styled-components";
import { keyframes } from "styled-components";
import bg from "../svg/bg.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Vector from "../svg/Vector.svg";

const WelcomePage = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 2000);
  }, []);

  return (
    <Page>
      <Content>
        <Header>유투브를 내 마음대로</Header>
        <Main>알고리즘 튜닝</Main>
        <Sub>오직 나만을 위한 유투브 </Sub>
        <Img
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            bottom: "10%",
            left: "45%",
          }}
          src={Vector}
        ></Img>
        <Imgs src="/images/Frame.png"></Imgs>
      </Content>
    </Page>
  );
};
export default WelcomePage;

const Page = styled.div`
  background-image: url("${bg}");
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-size: cover;
  color: white;
`;
const Content = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.p`
  display: flex;
  font-size: 20px;
  margin: 7px;
  font-weight: 100;
`;
const Main = styled.h1`
  font-size: 24px;
  margin: 7px;
`;
const Sub = styled.p`
  font-size: 15px;
  margin: 3px;
  font-weight: 100;
`;
const Logo = styled.img`
  display: flex;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const Img = styled.img`
  animation: ${rotation} 3s linear infinite;
  z-index: 2;
`;
const Imgs = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 10%;
  left: 40%;
`;
