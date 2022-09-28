import React, { Children, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollection } from "../../../redux/modules/categorySlice";
import MyCollections from "../myCollection/MyCollections";
import Frame from "../../../shared/svg/logo_without_triangle.svg";
import icon_back_enabled from "../../../shared/svg/24_ena_back.svg";
import NoData from "../../common/NoData";

const CategoryWrap = ({ Children }) => {
  const param = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.categorySlice.categoryCollection.data
  );
  const categories = useSelector((state) => state.categorySlice.category.data);
  useEffect(() => {
    dispatch(getCategoryCollection(param.collection_id));
  }, [param.collection_id]);
  const title = categories.filter((x) => x._id === param.collection_id);

  return (
    <Wrap>
      <Title>
        <IconBack src={icon_back_enabled} alt="icon" onClick={() => nav(-1)} />
        <TitleLogo src={Frame} alt="icon" onClick={() => nav("/mainPage")} />
        <TitleSubmit>{Children}</TitleSubmit>
      </Title>
      <MyCollections title={title[0]?.categoryName || "오늘의"} state={data} />
      {/* {data?.length === 0 && <NoData />} */}
    </Wrap>
  );
};
export default CategoryWrap;
const Wrap = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
`;
const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  position: relative;
  background-color: white;
`;
const IconBack = styled.img`
  height: 2.5rem;
  width: 2.5rem;

  margin: 0.25rem 0 0.25rem 0.75rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const TitleLogo = styled.img`
  margin-top: 0.688rem;
  height: 1.625rem;
`;
const TitleSubmit = styled.div`
  font-size: 0.625rem;
  font-weight: 500;
  width: 2.5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.5px;
  color: #572cff;

  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`;
