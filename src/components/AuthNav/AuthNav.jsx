import style from "./AuthNav.module.css";
import { Link } from "react-router-dom";

function AuthNav() {
  return (
    <div className={style.auth}>
      <ul className={style.authList}>
        <li className={style.authItem}>
          <Link to={"/register"} className={style.authLink}>
            Register
          </Link>
        </li>
        <li className={style.authItem}>
          <Link to={"/login"} className={style.authLink}>
            Log in
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AuthNav;