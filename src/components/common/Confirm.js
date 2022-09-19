import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const submit = () => {
  confirmAlert({
    title: "Confirm to submit",
    message: "정말 삭제하시겠습니까?",
    buttons: [
      {
        label: "Yes",
        onClick: () => alert("Click Yes"),
      },
      {
        label: "No",
        onClick: () => alert("Click No"),
      },
    ],
  });
};
export default submit;
