import styled from "styled-components";
import { getCookie } from "../../shared/cookie";
import icon_add from "../../shared/svg/plus.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NoData = (props) => {
  const nav = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [page, setPage] = useState(false);
  useEffect(() => {
    pathname === "/myPage" ? setPage(true) : setPage(false);
  }, [pathname]);

  return (
    <>
      {page ? (
        <Wrap>
          {props.title === "My" ? (
            <>
              <Icon
                src={icon_add}
                onClick={() =>
                  nav(!getCookie("token") ? "/login" : "/myCollection/add")
                }
              ></Icon>
              <A>내 튜닝 만들기</A>
            </>
          ) : (
            <A>해당하는 튜닝이 없습니다.</A>
          )}
        </Wrap>
      ) : (
        <Wrap>
          <A>컬렉션이 없습니다.</A>
        </Wrap>
      )}
    </>
  );
};
export default NoData;

const Wrap = styled.div`
  background-color: var(--color-background);
  width: 22rem;
  height: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const P = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  color: white;
`;
const A = styled.a`
  color: var(--color-disabled);
  margin-top: 2rem;
`;
const Icon = styled.img`
  margin-top: 3rem;
  width: 3rem;
  height: 3rem;
`;
