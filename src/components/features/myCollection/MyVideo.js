import styled from "styled-components";

const MyVideo = ({ src, videoNum }) => {
  return <Img src={src} alt="thumbnail" />;
};
export default MyVideo;
const Img = styled.img`
  width: 10.781rem;
  height: 6.125rem;
  left: 36vw;
  display: flex;
  align-items: center;
`;
