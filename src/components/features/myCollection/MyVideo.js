import styled from "styled-components";
import icon_next_white from "../../../shared/icon/icon_next_white.svg";
const MyVideo = ({ src, videoNum }) => {
  return (
    <Wrapper>
      <ClickBox>
        <IconNext src={icon_next_white} alt="icon"></IconNext>
        <VideoNum>{videoNum}</VideoNum>
      </ClickBox>
      <Img src={src} alt="thumbnail" />
    </Wrapper>
  );
};
export default MyVideo;

const Wrapper = styled.div`
  position: relative;
  width: 11rem;
  height: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  cursor: pointer;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 11rem;
  height: 100%;
`;
const ClickBox = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 300;
`;
const IconNext = styled.img`
  width: 3rem;
  height: 1.5rem;
`;
const VideoNum = styled.span`
  color: #ffffff;
  font-size: 0.75rem;
`;
