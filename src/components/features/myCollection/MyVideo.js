import styled from "styled-components";

const MyVideo = ({ src, videoNum }) => {
  return (
    <Wrapper>
      <Img src={src} alt="thumbnail" />
    </Wrapper>
  );
};
export default MyVideo;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 56.25%;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // z-index: 100;
  // width: 10.781rem;
  // height: 6.125rem;
  // left: 36vw;
  // display: flex;
  // align-items: center;
`;
