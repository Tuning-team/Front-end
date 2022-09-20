import { useLocation } from "react-router-dom";
import AddCollectionForm from "../addCollection/AddCollectionForm";

const EditCollectionWrap = () => {
  const location = useLocation();
  const id = location.state;
  console.log(id);
  return (
    <>
      <AddCollectionForm />
    </>
  );
};
export default EditCollectionWrap;
