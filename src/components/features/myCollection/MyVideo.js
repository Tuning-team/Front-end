import styled from "styled-components";

const MyVideo = ({ src, videoNum }) => {
  return <Img loading="lazy" src={src} alt="thumbnail" />;
};
export default MyVideo;
const Img = styled.img`
  width: 10.781rem;
  // height: 6.125rem;
  height:100%
  left: 36vw;
  display: flex;
  align-items: center;
`;
