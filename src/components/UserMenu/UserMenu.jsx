import { useDispatch, useSelector } from "react-redux";
import style from "./UserMenu.module.css";
import { getName } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

function UserMenu() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();
  const logOutUser = () => {
    dispatch(logOut());
  };

  return (
    <div className={style.wrapper}>
      <p className={style.text}>welcome, {userName} </p>
      <button type="button" className={style.button} onClick={logOutUser}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
