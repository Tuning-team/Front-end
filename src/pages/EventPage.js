import Navbar from "../components/common/Navbar";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Headers from "../components/common/Headers";
import HeaderLogo from "../components/features/myCollection/HeaderLogo";
import eventPage from "../shared/svg/eventPage.png";
const EventPage = () => {
  return (
    <>
      <HeaderLogo />
      <Wrap>
        <Contents>
          <Date>기간: 9.27(화)~ 10.1(토)</Date>
          <ClickBox
            onClick={() =>
              (window.location.href =
                "https://docs.google.com/forms/d/e/1FAIpQLSe28mHn_ciGYYe6wJ4Mh94-63tP264TZJFpxINHfL9qXNFTtQ/viewform?usp=send_form")
            }
          >
            👉
          </ClickBox>
        </Contents>
      </Wrap>

      <Navbar />
    </>
  );
};
export default EventPage;

const alert = keyframes`
from {
    transform: translate(-10px);
  }
  to {
    transform: translate(0);
  }
`;

const Wrap = styled.div`
  height: 37rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Contents = styled.div`
  background-image: url(${eventPage});
  height: 100%;
  display: flex;
  background-size: cover;
  width: 23em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5rem;
`;
const Date = styled.div`
  margin-top: 2rem;
  color: #fff;
`;
const ClickBox = styled.div`
  //   border: 1px solid red;
  width: 17rem;
  height: 4rem;
  margin-top: 28rem;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  font-size: 2rem;
  animation-name: ${alert};
  transform: translate(10px, 0);
  animation-iteration-count: infinite;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
`;
