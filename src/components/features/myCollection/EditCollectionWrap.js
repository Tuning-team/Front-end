import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCollection } from "../../../redux/modules/collectionSlice";
import AddCollectionForm from "../addCollection/AddCollectionForm";
import {
  addVideoList,
  rememberData,
} from "../../../redux/modules/collectionSlice";
import { useNavigate } from "react-router-dom";

const EditCollectionWrap = () => {
  const nav = useNavigate();
  //todo 뒤로가기 안되게 하는 로직 짜야함.
  const dispatch = useDispatch();
  const data = useSelector((state) => state.collectionSlice.data[0]);
  //?리밋 있는데이터임
  const videoList = useSelector((state) => state.collectionSlice.videos);
  const add = useSelector((state) => state.myCollectionSlice.videoList);
  //!키값 변경로직
  const test = videoList.map((list) => {
    return { id: list.videoId, title: list.videoTitle };
  });

  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify([
        data.collectionTitle,
        data.description,
        data.category_id[0],
        data._id,
      ])
    );
    if (add.length === 0) {
      dispatch(addVideoList(test));
    }
  }, []);

  //!수정된 데이터 전송

  return (
    <>
      <AddCollectionForm
        btn="수정하기"
        id={data._id}
        title={data.collectionTitle}
      />
    </>
  );
};
export default EditCollectionWrap;
