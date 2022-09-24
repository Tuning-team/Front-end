import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postCollection,
  rememberData,
} from "../../../redux/modules/collectionSlice";
import { getCategory } from "../../../redux/modules/categorySlice";
import useInputs from "../../hooks/useInput";
import Modal from "../../common/Modal";
import FormTitle from "../myCollection/FormTitle";
import FormInput from "../myCollection/FormInput";
import FormOption from "../myCollection/FormOption";
import FormTextarea from "../myCollection/FormTextarea";
import FormVideo from "../myCollection/FormVideo";

const AddCollectionForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categorySlice.category.data);
  const addVideoList = useSelector(
    (state) => state.myCollectionSlice.videoList
  );
  const inputData = useSelector((state) => state.myCollectionSlice.editData);
  const [modal, setModal] = useState(false);
  // const [isDisabled, setDisabled] = useState(false);

  //!마운트, 언마운트시
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  //!useInput
  const [{ collectionTitle, description, category_id }, onChange, reset] =
    useInputs({
      collectionTitle: inputData[0] || "",
      description: inputData[1] || "",
      category_id: inputData[2] || "",
    });
  //!컬렉션 추가
  const onClickHandler = (e) => {
    const videos = addVideoList.map((x) => x.id);
    const addData = { category_id, collectionTitle, description, videos };
    if (Object.values(addData).every((x) => x == "")) {
      setModal(2);
    } else {
      setModal(3);
      // dispatch(postCollection(addData));
      // dispatch(rememberData([]));
    }
  };

  //!비디오 추가 페이지이동
  const addVideoHandler = () => {
    dispatch(rememberData([collectionTitle, description, category_id]));
    nav("/myCollection/add/search");
  };

  return (
    <AddCollectionWrap>
      <FormTitle
        onClickHandler={onClickHandler}
        title="컬렉션 만들기"
        btn="확인"
      />
      <Form>
        <FormInput onChange={onChange} collectionTitle={collectionTitle} />
        <FormOption
          onChange={onChange}
          category_id={category_id}
          categories={categories}
        />
        <FormTextarea onChange={onChange} description={description} />
        <FormVideo
          addVideoHandler={addVideoHandler}
          addVideoList={addVideoList}
        />
      </Form>
      {modal && (
        <Modal setModal={setModal} modal={modal}>
          모두 입력해주세요
        </Modal>
      )}
    </AddCollectionWrap>
  );
};
export default AddCollectionForm;
const AddCollectionWrap = styled.div``;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
