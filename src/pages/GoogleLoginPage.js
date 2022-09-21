import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setCookie } from "../shared/cookie";

const GoogleLogin = () => {
  const param = useParams();

  useEffect(() => {
    const expires = new Date();
    expires.setDate(Date.now() + 1000 * 60 * 60);
    setCookie("token", param.token, {
      path: "/",
      expires,
    });
    window.location.replace("/");
  }, []);
};
export default GoogleLogin;
