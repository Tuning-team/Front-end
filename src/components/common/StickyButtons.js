import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UpIcon } from "../../shared/icon/24_ena_feedback.svg";
import { ReactComponent as MakeTuningIcon } from "../../shared/icon/ena_floating_make tuning_2.svg";
import { deleteVideo } from "../../redux/modules/collectionSlice";
import { useDispatch } from "react-redux";

const StickyButtons = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 피드백 이벤트 끝난 후 다시 들어감
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
        <UpIcon />
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
  position: sticky;
  z-index: 100;
  bottom: 5.75rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 0;
  gap: 0.5rem;
`;
const Btn = styled.div`
  margin-left: auto;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.23);
  text-align: center;
  background-color: #fff;
  & svg {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }
`;
const MakeTuningBtn = styled(Btn)`
  background-color: var(--color-primary);
  width: 5rem;
  border-radius: 23px;
  & svg {
    width: 4rem;
    height: 3rem;
  }
`;
