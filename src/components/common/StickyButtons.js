import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UpIcon } from "../../shared/svg/24_ena_feedback.svg";
import { ReactComponent as MakeTuningIcon } from "../../shared/svg/ena_floating_make tuning.svg";
import { deleteVideo } from "../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";

const StickyButtons = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const ScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const goFeedback = () => {
    nav("/event");
  };

  return (
    <StickyContainer>
      <Btn onClick={goFeedback}>
        <UpIcon className="icon24" />
      </Btn>
      <MakeTuningBtn
        onClick={() => {
          dispatch(deleteVideo("all"));
          nav("/myCollection/add");
        }}
      >
        <MakeTuningIcon />
      </MakeTuningBtn>
    </StickyContainer>
  );
};
export default StickyButtons;
const StickyContainer = styled.div`
  border: 1px solid red;
  position: fixed;
  z-index: 100;
  bottom: 5.75rem;
  right: 1.25rem;
  /* margin-left: 85%; */
  /* width: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  gap: 0.5rem;
  * {
    border: 1px solid green;
  }
`;
const Btn = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.23);
  background-color: #fff;
  /* &:nth-child(2) {
    background-color: #572cff;
    margin-bottom: 0.5rem;
  } */
  & svg {
    box-sizing: border-box;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
  }
`;
const MakeTuningBtn = styled(Btn)`
  background-color: #572cff;
  width: 5rem;
  border-radius: 20px;
`;
