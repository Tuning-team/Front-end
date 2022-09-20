import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { editCollection } from "../../../redux/modules/collectionSlice";
import AddCollectionForm from "../addCollection/AddCollectionForm";

const EditCollectionWrap = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  //!수정된 데이터 전송
  const editHandler = () => {
    const collection_id = location.state;
    const data = [];
    dispatch(editCollection({ collection_id, data }));
  };

  return (
    <>
      <div onClick={editHandler}> 확인</div>
      <AddCollectionForm />
    </>
  );
};
export default EditCollectionWrap;
