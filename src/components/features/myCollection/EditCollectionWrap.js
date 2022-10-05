import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoList,
  deleteVideo,
} from "../../../redux/modules/collectionSlice";
import EditCollectionForm from "./form/EditCollectionForm";

const EditCollectionWrap = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.collectionSlice.data[0]);
  const videoData = useSelector(
    (state) => state.myCollectionSlice.editVideoList.data
  );
  const add = useSelector((state) => state.myCollectionSlice.videoList);
  //!키값 변경로직
  const videoList = videoData.map((list) => {
    return { id: list.videoId, title: list.videoTitle };
  });

  useEffect(() => {
    if (add?.length === 0) {
      dispatch(addVideoList(videoList));
    } else {
      dispatch(deleteVideo("all"));
      dispatch(addVideoList(videoList));
    }
  }, []);

  return (
    data && (
      <EditCollectionForm
        id={data._id}
        data={[
          data.collectionTitle,
          data.description,
          data.category_id[0],
          data._id,
        ]}
      />
    )
  );
};
export default EditCollectionWrap;
