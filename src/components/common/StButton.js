import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UpIcon } from "../../shared/svg/24_ena_floating_up.svg";
import { ReactComponent as MakeTuningIcon } from "../../shared/svg/ena_floating_make tuning.svg";

const StButton = () => {
  const nav = useNavigate();
  const ScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FloatingIconContainer>
      <Btn onClick={() => nav("/myCollection/add")}>
        <MakeTuningIcon />
      </Btn>
      <Btn onClick={ScrollTop}>
        <UpIcon />
      </Btn>
    </FloatingIconContainer>
  );
};
export default StButton;
const FloatingIconContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  z-index: 100;
  bottom: 5rem;
  margin-left: 85%;
`;
const Btn = styled.div`
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.23);
  background-color: #fff;
  &:nth-child(1) {
    background-color: #572cff;
    margin-bottom: 0.5rem;
  }
  & svg {
    box-sizing: border-box;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
  }
`;
