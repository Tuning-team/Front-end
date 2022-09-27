import { Navigate } from "react-router-dom";
const PrivateRoute = ({ authenticated, component: Component }) => {
  return authenticated ? (
    Component
  ) : (
    <Navigate to="/mainPage" {...alert("로그인을 해주세요")} />
  );
};
export default PrivateRoute;
