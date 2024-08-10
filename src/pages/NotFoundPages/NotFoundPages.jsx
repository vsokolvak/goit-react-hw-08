import { Link } from "react-router-dom";
import style from "./NotFoundPages.module.css";

function NotFoundPages() {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Page not found</h3>
      <Link to={"/"} className={style.link}>
        {">>>>  Go Home  <<<<"}
      </Link>
    </div>
  );
}

export default NotFoundPages;