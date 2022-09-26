import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setCookie } from "../shared/cookie";

const GoogleLogin = () => {
  let now = new Date();
  let after1d = new Date();

  const param = useParams();

  useEffect(() => {
    after1d.setMinutes(now.getMinutes() + 60 * 24);
    setCookie("token", param.token, {
      path: "/",
      expires: after1d,
    });
    window.location.replace("/");
  }, []);
};
export default GoogleLogin;
