import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={style.navigation}>
      <ul className={style.navigationList}>
        <li className={style.navigationItem}>
          <Link className={style.navigationLink} to={"/"}>
            Home
          </Link>
        </li>
        <li className={style.navigationItem}>
          <Link className={style.navigationLink} to={"/contacts"}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;