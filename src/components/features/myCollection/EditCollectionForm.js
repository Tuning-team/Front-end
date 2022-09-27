import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  rememberData,
  deleteVideo,
} from "../../../redux/modules/collectionSlice";
import { getCategory } from "../../../redux/modules/categorySlice";
import useInputs from "../../hooks/useInput";
import { editCollection } from "../../../redux/modules/collectionSlice";
import Modal from "../../common/Modal";
import FormTitle from "./FormTitle";
import FormInput from "./FormInput";
import FormOption from "./FormOption";
import FormTextarea from "./FormTextarea";
import FormVideo from "./FormVideo";
import ToastNotification from "../../common/ToastNotification";

const EditCollectionForm = ({ data }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const categories = useSelector((state) => state.categorySlice.category.data);
  const addVideoList = useSelector(
    (state) => state.myCollectionSlice.videoList
  );
  const inputData = useSelector((state) => state.myCollectionSlice.editData);
  const [toastState, setToastState] = useState(false);
  //!마운트
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  //!useInput
  const [{ collectionTitle, description, category_id }, onChange] = useInputs({
    collectionTitle: inputData[0] || data[0],
    description: inputData[1] || data[1],
    category_id: inputData[2] || data[2],
  });
  //!컬렉션 추가
  const onClickHandler = (e) => {
    const collection_id = data[3];
    const videos = addVideoList.map((x) => x.id);
    const addData = { category_id, collectionTitle, description, videos };
    if (
      collectionTitle === "" ||
      description === "" ||
      addVideoList.length === 0 ||
      category_id === "0"
    ) {
      setModal(true);
    } else {
      dispatch(editCollection({ collection_id, addData, setToastState }));
      dispatch(rememberData([]));
      dispatch(deleteVideo("all"));
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
        title="컬렉션 수정하기"
        btn="수정하기"
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
      {toastState && (
        <ToastNotification setToastState={setToastState}>
          "수정이 완료되었습니다"
        </ToastNotification>
      )}
    </AddCollectionWrap>
  );
};

export default EditCollectionForm;
const AddCollectionWrap = styled.div`
  padding: 1.3rem 1.3rem 1.3rem 1rem;
  margin-bottom: 5.25rem;
  overflow: scroll;
  height: 100vh;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--color-background);
`;
