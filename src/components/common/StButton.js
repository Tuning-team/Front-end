import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import ScrollTop from "../../shared/ScrollTop";

const StButton = () => {
  const nav = useNavigate();
  const ScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Btn onClick={() => nav("/myCollection/add")} bottom="16%" color="purple">
        컬렉션
      </Btn>
      <Btn bottom="11%" color="pink" onClick={ScrollTop}>
        top
      </Btn>
    </>
  );
};
export default StButton;

const Btn = styled.div`
  position: fixed;
  font-size: 5px;
  border-radius: 50px;
  border: 1px solid;
  width: 25px;
  height: 25px;
  right: 33%;
  bottom: ${(props) => props.bottom};
  background-color: ${(props) => props.color};
`;
