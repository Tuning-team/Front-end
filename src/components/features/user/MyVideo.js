import styled from "styled-components";

const MyVideo = ({ src, videoNum }) => {
  return <Img src={src} alt="thumbnail" />;
};
export default MyVideo;
const Img = styled.img`
  width: 12rem;
  left: 36vw;
  display: flex;
  align-items: center;
`;
