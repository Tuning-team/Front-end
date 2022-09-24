import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryCollection } from "../../../redux/modules/categorySlice";
import MyCollections from "../user/MyCollections";
import Frame from "../../../shared/svg/Frame.svg";
import icon_back_enabled from "../../../shared/svg/icon_back_enabled.svg";
import NoData from "../../common/NoData";

const CategoryWrap = () => {
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
        <TitleLogo src={Frame} alt="icon" />
        <TitleSubmit></TitleSubmit>
      </Title>
      <MyCollections title={title[0]?.categoryName || "오늘의"} state={data} />
      {/* {data?.length === 0 && <NoData />} */}
    </Wrap>
  );
};
export default CategoryWrap;
const Wrap = styled.div``;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%
  height: 3rem;
  padding:0.688rem 0 0.688rem
  background-color: #fff;
  border-bottom: 1px solid #EEEEF6;
`;
const IconBack = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const TitleLogo = styled.img``;
const TitleSubmit = styled.div`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adadad;
  margin: 0 3px 0 0;
`;
