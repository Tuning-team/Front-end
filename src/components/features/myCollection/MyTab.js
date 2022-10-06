import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const MyTab = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [tab, setTab] = useState(1);
  useEffect(() => {
    if (location.pathname === "/myPage/myCollection") {
      setTab(1);
    } else if (location.pathname === "/myPage/likedCollection") {
      setTab(2);
    } else if (location.pathname === "/myPage/keptCollection") {
      setTab(3);
    }
  }, [location]);

  return (
    <TabMenu tab={tab}>
      <div className="myCollection" onClick={() => nav("/myPage/myCollection")}>
        <span>내 튜닝</span>
      </div>
      <div
        className="likedCollection"
        onClick={() => nav("/myPage/likedCollection")}
      >
        <span>좋아요한 튜닝</span>
      </div>
      <div
        className="interestedCollection"
        onClick={() => nav("/myPage/keptCollection")}
      >
        <span>담아온 튜닝</span>
      </div>
    </TabMenu>
  );
};
export default MyTab;
const TabMenu = styled.div`
  display: flex;
  border-bottom: 0.235rem solid #ffffff;
  padding: 0 1rem;
  height: 2.5rem;
  border-top: 0.1rem solid #eaeaea;
  & > div {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .myCollection {
    box-sizing: content-box;
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 1 ? "var(--color-primary)" : "transparent")};
    color: ${(props) =>
      props.tab === 1 ? "var(--color-primary)" : "var(--color-disabled)"};
  }
  & .likedCollection {
    box-sizing: content-box;
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 2 ? "var(--color-primary)" : "transparent")};
    color: ${(props) =>
      props.tab === 2 ? "var(--color-primary)" : "var(--color-disabled)"};
  }
  & .interestedCollection {
    box-sizing: content-box;
    border-bottom: 0.235rem solid
      ${(props) => (props.tab === 3 ? "var(--color-primary)" : "transparent")};
    color: ${(props) =>
      props.tab === 3 ? "var(--color-primary)" : "var(--color-disabled)"};
  }

  & span {
    display: inline-block;
    font-size: 0.813rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
  }
`;
