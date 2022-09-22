import styled from "styled-components";

const MyVideo = ({ src, videoNum }) => {
  return (
    <>
      <Img src={src} alt="thumbnail" />
      <div>{videoNum}</div>
    </>
  );
};
export default MyVideo;

const Img = styled.img`
  width: 12rem;
`;
