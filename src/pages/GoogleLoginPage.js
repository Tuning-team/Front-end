import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setCookie } from "../shared/cookie";

const GoogleLogin = () => {
  const param = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const expires = new Date();
    expires.setDate(Date.now() + 1000 * 60 * 60);
    setCookie("token", param.token, {
      path: "/",
      expires,
    });
    window.location.replace("/");
    nav("/");
  }, []);
};
export default GoogleLogin;
