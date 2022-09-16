import styled from "styled-components";
import { css, keyframes } from "styled-components";
import bg from "../svg/bg.svg";
import logo from "../svg/logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCategoryCollectionForMain } from "../redux/modules/collectionSlice";

const WelcomePage = () => {
  const todaysWeatherCategoryId = "631e7d7a4ae4c133c405a965"; //오늘 날씨에 추천하는
  const recommendedCategoryId = "631e7d7a4ae4c133c405a966"; // 바로 지금 추천하는
  const famousCategoryId = "6319aeebd1e330e86bbade9f"; //인기있는
  const recentCategoryId = "631e7d7a4ae4c133c405a964"; //새로운

  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 2000);
  }, []);

  // useEffect(() => {
  //   if (finalData.length === 0) {
  //     dispatch(getCategoryCollectionForMain(categoryId));
  //   }
  // }, [categoryId]);

  return (
    <Page>
      <Content>
        <Header>유투브를 내 마음대로</Header>
        <Main>알고리즘 튜닝</Main>
        <Sub>오직 나만을 위한 유투브 </Sub>
        <Img src="/images/애니메이션.png"></Img>
        <Imgs src="/images/애니메이션2.png"></Imgs>
      </Content>

      {/* <Logo src={logo} /> */}
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
  display: flex;
  flex-direction: column;
`;

const Header = styled.p`
  display: flex;
`;
const Main = styled.h1``;
const Sub = styled.p``;
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
  animation: ${rotation} 2s linear infinite;
  z-index: 2;
`;
const Imgs = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 50%;
  left: 10%;
  right: 10%;
  top: 50%;
`;
