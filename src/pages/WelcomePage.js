import styled from "styled-components";
import bg from "../svg/bg.svg";
import logo from "../svg/logo.svg";
const WelcomePage = () => {
  return (
    <Page>
      <Wrap>
        <Content>
          <Header>유투브를 내 마음대로</Header>
          <Main>알고리즘 튜닝</Main>
          <Sub>오직 나만을 위한 유투브 </Sub>
        </Content>
      </Wrap>
      <Logo src={logo} />
    </Page>
  );
};
export default WelcomePage;

const Page = styled.div`
  background-image: url("${bg}");
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Content = styled.div`
  display: flex;
`;
const Wrap = styled.div`
  display: flex;
`;
const Header = styled.p``;
const Main = styled.h1``;
const Sub = styled.p``;
const Logo = styled.img`
  display: flex;
`;
