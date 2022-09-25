import { getCookie } from "./cookie";
const isLogin = () => !!getCookie("token");
export default isLogin;
