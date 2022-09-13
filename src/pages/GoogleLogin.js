import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { setCookie } from "../hooks/cookie";

const GoogleLogin = () => {
  const param = useParams();
  const nav = useNavigate();

  useEffect(() => {
    setCookie("token", param.token);
    nav("/");
  }, []);
};
export default GoogleLogin;
