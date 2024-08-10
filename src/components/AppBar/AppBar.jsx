import { Link } from "react-router-dom";
import style from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { isLogined } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

function AppBar() {
  const isLoginedUser = useSelector(isLogined);

  return (
    <header className={style.header}>
      <Navigation />
      {isLoginedUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
