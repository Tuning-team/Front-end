import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import event_banner from "../../../shared/images/event_banner.webp";
const EventBanner = () => {
  const nav = useNavigate();
  return (
    <Wrap onClick={() => nav("/event")}>
      <Img src={event_banner} loading="lazy" alt="튜닝 이벤트 배너" />
    </Wrap>
  );
};
export default EventBanner;
const Wrap = styled.div`
  margin-top: 1.25rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  max-width: 432px;
  box-shadow: 5px 5px 15px 0 rgb(24 32 74 / 10%);
  border-radius: 15px;
`;
