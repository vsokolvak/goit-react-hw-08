import { useSelector } from "react-redux";
import style from "./PrivateRout.module.css";
import { isLogined } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

function PrivateRout({ component, redirectTo }) {
  const restricted = useSelector(isLogined);

  return <>{!restricted ? <Navigate to={redirectTo} /> : component}</>;
}

export default PrivateRout;
