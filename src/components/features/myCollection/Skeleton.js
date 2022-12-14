import styled from "styled-components";

const Skeleton = () => {
  return (
    <Collection>
      <MyVideo />
      <InfoWrap />
    </Collection>
  );
};
export default Skeleton;

const Collection = styled.section`
  position: relative;
  display: flex;
  // width: 20.938rem;
  width: 100%;
  height: 7.375rem;
  background-color: #ffffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
  padding: 1rem;
`;

const InfoWrap = styled.div`
  height: 5rem;
  // width: 8rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.3rem 0 0 0.5rem;
  flex-direction: column;
  justify-content: space-between;
`;
const MyVideo = styled.div`
  // width: 10.781rem;
  height: 6.125rem;
  width: 100%;
  left: 36vw;
  display: flex;
  align-items: center;
  background-color: var(--color-background);
`;
