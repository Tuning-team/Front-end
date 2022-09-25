import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideoList } from "../../../redux/modules/collectionSlice";
import EditCollectionForm from "./EditCollectionForm";

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
    if (add.length === 0) {
      dispatch(addVideoList(test));
    }
  }, []);

  return (
    <EditCollectionForm
      id={data?._id}
      data={[
        data?.collectionTitle,
        data?.description,
        data?.category_id[0],
        data?._id,
      ]}
    />
  );
};
export default EditCollectionWrap;
