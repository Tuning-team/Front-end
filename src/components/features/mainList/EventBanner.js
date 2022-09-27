import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import event_banner from "../../../shared/svg/event_banner.png";
const EventBanner = () => {
  const nav = useNavigate();
  return (
    <Wrap onClick={() => nav("/event")}>
      <Img src={event_banner} />
    </Wrap>
  );
};
export default EventBanner;
const Wrap = styled.div`
  margin-top: 2.5rem;
  //   padding: 0.75rem 1rem;
  border-radius: 15px;
  //   background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 19.625rem;
  box-shadow: 5px 5px 15px 0 rgb(24 32 74 / 10%);
  //   height: 9.938rem;
  border-radius: 15px;
`;
